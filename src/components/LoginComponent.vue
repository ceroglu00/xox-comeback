<template>

  <v-container>

    <v-form @submit.prevent="Login">
      <v-text-field v-model="user.id" label="ID"></v-text-field>
      <v-text-field v-model="user.password" label="Password"></v-text-field>
      <v-btn type="submit" block @click="Login">Login</v-btn>
    </v-form>

  </v-container>

</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/userStore.ts";

var userStore = useUserStore();

var user = {
  id: "",
  password: "",
}

function Login() {
  userStore.Login(user.id, user.password);
}


</script>


<style scoped>

</style>