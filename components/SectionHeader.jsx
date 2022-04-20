import React from 'react'

export default function SectionHeader({ children }) {
  return (
    <div>
      <h1 className="text-center py-10 text-4xl">{ children }</h1>
    </div>
  )
}
