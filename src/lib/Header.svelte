<script>
    import Slider from "./Slider.svelte"

    let mylesSrc = "./myles.svg"
    let taylorSrc = "./taylor.svg"
    let subheadSrc = "./subheader.svg"

	$: innerWidth = 0
</script>

<svelte:window bind:innerWidth/>

<header id="header" class="flex flex-col text-center items-center mx-margin my-20">
    <div class="w-full">
        <div class="flex flex-col items-start lg:flex-row w-full mb-4">
            <img src="{mylesSrc}" alt="Header" class="w-full lg:w-full mb-4">
        </div>
    </div>
    <img src="{subheadSrc}" alt="Header" class="w-full">
</header>
<Slider />

