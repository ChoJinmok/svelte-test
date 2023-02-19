<script lang="ts">
  // let fruits = ['Apple', 'Banana', 'Cherry', 'Apple', 'Orange'];
  // => 각각의 아이템으로 key를 주려고 하면 Apple이 중복되므로 고유하지가 않다.
  // => 보통 id를 만들어준다.

  let fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Apple' },
    { id: 5, name: 'Orange' },
  ];

  function deleteFirst() {
    fruits = fruits.slice(1);
  }
</script>

<button on:click={deleteFirst}>
  Delete first fruit!
</button>

<!--
  key를 통해서 반복되는 아이템에 고유성을 부여할 수 있다.
  만약 아이템이 기존의 key와 동일하다면 다시 렌더링하지 않는다 -> 화면을 갱신해서 렌더링하는 비용이 감소
 -->
<ul>
  {#each fruits as { id, name } (id)}
    <li>{name}</li>
  {/each}
</ul>
