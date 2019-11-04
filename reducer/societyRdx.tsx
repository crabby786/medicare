const initialState = {
    isSocLoaded: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'get_soc_succ': {
          console.log('type is right');
        return {
          ...state,
          socs: payload,
        };
      }
  
      default:
        return state;
    }
  };
  