import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Base from './layout/base'

import Home from './content/home'
import NotFound from './error/404'

import Menu1 from './content/menu1'
import Menu2 from './content/menu2'
import Menu3 from './content/menu3'

export const routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={Home} />
    <Route path="menu1" component={Menu1} />
    <Route path="menu2" component={Menu2} />
    <Route path="menu3" component={Menu3} />
    <Route path="*" component={NotFound} />
  </Route>
)