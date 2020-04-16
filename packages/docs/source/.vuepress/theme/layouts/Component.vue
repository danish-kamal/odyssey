<template>
  <div>
    <Sidebar
      :items="sidebarItems"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <main class="layout-component">
      <Content />
    </main>
  </div>
</template>


<script>
import { resolveSidebarItems } from '../utils'

export default {
  components: {
    Sidebar: () => import('../components/Sidebar.vue'),
    computed: {
      sidebarItems () {
        return ['foo', 'bar']
      },
    }
  },
}
</script>
