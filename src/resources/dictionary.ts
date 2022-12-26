export type Dictionary = {
  id: string
  name: string
  description: string
  category: string
  url: string
  length: number
}

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaries: Dictionary[] = [
  { id: 'default', name: 'DEFAULT', description: '默认', category: '英语学习', url: './dicts/default.json', length: 379 },
]

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
