import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'

function GuestGuard({ children }) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return <>{children}</>
}
export default GuestGuard
