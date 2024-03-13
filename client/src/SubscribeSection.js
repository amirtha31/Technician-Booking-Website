import React, { useState } from 'react';
import axios from 'axios';

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    try {
      // Log the email value
      console.log(email);

      // Perform any validation if needed

      // Post the email to your backend or API endpoint
      await axios.post('http://localhost:3001/add-subscriber', { email });

      // If successful, set subscribed to true
      setSubscribed(true);

      // Clear the email input field
      setEmail('');
    } catch (error) {
      // If there's an error, set the error state
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="subscribe-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest news and promotions!</p>
      {subscribed ? (
        <p className="success-message">Thank you for subscribing!</p>
      ) : (
        <div className="subscribe-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="email-input"
          />
          <button onClick={handleSubscribe} className="subscribe-button">
            Subscribe
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default SubscribeSection;
