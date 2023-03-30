import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getFruitById } from '../services/getFruitById'

export function useFruitDetail() {
  const [fruit, setFruit] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { id } = useParams() as { id: string }

  useEffect(() => {
    getFruitById(id)
      .then(setFruit)
      .catch(_ => setIsError(true))
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return {
    fruit,
    isLoading,
    isError,
  }
}
