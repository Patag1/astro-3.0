import { createSignal, type JSX } from 'solid-js'
import { options, url } from '../lib/fetchOptions'
import { store } from '../store/store'

const Input = () => {
  const [search, setSearch] = createSignal<string>('')
  const setResults = store((state) => state.setResults)

  const onChange: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    setSearch(e.currentTarget.value)
  }

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`${url}${search()}`, options).then((res) =>
        res.json()
      )
      setResults(response)
      setSearch('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={onSubmit} class="flex items-center gap-x-4">
      <input
        id="text"
        name="text"
        type="text"
        value={search()}
        placeholder="Frank Ocean"
        class="p-2 bg-[#252933] rounded-sm focus:border-none focus:outline-none focus:ring-4 ring-cyan-400 ring-opacity-60 transition-all ease-in-out"
        onInput={onChange}
        required
      />
      <button
        type="submit"
        class="p-2 bg-orange-500 font-semibold rounded-sm active:scale-95 transition-transform ease-in-out"
      >
        Search
      </button>
    </form>
  )
}

export default Input
