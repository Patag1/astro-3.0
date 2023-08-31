import { Image } from 'astro:assets'
import { store } from '../store/store'
import { Icon } from 'astro-icon'

const Results = () => {
  const results = store((state) => state.results)

  return (
    <article class="grid grid-cols-3 gap-4">
      {results.map((result) => (
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
          {result.explicit_lyrics && <p>Explicit</p>}
          <Icon
            name="bi:play-fill"
            class="absolute top-2 right-2 p-2 bg-white text-black rounded-full cursor-pointer"
          />
        </div>
      ))}
    </article>
  )
}

export default Results
