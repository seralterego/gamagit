import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    let usuario = localStorage.getItem('usuario');
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      usuario = JSON.parse(usuario);
      setRepositories(repositoriesName);
      setUsuario(usuario);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Lista de Repositórios</S.Title>
      <S.SubTitle>de {usuario}</S.SubTitle>
      <S.List>
        { repositories.map(repository => {
          return (
            <S.ListItem> Repositório: { repository }</S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to="/" /* onClick= */>Voltar</S.LinkHome>
    </S.Container>
  );
}
