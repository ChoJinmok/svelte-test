<script lang="ts">
  let count = 0;

  const { log } = console;

  function fnLog() {
    log('fn: Jinmok!');
  }

  function assign() {
    count += 1;
  }

  // 선언
  // var로 변수가 생성되는 것이 아니라 Svelte가 let을 붙여준다.
  $: double = count * 2;

  // 블록
  $: {
    log(count);
    log(double);
  }

  // 함수 실행
  $: count, fnLog();

  // 즉시 실행 함수(IIFE)
  $: count, (() => {
    log('iife: Jinmok');
  })();

  // 조건문(If)
  // 해당하는 반응성 구문이 최초 렌더링시 실행되지 않길 바란다면 조건문 활용
  $: if (count > 0) {
    log('if:', double);
  }

  // 반복문(For)
  $: for (let i = 0; i < 3; i += 1) {
    count;
    log('for:', i);
  }

  // 조건문(Switch)
  $: switch (count) {
    case 1:
      log('switch: 1');
      break;
    default:
      log('switch: default');
  }

  // 유효범위
  // 반응성 구문 내부에 어떤 방식으로든 반응성 데이터가 들어가 있으면 데이터가 갱신돌 때 코드가 실행된다.
  // 코드블록의 depth와는 관계 없이 동작
  $: {
    function scope1() {
      log('scope1');

      function scope2() {
        log('scope2');

        function scope3() {
          log('scope3', count);
        }

        scope3();
      }

      scope2();
    }

    scope1();
  }
</script>

<button on:click={assign}>Assign!</button>
