function mineThing(block) {
    block.dataset.clicks++
    if (block.dataset.clicks == '1') {
        block.src = "/js/minecraft/destroy_stage_0.png"
        block.style.opacity = "1"
    } else if (block.dataset.clicks == '2') {
        block.src = "/js/minecraft/destroy_stage_1.png"
    } else if (block.dataset.clicks == '3') {
        block.src = "/js/minecraft/destroy_stage_2.png"
    } else if (block.dataset.clicks == '4') {
        block.src = "/js/minecraft/destroy_stage_3.png"
    } else if (block.dataset.clicks == '5') {
        block.src = "/js/minecraft/destroy_stage_4.png"
    } else if (block.dataset.clicks == '6') {
        block.src = "/js/minecraft/destroy_stage_5.png"
    } else if (block.dataset.clicks == '7') {
        block.src = "/js/minecraft/destroy_stage_6.png"
    } else if (block.dataset.clicks == '8') {
        block.src = "/js/minecraft/destroy_stage_7.png"
    } else if (block.dataset.clicks == '9') {
        block.src = "/js/minecraft/destroy_stage_8.png"
    } else if (block.dataset.clicks == '10') {
        block.src = "/js/minecraft/destroy_stage_9.png"
    } else {
        
        block.src = "/js/minecraft/broken.png"
        let sound = new Audio("/audio/deepslate-break-1.mp3");
                sound.play();
        setTimeout(() => {
        window.location.href = "https://example.com" },
        50);

}}