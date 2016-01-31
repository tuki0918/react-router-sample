import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

import Header from './views/common/header.jsx'
import Footer from './views/common/footer.jsx'
import Container from './views/common/container.jsx'
import Navigation from './views/nav/navigation.jsx'

import Home from './views/content/home.jsx'
import NotFound from './views/error/404.jsx'

import Menu1 from './views/content/menu1.jsx'
import Menu2 from './views/content/menu2.jsx'
import Menu3 from './views/content/menu3.jsx'


class Root extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Navigation />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

const routes = (
  <Route path="/" component={Root}>
    <Route path="menu1" component={Menu1} />
    <Route path="menu2" component={Menu2} />
    <Route path="menu3" component={Menu3} />
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound}/>
  </Route>
);

ReactDOM.render(
	<Router routes={routes} />,
	document.getElementById('app')
);
