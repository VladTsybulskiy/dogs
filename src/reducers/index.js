export const initialState={
  loadingSidebar:false,
  loadingImage:false,
  breeds:" ",
  changeBreed:" ",
  img:" "
}

export const rootReducer=(state=initialState,action)=>{

  switch(action.type){

    case "SET_ALL_BREEDS":
      return {...state,breeds : action.payload}

    case "GET_BREED":
      return {...state,changeBreed: action.breed}

    case "CHANGE_IMG":
      return {...state,img:action.img}

    case "CHANGE_LOADING_SIDEBAR":
      return {...state,loadingSidebar:action.loadingSidebar}

    case "CHANGE_LOADING_IMAGE":
      return {...state,loadingImage:action.loadingImage}

    default:
      return state;

  }
}