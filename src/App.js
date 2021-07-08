import {GlobalStyle} from "./style"
import { IconStyle } from './assets/iconfont/iconfont';
import routers from "./routes"
import {HashRouter, Switch, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import renderRouters from "./util/renderRouter"
import store from "./store/index"
function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          <Switch>
            {
                renderRouters(routers)
            }
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
