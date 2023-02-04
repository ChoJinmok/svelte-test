<script lang="ts">
  // eslint-disable-next-line import/no-mutable-exports
  export let title: string;
  // eslint-disable-next-line import/no-mutable-exports
  export let updateTodo: (UpdateTodoPrams:{ updateTitle: string }) => void;
  // eslint-disable-next-line import/no-mutable-exports
  export let offEdit: () => void;

  // isEdit을 props로 전달받아서 반응서을 주려고 하면 정상적으로 작동하지 않는다.
  // 해결방법
  // 1. store 활용
  // 2. `isEdit`을 양방향 데이터 바인딩해준다: <EditTodo {isEdit} /> -> <EditTodo bind:isEdit={isEdit} />

  let updateTitle = title;

  function handleUpdateTodoClick() {
    updateTodo({ updateTitle });
  }

  function handleEditInputKeyDown({ key }: KeyboardEvent) {
    if (key === 'Enter') { updateTodo({ updateTitle }); }
  }
</script>

<div>
  <input
    type="text"
    bind:value={updateTitle}
    on:keydown={handleEditInputKeyDown}
  />
  <button on:click={handleUpdateTodoClick}>OK</button>
  <button on:click={offEdit}>Cancel</button>
</div>
