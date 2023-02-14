<div class="box" />

<style>
  :global(body) {
    padding: 60px;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: tomato;
    border-radius: 10px;
    animation: zoom .4s infinite alternate;
  }

  /* @ At-rules (CSS의 골뱅이 규칙) */
  /**
    keyframes도 역시 유효범위를 가진다. -> Global 키워드가 다르게 생김
  */
  /* @keyframes zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  } */
  @keyframes -global-zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
</style>
