import styled from "styled-components";

export const ContainerFooter = styled.footer`

  position: absolute;
  bottom: 0;
  width: 100vw;

  background: ${props => props.theme["base-input"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 3rem 1rem;
  color: ${props => props.theme["base-title"]};
`