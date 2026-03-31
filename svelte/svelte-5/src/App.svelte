<!--
  Svelte 5 Workshop
  Author: Krishna Kumar
  Team : QM
-->

<script>
  import SetupGuide from './lib/00_SetupGuide.svelte'
  import ReactivityDemo from './lib/01_ReactivityDemo.svelte'
  import TodoList from './lib/02_TodoList.svelte'
  import BindingsDemo from './lib/03_BindingsDemo.svelte'
  import ComponentDemo from './lib/04_ComponentDemo.svelte'
  import LifecycleDemo from './lib/05_LifecycleDemo.svelte'
  import AsyncDemo from './lib/06_AsyncDemo.svelte'
  import PracticeTab from './lib/07_PracticeTab.svelte'

  let activeTab = $state('setup')

  const tabs = [
    { id: 'setup',      label: '1. Setup',       icon: '🛠️' },
    { id: 'reactivity', label: '2. Reactivity',  icon: '⚡' },
    { id: 'todo',       label: '3. Todo List',   icon: '✅' },
    { id: 'bindings',   label: '4. Bindings',    icon: '🔗' },
    { id: 'components', label: '5. Components',  icon: '🧩' },
    { id: 'lifecycle',  label: '6. Lifecycle',   icon: '♻️' },
    { id: 'async',      label: '7. Async/Await', icon: '⏳' },
    { id: 'practice',   label: '8. Practice',    icon: '🎯' },
  ]
</script>

<div class="app">
  <header>
    <h1>Svelte 5 Workshop</h1>
    <p>Interactive demos covering core Svelte 5 concepts</p>
  </header>

  <nav class="tabs">
    {#each tabs as tab}
      <button
        class="tab-btn"
        class:active={activeTab === tab.id}
        class:setup={tab.id === 'setup'}
        class:practice={tab.id === 'practice'}
        onclick={() => activeTab = tab.id}
      >
        <span class="tab-icon">{tab.icon}</span>
        {tab.label}
      </button>
    {/each}
  </nav>

  <main class="content">
    {#if activeTab === 'setup'}
      <SetupGuide />
    {:else if activeTab === 'reactivity'}
      <ReactivityDemo />
    {:else if activeTab === 'todo'}
      <TodoList />
    {:else if activeTab === 'bindings'}
      <BindingsDemo />
    {:else if activeTab === 'components'}
      <ComponentDemo />
    {:else if activeTab === 'lifecycle'}
      <LifecycleDemo />
    {:else if activeTab === 'async'}
      <AsyncDemo />
    {:else if activeTab === 'practice'}
      <PracticeTab />
    {/if}
  </main>
</div>

<style>
  .app {
    min-height: 100vh;
    background: #0f0f13;
    color: #e8e8f0;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  header {
    background: linear-gradient(135deg, #ff3e00, #ff6b35);
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(255, 62, 0, 0.4);
  }

  header h1 {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 0.4rem;
    color: #fff;
    letter-spacing: -0.5px;
  }

  header p {
    margin: 0;
    color: rgba(255,255,255,0.85);
    font-size: 1rem;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 1rem 2rem 0;
    background: #16161d;
    border-bottom: 2px solid #2a2a38;
  }

  .tab-btn {
    background: transparent;
    border: none;
    color: #888;
    padding: 0.6rem 1.1rem;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.15s;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .tab-btn:hover {
    color: #fff;
    background: #2a2a38;
  }

  .tab-btn.active {
    background: #ff3e00;
    color: #fff;
  }

  .tab-btn.setup {
    color: #38bdf8;
  }

  .tab-btn.setup:hover {
    background: #0f1f2a;
    color: #38bdf8;
  }

  .tab-btn.setup.active {
    background: #0369a1;
    color: #fff;
  }

  .tab-btn.practice {
    color: #4ade80;
  }

  .tab-btn.practice:hover {
    color: #4ade80;
    background: #1a2a1a;
  }

  .tab-btn.practice.active {
    background: #16a34a;
    color: #fff;
  }

  .tab-icon {
    font-size: 1rem;
  }

  .content {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
