import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  onChange,
  product,
  value = 0
}: useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)

  useEffect(() => {
    setCounter(value)
  }, [value])

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max(counter + value, 0)
    setCounter((prev) => Math.max(prev + value, 0))
    onChange && onChange({ count: newValue, product })
  }
  return { counter, increaseBy }
}
