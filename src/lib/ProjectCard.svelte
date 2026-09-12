<script>
  /**
   * @typedef {{ label: string, url: string }} Action
   */
  let {
    title,
    /** Header label, e.g. "open source". Omit to hide. */
    badge = '',
    /** For video, the MP4 (universal fallback). */
    mediaSrc = '',
    /** Optional WebM, preferred when supported. */
    mediaSrcWebm = '',
    /** 'image' covers stills and GIFs. */
    mediaType = 'image',
    mediaAlt = '',
    /** Poster frame for video. */
    poster = '',
    /** Plain-text body. Ignored if a child snippet is passed. */
    description = '',
    /** @type {Action[]} Empty renders no footer. */
    actions = [],
    children
  } = $props();

  let video = $state(null);

  // Hold a static frame instead of looping under reduced-motion.
  $effect(() => {
    if (!video) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (query.matches) video.pause();
      // Autoplay can be refused (battery saver); ignore it.
      else video.play().catch(() => {});
    };

    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  });
</script>

<article class="card">
  <header class="card__header">
    <h3 class="card__title">{title}</h3>
    {#if badge}
      <span class="card__badge">{badge}</span>
    {/if}
  </header>

  {#if mediaSrc}
    <div class="card__media">
      {#if mediaType === 'video'}
        <!-- muted + playsinline are required for autoplay. -->
        <video
          bind:this={video}
          poster={poster || undefined}
          autoplay
          muted
          loop
          playsinline
          disablepictureinpicture
          preload="metadata"
          aria-label={mediaAlt || undefined}
        >
          <!-- First supported type wins, so WebM goes before MP4. -->
          {#if mediaSrcWebm}
            <source src={mediaSrcWebm} type="video/webm" />
          {/if}
          <source src={mediaSrc} type="video/mp4" />
        </video>
      {:else}
        <img src={mediaSrc} alt={mediaAlt} loading="lazy" decoding="async" />
      {/if}
    </div>
  {/if}

  <div class="card__body">
    {#if children}
      {@render children()}
    {:else if description}
      <p>{description}</p>
    {/if}
  </div>

  {#if actions?.length}
    <div class="card__actions">
      {#each actions as { label, url } (url)}
        <a class="card__action btn" href={url}>{label}</a>
      {/each}
    </div>
  {/if}
</article>

<style>
  .card {
    display: flex;
    flex-direction: column;
    font-family: var(--font-mono);
    /* Fills the grid cell so cards in a row match height. */
    height: 100%;
    border: 0px solid var(--border);
    background: rgba(240, 243, 246, 0.511);
  }

  .card__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
    padding: 0.8rem 1.1rem;
    border-bottom: 1px solid var(--border);
  }

  .card__title {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .card__badge {
    font-size: 0.72rem;
    line-height: 1.2;
    letter-spacing: 0.08em;
    color: var(--accent);
    white-space: nowrap;
  }

  /* Ratio on the container, not the media, so every card's box matches. */
  .card__media {
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
  }

  .card__media img,
  .card__media video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__body {
    padding: 1.1rem;
    font-size: 0.95rem;
    color: var(--muted);
  }

  /* :global: snippet content is compiled in the parent's scope. */
  .card__body :global(p) {
    margin: 0 0 0.75rem;
  }

  .card__body :global(p:last-child) {
    margin-bottom: 0;
  }

  .card__body :global(a) {
    color: var(--accent);
    text-underline-offset: 0.2em;
  }

  /* margin-top:auto keeps footers aligned across uneven descriptions. */
  .card__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: auto;
    padding: 0 1.1rem 1.1rem;
  }

  .card__action {
    font-size: 0.85rem;
    padding: 0.3em 1.15em;
  }
</style>
