<!--
  SVELTE 5 COMPONENTS DEMO
  Covers: $props(), callback props, snippets ({@snippet} / {@render})
-->
<script>
  import Badge from './Badge.svelte'
  import AlertButton from './AlertButton.svelte'

  let messages = $state([])
  let selectedTheme = $state('orange')

  function receiveMessage(msg) {
    messages = [...messages, { text: msg, time: new Date().toLocaleTimeString() }]
  }
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Components</span>
    <h2 class="cp-title">Components, Props & Snippets</h2>
    <p class="cp-tagline">Components are the building blocks of Svelte apps. Svelte 5 replaces <code>export let</code> with <code>$props()</code> and brings <strong>snippets</strong> — reusable inline HTML fragments — replacing slots.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          Three component composition patterns:
          <ul>
            <li><code>$props()</code> — declare what a component accepts</li>
            <li><strong>Callback props</strong> — child → parent communication</li>
            <li><code>{'{#snippet}'}</code> / <code>{'{@render}'}</code> — reusable HTML fragments</li>
          </ul>
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          <code>$props()</code> is destructured to declare props with optional defaults.
          Passing a <em>function</em> as a prop lets the child call it to send data upward.
          Snippets are fragments defined with <code>{'{#snippet}'}</code> and called with <code>{'{@render}'}</code> — they can accept arguments too.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>Props are explicit and destructurable</li>
            <li>No <code>createEventDispatcher</code> needed</li>
            <li>Snippets reduce boilerplate vs slots</li>
            <li>Snippets take parameters — more flexible</li>
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
            <div class="cp-step-code">let {'{'} label, color = '#ff3e00', count = 0 {'}'} = $props()</div>
            <div class="cp-step-desc"><strong>$props()</strong> is destructured like a regular object. Default values are set inline with <code>=</code>. All props the parent doesn't pass will use the default.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'<Badge label="Svelte 5" color="#ff3e00" count={5} />'}</div>
            <div class="cp-step-desc">Passing props from the parent — just like HTML attributes. Same component, different props → different appearance.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'// Child: let { onalert } = $props()\n// Child: onclick={() => onalert(value)}\n// Parent: <AlertButton onalert={receiveMessage} />'}</div>
            <div class="cp-step-desc"><strong>Callback props</strong> — pass a function down, child calls it to send data up. This replaces <code>createEventDispatcher</code> from Svelte 4.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'{#snippet btn(color, label)}'}<br/>{'  <button onclick={() => selected = color}>{label}</button>'}<br/>{'{/snippet}'}<br/>{'{@render btn("orange", "Orange")}'}</div>
            <div class="cp-step-desc"><strong>Snippets</strong> — define a reusable HTML block once with <code>{'{#snippet}'}</code>. Call it multiple times with <code>{'{@render}'}</code>, passing different arguments each time.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <!-- ── $props() explanation ── -->
  <section class="card">
    <h3><code>$props()</code> — Declaring Component Props</h3>
    <p class="concept">
      Svelte 5 uses <code>$props()</code> to declare what a component accepts.
      Replaces <code>export let</code> from Svelte 4. Supports destructuring and defaults.
    </p>
    <div class="code-block">
      <pre>{`<!-- Badge.svelte (child) -->
<script>
  let { label, color = '#ff3e00', count = 0 } = $props()
</script>

<!-- App.svelte (parent) -->
<Badge label="Svelte 5" color="#ff3e00" count={5} />`}</pre>
    </div>
  </section>

  <!-- ── Live props demo ── -->
  <section class="card">
    <h3>Live Demo — Same Component, Different Props</h3>
    <div class="badges">
      <Badge label="Svelte 5"  color="#ff3e00" count={5} />
      <Badge label="Runes"     color="#7c3aed" count={3} />
      <Badge label="Workshop"  color="#0891b2" count={1} />
      <Badge label="No Count"  color="#16a34a" />
    </div>
  </section>

  <!-- ── Callback props (child → parent) ── -->
  <section class="card">
    <h3>Callback Props — Child to Parent Communication</h3>
    <p class="concept">
      Pass a function as a prop. The child calls it; the parent reacts.
      This replaces <code>createEventDispatcher</code> from Svelte 4.
    </p>

    <div class="btn-row">
      <AlertButton label="Say Hello"   value="Hello from AlertButton!"  onalert={receiveMessage} />
      <AlertButton label="Say Goodbye" value="Goodbye from AlertButton!" onalert={receiveMessage} />
    </div>

    <div class="message-log">
      {#each messages as m}
        <div class="message">[{m.time}] {m.text}</div>
      {:else}
        <div class="empty">Click buttons above to send messages to the parent...</div>
      {/each}
    </div>

    <div class="code-block">
      <pre>{`<!-- AlertButton.svelte -->
<script>
  let { label, value, onalert } = $props()
</script>
<button onclick={() => onalert(value)}>{label}</button>

<!-- Parent -->
<AlertButton onalert={(msg) => console.log(msg)} />`}</pre>
    </div>
  </section>

  <!-- ── Snippets ── -->
  <section class="card">
    <h3><code>{'{@snippet}'}</code> + <code>{'{@render}'}</code> — Snippets</h3>
    <p class="concept">
      Snippets are reusable HTML fragments defined inline. They accept parameters
      and replace slots from Svelte 4. Defined with <code>{'{#snippet}'}</code>,
      called with <code>{'{@render}'}</code>.
    </p>

    <!-- Define a snippet with a parameter -->
    {#snippet themeButton(c, label)}
      <button
        class="theme-btn"
        class:active={selectedTheme === c}
        style="border-color: {c}"
        onclick={() => selectedTheme = c}
      >
        <span class="dot" style="background:{c}"></span>
        {label}
      </button>
    {/snippet}

    <!-- Render the snippet multiple times with different args -->
    <div class="theme-row">
      {@render themeButton('orange', 'Orange')}
      {@render themeButton('purple', 'Purple')}
      {@render themeButton('teal',   'Teal')}
      {@render themeButton('#e11d48', 'Rose')}
    </div>

    <div class="theme-preview" style="border-color: {selectedTheme}; color: {selectedTheme}">
      Selected: {selectedTheme}
    </div>

    <div class="code-block">
      <pre>{`{#snippet themeButton(color, label)}
  <button onclick={() => selected = color}>
    {label}
  </button>
{/snippet}

<!-- Reuse with different args: -->
{@render themeButton('orange', 'Orange')}
{@render themeButton('purple', 'Purple')}`}</pre>
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

  .badges { display: flex; flex-wrap: wrap; gap: 0.75rem; }
  .btn-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }

  .message-log {
    background: #0d0d12;
    border: 1px solid #2a2a38;
    border-radius: 6px;
    padding: 0.75rem;
    min-height: 70px;
    max-height: 150px;
    overflow-y: auto;
    font-family: monospace;
    font-size: 0.8rem;
  }
  .message { color: #7ddc8a; padding: 0.1rem 0; }
  .empty { color: #444; font-style: italic; }

  .theme-row { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .theme-btn {
    background: #1a1a24;
    border: 2px solid;
    color: #ccc;
    padding: 0.4rem 0.9rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.15s;
  }
  .theme-btn.active { color: #fff; background: #2a2a38; }
  .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

  .theme-preview {
    padding: 0.75rem 1rem;
    border: 2px solid;
    border-radius: 6px;
    font-weight: 600;
    background: #2a2a38;
    transition: all 0.3s;
  }

  .code-block {
    background: #0d0d12;
    border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0;
    padding: 0.75rem 1rem;
  }
  pre { margin: 0; font-size: 0.78rem; color: #adf; white-space: pre-wrap; }
</style>
