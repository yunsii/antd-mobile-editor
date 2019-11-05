import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.less';

export default (props: {
  images: string[];
}) => {
  const {
    images,
  } = props;

  const renderImage = (src) => (
    <div
      key={src}
      className={styles.imageWrapper}
    >
      <img
        src={src}
        alt=''
        className={styles.image}
      />
    </div>
  )

  return (
    <div>
      {images.length === 1 ? (
        renderImage(images[0])
      ) : (
          <Carousel>
            {images.map((item) => (
              renderImage(item)
            ))}
          </Carousel>
        )}
    </div>
  )
}