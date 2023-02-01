<script lang="ts">
  import Child from './Child.svelte';

  // eslint-disable-next-line import/prefer-default-export, import/no-mutable-exports
  export let name: string;
// -> Parent는 props를 전달해주는 역할만하는데 이는 비효율적 (다룰 필요도 없는 데이터를 중간에서 다뤄야한다.)
// Svelte는 Store로 전역상태를 관리해줄 수 있다.
</script>

<div>Parent</div>
<Child {name} />
