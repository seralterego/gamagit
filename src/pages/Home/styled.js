import styled from 'styled-components';

export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const HomeTitle = styled.h1 `
  color: #000;
  font-family: sans-serif;
  margin-bottom: 0;
  text-align: center;
  font-size: 2em;
`

export const HomeSubTitle = styled.p `
  color: #000;
  font-size: 1em;
  font-family: sans-serif;
  margin-bottom: 2rem;
  text-align: center;
`

export const Content = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input `
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button `
  border: 1px solid #000;
  height: 1.6rem;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:hover {
    border: 1px solid #ddd;
    background: #ddd;
    color: #000;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErroMsg = styled.span `
  display: block;
  font-family: sans-serif;
  font-size: .65rem;
  color: red;
  font-weight: 700;
  margin-top: 1rem;
`;
