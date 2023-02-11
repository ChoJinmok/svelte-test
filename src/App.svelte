<script lang="ts">
  const { log } = console;

  // js에서 label 구문
  jinmok: {
    log('a');
    break jinmok;
    log('b');
  }

  // svelte의 반응성 구문
  const count = 0;
  $: {
    log(count);
  }
</script>
