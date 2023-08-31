import { create } from 'zustand'
import type { ApiResult } from '../types'

interface storeProps {
  results: ApiResult[] | []
  setResults: (data: ApiResult[]) => void
}

export const store = create<storeProps>((set) => ({
    results : [],
    setResults: (data) => set({ results: data })
}))
