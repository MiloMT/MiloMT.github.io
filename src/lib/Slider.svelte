<script>
    import skillList from "../../public/skills"
</script>

<div class="max-w-[100vw] overflow-hidden flex flex-nowrap bg-green py-4">
    <ul class="flex items-center justify-center animate-infinite-scroll">
        {#each skillList as skill}
            <li class="font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md">
                {skill.skill}  -  
            </li>
        {/each}
    </ul>
    <ul class="flex items-center justify-center animate-infinite-scroll" aria-hidden="true">
        {#each skillList as skill}
            <li class="font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md">
                {skill.skill}  -  
            </li>
        {/each}
    </ul>            
</div>