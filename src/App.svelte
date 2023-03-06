<script lang="ts">
  import axios from 'axios';

  const apiKey = '377400ef';
  let title = '';
  let movies = null;
  let error = null;
  let loading = false;

  async function searchMovies() {
    // 이미 loading 중이면 함수 종료
    if (loading) return;

    movies = null;
    error = null;
    loading = true;

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    try {
      const res = await axios.get(url);
      movies = res.data.Search;
    } catch (err) {
      error = err;
    } finally {
      loading = false;
    }
  }
</script>

<input bind:value={title} />
<button on:click={searchMovies}>검색!</button>

{#if loading}
  <p class="text-blue-400">Loading...</p>
{:else if movies}
  <ul>
    {#each movies as movie}
      <li>{movie.Title}</li>
    {/each}
  </ul>
{:else if error}
  <p class="text-red-400">{error.message}</p>
{/if}

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
