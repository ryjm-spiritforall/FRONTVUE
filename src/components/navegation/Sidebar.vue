<template>
  <aside 
    :class="['app-sidebar', { collapsed: !pinned }]"
    @mouseenter="hovering = true" 
    @mouseleave="hovering = false"
  >
    <button class="pin-btn" @click="emit('toggle-pin')">
      <font-awesome-icon :icon="pinned ? 'lock' : 'unlock'" />
    </button>

    <ul class="sidebar-list">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home" />
          <span class="label">Inicio</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="info-circle" />
          <span class="label">Acerca</span>
        </router-link>
      </li>

      <!-- 4. Itera sobre tus menús -->
      <li 
        v-for="menu in menus" 
        :key="menu.key"
        class="has-submenu" 
        :class="{ open: open[menu.key] }"
      >
        <div 
          class="submenu-header" 
          @click="toggleSubmenu(menu.key)"
        >
          <font-awesome-icon :icon="menu.icon" class="parent-icon" />
          <span class="label">{{ menu.label }}</span>
          <font-awesome-icon 
            :icon="open[menu.key] ? 'chevron-down' : 'chevron-right'"
            class="chevron-icon"
          />
        </div>

        <ul 
          class="submenu-list"
          v-show="open[menu.key] && (pinned || hovering)"
        >
          <li v-for="item in menu.items" :key="item.name">
            <router-link :to="item.to">
              <span class="label">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- Ítem final fijo -->
      <li>
        <router-link to="/contact">
          <font-awesome-icon icon="envelope" />
          <span class="label">Contacto</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>




<script setup>
import { ref, reactive } from 'vue';

// Prop / emit de pin & hover
const props    = defineProps({ pinned: Boolean });
const emit     = defineEmits(['toggle-pin']);
const hovering = ref(false);

// 2. Define todos tus menús aquí:
const menus = [
  {
    key:   'catalogos',
    icon:  'folder-open',
    label: 'Catálogos',
    items: [
      { name: 'categorias',       label: 'Categorías',         to: '/catalogos/categorias' },
      { name: 'claves-retencion', label: 'Claves de retención', to: '/catalogos/claves-retencion' },
      { name: 'formas-pago',      label: 'Formas de pago',     to: '/catalogos/formas-pago' },
    ],
  },
  {
    key:   'operaciones',
    icon:  'folder-open',
    label: 'Operaciones',
    items: [
      { name: 'aduanas',           label: 'Aduanas',           to: '/operaciones/aduanas' },
      { name: 'agentes-aduanales', label: 'Agentes aduanales', to: '/operaciones/agentes-aduanales' },
      { name: 'almacenes',         label: 'Almacenes',         to: '/operaciones/almacenes' },
    ],
  },
  // agrega más menús simplemente copiando este bloque
];

// 3. Inicializa el objeto `open` con todas las keys en false
const open = reactive(
  Object.fromEntries(menus.map(menu => [menu.key, false]))
);

// Función de toggle genérica
function toggleSubmenu(key) {
  open[key] = !open[key];
}
</script>
