import { SignInButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Guest = (props: Props) => {
  return (
    <div className='guest'>
        <h1>Welcome</h1>
        <p>please sign in to manage your transactions</p>
        <SignInButton />
    </div>

  )
}

export default Guest