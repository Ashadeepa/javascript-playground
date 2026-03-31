<!--
  SIMPLE BADGE COMPONENT
  Demonstrates: $props() - Svelte 5 way to declare component props
-->
<script>
  // $props() replaces "export let" from Svelte 4
  let { label, color = '#ff3e00', count = 0 } = $props()
</script>

<div class="badge" style="border-color: {color}; color: {color}">
  <span class="label">{label}</span>
  {#if count > 0}
    <span class="count" style="background: {color}">{count}</span>
  {/if}
</div>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border: 2px solid;
    border-radius: 20px;
    padding: 0.35rem 0.85rem;
    font-size: 0.875rem;
    font-weight: 600;
    background: #1a1a24;
  }

  .count {
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
  }
</style>
