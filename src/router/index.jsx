import { Routes, Route, Navigate } from 'react-router-dom'
import Redirect from '../components/Redirect'
import Notfound404 from '../components/Notfound404'
import React from 'react'

const MRouters = () => {

  return (
    <Routes>
      <Route path='/film' element={LazyLoad('Film')}>
        <Route path='' element={<Redirect to='nowplaying' />} />
        <Route path='nowplaying' element={LazyLoad('films/NowPlaying')} />
        <Route path='commingsoon' element={LazyLoad('films/CommingSoon')} />
      </Route>
      <Route path='/cinema' element={LazyLoad('Cinema')} />
      <Route path='/center' element={<AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>} />
      <Route path='/login' element={LazyLoad('Login')} />


      // 重定向的写法
      {/* <Route path='/' element={<Navigate to='/film'/>}></Route>  */}
      <Route path='/' element={<Redirect to='film' />}></Route>
      // 404页面
      <Route path='*' element={<Notfound404/>}></Route>
    </Routes>
  )
}

// 封装路由拦截
const AuthComponent = ({children}) => {

  const isLogin = localStorage.getItem('token')
  return isLogin? children : <Redirect to='/login' />

}

// 封装路由懒加载
const LazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../view/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}


export default MRouters