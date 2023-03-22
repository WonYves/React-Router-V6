import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Film() {
  return (
    <div>
      <div style={{width: 400, height: 300, background:'yellow'}}>大轮播</div>
      <Outlet></Outlet>
    </div>
  )
}
