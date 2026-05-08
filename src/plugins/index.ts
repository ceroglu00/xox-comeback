import router from '../router';
import {createPinia} from 'pinia';
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue'

// Plugins
import vuetify from './vuetify'
import Notifications from '@kyvg/vue3-notification'

export function registerPlugins (app: App) {
 app.use(vuetify)
 app.use(createPinia());
 app.use(router);
 app.use(Notifications);
}