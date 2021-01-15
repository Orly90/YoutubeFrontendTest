<template>
    <div>
        <div>
            <SearchBar />
        </div>
        <div class="container-view">
            <VideosListCard />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import VideosListCard from './VideosListCard';
import Footer from './Footer';

export default {
    name: 'Youtube',
    components: {
        SearchBar,
        VideosListCard,
        Footer,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.container-view {
    margin-top: 40px;

    min-height: calc(100vh - 200px - 300px);
}
</style>
