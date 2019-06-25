export function reducer(state, action) {
  switch (action.type) {

    case 'TOGGLE_SHEESHA_IMAGES':
      console.log('existing state: ' + JSON.stringify(state));
      console.log('payload: ' + action.payload);
      return {
        ...state,
        displaySheeshaImages: action.payload
      };

    default:
      return state;
  }
}
