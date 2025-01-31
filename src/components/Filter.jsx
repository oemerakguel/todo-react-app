const Filter = ({ setFilter }) => {
    return (
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>Alle</button>
        <button onClick={() => setFilter("active")}>Nicht erledigt</button>
        <button onClick={() => setFilter("completed")}>Erledigt</button>
        <button onClick={() => setFilter("deleted")}>Gelöscht</button>
      </div>
    );
  };
  
  export default Filter;
  