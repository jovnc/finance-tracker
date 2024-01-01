import styled from "styled-components";
import UserSettingsForm from "./UserSettingsForm";

import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";

const StyledSettingsForm = styled.div`
  margin-top: 2px;
`;

const Container = styled.div`
  margin: 20px 20px 0px 0px;
`;

function SettingsForm() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  return (
    <StyledSettingsForm>
      <Container>
        <UserSettingsForm user={user} />
      </Container>
    </StyledSettingsForm>
  );
}

export default SettingsForm;
