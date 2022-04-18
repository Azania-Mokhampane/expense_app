import styled from "styled-components";

export const ExpenseFormStyles = styled.div`
  .new-expense__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .new-expense__control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  .new-expense__control input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .new-expense__actions {
    text-align: right;
  }
`;
