import { useEffect, useCallback, useReducer } from 'react';
import { images } from '../data';
import { initialState, reducer } from '../reducers/game';
import styles from '../styles/MemoryGame.module.css';
import Board from '../components/Board';

function MemoryGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cardsChosen, openCards, points, imagesArray } = state;

  useEffect(() => {
    dispatch({
      type: 'initImages',
      payload: shuffleArray(images.concat(images)),
    });
  }, []);

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const flipCard = useCallback((index: number) => {
    console.log(state);
    dispatch({ type: 'flipCard', payload: index, dispatch: dispatch });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isCardChosen(index: number) {
    return openCards?.includes(index) || cardsChosen.includes(index);
  }

  function startOver() {
    dispatch({
      type: 'resetGame',
      payload: shuffleArray(images.concat(images)),
    });
  }

  return (
    <div className={styles.container}>
      <h3>Points: {points}</h3>
      <button onClick={startOver}>Start over</button>
      <Board
        imagesArray={imagesArray}
        isCardChosen={isCardChosen}
        flipCard={flipCard}
      />
    </div>
  );
}
export default MemoryGame;
