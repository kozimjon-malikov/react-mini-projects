import React from 'react'

export default function Footer() {
    let footer={
        padding:'1rem',
        textAlign:'center'
    }
  return (
    <footer style={footer}>
      <p>Copytight {new Date().getFullYear()}</p>
    </footer>
  )
}
