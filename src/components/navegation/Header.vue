<template>
  <header
    class="app-header d-flex align-center justify-between"
    :data-theme="isDark ? 'dark' : 'light'"
  >
    <!-- IZQUIERDA -->
    <div class="d-flex align-center">
    
      <!-- 2) Icono impresora -->
      <button class="icon-btn">
        <font-awesome-icon icon="print" />
      </button>

      <!-- 3) Icono vista de tabla -->
      <button class="icon-btn">
        <font-awesome-icon icon="table-cells-large" />
      </button>
    </div>

    <!-- DERECHA -->
    <div class="d-flex align-center">
      <!-- toggle tema -->
      <button class="icon-btn" @click="emit('toggle-theme')">
        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
      </button>

      <!-- campana + badge -->
      <div style="position: relative; margin-right: var(--space-sm)">
        <button class="icon-btn">
          <font-awesome-icon icon="bell" />
        </button>
        <span v-if="unreadCount" class="badge">{{ unreadCount }}</span>
      </div>

      <!-- info de usuario -->
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
const emit = defineEmits(['toggle-sidebar','toggle-theme'])
const props = defineProps({
  isDark:     Boolean,
  unreadCount:{ type:Number, default:4 },
  userName:   { type:String,  default:'Ricardo Yair Jiménez Martínez' },
  userRole:   { type:String,  default:'Super Administrador' },
  userAvatar: { type: String, default: 'https://placehold.co/40x40' }
})
</script>
