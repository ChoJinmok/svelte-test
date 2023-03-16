<script lang="ts">
  // import { createEventDispatcher } from 'svelte';

  // const dispatch = createEventDispatcher();

  // function handleClick(event: Event) {
  //   dispatch('click', { event });
  // }

  import Child from './Child.svelte';
</script>

<!-- <h2>Parent!</h2>
<button on:click={handleClick}>
  Parent click!
</button> -->

<!-- 위의 내용을 아래와 같이 줄일 수 있다. -->
<!-- 이벤트 포워딩: 자바스크립트로 기본적으로 사용할 수 있는 이벤트는 별도의 핸들러를 붙이지 않는 경우 자식 -->
<!--  부모 컴포넌트로 이벤트가 올라가게 된다. -->
<!-- 커스텀 이벤트도 적용가능 -->
<!-- 이벤트를 위로 올려준다고 생각하면 편하다. -->

<h2>Parent!</h2>
<button on:click>
  Parent click!
</button>

<Child on:myEvent />
