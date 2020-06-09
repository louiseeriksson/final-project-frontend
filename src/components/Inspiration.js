import React, { useEffect } from 'react'
import { InstagramFeed } from './InstagramFeed'

export const Inspiration = () => {
  return (
    <div>
      <h1>Spana in vår instagram:</h1>

      {/*  // is following function ok? */}
      {useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://cdn.curator.io/published/06e53367-5e99-4513-b597-e96cf8f67876.js"
        script.async = true
        document.body.appendChild(script)
      })}

      <InstagramFeed />
    </div>
  )
}