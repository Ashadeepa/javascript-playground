<!--
  SVELTE 5 REACTIVITY DEMO
  Covers: $state, $derived, $effect
-->
<script>
  import { untrack } from 'svelte'

  // ── $state ───────────────────────────────────────────────
  // Replaces: let count = 0  (plain variable, not reactive in Svelte 5)
  // $state() makes a variable reactive — the UI updates when it changes
  let count = $state(0)
  let name  = $state('World')

  // ── $derived ─────────────────────────────────────────────
  // Replaces: $: doubled = count * 2
  // Computes a value that automatically updates when dependencies change
  let doubled   = $derived(count * 2)
  let greeting  = $derived(`Hello, ${name}!`)
  let countLabel = $derived(count === 1 ? 'click' : 'clicks')

  // ── $effect ──────────────────────────────────────────────
  // Replaces: $: { ... } or afterUpdate
  // Runs a side-effect whenever its reactive dependencies change
  let log = $state([])

  $effect(() => {
    // Track count and doubled as dependencies
    const entry = `count changed → ${count} (doubled: ${doubled})`
    // untrack prevents reading `log` from becoming a dependency,
    // which would otherwise cause an infinite update loop
    untrack(() => {
      log = [...log, entry]
    })
    // Return a cleanup function (optional)
    return () => { /* cleanup if needed */ }
  })

  function reset() {
    count = 0
    log = []
  }
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Core Concept</span>
    <h2 class="cp-title">Reactivity Runes</h2>
    <p class="cp-tagline">Svelte 5 introduces <strong>runes</strong> — compiler-special functions that replace the old <code>$:</code> syntax with explicit, composable reactive primitives.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          Three rune functions that handle all reactivity needs:
          <ul>
            <li><code>$state</code> — reactive variable</li>
            <li><code>$derived</code> — computed value</li>
            <li><code>$effect</code> — side effect runner</li>
          </ul>
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          Svelte's compiler transforms rune calls into fine-grained reactive signals.
          When a <code>$state</code> value changes, only the DOM parts that read it re-render.
          <code>$derived</code> and <code>$effect</code> automatically track their dependencies.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>Explicit, readable reactive code</li>
            <li>Works in <code>.js</code>/<code>.ts</code> files too</li>
            <li>No more <code>$:</code> label confusion</li>
            <li>Cleanup built into <code>$effect</code></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cp-walkthrough">
      <div class="cp-wt-label">Code Walkthrough</div>
      <div class="cp-steps">
        <div class="cp-step">
          <div class="cp-step-num">1</div>
          <div class="cp-step-body">
            <div class="cp-step-code">let count = $state(0)</div>
            <div class="cp-step-desc"><strong>$state</strong> — wraps any value in a reactive signal. Assign a new value and the UI re-renders automatically. Plain <code>let count = 0</code> would NOT be reactive in Svelte 5.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">let doubled = $derived(count * 2)</div>
            <div class="cp-step-desc"><strong>$derived</strong> — like a computed property. Reads <code>count</code>, so Svelte tracks it as a dependency. Whenever <code>count</code> changes, <code>doubled</code> auto-recalculates. It is <em>read-only</em>.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">$effect(() => {'{'}
  console.log('count:', count)
  return () => {'{'} /* cleanup */ {'}'}
{'}'})</div>
            <div class="cp-step-desc"><strong>$effect</strong> — runs after every render where dependencies changed. The optional <em>return function</em> is the cleanup — it fires before the next run or when the component is destroyed (great for clearing timers, removing event listeners).</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">untrack(() => {'{'} log = [...log, entry] {'}'})</div>
            <div class="cp-step-desc"><strong>untrack</strong> — reads or writes a reactive value <em>without</em> subscribing to it as a dependency. Used inside <code>$effect</code> to prevent infinite loops when writing to another <code>$state</code>.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <!-- ── $state demo ── -->
  <section class="card">
    <h3><code>$state</code> — Reactive Variables</h3>
    <p class="concept">Makes a variable reactive. The DOM re-renders when it changes.</p>

    <div class="row">
      <button onclick={() => count--} disabled={count === 0}>−</button>
      <span class="badge">{count} {countLabel}</span>
      <button onclick={() => count++}>+</button>
      <button onclick={reset} class="ghost">Reset</button>
    </div>

    <div class="code-block">
      <pre>let count = $state(0)</pre>
    </div>
  </section>

  <!-- ── $derived demo ── -->
  <section class="card">
    <h3><code>$derived</code> — Computed Values</h3>
    <p class="concept">Automatically recalculates when its dependencies change. Read-only.</p>

    <div class="row">
      <div class="stat-box">
        <div class="stat-label">count</div>
        <div class="stat-value">{count}</div>
      </div>
      <div class="arrow">→</div>
      <div class="stat-box accent">
        <div class="stat-label">doubled</div>
        <div class="stat-value">{doubled}</div>
      </div>
    </div>

    <label class="input-label">
      Your name:
      <input bind:value={name} placeholder="Enter name" />
    </label>
    <p class="greeting">{greeting}</p>

    <div class="code-block">
      <pre>let doubled  = $derived(count * 2)
