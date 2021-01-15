<template>
    <footer class="footer">
        <span>POWERED BY:</span>
        <a href="https://vuejs.org/" target="_blank">
            <img class="img-footer" src="../assets/img/logo.png" alt="" />
        </a>

        <a href="https://nodejs.org/" target="_blank">
            <img class="img-footer" src="../assets/img/node-js.png" alt="" />
        </a>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
.footer {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: bold;
    color: #2c3e50;

    background-color: transparent;

    bottom: 0;
    left: 0;
    width: 100%;
    padding: 40px;
}
.img-footer {
    width: 30px;
    margin-bottom: 5px;
}

.footer span {
    margin-right: 5px;
}
</style>
