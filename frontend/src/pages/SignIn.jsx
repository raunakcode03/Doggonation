import React,{useEffect} from 'react'
import LoginForm from '../components/form/LoginForm'

const SignIn = (props) => {
  useEffect(() => {
    props.Sidebarrender(false)
  }, [])
  
  return (
    <>
    <div className='flex flex-row w-screen h-screen'>
      <div className=' w-half min-h-screen  bg-doggo-background bg-no-repeat bg-cover '>sas</div>
      <div className=' max-h-screen  '>  
        <LoginForm/>
      </div>
    </div>
    <div>

    </div>
    </>
  )
}

export default SignIn