let greeting = $derived(`Hello, {name}!`)</pre>
    </div>
  </section>

  <!-- ── $effect demo ── -->
  <section class="card">
    <h3><code>$effect</code> — Side Effects</h3>
    <p class="concept">Runs whenever reactive dependencies change. Great for logging, DOM manipulation, subscriptions.</p>

    <div class="log-box">
      {#each log as entry}
        <div class="log-entry">{entry}</div>
      {:else}
        <div class="log-empty">Click +/− to see effect logs...</div>
      {/each}
    </div>

    <div class="code-block">
      <pre>$effect(() => {'{'}
  console.log(`count is now: ${'{'}count{'}'}`)
  return () => {'{'} /* cleanup */ {'}'}
{'}'})</pre>
    </div>
  </section>
</div>

<style>
  .demo { display: flex; flex-direction: column; gap: 1.5rem; }
  h2 { font-size: 1.6rem; margin: 0 0 0.25rem; color: #ff6b35; }

  .card {
    background: #1a1a24;
    border: 1px solid #2a2a38;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
  }

  h3 { margin: 0 0 0.4rem; font-size: 1.05rem; color: #eee; }
  h3 code { background: #ff3e0022; color: #ff6b35; padding: 2px 6px; border-radius: 4px; }

  .concept { color: #888; font-size: 0.875rem; margin: 0 0 1rem; }

  .row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }

  button {
    background: #ff3e00;
    border: none;
    color: #fff;
    padding: 0.45rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: opacity 0.15s;
  }
  button:hover { opacity: 0.85; }
  button:disabled { opacity: 0.35; cursor: not-allowed; }
  button.ghost { background: #2a2a38; color: #aaa; font-size: 0.8rem; }

  .badge {
    background: #2a2a38;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 700;
    color: #ff6b35;
  }

  .stat-box {
    background: #2a2a38;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    text-align: center;
    min-width: 80px;
  }
  .stat-box.accent { background: #ff3e0022; border: 1px solid #ff3e0055; }
  .stat-label { font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
  .stat-value { font-size: 1.8rem; font-weight: 800; color: #ff6b35; }
  .arrow { font-size: 1.5rem; color: #555; }

  .input-label { display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.875rem; color: #aaa; margin-bottom: 0.5rem; }
  input {
    background: #2a2a38;
    border: 1px solid #3a3a4a;
    color: #eee;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.95rem;
    max-width: 250px;
  }
  input:focus { outline: none; border-color: #ff3e00; }

  .greeting { font-size: 1.2rem; font-weight: 600; color: #ff6b35; margin: 0 0 0.75rem; }

  .log-box {
    background: #0d0d12;
    border: 1px solid #2a2a38;
    border-radius: 6px;
    padding: 0.75rem;
    min-height: 80px;
    max-height: 160px;
    overflow-y: auto;
    margin-bottom: 0.75rem;
    font-family: monospace;
    font-size: 0.8rem;
  }
  .log-entry { color: #7ddc8a; padding: 0.15rem 0; border-bottom: 1px solid #1a1a24; }
  .log-empty { color: #444; font-style: italic; }

  .code-block {
    background: #0d0d12;
    border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0;
    padding: 0.75rem 1rem;
  }
  pre { margin: 0; font-size: 0.8rem; color: #adf; white-space: pre-wrap; }
</style>
