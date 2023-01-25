<script lang="ts">
  export let name: string;
</script>

<main class="container mx-auto p-4 text-center">
  <h1 class="text-5xl font-bold text-red-600 uppercase">Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
