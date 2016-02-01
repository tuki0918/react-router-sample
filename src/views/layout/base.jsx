import React from 'react'

import Header from './header'
import Footer from './footer'
import Container from './container'
import Navigation from './navigation'

class Base extends React.Component {
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

export default Base
