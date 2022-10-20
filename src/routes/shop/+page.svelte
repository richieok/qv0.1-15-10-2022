<script>
    import List from "$lib/List.svelte";

    let data = [{ title: "Cool Beer", url: "www.qubit.com.ng"}]
</script>

<div>
    <List items={data}/>
</div>