<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view/>

      <Notifications></Notifications>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import Header from "@/components/Header.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/stores/userStore.ts";
import {Notifications} from "@kyvg/vue3-notification";

var userStore = useUserStore();

onMounted(() => {
  userStore.AutoLogin();
})

</script>
