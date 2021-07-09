import {GlobalStyle} from "./style"
import { IconStyle } from './assets/iconfont/iconfont';
import routers from "./routes"
import {HashRouter, Switch, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import renderRouters from "./util/renderRouter"
import store from "./store/index"
import {Data} from "./application/Singers/data"
function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          <Switch>
            <Data>
              {renderRouters(routers)}
            </Data>
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
