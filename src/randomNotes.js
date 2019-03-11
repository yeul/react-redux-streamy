//Sample Code!! Note to self!!
//Array-based approach (updating information about our streams).

// const streamReducer = (state = [], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if (stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       });
//     default:
//       return state;
//   }
// };

//Object-based approach. Going with this approach.

// const streamReducer = (state = {}, action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       const newState = { ...state };
//       //property accessor notation on an array
//       newState[action.payload.id] = action.payload;
//       return newState;
//     default:
//       return state;
//   }
// };

//ES6 approach to the above:

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //below is key interpolation
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
