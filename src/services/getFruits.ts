import { collection, getDocs } from 'firebase/firestore'

import { firestore } from '../firebase/config'
import { Fruit } from '../types'

export const getFruits = async () => {
  const ref = collection(firestore, 'fruits')

  try {
    const snapshot = await getDocs(ref)

    if (snapshot.empty) return []

    const fruits = snapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id,
      } as unknown as Fruit
    })

    return fruits
  } catch (error) {
    console.log(error)
  }
}
