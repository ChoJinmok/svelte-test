<script lang="ts">
  import axios from 'axios';

  const apiKey = '377400efd';
  let title = '';
  // let promise = new Promise((resolve) => { resolve([]); });
  let promise = Promise.resolve([]);

  async function searchMovies() {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const res = await axios.get(url);
    //     resolve(res.data.Search);
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
    try {
      const { data } = await axios.get(url);
      return data.Search;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function handleSearchClick() {
    promise = searchMovies();
  }
</script>

<input bind:value={title} />
<button on:click={handleSearchClick}>검색!</button>

{#await promise}
  <p class="text-blue-400">Loading...</p>
{:then movies}
  <ul>
    {#each movies as movie}
      <li>{movie.Title}</li>
    {/each}
  </ul>
{:catch error}
  <p class="text-red-400">{error.message}</p>
{/await}

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
