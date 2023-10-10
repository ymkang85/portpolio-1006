import React from 'react'
import { Routes, Route } from 'react-router-dom'
import withRouter from '../hooks/withRouter'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'

const AnimateRoutes = withRouter(({ location }) => (
   <TransitionGroup>
     <CSSTransition 
        key={location.key} 
        timeout={{
            enter: 400,
            exit: 400,
        }}
        classNames="page"
        unmoutOnExit
    >
        <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/aboute" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </CSSTransition>    
  </TransitionGroup>  
));

const AnimRoutes = () => {
    return (
        <>
          <AnimateRoutes />
        </>
    )
}

export default AnimRoutes