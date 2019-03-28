<template>
  <v-app>
    <v-container mt-1 alt="Menu section">
      <v-tabs v-model="active" slider-color="red" class="mt-5">
        <!-- DINNER -->
        <v-tab>{{ $t('menu.dinner') }}</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- ENTREES -->
              <h2 class="mt-3 text-xs-center red--text">{{ $t('menu.entrees') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.hibachishrimps') }}</h5>
              <h5 class="text-xs-center font-weight-thin">16</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">4</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">14</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">4</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">5</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.icecream') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">2</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">5</h5>

              <!-- FULL COURSE DINNER -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.fulldinner') }}</h2>
              <v-layout row align-center justify-center fill-height wrap>
                <v-flex :class="{'xs5': $vuetify.breakpoint.lgAndUp}">
                  <p class="mt-2">{{ $t('menu.fulldinnerdesc') }}</p>
                </v-flex>
              </v-layout>

              <!-- Main course -->
              <v-layout fill-height justify-center wrap row>
                <v-flex :class="{'xs2': $vuetify.breakpoint.mdAndUp}" shrink>
                  <h4 class="mt-2 text-xs-center red--text">{{ $t('menu.maincourse') }}</h4>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">27</h5>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.scallops') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">35</h5>
                  <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
                  <h5 class="text-xs-center font-weight-thin">27</h5>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.sirloin') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">33</h5>
                  <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.toyospecial')"></h5>
                  <h5 class="text-xs-center font-weight-thin">38</h5>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.filet') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">39</h5>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.lobster') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">43</h5>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.jumboshrimps') }}</h5>
                  <h5 class="text-xs-center font-weight-thin">39</h5>
                  <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.vegetarian')"></h5>
                  <h5 class="text-xs-center font-weight-thin">18</h5>
                </v-flex>

                <!-- Included appetizers -->
                <v-flex :class="{'xs3': $vuetify.breakpoint.mdAndUp}" shrink>
                  <h4 class="mt-2 text-xs-center red--text">{{ $t('menu.appetizers') }}</h4>
                  <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.soup') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.salad') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.vegetables') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.steamrice') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.tea') }}</h5>
                  <h5 class="body-2 text-xs-center">{{ $t('menu.icecream') }}</h5>
                </v-flex>
              </v-layout>


              <!-- Combo dishes -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.combodishes') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.c1') }}</h5>
              <h5 class="text-xs-center font-weight-thin">33</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.c2') }}</h5>
              <h5 class="text-xs-center font-weight-thin">44</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.c3') }}</h5>
              <h5 class="text-xs-center font-weight-thin">37</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.c4') }}</h5>
              <h5 class="text-xs-center font-weight-thin">55</h5>
              <!-- Extras -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.extras') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.6shrimps')"></h5>
              <h5 class="text-xs-center font-weight-thin">9</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.lobster') }}</h5>
              <h5 class="text-xs-center font-weight-thin">25</h5>
              <h5 class="mt-2 body-2 text-xs-center">Bonsai Scallops</h5>
              <h5 class="text-xs-center font-weight-thin">10</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center font-weight-thin">3</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center font-weight-thin">8</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center font-weight-thin">3</h5>

              <!-- KIDS MEAL -->
              <h2 class="mt-4 text-xs-center red--text" v-html="$t('menu.kidsmeal')"></h2>
              <!-- Main Course -->
              <h4 class="mt-3 text-xs-center red--text">{{ $t('menu.maincourse') }}</h4>
              <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
              <h5 class="text-xs-center font-weight-thin">13</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center font-weight-thin">13</h5>

              <!-- Included appetizers -->
              <h4 class="mt-3 text-xs-center red--text">{{ $t('menu.appetizers') }}</h4>
              <h5 class="mt-2  body-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.vegetables') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.steamrice') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.tea') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.icecream') }}</h5>

              <p class="text-xs-center mt-5">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn ref="button" depressed @click="$vuetify.goTo(-99999, linear)">{{ $t('menu.backtotop') }}</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- LUNCH -->
        <v-tab>{{ $t('menu.lunch') }}</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- ENTREES -->
              <h2 class="mt-3 text-xs-center red--text">{{ $t('menu.entrees') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.hibachishrimps') }}</h5>
              <h5 class="text-xs-center font-weight-thin">16</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">4</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">14</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">4</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">5</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.icecream') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">2</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center text-xs-center font-weight-thin">5</h5>
              <!-- FULL COURSE LUNCH -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.fulllunch') }}</h2>
              <v-layout row align-center justify-center fill-height wrap>
                <v-flex :class="{'xs5': $vuetify.breakpoint.lgAndUp}">
                  <p class="mt-2">{{ $t('menu.fulllunchdesc') }}</p>
                </v-flex>
              </v-layout>
              <!-- Main course -->
              <h4 class="mt-2 text-xs-center red--text">{{ $t('menu.maincourse') }}</h4>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center font-weight-thin">16</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.scallops') }}</h5>
              <h5 class="text-xs-center font-weight-thin">23</h5>
              <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
              <h5 class="text-xs-center font-weight-thin">16</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.sirloin') }}</h5>
              <h5 class="text-xs-center font-weight-thin">25</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.filet') }}</h5>
              <h5 class="text-xs-center font-weight-thin">23</h5>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.jumboshrimps') }}</h5>
              <h5 class="text-xs-center font-weight-thin">22</h5>
              <h5 class="mt-2 body-2 text-xs-center" v-html="$t('menu.vegetarian')"></h5>
              <h5 class="text-xs-center font-weight-thin">13</h5>
              <!-- Included appetizers -->
              <h4 class="mt-2 text-xs-center red--text">{{ $t('menu.appetizers') }}</h4>
              <h5 class="mt-2 body-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.salad') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.vegetables') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.steamrice') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.tea') }}</h5>
              <h5 class="body-2 text-xs-center">{{ $t('menu.icecream') }} / Sherbert</h5>
              <!-- SPECIAL LUNCH MENU -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.speciallunch') }}</h2>
              <h4 class="mt-3 text-xs-center red--text">MENU A</h4>
              <h5 class="body-2 text-xs-center">Samurai Beef
                <br>
                {{ $t('menu.chicken') }}
              </h5>
              <h5 class="text-xs-center font-weight-thin">27</h5>
              <h4 class="mt-3 text-xs-center red--text">MENU B</h4>
              <h5 class="body-2 text-xs-center">Filet Mignon
                <br>
                {{ $t('menu.chicken') }}
              </h5>
              <h5 class="text-xs-center font-weight-thin">27</h5>
              <p class="text-xs-center mt-4">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn ref="button" depressed @click="$vuetify.goTo(-99999, linear)">{{ $t('menu.backtotop') }}</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- DRINKS -->
        <v-tab>{{ $t('menu.drinks') }}</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- RED WINES -->
              <h2 class="text-xs-center red--text">{{ $t('menu.redwine') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center">Mouton Cadet</h5>
              <h5 class="text-xs-center font-weight-thin">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Masi Modello</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Liberty School</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>48
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Chianti Classico Rocca</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>59
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Valpolecella</h5>
              <h5 class="text-xs-center font-weight-thin">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Chateauneuf du pape</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>75
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Pinot Noir</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>35
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Merlot</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">{{ $t('menu.housewine') }}</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <!-- WHITE WINE -->
              <h2 class="mt-4 text-xs-center red--text">{{ $t('menu.whitewine') }}</h2>
              <h5 class="mt-2 body-2 text-xs-center">Mouton Cadet</h5>
              <h5 class="text-xs-center font-weight-thin">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Fume Blanc</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>34
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Lamberti Pinot Grigio</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Chablis</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>52
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Orvietto</h5>
              <h5 class="text-xs-center font-weight-thin">
                1/2 {{ $t('menu.bottle') }}
                <br>17
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>29
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Chardonnay</h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <!-- SAKE AND BEER -->
              <h2 class="mt-4 mt-4 text-xs-center red--text">{{ $t('menu.sakeandbeer') }}</h2>
              <h5 class="mt-3 body-2 text-xs-center">Mouton Cadet</h5>
              <h5 class="text-xs-center font-weight-thin">Small
                <br>7
              </h5>
              <h5 class="text-xs-center font-weight-thin">Medium
                <br>13
              </h5>
              <h5 class="text-xs-center font-weight-thin">
                {{ $t('menu.bottle') }}
                <br>30
              </h5>
              <h5 class="mt-3 body-2 text-xs-center">Asahi Japanese Beer</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Hakutsuru Draft Sake 300ml</h5>
              <h5 class="text-xs-center font-weight-thin">17</h5>
              <!-- COCKTAILS -->
              <h2 class="mt-4 text-xs-center red--text">COCKTAILS</h2>
              <h5 class="mt-3 body-2 text-xs-center">Toyo Special</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Fujiyama</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Sakura</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Samurai</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Sake Martini</h5>
              <h5 class="text-xs-center font-weight-thin">7</h5>
              <h5 class="mt-3 body-2 text-xs-center">Scorpio</h5>
              <h5 class="text-xs-center font-weight-thin">8</h5>
              <h5 class="mt-3 body-2 text-xs-center">Japanese Plum Wine</h5>
              <h5 class="text-xs-center font-weight-thin">9</h5>
              <p class="text-xs-center mt-4">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn ref="button" depressed @click="$vuetify.goTo(-99999, linear)">{{ $t('menu.backtotop') }}</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>


<script>
  export default {
    data() {
      return {
        active: null
      };
    },
    methods: {
      next() {
        const active = parseInt(this.active);
        this.active = active < 2 ? active + 1 : 0;
      }
    }
  };

</script>

<style scoped>
</style>
