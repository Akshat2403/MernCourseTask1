import { deleteName, getNames,postName} from "./Api";
import { useEffect,useState } from "react";
import Loading from "./Loading"
import Input from "./Input";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined} from "@ant-design/icons"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Crud = () => {
    const [names,setNames]=useState([])
    const [loading,setLoading]=useState(true)
    const [name,setName]=useState("")
    
    useEffect(()=>{
        loadnames()
    },[]);
    const loadnames=()=>{getNames().then(t=>{
        setNames(t.data)
        setLoading(false)
    })}
    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        postName({name}).then(res=>{
            loadnames()
            setName("")
            toast.success("Added")
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
            toast.error(err)
            loadnames()
        })
    }
    const handleDelete=(e,id)=>{
        e.preventDefault()
        setLoading(true)
        deleteName(id).then((res)=>{
            loadnames()
            toast.info("Deleted")
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
            toast.error(err)
            loadnames()
        })
    }

    return ( 
        <div className="container">
            <Input 
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
            />
            {loading && <Loading/>}
            <div className="name">
                        {names && names.map((data)=>(
                        <div  className="data" key={data.id}>
                            <span>{data.name}</span>
                            <div>
                                <span  id="delete" onClick={(e)=>handleDelete(e,data.id)}><DeleteOutlined/></span>
                                <Link to={`/update/${data.id}`}><span><EditOutlined/></span></Link>
                            </div>
                            
                        </div>
                        ))}
                    
                </div>
            
        </div>
     );
}
 
export default Crud;