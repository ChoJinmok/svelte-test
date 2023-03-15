<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: number;
  export let done: boolean;
  export let title: string;

  const dispatch = createEventDispatcher();

  function deleteTodo() {
    // 두번째 인자로 객체를 넘겨주면 이벤트가 많아졌을 때 좀 더 명확하다.
    dispatch('deleteMe', {
      id,
    });
  }
</script>

<div>
  <input
    type="checkbox"
    bind:value={done} />
  <span>{title}</span>
  <button on:click={deleteTodo}>x</button>
</div>
