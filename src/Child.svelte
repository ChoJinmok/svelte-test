<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('myEvent', {
      myName: 'Jinmok!!',
    });
  }
</script>

<h2>Child</h2>
<button on:click={handleClick}>
  Child click!
</button>
