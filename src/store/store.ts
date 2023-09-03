import type { ApiResult } from '../types'

import { writable } from 'svelte/store'

export const results = writable<ApiResult[] | []>([])
