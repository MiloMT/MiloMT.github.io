<script>
    import Slider from "./Slider.svelte"
    import skillList from "../assets/skills"

    import imgMyles from "../assets/myles.svg"
    import imgSubhead from "../assets/subheader.svg"

	$: innerWidth = 0
</script>

<svelte:window bind:innerWidth/>

<header id="header" class="max-w-full flex flex-col text-center items-center mx-margin my-20">
    <div class="w-full">
        <div class="flex flex-col items-start lg:flex-row w-full mb-4">
            <img src="{imgMyles}" alt="Header" class="w-full lg:w-full mb-4">
        </div>
    </div>
    <img src="{imgSubhead}" alt="Header" class="w-full">
</header>
<Slider 
    tags={skillList}
/>

