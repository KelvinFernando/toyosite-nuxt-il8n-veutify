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
              <h2 class="mt-2 text-xs-center">{{ $t('menu.entrees') }}</h2>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.hibachishrimps') }}</h5>
              <h5 class="text-xs-center">16</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center">4</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">14</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center">4</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center">5</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.icecream') }}</h5>
              <h5 class="text-xs-center">2</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center">5</h5>

              <!-- FULL COURSE DINNER -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.fulldinner') }}</h2>
              <p class="mt-2">{{ $t('menu.fulldinnerdesc') }}</p>
              <!-- Main course -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.maincourse') }}</h4>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">27</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.scallops') }}</h5>
              <h5 class="text-xs-center">35</h5>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
              <h5 class="text-xs-center">27</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.sirloin') }}</h5>
              <h5 class="text-xs-center">33</h5>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.toyospecial')"></h5>
              <h5 class="text-xs-center">38</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.filet') }}</h5>
              <h5 class="text-xs-center">39</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.lobster') }}</h5>
              <h5 class="text-xs-center">43</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.jumboshrimps') }}</h5>
              <h5 class="text-xs-center">39</h5>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.vegetarian')"></h5>
              <h5 class="text-xs-center">18</h5>
              <!-- Included appetizers -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.appetizers') }}</h4>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.vegetables') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.steamrice') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.tea') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.icecream') }}</h5>
              <!-- Combo dishes -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.combodishes') }}</h2>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.c1') }}</h5>
              <h5 class="text-xs-center">33</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.c2') }}</h5>
              <h5 class="text-xs-center">44</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.c3') }}</h5>
              <h5 class="text-xs-center">37</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.c4') }}</h5>
              <h5 class="text-xs-center">55</h5>
              <!-- Extras -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.extras') }}</h2>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.6shrimps')"></h5>
              <h5 class="text-xs-center">9</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.lobster') }}</h5>
              <h5 class="text-xs-center">25</h5>
              <h5 class="mt-2 text-xs-center">BONSAI SCLLOPS</h5>
              <h5 class="text-xs-center">10</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center">3</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">8</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center">3</h5>

              <!-- KIDS MEAL -->
              <h2 class="mt-4 text-xs-center" v-html="$t('menu.kidsmeal')"></h2>
              <!-- Main Course -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.maincourse') }}</h4>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
              <h5 class="text-xs-center">13</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">13</h5>
              <!-- Included appetizers -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.appetizers') }}</h4>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.vegetables') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.steamrice') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.tea') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.icecream') }}</h5>
              <p class="text-xs-center mt-4">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn
                  ref="button"
                  depressed
                  @click="$vuetify.goTo(-99999, linear)"
                >{{ $t('menu.backtotop') }}</v-btn>
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
              <h2 class="mt-2 text-xs-center">{{ $t('menu.entrees') }}</h2>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.hibachishrimps') }}</h5>
              <h5 class="text-xs-center">16</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center">4</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">14</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center">4</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.garlicbread') }}</h5>
              <h5 class="text-xs-center">5</h5>
              <h5 class="mt-2 text-xs-center text-uppercase">{{ $t('menu.icecream') }}</h5>
              <h5 class="text-xs-center">2</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.friedrice') }}</h5>
              <h5 class="text-xs-center">5</h5>
              <!-- FULL COURSE LUNCH -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.fulllunch') }}</h2>
              <p class="mt-2">{{ $t('menu.fulllunchdesc') }}</p>
              <!-- Main course -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.maincourse') }}</h4>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.chicken') }}</h5>
              <h5 class="text-xs-center">16</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.scallops') }}</h5>
              <h5 class="text-xs-center">23</h5>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.samuraibeef')"></h5>
              <h5 class="text-xs-center">16</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.sirloin') }}</h5>
              <h5 class="text-xs-center">25</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.filet') }}</h5>
              <h5 class="text-xs-center">23</h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.jumboshrimps') }}</h5>
              <h5 class="text-xs-center">22</h5>
              <h5 class="mt-2 text-xs-center" v-html="$t('menu.vegetarian')"></h5>
              <h5 class="text-xs-center">13</h5>
              <!-- Included appetizers -->
              <h4 class="mt-2 text-xs-center">{{ $t('menu.appetizers') }}</h4>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.3shrimps') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.soup') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.salad') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.vegetables') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.steamrice') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.tea') }}</h5>
              <h5 class="text-xs-center">{{ $t('menu.icecream') }} / Sherbert</h5>
              <!-- SPECIAL LUNCH MENU -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.speciallunch') }}</h2>
              <h4 class="mt-2 text-xs-center">MENU A</h4>
              <h5 class="text-xs-center">SAMURAI BEEF
                <br>
                {{ $t('menu.chicken') }}
              </h5>
              <h5 class="text-xs-center">27</h5>
              <h4 class="mt-2 text-xs-center">MENU B</h4>
              <h5 class="text-xs-center">FILET MIGNON
                <br>
                {{ $t('menu.chicken') }}
              </h5>
              <h5 class="text-xs-center">27</h5>
              <p class="text-xs-center mt-4">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn
                  ref="button"
                  depressed
                  @click="$vuetify.goTo(-99999, linear)"
                >{{ $t('menu.backtotop') }}</v-btn>
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
              <h2 class="mt-2 text-xs-center">{{ $t('menu.redwine') }}</h2>
              <h5 class="mt-2 text-xs-center">MOUTON CADET</h5>
              <h5 class="text-xs-center">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-2 text-xs-center">MASI MODELLO</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-2 text-xs-center">LIBERTY SCHOOL</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>48
              </h5>
              <h5 class="mt-2 text-xs-center">CHIANTI CLASSICO ROCCA</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>59
              </h5>
              <h5 class="mt-2 text-xs-center">VALPOLICELLA</h5>
              <h5 class="text-xs-center">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-2 text-xs-center">CHÂTEAUNEUF DU PAPE</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>75
              </h5>
              <h5 class="mt-2 text-xs-center">PINOT NOIR</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>35
              </h5>
              <h5 class="mt-2 text-xs-center">MERLOT</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <h5 class="mt-2 text-xs-center">{{ $t('menu.housewine') }}</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <!-- WHITE WINE -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.whitewine') }}</h2>
              <h5 class="mt-2 text-xs-center">MOUTON CADET</h5>
              <h5 class="text-xs-center">
                1/2 {{ $t('menu.bottle') }}
                <br>20
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>33
              </h5>
              <h5 class="mt-2 text-xs-center">FUMÉ BLANC</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>34
              </h5>
              <h5 class="mt-2 text-xs-center">LAMBERTI PINOT GRIGIO</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <h5 class="mt-2 text-xs-center">CHABLIS</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>52
              </h5>
              <h5 class="mt-2 text-xs-center">ORVIETTO</h5>
              <h5 class="text-xs-center">
                1/2 {{ $t('menu.bottle') }}
                <br>17
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>29
              </h5>
              <h5 class="mt-2 text-xs-center">CHARDONNAY</h5>
              <h5 class="text-xs-center">
                {{ $t('menu.glass') }}
                <br>9
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>32
              </h5>
              <!-- SAKE AND BEER -->
              <h2 class="mt-4 text-xs-center">{{ $t('menu.sakeandbeer') }}</h2>
              <h5 class="mt-2 text-xs-center">MOUTON CADET</h5>
              <h5 class="text-xs-center">Small
                <br>7
              </h5>
              <h5 class="text-xs-center">Medium
                <br>13
              </h5>
              <h5 class="text-xs-center">
                {{ $t('menu.bottle') }}
                <br>30
              </h5>
              <h5 class="mt-2 text-xs-center">ASAHI JAPANESE BEER</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">HAKUTSURU DRAFT SAKE 300ML</h5>
              <h5 class="text-xs-center">17</h5>
              <!-- COCKTAILS -->
              <h2 class="mt-4 text-xs-center">COCKTAILS</h2>
              <h5 class="mt-2 text-xs-center">TOYO SPECIAL</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">FUJIYAMA</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">SAKURA</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">SAMURAI</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">SAKE MARTINI</h5>
              <h5 class="text-xs-center">7</h5>
              <h5 class="mt-2 text-xs-center">SCORPIO</h5>
              <h5 class="text-xs-center">8</h5>
              <h5 class="mt-2 text-xs-center">JAPANESE PLUM WINE</h5>
              <h5 class="text-xs-center">9</h5>
              <p class="text-xs-center mt-4">{{ $t('menu.change') }}</p>
              <div class="text-xs-center mt-3">
                <v-btn
                  ref="button"
                  depressed
                  @click="$vuetify.goTo(-99999, linear)"
                >{{ $t('menu.backtotop') }}</v-btn>
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