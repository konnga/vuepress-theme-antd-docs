<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('wisdom-ui/lib/hello-world/index').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>