<template>

  <v-container>

    <v-form @submit.prevent="Login">
      <v-text-field v-model="user.id" label="ID"></v-text-field>
      <v-text-field v-model="user.password" label="Password"></v-text-field>
      <v-btn :loading="loading" type="submit" block @click="Login">Login</v-btn>
    </v-form>

  </v-container>

</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/userStore.ts";
import {ref} from "vue";

var userStore = useUserStore();

var user = {
  id: "",
  password: "",
}

var loading = ref(false);

async function Login() {
  loading.value = true;

  try {
    await userStore.Login(user.id, user.password);
  }
  catch (ex){
    //
  }

  loading.value = false;
}


</script>


<style scoped>

</style>