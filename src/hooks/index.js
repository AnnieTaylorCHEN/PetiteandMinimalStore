import { useState, useEffect } from 'react'

const useShoppingBag = () => {
  const [status, setStatus] = useState(false)
  const handleSetStatus = () => setStatus(!status)
  return [status, handleSetStatus]
}

export const usePriceLoading = (event) => {
  const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		const listener = () => {
			setLoading(false)
		}
		document.addEventListener(event, listener)
		return () => {
			document.removeEventListener(event, listener)
		}
  }, [event])
  return loading
}

export default useShoppingBag