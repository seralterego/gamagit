import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1 `
  color: #000;
  font-family: sans-serif;
  font-size: 2rem;
  text-align: center;
`;

export const SubTitle = styled.p `
  color: #000;
  font-size: 1em;
  font-family: sans-serif;
  margin-bottom: 2rem;
  text-align: center;
`

export const List = styled.ul `
  font-family: sans-serif;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li `
  color: #fff;
  background: #000;
  border-radius: .25rem;
  padding: .5rem;
  margin: .5rem 0;
  margin: 5px 10px;

  &:hover {
    background: #ddd;
    color: #000;
  }
`;

export const LinkHome = styled(Link) `
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: .25rem;

  &:hover {
    background-color: #ddd;
    border: 1px solid #000;
    border-radius: .25rem;
    color: #000;
  }
`;