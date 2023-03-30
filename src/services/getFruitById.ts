import { doc, getDoc } from 'firebase/firestore'

import { firestore } from '../firebase/config'

export async function getFruitById(id: string) {
  const ref = doc(firestore, 'fruits-detail', `fruit-${id}`)

  try {
    const docSnap = await getDoc(ref)

    if (!docSnap.exists()) return null

    return { ...docSnap.data(), id: docSnap.id }
  } catch (error) {
    console.log(error)
  }
}
