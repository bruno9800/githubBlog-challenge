import styled, { keyframes } from "styled-components";

const EffectAnimationLeft = keyframes`
  from {
    transform: translate(-100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
`

const EffectAnimationRight = keyframes`
  from {
    transform: translate(100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
`

export const ContainerHeader = styled.header`
  position: relative;
  background: ${props => props.theme["base-profile"]};  
  display: flex;
  justify-content: space-between;
  align-items: center;
  //filter: blur(106px);

  height: 18.5rem;
  z-index: -1;
  
  .left {
    animation: ${EffectAnimationLeft} 1s;
  }

  .right {
    animation: ${EffectAnimationRight} 1s;
  }
`

export const Logo = styled.img`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -30%);
`