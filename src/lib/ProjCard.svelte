<script lang="ts">
    export let link: string
    export let imagePath: string
    export let imageAlt: string
    export let name: string
    export let desc: string
    export let tags: string[]
</script>

<li class="group w-full lg:w-[49%] mb-margin">
    <a href="{link}" target="_blank">
        <div class="flex flex-row">
            <div class="relative">
                <img src="{imagePath}" alt="{imageAlt}" 
                class="rounded-2xl group-hover:rounded-[3rem] group-hover:brightness-50 
                duration-500 brightness-90 border-solid border-4 border-gray">
                <div class="bg-gray-dark z-[1] w-full h-full top-0 absolute opacity-10 rounded-2xl
                group-hover:rounded-[3rem] duration-500">
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
            <!-- <div>
                <p class="font-paragraph text-xl text-gray-light mt-4">
                    {desc}
                </p>
            </div> -->
        </div> 
    </a>
</li>