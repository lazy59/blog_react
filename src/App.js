import React from 'react';
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Pc from './pages/pc';
import Small from './pages/small';
import SmallDetail from './pages/small/Detail';

const IsPC = (() => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
     "SymbianOS", "Windows Phone",
     "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
     if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
     }
  }
  return flag;
})();

function App() {
  const url = IsPC ? '/home' : 'small'
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/home' component={Pc}></Route>
          <Route exact path='/small' component={Small}></Route>
          <Route exact path='/smalldetail/:id' component={SmallDetail}></Route>
          <Redirect to={url}></Redirect>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
