import React from 'react';

function Description({ display }){

  const descriptionDisplay = display === "mkulima" ? <p>We expect a little <strong>sunshine</strong> with light showers. Please prepare your farms for the week ahead</p> : <p>We expect a slight gust of wind to accompany the <strong>heavy</strong> downpour. Please carry and umbrella, wear warmly and keep safe.</p>

  return (
    <div className="description">
      <h2 className="Head">Weather Analysis</h2> 
      {descriptionDisplay}
    </div>
  );
};

export default Description;
