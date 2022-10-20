<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    export let once = false;
    export let contentID = null;

    let container;
    let observer;

    function handleView() {
        console.log(contentID);
    }

    onMount(() => {
        if (browser && typeof IntersectionObserver !== "undefined") {
            const handleIntersect = (entries, observer) => {
                const entry = entries[0];
                if (once) {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        handleView();
                    }
                    return; 
                }
                if (entry.isIntersecting) {
                    handleView();
                }
            };
            const options = {
                threshold: 1,
                // rootMargin: "100% 0% -100%",
            };
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(container);
        }
    });

    onDestroy(() => {
        if (observer) {
            observer.disconnect();
        }
    });
</script>

<div bind:this={container}>
    <slot />
</div>
