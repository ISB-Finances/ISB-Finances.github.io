import React, { useState, useRef } from 'react'

export const labelPoints = ['test', 'test1', 'test2', 'test3', 'test5'];
export const dataPointsO = [15, 25, 56, 81, 13];
export const dataPointsI = [15, 18, 21, 35, 81];

export default function TestGraph() {
    // const emailRef = useRef()

//   function handleChange() {
//         this.setData([... data, emailRef.current.value])
//         console.log(data);
//     }

const [myMap, setMyMap] = useState(new Array());


function change() {
    let temp = new Array();
    temp = [...myMap, 15];
    setMyMap(myMap);
    console.log(temp);
    console.log("before")
    console.log(myMap.includes(1))
    setMyMap(new Array(myMap.push(1)))
   

    console.log("after")

}

    const [data, setData]  = useState("")
    return (
        <div>
<button onClick={change}>Press to Change</button>
        <p>Change below</p>
        <p>{myMap.pop}</p>
        {/* <input value={data} onChange={setData(data)} /> */}
        {/* <input ref = {emailRef} />
        
        <button className="w-100" type = "submit"onSubmit={handleChange}>Submit</button> */}
       {/* <p>{data}</p> */}
        </div>
    )
}