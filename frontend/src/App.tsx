import React from 'react'
import './style.css'

export const App = () => {
  return (
    <h1>
      React Typescript setup {process.env.NODE_ENV} - {process.env.name}
    </h1>
  )
}
