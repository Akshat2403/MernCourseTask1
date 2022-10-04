const Input = ({handleSubmit,name,setName}) => {

    return ( 
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input className="input"
                type="text" 
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
            />
            <br></br>
            <button className="buttonSubmit" >Submit</button>
            <button className="buttonCancel" onClick={(e)=>{
                e.preventDefault()
                setName("")}} >Cancel</button>
        </form>
        </div>
        
     );
}
 
export default Input;