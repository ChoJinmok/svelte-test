<script lang="ts">
  let active = false;
  // const color = 'tomato';
  // const white = 'white';
  const color = {
    t: 'tomato',
    w: '#fff',
  };
  const letterSpacing = 'letter-spacing: 5px;';

  function handleToggleButtonClick() {
    active = !active;
  }
</script>

<button on:click={handleToggleButtonClick}
>
  Toggle!
</button>

<!-- Svelte에서 `:`앞에 붙는 단어를 지시어(directive)라고 부른다. (e.g. class directive) -->
<!-- <div class={active ? 'active' : ''}> -->
<!-- <div class:active={active}> -->
<div class:active>
  Hello
</div>

<!-- 요소의 스타일 속성 바인딩 -->
<!-- <h2 style="background-color: {color.t}; color: {color.w}; {letterSpacing}"> -->
<h2
  style:background-color={color.t}
  style:color={color.w}
  style={letterSpacing}
>
  Jinmok!
</h2>

<style>
  div {
    width: 120px;
    height: 200px;
    background-color: royalblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    transition: .4s;
  }

  .active {
    width: 250px;
    background-color: tomato;
  }
</style>
