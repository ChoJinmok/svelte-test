<script lang="ts">
  const isError = false;
  // let promise = new Promise((resolve) => {
  //   resolve('Hmm...');
  // });
  let promise = Promise.resolve('Hmm...');

  function fetchName() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject(new Error('Sorry...'));
      }

      setTimeout(() => {
        resolve('Jinmok');
      }, 2000);
    });
  }
</script>

<button
  on:click={() => {
    promise = fetchName();

  // 아래와 같은 방법도 가능
    // console.log(await promise);
    // promise.then((res) => {
    //   console.log(res);
    // });
  }}>
  Fetch name!
</button>

{#await promise}
  <!-- 대기(Pending) -->
  <!-- promise 객체를 기다리는 동안 보여줄 항목 작성  -->
  <p>Loading...</p>

  <!-- promise 객체가 기다려져서 반환되는 데이터를 담을 변수를 then에서 선언해준다. -->
{:then name}
  <!-- 이행(Fulfilled) -->
  <h1>{name}</h1>

  <!-- error가 발생했을 때 error 데이터를 담을 변수를 catch에서 선언해준다. -->
{:catch error}
  <!-- 거부(Rejected) -->
  <p>{error.message}</p>
{/await}

<!-- promise 객체를 await블록에서 실행하는데 대기,거부가 필요없고 이행만 필요한 경우 -->

{#await promise then name}
  <!-- 이행(Fulfilled) -->
  <h1>{name}</h1>
{/await}
