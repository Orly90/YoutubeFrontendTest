<template>
    <div class="container">
        <img alt="Vue logo" src="../assets/img/icons-youtube.svg" />
        <Youtube />
    </div>
</template>

<script>
// @ is an alias to /src
import Youtube from '@/components/Youtube.vue';

export default {
    name: 'Home',
    components: {
        Youtube,
    },
};
</script>
