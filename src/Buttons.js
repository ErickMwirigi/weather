import React, { useState } from 'react';

const Buttons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleSignupClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="buttons">
      {!isLoggedIn ? (
        <>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignupClick}>Signup</button>
        </>
      ) : (
        <div>
          {/*something renders when the user is logged in */}
          <p>Welcome, User!</p>
        </div>
      )}
    </div>
  );
};

export default Buttons;
