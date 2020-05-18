<style lang="less">
.toc {
  z-index: 1000;
  position: fixed;
  top: 100px;
  right: 0;
  margin: auto 2rem;
  ul {
    list-style-type: none;
  }
}
</style>
<template>
  <div class="toc">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Toc'
}
</script>