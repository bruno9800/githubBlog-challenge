import styled from "styled-components";

export const ContainerCardPost = styled.div`
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme["base-label"]};
  }
`

export const ContentCardPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 2rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;

    strong {
      display: block;
      font-weight: bold;
      line-height: 1.6;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
      max-width: 280px;
      overflow: hidden;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${props => props.theme["base-span"]};
      white-space: nowrap;
    }
  }

  p {
    line-height: 1.6;
    color: ${props => props.theme["base-text"]};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`