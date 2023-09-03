<script lang="ts">
  import { options, url } from '../lib/fetchOptions'
  import { results } from '../store/store'

  let search = ''

  const onSubmit = async (e: Event) => {
    e.preventDefault()
    try {
      const response = await fetch(`${url}${search}`, options).then((res) =>
        res.json()
      )
      results.set(response)
      search = ''
    } catch (error) {
      alert(error)
    }
  }
</script>

<form on:submit={onSubmit} class="flex items-center gap-x-4">
  <input
    id="text"
    name="text"
    type="text"
    bind:value={search}
    placeholder="Frank Ocean"
    class="p-2 bg-[#252933] rounded-sm focus:border-none focus:outline-none focus:ring-4 ring-cyan-400 ring-opacity-60 transition-all ease-in-out"
    required
  />
  <button
    type="submit"
    class="p-2 bg-orange-500 font-semibold rounded-sm active:scale-95 transition-transform ease-in-out"
  >
    Search
  </button>
</form>
