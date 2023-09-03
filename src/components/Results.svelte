<script>
  import { Image } from 'astro:assets'
  import { Icon } from 'astro-icon'
  import { getContext } from 'svelte'

  const results = getContext('results')
</script>

<article class="grid grid-cols-3 gap-4">
  {#if results?.length}
    {#each results as result}
    <div class="relative">
      <Image
        src={result.album.cover}
        alt={result.artist.name}
        width={50}
        height={50}
        class="w-full aspect-square object-cover object-center rounded-md"
      />
      <h4>
        {result.title} - {result.artist.name}
      </h4>
      {#if result.explicit_lyrics}
        <p>Explicit</p>
      {/if}
      <Icon
        name="bi:play-fill"
        class="absolute top-2 right-2 p-2 bg-white text-black rounded-full cursor-pointer"
      />
    </div>
    {/each}
  {:else}
    <div></div>
  {/if}
</article>
