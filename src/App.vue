<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import Header from "@/components/Header.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/stores/userStore.ts";

var userStore = useUserStore();

onMounted(() => {
  userStore.AutoLogin();
})

</script>
