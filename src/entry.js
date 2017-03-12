Vue.component('class-popup',require('./components/popups/class.vue'));
Vue.component('note-popup',require('./components/popups/note.vue'));
Vue.component('note-operations',require('./components/popups/note_operations.vue'));

var app=new Vue
(
    {
        el:'#app',
        components:
            {
                app:require('./components/app.vue')
            }
    }
);