<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-nav-icon @click="openMenu=!openMenu" class="hidden-sm-and-up" icon="mdi-menu">

    </v-app-bar-nav-icon>
    <v-app-bar-title>
      <router-link to="/" style="text-decoration: none; color: inherit">
        <div class="d-flex align-center justify-center justify-sm-start">
          <v-img class="ml-n10 ml-sm-0" inline src="@/Assets/logo.avif" width="50"></v-img>
          <span class="ml-2 font-weight-black">XOX ÇILGIN GAMEPLAY</span>
        </div>
      </router-link>

    </v-app-bar-title>


    <div name="BUTTONLAR" class="hidden-xs">
      <div class="d-flex ga-2">
        <v-btn v-for="button in menuItems" v-show="button.visible()" :to="button.link" :class="button.class"
               :prepend-icon="button.icon" @click="button.clickEvent">
          {{ button.value }}
        </v-btn>

        <v-btn v-if="userStore.isLoggedIn">{{ userStore.username }}</v-btn>

      </div>

    </div>


  </v-app-bar>

  <v-navigation-drawer v-model="openMenu">
    <v-list-item v-for="button in menuItems">

      <v-btn block :class="button.class">
        <template #prepend>
          <v-icon :icon="button.icon"></v-icon>
        </template>
        {{ button.value }}
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>


</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/userStore.ts";

var openMenu = ref(false);

var userStore = useUserStore();

var menuItems = ref([
  {
    value: "Nasıl Oynanır",
    icon: "mdi-book-outline",
    class: "bg-grey",
    visible: () => {
      return true;
    },
    clickEvent: null,
  },
  {
    value: "Login",
    icon: "mdi-login",
    class: "bg-green",
    link: "/login",
    visible: () => {
      return !userStore.isLoggedIn
    },
    clickEvent: null,
  },
  {
    value: "Logout",
    icon: "mdi-logout",
    class: "bg-error",
    visible: () => {
      return userStore.isLoggedIn
    },
    clickEvent: userStore.Logout,
  },
])

</script>


<style scoped>

</style>
