<script lang="ts">
    export let link: string
    export let imagePath: any
    export let imageAlt: string
    export let name: string
    export let tags: string[]
</script>

<li class="group w-full max-w-[1280px] md:w-[49%] mb-margin">
    <a href="{link}" target="_blank">
        <div class="flex flex-row">
            <div class="relative">
                <img src={imagePath} alt="{imageAlt}" 
                class="rounded-2xl group-hover:rounded-[3rem] group-hover:brightness-50 
                duration-500 brightness-110">
                <div class="bg-gray-dark z-[1] w-full h-1/5 bottom-0 absolute opacity-70 rounded-b-2xl
                group-hover:rounded-b-[3rem] duration-500">
                </div>
                <div class="absolute flex flex-col z-[5] bottom-5 left-5">
                    <h6 class="font-heading font-semibold text-title-sm text-gray-light mt-6
                    group-hover:text-green  duration-500 z-[5]">{name}</h6>
                    <ul class="flex flex-row flex-wrap mt-4">
                        {#each tags as tag}
                            <li class="flex justify-center font-paragraph font-semibold 
                            text-gray-light border-solid border-green border-2 rounded-lg
                            w-fit px-2 py-1 mr-2 hover:px-4 duration-500 bg-gray-dark">
                                {tag}
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div> 
    </a>
</li>