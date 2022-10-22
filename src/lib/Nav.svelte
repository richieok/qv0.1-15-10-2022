<script>
    import { page } from "$app/stores";
    export let links;
    let checked = false;

</script>

<div class="nav">
    <div class="toggle"><input type="checkbox" bind:checked={checked}/></div>
    <ul class:slideout={checked}>
        {#if links}
            {#each links as link}
                <li class:active={$page.url.pathname === `${link.href}`}>
                    <a href={link.href}>{link.name}</a>
                </li>
            {/each}
        {/if}
    </ul>
</div>

<style>
    :root{
        --mini-nav-width: 130px;
    }
    .nav {
        position: relative;
        display: flex;
        flex-direction: row;
        font-size: 1.2em;
        justify-content: flex-end;
    }
    ul {
        position: absolute;
        display: flex;
        width: var(--mini-nav-width);
        flex-direction: column;
        align-items: space-around;
        right: calc(-1 * var(--mini-nav-width));
        top: 2em;
        z-index: 10;
        list-style: none;
        padding: 1em 0em;
        background-color: rgba(30,30,30,.5);
        transition: translate .3s;
    }
    .slideout {
        translate: calc(-1* var(--mini-nav-width));
        z-index: 10;
    }
    li {
        padding: .5em 0em;
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
    .toggle {
        position: relative;
        padding: .25em 1em .25em .25em;
    }
    .toggle input {
        width: 1.5em;
        height: 1.5em;
        /* opacity: 0; */
    }

    @media screen and (min-width: 420px) {
        ul {
            position: static;
            display: flex;
            flex-direction: row;
            padding: 1em 0em;
            background-color: transparent;
            width: 100%;
        }
        .toggle {
            position: relative;
            display: none;
        }
    }
</style>
