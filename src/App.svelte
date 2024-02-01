<script>
  import About from "./lib/About.svelte";
  import BubbleMenu from "./lib/BubbleMenu.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte"
  import ProjList from "./lib/ProjList.svelte";
</script>


<div class="max-w-[100rem]">
  <BubbleMenu />
  <Header />
  <About />
  <ProjList />
</div>

<Footer />