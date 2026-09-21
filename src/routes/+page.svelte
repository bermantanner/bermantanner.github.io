<script>
  import ProjectCard from '$lib/ProjectCard.svelte';
  import LilGuy from '$lib/LilGuy.svelte';
  import { projects } from '$lib/projects.js';

  const email = 'berman.tanner@gmail.com';
  let copied = $state(false);
  let resetTimer;

  // Copies the address instead of opening a mail client. If the clipboard API
  // is unavailable (insecure context, old browser) the click falls through to
  // the mailto: href.
  async function copyEmail(event) {
    if (!navigator.clipboard) return;
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => (copied = false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
</script>

<svelte:head>
  <title>Tanner Berman</title>
  <meta name="description" content="Portfolio of Tanner Berman, software engineer." />
</svelte:head>

<main class="page">
  <header class="intro">
    <div class="intro__row">
      <h1 class="name display-face">Tanner<br />Berman</h1>
      <LilGuy size={50} />
    </div>
    <p class="tagline">Software engineer and CS student at UC San Diego, graduating Fall 2026. Building across backend, embedded systems, and AI.</p>
  </header>

  <nav class="links">
    <a class="center-link btn" href="/resume">resume</a>
    <a class="center-link btn" href="https://github.com/bermantanner">github</a>
    <a class="center-link btn" href="https://www.linkedin.com/in/tanner-berman/">linkedin</a>
    <a class="center-link btn" href="mailto:{email}" onclick={copyEmail} aria-live="polite">
      {copied ? 'copied' : 'email'}
    </a>
  </nav>

  <section class="projects">
    <h2 class="projects__title display-face">PROJECTS</h2>
    <div class="projects__grid">
      {#each projects as project (project.title)}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>

<style>
  .projects {
    /* .page shrink-wraps its children; the grid needs the full width. */
    width: 100%;
  }

  .projects__title {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    /* Caps need positive tracking. */
    letter-spacing: 0.04em;
  }

  /* Two per row, collapsing to one below ~600px. */
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
    gap: 1.5rem;
  }

  /* width:100% because .page shrink-wraps its children. */
  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
  }

  /* Name on the left, avatar on the right edge of the same row. The avatar's
     size matches the two-line name: 2 x 1.75rem x 0.9 line-height = 50px. */
  .intro__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .name {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.00em;
  }

  .tagline {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--muted);
  }

  /* Equal-width columns so the labels' centres line up evenly. */
  .links {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    align-self: center;
    gap: 2rem;
  }

  .center-link {
    font-size: clamp(0.85rem, 1.7vw, 1rem);
    /* rem, not em: box size stays independent of the label size. */
    padding: 0.2rem 1.5rem;
  }

  /* Three across won't fit a 320px phone; stack them instead. Must come after
     the .center-link rule above to win on source order. */
  @media (max-width: 30rem) {
    .links {
      /* 2x2, filling left-to-right so the order matches desktop. */
      grid-auto-flow: row;
      grid-template-columns: repeat(2, 1fr);
      width: min(100%, 17rem);
      gap: 0.6rem;
    }

    .center-link {
      font-size: 1rem;
      padding: 0.4rem 1.25rem;
    }
  }
</style>
