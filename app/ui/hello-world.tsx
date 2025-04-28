'use client'; 

import { useEffect, useState } from 'react';

export default function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/hello/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching hello world:', err));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
