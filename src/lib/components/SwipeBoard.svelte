<script>
    export let width = 300;
    export let height = 150;
    export let bgColor = 'red'

    let group;

    let delta = {
        x: 0,
        y: 0,
    }

    let prevPos = {
        x: 0,
        y: 0,
    }
    
    const mouseDown = (event)=>{
        prevPos.x = event.clientX
        prevPos.y = event.clientY
        event.target.onmouseup = (event)=>{
            event.target.onmousemove = null;
        }
        event.target.onmousemove = (event)=>{
            delta.x += event.clientX - prevPos.x
            delta.y += event.clientY - prevPos.y
            prevPos.x = event.clientX
            prevPos.y = event.clientY
        }
        event.target.onmouseleave = (event)=>{
            event.target.onmousemove = null;
            event.target.onmousedown = null;
        }
    }

    const dblclick = (event)=>{
        console.log(delta);
        console.log(group.getBoundingClientRect());
        console.log(`e.clientX: ${event.clientX} e.clientY: ${event.clientY}`);
    }
</script>

<svg {width} {height} xmlns="http://www.w3.org/2000/svg" 
    on:mousedown={ event => mouseDown(event) }
    on:dblclick={ (event)=> dblclick(event) }
    style="background-color:{bgColor}">
    <g bind:this={group} transform="translate({delta.x}, {delta.y})">
        <slot></slot>
    </g>
</svg>