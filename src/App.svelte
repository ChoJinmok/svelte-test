<script lang="ts">
  import Count from './Count.svelte';

  let reset = false;

  function handleClick() {
    reset = !reset;
  }
</script>

<!--
  Key 블록은 연결된 데이터의 값이 변경될 때마다 내용을 파괴하고 다시 생성
 -->
{#key reset}
  <Count />
{/key}

<button on:click={handleClick}>
  Reset!
</button>
