<script>
    import Ad from "$lib/Advert.svelte"
</script>

<div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block">
        <Ad></Ad>
        <h2>Title</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit! Eum, dolor modi, maxime asperiores tenetur ex vel doloremque amet, nesciunt atque dolore dignissimos eveniet explicabo corporis dicta quia. Eius, a harum! Facere blanditiis repudiandae voluptate, quam saepe earum aliquid.</p>
    </div>
</div>

<style>
    div {
        padding: 2em 1em 1em;
    }
    .block {
        min-height: 300px;
        margin: 1em;
        background-color: aquamarine;
    }
</style>