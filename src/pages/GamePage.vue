<template>


  <v-btn @click="userStore.TEST()">TEST</v-btn>

  <v-container>
    Oyuncu: {{userStore.username}}
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
          {{ board[index] }}
        </div>

      </v-col>
    </v-row>

    <p style="font-size: 5px">Şuanki Oyuncu: {{ moveCount % 2 == 0 ? '1' : '2' }}</p>

  </v-container>


</template>

<script setup lang="ts">

  import {ref} from "vue";
  import {useUserStore} from "@/stores/userStore.ts";

  var userStore = useUserStore();

  var board = ref([])

  var moveCount = ref(0);

  function checkCell(index) {
    board.value[index] = moveCount.value % 2 == 0 ? "X" : "O";
    moveCount.value++;

    var winner = DeterineWinner(board.value);
    if (winner == -1) {
      alert("BERABERE")
    } else if(winner){
      alert("Kazanan " + winner)
    }
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
