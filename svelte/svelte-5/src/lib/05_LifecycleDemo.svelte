<!--
  SVELTE 5 LIFECYCLE / EFFECTS DEMO
  Covers: $effect (runs after DOM update), $effect.pre (runs before DOM update),
          cleanup functions, onMount equivalent, intervals/timers
-->
<script>
  import { onMount, untrack } from 'svelte'

  // ── Timer using $effect ──
  let running  = $state(false)
  let seconds  = $state(0)
  let mounted  = $state(false)

  // $effect runs after the component mounts and every time `running` changes.
  // The returned function is the CLEANUP — called before the next run or on destroy.
  $effect(() => {
    if (!running) return  // do nothing when stopped

    const id = setInterval(() => { seconds++ }, 1000)

    // Cleanup: clear the interval when running becomes false or component unmounts
    return () => clearInterval(id)
  })

  // ── onMount equivalent ──
  // $effect with no reactive deps acts like onMount (runs once after mount)
  $effect(() => {
    mounted = true
    const entry = `[mount] Component mounted at ${new Date().toLocaleTimeString()}`
    untrack(() => {
      effectLog = [...effectLog, entry]
    })

    return () => {
      // This runs on destroy (unmount)
      untrack(() => {
        effectLog.push('[destroy] Component unmounted')
      })
    }
  })

  // ── $effect tracking a value ──
  let watchedValue = $state(0)
  let effectLog    = $state([])

  $effect(() => {
    // This runs whenever watchedValue changes
    if (watchedValue > 0) {
      const entry = `[effect] watchedValue changed → ${watchedValue}`
      untrack(() => {
        effectLog = [...effectLog, entry]
      })
    }
  })

  // ── $effect.pre — runs BEFORE DOM update ──
  let message    = $state('Hello')
  let preLog     = $state([])

  $effect.pre(() => {
    // Fires BEFORE the DOM is updated — useful for reading DOM state before a change
    if (message) {
      const entry = `[pre] About to update DOM with: "${message}"`
      untrack(() => {
        preLog = [...preLog, entry]
      })
    }
  })

  function resetTimer() { seconds = 0 }
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Lifecycle</span>
    <h2 class="cp-title">Lifecycle & Effects</h2>
    <p class="cp-tagline">In Svelte 5, <code>$effect</code> is the single unified API for all lifecycle concerns — replacing <code>onMount</code>, <code>onDestroy</code>, <code>afterUpdate</code>, and <code>$:</code> side-effects.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          Two lifecycle primitives:
          <ul>
            <li><code>$effect</code> — runs after DOM update, fires when deps change</li>
            <li><code>$effect.pre</code> — runs <em>before</em> DOM update</li>
          </ul>
          The <em>return value</em> of either is a cleanup function, called before the next run or on component destroy.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          When the component mounts, all <code>$effect</code>s run once.
          Svelte tracks which reactive values were read inside the effect.
          Any time those values change, the effect re-runs (cleanup first, then the new run).
          An effect with no reactive dependencies runs exactly once (like <code>onMount</code>).
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>One API for all lifecycle stages</li>
            <li>Built-in cleanup via return function</li>
            <li>No forgotten listener teardowns</li>
            <li><code>untrack</code> prevents infinite loops</li>
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
            <div class="cp-step-code">{'$effect(() => { console.log("mounted!") })'}</div>
            <div class="cp-step-desc"><strong>onMount equivalent</strong> — an effect with no reactive deps reads only runs once after mount. This replaces <code>onMount(() => {'{'} ... {'}'}) </code> from Svelte 4.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'$effect(() => {\n  return () => console.log("destroyed!")\n})'}</div>
            <div class="cp-step-desc"><strong>onDestroy equivalent</strong> — the returned cleanup function runs when the component unmounts. Replaces <code>onDestroy</code> from Svelte 4.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'$effect(() => {\n  if (!running) return\n  const id = setInterval(() => seconds++, 1000)\n  return () => clearInterval(id)\n})'}</div>
            <div class="cp-step-desc"><strong>Timer with cleanup</strong> — starts the interval when <code>running</code> is true. When <code>running</code> goes false, the cleanup fires (<code>clearInterval</code>) — no memory leak.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'$effect.pre(() => {\n  // Fires BEFORE DOM updates\n})'}</div>
            <div class="cp-step-desc"><strong>$effect.pre</strong> — useful when you need to read a DOM measurement <em>before</em> Svelte applies the next render (e.g. storing scroll position before a list updates).</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <!-- ── Mount status ── -->
  <section class="card">
    <h3>Component Mounted</h3>
    <div class="status" class:green={mounted}>
      {mounted ? 'Component is mounted and active' : 'Not yet mounted'}
    </div>
    <div class="code-block">
      <pre>{`// Runs once after mount (like onMount)
$effect(() => {
  console.log('mounted!')
  return () => console.log('destroyed')
})`}</pre>
    </div>
  </section>

  <!-- ── Timer demo ── -->
  <section class="card">
    <h3><code>$effect</code> with Cleanup — Interval Timer</h3>
    <p class="concept">
      The cleanup function (returned from $effect) clears the interval
      when <code>running</code> changes to false or when the component is destroyed.
    </p>

    <div class="timer-display">{String(Math.floor(seconds / 60)).padStart(2,'0')}:{String(seconds % 60).padStart(2,'0')}</div>

    <div class="row">
      <button onclick={() => running = true}  disabled={running}>Start</button>
      <button onclick={() => running = false} disabled={!running} class="stop">Stop</button>
      <button onclick={resetTimer} class="ghost">Reset</button>
    </div>

    <div class="code-block">
      <pre>{`$effect(() => {
  if (!running) return

  const id = setInterval(() => seconds++, 1000)

  // Cleanup runs when running → false, or on destroy
  return () => clearInterval(id)
})`}</pre>
    </div>
  </section>

  <!-- ── $effect tracking ── -->
  <section class="card">
    <h3>Tracking Reactive Changes with <code>$effect</code></h3>
    <p class="concept">$effect automatically tracks whichever reactive values it reads.</p>

    <div class="row">
      <button onclick={() => watchedValue++}>Increment ({watchedValue})</button>
      <button class="ghost" onclick={() => { watchedValue = 0; effectLog = [] }}>Clear</button>
    </div>

    <div class="log-box">
      {#each effectLog as entry}
        <div class="log-entry">{entry}</div>
      {:else}
        <div class="log-empty">Click increment to see effects fire...</div>
      {/each}
    </div>
  </section>

  <!-- ── $effect.pre ── -->
  <section class="card">
    <h3><code>$effect.pre</code> — Before DOM Update</h3>
    <p class="concept">Fires synchronously before the DOM is updated. Useful for reading DOM dimensions before a rerender.</p>

    <div class="row">
      <input bind:value={message} placeholder="Type a message..." />
    </div>

    <div class="log-box">
      {#each preLog.slice(-5) as entry}
        <div class="log-entry pre">{entry}</div>
      {:else}
        <div class="log-empty">Type above to see $effect.pre fire...</div>
      {/each}
    </div>

    <div class="code-block">
      <pre>{`// Runs BEFORE DOM update
$effect.pre(() => {
  console.log('DOM about to change')
})`}</pre>
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
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h3 { margin: 0; font-size: 1rem; color: #eee; }
  h3 code { background: #ff3e0022; color: #ff6b35; padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
  .concept { color: #888; font-size: 0.875rem; margin: 0; }

  .status {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    background: #2a2a38;
    color: #888;
    font-size: 0.875rem;
  }
  .status.green { background: #1a3a1a; color: #7ddc8a; }

  .timer-display {
    font-size: 3.5rem;
    font-weight: 800;
    color: #ff6b35;
    font-variant-numeric: tabular-nums;
    text-align: center;
    padding: 0.5rem;
    background: #0d0d12;
    border-radius: 8px;
  }

  .row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }

  button {
    background: #ff3e00; border: none; color: #fff;
    padding: 0.45rem 1rem; border-radius: 6px; cursor: pointer;
    font-size: 0.9rem; font-weight: 600; transition: opacity 0.15s;
  }
  button:hover { opacity: 0.85; }
  button:disabled { opacity: 0.35; cursor: not-allowed; }
  button.stop { background: #2a2a38; color: #f55; }
  button.ghost { background: #2a2a38; color: #aaa; font-size: 0.8rem; }

  input {
    flex: 1;
    background: #2a2a38; border: 1px solid #3a3a4a; color: #eee;
    padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;
    max-width: 300px;
  }
  input:focus { outline: none; border-color: #ff3e00; }

  .log-box {
    background: #0d0d12; border: 1px solid #2a2a38; border-radius: 6px;
    padding: 0.75rem; min-height: 70px; max-height: 150px; overflow-y: auto;
    font-family: monospace; font-size: 0.8rem;
  }
  .log-entry { color: #7ddc8a; padding: 0.1rem 0; }
  .log-entry.pre { color: #a78bfa; }
  .log-empty { color: #444; font-style: italic; }

  .code-block {
    background: #0d0d12; border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0; padding: 0.75rem 1rem;
  }
  pre { margin: 0; font-size: 0.78rem; color: #adf; white-space: pre-wrap; }
</style>
