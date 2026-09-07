<script>
  import { ShaderBackground } from 'svelte-shader-background';
  import '../app.css';

  let { children } = $props();
</script>



<ShaderBackground
  colors={["#e0ebf0", "#eaf4fb", "#f0fffc", "#f0f5ff"]}
  speed={0.65}
  scale={1.15}
  swirl={1.2}
/>
{@render children()}
