import { createStore } from 'vuex';
import router from '../router/index';

export default createStore({
    state: {
        youtubeData: [],
    },
    mutations: {
        setYoutubeData(state, payload) {
            state.youtubeData = payload;
        },
    },
    actions: {
        async getVideosSearch({ commit }, data) {
            try {
                if (data.length === 0) {
                    commit('setYoutubeData', []);
                    return;
                }
                const URL = process.env.VUE_APP_API_URL;

                const fetchVideos = await fetch(`${URL}?q=${data}`);
                const videosList = await fetchVideos.json();

                commit('setYoutubeData', videosList.data.items);
            } catch (error) {
                router.push('/error');
                console.log(error);
            }
        },
    },
    modules: {},
});
