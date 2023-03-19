<script lang="ts">
  // Getter & Setter
  // getContext & setContext

  import { getContext } from 'svelte';

  import Heropy from './Heropy.svelte';
  import Lewis from './Lewis.svelte';
  import Evan from './Evan.svelte';

  const pocketMoney = getContext('pocketMoney');
</script>

<h1>App({pocketMoney})</h1>
<div>
  <Heropy />
  <Lewis />
  <Evan />
</div>

<style lang="scss">
  h1 {
    font-size: 50px;
  }

  div {
    padding-left: 50px;
  }
</style>
