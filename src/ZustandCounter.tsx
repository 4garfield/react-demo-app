import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
}

const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

function ZustandCounter() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
    </div>
  )
}

export default ZustandCounter;
