<script lang="ts">
  // Props
  // eslint-disable-next-line import/no-mutable-exports
  export let fruits: string[];
  // eslint-disable-next-line import/no-mutable-exports
  export let reverse = false;
  // eslint-disable-next-line import/no-mutable-exports
  export let slice = '';
  // export라서 내보내는 것 같지만 내보내는 것이 아니라 부모 컴포넌트와 연결할 수 있는 통로를 만드는 작업이라고 보면 좋겠다.

  function computeFruits() {
    if (reverse) return [...fruits].reverse();

    if (slice) {
      const slicePrams = slice.split(',').map((pram) => Number(pram));

      return [...fruits].slice(...slicePrams);
    }

    return fruits;
  }

  function makeTitle() {
    if (reverse) return 'reverse';

    if (slice) return `slice ${slice}`;

    return '';
  }

  const title = `Fruits ${makeTitle()}`;
  const computedFruits = computeFruits();
</script>

<h2>{title}</h2>
<ul>
  {#each computedFruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
