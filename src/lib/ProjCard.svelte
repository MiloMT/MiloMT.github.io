<script lang="ts">
    export let link: string
    export let imagePath: string
    export let imageAlt: string
    export let name: string
    export let desc: string
    export let tags: string[]
</script>

<li class="group m-4 p-4 w-[100%] lg:w-[45%]">
    <a href="{link}" target="_blank">
        <img src="{imagePath}" alt="{imageAlt}" 
        class="rounded-2xl group-hover:rounded-[3rem] group-hover:brightness-75 duration-500">
        <div>
            <h6 class="font-heading font-semibold text-title-sm text-gray-light mt-6
            group-hover:text-green  duration-500">{name}</h6>
            <p class="font-paragraph text-gray mt-4">
                {desc}
            </p>
            <ul class="flex flex-row mt-4">
                {#each tags as tag}
                    <li class="flex justify-center font-paragraph font-semibold 
                    text-gray-light border-solid border-gray-light border-2 rounded-full
                    w-fit px-2 py-1 mr-2 hover:px-4 duration-500">
                        {tag}
                    </li>
                {/each}
            </ul>
        </div>
    </a>
</li>