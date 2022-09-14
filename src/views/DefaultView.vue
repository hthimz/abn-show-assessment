<template>
    <section class="page_404">
        <div class="container text-center">
            <div class="row">
                <div class="four_zero_four_bg">
                    <h1>404</h1>
                </div>
                <div class="contant_box_404">
                    <h3 class="h2">
                        Look like you're lost
                    </h3>
                    <p>the page you are looking for not avaible!</p>

                    <router-link :to="'/'">
                        <span class="link_404">Go to Home</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

// Fallback View for non-existent Routes

export default {
    name: 'DefaultView'
}
</script>
    
<style lang="scss">
.page_404 {
    padding: 40px 0;
    background: inherit;
}

.page_404 img {
    width: 100%;
}

.four_zero_four_bg {

    background-image: $img-page-not-found;
    height: 400px;
    background-position: center;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
}

.link_404 {
    color: $color-white !important;
    padding: 10px 20px;
    background: $color-primary;
    margin: 20px 0;
    display: inline-block;
}

.contant_box_404 {
    margin-top: -50px;
}

.text-center {
    text-align: center;
}
</style>