type gameState = {
  cardsChosen: number[];
  points: number;
  openCards: number[];
  imagesArray: string[];
};

export function reducer(
  state: gameState,
  action: { type: string; payload?: any; dispatch?: any }
): gameState {
  switch (action.type) {
    case 'resetGame':
      return { ...initialState, imagesArray: action.payload };
    case 'resetChosenCards':
      return { ...state, cardsChosen: [] };
    case 'addChosenCards':
      return { ...state, cardsChosen: [...state.cardsChosen, action.payload] };
    case 'addOpenCards':
      return { ...state };

    case 'flipCard':
      console.log('flipCard');
      if (state.cardsChosen.length === 0) {
        console.log('condition 1');

        return {
          ...state,
          cardsChosen: [...state.cardsChosen, action.payload],
        };
      }
      if (
        state.cardsChosen.length === 1 &&
        state.cardsChosen[0] === action.payload
      ) {
        console.log('condition 2');
        return { ...state, cardsChosen: [] };
      }

      if (
        state.imagesArray[state.cardsChosen[0]] ===
        state.imagesArray[action.payload]
      ) {
        console.log('condition 3');

        return {
          ...state,
          points: state.points + 2,
          cardsChosen: [],
          openCards: [...state.openCards, action.payload, state.cardsChosen[0]],
        };
      } else {
        setTimeout(() => {
          action.dispatch({ type: 'resetChosenCards' });
        }, 800);
        return {
          ...state,
          cardsChosen: [...state.cardsChosen, action.payload],
        };
      }

    case 'initImages':
      return { ...state, imagesArray: action.payload };
    default:
      return state;
  }
}
export const initialState: gameState = {
  cardsChosen: [],
  points: 0,
  openCards: [],
  imagesArray: [],
};
