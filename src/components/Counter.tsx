"use client"

import { useCounterStore } from "@/store/counter"

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
