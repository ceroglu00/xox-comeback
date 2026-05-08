import {notify} from "@kyvg/vue3-notification";

export function Notification(msg, type) {
    notify({
        title: type === "success" ? "BAŞARILI" : "HATA",
        text: msg,
        type: type
    })
}