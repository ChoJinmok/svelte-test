<script lang="ts">
  // 아래와 같이 하면 input의 속성을 모두 받아와야한다.
  export let value: string;
  export let color: string;
//   export let type: string;
    //   export let placeholder: string;

// $$props: 컴포넌트에 내장되어 있는 객체(해당하는 컴포넌트가 전달받는 모든 props를 가지고 있다.) -> 위의 value와 color도 모두 포함하고 있다.
// $$restProps: value, color와 같이 명시적 `Props`를 제외한 명시하지 않고 암시적으로 내려받은 Props들으 가진 내장 객체
// 내장 객체는 별도의 선언없이 바로 사용가능
</script>

<div class="my-custom-input">
  <input
    style:color
    bind:value
    {...$$restProps}
  />
</div>

<style lang="scss">
    .my-custom-input input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>
