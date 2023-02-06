<script lang="ts">
  import { delayRender } from './lifecycle';

  const done = delayRender({ delay: 1000 });
</script>

{#if $done}
  <h1>Something...</h1>
{/if}
