import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function NormalUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imgUrl: firebaseUser.photoURL
  }
}

function cookieManeger(logged: boolean) {
  if (logged) {
    Cookies.set('admin-template-auth', logged, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>(null)

  async function seccionConfig(firebaseUser) {
    if (firebaseUser?.email) {
      const user = await NormalUser(firebaseUser)
      setUser(user)
      cookieManeger(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      cookieManeger(false)
      setLoading(false)
      return false
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true)
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      seccionConfig(resp.user)
      route.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await seccionConfig(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(seccionConfig)
      return () => cancel()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
