<script lang="ts">
  const name = 'world';
  let toggle = false;

  function handleToggleButtonClick() {
    toggle = !toggle;
  }

// svelte의 특수문자
  // - `#`: 시작
  // - `:`: 중간
  // - `/`: 끝
  // if문 외 each, await 구문도 모두 동일함
</script>

<!-- if 문 -->
<section>
  <button on:click={handleToggleButtonClick}>
    Toggle
  </button>
  {#if toggle}
    <h1>Hello {name}!</h1>
  {/if}
</section>

<!-- if - else 문 -->
<section>
  <button on:click={handleToggleButtonClick}>
    Toggle
  </button>
  {#if toggle}
    <h1>Hello {name}!</h1>
  {:else}
    <h2>No name!</h2>
  {/if}
</section>

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
