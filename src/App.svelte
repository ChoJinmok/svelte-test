<script lang="ts">
  const href = 'https://heropy.blog';
  const name = 'Heropy';
  let value = 'New input value!';
  const isUpperCase = false;
</script>

<!-- <a href="https://heropy.blog">Heropy</a> -->
<a {href}>{name}</a>

<!-- <input type="text" value="Default value.." /> -->
<input
  {value}
  on:input={(e) => { value = e.target.value; }} />
<!-- 단방향 바인딩과 양방향 바인딩의 보간법은 조금 다르다. -->
<input bind:value />

<!--
다른 프레임워크나 라이브러리는 보간법 사이에 표현식이나 함수내용을 작성하는 것을 권장하지 않는다. -> 해당하는 내용이 반복될 때 성능적으로 문제가 생길 수 있다.
단, svelte는 컴파일러이기 때문에 전체 코드를 번들하기 전에 평가할 수 있고 그때 충분히 최적화가 가능하다.
-> svelte에서 보간법은 코드량을 줄일 수 있는 방법으로 권장되고 있다.
-->
<div>{isUpperCase ? 'DIV' : 'div'}</div>
