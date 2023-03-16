<script lang="ts">
  import Parent from './Parent.svelte';

  // function handler({ detail }: CustomEvent) {
  //   const event = detail.event as Event;
  //   console.log(event.currentTarget);
  // }

  function handler({ currentTarget }: CustomEvent) {
    console.log(currentTarget);
  }

  function myEventHandler({ detail }: CustomEvent) {
    console.log(detail.myName);
  }
</script>

<Parent
  on:click={handler}
  on:myEvent={myEventHandler}
/>
