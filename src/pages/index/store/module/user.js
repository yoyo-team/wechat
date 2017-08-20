const user =
    {
        state:
            {
                online: true,
                profile: { email: 'email' },
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
    };

export default user;