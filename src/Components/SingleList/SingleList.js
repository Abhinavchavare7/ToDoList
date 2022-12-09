import React, { useEffect, useState } from 'react'
import "./SingleList.css"
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SingleList = () => {

    const [itemData, setItemData] = useState("")
    const [newList, setNewList] = useState([])

    let Liststorage=JSON.parse(localStorage.getItem("tokenList"))
   
    useEffect(()=>{
        
        if(Liststorage){
            setNewList(Liststorage)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("tokenList", JSON.stringify(newList))
        
}, [newList])

    const getListItem = () => {
        if (itemData) {
            setNewList([...newList, { itemData, id: new Date().getTime().toString() }])
            setItemData("")
        }
    }

    const deletItem = (id) => {
        // alert(id)
        let updatedList = newList.filter((curEle) => {
            return curEle.id !== id
        })
        console.log(updatedList)
        return setNewList([...updatedList])
    }

    const removeList=()=>{
        setNewList([])

    }


    return (
        <div className='flex-center'>
        <div className='list-container' >
        <h4>One Sentence To_Do_List</h4>
            <div className='input-cont'>
                <input  type="text" className='list-input' value={itemData} onChange={(e) => { setItemData(e.target.value) }} placeholder='Enter things to do...'></input>

                <i onClick={() => getListItem()} className='btn-add'><AiOutlinePlus className='iconz addsize' /></i>
            </div >
            {
                newList.map((curEle) => {
                    return (

                        <div key={curEle.id} className='list-store'>
                            <h5 >{curEle.itemData} </h5><span onClick={() => deletItem(curEle.id)} className='btn-delet'><RiDeleteBin6Fill /></span>
                        </div>
                    )
                })

            }
<div className='remove-center'>
            <div onClick={()=>{removeList()}} className='remove-btn'>
               <h5> Remove All</h5>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SingleList
