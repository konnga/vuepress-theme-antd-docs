<template>
  <div>
    <main class="home" aria-labelledby="main-title">
      <header class="hero">
        <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" class="hero-logo"/>

        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || 'Hello' }}
        </h1>

        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <a-button type="primary" shape="round" size="large" ghost v-if="data.actionText && data.actionLink">
          <a v-if="isExtlink(data.actionLink)" :href="link(data.actionLink)" target="_blank">
            {{ data.actionText }}
          </a>
          <RouterLink v-else :to="link(data.actionLink)">
            {{ data.actionText }}
          </RouterLink>
        </a-button>
        <a-button type="primary" shape="round" size="large" ghost v-if="data.preactionText && data.preactionLink" class="pre-btn">
          <a v-if="isExtlink(data.preactionLink)" :href="link(data.preactionLink)" target="_blank">
            {{ data.preactionText }}
          </a>
          <RouterLink v-else :to="link(data.preactionLink)">
            {{ data.preactionText }}
          </RouterLink>
        </a-button>
      </header>

      <Content class="theme-antdocs-content custom" />
    </main>

    <main class="content">
      <div v-if="data.features && data.features.length" class="features">
        <div v-for="(feature, index) in data.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <div :class="[feature.code ? feature.code : '']">{{ feature.details }}</div>
        </div>
      </div>
    </main>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '@theme/components/PageFooter.vue'
import { ensureExt } from '../util'

export default {
  name: 'Home',
  components: {
    PageFooter,
  },

  data() {
    return {
      isDivider: false
    }
  },
  methods:{
    isExtlink(path) {
      const Reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
      return Reg.test(path)
    },
    link(url) {
      url = typeof url === 'undefined' ? '' : url
      let _url = ensureExt(url)
      _url = _url.length === 5 && _url === '.html' ? '' : _url
      return _url
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
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
  }
}
</script>

<style lang="less">
@import '../styles/palette.less';

.home {
  padding: @navbarHeight 2rem;
  margin: 0px auto;
  display: block;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  background: url('../assets/bg.svg');
  background-size: cover;

  .hero {
    text-align: center;

    .hero-logo {
      max-width: 100%;
      max-height: 180px;
      display: block;
      margin: 5rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1,
    .description,
    .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.5rem;
      line-height: 1.3;
      color: #949494;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: @accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken(@accentColor, 10%);

      &:hover {
        background-color: lighten(@accentColor, 10%);
      }
    }
  }
}

.content {
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1256px;
  margin: 0px auto;

  .feature {
    width: 100%;
    margin-bottom: 20px;
    h2 {
      font-weight: lighter;
      font-size: 30px;
      color: lighten(@textColor, 10%);
    }

    div {
      color: lighten(@textColor, 25%);
      margin-top: 0.5rem;
    }

    .design {
      position: relative;
      min-height: 278px;
      padding: 32px 40px;
      color: #697b8c;
      line-height: 2;
      overflow: hidden;
      background-size: cover;
      background: url('../assets/design.png')
    }
  }

  .ant-btn-round.ant-btn-lg {
    font-size: 18px;
    height: 3rem;
    padding: 0 1.5rem;
  }
  .pre-btn{
    margin-left: .5rem;
  }
}

.footer {
  width: 100%;
  clear: both;
  font-size: .875rem;
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

@media (max-width: @MQMobile) {
  .home {
    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }
    }
    
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 1rem;
      margin: .5rem auto;
      text-align: center;
    }
  }
  .footer-container {
    text-align: center;

    h2 {
      text-align: center !important;
    }
    .add-bottom{
      > div{
        &:last-child{
          > div{
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media (max-width: @MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.8rem;

    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
