import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import reducer from "../Reducer/ListReducer"

const ListContext = createContext()
const initialState = {
    listdatacont: {
        title: "",
        description: "",
        id:""
    },
    storeListData: []
}



const ListConTextProvider = ({ children }) => {

    const showToastMessage = () => {
        toast.success("List deleted", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2500,
        });
    };

    const [state, dispatch] = useReducer(reducer, initialState)
    let list = localStorage.getItem("Token")

    const getListTitle = (e) => {
        let fname = e.target.name
        let value = e.target.value
        return dispatch({ type: "SET_DATA", payload: { fname, value} })
    }

    const storeDatacreated = () => {

        if (state.listdatacont.title == "" && state.listdatacont.description == "") {
        } else {
            getlocalstoredata();
            dispatch({ type: "STORE_DATA" })
            dispatch({ type: "RESET_TEXT" })
           }
    }
  const  deletedList=(id)=>{
      showToastMessage() 
    //   alert("dfg")
   return dispatch({type:"SET_REMOVE_LIST",payload:id})
}

const setboldtext=(id)=>{
    dispatch({type:"SET_BOLD_TEXT",payload:id})
}

 const   getlocalstoredata=()=>{
    if(list){
             let locatstoragedatapull = JSON.parse(localStorage.getItem("Token"))
             dispatch({type:"GET_LOCALSTR_DATA",payload:locatstoragedatapull})
            }
            else{

                dispatch({type:"GET_LOCALSTR_DATA",payload:[]})
            }
    }
    
    useEffect(()=>{
        getlocalstoredata()
    },[])

    useEffect(() => {
        localStorage.setItem("Token", JSON.stringify(state.storeListData))
    }, [state])

    return (
        <ListContext.Provider value={{ storeDatacreated, getListTitle, ...state, ...state.listdatacont,deletedList,setboldtext}}>
            {children}
        </ListContext.Provider>

    )
}


const useListContext = () => {
    return useContext(ListContext)
}



export { ListConTextProvider, useListContext, ListContext }