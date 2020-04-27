<style scoped>
.toc {
  z-index: 1000;
  position: fixed;
  top: 100px;
  right: 0;
  margin: auto 2rem;
}
.toc ul {
  list-style-type: none;
}
</style>
<template>
  <div class="toc">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'toc'
}
</script>