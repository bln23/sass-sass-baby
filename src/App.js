import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Tabs from './components/Tabs';
import Cv from './components/Cv';
import PersonalDataBox from './components/PersonalDataBox';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      printing: false,
      cv: {
        name: 'Nombre',
        profession: 'Profesión Actual',
        residence: 'Ciudad',
        telephone: 'Correo electrónico',
        email: 'email',
        social: 'Redes sociales',
        personalWebsite: 'Web personal',
        personalDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        titleEducation: 'Título de la formación',
        trainingCenterEducation: 'Centro de formación',
        startDateEducation: 'Fecha de inicio',
        finishDateEducation: 'Fecha de fin',
        companyName: 'Nombre empresa',
        titleExperiencie: 'Puesto de trabajo',
        startDateExperience: 'Inicio',
        finishDateExperience: 'Fecha de fin',
        descriptionExperience: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        nameProject: 'Nombre del proyecto',
        companyProject: 'Empresa',
        descriptionProject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo',
        monthProject: 'Mes',
        yearProject: 'Año'
      }
    }

    this.updateCv =  this.updateCv.bind(this);
    this.print =  this.print.bind(this);
  }

  updateCv(name, value) {
    const cv = this.state.cv;
    cv[name] = value;
    this.setState({cv: cv});
  }

  componentDidMount() {
    window.onafterprint = () => this.setState({printing: false});
  }

  print() {
    this.setState({printing: true})
    setTimeout(() => window.print(), 1000);
  }

  deleteState = (key) => {
    const newCV = Object.assign({}, this.state.cv, {[key]: ''})
    this.setState({cv: newCV});
  }

  render() {
    if (this.state.printing) {
      return (
        <Cv style={{height: '100%', margin: 0}} cv={this.state.cv} />
      );
    }

    return (
      <div className="App">
      <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
      <Header/>
      <div className="formandcv">
      <Form data={this.state.cv} handleChange={this.updateCv} deleteState={this.deleteState}/>
      <div className="cv-content">
      <aside>
      <Cv cv={this.state.cv} />
      <input type="button" onClick={ this.print } className="buttonPrint" defaultValue="Imprimir" />
      </aside>
      </div>
      </div>
      <footer className="footer">
      <p>Powered by<span><a className="adalab" target="_blank" href="http://adalab.es/"> &nbsp;Adalab</a></span></p>
      </footer>
      </div>
    );
  }
}

export default App;
