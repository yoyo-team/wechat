import 'bootstrap.js';
import 'bootstrap.css';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import store from './stores/index.js';

import root from './components/app.vue';

const app = new Vue
(
    {
        el: '#app',
        template: '<root></root>',
        store: store,
        components:
            {
                root: root
            }
    }
);