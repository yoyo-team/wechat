require('./store/index');

Vue.component('class-popup',require('./pages/index/components/popups/class.vue'));
Vue.component('note-popup',require('./pages/index/components/popups/note.vue'));
Vue.component('register-popup',require('./pages/index/components/popups/register.vue'));
Vue.component('note-operations',require('./pages/index/components/popups/note_operations.vue'));

var app=new Vue
(
    {
        el:'#app',
        components:
            {
                app:require('./pages/index/components/app.vue')
            }
    }
);