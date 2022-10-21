import styled from "styled-components";


export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      display: block;
      font-weight: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${props => props.theme["base-subtitle"]};
    }
    span {
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
      text-align: right;
      line-height: 1.6;
      color: ${props => props.theme["base-span"]};
    }
  }
`

export const InputSearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    outline: none;
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    padding: 0.75rem 1rem;
    border-radius: 6px;

    &:focus {
      border-color: ${props => props.theme["blue"]};
    }

  }
`