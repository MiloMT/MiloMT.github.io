<script>
    import ProjCard from "./ProjCard.svelte"
    import projList from "../../public/projects"
</script>

<section>
    <ul id="projects" class="flex flex-row flex-wrap justify-around">
        {#each projList as proj}
            <ProjCard 
                link={proj.link} 
                imagePath={proj.imagePath} 
                imageAlt={proj.imageAlt} 
                name={proj.name} 
                desc={proj.desc} 
                tags={proj.tags}
            />
        {/each}
    </ul>
</section>