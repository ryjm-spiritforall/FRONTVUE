<template>
  <div class="layout">
    <Header
      :is-dark="isDark"
      @toggle-sidebar="toggleSidebar"
      @toggle-theme="toggleTheme"
    />
    <div class="main">
      <Sidebar
        :open="sidebarOpen"
        :pinned="sidebarPinned"
        @toggle-pin="togglePin"
      />
      <div :class="['content', { shifted: sidebarOpen || sidebarPinned }]">
        <router-view />
      </div>
    </div>
   <Footer />

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Header from '../components/navegation/Header.vue'
import Sidebar from '../components/navegation/Sidebar.vue'
import Footer from '../components/navegation/Footer.vue'

const sidebarOpen = ref(false)
const sidebarPinned = ref(false)
const theme = ref(localStorage.getItem('theme') || 'light')
const isDark = computed(() => theme.value === 'dark')

const toggleSidebar = () => {
  if (!sidebarPinned.value) sidebarOpen.value = !sidebarOpen.value
}
const togglePin = () => {
  sidebarPinned.value = !sidebarPinned.value
  if (sidebarPinned.value) sidebarOpen.value = true
}
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watch(theme, (val) => {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('theme', val)
})
watch(sidebarPinned, (pinned) => {
  if (!pinned) sidebarOpen.value = false
})
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  display: flex;
  flex: 1;
  margin-top: 56px;
}
.content {
  flex: 1;
  padding: var(--space-md);
  overflow-y: auto;
  transition: margin-left var(--transition-fast);
}
.content.shifted {
  margin-left: 240px;
}
</style>
