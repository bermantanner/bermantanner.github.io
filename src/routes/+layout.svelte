<script>
  import { ShaderBackground } from 'svelte-shader-background';
  import { browser } from '$app/environment';
  import '../app.css';

  let { children } = $props();

  const LIGHT = ['#eff4f8', '#e2ebf3', '#d3e0ec', '#c2d5e6'];
  const DARK = ['#0b1219', '#101b26', '#152332', '#1a2b3d'];

  // Read synchronously on the client so the shader's first frame is already
  // the right palette; the prerendered HTML has no canvas pixels to mismatch.
  const query = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  let dark = $state(query?.matches ?? false);

  $effect(() => {
    if (!query) return;
    const update = () => (dark = query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  });
</script>



<!-- <ShaderBackground
  colors={["#e0ebf0", "#eaf4fb", "#f0fffc", "#f0f5ff"]}
  speed={0.65}
  scale={1.15}
  swirl={1.2}
/> -->
<!-- prev: colors #eff4f8 #e2ebf3 #d3e0ec #c2d5e6, contrast 0.5 -->
<ShaderBackground
  colors={dark ? DARK : LIGHT}
  speed={0.65}
  scale={1.15}
  swirl={1.2}
  contrast={0.5}
  style="height: 120lvh"
/>
<!-- 120lvh, not inset:0: iOS Safari reveals more viewport than lvh reports
     when its bottom bar collapses, leaving a gap under a 100lvh canvas.
     Oversizing covers it without the canvas ever resizing mid-scroll. -->
{@render children()}
