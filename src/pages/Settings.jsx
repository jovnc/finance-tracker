import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SettingsForm from "../features/settings/SettingsForm";
import styled from "styled-components";

const StyledSettings = styled.div`
  width: 80dvw;
`;

export default function Settings() {
  return (
    <StyledSettings>
      <Row type="horizontal">
        <Heading as="h4">Settings</Heading>
      </Row>
      <SettingsForm />
    </StyledSettings>
  );
}
