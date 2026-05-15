<template>


  <CreateLobby v-if="!gameStore.currentGame"></CreateLobby>

  <div v-else>

    <v-container>
      Player 1: {{ gameStore.currentRoom.player_1 }} VS Player 2: {{ gameStore.currentRoom.player_2 }}
    </v-container>

    <v-container class="pa-2" fluid>
      <v-row>
        <v-col
            v-for="(cell,index) in 9"
            class="v-col--cols-4 pa-0"
        >
          <div
              class="
        d-flex
      bg-blue
      justify-center
      align-center
      border-solid
      cell
"
              @click="checkCell(index)"
          >
            {{ gameStore.currentGame.boardState[index] }}
          </div>

        </v-col>
      </v-row>

      <p style="font-size: 5px">Şuanki Oyuncu: {{ moveCount % 2 == 0 ? '1' : '2' }}</p>

    </v-container>

  </div>


</template>

<script setup lang="ts">

import {ref} from "vue";
import {useUserStore} from "@/stores/userStore.ts";
import CreateLobby from "@/components/CreateLobby.vue";
import {useGameStore} from "@/stores/gameStore.ts";
import {Notification} from "@/helpers/notificationHelper.ts"

var userStore = useUserStore();
var gameStore = useGameStore();


var moveCount = ref(0);

async function checkCell(index) {

  if (gameStore.currentGame.turn == false && gameStore.currentRoom.player_1 == userStore.username) {
    // SENİN SIRAN
  } else {
    Notification("Senin sıran değil", "warning");
    return;
  }

  gameStore.currentGame.boardState[index] = moveCount.value % 2 == 0 ? "X" : "O";
  moveCount.value++;

  var winner = DeterineWinner(gameStore.currentGame.boardState);
  if (winner == -1) {
    alert("BERABERE")
  } else if (winner) {
    alert("Kazanan " + winner)
  }

  await gameStore.SetGame(gameStore.gameId, gameStore.currentGame.boardState, !gameStore.currentGame.turn);
  await gameStore.GetGame(gameStore.gameId);
}

function DeterineWinner(boardToCheck) {

  var board = boardToCheck;

  const n = 3;

  for (let i = 0; i < n; i++) {
    var satırbasi = i * n;
    var sayac = 1;

    for (let j = 1; j < n; j++) {

      if (board[satırbasi] && board[satırbasi] == board[satırbasi + j]) {
        sayac++
      }
    }
    if (sayac == n) {
      // alert(board[satırbasi] + "Kazandı")
      return board[satırbasi]
    }

  }

  for (let i = 0; i < n; i++) {
    var sutunbasi = i;
    var sayac = 1;

    for (let j = 1; j < n; j++) {

      if (board[sutunbasi] && board[sutunbasi] == board[sutunbasi + (j * n)]) {
        sayac++
      }
    }
    if (sayac == n) {
      return board[sutunbasi]
    }

  }

  for (let i = 0; i < n; i++) {
    var caprazSol = 0;
    var sayac = 1;

    for (let j = 1; j < n; j++) {

      if (board[caprazSol] && board[caprazSol] == board[caprazSol + (j * (n + 1))]) {
        sayac++
      }
    }
    if (sayac == n) {
      return board[caprazSol]
    }

  }

  for (let i = 0; i < n; i++) {
    var caprazSag = (n - 1);
    var sayac = 1;

    for (let j = 1; j < n; j++) {

      if (board[caprazSag] && board[caprazSag] == board[caprazSag + (j * (n - 1))]) {
        sayac++
      }
    }
    if (sayac == n) {
      return board[caprazSag]
    }
  }
  if (moveCount.value == 9) {
    return -1
  }
}


</script>

<style scoped>
.cell {
  aspect-ratio: 1/1;
  cursor: pointer;
  user-select: none;
}

.cell:hover {
  background-color: red !important;
}
</style>
