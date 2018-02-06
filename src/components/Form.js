import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Tabs from './Tabs';
import PersonalData from './PersonalData';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Colapsable from './Colapsable';
import { Link, Route, Switch } from 'react-router-dom';

class Form extends Component {

  render(){

    return (
      <section id="section-form">
      <Tabs/>
      <form className="main-form" id="main-form" action method="post">

      <Route exact path="/" render={()=>
        <div>
        <PersonalData data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/studies">Continuar</Link></button>
        </div>
        </div>
      }/>

      <Route path="/studies" render={()=>
        <div>
        <Education data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/projects">Continuar</Link></button>
        </div>
        </div>
      }/>

      <Route path="/projects" render={()=>
        <div>
        <Projects data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/experience">Continuar</Link></button>
        </div>
        </div>
      }/>

      <Route path="/experience" render={()=>
        <div>
        <Experience data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link exact to="/">Continuar</Link></button>
        </div>
        </div>
      }/>

      </form>
      </section>
    );
  }
}

export default Form;
