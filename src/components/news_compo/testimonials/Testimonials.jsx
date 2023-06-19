import React, { useState } from 'react';
import styles from './Testimonial.module.css';
import yamaha from '../../images/yamaha.png';
import { BsFillPlayFill } from 'react-icons/bs';

const Testimonials = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const handleMouseEnter = (blockId) => {
    setHoveredBlock(blockId);
  };

  const handleMouseLeave = () => {
    setHoveredBlock(null);
  };

  return (
    <>
      <div className={styles.test_container} id='section4'>
        <div className={styles.test_heading}>Testimonials</div>

        {/* video section */}
        <div className={styles.test_video_container}>
          <div
            className={`${styles.test_video} ${hoveredBlock === 1 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 1 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
          <div
            className={`${styles.test_video} ${hoveredBlock === 2 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 2 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
          <div
            className={`${styles.test_video} ${hoveredBlock === 3 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 3 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
          <div
            className={`${styles.test_video} ${hoveredBlock === 4 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 4 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
          <div
            className={`${styles.test_video} ${hoveredBlock === 5 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 5 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
          <div
            className={`${styles.test_video} ${hoveredBlock === 6 ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBlock === 6 ? (
              <BsFillPlayFill size={150} color='white' />
            ) : (
              <img src={yamaha} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
