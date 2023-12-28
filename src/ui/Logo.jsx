import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  cursor: pointer;
`;

function Logo() {
  const src = "/finance.png";
  const navigate = useNavigate();

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" onClick={() => navigate("/")} />
    </StyledLogo>
  );
}

export default Logo;
