import './Default.css';

export const Default = () => {
  return (
    <div className='default-container'>
      <div className='default-options'>
        <div className='default-bar'>
          <div className='default-field'><p> SKU No. </p></div>
          <div className='default-value'><input></input></div>
        </div>
      </div>
      <div className='default-options'>
        <div className='default-bar'>
          <div className='default-field'><p> Name </p></div>
          <div className='default-value'><input></input></div>
        </div>
      </div>
      <div className='default-options'>
        <div className='default-bar'>
          <div className='default-field'><p> Category </p></div>
          <div className='default-value'><select></select></div>
        </div>
      </div>
    </div>
  )
}

export default Default