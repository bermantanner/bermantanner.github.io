/**
 * @typedef {{ label: string, url: string }} Action
 * @typedef {{
 *   title: string, badge?: string, mediaSrc?: string,
 *   mediaType?: 'image' | 'video', mediaAlt?: string,
 *   description: string, actions?: Action[]
 * }} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    title: 'AiDot / Leedarson BLE',
    badge: 'pending disclosure',
    mediaSrc: '/projects/aidot-ble.jpg',
    mediaAlt: 'ESP32 board driving smart bulbs over BLE',
    description:
      'Reverse-engineered an undocumented smart-bulb BLE protocol from APK decompilation and live packet captures, then built a 230-line ESP32 remote on it — no app, cloud, or Wi-Fi. Encryption weakness reported under coordinated disclosure.',
    actions: [{ label: 'GitHub', url: 'https://github.com/bermantanner/aidot-ble-local-control' }]
  },
  {
    title: 'Parsley360 Ingestion Pipeline',
    badge: 'closed source',
    mediaSrc: '/projects/parsley360.jpg',
    mediaAlt: 'Redacted view of the ingestion pipeline graph',
    description:
      'Fault-tolerant ETL pipeline that scrapes, cleans, and normalizes thousands of unstructured documents into an ML training corpus, replacing a fully manual process. Idempotent upserts, batched transfers, content-type validation. Further detail withheld under NDA.',
    actions: []
  },
  {
    title: 'FinDoc-Eval',
    badge: 'open source',
    mediaSrc: '/projects/findoc-eval.jpg',
    mediaAlt: 'FinDoc-Eval benchmark report output',
    description:
      'Async RAG pipeline answering natural-language questions about SEC 10-K filings, built around an LLM-as-judge harness that benchmarks its own accuracy — currently 77% ± 5pp on NVIDIA\'s FY2025 10-K. Postgres/pgvector retrieval; every answer cites its source pages.',
    actions: [{ label: 'GitHub', url: 'https://github.com/bermantanner/findoc-eval-rag' }]
  },
  {
    title: 'svelte-shader-background',
    badge: 'open source',
    mediaSrc: '/projects/shader-background.jpg',
    mediaAlt: 'Procedural fluid-noise shader background',
    description:
      'Procedural fluid-noise WebGL background for SvelteKit. No runtime dependencies, and it stops drawing entirely when offscreen. It\'s the background running on this site.',
    actions: [
      { label: 'Live Demo', url: 'https://bermantanner.github.io/svelte-shader-background/' },
      { label: 'GitHub', url: 'https://github.com/bermantanner/svelte-shader-background' }
    ]
  },
  {
    title: 'Broccoli Engine',
    badge: 'open source',
    mediaSrc: '/projects/broccoli.jpg',
    mediaAlt: 'Broccoli multiplayer party game screen',
    description:
      'Go backend for real-time multiplayer party games, abstracting rooms, WebSocket routing, and state sync into reusable modules. First title in progress: a social deduction game with LLM-generated prompts and client-side text-to-speech.',
    actions: [{ label: 'GitHub', url: 'https://github.com/bermantanner/broccoli-game' }]
  },
  {
    title: 'Low-Power BLE Tracker',
    badge: 'open source',
    mediaSrc: '/projects/ble-air-tag.mp4',
    mediaSrcWebm: '/projects/ble-air-tag.webm',
    mediaType: 'video',
    mediaAlt: 'BLE tracker hardware demo',
    description:
      'Ultra-low-power Bluetooth LE tracker built on the STM32L4.',
    actions: [{ label: 'GitHub', url: 'https://github.com/bermantanner/low-power-ble-tracker' }]
  }
];
