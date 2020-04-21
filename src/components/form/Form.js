import React from 'react';
import './Form.scss';

const Form = (props) => (
  <div className='container'>
    <section className='form' id='form-section'>
      <div className='form-content'>
        <div className='form-title'>
          Lorem ipsum <br />
          dolor sit amet
        </div>
        <p className='form-para'>
          Data is the new gold and we want to ensure that gold is pure.
          Therefore Veritas requires to be handled by the senior level members
          of the team to grant the highest reliability of the information shown.
        </p>
      </div>
      <form className='form-inputs'>
        <div className='inputs-title'>Lorem ipsum dolor sit amet</div>
        <div className='input-container'>
          <label for='projectName'>Project Name</label>
          <input type='text' name='projectName' />
        </div>
        <div className='input-container'>
          <label for='ticker'>Ticker</label>
          <input type='text' name='ticker' />
        </div>
        <div className='input-container'>
          <label for='email'>Email </label>
          <input type='email' name='email' />
        </div>
        <div className='input-container'>
          <label for='website'>Website</label>
          <input type='text' name='website' />
        </div>
        <p className='listed-para'>Are you already listed on CryptoForecast?</p>
        <div className='radio-text'>
          <input type='radio' name='Yes' id='listed' value='yes' /> Yes
        </div>
        <div className='radio-text'>
          <input type='radio' name='No' id='listed' value='no' /> No
        </div>
        <div className='btn-container'>
          <a href='#!' className='btn btn-primary btn-save'>
            Save Changes
          </a>
        </div>
      </form>
    </section>
  </div>
);

export default Form;
