<script lang="ts">
  import { tick } from 'svelte';

  let isShow = false;
  // Svelte는 this 키워드를 일반요소에 바인딩해서 해당요소를 아래 처럼 직접 검색하지 않고 바로 참조할 수 있다.
  let inputEl: HTMLInputElement;

  async function toggle() {
    isShow = !isShow;

    // const inputEl = document.querySelector('input');
    // querySelector나 querySelectorAll같이 해당 요소를 doc에서 검색하면
    // 전체 돔을 한번 검색해야하기 때문에 성능이 떨어지게 된다.
    // -> 검색보다 요소를 직접 바인딩해서 요소 가져오기!

    await tick();

    if (inputEl) inputEl.focus();
  }
</script>

<button on:click={toggle}>Edit!</button>
{#if isShow}
  <input bind:this={inputEl} />
{/if}
