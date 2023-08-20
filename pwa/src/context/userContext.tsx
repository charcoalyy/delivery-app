import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface UserContextType {
  type: 'courier' | 'customer'
  changeType: (params: 'courier' | 'customer') => void
  trackingId: string
  setTrackingId: (params: string) => void
}

// creates context object with a default state
const UserContext = createContext<UserContextType>({} as UserContextType)

// defines the wrapper whose state is accessible to children
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState('courier' as UserContextType['type'])
  const [trackingId, setTrackingId] = useState('-NcEuahK2_rHhIQxJFdO')

  const userState = useMemo(
    () => ({
      type: userType,
      changeType: setUserType,
      trackingId: trackingId,
      setTrackingId: setTrackingId,
    }),
    [userType, setUserType, trackingId, setTrackingId]
  )

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  )
}

// allows consumers to use context values
export default function useUser() {
  return useContext(UserContext)
}
