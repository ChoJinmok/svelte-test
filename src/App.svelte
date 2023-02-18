<script lang="ts">
  let count = 0;

  function onIncreaseButtonClick() {
    count += 1;
  }

  function onDecreaseButtonClick() {
    count -= 1;
  }
</script>

<button on:click={onIncreaseButtonClick}>증가!</button>
<button on:click={onDecreaseButtonClick}>감소!</button>

<h2>{count}</h2>

<section>
  <h2>if</h2>
  {#if count > 3}
    <div>count &gt; 3</div>
  {/if}
</section>

<section>
  <h2>if else</h2>
  {#if count > 3}
    <div>count &gt; 3</div>
  {:else}
    <div>count &lt;= 3</div>
  {/if}
</section>

<section>
  <h2>if else if</h2>
  {#if count > 3}
    <div>count &gt; 3</div>
  {:else if count === 3}
    <div>count === 3</div>
  {:else}
    <div>count &lt; 3</div>
  {/if}
</section>

<!--
  다른 프레임워크에서는 다중 블록을 이용해서 html을 렌더링하는 방법을 추천하지 않는다.
  가상돔을 사용하는 환경을 최적화하는 것이 중요하기 때문
  Svelte의 경우 compile된 결과를 사용하기 때문에 다중블록을 최적화 시킨다.
 -->
<section>
  <h2>다중 블록</h2>
  {#if count > 3}
    {#if count === 5}
      <div>count === 5</div>
    {:else}
      <div>count &gt; 3</div>
    {/if}
  {/if}
</section>

<style>
  section {
    border: 1px solid orange;
    margin-bottom: 10px;
  }
</style>
