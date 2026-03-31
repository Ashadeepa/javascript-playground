<!--
  SVELTE 5 TODO LIST
  Covers: $state with arrays, {#each}, {#if}, bind:value, event handling
-->
<script>
  let newTodo  = $state('')
  let filter   = $state('all')  // 'all' | 'active' | 'done'

  // $state with an array — mutations trigger reactivity
  let todos = $state([
    { id: 1, text: 'Learn Svelte 5 runes',    done: true  },
    { id: 2, text: 'Build a demo app',         done: false },
    { id: 3, text: 'Teach the workshop',       done: false },
  ])

  // $derived — filters the list whenever todos or filter changes
  let filtered = $derived(
    filter === 'all'    ? todos :
    filter === 'active' ? todos.filter(t => !t.done) :
                          todos.filter(t =>  t.done)
  )

  let remaining = $derived(todos.filter(t => !t.done).length)

  let nextId = $state(4)

  function addTodo() {
    const text = newTodo.trim()
    if (!text) return
    todos = [...todos, { id: nextId++, text, done: false }]
    newTodo = ''
  }

  function removeTodo(id) {
    todos = todos.filter(t => t.id !== id)
  }

  function toggleTodo(id) {
    todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
  }

  function clearDone() {
    todos = todos.filter(t => !t.done)
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') addTodo()
  }
</script>

<div class="demo">

  <!-- ═══ CONCEPT PANEL ══════════════════════════════════════════ -->
  <div class="concept-panel">
    <span class="cp-tag">Svelte 5 Templates</span>
    <h2 class="cp-title">Lists, Conditionals & Events</h2>
    <p class="cp-tagline">Svelte's template syntax lets you loop over arrays, conditionally show content, and respond to user events — all without a virtual DOM.</p>

    <div class="cp-cols">
      <div class="cp-col">
        <div class="cp-col-icon">📖</div>
        <div class="cp-col-label">What it is</div>
        <div class="cp-col-body">
          Template directives built into Svelte's compiler:
          <ul>
            <li><code>{'{#each}'}</code> — loop over arrays</li>
            <li><code>{'{#if}'}</code> — conditional rendering</li>
            <li><code>onclick</code> — event handlers</li>
            <li><code>$state</code> arrays — reactive lists</li>
          </ul>
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">⚙️</div>
        <div class="cp-col-label">How it works</div>
        <div class="cp-col-body">
          <code>{'{#each}'}</code> iterates an array and renders a block per item.
          The optional <em>key</em> <code>(todo.id)</code> tells Svelte which DOM node maps to which item — enabling efficient updates and animations.
          <code>{'{#if}'}</code> adds/removes DOM nodes based on a condition.
        </div>
      </div>
      <div class="cp-col">
        <div class="cp-col-icon">✨</div>
        <div class="cp-col-label">Benefits</div>
        <div class="cp-col-body">
          <ul>
            <li>No manual <code>.map()</code> or ternary JSX</li>
            <li>Keyed lists = minimal DOM updates</li>
            <li><code>{'{:else}'}</code> for empty-state UI</li>
            <li>Reactive arrays — just reassign</li>
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
            <div class="cp-step-code">let todos = $state([{'{'} id:1, text:'...', done:false {'}'}])</div>
            <div class="cp-step-desc">Wrap the array in <code>$state</code>. Svelte 5 deeply tracks it — even mutations to objects inside the array trigger re-renders.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">2</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'{#each filtered as todo (todo.id)}'}</div>
            <div class="cp-step-desc">The <strong>key</strong> <code>(todo.id)</code> is critical — it lets Svelte efficiently reorder / add / remove DOM elements without re-creating the whole list.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">3</div>
          <div class="cp-step-body">
            <div class="cp-step-code">{'<li class:done={todo.done}>'}</div>
            <div class="cp-step-desc"><code>class:name={'{'}expression{'}'}</code> toggles a CSS class based on a boolean — no template string needed. <code>.done</code> class adds strike-through styling.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">4</div>
          <div class="cp-step-body">
            <div class="cp-step-code">todos = [...todos, {'{'} id: nextId++, text, done: false {'}'}]</div>
            <div class="cp-step-desc">Reactivity requires <em>reassignment</em>. Mutating with <code>.push()</code> does not trigger updates in Svelte 5 unless you use a deeply reactive state object.</div>
          </div>
        </div>
        <div class="cp-step">
          <div class="cp-step-num">5</div>
          <div class="cp-step-body">
            <div class="cp-step-code">let filtered = $derived(todos.filter(t => !t.done))</div>
            <div class="cp-step-desc"><code>$derived</code> auto-recalculates whenever <code>todos</code> or <code>filter</code> changes — no need to manually call filter functions.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="cp-divider" />

  <!-- ── Add Item ── -->
  <section class="card">
    <h3><code>{'{'}#each{'}'}</code> + <code>$state</code> Array + Events</h3>
    <p class="concept">Reactive arrays, looping over lists, conditional classes, and user events.</p>

    <div class="add-row">
      <input
        bind:value={newTodo}
        onkeydown={handleKeydown}
        placeholder="What needs to be done?"
      />
      <button onclick={addTodo}>Add</button>
    </div>

    <!-- ── Filter Tabs ── -->
    <div class="filter-row">
      {#each ['all', 'active', 'done'] as f}
        <button
          class="filter-btn"
          class:active={filter === f}
          onclick={() => filter = f}
        >
          {f}
        </button>
      {/each}
      <span class="remaining">{remaining} left</span>
    </div>

    <!-- ── List ── -->
    <ul class="todo-list">
      {#each filtered as todo (todo.id)}
        <li class="todo-item" class:done={todo.done}>
          <input
            type="checkbox"
            checked={todo.done}
            onchange={() => toggleTodo(todo.id)}
          />
          <span class="todo-text">{todo.text}</span>
          <button class="delete-btn" onclick={() => removeTodo(todo.id)}>✕</button>
        </li>
      {:else}
        <li class="empty">No todos to show</li>
      {/each}
    </ul>

    {#if todos.some(t => t.done)}
      <button class="ghost" onclick={clearDone}>Clear completed</button>
    {/if}
  </section>

  <!-- ── Code reference ── -->
  <section class="card code-card">
    <h3>Key Patterns</h3>
    <div class="code-block">
      <pre>{`// Reactive array
let todos = $state([...])

// Loop with unique key
{#each filtered as todo (todo.id)}
  <li class:done={todo.done}>{todo.text}</li>
{:else}
  <li>No items</li>
{/each}

// Conditional render
{#if count > 0}
  <button>Clear</button>
{/if}`}</pre>
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

  .add-row { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }

  input[type="text"], input:not([type]) {
    flex: 1;
    background: #2a2a38;
    border: 1px solid #3a3a4a;
    color: #eee;
    padding: 0.55rem 0.75rem;
    border-radius: 6px;
    font-size: 0.95rem;
  }
  input:focus { outline: none; border-color: #ff3e00; }

  button {
    background: #ff3e00;
    border: none;
    color: #fff;
    padding: 0.5rem 1.1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: opacity 0.15s;
    white-space: nowrap;
  }
  button:hover { opacity: 0.85; }
  button.ghost { background: #2a2a38; color: #aaa; font-size: 0.8rem; margin-top: 0.5rem; }

  .filter-row { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.75rem; }
  .filter-btn { background: #2a2a38; color: #888; padding: 0.3rem 0.75rem; font-size: 0.8rem; border-radius: 20px; font-weight: 500; }
  .filter-btn.active { background: #ff3e00; color: #fff; }
  .remaining { margin-left: auto; font-size: 0.8rem; color: #666; }

  .todo-list { list-style: none; padding: 0; margin: 0 0 0.5rem; display: flex; flex-direction: column; gap: 0.4rem; }
  .todo-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #2a2a38;
    padding: 0.6rem 0.75rem;
    border-radius: 6px;
    transition: opacity 0.2s;
  }
  .todo-item.done { opacity: 0.5; }
  .todo-item.done .todo-text { text-decoration: line-through; }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #ff3e00;
    cursor: pointer;
    flex-shrink: 0;
  }

  .todo-text { flex: 1; font-size: 0.95rem; }
  .delete-btn {
    background: transparent;
    color: #555;
    padding: 0.2rem 0.4rem;
    font-size: 0.75rem;
    border-radius: 4px;
  }
  .delete-btn:hover { color: #f55; background: #3a2a2a; }

  .empty { color: #555; font-style: italic; padding: 0.75rem; text-align: center; }

  .code-card { background: #12121a; }
  .code-block {
    background: #0d0d12;
    border-left: 3px solid #ff3e00;
    border-radius: 0 6px 6px 0;
    padding: 0.75rem 1rem;
  }
  pre { margin: 0; font-size: 0.8rem; color: #adf; white-space: pre-wrap; }
</style>
