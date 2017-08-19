require('./pages/index/store/index');

Vue.component('class-popup',require('./pages/index/component/popup/class.vue'));
Vue.component('note-popup',require('./pages/index/component/popup/note.vue'));
Vue.component('register-popup',require('./pages/index/component/popup/register.vue'));
Vue.component('note-operations',require('./pages/index/component/popup/note_operations.vue'));

var app=new Vue
(
    {
        el:'#app',
        components:
            {
                app:require('./pages/index/component/app.vue')
            }
    }
);