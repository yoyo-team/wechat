import './resource/font_1469889758_9089751.css';

import root from './component/app.vue';
import store from './store/index';

const yoyo=new Vue
(
    {
        el:'#app',
        name: 'yoyo',
        template: `<root></root>`,
        store: store,
        components:
            {
                root: root
            }
    }
);