import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tts from './Side';
function ProfilePage() {
  
  const { id_cl } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8081/client/${id_cl}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Client not found');
        }
        return response.json();
      })
      .then(data => {
        setClient(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching client profile:', error);
        setLoading(false);
      });
  }, [id_cl]);

  if (loading) {
    
    return (<div><p>Loading...</p></div>);
  }

  if (!client) {
    return <p>No data available</p>;
  }

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Tts />
        <div className='Profile' style={{ textAlign: 'center' }}>
          <h1>Profile Page</h1>
          <p>Client ID: {client.id_cl}</p>
          <p>Name: {client.firstName}</p>
          <p>Address: {client.address}</p>
          {/* Display other profile information here */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
