import styled from "styled-components";
import UserSettingsForm from "./UserSettingsForm";
import CategoryForm from "./CategoryForm";

const StyledSettingsForm = styled.div`
  margin-top: 2px;
`;

const Container = styled.div`
  margin: 20px 20px 0px 0px;
`;

function SettingsForm() {
  return (
    <StyledSettingsForm>
      <Container>
        <UserSettingsForm />
      </Container>
      <Container>
        <CategoryForm />
      </Container>
    </StyledSettingsForm>
  );
}

export default SettingsForm;
