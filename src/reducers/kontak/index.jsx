import { ADD_KONTAK, DELETE_KONTAK, EDIT_KONTAK, GET_LIST_KONTAK, UPDATE_KONTAK } from "../../actions/KontakActions";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,
  
  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  editKontakResult: false,
  
  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,

};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMassage,
      };

    case ADD_KONTAK:
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMassage,
      };
    
      case DELETE_KONTAK:
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMassage,
      };
      
      case EDIT_KONTAK:
      return {
        ...state,
        editKontakResult: action.payload.data,
      };

      case UPDATE_KONTAK:
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakError: action.payload.errorMassage,
      };
    default:
      return state;
  }
};

export default kontak;
