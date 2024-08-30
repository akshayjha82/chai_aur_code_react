import Chai from './chai'

function App() {
const user = 'APPU'
  return (
    <>
      <h1>Chai aur Vite | {user} </h1>  {/* here we used a parameter created in function scope */}
      <Chai></Chai>
    </>
  )
}

export default App
