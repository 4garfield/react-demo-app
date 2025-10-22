import { useState } from 'react'
import { Button } from'@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center">
      <h1 className="text-xl">Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  )
}

export default App
