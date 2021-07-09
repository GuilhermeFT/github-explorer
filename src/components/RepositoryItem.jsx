export function Repositoryitem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "No Name"}</strong>
      <p>{props.repository.description ?? "No Description"}</p>
      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  );
}
