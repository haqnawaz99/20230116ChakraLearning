import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Box bg='green' w='120px' h='150px'>
      This is a box
      </Box>

      <Box as='section' bg='green' w='120px' h='150px'>
      This is a box
      </Box>
    </div>
  )
}

export default App
