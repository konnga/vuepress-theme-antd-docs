<template>
    <div v-if="data.footer" class="footer">
      <div v-if="data.footerWrap && data.footerWrap.length" class="footer-container">
        <a-row :gutter="{ md: 0,lg:32 }" type="flex" justify="space-around" class="add-bottom">
          <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" v-for="(footerWrap, index) in data.footerWrap" :key="index">
            <div>
              <h2>{{ footerWrap.headline }}</h2>
              <div class="footer-item" v-for="(item, index) in footerWrap.items" :key="index">
                <a :href="item.link" target="_blank" v-if="item.title && item.title !== null">
                  {{ item.title }}
                </a>
                <span class="footer-item-separator" v-if="item.details && item.details !== null">-</span>
                <span class="footer-item-description" v-if="item.details && item.details !== null">{{
                  item.details
                }}</span>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div :class="{ 'footer-divider': isDivider, 'footer-bottom': true }">{{ data.footer }}</div>
    </div>
</template>

<script>

export default {
  name: 'PageFooter', 
  data() {
    return {
      isDivider: false
    }
  },
  mounted() {
    if (this.data.footerWrap && this.data.footerWrap.length) {
      this.isDivider = true
    }
  },
computed: {
    data() {
      return this.$page.frontmatter
    },
    footerColumn() {
      if (this.data.footerWrap && this.data.footerWrap.length) {
        if (this.data.footerColumn !== null || this.data.footerColumn > 0) {
          if (this.data.footerColumn > 4) {
            console.error('The footer column supports a maximum of 4 columns')
            return 4
          } else {
            let _footerColumn = this.data.footerColumn
            _footerColumn = 24 / _footerColumn
            return _footerColumn
          }
        } else {
          console.error('footerColumn needs to be set and cannot be 0 or empty')
        }
      }
    }
  }
}

</script>

<style lang="less">
@import '../styles/palette.less';
@import "../styles/wrapper.less";


.footer {
  width: 100%;
  clear: both;
  font-size: .875rem;
  margin-top: 18px;
  background-color: #000;
  color: rgba(255, 255, 255, 0.4);
  .footer-container {
    max-width: 1100px;
    padding: 5rem 0;
    margin: 0 auto;

    h2 {
      position: relative;
      margin: 0 auto 1.5rem;
      padding: 0;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
      text-align: left;
    }
    .add-bottom{
      > div{
        > div{
          margin-bottom: 1.875rem;
        }
      }
    }

    .footer-item {
      margin: 0.75rem 0;
      a {
        color: #fff;
      }
      a:hover {
        color: @accentColor;
      }
      .footer-item-separator {
        margin: 0 0.3em;
      }
    }
  }
  .footer-bottom {
    max-width: 1200px;
    text-align: center;
    padding: 16px 0;
    margin: 0 auto;
    line-height: 32px;
    overflow: hidden;
    font-size: 16px;
    font-variant: tabular-nums;

    &.footer-divider {
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
