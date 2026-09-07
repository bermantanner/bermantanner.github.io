<script>
  import ProjectCard from '$lib/ProjectCard.svelte';
  import { projects } from '$lib/projects.js';
</script>

<svelte:head>
  <title>Tanner Berman</title>
  <meta name="description" content="Portfolio of Tanner Berman, software engineer." />
</svelte:head>

<main class="page">
  <header class="intro">
    <h1 class="name display-face">Tanner<br />Berman</h1>
  </header>

  <nav class="links">
    <a class="center-link" href="/resume">resume</a>
    <a class="center-link" href="https://github.com/bermantanner">github</a>
    <a class="center-link" href="https://www.linkedin.com/in/tanner-berman/">linkedin</a>
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

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0;
  }

  .name {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.00em;
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
    text-align: center;
  }

  /* Three across won't fit a 320px phone; stack them instead. */
  @media (max-width: 30rem) {
    .links {
      grid-auto-flow: row;
      width: 100%;
    }
  }

  .center-link {
    font-family: var(--font-mono);
    font-size: clamp(0.85rem, 1.7vw, 1rem);
    font-weight: 400;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--bg);
    background: var(--accent);
    /* rem, not em: box size stays independent of the label size. */
    padding: 0.2rem 1.5rem;
    line-height: 1.2;
  }

  .center-link:hover,
  .center-link:focus-visible {
    background: var(--accent-hover);
  }
</style>
