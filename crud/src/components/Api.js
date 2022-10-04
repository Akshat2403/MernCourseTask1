import axios from "axios"

export const getNames = async ()=>{
    return await axios.get("http://localhost:5000/data")
}
export const postName = async(name)=>{
    return await axios.post("http://localhost:5000/data",name)
}
export const getName = async (id)=>{
    return await axios.get(`http://localhost:5000/data/${id}`)
}
export const deleteName = async(id)=>{
    return await axios.delete(`http://localhost:5000/data/${id}`)
}
export const updateName = async(id,name)=>{
    return await axios.put(`http://localhost:5000/data/${id}`,name)
}