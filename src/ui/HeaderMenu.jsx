import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const Greetings = styled.li`
  margin-top: 0.5rem;
  font-weight: bold;
  padding-right: 1rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();
  const username = user.user_metadata.fullName;

  return (
    <StyledHeaderMenu>
      <Greetings>Welcome back, {username}</Greetings>
      <li>
        <ButtonIcon onClick={() => navigate("/settings")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
