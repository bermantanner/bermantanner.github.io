<script>
  import { onMount } from 'svelte';
  import { generate, mount, odds } from 'lil-guys';

  /** CSS pixels. */
  let { size = 120 } = $props();

  let canvas;
  let label = $state('');
  let floaters = $state([]);
  let nextId = 0;

  // Runs client-side only; the prerendered page ships an empty, correctly
  // sized canvas. A fresh spec each load, kept so odds() can see it.
  onMount(() => {
    const spec = generate();
    label = `1 in ${odds(spec).oneIn.toLocaleString()}`;

    const root = getComputedStyle(document.documentElement);
    const avatar = mount(canvas, spec, {
      size,
      palette: {
        base: root.getPropertyValue('--fg').trim(),
        ink: root.getPropertyValue('--bg').trim()
      }
    });
    return () => avatar.destroy();
  });

  // Each click spawns its own floater so rapid clicks stack rather than reset.
  function reveal() {
    if (!label) return;
    const id = nextId++;
    floaters.push({ id, text: label });
    setTimeout(() => {
      floaters = floaters.filter((f) => f.id !== id);
    }, 1400);
  }
</script>

<button type="button" class="lilguy" onclick={reveal} aria-label="How rare is this lil guy?">
  <canvas bind:this={canvas} style:width="{size}px" style:height="{size}px" aria-hidden="true"></canvas>
  <span class="floaters" aria-live="polite">
    {#each floaters as f (f.id)}
      <span class="floater">{f.text}</span>
    {/each}
  </span>
</button>

<style>
  .lilguy {
    position: relative;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    background: none;
    /* No pointer cursor: it's a secret. */
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  canvas {
    display: block;
  }

  /* Anchored just left of the avatar; each floater rises from here. */
  .floaters {
    position: absolute;
    right: calc(100% + 0.5rem);
    top: 50%;
    pointer-events: none;
  }

  .floater {
    position: absolute;
    right: 0;
    top: -0.6em;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.03em;
    color: var(--accent-hover);
    white-space: nowrap;
    /* Slow rise, quick fade that starts partway through the rise. */
    animation:
      rise 1.4s ease-out forwards,
      fade 0.45s ease-in 0.7s forwards;
  }

  @keyframes rise {
    to {
      transform: translateY(-1.75rem);
    }
  }

  @keyframes fade {
    to {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .floater {
      animation: fade 0.45s ease-in 0.7s forwards;
    }
  }
</style>
