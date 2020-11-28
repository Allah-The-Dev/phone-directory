import React from 'react';
import Header from './Header';
import './App.css';

function App() {

  const subscriber = [
    {
      id: 1,
      name: 'Neelesh',
      phone: 858585
    },
    {
      id: 2,
      name: 'Aniket',
      phone: 858585
    },
    {
      id: 2,
      name: 'Mukesh',
      phone: 969696
    }
  ];

  return (
    <div>
      <Header/>

      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscriber.map(subs => {
            return <div key={subs.id} className="grid-container">
              <span className="grid-item">{subs.name}</span>
              <span className="grid-item">{subs.phone}</span>
              <button className="deleteBtn">Delete</button>
            </div>
          })
        }
    
      </div>
    </div>
  );
}

export default App;
