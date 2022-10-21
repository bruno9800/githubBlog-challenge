import styled from "styled-components";

export const ContainerUserProfile = styled.div`
  width: 100%;
  background-color: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -2rem;  
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 2.5rem;
`


export const ContentUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

export const ContainerBio = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    strong {
      line-height: 1.3;
      font-size: 1.5rem;
      color: ${props => props.theme["base-title"]};
    }

    a {
      font-size: 0.75rem;
      color: ${props => props.theme["blue"]};
      text-transform: uppercase;
      line-height: 1.6;
    }
  }

  p {
    line-height: 1.6;
    color: ${props => props.theme["base-text"]};
  }
`


export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
`

export const Info = styled.div`
`

export const Avatar = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
`