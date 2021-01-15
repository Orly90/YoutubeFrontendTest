<template>
    <div class="row justify-content-center m-4">
        <div class="col col-md-8 col-lg-6">
            <div class="input-group">
                <input
                    v-model="data"
                    type="search"
                    id="form1"
                    class="form-control"
                    placeholder="Buscar en Youtube"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    v-on:keyup.enter="fetchData"
                />

                <button @click="fetchData" type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
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
