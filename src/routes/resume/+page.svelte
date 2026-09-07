<script>
  const pdf = '/tanner_berman_resume.pdf';
  const fallbackImage = '/tanner_berman_resume.png';
</script>

<svelte:head>
  <title>Resume — Tanner Berman</title>
  <meta name="description" content="Resume of Tanner Berman, software engineer." />
</svelte:head>

<main class="page page-resume">
  <a class="back-link" href="/">&larr; Back</a>

  <object class="resume-doc" data={pdf} type="application/pdf">
    <img class="resume-doc" src={fallbackImage} alt="Resume of Tanner Berman" />
  </object>

  <a class="download-btn" href={pdf} download aria-label="Download resume as PDF">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  </a>
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

  .download-btn {
    align-self: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: var(--bg);
    background: var(--fg);
    border-radius: 50%;
    transition: opacity 0.2s ease;
  }

  .download-btn:hover,
  .download-btn:focus-visible {
    opacity: 0.85;
  }

  .back-link {
    font-size: 0.9rem;
    color: var(--muted);
    text-decoration: none;
  }

  .back-link:hover,
  .back-link:focus-visible {
    color: var(--fg);
  }
</style>
