import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signin'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit() {
    if (mode === 'login') {
      console.log('login')
    } else {
      console.log('cadastrar')
    }
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <div className="w-1/2">
        <h1 className={`text-xl font-bold mb-5`}>
          {mode == 'login'
            ? 'Entre com a sua conta'
            : 'cadastre-se na plataforma'}
        </h1>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          ChangedValue={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          ChangedValue={setPassword}
          required
        />
        <AuthInput
          label="Forgot Password"
          type="password"
          value={password}
          ChangedValue={setPassword}
          required
          noRender={true}
        />
        <button
          onClick={submit}
          className=" w-full bg-indigo-500 hover:bg-indigo-400 
        text-white rounded-lg px-4 py-3 mt-6"
        >
          {mode == 'login' ? 'Entrar' : 'cadastrar'}
        </button>

        <hr className=" my-6 border-gray-300 w-full" />

        <button
          onClick={submit}
          className=" w-full bg-red-500 hover:bg-red-400 
        text-white rounded-lg px-4 py-3"
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  )
}
