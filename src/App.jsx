import React from 'react'
import History from './components/History'
import { Routes, Route} from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import Bucket from './components/Bucket'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route index path="/" element={<Bucket></Bucket>} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
