import React, { memo } from 'react';

type CardProps = {
  src: string;
  image: string;
  index: number;
  flipCard: (index: number) => void;
};

const Card: React.FC<CardProps> = memo(({ src, image, index, flipCard }) => {
  return (
    <div onClick={() => flipCard(index)}>
      <img width={150} height={150} src={src} alt="" />
    </div>
  );
});

export default Card;
