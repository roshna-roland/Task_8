import { useState ,useEffect } from "react";
import { Link  } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import Title from "./Title";

const Table = () => {
    const [data,setData]  = useState(null);
    const [name,setName] =useState(" ")
    // const history = useHistory();

    useEffect(() =>{
        fetch('http://localhost:8000/data')
            .then(res =>{
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={name};
        fetch('http://localhost:8000/data',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(data)
        }).then(() =>{
            console.log("new name added");
        })
    };

    const toAddTitle= () =>{

        if(data !== null){
            if(data.length===0) {
                return true;}
            else{ 
            return false;}
            
        }
        else{ 
            return true;
        }
    };


    // const handleDelete = () => {
    //     fetch('http://localhost:8000/data'+ data.id,{
    //         methord: 'DELETE'
    //     }).then(() => {
    //         history.push('/')
    //     })
    // }
   
    return ( 
        <div className="main">
             {toAddTitle() &&<Title title="No Students Added"/>}
            <form className="inputss"onSubmit={handleSubmit}>
                <input type="text"
                required
                placeholder="hi"//not workng
                value={name}
                onChange={(e) => {
                setName(e.target.value)
                }} />
                <button  > Add </button> 
            </form>


            <div className="tableHandle">
                <table>
                    {data && <tbody>
                        {data.map((data, key) => (
                            <tr key={key}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td className="viewmarks">{<Link to={`/Mark/${data.id}`}><button >view marks</button></Link>}</td>
                                {/* <td><button onClick={handleDelete}>x</button></td> */}
                            </tr>
                        )
                        )}
                    </tbody>}
                </table> 
            </div>
        </div>

       
     );
}
 
export default Table;

