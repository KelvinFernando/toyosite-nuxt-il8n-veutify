<template>
<v-app>
 
   <v-container 
         alt="section"
         mt-5
         fluid
       
        >
          <v-layout
          align-center justify-space-between column mt-4 text-xs-center
          
          >
          
                 <h1 class="display-2
        font-weight-bold">{{ $t('reservation.title') }}</h1>
                 <v-layout align-center justify-center mt-5 column>
                   <h2 class="mt-5">{{ $t('reservation.number1') }}</h2>
                  <h2 class="font-weight-regular" v-html="$t('reservation.montreal')"></h2>
                   <h2 class="mt-5">{{ $t('reservation.number2') }}</h2>
                   <h2 class="font-weight-regular" v-html="$t('reservation.laval')"></h2>
                 </v-layout>
                   
                 
            
            
          </v-layout>
        </v-container>
 
</v-app>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>