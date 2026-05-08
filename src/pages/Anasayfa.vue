<template>
  <v-container fluid class="pa-0">


    <!-- HERO -->
    <v-container class="py-16 text-center">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="text-h2 font-weight-bold mb-4">XOX Game</h1>
          <p class="text-h6 mb-8">
            Stratejini konuştur, rakibini alt et ve XOX dünyasında zirveye çık.
          </p>

          <v-btn :to="{name:'Game'}" color="primary" size="large" class="mr-4">
            Hemen Oyna
          </v-btn>

          <v-btn variant="outlined" size="large">
            Nasıl Oynanır
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <!-- FEATURES -->
    <v-container class="py-16">
      <v-row class="text-center mb-10">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold">Özellikler</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-card elevation="2" class="pa-6 text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-lightning-bolt</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Gerçek Zamanlı Oyun</h3>
            <p>
              Rakiplerinle anında eşleş ve gerçek zamanlı XOX mücadelelerine katıl.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="2" class="pa-6 text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-brain</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Stratejik Rekabet</h3>
            <p>
              Her hamle önemli. Rakibini düşünerek oyna ve üçlü kombinasyonu yakala.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="2" class="pa-6 text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-monitor-dashboard</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Modern Arayüz</h3>
            <p>
              Hızlı, sade ve kullanıcı dostu tasarım ile kesintisiz oyun deneyimi.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <!-- HOW TO PLAY -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 font-weight-bold text-center mb-8">
            Nasıl Oynanır?
          </h2>

          <v-timeline side="end">
            <v-timeline-item dot-color="primary">
              Oyun başladığında sırayla hamle yaparsınız.
            </v-timeline-item>

            <v-timeline-item dot-color="primary">
              Amacın yatay, dikey veya çapraz şekilde üç sembolü yan yana getirmektir.
            </v-timeline-item>

            <v-timeline-item dot-color="primary">
              Rakibinin hamlelerini engelleyerek oyunu kazan.
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <!-- CTA -->
    <v-container class="py-16 text-center">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h2 class="text-h4 font-weight-bold mb-4">Hazır mısın?</h2>
          <p class="text-h6 mb-6">
            XOX dünyasına katıl ve diğer oyuncularla rekabete başla.
          </p>

          <v-btn color="primary" size="large">
            Oyuna Başla
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-footer class="text-center py-6">
      <v-container>
        <span>© 2026 XOX Game. Tüm hakları saklıdır.</span>
      </v-container>
    </v-footer>

  </v-container>
</template>

<script setup>



</script>

<style scoped>
</style>
