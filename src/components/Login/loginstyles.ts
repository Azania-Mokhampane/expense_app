import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  background-color: #a855f7;
  height: 100vh;

  .container {
    display: grid;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    height: 100vh;
    padding-top: 40px;
    padding: 20px;
  }
  /*Smartphone Screens */
  /* @media (min-width: 640px) {
  } */

  /* Tablet Screens */
  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  /* Laptop Screens */
  @media (min-width: 1024px) {
    .container {
      padding-top: 128px;
    }
  }
`;
