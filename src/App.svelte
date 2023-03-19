<script lang="ts">
  // module에서 export한 변수를 다음과 같이 받을 수 있다.
  import Fruit, { count } from './Fruit.svelte';

  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Mango',
    'Orange',
  ];

  function handleClick() {
    console.log(count);
  }
</script>

<button on:click={handleClick}>
  Total count log!
</button>

{#each fruits as fruit}
  <Fruit {fruit} />
{/each}
