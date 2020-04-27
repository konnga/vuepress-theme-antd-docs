<template>
  <main class="page">
    
    <slot name="top" />
    <Toc>
      <Content slot-key="toc"/>
    </Toc>
    <Content class="theme-antdocs-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <PageFooter />
  </main>
</template>

<script>
import Toc from '@theme/components/toc.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import PageFooter from '@theme/components/PageFooter.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav, PageFooter, Toc },
  props: ['sidebarItems']
}
</script>

<style lang="less">
@import '../styles/palette.less';
@import "../styles/wrapper.less";
.page {
  display: block;
}
@media (max-width: @MQMobile) {
  .page {
    margin-top: -@navbarHeight;
  }
}
</style>
