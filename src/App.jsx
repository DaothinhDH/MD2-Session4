import { useState } from 'react'
import './App.css'
import UseContext_Comp from './components/useContext/UseContext_Comp'
import UseEffect from './components/useEffect/UseEffect'
import UserReducer from './components/useReducer/UserReducer'
import Todolist from './components/Baitap/Todolist'
import Counter_Bt11 from './components/Baitap/Counter_Bt11'
import Exercise_Bt12 from './components/Baitap/Exercise_Bt12'
import Exercise_Bt13 from './components/Baitap/Exercise_Bt13'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState_Comp/> */}
      {/* <UseContext_Comp/> */}
      {/* <UseEffect/> */}
      {/* <UserReducer/> */}
      {/* <Todolist/> */}
      {/* <Counter_Bt11/> */}
      {/* <Exercise_Bt12/> */}
      <Exercise_Bt13/>
    </>
  )
}

export default App
