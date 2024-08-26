import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OneBoxPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/onebox/list')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/onebox/${id}`)
      .then(() => setItems(items.filter(item => item.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>OneBox</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneBoxPage;
