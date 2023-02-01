<script lang="ts">
  import Parent from './Parent.svelte';

  const name = 'world';
</script>

<h1>Hello {name}!</h1>
<Parent {name} />

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
