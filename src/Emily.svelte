<script lang="ts">
  import { getContext } from 'svelte';

  const pocketMoney = getContext('pocketMoney');
</script>

<h3>Emily({pocketMoney})</h3>
