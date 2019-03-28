<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero__text">
        <h1 class="white--text text-xs-center display-2 font-weight-bold" v-html="$t('home.title')"></h1>
      </div>
      <div class="arrow" @click="$vuetify.goTo(target,options)"></div>
    </section>

    <!-- TEPPANYAKI PARRALAX -->
    <v-container fluid pa-0 alt="Teppanyaki definition">
      <v-parallax height="400" :src="require('@/assets/images/teppan.jpg')" alt="Teppan">
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex mt-5 xs12>
            <h1 class="display-2 black--text text-xs-center font-weight-bold"
              :class="{'mt-5': $vuetify.breakpoint.lgAndUp}" id="first">{{ $t('home.section1') }}</h1>
          </v-flex>
          <v-flex sm6 md5 lg4 mb-5>
            <h5 class="subheading black--text mb-5 pa-2">{{ $t('home.subsection1') }}</h5>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-container>

    <!-- RESTAURANT PROMOTION SECTION -->
    <v-container alt="Restaurant promotion" mt-5>

      <!-- Social Dining -->
      <v-layout row align-center justify-center fill-height wrap>
        <v-flex xs12 lg5>
          <h2 class="display-2 text-xs-center font-weight-bold" v-html="$t('home.section2')"></h2>
          <v-divider class="red lighten-3 hidden-lg-and-up my-1"></v-divider>
          <h5 class="subheading pa-3" :class="{'mt-3': $vuetify.breakpoint.lgndUp}" v-html="$t('home.subsection2')">
          </h5>
        </v-flex>
        <v-flex xs12 lg5>
          <v-img :src="require('@/assets/images/dining-medium.jpg')" contain alt="dining" max-height="472"></v-img>
        </v-flex>
      </v-layout>

      <!-- Japanese Steak -->
      <v-layout row align-center justify-center fill-height wrap mt-5>
        <v-flex xs12 lg5 order-lg2>
          <h2 class="display-2 text-xs-center font-weight-bold" v-html="$t('home.section3')"></h2>
          <v-divider class="red lighten-3 hidden-lg-and-up"></v-divider>
          <h6 class="subheading pa-3" :class="{'mt-3': $vuetify.breakpoint.lgndUp}" v-html="$t('home.subsection3')">
          </h6>
        </v-flex>
        <v-flex xs12 lg5 order-lg1>
          <v-img :src="require('@/assets/images/steak-medium.jpg')" contain alt="steak" max-height="472"></v-img>
        </v-flex>
      </v-layout>

      <!-- Unique Chef -->
      <v-layout row align-center justify-center fill-height wrap mt-5>
        <v-flex xs12 lg5>
          <h2 class="display-2 text-xs-center font-weight-bold" v-html="$t('home.section4')"></h2>
          <v-divider class="red lighten-3 hidden-lg-and-up"></v-divider>
          <h5 class="subheading pa-3" :class="{'mt-3': $vuetify.breakpoint.lgndUp}">{{ $t('home.subsection4') }}</h5>
        </v-flex>
        <v-flex xs12 lg5>
          <v-img :src="require('@/assets/images/chef-medium.jpg')" contain alt="chef" max-height="472"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- GALLERY -->
    <v-container alt="Gallery" mt-4 fluid pa-0>
      <v-layout wrap>
        <v-flex xs12 lg6>
          <v-img :src="require('@/assets/images/gallery-dining.jpg')" alt="dining gallery" contain></v-img>
        </v-flex>
        <v-flex xs12 lg6>
          <v-img :src="require('@/assets/images/gallery-fire.jpg')" alt="fire gallery" contain></v-img>
        </v-flex>
        <v-flex xs12 lg6>
          <v-img :src="require('@/assets/images/gallery-chef.jpg')" contain alt="chef gallery"></v-img>
        </v-flex>
        <v-flex xs12 lg6>
          <v-img :src="require('@/assets/images/gallery-tables.jpg')" contain alt="tables gallery"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- CTA -->
    <div class="text-xs-center pt-5 pb-3 black">
      <v-btn class="font-weight-bold" round large :to="$i18n.path('reservations')" :ripple="{ class: 'orange--text' }"
        nuxt>
        {{ $t('home.button')
        }}
      </v-btn>
    </div>
  </div>
</template>

<script>
  import * as easings from "vuetify/es5/util/easing-patterns";
  export default {
    data() {
      return {
        type: "selector",
        number: 650,
        selector: "#first",
        duration: 1000,
        offset: 0,
        easing: "easeInOutCubic",
        easings: Object.keys(easings)
      };
    },
    computed: {
      target() {
        const value = this[this.type];
        if (!isNaN(value)) return Number(value);
        else return value;
      },
      options() {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing
        };
      }
    }
  };

</script>

<style lang="scss" scoped>
  .hero {
    background-image: url("~assets/images/hero-medium.jpg");
    background-size: cover;
    background-position: 30% 0;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: calc(100vh - 50px);
    justify-content: center;
    align-items: center;

    &__text {
      display: flex;
      height: inherit;
      align-items: center;
    }
  }

  .arrow {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
    background-size: contain;
    padding-bottom: 50px;

  }

</style>
