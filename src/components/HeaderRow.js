function HeaderRow({ addActionHeader }) {
  return (
    <tr>
      <th className="bg-light">Description</th>
      <th className="bg-light">Kcal</th>
      <th className="bg-light">Protein(g)</th>
      <th className="bg-light">Fat(g)</th>
      <th className="bg-light">Carbs(g)</th>
      {addActionHeader && <th className="bg-light">Action</th>}
    </tr>
  );
}

export default HeaderRow;
