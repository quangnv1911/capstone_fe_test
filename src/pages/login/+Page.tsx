import agent from '#utils/axios.js'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { redirect } from 'vike/abort'
import React, { MouseEvent } from 'react'

export { Page }
export interface JWT {
  jwt: string
}
function Page() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function onLoginClick(e:  MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const data = {
      userName,
      password,
    }
    const response: JWT = await agent.Account.login(data).catch(() => redirect('/login'))
    toast.error(response.jwt)
    redirect('/')
  }

  const handleToast = () => {
    toast.error('error')
  }

  return (
    <>
      <h1>Login page</h1>
      <div>
        <div>
          <input
            type='text'
            className='form-control'
            name='username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            className='form-control'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' onClick={onLoginClick}>
          Login
        </button>
        <button onClick={() => handleToast()}>Toast</button>
      </div>
    </>
  )
}
