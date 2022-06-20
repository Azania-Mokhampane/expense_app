import styled from "styled-components";

export const Nav = styled.div`
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }
  .container div button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .container div button:hover {
    background-color: #510674;
    border-color: #510674;
  }
`;
