<template>

  <v-btn @click="CreateLobby">CREATE</v-btn>
  <v-btn @click="gameStore.GetLobbies()">REFRESH</v-btn>


  <div>
    <p>Aktif Oyunlar</p>
    <p v-for="oda in gameStore.rooms">
      {{ oda.id }} - {{ oda.player_1 }} vs {{ oda.player_2 == null ? 'BOŞ' : oda.player_2 }}
      <v-btn v-if="!oda.player_1 || !oda.player_2" @click="OyunaKatıl(oda.id)" density="compact" color="green">Katıl
      </v-btn>
      <v-btn @click="Başla(oda.id)" v-if="oda.player_1 && oda.player_2" density="compact" color="blue">Başla</v-btn>
    </p>
  </div>

</template>

<script setup lang="ts">

import {useGameStore} from "@/stores/gameStore.ts";
import {useUserStore} from "@/stores/userStore.ts";

var gameStore = useGameStore();
var userStore = useUserStore();

async function CreateLobby() {
  await gameStore.CreateLobby(userStore.username);
  await gameStore.GetLobbies();
}


async function OyunaKatıl(id) {
  await gameStore.MakePlayerJoin(id, userStore.username);
  await gameStore.GetLobbies();
}

async function Başla(roomId) {

  await gameStore.GetLobby(roomId);

  if (!(await gameStore.CheckIfGameExists(roomId))) {
    await gameStore.CreateGame(roomId, []);
  }else{

  }


  await gameStore.GetGame(gameStore.gameId);


  var id = setInterval(() => {
    gameStore.GetGame(gameStore.gameId);
  }, 500)


}

</script>


<style scoped>

</style>