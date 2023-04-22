import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;

  gap: 15px;
`;

export const ButtonStyle = styled.button`
  min-width: 72px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #1f86cf;
  color: white;
  text-transform: capitalize;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition-duration: 300ms;
  transition-property: background-color, color;

  :hover {
    /* color: black; */
    background-color: #d7b7e4;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  :active {
    color: black;
  }
`;
