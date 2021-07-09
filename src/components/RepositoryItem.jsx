export function Repositoryitem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "sem Descrição"}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
