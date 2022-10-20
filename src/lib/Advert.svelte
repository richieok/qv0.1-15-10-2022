<script>
    export let id = 'a65362'
</script>

<div>
    <slot />
    <p>{id}</p>
</div>

<style>
    div {
        display: inline-block;
        min-width: 300px;
        min-height: 350px;
        background-color: blue;
    }
</style>
