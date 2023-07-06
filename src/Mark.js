import { useState,useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MarkModal from "./MarkModal";
import Title from "./Title";


const Mark = () => {
    const [mark,setMark] = useState(null);
    const {id} = useParams();
    var grandTotal =0; 
    var CGPA =0;
    
    

    useEffect(() => {
        
        fetch("http://localhost:8000/mark/")
        .then(res =>{
            return res.json();
            
        })
        .then(mark => {
            const new_mark=mark.filter((mark)=> mark.mark_id === id)
            setMark(new_mark);
            // var sec =new_mark.int2;
            // console.log(sec)
            
            
        })  
    },[]);


         const toAddTitle= () =>{

            if(mark !== null){
                if(mark.length===0) {
                    return true;}
                else{ 
                return false;}
                
            }
            else{ 
                return true;
            }
        };

        const toAddData= () =>{

            if(mark !== null){
                if(mark.length===0) {
                    return false;}
                else{ 
                return true;}
                
            }
            else{ 
                return false;
            }
        };
        
        const cgpa= ()=>{
            if(mark !== null)
            {mark.map((mark,key)=>{

           // var Key =parseInt(mark.key);
            var fir =mark.int1;
            var sec =mark.int2;
            var exter =mark.ext;
            var Total =(parseInt(mark.ext)+parseInt(mark.int1)+parseInt(mark.int2))/100;
            grandTotal += Total;
            CGPA =grandTotal/(key+1);
            }
            )
            return CGPA*10 ;
        }
     }
        

    return (   
        <div className="main">
           {toAddTitle() &&<Title title="No Marks Added"/>}


            <form className="inputss"> 
                <MarkModal />
            </form>

            {toAddData() && <div className="tableHandle">
                <table className="markcells">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Subject</th>
                            <th>Internal 1</th>
                            <th>Internal 2</th>
                            <th>External </th>
                            <th>Total</th>
                        </tr>
                    </thead>
           <tbody> 
              
                     {mark.map((mark,key)=>(
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{mark.subject}</td>
                            <td>{parseInt(mark.int1)}</td>
                            <td>{parseInt(mark.int2)}</td>
                            <td>{parseInt(mark.ext)}</td>
                            <td>{parseInt(mark.ext)+parseInt(mark.int1)+parseInt(mark.int2)}</td>
                         </tr>
                        )
                    )}
                        <tr>
                            <td>cgpa</td>
                            <td></td> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{cgpa(mark)}</td>
                        </tr>
                    </tbody>  
                </table>    
            </div>}
        </div>

     );
}

export default Mark;
 
