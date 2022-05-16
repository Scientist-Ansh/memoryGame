import styles from '../styles/Game.module.css';

import Card from './Card';
const BLANK_CARD =
  'https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-pixabay-235985-scaled.jpg';

type BoardProps = {
  imagesArray: string[];
  isCardChosen: (index: number) => boolean;
  flipCard: (index: number) => void;
};

const Board = ({ imagesArray, isCardChosen, flipCard }: BoardProps) => {
  return (
    <div className={styles.row}>
      {imagesArray?.map((image: string, index: number) => {
        return (
          <Card
            key={index}
            src={isCardChosen(index) ? image : BLANK_CARD}
            image={image}
            index={index}
            flipCard={flipCard}
          />
        );
      })}
    </div>
  );
};

export default Board;
