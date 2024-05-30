export default function TableDrago(props) {
  const thead = props.thead.split(",").map((item) => <th>{item}</th>);

  return (
    <div className="tb-pixel">
      <table>
        <thead>
          <tr>{thead}</tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}
