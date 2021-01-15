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
                const CANT = process.env.VUE_APP_CANT_VIDEOS;

                const fetchVideos = await fetch(`${URL}?part=id, snippet&q=${data}&maxResults=${CANT}`);
                const videosList = await fetchVideos.json();

                if (videosList.status === 200) {
                    commit('setYoutubeData', videosList.data.items);
                } else {
                    //some error from Youtube (ex: quota exceeded)
                    console.log(videosList);
                    router.push('/error');
                }
            } catch (error) {
                router.push('/error');
                console.log(error);
            }
        },
    },
    modules: {},
});
