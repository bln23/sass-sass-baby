import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';

class PersonalData extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title="Datos personales">
        <Input onChange={handleChange} className="input-form firstname" id="firstname" type="text" name="name" placeholder="Nombre y apellidos" required />
        <Input onChange={handleChange} className="input-form profession" id="profession" type="text" name="profession" placeholder="Profesión actual" required />
        <Input onChange={handleChange} className="input-form residence" id="residence" type="text" name="residence" placeholder="Lugar de residencia" required />

        <div id="input_container">
        <input onChange={handleChange} className="input-form telephone" id="telephone" type="tel" name="telephone" placeholder="Teléfono" required />
        <img src="img/phone.png" id="input_img" />
        </div>

        <div id="input_container">
        <input onChange={handleChange} className="input-form email" id="email" type="email" name="email" placeholder="Email" required />
        <img src="img/email.png" id="input_img" />
        </div>

        <div id="input_container">
        <input onChange={handleChange} className="input-form social" id="social" type="url" name="social" placeholder="Red social - https://miredsocial.com" />
        <img src="img/github-logo.png" id="input_img" />
        </div>

        <input onChange={handleChange} className="input-form personal-website" id="personal-website" type="url" name="personalWebsite" placeholder="Web personal- https://miwebpersonal.com" />
        <textarea onChange={handleChange} className="input-form personal-description" name="personalDescription" rows={8} cols={80} defaultValue={""} />
      </Fieldset>
    );
  }
}

export default PersonalData;
