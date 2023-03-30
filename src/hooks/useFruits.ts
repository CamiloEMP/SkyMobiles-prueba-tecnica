import { useState, useEffect } from 'react'

import { getFruits } from '../services/getFruits'
import { Fruit } from '../types'

const mockFruit = {
  id: 1,
  origin: 'Asia Central',
  fruitName: 'Manzana',
  lifeCycle: '60-80 años',
} as Fruit

export function useFruits() {
  const [fruits, setFruits] = useState<Fruit[]>([mockFruit])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getFruits()
      .then(fruits => {
        setFruits(fruits ?? [])
      })
      .catch(_ => setIsError(true))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    fruits,
    isLoading,
    isError,
  }
}
