import LoginSignupImage from "../../../components/auth/LoginSignupImage";
import SignupTabs from "../../../components/auth/Signup/SignupTabs";

const Signup = () => {
  return (
    <section className='hero-section'>
      <div className='hero'>
        <LoginSignupImage />
        <SignupTabs />
      </div>
    </section>
  );
};

export default Signup;
