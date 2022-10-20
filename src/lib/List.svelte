<script>
    export let items = []
    const token = '7f133a015879b4682f0c6b8f01b29da9'
</script>

<div>
    {#each items as item}
        {item.title}
        {item.url}
    {/each}
</div>