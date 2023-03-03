<<<<<<< HEAD
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
=======
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
>>>>>>> 711788057f81dbb8c7690b4b08a1fc11a3950d03

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
