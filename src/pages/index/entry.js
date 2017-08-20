import './resource/font_1469889758_9089751.css';

import root from './component/app.vue';
root._Ctor = undefined;

const userStore = window['www---vanging---com___sdk___user.store'];

const yoyo=new Vue
(
    {
        el:'#app',
        name: 'yoyo',
        store: userStore,
        template: `<root></root>`,
        components:
            {
                root: root
            }
    }
);
