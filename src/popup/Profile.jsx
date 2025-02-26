import './Profile.css';

export const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-items'>
        <p className='profile-field'>Company Name</p>
        <p className='profile-value'></p>
      </div>
      <div className='profile-items'>
        <p className='profile-field'>Email</p>
        <p className='profile-value'></p>
      </div>
      <div className='profile-items'>
        <p className='profile-field'>First Name</p>
        <p className='profile-value'></p>
      </div>
      <div className='profile-items'>
        <p className='profile-field'>Last Name</p>
        <p className='profile-value'></p>
      </div>
    </div>
  )
}

export default Profile