import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const [stateFetch, setstateFetch] = useState({
    loading:true,
    data:null,
    error:null
  })
  useEffect(() => {
    setstateFetch({
      loading:true,
      data:null,
      error:null
    })
    
    fetch( url )
      .then(resp => resp.json())
      .then(data => {

        setTimeout(() => {

          if(isMounted.current){

            setstateFetch({
              loading: false,
              error:null,
              data:data
            })
          }else{
            console.log(`setState no se llamo`)
          }
          
        }, 4000)
      })
  }, [url])
  
    return stateFetch
}
