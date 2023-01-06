import styled from "styled-components";
import { theme } from "../../assets/theme";

export const StyledButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  box-shadow: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  min-width: 7rem;

  &:hover {
    opacity: 0.5;
  }
`;
