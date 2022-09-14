<template>
    <section class="page_load">
        <div class="load_bg">
            <h1>Loading ...</h1>
        </div>
    </section>
</template>
<script>
export default {
    name: 'LoaderComp',
}
</script>
<style lang="scss">
.page_load {
    padding: 40px 0;
    background: inherit;
}

.load_bg {
    background-image: $img-loader;
    background-position: center;
}

.load_bg h1 {
    font-size: 22px;
    text-align: center;
}
</style>