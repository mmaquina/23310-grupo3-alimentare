import React, { useEffect, useState } from 'react';

function DataFetchingExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('URL_DE_TU_API');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default DataFetchingExample;
