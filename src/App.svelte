<script lang="ts">
  const { log } = console;

  function clickHandler({ currentTarget }: Event) {
    log(currentTarget);
  }

  function wheelHandler(event: Event) {
    log(event);
  }
</script>

<section>
  <!-- 기본 동작 방지 -->
  <!-- el.addEventListener('click', e => e.preventDefault()) -->
  <h2>preventDefault</h2>
  <a
    href="https://naver.com"
    target="_blank"
    on:click|preventDefault={clickHandler}
  >
    Naver
  </a>
</section>

<section>
  <!-- 최초 실행 후 핸들러 삭제 -->
  <h2>Once</h2>
  <a
    href="https://naver.com"
    target="_blank"
    on:click|preventDefault|once={clickHandler}
  >
    Naver
  </a>
</section>

<section>
  <!-- 이벤트 버블링 방지 -->
  <!-- el.addEventListener('click', e => e.stopPropagation()) -->
  <h2>stopPropagation</h2>
  <div
    class="parent"
    on:click={clickHandler}
    on:keydown={clickHandler}
  >
    <div
      class="child"
      on:click|stopPropagation={clickHandler}
      on:keydown|stopPropagation={clickHandler}
    />
  </div>
</section>

<section>
  <!-- 캡퍼링에서 핸들러 실행 -->
  <!-- el.addEventListener('click', e => {}, true) -->
  <!-- el.addEventListener('click', e => {}, { capture: true }) -->
  <h2>capture</h2>
  <div
    class="parent"
    on:click|capture={clickHandler}
    on:keydown|capture={clickHandler}
  >
    <div
      class="child"
      on:click={clickHandler}
      on:keydown={clickHandler}
    />
  </div>
</section>

<section>
  <!-- event의 target과 currentTarget이 일치하는 경우 핸들러 실행 (자기 자신을 명확하게 클릭했냐로 구분) -->
  <h2>self</h2>
  <div
    class="parent"
    on:click|self={clickHandler}
    on:keydown|self={clickHandler}
  >
    <div class="child" />
  </div>
</section>

<section>
  <!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤 -->
  <!-- el.addEventListener('wheel', e => {}, { passive: true }) -->
  <!-- 로직의 처리와 화면이 처리되는 렌더링 이벤트가 중복되서 처리할 로직이 많으면 화면의 스크롤 속도가 저하된다. -->
  <!-- 특히 모바일에서 이런 현상이 심하다 -->
  <!-- passive option을 true로 하면 이벤트 처리가 조금 느려지더라도 화면을 부드럽게 보여준다.(최대 5배 부드럽게) -->
  <h2>passive</h2>
  <div
    class="parent wheel"
    on:wheel|passive={wheelHandler}
  >
    <div class="child" />
  </div>
</section>

<style>
  section {
    border: 1px solid orange;
    padding: 10px;
    margin-bottom: 10px;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
  }

  .parent {
    width: 160px;
    height: 120px;
    background-color: royalblue;
    padding: 20px;
  }

  .child {
    width: 100px;
    height: 100px;
    background-color: tomato;
  }

  .wheel.parent {
    overflow: auto;
  }

  .wheel .child {
    height: 1000px;
  }
</style>
