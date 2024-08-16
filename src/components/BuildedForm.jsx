import React from 'react';
import "./BuildedForm.css"

export function BuildedForm({formConfig}) {

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < formConfig.input; i++) {
      inputs.push(<input key={i} type="text" placeholder={`Input ${i + 1}`} />);
    }
    return inputs;
  };

  const renderTextareas = () => {
    const textareas = [];
    for (let i = 0; i < formConfig.textarea; i++) {
      textareas.push(<textarea key={i} placeholder={`Textarea ${i + 1}`} />);
    }
    return textareas;
  };

  const renderCheckboxes = () => {
    const checkboxes = [];
    for (let i = 0; i < formConfig.checkbox; i++) {
      checkboxes.push(<input key={i} type="checkbox" />);
    }
    return checkboxes;
  };

  return (
    <form>
      {renderInputs()}
      {renderTextareas()}
      {renderCheckboxes()}
    </form>
  );
}

