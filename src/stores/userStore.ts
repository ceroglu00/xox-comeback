// Utilities
import {defineStore} from 'pinia'
import router from "@/router";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        isLoggedIn: false,
        username: ""
    }),
    actions: {
        Login(id, password) {
            // KULLANICI LOGIN OLACAK
            if (id == "admin" && password == '123') {
                // GİRİŞ BAŞARILI
                this.username = id;
                this.isLoggedIn = true;

                localStorage.setItem("username",id);

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
        AutoLogin(){
            var userName = localStorage.getItem("username");
            if (userName) {
                // kullanıcı daha önceden login olmuş demektir
                this.username = userName;
                this.isLoggedIn = true;
            }else{
                // kullanıcı login olmamış. AutoLogin iptal
            }
        }
    }
})
