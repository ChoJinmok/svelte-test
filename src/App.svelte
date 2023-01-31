<script lang="ts">
  import Fruits from './Fruits.svelte';

  const fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>

<Fruits {fruits} />
<Fruits
  {fruits}
  reverse />
<Fruits
  {fruits}
  slice="-2" />
<Fruits
  {fruits}
  slice="0, 3" />

<!-- 똑같은 구조가 반복되는 것을 볼 수 있다. -> 컴포넌트화 -->
<!-- <h2>Fruits</h2>
<ul>
  {#each fruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>

<h2>Fruits reverse</h2>
<ul>
  {#each [...fruits].reverse() as fruit}
    <li>{fruit}</li>
  {/each}
</ul>

<h2>Fruits slice -2</h2>
<ul>
  {#each fruits.slice(-2) as fruit}
    <li>{fruit}</li>
  {/each}
</ul> -->

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
