export const setAllBreeds=data=>{

  const SET_ALL_BREEDS="SET_ALL_BREEDS";

  return{
    type:SET_ALL_BREEDS,
    payload:data
  }
}

export const getOneBreed=breed=> {
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
export const changeLoadingSidebar=loadingSidebar=>{
  const CHANGE_LOADING_SIDEBAR="CHANGE_LOADING_SIDEBAR";
  return{
    type:CHANGE_LOADING_SIDEBAR,
    loadingSidebar
  }
}

export const changeLoadingImage=loadingImage=>{
  const CHANGE_LOADING_IMAGE="CHANGE_LOADING_IMAGE";
  return{
    type:CHANGE_LOADING_IMAGE,
    loadingImage
  }
}