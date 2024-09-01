import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <h1 className='bg-green-500 p-4 rounded-xl text-black mb-6'>Tailwind-test</h1>
    <Card username='Akshay' btn_text='Inspect Profile'/>
    <Card username='Hitesh' btn_text='Explore Profile'/>
  </>
  )
}

export default App
