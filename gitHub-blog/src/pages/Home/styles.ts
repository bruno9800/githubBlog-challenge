import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;

  main {
    margin-top: 4.5rem;
  }
`


export const ContainerCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  gap: 2rem;

  margin-top: 3rem;
`