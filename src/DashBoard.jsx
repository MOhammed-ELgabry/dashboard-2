import React, { useRef, useState } from "react";

export default function DashBoard() {
  const [phones, setphones] = useState([
    { name: "iphonex", price: 300, qty: 5 },
    { name: "iphone14", price: 400, qty: 7 },
    { name: "iphone16", price: 500, qty: 4 },
    { name: "iphone17", price: 700, qty: 8 },
  ]);
  const [newPhoneModal, setNewPhoneModal] = useState(false);
  const removePhones = (index) => {
    let copy = [...phones];
    copy.splice(index, 1);
    setphones(copy);
  };
const nameInput=useRef()
const priceInput = useRef()
  const qtyInput =useRef()
const addNewPhone=()=>{
  let newValue={ name: nameInput.current.value, price: priceInput.current.value, qty: qtyInput.current.value }
  let copy =[...phones]
  copy.push(newValue)
  setphones(copy)
  alert('new phone added')
  setNewPhoneModal(false)
}
const [editPhoneModal,setEditPhoneModal]=useState(null)
const openEditModal=(index)=>{
  setEditPhoneModal(index)
  document.getElementById('my_modal_1').showModal()
  let oldData =phones[index]
  nameInput.current.value=oldData.name
  priceInput.current.value=oldData.price
  qtyInput.current.value=oldData.qty
}

const saveData=()=>{
  let newData = {
    name:nameInput.current.value,
  price:+priceInput.current.value,
  qty:+qtyInput.current.value,
  }
  let copy = [...phones]
  copy[editPhoneModal]=newData
  setphones(copy)
  document.getElementById('my_modal_1').closeModal()
}
  return (
    <div className="flex justify-center items-center ">
      <div className="container justify-center items-center mt-5">
        <button className="btn btn-error text-white text-3xl" onClick={()=>{setNewPhoneModal(true)}}>
         
          add new phone
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-gray-800 flex flex-col gap-4 p-4">
   
    
    <h1 className="text-white text-3xl">edit phone </h1>
                <input ref={nameInput}
                  type=""
                  placeholder="enter phone name"
                  className="w-full input"
                />
                <input ref={priceInput}
                  type="text "
                  placeholder="enter phone price"
                  className="w-full input"
                />
                <input ref={qtyInput}
                  type="text"
                  placeholder="enter phone qty"
                  className="w-full input"
                />
                <button className="btn btn-primary" onClick={saveData} > save</button>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        <table className="table bg-red-500 text-white border-amber-800">
          <thead className="text-white">
            <tr>
              <th>#</th>
              <th>item name </th>
              <th> item price</th>
              <th>item qty</th>
              <th>item total</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((el, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>{el.name}</td>
                  <td> {el.price} </td>
                  <td> {el.qty} </td>
                  <td> {el.qty * el.price} </td>
                  <td>
                    <div className="flex gap-3">
                      <button className="btn btn-warning text-white " onClick={()=>openEditModal(index)}>
                        edit phone
                      </button>
                      <button
                        className="btn btn-warning text-white "
                        onClick={() => {
                          removePhones(index);
                        }}
                      >
                        remove phone
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {newPhoneModal  &&(
            <div className="w-full h-dvh bg-black/80 fixed left-0 top-0  flex justify-center  items-center" onClick={()=>{setNewPhoneModal(false)}} >
              <div className="w-[500px] rounded bg-gray-900 shadow flex flex-col gap-4 p-4 " onClick={(event)=>{event.stopPropagation()}}>
                <h1 className="text-white text-3xl">add new phone </h1>
                <input ref={nameInput}
                  type=""
                  placeholder="enter phone name"
                  className="w-full input"
                />
                <input ref={priceInput}
                  type="text "
                  placeholder="enter phone price"
                  className="w-full input"
                />
                <input ref={qtyInput}
                  type="text"
                  placeholder="enter phone qty"
                  className="w-full input"
                />
                <button className="btn btn-primary" onClick={addNewPhone}> save</button>
              </div>
            </div>
          )
        }
    </div>
  );
}
