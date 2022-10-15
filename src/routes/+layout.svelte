<script>
    import "../app.css";
</script>

<div class="bg-img" />
<slot />

<style>
    .bg-img {
        background: url("/bg-img-portrait.svg");
        position: fixed;
        width: 100vw;
        min-height: 100vh;
        background-size: cover;
        z-index: -10;
    }

    @media screen and (min-width: 820px) {
        .bg-img {
            background: url("/bg-img.svg");
        }
    }
</style>
