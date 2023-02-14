<script lang="ts">
  import Fruits from './Fruits.svelte';
</script>

<h2>App.svelte</h2>
<ul class="fruits">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<Fruits />

<!--
  컴포넌트 내에서 style 태그로 작성하는 스타일은 기본적으로 해당 컴포넌트 내에서만 동작한다.
  개발자 모드로 해당 요소의 스타일을 살펴보면 임의의 클래스가 들어가있는 것을 볼 수 있다.
  임의의 클래스를 `스타일 해시`라고 부른다.
  => Svelte는 해시 기호를 통해서 유효범위를 만들고 다른 컴포넌트에 영향이 가지않게 만든다.

  스타일을 전역으로 주고 싶다면 해당 선택자 앞를 Global 수식어(Modifier)에 담아준다.
  => 더이상 해시 기호가 붙지 않게 된다.
 -->
<style>
  /* .fruits {
    color: red;
  } */

  :global(.fruits) {
    color: red;
  }

:global(.jinmok) {
    color: orange;
  }
</style>

<!--
  번들 css 파일에서 jinmok에 관한 스타일을 찾을 수 없다.
  Svelte 컴파일러는 번들이 나오기 전에 전체 코드를 평가하는데
  평가 시에 `jinmok`이라는 클래스가 붙어있는 요소가 없다.
  -> 불필요한 선택자라고 판단 -> 번들에서 제외

  `.jinmok` 선택자가 작성된 App.svelte 컴포넌트 내에 선택자와 매칭되는 요소가 없는 경우
  Svelte 컴파일러가 `.jinmok` 선택자는 필요치 않다고 판단하므로 CSS 번들에 포함시키지 않는다.

  => Svelte는 CSS도 최적화시킨다.

  평소엔 이런 기능이 편리하지만 클래스를 동적으로 삽입시키는 경우 컴파일러 평가 당시 클래스를 포함하지 않을 수 있다.
  만약 클래스가 번들에 포함되지 않았고 브라우저 런타임에서 동적으로 클래스가 추가되는 경우 CSS 번들에는 해당 스타일이 없다.
  => Global 수식어(`global()`)를 사용하면 요소의 매칭 여부와 상관없이 해당 선택자를 번들에 포함한다.
-->
