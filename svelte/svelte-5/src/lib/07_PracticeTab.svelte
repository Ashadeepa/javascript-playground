<!--
  SVELTE 5 WORKSHOP — PRACTICE CHALLENGE
  Build a Login Form using concepts from the workshop.
-->
<script>
  let showSolution = $state(false)

  // ── Reference implementation (hidden until revealed) ──────────
  let email        = $state('')
  let password     = $state('')
  let loginPromise = $state(null)
  let showPassword = $state(false)

  let isValid = $derived(email.includes('@') && password.length >= 6)

  async function fakeLogin(em, pw) {
    await new Promise(r => setTimeout(r, 1200))
    if (em === 'demo@svelte.dev' && pw === 'svelte5') return { user: em }
    throw new Error('Invalid credentials. Try demo@svelte.dev / svelte5')
  }

  function handleSubmit() {
    if (!isValid) return
    loginPromise = fakeLogin(email, password)
  }

  function reset() {
    email = ''
    password = ''
    loginPromise = null
  }
</script>

<div class="demo">

  <!-- ═══ CHALLENGE BRIEFING ══════════════════════════════════════ -->
  <div class="practice-panel">
    <span class="practice-tag">Practice Challenge</span>
    <h2 class="practice-title">Build a Login Form</h2>
    <p class="practice-tagline">
      Time to put it all together. You'll build a working login form entirely from scratch
      in a new <code>LoginForm.svelte</code> file — using only the Svelte 5 concepts covered today.
    </p>

    <div class="concepts-used">
      <span class="concept-chip">$state</span>
      <span class="concept-chip">$derived</span>
      <span class="concept-chip">bind:value</span>
      <span class="concept-chip">{'{#if}'}</span>
      <span class="concept-chip">{'{#await}'}</span>
      <span class="concept-chip">onclick</span>
      <span class="concept-chip">class:name</span>
    </div>

    <!-- Problem Statement -->
    <div class="problem-statement">
      <div class="ps-label">Your Mission</div>
      <p class="ps-intro">
        Create a <code>LoginForm.svelte</code> component that looks and behaves like a real login form.
        Here's exactly what it should do:
      </p>

      <ol class="ps-requirements">
        <li>
          <strong>Two controlled inputs</strong> — one for <em>email</em>, one for <em>password</em>.
          Each must be two-way bound to its own reactive <code>$state</code> variable so the
          value stays in sync as the user types.
        </li>
        <li>
          <strong>Inline validation messages</strong> — show a warning beneath the email field
          if the entered value doesn't look like an email, and beneath the password field if it's
          shorter than 6 characters. These messages should only appear once the user has started
          typing (don't yell at an empty field).
        </li>
        <li>
          <strong>A computed validity flag</strong> — use <code>$derived</code> to calculate whether
          the form is ready to submit. It should be <code>true</code> only when the email contains an
          <code>@</code> symbol <em>and</em> the password is at least 6 characters.
        </li>
        <li>
          <strong>A submit button</strong> that is disabled whenever the form is not valid.
          No form submission should be possible until both fields pass their rules.
        </li>
        <li>
          <strong>An async login handler</strong> — write an <code>async function</code> that
          simulates a network request using <code>setTimeout</code> (1–2 second delay).
          If the credentials match a hardcoded pair, resolve with a user object. Otherwise,
          <code>throw</code> an error with a descriptive message.
        </li>
        <li>
          <strong>Three UI states via <code>{'{#await}'}</code></strong> — while the login is
          in progress show a loading indicator; on success show a welcome message with the user's
          email; on failure show the error message and let the user try again.
        </li>
        <li>
          <span class="bonus-badge">Bonus</span>
          <strong>Show / hide password toggle</strong> — a button next to the password field
          that switches the input between <code>type="password"</code> and <code>type="text"</code>.
          Drive it with a <code>$state</code> boolean.
        </li>
      </ol>
    </div>

    <!-- Reveal toggle -->
    <div class="reveal-bar">
      <div class="reveal-bar-left">
        <span class="stuck-label">Stuck or want to compare?</span>
        <span class="stuck-sub">The solution will appear below — try it yourself first!</span>
      </div>
      <button
        class="btn-reveal"
        class:revealed={showSolution}
        onclick={() => showSolution = !showSolution}
      >
        {#if showSolution}
          🙈 Hide Solution
        {:else}
          💡 Reveal Solution
        {/if}
      </button>
    </div>
  </div>

  <!-- ══ REFERENCE IMPLEMENTATION — hidden until revealed ══════════ -->
  {#if showSolution}
    <section class="ref-section">
      <div class="ref-header">
        <div class="ref-header-left">
          <span class="ref-tag">Reference Solution</span>
          <p class="ref-desc">One way to build it — compare with yours and spot the differences.</p>
        </div>
        <div class="ref-creds">
          <span class="creds-label">Test credentials</span>
          <code>demo@svelte.dev</code> / <code>svelte5</code>
        </div>
      </div>

      <!-- Working demo -->
      <div class="login-card">
        <div class="login-logo">🔐</div>
        <h3 class="login-title">Sign in</h3>

        {#if loginPromise}
          {#await loginPromise}
            <div class="login-loading">
              <div class="login-spinner"></div>
              <span>Signing in...</span>
            </div>

          {:then result}
            {#if result}
              <div class="login-success">
                <div class="success-icon">✅</div>
                <div class="success-title">Welcome back!</div>
                <div class="success-email">{result.user}</div>
                <button class="btn-secondary" onclick={reset}>Sign out</button>
              </div>
            {/if}

          {:catch error}
            <div class="login-error">{error.message}</div>
            <div class="login-form">
              <label class="login-field">
                Email
                <input type="email" bind:value={email} placeholder="demo@svelte.dev"
                  class:field-invalid={email && !email.includes('@')} />
                {#if email && !email.includes('@')}
                  <span class="field-hint">Enter a valid email address</span>
                {/if}
              </label>
              <label class="login-field">
                Password
                <div class="pw-row">
                  <input type={showPassword ? 'text' : 'password'} bind:value={password}
                    placeholder="6+ characters"
                    class:field-invalid={password && password.length < 6} />
                  <button class="btn-toggle-pw" type="button"
                    onclick={() => showPassword = !showPassword}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {#if password && password.length < 6}
                  <span class="field-hint">Password must be at least 6 characters</span>
                {/if}
              </label>
              <button class="btn-login" onclick={handleSubmit} disabled={!isValid}>Try again</button>
            </div>
          {/await}

        {:else}
          <div class="login-form">
            <label class="login-field">
              Email
              <input type="email" bind:value={email} placeholder="demo@svelte.dev"
                class:field-invalid={email && !email.includes('@')} />
              {#if email && !email.includes('@')}
                <span class="field-hint">Enter a valid email address</span>
              {/if}
            </label>
            <label class="login-field">
              Password
              <div class="pw-row">
                <input type={showPassword ? 'text' : 'password'} bind:value={password}
                  placeholder="6+ characters"
                  class:field-invalid={password && password.length < 6} />
                <button class="btn-toggle-pw" type="button"
                  onclick={() => showPassword = !showPassword}>
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {#if password && password.length < 6}
                <span class="field-hint">Password must be at least 6 characters</span>
              {/if}
            </label>
            <button class="btn-login" onclick={handleSubmit} disabled={!isValid}>Log in</button>
            <div class="validity-status" class:valid={isValid}>
              {#if isValid}✅ Form valid — ready to submit
              {:else}⬆️ Fill in a valid email and password (6+ chars){/if}
            </div>
          </div>
        {/if}
      </div>

      <!-- Annotations -->
      <div class="annotations">
        <div class="ann-title">What's happening under the hood</div>
        <div class="ann-grid">
          <div class="ann-item">
            <code>bind:value={'{email}'}</code>
            <span>Two-way binding — input syncs with <code>$state</code></span>
          </div>
          <div class="ann-item">
            <code>class:field-invalid={'{...}'}</code>
            <span>Conditionally applies error style from a boolean expression</span>
          </div>
          <div class="ann-item">
            <code>{'{#if email && !email.includes("@")}'}</code>
            <span>Inline validation message — only shows once the user has typed something</span>
          </div>
          <div class="ann-item">
            <code>disabled={'{!isValid}'}</code>
            <span>Button state driven by <code>$derived</code> — no manual checks needed</span>
          </div>
          <div class="ann-item">
            <code>loginPromise = fakeLogin(...)</code>
            <span>Assigning the promise triggers <code>{'{#await}'}</code> to enter loading state</span>
          </div>
          <div class="ann-item">
            <code>{'{:catch error}'}</code>
            <span>Rejected promise flows here — no <code>try/catch</code> needed in the template</span>
          </div>
        </div>
      </div>
    </section>
  {/if}

</div>

<style>
  .demo { display: flex; flex-direction: column; gap: 1.5rem; }

  /* ── Problem Statement ── */
  .problem-statement {
    background: #0f0f16;
    border: 1px solid #25253a;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.25rem;
  }

  .ps-label {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4ade80;
    margin-bottom: 0.6rem;
  }

  .ps-intro {
    font-size: 0.875rem;
    color: #aaa;
    margin: 0 0 1rem;
    line-height: 1.5;
  }

  .ps-requirements {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .ps-requirements li {
    font-size: 0.875rem;
    color: #bbb;
    line-height: 1.6;
  }

  .ps-requirements li strong { color: #e8e8f0; }
  .ps-requirements li code {
    font-family: 'Fira Code', monospace;
    font-size: 0.82rem;
    color: #a8d8ff;
    background: #1a1a2a;
    padding: 1px 5px;
    border-radius: 3px;
  }

  .bonus-badge {
    display: inline-block;
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #7c3aed22;
    border: 1px solid #7c3aed55;
    color: #a78bfa;
    padding: 1px 6px;
    border-radius: 4px;
    margin-right: 0.4rem;
    vertical-align: middle;
  }

  /* ── Reveal Bar ── */
  .reveal-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: #12121a;
    border: 1px dashed #2a3a2a;
    border-radius: 8px;
    padding: 0.875rem 1.1rem;
    flex-wrap: wrap;
  }

  .reveal-bar-left { display: flex; flex-direction: column; gap: 0.15rem; }

  .stuck-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #ccc;
  }

  .stuck-sub {
    font-size: 0.77rem;
    color: #555;
  }

  .btn-reveal {
    background: #1a2a1a;
    border: 1px solid #4ade8055;
    color: #4ade80;
    padding: 0.55rem 1.25rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .btn-reveal:hover { background: #1f3a1f; border-color: #4ade80aa; }
  .btn-reveal.revealed {
    background: #2a1a1a;
    border-color: #f8717155;
    color: #f87171;
  }
  .btn-reveal.revealed:hover { background: #3a1a1a; }

  /* ── Reference Section ── */
  .ref-section { display: flex; flex-direction: column; gap: 1.25rem; }

  .ref-header {
    background: #16161d;
    border: 1px solid #2a2a38;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .ref-tag {
    display: inline-block;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a78bfa;
    background: #7c3aed18;
    border: 1px solid #7c3aed33;
    border-radius: 4px;
    padding: 2px 7px;
    margin-bottom: 0.4rem;
  }

  .ref-desc { font-size: 0.875rem; color: #777; margin: 0.2rem 0 0; }

  .ref-creds {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-end;
  }

  .creds-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #555;
  }

  .ref-creds code {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    color: #a8d8ff;
    background: #1a1a2a;
    padding: 2px 7px;
    border-radius: 4px;
  }

  /* ── Login Card ── */
  .login-card {
    background: #1a1a24;
    border: 1px solid #2a2a38;
    border-radius: 12px;
    padding: 2rem;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .login-logo { font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem; }
  .login-title { font-size: 1.3rem; font-weight: 800; color: #fff; text-align: center; margin: 0 0 1.5rem; }
  .login-form { display: flex; flex-direction: column; gap: 1rem; }

  .login-field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #aaa;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .login-field input {
    background: #12121a;
    border: 1px solid #3a3a4a;
    color: #eee;
    padding: 0.65rem 0.75rem;
    border-radius: 7px;
    font-size: 0.95rem;
    transition: border-color 0.15s;
    width: 100%;
  }
  .login-field input:focus { outline: none; border-color: #ff3e00; }
  .login-field input.field-invalid { border-color: #f55; }

  .field-hint {
    font-size: 0.75rem;
    color: #f87171;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
  }

  .pw-row { display: flex; gap: 0.4rem; }
  .pw-row input { flex: 1; }

  .btn-toggle-pw {
    background: #2a2a38;
    border: 1px solid #3a3a4a;
    border-radius: 7px;
    color: #888;
    padding: 0 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.15s;
    flex-shrink: 0;
  }
  .btn-toggle-pw:hover { background: #3a3a4a; color: #ccc; }

  .btn-login {
    background: #ff3e00;
    border: none;
    color: #fff;
    padding: 0.75rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 700;
    transition: opacity 0.15s;
    margin-top: 0.25rem;
  }
  .btn-login:hover { opacity: 0.88; }
  .btn-login:disabled { opacity: 0.35; cursor: not-allowed; }

  .btn-secondary {
    background: #2a2a38;
    border: none;
    color: #ccc;
    padding: 0.5rem 1.25rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: background 0.15s;
  }
  .btn-secondary:hover { background: #3a3a4a; }

  .validity-status {
    font-size: 0.79rem;
    color: #666;
    text-align: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: #12121a;
    transition: all 0.2s;
  }
  .validity-status.valid { color: #4ade80; background: #1a2a1a; }

  .login-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    color: #888;
    font-size: 0.9rem;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  .login-spinner {
    width: 32px; height: 32px;
    border: 3px solid #2a2a38;
    border-top-color: #ff3e00;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .login-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    text-align: center;
  }
  .success-icon { font-size: 2.5rem; }
  .success-title { font-size: 1.15rem; font-weight: 700; color: #4ade80; }
  .success-email { font-size: 0.875rem; color: #888; margin-bottom: 0.75rem; }

  .login-error {
    background: #3a1a1a;
    border: 1px solid #f55;
    border-radius: 7px;
    padding: 0.65rem 0.875rem;
    color: #f87171;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  /* ── Annotations ── */
  .annotations {
    background: #12121a;
    border: 1px solid #25253a;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
  }

  .ann-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #a78bfa;
    margin-bottom: 0.875rem;
  }

  .ann-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.65rem;
  }
  @media (max-width: 600px) { .ann-grid { grid-template-columns: 1fr; } }

  .ann-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    background: #1a1a24;
    border: 1px solid #2a2a38;
    border-radius: 6px;
    padding: 0.6rem 0.75rem;
  }
  .ann-item code {
    font-size: 0.75rem;
    color: #a8d8ff;
    font-family: 'Fira Code', monospace;
  }
  .ann-item span { font-size: 0.78rem; color: #888; line-height: 1.4; }
</style>
