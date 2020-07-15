const counterReducer = (state = 0, action) =>{
  switch(action.type){
      case 'INCREMENT':
          return state + 1;
          // so here we can add return state + action.payload (which is 5);
      case 'DECREMENT':
          return state - 1;
          default:
              return state;
  }
};

export default counterReducer;