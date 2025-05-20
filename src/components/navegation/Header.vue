<template>
  <header
    class="app-header d-flex align-center justify-between"
    :data-theme="isDark ? 'dark' : 'light'"
  >
    <!-- IZQUIERDA -->
    <div class="d-flex align-center">
      <!-- 1) Botón “hamburger” siempre visible en móvil y escritorio -->
      <button
        class="icon-btn hamburger"
        @click="emit('toggle-sidebar')"
      >
        <font-awesome-icon icon="bars" />
      </button>

      <!-- 2) Botones de imprimir y tabla, ocultos en móvil -->
      <button
        class="icon-btn print-btn"
        @click="emit('print')"
      >
        <font-awesome-icon icon="print" />
      </button>
      <button
        class="icon-btn table-btn"
        @click="emit('toggle-table')"
      >
        <font-awesome-icon icon="table-cells-large" />
      </button>
    </div>

    <!-- DERECHA -->
    <div class="d-flex align-center">
      <!-- 3) Toggle tema -->
      <button
        class="icon-btn theme-toggle"
        @click="emit('toggle-theme')"
      >
        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
      </button>

      <!-- 4) Campana + badge -->
      <div
        class="notifications-btn"
        style="position: relative; margin-right: var(--space-2)"
      >
        <button class="icon-btn">
          <font-awesome-icon icon="bell" />
        </button>
        <span v-if="unreadCount" class="badge">{{ unreadCount }}</span>
      </div>

      <!-- 5) Avatar -->
      <div class="avatar-wrapper">
        <img :src="userAvatar" alt="Avatar" class="avatar" />
        <span class="status-indicator"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits([
  'toggle-sidebar',   // dispara la apertura/cierre de la sidebar
  'toggle-theme',     // cambia light/dark
  'print',            // evento de imprimir
  'toggle-table'      // evento para vista de tabla
])

const props = defineProps({
  isDark:      Boolean,
  unreadCount: { type: Number,  default: 4 },
  userAvatar:  { type: String,  default: 'https://placehold.co/40x40' }
})
</script>
