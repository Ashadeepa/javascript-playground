<!--
  SVELTE 5 WORKSHOP — PROJECT SETUP GUIDE
  Everything you need before writing a single line of Svelte.
-->

<div class="setup-page">

  <!-- ═══ HERO ═════════════════════════════════════════════════════ -->
  <div class="setup-hero">
    <div class="hero-logo">
      <svg width="56" height="56" viewBox="0 0 98.1 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.8 14.9C80.8-.6 60.2-4.1 44.8 5.8L17.6 22.8C10.3 27.3 5.2 34.4 3.4 42.6c-1.6 7.1-.4 14.5 3.2 20.8-2.3 3.5-3.9 7.4-4.6 11.5-1.7 9.3.8 18.9 6.8 25.8 11 15.5 31.6 19 47 9.1l27.2-17c7.3-4.5 12.4-11.6 14.2-19.8 1.6-7.1.4-14.5-3.2-20.8 2.3-3.5 3.9-7.4 4.6-11.5 1.7-9.3-.8-18.9-6.8-25.8z" fill="#FF3E00"/>
        <path d="M43.6 101.6c-8.4 2.4-17.5-.4-23-7.1-3.5-4.3-4.9-9.9-3.8-15.3.2-.8.4-1.5.6-2.3l.5-1.5 1.3 1c2.9 2.2 6.1 3.9 9.5 5l.9.3-.1.9c-.1 1.3.2 2.6.9 3.7 1.4 2 3.8 2.9 6.2 2.3.5-.1 1-.3 1.5-.6l27.2-17.1c1.3-.8 2.2-2.1 2.5-3.6.3-1.5 0-3-.8-4.3-1.4-2-3.8-2.9-6.2-2.3-.5.1-1 .3-1.5.6l-10.4 6.5c-1.5.9-3 1.7-4.6 2.2-8.4 2.4-17.5-.4-23-7.1-3.5-4.3-4.9-9.9-3.8-15.3 1.1-5.2 4.3-9.7 8.8-12.5L53.8 20c1.5-.9 3-1.7 4.6-2.2 8.4-2.4 17.5.4 23 7.1 3.5 4.3 4.9 9.9 3.8 15.3-.2.8-.4 1.5-.6 2.3l-.5 1.5-1.3-1c-2.9-2.2-6.1-3.9-9.5-5l-.9-.3.1-.9c.1-1.3-.2-2.6-.9-3.7-1.4-2-3.8-2.9-6.2-2.3-.5.1-1 .3-1.5.6L37.7 48.5c-1.4.8-2.3 2.1-2.5 3.6-.3 1.5 0 3 .8 4.3 1.4 2 3.8 2.9 6.2 2.3.5-.1 1-.3 1.5-.6l10.4-6.5c1.5-.9 3-1.7 4.6-2.2 8.4-2.4 17.5.4 23 7.1 3.5 4.3 4.9 9.9 3.8 15.3-1.1 5.2-4.3 9.7-8.8 12.5L49.5 99.4c-1.5.9-3 1.7-4.6 2.2h-.1l-.2-.1-.2.1z" fill="white"/>
      </svg>
    </div>
    <div class="hero-text">
      <h1 class="hero-title">Svelte 5 — Project Setup</h1>
      <p class="hero-sub">Get your environment ready from scratch. Follow each step in order and you'll have a running Svelte 5 app in under 5 minutes.</p>
    </div>
  </div>

  <!-- ═══ STEPS ═════════════════════════════════════════════════════ -->
  <div class="steps-container">

    <!-- ── Step 1: Prerequisites ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">01</div>
        <div>
          <div class="step-title">Prerequisites</div>
          <div class="step-subtitle">Install Node.js and a code editor before anything else</div>
        </div>
      </div>
      <div class="step-body">
        <div class="prereq-grid">
          <div class="prereq-card">
            <div class="prereq-icon">🟢</div>
            <div class="prereq-name">Node.js</div>
            <div class="prereq-version">v18 or higher</div>
            <div class="prereq-desc">Required to run Svelte's tooling and package manager. Download LTS from nodejs.org</div>
            <div class="prereq-check">
              <span class="check-label">Verify in terminal:</span>
              <code class="inline-cmd">node -v</code>
            </div>
          </div>
          <div class="prereq-card">
            <div class="prereq-icon">📦</div>
            <div class="prereq-name">npm</div>
            <div class="prereq-version">v9 or higher</div>
            <div class="prereq-desc">Comes bundled with Node.js. Used to install packages and run scripts.</div>
            <div class="prereq-check">
              <span class="check-label">Verify in terminal:</span>
              <code class="inline-cmd">npm -v</code>
            </div>
          </div>
          <div class="prereq-card">
            <div class="prereq-icon">💙</div>
            <div class="prereq-name">VS Code</div>
            <div class="prereq-version">Recommended IDE</div>
            <div class="prereq-desc">Best support for Svelte via official extension. Any editor works, but VS Code has the richest tooling.</div>
            <div class="prereq-check">
              <span class="check-label">Download from:</span>
              <code class="inline-cmd">code.visualstudio.com</code>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Step 2: VS Code Extensions ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">02</div>
        <div>
          <div class="step-title">VS Code Extensions</div>
          <div class="step-subtitle">Install these before opening any .svelte file</div>
        </div>
      </div>
      <div class="step-body">
        <div class="ext-list">
          <div class="ext-item must">
            <div class="ext-left">
              <div class="ext-label must-label">MUST HAVE</div>
              <div class="ext-name">Svelte for VS Code</div>
              <div class="ext-id">svelte.svelte-vscode</div>
              <div class="ext-desc">Syntax highlighting, IntelliSense, auto-complete, and type checking for <code>.svelte</code> files. Official extension from the Svelte team.</div>
            </div>
            <div class="ext-how">
              Open Extensions panel <span class="kbd">Ctrl+Shift+X</span>, search <strong>"Svelte for VS Code"</strong>
            </div>
          </div>
          <div class="ext-item recommended">
            <div class="ext-left">
              <div class="ext-label rec-label">RECOMMENDED</div>
              <div class="ext-name">Prettier — Code Formatter</div>
              <div class="ext-id">esbenp.prettier-vscode</div>
              <div class="ext-desc">Auto-formats <code>.svelte</code> files on save. Works with <code>prettier-plugin-svelte</code>.</div>
            </div>
          </div>
          <div class="ext-item recommended">
            <div class="ext-left">
              <div class="ext-label rec-label">RECOMMENDED</div>
              <div class="ext-name">ESLint</div>
              <div class="ext-id">dbaeumer.vscode-eslint</div>
              <div class="ext-desc">Highlights code quality issues inline as you type. Works with <code>eslint-plugin-svelte</code>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Step 3: Create Project ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">03</div>
        <div>
          <div class="step-title">Create a New Project</div>
          <div class="step-subtitle">Scaffold a Svelte 5 app with Vite (fastest way to start)</div>
        </div>
      </div>
      <div class="step-body">
        <div class="cmd-sequence">
          <div class="cmd-step">
            <div class="cmd-step-num">1</div>
            <div class="cmd-step-body">
              <div class="cmd-step-label">Run the Vite scaffolding command</div>
              <div class="cmd-block">
                <span class="cmd-prompt">$</span>
                <code>npm create vite@latest my-svelte-app -- --template svelte</code>
              </div>
              <div class="cmd-note">This creates a new folder <code>my-svelte-app/</code> pre-configured with Vite + Svelte 5.</div>
            </div>
          </div>
          <div class="cmd-step">
            <div class="cmd-step-num">2</div>
            <div class="cmd-step-body">
              <div class="cmd-step-label">Move into the project folder</div>
              <div class="cmd-block">
                <span class="cmd-prompt">$</span>
                <code>cd my-svelte-app</code>
              </div>
            </div>
          </div>
          <div class="cmd-step">
            <div class="cmd-step-num">3</div>
            <div class="cmd-step-body">
              <div class="cmd-step-label">Install dependencies</div>
              <div class="cmd-block">
                <span class="cmd-prompt">$</span>
                <code>npm install</code>
              </div>
              <div class="cmd-note">Downloads Svelte, Vite, and all required packages into <code>node_modules/</code>.</div>
            </div>
          </div>
          <div class="cmd-step">
            <div class="cmd-step-num">4</div>
            <div class="cmd-step-body">
              <div class="cmd-step-label">Start the dev server</div>
              <div class="cmd-block">
                <span class="cmd-prompt">$</span>
                <code>npm run dev</code>
              </div>
              <div class="cmd-note">Opens a local server at <code>http://localhost:5173</code> with instant hot reload.</div>
            </div>
          </div>
        </div>

        <div class="alt-box">
          <span class="alt-label">Alternative — SvelteKit (full-stack + routing)</span>
          <div class="cmd-block alt-cmd">
            <span class="cmd-prompt">$</span>
            <code>npx sv create my-app</code>
          </div>
          <div class="cmd-note">Choose this for multi-page apps, SSR, or file-based routing. Overkill for learning the basics.</div>
        </div>
      </div>
    </div>

    <!-- ── Step 4: Project Structure ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">04</div>
        <div>
          <div class="step-title">Project Structure</div>
          <div class="step-subtitle">What gets generated and what each file does</div>
        </div>
      </div>
      <div class="step-body">
        <div class="structure-layout">
          <div class="file-tree">
            <div class="tree-row folder"><span class="tree-icon">📁</span><span class="tree-name">my-svelte-app/</span></div>
            <div class="tree-row folder indent-1"><span class="tree-icon">📁</span><span class="tree-name">src/</span><span class="tree-badge important">you work here</span></div>
            <div class="tree-row file indent-2 highlight" data-ref="app"><span class="tree-icon">📄</span><span class="tree-name">App.svelte</span></div>
            <div class="tree-row file indent-2 highlight" data-ref="main"><span class="tree-icon">📄</span><span class="tree-name">main.js</span></div>
            <div class="tree-row file indent-2"><span class="tree-icon">📄</span><span class="tree-name">app.css</span></div>
            <div class="tree-row folder indent-2"><span class="tree-icon">📁</span><span class="tree-name">lib/</span><span class="tree-badge">your components</span></div>
            <div class="tree-row folder indent-1"><span class="tree-icon">📁</span><span class="tree-name">public/</span><span class="tree-badge">static assets</span></div>
            <div class="tree-row file indent-1"><span class="tree-icon">📄</span><span class="tree-name">index.html</span></div>
            <div class="tree-row file indent-1 highlight" data-ref="vite"><span class="tree-icon">📄</span><span class="tree-name">vite.config.js</span></div>
            <div class="tree-row file indent-1"><span class="tree-icon">📄</span><span class="tree-name">package.json</span></div>
          </div>

          <div class="file-explanations">
            <div class="file-exp">
              <div class="file-exp-name">App.svelte</div>
              <div class="file-exp-desc">Your root component — the entire UI tree starts here. Think of it as the "shell" of your app.</div>
            </div>
            <div class="file-exp">
              <div class="file-exp-name">main.js</div>
              <div class="file-exp-desc">Entry point. Mounts <code>App.svelte</code> into the <code>#app</code> div in <code>index.html</code>. You rarely need to change this.</div>
            </div>
            <div class="file-exp">
              <div class="file-exp-name">app.css</div>
              <div class="file-exp-desc">Global styles. Svelte components have <em>scoped</em> styles by default — use this file for resets, fonts, and variables.</div>
            </div>
            <div class="file-exp">
              <div class="file-exp-name">src/lib/</div>
              <div class="file-exp-desc">Convention for reusable components and utilities. Import from here as <code>$lib/MyComponent.svelte</code>.</div>
            </div>
            <div class="file-exp">
              <div class="file-exp-name">vite.config.js</div>
              <div class="file-exp-desc">Build tool config. The <code>@sveltejs/vite-plugin-svelte</code> plugin compiles <code>.svelte</code> files to JavaScript.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Step 5: .svelte File Anatomy ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">05</div>
        <div>
          <div class="step-title">Anatomy of a <code>.svelte</code> File</div>
          <div class="step-subtitle">Every component has three optional sections</div>
        </div>
      </div>
      <div class="step-body">
        <div class="anatomy-block">
          <div class="anatomy-section script-section">
            <div class="anatomy-tag">&lt;script&gt;</div>
            <div class="anatomy-lines">
              <span class="line comment">// JavaScript / reactive state</span>
              <span class="line rune">let count = <span class="rune-call">$state</span>(0)</span>
              <span class="line rune">let doubled = <span class="rune-call">$derived</span>(count * 2)</span>
            </div>
            <div class="anatomy-tag">&lt;/script&gt;</div>
            <div class="anatomy-note">Logic goes here — all Svelte 5 runes (<code>$state</code>, <code>$derived</code>, <code>$effect</code>, <code>$props</code>) live in this block.</div>
          </div>

          <div class="anatomy-section template-section">
            <div class="anatomy-tag">&lt;!-- Template (HTML) --&gt;</div>
            <div class="anatomy-lines">
              <span class="line html">&lt;<span class="tag">h1</span>&gt;Count: <span class="expr">{'{'}{' '}count{' '}{'}'}</span>&lt;/<span class="tag">h1</span>&gt;</span>
              <span class="line html">&lt;<span class="tag">button</span> <span class="attr">onclick</span>={'{'}() =&gt; count++{'}'}&gt;+&lt;/<span class="tag">button</span>&gt;</span>
            </div>
            <div class="anatomy-note">The HTML template. Use <code>{'{...}'}</code> to interpolate state. All template directives (<code>{'{#if}'}</code>, <code>{'{#each}'}</code>, <code>bind:</code>) go here.</div>
          </div>

          <div class="anatomy-section style-section">
            <div class="anatomy-tag">&lt;style&gt;</div>
            <div class="anatomy-lines">
              <span class="line css"><span class="selector">h1</span> {'{'} color: <span class="value">#ff3e00</span>; {'}'}</span>
            </div>
            <div class="anatomy-tag">&lt;/style&gt;</div>
            <div class="anatomy-note"><strong>Scoped by default</strong> — these styles only apply to this component. No class name collisions, no BEM needed.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Step 6: Dev Commands ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">06</div>
        <div>
          <div class="step-title">Development Commands</div>
          <div class="step-subtitle">The commands you'll use every day</div>
        </div>
      </div>
      <div class="step-body">
        <div class="commands-grid">
          <div class="command-card primary">
            <div class="command-tag dev-tag">DEV</div>
            <div class="cmd-block">
              <span class="cmd-prompt">$</span>
              <code>npm run dev</code>
            </div>
            <div class="command-desc">Starts the dev server with <strong>hot module replacement</strong>. Changes appear instantly without a page refresh. Default URL: <code>http://localhost:5173</code></div>
          </div>
          <div class="command-card">
            <div class="command-tag build-tag">BUILD</div>
            <div class="cmd-block">
              <span class="cmd-prompt">$</span>
              <code>npm run build</code>
            </div>
            <div class="command-desc">Compiles and bundles your app for production. Output goes to <code>dist/</code>. Svelte compiles to vanilla JS — <strong>no runtime overhead</strong>.</div>
          </div>
          <div class="command-card">
            <div class="command-tag preview-tag">PREVIEW</div>
            <div class="cmd-block">
              <span class="cmd-prompt">$</span>
              <code>npm run preview</code>
            </div>
            <div class="command-desc">Serves the production build locally. Run after <code>npm run build</code> to test what your users will see.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Step 7: Svelte 5 Runes Cheatsheet ── -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-badge">07</div>
        <div>
          <div class="step-title">Svelte 5 Runes — Quick Reference</div>
          <div class="step-subtitle">The four runes you'll use in this workshop</div>
        </div>
      </div>
      <div class="step-body">
        <div class="runes-grid">
          <div class="rune-card">
            <div class="rune-name">$state</div>
            <div class="rune-code">let count = $state(0)</div>
            <div class="rune-desc">Declares a reactive variable. Changing it re-renders the UI.</div>
          </div>
          <div class="rune-card">
            <div class="rune-name">$derived</div>
            <div class="rune-code">let doubled = $derived(count * 2)</div>
            <div class="rune-desc">Computes a value from other reactive variables. Auto-updates. Read-only.</div>
          </div>
          <div class="rune-card">
            <div class="rune-name">$effect</div>
            <div class="rune-code">$effect(() => {'{'}  console.log(count) {'}'})</div>
            <div class="rune-desc">Runs a side effect when dependencies change. Return a function for cleanup.</div>
          </div>
          <div class="rune-card">
            <div class="rune-name">$props</div>
            <div class="rune-code">let {'{'}  label, count = 0 {'}'} = $props()</div>
            <div class="rune-desc">Declares what a component accepts from its parent. Replaces <code>export let</code>.</div>
          </div>
        </div>

        <div class="runes-note">
          <span class="runes-note-icon">💡</span>
          Runes only work inside <code>.svelte</code> files and <code>.svelte.js</code>/<code>.svelte.ts</code> files.
          They are <strong>compiler directives</strong>, not runtime functions — Svelte transforms them at build time.
        </div>
      </div>
    </div>

    <!-- ── Ready Banner ── -->
    <div class="ready-banner">
      <span class="ready-icon">🚀</span>
      <div>
        <div class="ready-title">You're ready to code!</div>
        <div class="ready-sub">Head to the next tabs to learn each concept with live, interactive demos.</div>
      </div>
    </div>

  </div>
