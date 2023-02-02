<script lang="ts">
  import { storeName } from './store';

  import Parent from './Parent.svelte';

  // console.log(storeName); -> store객체는 set(할당), subscribe(구독), update(수정) 기능이 있다.
  // console.log($storeName); -> store 객체를 실제로 사용하려면 앞쪽에 `$`넣어줘야한다.
  // set, update, subscribe 메서드를 사용해 구현하는 대신, 간단하게 $ 표시를 사용하는 것을 Auto-subscription(자동 구독)이라고 한다.

  const name = 'world';
  $storeName = name;
// $ 가 붙어있으면 store 객체의 데이터로 보면 된다.
// 변수명을 정할 때 앞에 $를 붙이면 예약어 에러가 발생한다.
</script>

<h1>Hello {name}!</h1>
<Parent />

<style
  global
  lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
