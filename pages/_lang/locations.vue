<template>
  <v-app>
    <v-container alt="Location section" mt-5 fluid>
      <h2 class="mt-3">{{ $t('location.title') }}</h2>
      <v-layout justify-space-around>
        <h4 class="mt-3 body-2" v-html="$t('location.day1')"></h4>
        <h4 class="mt-3 body-2" v-html="$t('location.day2')"></h4>
        <h4 class="mt-3 body-2" v-html="$t('location.day3')"></h4>
      </v-layout>

      <!-- TOYO MONTREAL -->
      <v-layout mt-5 align-center justify-center>
        <v-flex xs12 lg6 wrap>
          <v-card
            href="https://www.google.com/maps/place/Toyo+Japanese+Steakhouse/@45.4786091,-73.6053623,11z/data=!4m8!1m2!2m1!1stoyo+steakhouse!3m4!1s0x4cc91a404d0d329f:0x333a3afcb67249f4!8m2!3d45.4994559!4d-73.5777483"
          >
            <v-img
              :src="require('@/assets/images/toyomontreal.jpg')"
              class="mt-3 mb-3"
              contain
              alt="toyo montreal"
            ></v-img>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center text-xs-center>
        <h3 v-html="$t('location.montreal')"></h3>
      </v-layout>

      <!-- TOYO LAVAL -->
      <v-layout class="mt-4" align-center justify-center wrap>
        <v-flex xs12 lg6>
          <v-card
            href="https://www.google.com/maps/place/Toyo+Grillades+A+La+Japonaise/@45.5753648,-73.7955398,13z/data=!4m5!3m4!1s0x4cc923b1ce17045b:0x378c3b771f2fe4bd!8m2!3d45.5521534!4d-73.7470872"
          >
            <v-img
              :src="require('@/assets/images/toyolaval.jpg')"
              class="mt-3 mb-3"
              contain
              alt="toyo laval"
            ></v-img>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center text-xs-center>
        <h3 v-html="$t('location.laval')"></h3>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
</style>