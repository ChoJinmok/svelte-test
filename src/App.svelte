<script lang="ts">
  let text = '';
  let number = 3;
  let checked = false;
  const fruits = ['Apple', 'Banana', 'Cherry'];
  let selectedFruits = [];
  let group = 'Banana';
  let textarea = '';
  let select = 'Banana';
  let multipleSelect = ['Banana', 'Cherry'];
</script>

<!-- let text = ''; -->
<section>
  <h2>Text</h2>
  <input
    type="text"
    bind:value={text} />
</section>

<!-- let number = 3; -->
<section>
  <h2>Number/Range</h2>
  <div>
    <input
      max="10"
      min="0"
      type="number"
      bind:value={number} />
  </div>
  <div>
    <input
      max="10"
      min="0"
      type="range"
      bind:value={number} />
  </div>
</section>

<!-- let checked = false; -->
<section>
  <h2>Checkbox</h2>
  <input
    type="checkbox"
    bind:checked /> Agree?
  <label>
    <input
      type="checkbox"
      bind:checked /> Agree?(label wrapping)
  </label>
</section>

<!-- let fruits = ['Apple', 'Banana', 'Cherry']; -->
<!-- let selectedFruits = []; -->
<!--
  group은 Svelte에서 제공하는 키워드
  각각 체크박스에서 선택된 값이 바인딩된 group에 들어가게된다.
  다중 선택을 하려면 전체 목록의 데이터와 선택된 데이터를 담아줄 수 있는 또 다른 목록 데이터가 필요
-->
<section>
  <h2>Checkbox 다중 선택</h2>
  <strong>Selected: {selectedFruits}</strong>
  {#each fruits as fruit}
    <label>
      <input
        type="checkbox"
        value={fruit}
        bind:group={selectedFruits} />
      {fruit}
    </label>
  {/each}
</section>

<!-- let group = 'Banana'; -->
<section>
  <h2>Radio</h2>
  <!--
  기본적으로 html에는 name attribute를 제공해서 그룹을 만들 수 있다.
  Svelte에서는 group 키워드를 통해 더 간편하게 데이터를 처리할 수 있다.
  <input
    name="my radio"
    type="radio"
    value="Apple" />
  <input
    name="my radio"
    type="radio"
    value="Banana" />
  <input
    name="my radio"
    type="radio"
    value="Cherry" />
  -->
  <strong>Selected: {group}</strong>
  <label>
    <input
      type="radio"
      value="Apple"
      bind:group /> Apple
  </label>
  <label>
    <input
      type="radio"
      value="Banana"
      bind:group /> Banana
  </label>
  <label>
    <input
      type="radio"
      value="Cherry"
      bind:group /> Cherry
  </label>
</section>

<!-- let textarea = ''; -->
<section>
  <h2>Textarea</h2>
  <pre>{textarea}</pre>
  <textarea bind:value={textarea} />
</section>

<!-- let select = 'Banana'; -->
<section>
  <h2>Select 단일 선택</h2>
  <strong>Selected: {select}</strong>
  <div>
    <select bind:value={select}>
      <option
        disabled
        value="">Please select one!</option>
      <option>Apple</option>
      <option>Banana</option>
      <option>Cherry</option>
    </select>
  </div>
</section>

<!-- let multipleSelect = ['Banana', 'Cherry']; -->
<!-- select에 multiple 추가, 브라우저에서 선택시에 command키와 함께 눌러야 선택된다. -->
<section>
  <h2>Select 다중 선택(Multiple)</h2>
  <strong>Selected: {multipleSelect}</strong>
  <div>
    <select
      multiple
      bind:value={multipleSelect}>
      <option
        disabled
        value="">Please select one!</option>
      <option>Apple</option>
      <option>Banana</option>
      <option>Cherry</option>
    </select>
  </div>
</section>
