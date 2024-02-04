<script>
    import Slider from "./Slider.svelte";
    
    const links = [
        {
            link: "mailto:myles@mylestaylor.dev",
            src: "/email.svg",
            alt: "Email"
        },
        {
            link: "https://github.com/MiloMT",
            src: "/github-coloured.png",
            alt: "Github"
        },
        {
            link: "https://www.linkedin.com/in/myles-t-962aa41aa/",
            src: "/LI-coloured.png",
            alt: "LinkedIn"
        }
    ]
</script>

<footer id="footer">
    <Slider 
            tags={Array(10).fill("LET'S CHAT")}
        />
    <div class="flex flex-row justify-around my-20">
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