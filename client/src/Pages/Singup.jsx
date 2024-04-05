import { Alert, Button, Label, TextInput } from 'flowbite-react'
import React,{useState} from 'react'
import { Form, Link ,Navigate,useNavigate} from 'react-router-dom'

export default function Singup() {
  const navigate=useNavigate()
  const [Formdata,setFormdata]=useState({})
  const [errorMessage,setErrorMessage]=useState(null)

  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    console.log(Formdata)
    try {
      const response=await fetch('http://localhost:3000/api/auth/signup',{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(Formdata)
      })
      const data=await response.json()
      setErrorMessage(data.message)
      if(response.ok){
        navigate('/')
      }
    } catch (error) {
      // console.log(error)
      setErrorMessage(error.message)
    }
  }
  const handleOnChange=(e)=>{
    console.log(e.target.value)
    setFormdata({...Formdata,[e.target.id]:e.target.value.trim()})
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Harsh's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">This website is made only for project purpose just to learn more in this field</p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='name' onChange={handleOnChange}/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='Email'
                id='email' onChange={handleOnChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password' onChange={handleOnChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account?
            </span>
            <Link to='/signin' className='text-blue-500'>
              Sign in
            </Link>
          </div>
          {errorMessage&&(
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}
