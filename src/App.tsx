import { useState } from 'react'
import { Box, Flex , Stack, VStack, HStack} from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* the first box will be div second will be section
     <Box bg='green' w='120px' h='150px'>
      This is a box
      </Box>

      <Box as='section' bg='green' w='120px' h='150px'>
      This is a box
      </Box> */}
      {/* //Flex// */}
      {/* <Flex justify="space-between" align="center">
      <Box bg='green' w='100px' h='200px'>
        item1
      </Box>
      <Box bg='blue' w='100px' h='200px'>
        item2
      </Box>
      <Box bg='red' w='200px' h='100px'>
        item1
      </Box>
      <Box bg='tomato' w='100px' h='200px'>
        item4
      </Box>
      </Flex> */}
      {/* //Stack
<Stack spacing='12px' direction='row'>
      <Box bg='green' w='100px' h='200px'>
        item1
      </Box>
      <Box bg='blue' w='100px' h='200px'>
        item2
      </Box>
      <Box bg='red' w='200px' h='100px'>
        item1
      </Box>
      <Box bg='tomato' w='100px' h='200px'>
        item4
      </Box>
      </Stack> */}
      <Header/>
    </div>
  )
}

export default App
