// src/components/PropertyList.jsx
import React from 'react';
import './PropertyList.css';
import propertyList from '../data/propertyList'; // Assuming you store dummy data in a separate file

const PropertyList = () => {
  return (
    <div>
      <h1>Property List</h1>
      <div className="property-list">
        {propertyList.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} />
            <div>
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <p>Price: ${property.price}/night</p>
              <p>Location: {property.location}</p>
              <p>Rating: {property.rating}</p>
              <p>Amenities: {property.amenities.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
