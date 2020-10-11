<style lang="less">
  .category-title {
    padding: 40px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 13px;
    color: rgba(0,0,0,.45);
    line-height: 1.5715;
    &::after {
      position: relative;
      top: 12px;
      display: block;
      width: calc(100% - 20px);
      height: 1px;
      background: #f0f0f0;
      content: '';
    }
  }
</style>

<template>
  <div class="category-title">
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>