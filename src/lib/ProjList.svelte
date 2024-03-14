<script lang="ts">
    import ProjCard from "./ProjCard.svelte"
    import projList from "../assets/projectList"
</script>

<section>
    <ul id="projects" class="flex flex-row flex-wrap justify-around mx-margin">
        {#each projList as proj}
            <ProjCard 
                link={proj.link} 
                imagePath={proj.imagePath} 
                imageAlt={proj.imageAlt} 
                name={proj.name} 
                tags={proj.tags}
            />
        {/each}
    </ul>
</section>