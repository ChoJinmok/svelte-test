<script lang="ts">
  import './app.css';

  // 가상돔을 사용하는 라이브러리나 프레임워크의 경우 `인라인 이벤트 핸들러`의 사용을 권장하지 않는다.
  // 반복문을 사용하는 경우 반복 아이템의 개수 만큼 런타임 환경에서 메모리를 차지하게 되기 때문
  // 성능 저하 -> 최적화가 필요
  // 스벨트에서는 `인라인 이벤트 핸들러`를 적극적 사용 권장
  // 자기 자신이 컴파일러이기 때문에 `인라인 이벤트 핸들러`로 작성하더라도 자동으로 최적화해주고 코드의 양(반응성 유지)을 줄일 수 있다.

  interface Fruit {
    id: number;
    name: string;
  }

  let fruits: Fruit[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];

  function assign({ id, name }) {
    return () => {
      fruits = fruits.map((fruit) => {
        if (id !== fruit.id) return fruit;

        return {
          id,
          name: `${name}!`,
        };
      });
    };
  }

  function svelteAssign(fruit: Fruit) {
    return () => {
      fruit.name += '!';
      fruits = fruits;
    // $$invalidate(0, fruits);
    };
  }
</script>

<section>
  {#each fruits as fruit (fruit.id)}
    <div
      on:click={assign(fruit)}
      on:keydown={assign(fruit)}>
      {fruit.name}
    </div>
  {/each}
</section>

<section>
  {#each fruits as fruit (fruit.id)}
    <div
      on:click={svelteAssign(fruit)}
      on:keydown={svelteAssign(fruit)}>
      {fruit.name}
    </div>
  {/each}
</section>

<!--
  스벨트에서 `인라인 이벤트 핸들러`를 사용하면 반복문 내에서 fruit라는 데이터가 무엇인지 명확히 알 수 있게 된다.
  => 반응성 구문 생략 가능!
-->
<section>
  {#each fruits as fruit (fruit.id)}
    <div
      on:click={() => { fruit.name += '!'; }}
      on:keydown={() => { fruit.name += '!'; }}>
      {fruit.name}
    </div>
  {/each}
  <!-- $$invalidate(0, each_value_1[fruit_index].name += "!", fruits); -->
</section>

<section>
  {#each fruits as { id, name } (id)}
    <div
      on:click={() => { name += '!'; }}
      on:keydown={() => { name += '!'; }}>
      {name}
    </div>
  {/each}
  <!-- $$invalidate(0, each_value[each_index].name += "!", fruits); -->
</section>
