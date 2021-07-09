import { Repositoryitem } from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Forms in React",
  link: "https://github.com/GuilhermeFT?tab=repositories",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
      </ul>
    </section>
  );
}
