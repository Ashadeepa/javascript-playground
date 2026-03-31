<!--
  SVELTE 5 BINDINGS DEMO
  Covers: bind:value, bind:checked, bind:group (radio/checkbox), bind:this
-->
<script>
  // Text / Number bindings
  let username = $state('')
  let age      = $state(25)
  let volume   = $state(50)
  let bio      = $state('')

  // Checkbox / Toggle
  let agreed   = $state(false)

  // Radio group
  let color = $state('blue')
  const colors = ['red', 'blue', 'green', 'purple']

  // Checkbox group
  let skills   = $state(['svelte'])
  const allSkills = ['svelte', 'react', 'vue', 'angular']

  // bind:this — get a reference to a DOM element
  let inputEl = $state(null)

  function focusInput() {
    inputEl?.focus()
  }

  // Derived summary
  let summary = $derived(
    username
      ? `${username} (age ${age}) prefers ${color}. Agreed: ${agreed}. Skills: ${skills.join(', ')}`
      : 'Fill in the form above...'
  )
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Data Binding</span>
    <h2 class="cp-title">Bindings</h2>
    <p class="cp-tagline"><code>bind:</code> creates a <strong>two-way connection</strong> between a form element and a reactive variable — the variable updates when the user types, and the input reflects changes to the variable.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          Binding directives for syncing state and DOM:
          <ul>
            <li><code>bind:value</code> — text, number, range, select</li>
            <li><code>bind:checked</code> — checkboxes</li>
            <li><code>bind:group</code> — radio / multi-checkbox</li>
            <li><code>bind:this</code> — DOM element reference</li>
          </ul>
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          Svelte compiles <code>bind:value={'{'}x{'}'}</code> into both an <em>input handler</em> (reads from DOM → sets variable) and a value attribute (variable → DOM).
          For number inputs, it auto-coerces the string value to a number.
          <code>bind:this</code> stores a reference to the actual DOM element.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>No manual <code>oninput</code> handlers</li>
            <li>Type coercion handled automatically</li>
            <li>Group bindings centralise state</li>
            <li>Access DOM APIs with <code>bind:this</code></li>
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
            <div class="cp-step-code">{'<input bind:value={username} />'}</div>
            <div class="cp-step-desc"><strong>bind:value</strong> — user types → <code>username</code> updates. You change <code>username</code> → input reflects it. One directive, two directions.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'<input type="number" bind:value={age} />'}</div>
            <div class="cp-step-desc">For <code>type="number"</code> and <code>type="range"</code>, Svelte coerces the string value to a JavaScript number automatically.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'<input type="checkbox" bind:checked={agreed} />'}</div>
            <div class="cp-step-desc"><strong>bind:checked</strong> — binds to a <code>boolean</code>. Checked = <code>true</code>, unchecked = <code>false</code>.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'<input type="radio" bind:group={color} value="red" />'}</div>
            <div class="cp-step-desc"><strong>bind:group</strong> on radios — all inputs sharing the same group variable act as one group. Selected radio's <code>value</code> is assigned to <code>color</code>.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">5</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'let inputEl = $state(null)\n<input bind:this={inputEl} />'}</div>
            <div class="cp-step-desc"><strong>bind:this</strong> — stores the actual DOM element. Use it to call <code>inputEl.focus()</code>, measure dimensions, trigger animations, etc.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <div class="grid">
    <!-- ── Text Binding ── -->
    <section class="card">
      <h3><code>bind:value</code> — Text Input</h3>
      <p class="concept">Two-way sync between input and variable.</p>

      <label class="field">
        Username
        <input bind:value={username} bind:this={inputEl} placeholder="Type something..." />
      </label>
      <div class="preview">"{username}"</div>

      <label class="field">
        Bio
        <textarea bind:value={bio} rows="3" placeholder="About you..."></textarea>
      </label>

      <button class="small" onclick={focusInput}>Focus input (bind:this)</button>

      <div class="code-block">
        <pre>{'<input bind:value={username} />'}</pre>
      </div>
    </section>

    <!-- ── Number / Range ── -->
    <section class="card">
      <h3><code>bind:value</code> — Number & Range</h3>
      <p class="concept">Svelte auto-coerces types for number inputs.</p>

      <label class="field">
        Age: <strong>{age}</strong>
        <input type="number" bind:value={age} min="0" max="120" />
      </label>

      <label class="field">
        Volume: <strong>{volume}</strong>
        <input type="range" bind:value={volume} min="0" max="100" />
        <div class="volume-bar">
          <div class="volume-fill" style="width: {volume}%"></div>
        </div>
      </label>

      <div class="code-block">
        <pre>{'<input type="range" bind:value={volume} />'}</pre>
      </div>
    </section>

    <!-- ── Checkbox ── -->
    <section class="card">
      <h3><code>bind:checked</code> — Checkbox</h3>
      <p class="concept">Binds to a boolean value.</p>

      <label class="check-label">
        <input type="checkbox" bind:checked={agreed} />
        I agree to the terms
      </label>

      <div class="status" class:green={agreed}>
        {agreed ? 'Agreed!' : 'Not agreed'}
      </div>

      <div class="code-block">
        <pre>{'<input type="checkbox" bind:checked={agreed} />'}</pre>
      </div>
    </section>

    <!-- ── Radio Group ── -->
    <section class="card">
      <h3><code>bind:group</code> — Radio</h3>
      <p class="concept">All radios sharing the same group bind to the same variable.</p>

      <div class="radio-group">
        {#each colors as c}
          <label class="check-label">
            <input type="radio" bind:group={color} value={c} />
            <span class="color-dot" style="background: {c}"></span>
            {c}
          </label>
        {/each}
      </div>

      <div class="preview">Selected: <strong style="color: {color}">{color}</strong></div>

      <div class="code-block">
        <pre>{'<input type="radio" bind:group={color} value="red" />'}</pre>
      </div>
    </section>

    <!-- ── Checkbox Group ── -->
    <section class="card">
      <h3><code>bind:group</code> — Checkboxes</h3>
      <p class="concept">Multiple checkboxes build an array.</p>

      <div class="radio-group">
        {#each allSkills as skill}
          <label class="check-label">
            <input type="checkbox" bind:group={skills} value={skill} />
            {skill}
          </label>
        {/each}
      </div>

      <div class="preview">[{skills.join(', ')}]</div>

      <div class="code-block">
        <pre>{'<input type="checkbox" bind:group={skills} value="svelte" />'}</pre>
      </div>
    </section>

    <!-- ── Live Summary ── -->
    <section class="card summary-card">
      <h3>Live Summary ($derived)</h3>
      <p class="summary">{summary}</p>
    </section>
  </div>
</div>

<style>
  .demo { display: flex; flex-direction: column; gap: 1.5rem; }
  h2 { font-size: 1.6rem; margin: 0 0 0.25rem; color: #ff6b35; }

  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }

  .card {
    background: #1a1a24;
    border: 1px solid #2a2a38;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .summary-card { grid-column: 1 / -1; background: #ff3e0011; border-color: #ff3e0044; }

  h3 { margin: 0; font-size: 1rem; color: #eee; }
  h3 code { background: #ff3e0022; color: #ff6b35; padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
  .concept { color: #888; font-size: 0.8rem; margin: 0; }

  .field { display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.85rem; color: #aaa; }

  input[type="text"], input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="number"]) {
    background: #2a2a38;
    border: 1px solid #3a3a4a;
    color: #eee;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  input[type="number"] {
    background: #2a2a38; border: 1px solid #3a3a4a; color: #eee;
    padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem; width: 100%;
  }
  input:focus { outline: none; border-color: #ff3e00; }
  textarea {
    background: #2a2a38; border: 1px solid #3a3a4a; color: #eee;
    padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;
    resize: vertical; font-family: inherit;
  }
  textarea:focus { outline: none; border-color: #ff3e00; }

  input[type="range"] { width: 100%; accent-color: #ff3e00; margin-bottom: 0.25rem; }

  .volume-bar { height: 6px; background: #2a2a38; border-radius: 3px; overflow: hidden; }
  .volume-fill { height: 100%; background: #ff3e00; border-radius: 3px; transition: width 0.1s; }

  .check-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #ccc; cursor: pointer; }
  input[type="checkbox"], input[type="radio"] { accent-color: #ff3e00; width: 15px; height: 15px; cursor: pointer; }

  .status { padding: 0.4rem 0.75rem; border-radius: 6px; font-size: 0.875rem; background: #2a2a38; color: #888; }
  .status.green { background: #1a3a1a; color: #7ddc8a; }

  .radio-group { display: flex; flex-direction: column; gap: 0.4rem; }
  .color-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }

  .preview {
    background: #0d0d12;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-family: monospace;
    font-size: 0.85rem;
    color: #ff6b35;
  }

  .summary { font-size: 0.95rem; color: #ff6b35; margin: 0; font-weight: 500; }

  button.small {
    background: #2a2a38; border: none; color: #aaa; padding: 0.4rem 0.75rem;
    border-radius: 6px; cursor: pointer; font-size: 0.8rem; align-self: flex-start;
  }
  button.small:hover { background: #3a3a4a; color: #eee; }

  .code-block {
    background: #0d0d12; border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0; padding: 0.6rem 0.75rem; margin-top: auto;
  }
  pre { margin: 0; font-size: 0.75rem; color: #adf; white-space: pre-wrap; }
</style>
