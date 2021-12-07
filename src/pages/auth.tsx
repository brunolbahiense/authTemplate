import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { WarningIcon } from '../components/Icons'
import useAuth from '../data/hook/useAuth'

export default function Auth() {
  const { loginGoogle } = useAuth()
  const [mode, setMode] = useState<'login' | 'signin'>('login')
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function showError(msg, time = 5) {
    setError(msg)
    setTimeout(() => setError(null), time * 1000)
  }
  function submit() {
    if (mode === 'login') {
      console.log('login')
    } else {
      console.log('cadastrar')
    }
  }
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className=" hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem aleatória da tela de autentucação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode == 'login'
            ? 'Entre com a sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        {error ? (
          <div
            className="
          flex items-center
            bg-red-400 text-white py-3 px-5 my-2 
            border border-red-700 rounded-lg"
          >
            {WarningIcon()}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

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
          onClick={loginGoogle}
          className=" w-full bg-red-500 hover:bg-red-400 
        text-white rounded-lg px-4 py-3"
        >
          Entrar com o Google
        </button>

        {mode === 'login' ? (
          <p>
            Novo por aqui?
            <a
              onClick={() => setMode('signin')}
              className={`
                text-blue-500 hover:text-blue-700 
                font-semibold cursor-pointer`}
            >
              {' '}
              Crie uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p>
            Já é um membro?
            <a
              onClick={() => setMode('signin')}
              className={`
                text-blue-500 hover:text-blue-700 
                font-semibold cursor-pointer`}
            >
              {' '}
              Entre aqui
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
