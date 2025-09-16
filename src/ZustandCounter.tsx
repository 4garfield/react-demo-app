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
  const { count, increment } = useCounterStore()
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
    </div>
  )
}

export default ZustandCounter;
