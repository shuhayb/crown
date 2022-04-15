import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import "./styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
