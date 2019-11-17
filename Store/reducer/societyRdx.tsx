const initialState = {
    isSocLoaded: false,
    filteredData:[]
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'get_soc_succ': {
          // console.log('get_soc_succ reducer');
        return {
          ...state,
          socs: payload,        
          isSocLoaded: true,
        };
      }
      case 'query_succsess': {
      return {
        ...state,
        filteredData: payload,        
        isSocLoaded: true,
      };
    }
  
      default:
        return state;
        
    }
  };
  