<script>
    import {page} from "$app/stores"
    export let links;
    let comment = "Data received";
</script>

<div class="nav">
    <ul>
        {#if links}
            {#each links as link}
                <li class:active={$page.url.pathname===`${link.href}`}><a href={link.href}>{link.name}</a></li>
            {/each}
        {/if}
    </ul>
</div>

<style>
    .nav {
        display: flex;
        font-size: 1.2em;
    }
    ul {
        display: flex;
        list-style: none;
        padding: 1em 0em;
    }
    a {
        text-decoration: none;
        color: rgba(230, 228, 244, 0.874);  
        padding: 1em;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    }
    .active {
        font-weight: bold;
        text-transform: uppercase;
    }
</style>