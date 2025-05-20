<template>
  <header
    class="app-header d-flex align-center justify-between"
    :data-theme="isDark ? 'dark' : 'light'"
  >
    <!-- IZQUIERDA -->
    <div class="d-flex align-center">
      <!-- 1) Hamburger -->
      <button
        class="icon-btn hamburger"
        @click="emit('toggle-sidebar')"
      >
        <font-awesome-icon icon="bars" />
      </button>

      <!-- 2) Botón imprimir -->
      <button
        class="icon-btn print-btn"
        @click="emit('print')"
      >
        <font-awesome-icon icon="print" />
      </button>

      <!-- 3) Botón vista de tabla -->
      <button
        class="icon-btn table-btn"
        @click="emit('toggle-table')"
      >
        <font-awesome-icon icon="table-cells-large" />
      </button>
    </div>

    <!-- DERECHA -->
    <div class="d-flex align-center">
      <!-- 4) Toggle tema -->
      <button
        class="icon-btn theme-toggle"
        @click="emit('toggle-theme')"
      >
        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
      </button>

      <!-- 5) Campana + badge -->
      <div class="notifications-btn">
        <button class="icon-btn">
          <font-awesome-icon icon="bell" />
        </button>
        <span v-if="unreadCount" class="badge">{{ unreadCount }}</span>
      </div>

      <!-- 6) Info de usuario -->
      <div class="user-info">
        <div class="user-text">
          <span class="user-name">{{ userName }}</span>
          <span class="user-role">{{ userRole }}</span>
        </div>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt="Avatar" class="avatar" />
          <span class="status-indicator"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits([
  'toggle-sidebar',
  'toggle-theme',
  'print',
  'toggle-table',
])

const props = defineProps({
  isDark:      Boolean,
  unreadCount: { type: Number, default: 4 },
  userName:    { type: String, default: 'Ricardo Yair Jiménez Martínez' },
  userRole:    { type: String, default: 'Super Administrador' },
  userAvatar:  { type: String, default: 'https://placehold.co/40x40' },
})
</script>

