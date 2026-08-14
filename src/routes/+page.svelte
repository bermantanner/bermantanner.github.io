<svelte:head>
  <title>Tanner Berman</title>
  <meta name="description" content="Portfolio of Tanner Berman, software engineer." />
</svelte:head>

<main class="page">
  <header class="intro">
    <h1 class="name">Tanner Berman</h1>
    <p class="tagline">
      
    </p>
  </header>

  <nav class="links">
    <a class="center-link" href="/resume">Resume</a>
    <a class="center-link" href="https://github.com/bermantanner">GitHub</a>
    <a class="center-link" href="https://www.linkedin.com/in/tanner-berman/">LinkedIn</a>
  </nav>
</main>

<style>
  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 0.75rem;
  }

  /* Tops out at 4rem (64px), scaling down on narrow screens so it can't
     overflow a phone. */
  .name {
    margin: 0;
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .tagline {
    margin: 0;
    max-width: 42.5rem;
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    letter-spacing: -0.01em;
    color: var(--muted);
  }

  /* wrap so they stack rather than overflow if a label grows or the screen is
     very narrow. */
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  /* Below ~480px the three buttons can't share a row without overflowing a
     320px phone, and wrapping leaves a lone orphan on the second line. Stack
     all three full-width instead, so it reads as deliberate. */
  @media (max-width: 30rem) {
    .links {
      flex-direction: column;
      width: 100%;
    }

    .center-link {
      text-align: center;
    }
  }

  .center-link {
    font-family: var(--font-mono);
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    font-weight: 500;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--fg);
    /* em padding so the box scales with the font size above. */
    padding: 0.55em 1.15em;
    border: 1px solid var(--fg);
    transition: transform 0.2s ease;
  }

  .center-link:hover,
  .center-link:focus-visible {
    transform: scale(1.05);
  }

  /* reduced-motion preference */
  @media (prefers-reduced-motion: reduce) {
    .center-link {
      transition: none;
    }

    .center-link:hover,
    .center-link:focus-visible {
      transform: none;
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }
</style>
