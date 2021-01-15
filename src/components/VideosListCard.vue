<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="video in videos" :key="video.id.videoId">
                <VideoCard :video="video.snippet" />
            </div>
        </div>
    </div>
</template>

<script>
import VideoCard from './VideoCard';

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'VideosListCard',
    components: {
        VideoCard,
    },
    setup() {
        const store = useStore();

        const videos = computed(() => {
            const videosFiltered = [];

            //allow description
            store.state.youtubeData.forEach((video) => {
                video.snippet.description = `${video.snippet.description.slice(0, 40)}...`;
                videosFiltered.push(video);
            });

            return videosFiltered;
        });

        return { videos };
    },
};
</script>

<style></style>
