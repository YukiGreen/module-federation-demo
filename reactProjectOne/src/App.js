import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import MenuPage from './components/MenuPage.js';
import MyReact from './components/my-react.jsx';
import ReactProjectTwoApp from './components/reactProjectTwoDemo.js';
import VueThreeProjectApp from './components/vueThreeProjectDemo.js';
import VueTwoProjectApp from './components/vueTwoProjectDemo.js';
import AppVue2 from './components/app3.js';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
          <Route path='/'>
            <MenuPage />
            <Route path='/my-react'>
              <MyReact prop='this-is-prop' />
            </Route>
            <Route path='/react-project-two'>
              <ReactProjectTwoApp />
            </Route>
            <Route path='/vue-three-project'>
              <VueThreeProjectApp />
            </Route>
            <Route path='/vue-two-project'>
              <VueTwoProjectApp />
            </Route>
            <Route path='/app-vue2'>
              <AppVue2 />
            </Route>
          </Route>
      </Switch>
    </Router>
  )
}

export default App
