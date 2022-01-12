const initialState = "Find Your GIFs";

const buttonText = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return "WAIT";
    case "RECEIVE_DATA":
      return initialState;
    default:
      return state;
  }
};

export default buttonText;