</div>

<style>
  .setup-page { display: flex; flex-direction: column; gap: 1.5rem; }

  /* ── Hero ── */
  .setup-hero {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    background: linear-gradient(135deg, #1c1c2a, #16161d);
    border: 1px solid #2e2e42;
    border-left: 4px solid #ff3e00;
    border-radius: 10px;
    padding: 1.5rem 1.75rem;
  }

  .hero-logo { flex-shrink: 0; }

  .hero-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 0.3rem;
  }

  .hero-sub {
    font-size: 0.875rem;
    color: #888;
    margin: 0;
    line-height: 1.5;
  }

  /* ── Step blocks ── */
  .steps-container { display: flex; flex-direction: column; gap: 1.25rem; }

  .step-block {
    background: #1a1a24;
    border: 1px solid #2a2a38;
    border-radius: 10px;
    overflow: hidden;
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #2a2a38;
    background: #16161d;
  }

  .step-badge {
    min-width: 36px;
    height: 36px;
    background: #ff3e00;
    color: #fff;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .step-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
  .step-title code { font-size: 0.95rem; color: #ff6b35; background: #ff3e0015; padding: 1px 6px; border-radius: 3px; }

  .step-subtitle {
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.1rem;
  }

  .step-body { padding: 1.25rem 1.5rem; }

  /* ── Prerequisites ── */
  .prereq-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 650px) { .prereq-grid { grid-template-columns: 1fr; } }

  .prereq-card {
    background: #12121a;
    border: 1px solid #25253a;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .prereq-icon { font-size: 1.5rem; margin-bottom: 0.2rem; }
  .prereq-name { font-size: 0.95rem; font-weight: 700; color: #fff; }
  .prereq-version { font-size: 0.72rem; font-weight: 600; color: #ff6b35; letter-spacing: 0.5px; margin-bottom: 0.25rem; }
  .prereq-desc { font-size: 0.8rem; color: #888; line-height: 1.45; flex: 1; }

  .prereq-check {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #25253a;
  }

  .check-label { font-size: 0.72rem; color: #555; }

  .inline-cmd {
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    background: #0f0f16;
    color: #a8d8ff;
    padding: 2px 7px;
    border-radius: 4px;
    border: 1px solid #2a2a38;
  }

  /* ── Extensions ── */
  .ext-list { display: flex; flex-direction: column; gap: 0.65rem; }

  .ext-item {
    border-radius: 8px;
    padding: 0.875rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .ext-item.must { background: #1c1812; border: 1px solid #ff3e0044; }
  .ext-item.recommended { background: #12121a; border: 1px solid #25253a; }

  .ext-left { display: flex; flex-direction: column; gap: 0.25rem; }

  .ext-label {
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 0.15rem;
  }

  .must-label { background: #ff3e0022; color: #ff6b35; border: 1px solid #ff3e0044; }
  .rec-label { background: #7c3aed18; color: #a78bfa; border: 1px solid #7c3aed33; }

  .ext-name { font-size: 0.9rem; font-weight: 700; color: #fff; }
  .ext-id { font-family: 'Fira Code', monospace; font-size: 0.75rem; color: #a8d8ff; }
  .ext-desc { font-size: 0.8rem; color: #888; line-height: 1.4; max-width: 480px; }
  .ext-desc code { color: #a8d8ff; font-size: 0.78rem; }

  .ext-how {
    font-size: 0.78rem;
    color: #666;
    background: #0f0f16;
    border: 1px solid #25253a;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    line-height: 1.5;
    max-width: 240px;
    flex-shrink: 0;
  }
  .ext-how strong { color: #ccc; }

  .kbd {
    display: inline-block;
    font-family: 'Fira Code', monospace;
    font-size: 0.7rem;
    background: #25253a;
    color: #ccc;
    padding: 1px 5px;
    border-radius: 3px;
    border: 1px solid #3a3a50;
  }

  /* ── Command sequence ── */
  .cmd-sequence { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem; }

  .cmd-step {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .cmd-step-num {
    min-width: 22px;
    height: 22px;
    background: #2a2a38;
    color: #888;
    border: 1px solid #3a3a50;
    border-radius: 50%;
    font-size: 0.68rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.35rem;
  }

  .cmd-step-body { flex: 1; }

  .cmd-step-label {
    font-size: 0.8rem;
    color: #aaa;
    margin-bottom: 0.3rem;
  }

  .cmd-block {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: #0a0a10;
    border: 1px solid #25253a;
    border-radius: 6px;
    padding: 0.55rem 0.875rem;
    margin-bottom: 0.3rem;
  }

  .cmd-block code {
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    font-size: 0.85rem;
    color: #a8d8ff;
  }

  .cmd-prompt {
    color: #4ade80;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    user-select: none;
  }

  .cmd-note { font-size: 0.78rem; color: #666; line-height: 1.4; }
  .cmd-note code { color: #a8d8ff; font-size: 0.76rem; }

  .alt-box {
    background: #12121a;
    border: 1px dashed #2a2a38;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    margin-top: 0.5rem;
  }

  .alt-label {
    display: block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 0.5rem;
  }

  .alt-cmd { margin-bottom: 0.3rem; }

  /* ── File Tree ── */
  .structure-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 600px) { .structure-layout { grid-template-columns: 1fr; } }

  .file-tree {
    background: #0a0a10;
    border: 1px solid #25253a;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
  }

  .tree-row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.15rem 0;
    color: #777;
  }

  .tree-row.highlight { color: #e8e8f0; }
  .tree-row.folder { color: #ccc; }
  .tree-row.indent-1 { padding-left: 1.2rem; }
  .tree-row.indent-2 { padding-left: 2.4rem; }

  .tree-icon { font-size: 0.85rem; }
  .tree-name { flex: 1; }

  .tree-badge {
    font-family: system-ui, sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    background: #ff3e0015;
    color: #ff6b35;
    border: 1px solid #ff3e0030;
    padding: 1px 5px;
    border-radius: 3px;
    white-space: nowrap;
  }

  .tree-badge.important { background: #ff3e0030; border-color: #ff3e0060; }

  .file-explanations { display: flex; flex-direction: column; gap: 0.75rem; }

  .file-exp {
    border-left: 2px solid #ff3e0044;
    padding: 0.4rem 0.75rem;
  }

  .file-exp-name {
    font-family: 'Fira Code', monospace;
    font-size: 0.82rem;
    color: #a8d8ff;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .file-exp-desc { font-size: 0.8rem; color: #888; line-height: 1.45; }
  .file-exp-desc code { color: #a8d8ff; font-size: 0.78rem; }
  .file-exp-desc em { color: #ccc; font-style: normal; }

  /* ── File anatomy ── */
  .anatomy-block {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .anatomy-section {
    border-radius: 8px;
    padding: 0.875rem 1rem;
  }

  .script-section { background: #12121a; border: 1px solid #ff3e0033; border-left: 3px solid #ff3e00; }
  .template-section { background: #121a12; border: 1px solid #4ade8033; border-left: 3px solid #4ade80; }
  .style-section { background: #12121a; border: 1px solid #7c3aed33; border-left: 3px solid #7c3aed; }

  .anatomy-tag {
    font-family: 'Fira Code', monospace;
    font-size: 0.78rem;
    color: #555;
    margin-bottom: 0.4rem;
  }

  .anatomy-lines {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0 0 0.4rem 0.75rem;
  }

  .line {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    display: block;
  }

  .line.comment { color: #555; }
  .line.rune { color: #e8e8f0; }
  .line.html { color: #e8e8f0; }
  .line.css { color: #e8e8f0; }

  .rune-call { color: #ff6b35; font-weight: 600; }
  .tag { color: #7ddc8a; }
  .attr { color: #a8d8ff; }
  .expr { color: #ffd580; }
  .selector { color: #7ddc8a; }
  .value { color: #ffd580; }

  .anatomy-note { font-size: 0.78rem; color: #888; margin-top: 0.3rem; line-height: 1.4; }
  .anatomy-note code { color: #a8d8ff; font-size: 0.76rem; }
  .anatomy-note strong { color: #ccc; }

  /* ── Commands grid ── */
  .commands-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 650px) { .commands-grid { grid-template-columns: 1fr; } }

  .command-card {
    background: #12121a;
    border: 1px solid #25253a;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .command-card.primary { border-color: #4ade8033; background: #121a12; }

  .command-tag {
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 3px;
    display: inline-block;
    width: fit-content;
  }

  .dev-tag { background: #4ade8022; color: #4ade80; border: 1px solid #4ade8044; }
  .build-tag { background: #a78bfa22; color: #a78bfa; border: 1px solid #a78bfa44; }
  .preview-tag { background: #38bdf822; color: #38bdf8; border: 1px solid #38bdf844; }

  .command-desc { font-size: 0.78rem; color: #888; line-height: 1.45; }
  .command-desc strong { color: #ccc; }
  .command-desc code { font-family: 'Fira Code', monospace; font-size: 0.76rem; color: #a8d8ff; }

  /* ── Runes grid ── */
  .runes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) { .runes-grid { grid-template-columns: 1fr; } }

  .rune-card {
    background: #12121a;
    border: 1px solid #25253a;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .rune-name {
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: #ff6b35;
  }

  .rune-code {
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    color: #a8d8ff;
    background: #0a0a10;
    border-left: 2px solid #ff3e0055;
    padding: 0.25rem 0.6rem;
    border-radius: 0 4px 4px 0;
  }

  .rune-desc { font-size: 0.78rem; color: #888; line-height: 1.4; }
  .rune-desc code { color: #a8d8ff; font-size: 0.76rem; }

  .runes-note {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    background: #1a181a;
    border: 1px solid #ff3e0022;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
    color: #888;
    line-height: 1.5;
  }

  .runes-note-icon { font-size: 1rem; flex-shrink: 0; }
  .runes-note code { color: #a8d8ff; font-size: 0.78rem; }
  .runes-note strong { color: #e8e8f0; }

  /* ── Ready banner ── */
  .ready-banner {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #1a2a1a, #131a10);
    border: 1px solid #4ade8033;
    border-left: 4px solid #4ade80;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
  }

  .ready-icon { font-size: 2rem; flex-shrink: 0; }

  .ready-title {
    font-size: 1rem;
    font-weight: 700;
    color: #4ade80;
    margin-bottom: 0.2rem;
  }

  .ready-sub { font-size: 0.82rem; color: #777; }
</style>
