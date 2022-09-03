import "../styles/style.css";

function Profile () {
    return (
            <div className="profile">
                <div className="profile_img"> photo de profile de </div>
                <span className="profile_firstname"> roger </span>
                <span className="profile_lastname"> duchesne</span>
                <span className="created_at"></span>
            </div>
    );
}

export default Profile;