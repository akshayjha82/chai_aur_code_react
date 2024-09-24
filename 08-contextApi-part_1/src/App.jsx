import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ContextProvider from './contextApi/ContextProvider.jsx'

function App() {
  return (
    <ContextProvider>
      <h1>how is value accessed and sended are in these components </h1>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
