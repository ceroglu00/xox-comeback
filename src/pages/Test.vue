<template>

  <v-btn disabled @click="durumMesajı='aç'">AÇ</v-btn>
  <v-btn @click="durumMesajı='kapa'">KAPA</v-btn>

  <p :durum="durumMesajı" class="text-center">DURUM</p>


  <!--  <div class="yorumlar">-->

  <!--    <div>-->
  <!--      <p>Yazan Kişi: 'Çağrı'</p>-->
  <!--      <p>Mesajı: Lorem ipsum dolor sit amet.</p>-->
  <!--    </div>-->

  <!--  </div>-->

  <v-btn prepend-icon="mdi-book">OK</v-btn>

  <div class="V1 V2">v1 v2</div>
  <div class="V1">v1</div>

  <br>

  <div class="V2">
    <div class="V1">V2</div>
    <p class="V1">V2</p>
  </div>

  <a href="http://localhost:3000/test">LINK</a>


  <span>_ A</span>

</template>

<script setup lang="ts">

import {ref} from "vue";

var durumMesajı = ref("");

</script>


<style scoped>

p[durum='aç'] {
  background-color: green;
  color: white;
}

p[durum='kapa'] {
  background-color: red;
  color: blue;
}

.V1.V2 {
  background-color: red;
}

.V1 .V2 {
  background-color: blue;
}

.V1 > .V2 {
  color: white;
}

.V1,
.V2 {
  font-weight: bold;
}

.V1 :nth-child(2) {
  padding: 15px;
  text-decoration: underline;
}

a:active {
  color: black !important;
}

.v-btn:disabled{
  background-color: grey;
}


</style>