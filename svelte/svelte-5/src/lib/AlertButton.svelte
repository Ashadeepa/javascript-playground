<!--
  ALERT BUTTON COMPONENT
  Demonstrates: $props() with callback functions (child → parent communication)
-->
<script>
  // Receive a callback function as a prop
  let { label, value, onalert } = $props()

  let clickCount = $state(0)

  function handleClick() {
    clickCount++
    onalert(`${value} (click #${clickCount})`)
  }
</script>

<button onclick={handleClick}>
  {label}
  {#if clickCount > 0}
    <span class="chip">{clickCount}</span>
  {/if}
</button>

<style>
  button {
    background: #2a2a38;
    border: 1px solid #3a3a4a;
    color: #ccc;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  button:hover { background: #3a3a4a; color: #fff; }

  .chip {
    background: #ff3e00;
    color: #fff;
    border-radius: 10px;
    padding: 0 6px;
    font-size: 0.7rem;
    font-weight: 700;
  }
</style>
