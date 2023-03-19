<script lang="ts">
  import { getContext } from 'svelte';

  import Neo from './Neo.svelte';
  import Emily from './Emily.svelte';

  const pocketMoney = getContext('pocketMoney');
</script>

<h2>Anderson({pocketMoney})</h2>
<ul>
  <li>
    <Neo />
  </li>
  <li>
    <Emily />
  </li>
</ul>
