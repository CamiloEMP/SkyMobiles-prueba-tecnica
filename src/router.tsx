import { createBrowserRouter } from 'react-router-dom'

import App from './pages/App'
import { FruitDetail } from './pages/FruitDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: ':id',
    element: <FruitDetail />,
  },
])
