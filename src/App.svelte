<script lang="ts">
  import Todo from './Todo.svelte';

  import type { TodoType } from './types';

  let todos: TodoType[] = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false },
  ];

// function deleteTodo(id) {
  //   todos = todos.filter((todo) => id !== todo.id);
  // }
</script>

{#each todos as todo, index (todo.id)}
  <Todo
    {...todo}
    {index}
    bind:todos
  />
{/each}
