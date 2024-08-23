import React from 'react'
import Header from './Header'
import Info from './Info'
import Footer from './Footer'

export default function Task2() {
  let wrapper={
    display:'flex',
    flexDirection:'column',
    height:'100vh'
  }
  return (
    <div style={wrapper}>
      <Header />
      <Info />
      <Footer />
    </div>
  )
}
