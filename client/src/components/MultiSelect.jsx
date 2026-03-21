import { useState } from "react"
import Input from "./Input"

function MultiSelect({selectedItems,onRemoveItem,onAddItem ,placeholder}) {
    const [newItem,setNewItem]=useState("")
  return (
    <div>
        {selectedItems.map((item,index)=>{
            return <div className="border border-gray-600 mx-2 px-2 rounded-full bg-gray-200 min-w-[100px] inline-block my-1 " key={index}>
                {item}{" "}

                <span className="cursor-pointer text-gray-400 hover:text-gray-800 ml-4"
                onClick={()=>{
                    onRemoveItem(item)
                }}
                >x
                </span>

            </div>
        })}
        <Input type="text" 
        placeholder="Add City" 
        value={newItem}
        onChange={(e)=>{
            setNewItem(e.target.value)
        }}
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                console.log("Add Item:",e.target.value)
                onAddItem(e.target.value)
                setNewItem("")
            }
        }}
        />
    </div>
  )
}

export default MultiSelect