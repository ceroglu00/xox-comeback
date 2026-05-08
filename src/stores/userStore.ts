// Utilities
import {defineStore} from 'pinia'
import router from "@/router";
import {GetUser, CreateUser} from '../database/database.ts'
import {Notification} from "@/helpers/notificationHelper.ts";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        isLoggedIn: false,
        username: ""
    }),
    actions: {
        async Login(id, password) {
            // KULLANICI LOGIN OLACAK
            if (await GetUser(id, password)) {
                // GİRİŞ BAŞARILI
                this.username = id;
                this.isLoggedIn = true;

                localStorage.setItem("username", id);

                router.push("/game");
            } else {
                //BAŞARISIZ
                alert("BAŞARISIZ")
            }
        },
        Logout() {
            // KULLANICI LOGOUT OLACAK
            this.username = "";
            this.isLoggedIn = false;
            localStorage.removeItem("username");
            router.push("/");
        },
        AutoLogin() {
            var userName = localStorage.getItem("username");
            if (userName) {
                // kullanıcı daha önceden login olmuş demektir
                this.username = userName;
                this.isLoggedIn = true;
            } else {
                // kullanıcı login olmamış. AutoLogin iptal
            }
        },
        async CreateUser(username, password) {
            if (await CreateUser(username, password)) {
                // KULLANICI BAŞARIYLA OLUŞTURULDU.
                Notification("KAYIT BAŞARILI", "success")
            } else {
                Notification("KAYIT HATASI", "error")
            }
        },
        TEST() {
            this.CreateUser("qwdqwd", "qwdqwdqwd");
        }
    }
})
