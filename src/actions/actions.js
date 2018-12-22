export const setAllBreeds=data=>{

  const SET_ALL_BREEDS="SET_ALL_BREEDS";

  return{
    type:SET_ALL_BREEDS,
    payload:data
  }
}

export const  getOneBreed=breed=> {
  const GET_BREED = "GET_BREED";

  return {
    type: GET_BREED,
    breed
  }
}
export const changeImg=img=>{
  const CHANGE_IMG="CHANGE_IMG";
  return{
    type:CHANGE_IMG,
    img
  }
}