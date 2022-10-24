<script>
    import { onMount } from "svelte"
    import SwipeBoard from "$lib/components/SwipeBoard.svelte"

    let svg;
    let cx;
    let cy;

    // let path1;
    // let hover;
    // let down;

    let delta = {
        x: 0,
        y: 0
    }

    let prevPos = {
        x: 0,
        y: 0,
    }

    let mouseTracker;

    const dpad = id =>{
        console.log(id);
    }

    function mdown(evt){
        // console.log(evt);
        down = true
        prevPos.x = evt.clientX
        prevPos.y = evt.clientY
        console.log(evt.target.onmousemove)
        evt.target.onmouseup = (evt)=>{
            evt.target.onmousemove = null;
        }
        evt.target.onmousemove = (evt)=>{
            delta.x += evt.clientX - prevPos.x
            delta.y += evt.clientY - prevPos.y
            mouseTracker.x += evt.clientX - prevPos.x
            mouseTracker.y += evt.clientY - prevPos.y
            prevPos.x = evt.clientX
            prevPos.y = evt.clientY
        }
        evt.target.onmouseleave = (evt)=>{
            evt.target.onmousemove = null;
            evt.target.onmousedown = null;
        }
    }

    onMount(()=>{
        if (svg) {
            let rect = svg.getBoundingClientRect();
            // console.log(rect)
            cx = rect.width / 2
            cy = rect.height /2
            mouseTracker = {}
            mouseTracker.x = cx
            mouseTracker.y = cy
        }
    })
</script>

<div>
    <!-- <svg bind:this={svg} id="qubit-spin" width="300" height="300" xmlns="http://www.w3.org/2000/svg"
        on:mousedown={evt => mdown(evt)}
        >
        
        <g transform="translate({delta.x}, {delta.y})">
        
            <path bind:this={path1} style="fill:none;stroke:#005f26;stroke-width:15;stroke-linecap:round;stroke-linejoin:round" d="M166.467 80.22a73.91 73.91 0 0 1 54.024 80.243 73.91 73.91 0 0 1-71.66 64.98 73.91 73.91 0 0 1-74.59-61.595 73.91 73.91 0 0 1 50.253-82.656"/>
            <path style="fill:#005f26;stroke-width:2.129;stroke-linejoin:round" d="M146.018 44.322a7.416 7.416 0 0 1 7.432 7.432v91.562a7.416 7.416 0 0 1-7.432 7.432 7.416 7.416 0 0 1-7.432-7.432V51.754a7.416 7.416 0 0 1 7.432-7.432z"/>

        </g>
        {#if cx && cy}
            <circle {cx} {cy} r='2px' fill="red"></circle>
        {/if}
        {#if mouseTracker}
            <circle cx={mouseTracker.x} cy={mouseTracker.y} r="5" fill="green"></circle>
        {/if}
    </svg> -->
    <SwipeBoard width=300 height=300>
        <path style="fill:none;stroke:#005f26;stroke-width:15;stroke-linecap:round;stroke-linejoin:round" d="M166.467 80.22a73.91 73.91 0 0 1 54.024 80.243 73.91 73.91 0 0 1-71.66 64.98 73.91 73.91 0 0 1-74.59-61.595 73.91 73.91 0 0 1 50.253-82.656"/>
        <path style="fill:#005f26;stroke-width:2.129;stroke-linejoin:round" d="M146.018 44.322a7.416 7.416 0 0 1 7.432 7.432v91.562a7.416 7.416 0 0 1-7.432 7.432 7.416 7.416 0 0 1-7.432-7.432V51.754a7.416 7.416 0 0 1 7.432-7.432z"/>
        <circle cx={300/2} cy={300/2} r="5" fill="green"></circle>
    </SwipeBoard>
</div>
<div>
    <button on:click={ () => dpad(1) }>up</button>
    <button on:click={ () => dpad(2) }>lft</button>
    <button on:click={ () => dpad(3) }>rgt</button>
    <button on:click={ () => dpad(4) }>dwn</button>
</div>

<style>
    div:has(svg) {
        position: relative;
    }
    div:has(button){
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 6px;
        width: 132px;
        margin: 0px auto;
    }
    svg {
        background-color: white;
    }
    button {
        height: 40px;
        width: 40px;
        background-color: antiquewhite;
    }
    div:has(button) :nth-child(1){
        grid-column-start: 2;
    }
    div:has(button) :nth-child(2){
        grid-column-start: 1;
        grid-row-start: 2;
    }
    div:has(button) :nth-child(3){
        grid-column-start: 3;
        grid-row-start: 2;
    }
    div:has(button) :nth-child(4){
        grid-column-start: 2;
        grid-row-start: 3;
    }
</style>