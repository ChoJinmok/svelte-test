<script lang="ts">
  import { lifecycle, delayRender } from './lifecycle';

  import Something from './Something.svelte';

  const done = delayRender();

  lifecycle();
</script>

{#if $done}
  <h1>Hello Lifecycle!</h1>
{/if}

<Something />
