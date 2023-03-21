<script lang="ts">
  import TextField from './TextField.svelte';

  let id = '';
  let pw = '';
</script>

<TextField
  color="yellowgreen"
  maxlength="10"
  placeholder="ID!"
  required
  type="email"
  bind:value={id}
/>
<TextField
  color="red"
  placeholder="Password!"
  required
  type="password"
  bind:value={pw}
/>
