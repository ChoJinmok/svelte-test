<script
  context="module"
  lang="ts"
>
  // module로 해석될 떄 동작
  // module에 변수를 지정하면 해당 모든 컴포넌트에서 값을 공유한다.
  // 모든 컴포넌트를 아우르는 전역화된 데이터로 사용가능
  // 컴포넌트를 가지고와서 사용하려고 하는 시점에 한번만 실행
  // 컴포넌트를 import해오는 것이 하나의 외부 모듈을 가지고오는 것과 같다.
  // 단, module에서 정의된 변수는 반응성을 가질 수 없다. -> 데이터가 변경됐을 떄 화면이 갱신되지 않는다.
  // -> 화면이 갱신되는 용도로는 사용할 수 없다. -> 아래 count가 화면에서 바뀌지 않는 것을 볼 수 있다.
  // 부모 컴포넌트에서 사용하려면 export 해준다. -> import에서 값을 받아준다.
  export let count = 0;

  // 아래 콘솔이 컴포넌트를 가기고 올 때 한번만 실행되는 것을 볼 수 있다.
  console.log('Module context!');
</script>

<script lang="ts">
  export let fruit: string;

  // 아래 콘솔이 컴포넌트마다 실행되는 것을 볼 수 있다.
  console.log('Each component init!');

  // 아래와 같이 작성하면 컴포넌트 별로 count를 따로 가진다.
  // 각각의 Fruit라는 컴포넌트를 실행할 때 동작(초기화)
  // let count = 0;

  function handleClick() {
    count += 1;
  // console.log(count);
  }
</script>

<div
  on:click={handleClick}
  on:keydown={handleClick}>
  {fruit}({count})
</div>
