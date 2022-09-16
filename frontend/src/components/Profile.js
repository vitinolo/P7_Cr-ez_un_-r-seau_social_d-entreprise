//afficher le profil
const Profile = ({user}) => {
return ( 
        <>
        <div className="profile">
          <div className="profile_firstandlastname">
            <span className="profile_firstname"> {user.name} </span>
            <span className="profile_lastname"> {user.lastname}</span>
          </div> 
        </div>
        </>
    )
}
export default Profile;