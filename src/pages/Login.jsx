import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import RegisterFormButton from "../features/authentication/SignupFormButton";
import Row from "../ui/Row";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  min-width: 100vw;
`;

const ButtonLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <ButtonLayout>
        <div></div>
        <RegisterFormButton />
      </ButtonLayout>
    </LoginLayout>
  );
}

export default Login;
