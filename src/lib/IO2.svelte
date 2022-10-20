<script>
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import { browser } from "$app/environment";

    const dispatch = createEventDispatcher()

    let container;
    let observer;
    let entry = null;
    
    export let once = false
    export let threshold = 1;

    function handleView() {
        // console.log(entry);
        dispatch("intersect", {
            text: "IO2 Intersection",
            entry: entry
        });
        // console.log("IO2 Intersection");
    }

    onMount(()=>{
        if (browser && typeof IntersectionObserver !== "undefined"){
            const handleIntersect = (entries, observer) => {
                entry = entries[0];
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
                threshold,
            };
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(container);
        }
    })

    onDestroy(()=>{
        if (observer) {
            observer.disconnect();
        }
    })
</script>

<div bind:this={container}>
    <slot/>
</div>