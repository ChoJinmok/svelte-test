<script lang="ts">
  import type { Writable } from 'svelte/store';

  import EditTodo from './EditTodo.svelte';

  // eslint-disable-next-line import/no-mutable-exports
  export let todo: { id: number, title: string };
  // eslint-disable-next-line import/no-mutable-exports
  export let todos: Writable<(typeof todo)[]>;
  // 그냥 배열을 전달받는 것이 아닌 스토어 객체를 전달 받아야한다.

  let isEdit = false;

  function handleEditButtonClick() {
    isEdit = true;
  }

  function offEdit() {
    isEdit = false;
  }

  function updateTodo({ updateTitle }: { updateTitle: string }) {
    todo.title = updateTitle;

    offEdit();
  }

  function deleteTodo() {
    $todos = $todos.filter(({ id }) => id !== todo.id);
  }
</script>

{#if isEdit}
  <EditTodo
    {offEdit}
    title={todo.title}
    {updateTodo} />
{:else}
  <div>
    {todo.title}
    <button on:click={handleEditButtonClick}>Edit</button>
    <button on:click={deleteTodo}>Delete</button>
  </div>
{/if}
