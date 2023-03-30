import { useFruitDetail } from '../hooks/useFruitDetail'

export const FruitDetail = () => {
  const { fruit, isError, isLoading } = useFruitDetail()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  if (fruit === null) {
    return <div>la fruta que buscas no existe no existe</div>
  }

  // Make whatever you want to display with the data

  return <div>{JSON.stringify(fruit, null, 2)}</div>
}
