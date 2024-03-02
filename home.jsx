import React, { useState } from 'react';
import Img1 from '../images/SVP_EN_1.png';
import Img2 from '../images/SVP_EN_2.png';
import Img3 from '../images/SVP_EN_3.png';
import Img4 from '../images/SVP_EN_4.png';
import Img5 from '../images/SVP_EN_5.png';
import Img6 from '../images/SVP_EN_6.png';
import Img7 from '../images/SVP_EN_7.png';
import Img8 from '../images/SVP_EN_8.png';
import Img9 from '../images/SVP_EN_9.png';
import Img10 from '../images/SVP_EN_10.png';
import Img11 from '../images/SVP_EN_11.png';
import Img12 from '../images/SVP_EN_12.png';
import Img14 from '../images/SVP_EN_14.png';
import Img15 from '../images/SVP_EN_15.png';
import Img16 from '../images/SVP_EN_16.png';
import Img17 from '../images/SVP_EN_17.png';
import Img18 from '../images/SVP_EN_18.png';

const cards = [
  { name: "Pokemon 1", image: Img1 },
  { name: "Pokemon 2", image: Img2 },
  { name: "Pokemon 3", image: Img3 },
  { name: "Pokemon 4", image: Img4 },
  { name: "Pokemon 5", image: Img5 },
  { name: "Pokemon 6", image: Img6 },
  { name: "Pokemon 7", image: Img7 },
  { name: "Pokemon 8", image: Img8 },
  { name: "Pokemon 9", image: Img9 },
  { name: "Pokemon 10", image: Img10 },
  { name: "Pokemon 11", image: Img11 },
  { name: "Pokemon 12", image: Img12 },
  { name: "Pokemon 14", image: Img14 },
  { name: "Pokemon 15", image: Img15 },
  { name: "Pokemon 16", image: Img16 },
  { name: "Pokemon 17", image: Img17 },
  { name: "Pokemon 18", image: Img18 },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <div className="card-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <img
              key={index}
              src={card.image}
              alt={card.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          ))
        ) : (
          <p>No matching Pokemon found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;