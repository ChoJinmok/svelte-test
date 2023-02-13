<script lang="ts">
  const active = true;
  const valid = false;
  const camelCase = true;

  function multi() {
    return 'active multiple-class';
  }
</script>

<!--
<div class={active ? 'active' : ''}>
  3항 연산자 보간
</div>
-->

<!--
<div class:active={active}>
  Class 지시어(Directive) 바인딩
</div>
-->

<!-- 양방향 데이터 바인딩 단축 형태는 지시어와 데이터가 이름이 같을 때 데이터는 생략가능 -->
<div class:active>
  Class 지시어 바인딩 단축 형태
</div>

<!--
속성과 다르게 지시어는 여러개 작성 가능하다
그리고 html에는 dash-case나 snake_case가 많이 사용되기 때문에 회사 컨벤션을 참고
-->
<div
  class:active
  class:camel-case={camelCase}
  class:camelCase
  class:valid
>
  다중(Multiple) Class 지시어 바인딩
</div>

<div class={multi()}>
  함수 실행
</div>
