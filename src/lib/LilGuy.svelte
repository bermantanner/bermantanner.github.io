<script>
  import { onMount } from 'svelte';
  import { mount } from 'lil-guys';

  /** CSS pixels. */
  let { size = 120 } = $props();

  let canvas;

  // Runs client-side only; the prerendered page ships an empty, correctly
  // sized canvas. No spec is passed, so every load draws a new character.
  onMount(() => {
    const root = getComputedStyle(document.documentElement);
    const avatar = mount(canvas, undefined, {
      size,
      palette: {
        base: root.getPropertyValue('--fg').trim(),
        ink: root.getPropertyValue('--bg').trim()
      }
    });
    return () => avatar.destroy();
  });
</script>

<canvas bind:this={canvas} style:width="{size}px" style:height="{size}px" aria-hidden="true"></canvas>

<style>
  canvas {
    display: block;
    flex-shrink: 0;
  }
</style>
