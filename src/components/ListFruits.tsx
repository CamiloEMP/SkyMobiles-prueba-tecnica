import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Fruit } from '../types'

interface Props {
  fruits: Fruit[]
}

export const ListFruits: FC<Props> = ({ fruits }) => {
  return (
    <ul>
      {fruits?.map(fruit => (
        <li key={fruit.id}>
          <Link
            className="flex flex-col items-center w-full max-w-sm p-4 transition-all border shadow-md hover:scale-105"
            to={`${fruit.id}`}
          >
            <span>
              <strong>Origen</strong> {fruit.origin}
            </span>
            <span>
              <strong>Tiempo de vida</strong> {fruit.lifeCycle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
