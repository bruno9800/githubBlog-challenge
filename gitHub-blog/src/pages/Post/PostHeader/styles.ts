import styled from "styled-components";

export const ContainerPostHeader = styled.div`
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5rem;  
`

export const ContentPostHeader = styled.div`
  padding: 2rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme["blue"]};
      font-size: 0.75rem;
      text-decoration: none;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme["base-span"]};

      .icon {
        color: ${props => props.theme["base-label"]};
      }
    }
  }
`