import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import Input from './Input';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.props.handleChange(name, event.target.value);
  }

  render() {
    return (
      <Fieldset title= "Experiencia">
        <Colapsable box="firstExperienceBox" link="Añadir experiencia 1">
        <div className="drop-down">
          <Input onChange={this.handleChange} className="input-form title-education main-value" type="text" name="companyName" placeholder="Empresa" required />
          <Input onChange={this.handleChange} className="input-form center-education" type="text" name="titleExperiencie" placeholder="Puesto de trabajo" required />
          <input onChange={this.handleChange} className="input-form date-start-education" type="date" name="startDateExperience" placeholder="Fecha inicio" required />
          <input onChange={this.handleChange} className="input-form date-end-education" type="date" name="finishDateExperience" placeholder="Fecha fin" required />
        </div>
        </Colapsable>

        <Colapsable box="secondExperienceBox" link="Añadir experiencia 2">
        <div className="drop-down">
          <Input onChange={this.handleChange} className="input-form main-value name-company" id="company" type="text" name="companyName2" placeholder="Empresa" required />
          <Input onChange={this.handleChange} className="input-form name-position" id="position" type="text" name="titleExperiencie2" placeholder="Puesto de trabajo" required />
          <input onChange={this.handleChange} className="input-form date-start-experience" id="init-data-experience" type="date" name="startDateExperience2" required />
          <input onChange={this.handleChange} className="input-form date-end-experience" id="finish-data-experience" type="date" name="finishDateExperience2" required />
          <textarea onChange={this.handleChange} className="input-form description-experience" name="descriptionExperience" rows={8} cols={80} defaultValue={"                      "} />
        </div>
        </Colapsable>
      </Fieldset>
    );
  }
}

export default Experience;
