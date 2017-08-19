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
            }
    }
);

// 初始化

const session = window.localStorage.getItem("user:session");
if(session)
{
    console.log(`[user] session login: yes`);

    const userSDK = window['www---vanging---com___sdk___user'];
    userSDK.getProfileFromSession(session)
        .then(function(result)
        {
            result = JSON.parse(result);
            if(result.status === 'ok')
            {
                console.log(`[user] session login: ok`);
                user.commit('login', result.message);
            }
            else
            {
                console.log(`[user] session login: fail`);
                console.log(result);
            }
        },function(err)
        {
            console.log(err);
        });
}
else
{
    console.log(`[user] session login: no`);
}

export default user;