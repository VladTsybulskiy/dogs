export const initialState={
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

    case "changeImg":
      return {...state,img:action.img}

    default:
      return state;

  }
}