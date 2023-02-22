import { useState, useEffect } from 'react'
import { db } from "../firebase/config"
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"

export const useFetchSingle = (coll, id) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const docRef = doc(db, coll, id)

    // getDoc(docRef).then((doc) => {
    //   setData(doc.data())
    // })

    onSnapshot(docRef, async (doc) => {
      await setData(doc.data())
    })
  }, [id]);

  return { data }
}
