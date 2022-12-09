import React from 'react'

const ListReducer = (state,action) => {

  let {listdatacont,storeListData}=state
  
  switch (action.type){
    
    case "SET_DATA":
    let  {fname,value}=action.payload
        return{ 
      ...state,
      listdatacont:{ ...state.listdatacont,[fname]:value ,id:new Date().getTime().toString()}
    }
   
      case "STORE_DATA":
       
        return{
          ...state,storeListData:[...storeListData,listdatacont]
        }
case "RESET_TEXT":
  return{
    ...state,listdatacont:{title:"",description:""}
  }

  case "SET_REMOVE_LIST":
// alert(action.payload)
let updatesdatarem = state.storeListData.filter((curelem)=>{
  return curelem.id !== action.payload
})
console.log(updatesdatarem)
    return{
      ...state,storeListData:updatesdatarem
    }

  case "GET_LOCALSTR_DATA":
    // alert("sdfgfd")
    // console.log(action.payload)
    return{
      ...state,storeListData:[...action.payload]
    }



}
  return (
   state
  )
}

export default ListReducer
