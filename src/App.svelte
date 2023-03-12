<script lang="ts">
  import { onMount } from 'svelte';

  import Jinmok from './Jinmok.svelte';
  import Footer from './Footer.svelte';

  let jinmok;

  onMount(() => {
    console.log(jinmok);
  // svelte 내에서는 컴포넌트 내의 특정 데이터 접근을 막고 있다.
    // 아래에서 에러 발생
    // console.log(jinmok.title);
    // 에러르 보면 알 수 있듯이 Svelte의 특별한 요소 `<svelte:options>`의 `접속 허용` 속성인 `access`를 사용하면,
    // 컴포넌트 내 일부 데이터에 접근할 수 있다.
    // 이 내용은 `특별한 요소 - options - 접근 허용(access)` 파트에서 자세히...
  });
</script>

<!--
  아래에서 title은 props지만 html의 속성과 이름이 같다.
  `title`속성은 html에서 모든 태그(in Body)에 사용 가능한 전역 속성(Global Attribute)이다.

  다른 프레임워크 대표적으로 Vue.js(2버전 기준)의 경우 하나의 컴포넌트 내 최상위 요소를 1개만 가질 수 있다.
  즉, '컴포넌트 = 최상위 요소'가 성립한다.
  따라서 컴포넌트에 사용하는 Props를 `title`과 같이 html에 존재하는 속성(Attribute) 이름으로 작성하는 경우
  Props와 HTML 속성이 중복되는 문제가 발생한다.
  따라서 2개 이상의 단어를 조합해 사용하는(e.g. `my-title`) 커스텀 속성(Custom Attributes)의 사용을 권장

  Svelte의 경우는 하나의 컴포넌트 내 최상위 요소가 여개이기 때문에 '컴포넌트 = 최상위요소'가 성립하지 않아,
  Props가 HTML 속성의 이름과 중복되는 문제가 발생하지 않는다.
  따라서 제약없이 Props 이름을 지정할 수 있다.
 -->

<!--
    일반요소 바인딩(해당하는 요소와 변수를 연결)과 동일하게 컴포넌트에 적용할 수 있다.
    그런데 컴포넌트에 바인딩하면 변수(데이터)가 컴포넌트 정보를 가지게된다.(컴포넌트 객체가 됨)
  -->
<Jinmok
  bind:this={jinmok}
  title="Good~" />
<Footer />
