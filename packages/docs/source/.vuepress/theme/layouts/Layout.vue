<template>
  <div>
    <Header
      :items="HeaderItems"
    >
      <template #top>
        <slot name="Header-top" />
      </template>
      <template #bottom>
        <slot name="Header-bottom" />
      </template>
    </Header>
    <main class="odo-main">
      <article class="odo-article">
        <Content />
      </article>
    </main>
  </div>
</template>


<script>
import { resolveSidebarItems } from '../utils'

export default {
  components: {
    Header: () => import('../components/Header.vue'),
  },
  computed: {
    HeaderItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  }
}
</script>
