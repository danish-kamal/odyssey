<template>
  <div>{{product}}</div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['items'],
  data: () => ({
    product: "Sockx"
  })
}
</script>
