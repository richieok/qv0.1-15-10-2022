<script>
    let scrollY;
</script>

<svelte:window bind:scrollY></svelte:window>

<div class="container">
    <div style="margin: 0 auto;width: 90vw;background-color: aliceblue; translate: 0px {scrollY * .7}px"></div>
    <div style="background-color: red; opacity: .7;translate: 0px {scrollY * .5}px;width: 85vw;margin: 0 auto"></div>
    <div style="background-color: green; opacity: .7; width: 80vw;margin: 0 auto; translate: 0px {scrollY * .2}px"></div>

</div>

<style>
    .container {
        position: relative;
        height: calc(100vh * 1.5);
        padding: 3em;
        display: flex;
        justify-content: center;
        
    }
    .container div {
        position: absolute;
        height: 100vh;
    }
</style>