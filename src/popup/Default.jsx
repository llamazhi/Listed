import './Default.css';

export const Default = () => {
  return (
    <div className='default-container'>
      <div className='default-options'>
        <div className='default-bar'>
          <p> SKU No. </p>
          <input></input>
        </div>
      </div>
      <div className='default-options'>
        <div className='default-bar'>
          <p> Brand </p>
          <input></input>
        </div>
      </div>
      <div className='default-options'>
        <div className='default-bar'>
          <p>Category</p>
          <select></select>
        </div>
      </div>
    </div>
  )
}

export default Default