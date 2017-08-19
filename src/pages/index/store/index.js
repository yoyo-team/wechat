import user from './module/user';

const store = new Vuex.Store
(
    {
        modules:
            {
                user,
            }
    }
);

export default store;
window.$store = store;