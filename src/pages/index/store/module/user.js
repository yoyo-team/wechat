const user = new Vuex.Store
(
    {
        state:
            {
                online: false,
                profile: {},
            },
        mutations:
            {
                tpl: function(state, payload)
                {

                },
                login: function(state, payload)
                {
                    state.online = true;
                    state.profile = payload;
                },
                logout: function(state, payload)
                {
                    state.profile = {};
                    state.online = false;
                }
            },
        namespaced: true,
    }
);

export default user;