<script lang="ts">
  import Something from './Something.svelte';

  let toggle = false;

  function handleToggleButtonClick() {
    toggle = !toggle;
  }
</script>

<button on:click={handleToggleButtonClick}>
  Toggle
</button>

{#if toggle}
  <Something />
{/if}
