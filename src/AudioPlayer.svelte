<script
  context="module"
  lang="ts"
>
  const players = new Set<string>();

  export function stopAll() {
    players.forEach((player) => player.pause());
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  export let src: string;

  let player: HTMLAudioElement;

  onMount(() => {
    // Like players.push(player)
    players.add(player);
  });
</script>

<div>
  <audio
    bind:this={player}
    controls
    {src}
  >
    <track kind="captions" />
  </audio>
</div>
