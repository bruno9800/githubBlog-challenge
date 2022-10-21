import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: relative;
  background: ${props => props.theme["blue"]};  
  display: flex;
  justify-content: space-between;
  align-items: center;
  //filter: blur(106px);

  height: 18.5rem;
  z-index: -1;
`

export const Logo = styled.img`
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
`