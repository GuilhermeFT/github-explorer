import { useEffect, useState } from "react";
import { Repositoryitem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/guilhermeft/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return <Repositoryitem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
