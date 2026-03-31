<!--
  SVELTE 5 ASYNC / AWAIT DEMO
  Covers: {#await}, loading states, error handling, re-fetching
-->
<script>
  // Fake API functions to simulate network requests
  async function fetchJoke() {
    await sleep(1500)  // simulate network delay
    const jokes = [
      { setup: "Why don't scientists trust atoms?",  punchline: "Because they make up everything!" },
      { setup: "Why did the developer go broke?",    punchline: "Because they used up all their cache!" },
      { setup: "How do you comfort a JavaScript bug?", punchline: "You console it." },
      { setup: "Why do programmers prefer dark mode?",  punchline: "Because light attracts bugs!" },
      { setup: "What's a computer's favourite snack?",  punchline: "Microchips!" },
    ]
    return jokes[Math.floor(Math.random() * jokes.length)]
  }

  async function fetchWithError() {
    await sleep(1000)
    throw new Error('Network request failed (simulated)')
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // ── State ──
  let jokePromise  = $state(null)
  let errorPromise = $state(null)

  // Fetch immediately
  jokePromise = fetchJoke()

  function reload() {
    jokePromise = fetchJoke()
  }

  function triggerError() {
    errorPromise = fetchWithError()
  }

  function retryError() {
    errorPromise = null
  }

  // ── User search simulation ──
  let searchQuery = $state('')
  let searchPromise = $state(null)

  async function searchUsers(query) {
    if (!query.trim()) return []
    await sleep(800)
    const allUsers = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace']
    return allUsers.filter(u => u.toLowerCase().includes(query.toLowerCase()))
  }

  // Debounce search as user types
  let debounceTimer
  function handleSearchInput() {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (searchQuery.trim()) {
        searchPromise = searchUsers(searchQuery)
      } else {
        searchPromise = null
      }
    }, 400)
  }
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Async</span>
    <h2 class="cp-title">Async / Await in Templates</h2>
    <p class="cp-tagline"><code>{'{#await}'}</code> handles all three promise states — <em>pending</em>, <em>resolved</em>, and <em>rejected</em> — directly in your template. No manual <code>loading</code> or <code>error</code> state flags needed.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          A template block that reacts to a Promise:
          <ul>
            <li><code>{'{#await}'}</code> — loading state</li>
            <li><code>{'{:then result}'}</code> — success state</li>
            <li><code>{'{:catch error}'}</code> — error state</li>
          </ul>
          Re-trigger by reassigning the promise variable.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          Store a <code>Promise</code> in <code>$state</code>.
          The <code>{'{#await}'}</code> block subscribes to it.
          When resolved, the <code>{':then'}</code> block renders with the result.
          When rejected, the <code>{':catch'}</code> block renders with the error.
          Reassigning the promise variable immediately shows the loading state again.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>No manual <code>loading / error</code> state booleans</li>
            <li>Race conditions handled automatically</li>
            <li>Short form skips loading state when not needed</li>
            <li>Easy to re-fetch — just reassign the promise</li>
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
            <div class="cp-step-code">let jokePromise = $state(fetchJoke())</div>
            <div class="cp-step-desc">Store the Promise in <code>$state</code>. Calling the async function immediately starts fetching on component mount.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'{#await jokePromise}'}<br/>{'  <p>Loading...</p>'}<br/>{'{:then joke}'}<br/>{'  <p>{joke.punchline}</p>'}<br/>{'{:catch error}'}<br/>{'  <p>{error.message}</p>'}<br/>{'{/await}'}</div>
            <div class="cp-step-desc">Three blocks covering all promise states. Svelte re-renders the appropriate block as the promise transitions from pending → resolved (or rejected).</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'// Short form — no loading state:\n{#await promise then result}\n  <p>{result}</p>\n{/await}'}</div>
            <div class="cp-step-desc">Omit the loading block when you don't need it. Svelte renders nothing while pending, then shows the result.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">function reload() {'{'} jokePromise = fetchJoke() {'}'}</div>
            <div class="cp-step-desc"><strong>Re-fetching</strong> — simply reassign the promise variable. The <code>{'{#await}'}</code> block immediately switches to loading, cancels any in-flight render from the old promise, then shows the new result.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <!-- ── Basic #await ── -->
  <section class="card">
    <h3><code>{'{#await}'}</code> — Handling Promises</h3>
    <p class="concept">
      <code>{'{#await}'}</code> renders different content for pending, resolved,
      and rejected states. No need for manual loading flags.
    </p>

    {#await jokePromise}
      <!-- Loading state -->
      <div class="loading">
        <div class="spinner"></div>
        <span>Fetching joke...</span>
      </div>
    {:then joke}
      <!-- Success state -->
      {#if joke}
        <div class="joke-card">
          <div class="setup">{joke.setup}</div>
          <div class="punchline">{joke.punchline}</div>
        </div>
      {/if}
    {:catch error}
      <!-- Error state -->
      <div class="error-box">{error.message}</div>
    {/await}

    <button onclick={reload}>Get Another Joke</button>

    <div class="code-block">
      <pre>{`{#await promise}
  <p>Loading...</p>
{:then result}
  <p>{result.data}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await}`}</pre>
    </div>
  </section>

  <!-- ── Short form (no loading state) ── -->
  <section class="card">
    <h3>Short Form — Skip Loading State</h3>
    <p class="concept">
      Omit the loading block to render nothing while pending.
      Use when you don't need a loading indicator.
    </p>

    <div class="code-block">
      <pre>{`<!-- Shows nothing while loading, result when done -->
{#await promise then result}
  <p>{result}</p>
{/await}`}</pre>
    </div>
  </section>

  <!-- ── Error handling ── -->
  <section class="card">
    <h3>Error Handling</h3>
    <p class="concept">The <code>{'{:catch}'}</code> block handles rejected promises gracefully.</p>

    {#if !errorPromise}
      <button onclick={triggerError} class="danger">Trigger Error</button>
    {:else}
      {#await errorPromise}
        <div class="loading">
          <div class="spinner"></div>
          <span>Fetching (will fail)...</span>
        </div>
      {:then _result}
        <div class="success-box">Somehow it worked!</div>
      {:catch error}
        <div class="error-box">
          <strong>Error caught:</strong> {error.message}
          <button onclick={retryError} class="small">Dismiss</button>
        </div>
      {/await}
    {/if}
  </section>

  <!-- ── Real-world: search ── -->
  <section class="card">
    <h3>Real-world Example — Debounced Search</h3>
    <p class="concept">
      Trigger a new promise on each keystroke (debounced). Svelte automatically
      cancels rendering the old promise when a new one arrives.
    </p>

    <input
      bind:value={searchQuery}
      oninput={handleSearchInput}
      placeholder="Search users (Alice, Bob, Charlie...)"
    />

    {#if searchPromise}
      {#await searchPromise}
        <div class="loading small">
          <div class="spinner sm"></div>
          <span>Searching...</span>
        </div>
      {:then results}
        {#if results.length > 0}
          <ul class="result-list">
            {#each results as user}
              <li class="result-item">{user}</li>
            {/each}
          </ul>
        {:else}
          <div class="no-results">No users match "{searchQuery}"</div>
        {/if}
      {:catch error}
        <div class="error-box">{error.message}</div>
      {/await}
    {/if}
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

  .loading {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #888;
    font-size: 0.9rem;
    padding: 1rem;
  }
  .loading.small { padding: 0.5rem; font-size: 0.8rem; }

  @keyframes spin { to { transform: rotate(360deg); } }
  .spinner {
    width: 24px; height: 24px;
    border: 3px solid #2a2a38;
    border-top-color: #ff3e00;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    flex-shrink: 0;
  }
  .spinner.sm { width: 16px; height: 16px; border-width: 2px; }

  .joke-card {
    background: #2a2a38;
    border-radius: 8px;
    padding: 1.25rem;
  }
  .setup { color: #ccc; font-size: 1rem; margin-bottom: 0.75rem; }
  .punchline { color: #ff6b35; font-weight: 700; font-size: 1.05rem; }

  .error-box {
    background: #3a1a1a;
    border: 1px solid #f55;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: #f55;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .success-box {
    background: #1a3a1a;
    border: 1px solid #7ddc8a;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: #7ddc8a;
    font-size: 0.875rem;
  }

  button {
    background: #ff3e00; border: none; color: #fff;
    padding: 0.5rem 1.1rem; border-radius: 6px; cursor: pointer;
    font-size: 0.9rem; font-weight: 600; transition: opacity 0.15s;
    align-self: flex-start;
  }
  button:hover { opacity: 0.85; }
  button.danger { background: #7f1d1d; color: #fca5a5; border: 1px solid #f55; }
  button.small { background: #2a2a38; color: #ccc; font-size: 0.75rem; padding: 0.25rem 0.75rem; }

  input {
    background: #2a2a38; border: 1px solid #3a3a4a; color: #eee;
    padding: 0.55rem 0.75rem; border-radius: 6px; font-size: 0.95rem;
    width: 100%;
  }
  input:focus { outline: none; border-color: #ff3e00; }

  .result-list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 0.35rem;
  }
  .result-item {
    background: #2a2a38;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #eee;
  }
  .no-results { color: #666; font-style: italic; font-size: 0.875rem; padding: 0.5rem; }

  .code-block {
    background: #0d0d12; border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0; padding: 0.75rem 1rem;
  }
  pre { margin: 0; font-size: 0.78rem; color: #adf; white-space: pre-wrap; }
</style>
