import React, { useState } from 'react'
import "./Totallist.css"
// import { FaBold } from "react-icons/fa";
// import { FiUnderline } from "react-icons/fi";
// import { BiEdit } from "react-icons/bi";
import { useListContext } from '../Context/ListContext';
// import { useNavigate } from "react-router-dom";
// import QuillEditor from '../QuillEditor';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Totallist = () => {
    //     // const navigate = useNavigate();
       

    const { storeDatacreated, getListTitle, storeListData, title, description, deletedList } = useListContext()

    // const [editText, setEditText] = useState(false)
    // const [editTextid, setEditTextId] = useState(null)

    // let viewlistcont = (id) => {
    //     {/* showToastMessage(tit,des)    */ }
    //     storeListData.find((curele) => {
    //         if (curele.id == id) {
    //             setEditText(true)
    //             setEditTextId(id)
    //         }
    //     })
    // }


    return (
        <div className='tolist-center'>
            <div className='totlist-cont'>
                <div className='first-cont'>
                    {
                        storeListData ?
                            storeListData.map((curelem, ind) => {
                                return <h5 key={curelem.id} 
                                ><strong>  {ind + 1}: {curelem.title}</strong> </h5>
                            }) : null

                    }
                            {/* onClick={() => { viewlistcont(curelem.id) }} */}

                    {/* {(editText) ?

                        
                            (storeListData) ?
                                storeListData.map((curelem) => {
                                  if(curelem.id===editTextid){
                                    return (
                                        <div key={curelem.id}  className='edit-position'>
                                        <div className='totallistcont list-col'>
                                        <div className='title-data'>
                                <h5 className='flex-center'>Title</h5>
                                <input className='descrip-cont' value={title} type="text" placeholder='Enter list title' name="title" onChange={(e) => getListTitle(e)} />
                            </div>
                                                                                      <div className='des-text'>
                                                {curelem.description}
                                            </div>
                                            <button onClick={() => storeDatacreated()} >Create list</button>
                                            <button className='rem-list' onClick={() =>  setEditText(false)} >Rem</button>

                                        </div>
                                        </div>
                                    )
                                  }
                                })                           
                                :null
                        : null
                    } */}

                </div>
                <div className='sec-cont'>
                    <div className='inputlist'>
                        <div className='totallistcont'>
                            <div className='title-data'>
                                <h5 className='flex-center'>Title</h5>
                                <input className='descrip-cont' value={title} type="text" placeholder='Enter list title' name="title" onChange={(e) => getListTitle(e)} />
                            </div>
                            <div className='title-data'>
                                <h5 className='flex-center '>Description</h5>
                                <textarea type="text" rows="5" name="description" value={description} placeholder='please describe...' className='descrip-cont' onChange={(e) => getListTitle(e)} />

                            </div>
                            <button className='btn-text' onClick={() => storeDatacreated()} >Create list</button>



                        </div>

                    </div>

                    <div className='created-list-cont'>
                        {
                            (storeListData) ?
                                storeListData.map((curelem) => {
                                    {/* console.log(curelem.title)  */ }
                                    return (
                                        <div key={curelem.id} className='totallistcont list-col'>
                                            {/* <div className='style-cont'>
                                                <h5>Text Styles:</h5>
                                                <div className='text-style'>
                                                    <h5 onClick={()=>{setboldtext(curelem.id)}}><FaBold /></h5>
                                                    <h5><FiUnderline /></h5>
                                                    <h5><BiEdit /></h5>
                                                </div>
                                            </div> */}
                                            <div className='tit-text'>
                                                {curelem.title}
                                            </div>
                                            <div className='des-text'>
                                                {curelem.description}
                                            </div>
                                            <button className='btn-text' onClick={() => deletedList(curelem.id)} >Delet List</button>

                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>


                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Totallist
