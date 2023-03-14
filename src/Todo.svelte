<script lang="ts">
  import type { TodoType } from './types';

  export let title: string;
  export let done: boolean;
  export let todos: TodoType[];
  export let index: number;

  // export let deleteTodo: (id: number) => void;

    // function onClick() {
    //   deleteTodo(id);
    // }

  function deleteTodo() {
    todos.splice(index, 1);
    todos = todos;
  }
</script>

<div>
  <input
    type="checkbox"
    bind:value={done} />
  <span>{title}</span>
  <button on:click={deleteTodo}>x</button>
</div>
