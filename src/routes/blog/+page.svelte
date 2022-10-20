<script>
    import Ad from "$lib/Advert.svelte";
    import IntersectionObserver from "$lib/IntersectionObserver.svelte";
    import IO2 from "$lib/IO2.svelte"

    let scroll;
    let innerHeight;
    let ratio = 0;
    let bgcolor = 'beige'
    let frame;
    let bottom;

    $: frame ? bottom = frame.getBoundingClientRect().bottom: null;
    // $: frame ? console.log(frame.getBoundingClientRect()): frame;

    function handleChildIntersect(evt){
        ratio = evt.detail.entry.intersectionRatio
    }
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight></svelte:window>
<div class="hud">
    <h2>{scroll}</h2>
    <h2>{innerHeight} px</h2>
    <h2>bottom: {bottom}</h2>
</div>
<div class="marker" style="--innerHeight: {innerHeight}px; translate: 0px {innerHeight}px"></div>
<!-- <div class="marker" style="--bgcolor:{bgcolor};background-color: var(--bgcolor)"></div> -->
<div bind:this={frame} style="position: relative;">
    <div class="block" />
    <div class="block" />
    <div class="block">
        <IntersectionObserver contentID={24}>
            <Ad id={24}/>
        </IntersectionObserver>
    </div>
    <div class="block" />
    <div class="block">
        <IntersectionObserver once={true} contentID={9}>
            <Ad id={9}/>
        </IntersectionObserver>
        <IntersectionObserver contentID={5}>
            <h2>Title</h2>
        </IntersectionObserver>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            reprehenderit! Eum, dolor modi, maxime asperiores tenetur ex vel
            doloremque amet, nesciunt atque dolore dignissimos eveniet explicabo
            corporis dicta quia. Eius, a harum! Facere blanditiis repudiandae
            voluptate, quam saepe earum aliquid.
        </p>
    </div>
    <div class="block"></div>
    <div class="block">
        <IO2 threshold={[0.25, 0.5, 0.75, 1]} on:intersect={handleChildIntersect}>
            <div style="opacity: {ratio}">
                <Ad></Ad>
            </div>
        </IO2>
    </div>
    <div class="block">
        <IO2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iste odio ducimus minus mollitia cumque, culpa dolor architecto quis alias voluptate impedit repellat, repudiandae in veritatis placeat vel reprehenderit excepturi voluptates ab explicabo, itaque rem perspiciatis? Ad molestiae, maiores debitis quo sint cupiditate, perferendis fugiat officiis quod nobis veniam? Autem ipsam impedit aut natus quos eum dicta tempora saepe, illo alias! Distinctio dolores possimus aspernatur, provident quidem aut, a asperiores ab incidunt necessitatibus quod ex et quo, esse soluta cumque suscipit impedit earum autem iste! Eligendi rerum exercitationem aut libero veniam odio? Inventore adipisci necessitatibus, suscipit alias autem cum harum!</p>
        </IO2>
    </div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div style="position: absolute; bottom: 0px;right: 0px;">
        <button style="padding: .5em 1em; font-size: 1.5em; background: none; border: 3px solid blue;border-radius: 1em;" on:click={()=> scroll = 0}>Top</button>
    </div>
</div>

<style>
    div {
        padding: 2em 1em 1em;
        transition: opacity .8s;
    }
    .hud {
        position: fixed;
        padding: 2em;
        z-index: 2;
    }
    .marker{
        /* position: fixed; */
        padding: 0;
        height: 5px;
        width: 100vw;
        background-color: darkred;
    }
    .block {
        min-height: 300px;
        margin: 1em;
        background-color: aquamarine;
    }
</style>
