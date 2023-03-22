import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'
import React from 'react'
import Notfound404 from '../components/Notfound404'

const MRouters = () => {

  const element = useRoutes([
    {
      path:'/film',
      element:LazyLoad('Film'),
      children:[
        {
          path:"",
          element:<Redirect to={'nowplaying'} />
        },
        {
          path:"nowplaying",
          element:LazyLoad('films/NowPlaying')
        },
        {
          path:"commingsoon",
          element:LazyLoad('films/CommingSoon')
        },

      ]
    },
    {
      path:'/center',
      element:<AuthComponent>{LazyLoad('Center')}</AuthComponent>
    },
    {
      path:'/cinema',
      element:LazyLoad('Cinema')
    },
    {
      path:'/login',
      element:LazyLoad('Login')
    },
    {
      path:'/',
      element: <Redirect to='film' />
    },
    {
      path:'*',
      element: <Notfound404/>
    },

  ])

  return (element)
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