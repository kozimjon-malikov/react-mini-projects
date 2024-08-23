import React from 'react'

export default function Header() {
    let cusTomHeader={
        minHeight:'80px',
        display:'flex',
        alignItems:'center',
        padding:'1rem',
        background:"#A9D400",
        color:'#fff',
        fontSize:'1.8rem'
    }
  return (
    <>
      <header style={cusTomHeader}>
        <h2>Keeper App</h2>
      </header>
    </>
  )
}
