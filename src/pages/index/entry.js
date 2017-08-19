import './resource/font_1469889758_9089751.css';

import store from './store/index';
window.$store = store;

import root from './component/app.vue';

setTimeout(function()
{

}, 1000);

const yoyo=new Vue
(
    {
        el:'#app',
        name: 'yoyo',
        template: `<root></root>`,
        // store: store,
        components:
            {
                root: root
            }
    }
);
