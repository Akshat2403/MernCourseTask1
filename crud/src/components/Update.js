import { getName,updateName } from "./Api";
import Input from "./Input";
import { useState,useEffect } from "react";
import Loading from "./Loading";
import { useParams ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


const Update = () => {
    const [name,setName]=useState("")
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const history=useNavigate()

    useEffect(()=>{
        loadname()
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        updateName(id,{name}).then((res)=>{
            loadname()
            toast.success("Updated")
            setLoading(false)
            history('/')
        }).catch((err)=>{
            toast(err)
            loadname()
            setLoading(false)
        })
    }
    const loadname=()=>{
        getName(id).then(res=>{
            setName(res.data.name)
        })
        .catch((err)=>{
            toast(err)
            loadname()
            setLoading(false)
        })
    }
    return ( 
        <div className="update">
            <h1 className="heading1">Edit Name</h1>
            {loading && <Loading/>}
            <Input
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
            />
        </div>
    );
}
 
export default Update;