<script lang="ts">
  import { writable } from 'svelte/store';

  import Todo from './Todo.svelte';

  let title = '';
  const todos = writable<{ id: number, title: string }[]>([]);
  let id = 0;

  function createTodo() {
    if (!title.trim()) {
      title = '';

      return;
    }

    const newTodos = [...$todos];

    newTodos.push({
      id,
      title,
    });

    // 반응성을 유지시켜야하기 때문에 할당을 다시 해줘야한다.
    // 자기가 자기 자신에게 재할당하는 것도 재할당으로 인식한다. -> `todos = todos;`로 작성가능함
    $todos = newTodos;

    title = '';
    id += 1;
  }

  function handleTodoTitleKeyDown({ key }: KeyboardEvent) {
    if (key === 'Enter') {
      createTodo();
    }

  // 아래와 같이 요약 가능 -> 단, eslint no-unused-expressions 에러 발생
    // key === 'Enter' && createTodo();
  }
</script>

<input
  type="text"
  bind:value={title}
  on:keydown={handleTodoTitleKeyDown}
/>
<button on:click={createTodo}>Create Todo</button>

{#each $todos as todo}
  <Todo
    {todo}
    {todos} />
{/each}
