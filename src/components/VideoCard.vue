<template>
    <div class="col">
        <div class="card h-100">
            <img :src="video.thumbnails.default.url" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{ video.title }}</h5>
                <p class="card-text">
                    {{ video.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['video'],
};
</script>

<style></style>
