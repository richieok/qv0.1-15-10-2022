<script>
    import List from "$lib/List.svelte";

    export let data
    let results;

    $: if (data && data.tmdb){
        results = data.tmdb.results;
        // console.log(results);
    }

    async function sendId(){
        const sentId = await fetch('/api/movies/popular?language=en-US&page=4')
        const resp = await sentId.json()
        results = resp.results
        console.log(resp.results.length)
    }
    
</script>

<div>
    {#if results}
        <List items={results}/>
    {/if}
    <button on:click={sendId}>Get Movies</button>
</div>

<style>
    div {
        padding: 1em;
    }
    button {
        padding: .5em;
        font-size: .8em;
    }
</style>