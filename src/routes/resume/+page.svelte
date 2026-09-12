<script>
  const pdf = '/tanner_berman_resume.pdf';
  const fallbackImage = '/tanner_berman_resume.png';
</script>

<svelte:head>
  <title>Resume — Tanner Berman</title>
  <meta name="description" content="Resume of Tanner Berman, software engineer." />
</svelte:head>

<main class="page page-resume">
  <a class="resume-btn btn" href="/">back</a>

  <object class="resume-doc" data={pdf} type="application/pdf">
    <img class="resume-doc" src={fallbackImage} alt="Resume of Tanner Berman" />
  </object>

  <a class="resume-btn resume-btn--download btn" href={pdf} download>download</a>
</main>

<style>
  /* Wider than the shared column so the document gets its full 760px. */
  .page-resume {
    max-width: 52rem;
    padding-block: 3rem;
  }

  /* Shared by the <object> and its <img> fallback so both size identically. */
  .resume-doc {
    display: block;
    width: 100%;
    max-width: 760px;
    aspect-ratio: 8.5 / 11;
    height: auto;
    border: none;
    border-radius: 8px;
    box-shadow: 0 8px 30px var(--shadow);
  }

  /* Same sizing as the home page nav buttons. */
  .resume-btn {
    font-size: clamp(0.85rem, 1.7vw, 1rem);
    padding: 0.2rem 1.5rem;
  }

  .resume-btn--download {
    align-self: center;
  }
</style>
