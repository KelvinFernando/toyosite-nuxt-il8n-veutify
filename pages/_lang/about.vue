<template>
  <v-app>
    <v-container alt=" About section" mt-5 fluid>
      <v-layout align-center justify-center row wrap>
        <v-flex mt-3 xs12>
          <h1 class="text-xs-center display-2 font-weight-bold" v-html="$t('about.title')"></h1>
        </v-flex>
        <v-flex xs10 lg5 py-4>
          <v-img :src="require('@/assets/images/restaurant.jpg')" alt="restaurant" contain></v-img>
        </v-flex>
        <v-flex lg8>
          <h4 v-html="$t('about.introduction')"></h4>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
</style>