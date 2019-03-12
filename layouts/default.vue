<template>
  <v-app light>
    <!-- NAVBAR -->
    <v-navigation-drawer
      v-model="drawer"
      width="200"
      height="100vh"
      fixed
      temporary
      app
      :clipped="clipped"
    >
      <v-list two-line>
        <v-list-tile
          active-class="tabred"
          :ripple="{ class:'orange--text' }"
          v-for="(item, i) in items"
          :to="$i18n.path(item.to)"
          :key="i"
          router
          nuxt
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(item.title)" class="title"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-btn
          flat
          v-if="$i18n.locale === 'en'"
          :to="`/fr` + $route.fullPath"
          nuxt
          class="title pa-2"
        >
          {{
          $t('links.french') }}
        </v-btn>
        <v-btn flat v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" nuxt class="title pa-2">
          {{
          $t('links.english') }}
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <!-- TOOLBAR -->
    <v-toolbar dark app scroll-off-screen color="black" clipped-left fixed height="72">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <nuxt-link to="/">
        <img src="~assets/images/toyo.svg" alt="toyo" class="nav__logo hidden-sm-and-down">
      </nuxt-link>
      <v-spacer></v-spacer>
      <img src="~assets/images/toyo.svg" alt="toyo" class="nav__logo--small hidden-md-and-up">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          exact-active-class="tabred"
          active-class="tabred"
          flat
          :to="$i18n.path('')"
          exact
          nuxt
          :ripple="{ class: 'orange--text' }"
        >
          {{
          $t('links.home') }}
        </v-btn>
        <v-btn
          flat
          exact-active-class="tabred"
          active-class="tabred"
          :to="$i18n.path('menu')"
          nuxt
          :ripple="{ class: 'orange--text' }"
        >Menu</v-btn>
        <v-btn
          flat
          exact-active-class="tabred"
          active-class="tabred"
          :to="$i18n.path('locations')"
          nuxt
          :ripple="{ class: 'orange--text' }"
        >
          {{
          $t('links.location') }}
        </v-btn>
        <v-btn
          flat
          exact-active-class="tabred"
          active-class="tabred"
          :to="$i18n.path('about')"
          nuxt
          :ripple="{ class: 'orange--text' }"
        >
          {{
          $t('links.about') }}
        </v-btn>
        <v-btn
          flat
          exact-active-class="tabred"
          active-class="tabred"
          :to="$i18n.path('reservations')"
          nuxt
          :ripple="{ class: 'orange--text' }"
        >
          {{
          $t('links.reservation') }}
        </v-btn>
        <v-btn
          flat
          v-if="$i18n.locale === 'en'"
          :to="`/fr` + $route.fullPath"
          nuxt
        >{{ $t('links.french') }}</v-btn>
        <v-btn
          flat
          v-else
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          nuxt
        >{{ $t('links.english') }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nuxt/>

    <!-- FOOTER -->
    <v-footer height="auto" color="black">
      <v-layout justify-center row wrap>
        <v-flex white--text xs12 py-4 class="body-2 grey--text text--lighten-1 text-xs-center">
          Copyright &copy; {{ new Date().getFullYear() }} Toyo Japanese Steak House.
          <br>Created by:
          <a
            class="body-2 grey--text text--lighten-1"
            href="http://kelvinfernando.com/"
          >Kelvin Fernando</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: "links.home",
          to: ""
        },
        {
          title: "links.menu",
          to: "menu"
        },
        {
          title: "links.location",
          to: "locations"
        },
        {
          title: "links.about",
          to: "about"
        },
        {
          title: "links.reservation",
          to: "reservations"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.nav__logo {
  margin-top: 6px;
  height: 62px;
}

.nav__logo--small {
  height: 62px;
}

.tabred {
  color: red !important;
}
</style>
