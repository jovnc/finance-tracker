import { HiClipboardDocumentList } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled(HiClipboardDocumentList)`
  height: 9.6rem;
  width: auto;
  cursor: pointer;
`;

const LogoHeading = styled.h2`
  padding: 10px 10px;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <StyledLogo>
      <LogoHeading onClick={() => navigate("/")}>Finance Tracker</LogoHeading>
      <Img onClick={() => navigate("/")} />
    </StyledLogo>
  );
}

export default Logo;
