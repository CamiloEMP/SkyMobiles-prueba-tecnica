import { ListFruits } from '../components/ListFruits'
import { useFruits } from '../hooks/useFruits'

function App() {
  const { fruits, isError, isLoading } = useFruits()

  return (
    <main className="min-h-screen p-8 space-y-8 bg-neutral-100">
      <h1 className="text-xl font-semibold text-center ">Fruits APP</h1>
      {/* Mejorable */}
      {isLoading ? (
        <p className="text-center ">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-600">Error...</p>
      ) : (
        <>
          {fruits.length === 0 ? (
            <p className="text-center">No hay frutas disponibles...</p>
          ) : (
            <ListFruits fruits={fruits} />
          )}
        </>
      )}
    </main>
  )
}

export default App
