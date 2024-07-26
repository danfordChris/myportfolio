import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import AuthDialog from './AuthDialog';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    if (authenticated) {
      // Fetch notifications from the API
      axios.get('https://danfordc.onrender.com/contact_form_count/')
        .then(response => {
          setNotifications(response.data.submissions);
        })
        .catch(error => {
          console.error('Error fetching notifications:', error);
        });
    }
  }, [authenticated]);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAuthenticate = () => {
    setAuthenticated(true);
  };

  const handleShowAuthDialog = () => {
    setShowAuthDialog(true);
  };

  const handleCloseAuthDialog = () => {
    setShowAuthDialog(false);
  };

  return (
    <div className="notifications-popup">
      {!authenticated && (
        <button onClick={handleShowAuthDialog} className="btn btn-primary">Login </button>
      )}
      {authenticated && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Notifications</Card.Title>
            {notifications.length === 0 ? (
              <Card.Text>No new notifications</Card.Text>
            ) : (
              <ul>
                {notifications.map(notification => (
                  <li key={notification.id} onClick={() => handleToggle(notification.id)}>
                    <strong>{notification.subject}</strong>: {notification.email}
                    {expandedId === notification.id && (
                      <div className="notification-details">
                        <p><strong>Name:</strong> {notification.name}</p>
                        <p><strong>Email:</strong> {notification.email}</p>
                        <p><strong>Subject:</strong> {notification.subject}</p>
                        <p><strong>Message:</strong> {notification.message}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Card.Body>
        </Card>
      )}
      <AuthDialog
        show={showAuthDialog}
        onClose={handleCloseAuthDialog}
        onAuthenticate={handleAuthenticate}
      />
      <style jsx>{`
        .notifications-popup {
          position: absolute;
          top: 50px;
          right: 10px;
          z-index: 1000;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 0.5rem;
      
          padding: 0.5rem;
         
          border-radius: 4px;
        }
        li:hover {
          background-color: #f8f9fa;
        }
        .notification-details {
          margin-top: 0.5rem;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
}

export default Notifications;
