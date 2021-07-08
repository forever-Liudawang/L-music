import {HashRouter, Switch, Route} from "react-router-dom"
const renderRouters = (routers)=>{
    const router = routers.map((route,key)=>{
        return <Route key={key} exact={route.exact || false} path={route.path}
          render={
            route.render?route.render:props=>(<route.component {...props} routes={route.routes}></route.component>)
          }
        />
    })
    return router
}
export default renderRouters