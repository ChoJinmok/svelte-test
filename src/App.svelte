<script lang="ts">
  import Todo from './Todo.svelte';

  let todos = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false },
  ];

  // `createEventDispatcher` 함수에서 `new CustomEvent()`를 통해 커스텀 이벤트를 생성한다.
  // 따라서 `event.detail`을 사용할 수 있다.
  function deleteTodo({ detail: todo }: CustomEvent) {
    todos = [...todos].filter(({ id }) => id !== todo.id);
  }
</script>

{#each todos as todo (todo.id)}
  <Todo
    {...todo}
    on:deleteMe={deleteTodo} />
{/each}
