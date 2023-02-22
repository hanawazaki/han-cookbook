import { useState, useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom'
import { db } from "../firebase/config"
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"

export const useFetch = (c, _q) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useHistory();

  // const q = useRef(_q).current

  useEffect(() => {

    let ref = collection(db, c)
    // if (q) {
    //   ref = query(ref, where('id', '==', _q))
    //   console.log('query detected', ref)
    // }

    const unsub = onSnapshot(ref, (snapshot) => {
      let res = []
      setIsPending(true)
      snapshot.docs.forEach(doc => {
        res.push({
          id: doc.id,
          ...doc.data()
        })
      });
      console.log("RES", res)
      setIsPending(false)
      setData(res)
      setError(null)

      if (data) {
        navigate.push('/')
      }
    })
    return () => unsub()


    // const fetchData = async (fetchOptions) => {
    //   setIsPending(true)

    //   try {
    //     const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
    //     if (!res.ok) {
    //       throw new Error(res.statusText)
    //     }
    //     const data = await res.json()

    //     setIsPending(false)
    //     setData(data)
    //     setError(null)

    //     if (data && fetchOptions) {
    //       navigate.push('/')
    //     }
    //   } catch (err) {
    //     if (err.name === "AbortError") {
    //       console.log("the fetch was aborted")
    //     } else {
    //       setIsPending(false)
    //       setError('Could not fetch the data')
    //     }
    //   }
    // }

    // if (method === "GET") {
    //   unsub()
    // }

    // if (method === "POST" && options) {
    //   fetchData(options)
    // }

    // return () => {
    //   controller.abort()
    // }

  }, [c])

  return { data, isPending, error }
}