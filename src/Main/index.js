import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { About, Home, Blog, Projects, Contact, PageNotFound } from "../routes";

export default class Main extends Component {

    state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    }

    componentDidMount() {
        this.updateDeminsions()
        window.addEventListener('resize', this.updateDeminsions.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDeminsions.bind(this))
      }

    updateDeminsions() {
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
    } 
    render() {
        return (
            <main style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{minHeight: this.state.windowHeight - 145, maxWidth: 800, width: '100%'}}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={PageNotFound}/>
                </Switch>
                </div>
            </main>
        )
    }
}