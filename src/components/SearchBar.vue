<template>
    <div class="row justify-content-center m-4">
        <div class="col col-md-8 col-lg-6">
            <div class="input-group">
                <input
                    v-model="data"
                    type="search"
                    class="form-control rounded"
                    placeholder="Buscar en Youtube"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    @keyup="fetchData"
                />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'SearchBar',
    setup() {
        const data = ref('');
        const store = useStore();

        const fetchData = () => {
            store.dispatch('getVideosSearch', data.value);
        };

        return { data, fetchData };
    },
};
</script>

<style></style>
