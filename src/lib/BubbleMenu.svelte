<script lang="ts">
    let menuHeight = "h-12"
    let menuWidth = "w-12"
    let visible = "invisible"

    function toggleVisible() {
        if (visible === "invisible") {
            visible = "visible" 
        } else {
            visible = "invisible"
        }

        if (menuHeight === "h-12") {
            menuHeight = "h-full"
            menuWidth = "w-full"        
        } else {
            menuHeight = "h-12"
            menuWidth = "w-12" 
        }
    }
</script>

<nav>
    <div class="top-margin right-margin z-10 fixed flex items-start justify-end">
        <button class="bg-gray-light fixed flex flex-col py-[18px] right-margin 
        w-12 h-12 items-center justify-between rounded-full z-50"
        on:click={toggleVisible}>
            <div class="block bg-gray-dark h-1 w-1/2"></div>
            <div class="block bg-gray-dark h-1 w-1/2"></div>
        </button>
        <div class="px-1 py-3 rounded-3xl">
            <div id="menu" class="bg-gray-light {menuHeight} {menuWidth} rounded-3xl 
            absolute top-0 right-0 z-30">
            </div>
            <div class="flex flex-col justify-between {visible}">
                <ul class="flex flex-col justify-between px-10 py-4 z-40 leading-tight">
                    <span class="text-gray font-heading text-title-sm mb-2">Menu</span>
                    <li>
                        <a href="#home" on:click={toggleVisible}>
                            <span class="text-gray-dark pr-4 font-heading text-title-sm">
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" on:click={toggleVisible}>
                            <span class="text-gray-dark pr-4 font-heading text-title-sm">
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" on:click={toggleVisible}>
                            <span class="text-gray-dark pr-4 font-heading text-title-sm">
                                Projects
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#footer" on:click={toggleVisible}>
                            <span class="text-gray-dark pr-4 font-heading text-title-sm">
                                Contact
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {#if visible}
        <button class="bg-gray-dark top-0 left-0 right-0 bottom-0 fixed duration-500 opacity-50 {visible}"
        on:click={toggleVisible}>
        </button>
    {/if}
</nav>

<style>
    #menu {
        transform: scale(1) rotate(0.001deg);
        transition: all 0.7s cubic-bezier(0.5, 0.5, 0, 1), background-color 0.2s ease-in-out, transform 0.7s cubic-bezier(0.5, 0.5, 0, 1) 0s;
    }
</style>