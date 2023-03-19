<script lang="ts">
  import { setContext, getContext } from 'svelte';

  import Anderson from './Anderson.svelte';

  // 다음 값을 props로 Neo에 전달하려고 하려고 하면 Anderson을 거쳐서 가야했다.
  // 하지만 context api를 사용하면 Anderson을 거치지 않고 Neo(자식 컴포넌트)로 바로 전달 가능
  // 자식 컴포넌트로는 모두 전달 가능
  // 형제나 부모 컴포넌트에서는 context api를 전달받지 못한다.
  const pocketMoney = 10000;
  setContext('pocketMoney', pocketMoney);
  // 자기 자신이 만든 context api를 바로 사용할 수 있다.
  const contextPocketMoney = getContext('pocketMoney');
</script>

<h1 style:color="red">
  Heropy({contextPocketMoney})
</h1>
<ul>
  <li>
    <Anderson />
  </li>
</ul>
