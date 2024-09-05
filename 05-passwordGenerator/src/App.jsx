import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setchar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]_?><"
    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random() * str.length + 1);
      pass += str[charindex];
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(() => {
    passwordgenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  const copyOnclipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} placeholder='Password' className="outline-none w-full py-1 px-3" readOnly ref={passwordRef}/>
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-1.5 shrink-0' 
          onClick={copyOnclipboard}
          
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>

              <input type="range" min={6} max={100} value={length} id='length' onChange={(e) => setlength(e.target.value)}/>
              <label htmlFor='length'>Length[{length}]</label>

            </div>

            <div className='flex items-center gap-x-1'>

              <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumber(numberAllowed => (!numberAllowed))}/>
              <label>Number</label>

            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setchar(charAllowed => (!charAllowed))}
            id='characters' />
            <label htmlFor='characters'>Characters</label>

            </div>
        </div>
        
     </div> 
  )
}

export default App
