<script lang="ts">
    export let tags: string[]
</script>

<div class="max-w-[100vw] overflow-hidden flex flex-nowrap bg-green py-4 my-20">
    <ul class="flex items-center justify-center animate-infinite-scroll">
        {#each tags as tag}
            <li class="font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md">
                {tag}  -  
            </li>
        {/each}
    </ul>
    <ul class="flex items-center justify-center animate-infinite-scroll" aria-hidden="true">
        {#each tags as tag}
            <li class="font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md">
                {tag}  -  
            </li>
        {/each}
    </ul>  
    <ul class="flex items-center justify-center animate-infinite-scroll" aria-hidden="true">
        {#each tags as tag}
            <li class="font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md">
                {tag}  -  
            </li>
        {/each}
    </ul>            
</div>