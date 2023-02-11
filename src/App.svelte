<script lang="ts">
  import { tick } from 'svelte';

  let count = 0;
  let double = 0;

  // 스벨트에서 Label의 별칭이 `$`인 경우에만 반응성 구문으로 동작
  // 스벨트의 반응성 구문 내부에 반응성을 가지는 데이터(count)가 명시돼있으면
  // 반응성을 가지는 데이터가 갱신이 되면 반응성 구문이 동작한다.
  // 반응성 구문은 반응성 데이터 값이 변경된 후 대기 로직이 처리되고 하면이 갱신되고 나서 동작한다.
  $: {
    double = count * 2;
    console.log('double!');
  }

  // 미리 작성돼있지 않은 데이터를 작성해줘도 동작한다.
  // $: double = count * 2;

  async function assign() {
    count += 1;
    console.time('timer');
    // double이 한박자 늦게 동작한다.
    await tick();
    console.timeEnd('timer');
    console.log(double);
  }
</script>

<button on:click={assign}>Assign!</button>

<h2>{count}</h2>
<h2>{double}</h2>
