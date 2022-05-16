import styles from '../styles/Instructions.module.css';
const Instructions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Instructions</h1>
        <p>
          This is a memory game. You will be presented with a grid of cards.
          Each card has a unique number on it. Your goal is to find pairs of
          cards that have the same number. If you do, then you get points. Keep
          track of your score and see if you can beat your high score.
        </p>
        <p>
          Click on a card to see if you have a match. If you do, the cards stay
          flipped over. If you don't, they flip back over.
        </p>
        <p>If you have a match, you get points.</p>
        <p>If you don't have a match, the cards flip back over.</p>
        <p>The game is over when all cards have been matched.</p>
        <p>Go back and Click on the "Play" button to start the game.</p>
      </div>
    </div>
  );
};

export default Instructions;
