<script>
    import Slider from "./Slider.svelte";
    import imgEmail from "../assets/logos/email.svg"
    import imgGithub from "../assets/logos/github-coloured.png"
    import imgLinkedin from "../assets/logos/LI-coloured.png"


    const links = [
        {
            link: "mailto:myles@mylestaylor.dev",
            src: imgEmail,
            alt: "Email"
        },
        {
            link: "https://github.com/MiloMT",
            src: imgGithub,
            alt: "Github"
        },
        {
            link: "https://www.linkedin.com/in/myles-t-962aa41aa/",
            src: imgLinkedin,
            alt: "LinkedIn"
        }
    ]
</script>

<footer id="footer">
    <Slider 
            tags={Array(10).fill("LET'S CHAT")}
        />
    <div class="flex flex-row justify-around my-20 max-w-[1280px] mx-auto">
        {#each links as link}
            <a href={link.link} target="_blank" class="
                flex justify-center font-paragraph font-semibold 
                text-gray-light text-title-sm
                w-1/4 max-w-32 px-2 py-1 mr-2 bg-gray-dark
                "><img src="{link.src}" alt="{link.alt}" class=
                "hover:brightness-75 hover:scale-95 duration-500"></a>
        {/each}
    </div>
</footer>