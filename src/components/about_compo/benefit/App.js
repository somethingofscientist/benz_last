import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './HorizontalScrollMenu.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
  const data = new Array(10).fill(
    'https://cdn.pixabay.com/photo/2023/05/31/09/57/skyscraper-8030987_1280.jpg'
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const { t, i18n } = useTranslation();
  return (
    <ScrollMenu >
      {data.map((imageUrl, index) => (
        <div
          key={index}
          className={`image-container ${hoveredIndex === index ? 'hovered' : ''
            }`}
          style={{ width: '300px', height: '400px' }}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={() => handleImageHover(null)}
        >
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            style={{ width: '100%', height: '100%' }}
          />
          {hoveredIndex === index ? (
            <div className="image-text">lorem ipsum lorem </div>
          ) : (
            <h1 className="image-textHeading">Costumer Xyz </h1>
          )}
        </div>
      ))}

    </ScrollMenu>
  );
};

export default App;
