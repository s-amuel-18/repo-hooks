import { useState } from "react"

export const useForm = (initialState = {}) => {

  const [value, setValue] = useState(initialState )
  
  const reset = () => {
    setValue( initialState )
  }
  
  const handdleInputChange = ({target}) => {
    setValue({
      ...value,
      [target.name]: target.value
    })
  }

  return [value, handdleInputChange, reset]
}
