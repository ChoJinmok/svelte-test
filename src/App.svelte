<script lang="ts">
  import './app.css';

  let count = 0;

  const { log } = console;

  function increase() {
    count += 1;
  }

  function current({ currentTarget }: Event) {
    log(currentTarget);
  }
</script>

<button
  on:click={increase}
  on:click={current}
  on:click={() => { log('click!'); }}
>
  Click me!
</button>

<h1>{count}</h1>
