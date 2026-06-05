export function SampleListTable({ data = [] }) {
  return (
    <table>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} />
        ))}
      </tbody>
    </table>
  );
}
