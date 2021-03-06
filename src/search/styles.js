import styled, { keyframes } from 'styled-components'

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #222;
  height: 160px;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  margin-left: 20px;
  font-size: 2.5em;
  margin: 80 0 0 0;
`;

export const AppIntro = styled.p`
  font-size: large;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const AppLogo = styled.img`
  animation: ${spin} infinite 10s linear;
  height: 100px;
  margin-left: 50px;
  padding-left: 0px;
`;

const calculateWidth = ({ width = 100 }) => '${width}%';

export const Button = styled.button.attrs({
  type: ({ type = "button" }) => type
})`
  width: ${calculateWidth};
  background-color: forestgreen;
  color:white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.25 rem;
  cursor: pointer;

  $:disabled {
    cursor: not-allowed;
    background-color: lightgray;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 2rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border-color: darkgray;
  width: ${calculateWidth};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  width: ${calculateWidth};
`;
