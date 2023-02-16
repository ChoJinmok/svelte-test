<script lang="ts">
  let innerHTML = '';
  let textContent = 'Hello world!';
</script>

<!--
  아래에서 'Hello world!'는 div의 content
  contenteditable: 말그대로 content를 editor할 수 있게해준다. (보통 블록요소에 사용, div외에도 가능)
  Svelte에서는 contenteditable 속성이 붙어있는 해당 요소에 바인딩할 수 있는 개념을 두가지 제공한다.
  -> innerHTML, textContent
 -->
<div
  contenteditable
  bind:innerHTML
  bind:textContent
/>

<!--
  innerHTML: 위에서 입력한 content를 html 구조로 보여준다.
  textContent: 텍스트 내용 그대로 보여준다.
 -->
<div>{innerHTML}</div>
<div>{textContent}</div>

<!--
  html 키워드를 붙인 보간을 사용하면 html로 해석돼서 contenteditable에 작성한 내용 그대로 보여준다.
 -->
<div>{@html innerHTML}</div>

<style>
  div {
    border: 1px solid red;
    margin-bottom: 10px;
  }
</style>
