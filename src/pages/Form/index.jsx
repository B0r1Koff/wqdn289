import React, { useState } from 'react';
import { BuildedForm } from '../../components/BuildedForm';
import "./form.css"

export function Form() {
  const [params, setParams] = useState({ input: 0, textarea: 0, checkbox: 0 });
  const [formConfig, setFormConfig] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: parseInt(value, 10),
    });
  };

  const handleBuild = (e) => {
    e.preventDefault()
    setFormConfig(params)
  };

  return (
    <div className='form-page-content-wrapper'>
        <form className='params-form' onSubmit={handleBuild}>
            <div className='label-wrapper'>
                <input id='1' className='params-form-input' type="number" name="input" value={params.input} onChange={handleChange} />
                <label for="1" className='params-form-label'>Input:</label>
            </div>
            <div className='label-wrapper'>
                <input id='2' className='params-form-input' type="number" name="textarea" value={params.textarea} onChange={handleChange} />
                <label for="2" className='params-form-label'>Textarea:</label>
            </div>
            <div className='label-wrapper'>   
                <input id='3' className='params-form-input' type="number" name="checkbox" value={params.checkbox} onChange={handleChange} />
                <label for="3" className='params-form-label'>Checkbox:</label> 
            </div>
            <button type='submit'>Build</button>
        </form>

        <BuildedForm formConfig={formConfig}/>
    </div>
  );
}
