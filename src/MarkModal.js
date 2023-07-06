import * as React from 'react';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MarkModal = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const {id} = useParams();
    const mark_id=  id;
  
    
    const [subject,setSubject] =useState(" ");
    const [int1,setint1] =useState(" ");
    const [int2,setint2] =useState(" ");
    const [ext,setext] =useState(" ");
   

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        height :400 ,
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const handleSubmit = (e) => {
       // e.preventDefault();
        const Mark ={subject,int1,int2,ext,mark_id};
        
        fetch("https://roshna-roland.github.io/Task_8/mark/",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(Mark)
         }).then(() =>{
            console.log("new marks added");
            console.log(Mark);
        }).then(() =>{
             handleClose();
        })
    };    
    
    return ( 
        <div>
            <button type="button" onClick={handleOpen}>Add Marks</button>
            <Modal onClose={handleClose} open={open} sx={style}>
            {/*    style={{ display: 'block', padding: 30 }} */}
                <div>
                    <div className="modal-header">
                        <h1 className="modal-title">Enter Marks</h1>
                    </div>
                    <div className="modal-body" >
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label >SUBJECT:</label>
                                <input type="text"
                                className="form-control"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >First internal mark(25): </label>
                                <input  
                                className="form-control"
                                value={int1}
                                onChange={(e) => setint1(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >Second internal mark(25):</label>
                                <input type="number" 
                                className="form-control"
                                value={int2}
                                onChange={(e) => setint2(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >External mark(50): </label>
                                <input type="number" 
                                    className="form-control"
                                    value={ext}
                                    onChange={(e) => setext(e.target.value)}
                                    required/>
                            </div>
                            
                            <button >Submit</button>
                        
                        </form>    
                    </div>
                </div>    

            </Modal>
        </div>

    );
}
    export default MarkModal;



         // <div className="Modal">

        //     <button onClick={handleOpen} >Add Marks</button>
          
        //     <Modal
        //         onClose={handleClose}
        //         open={open}
                
        //         aria-labelledby="modal-modal-title"
        //         aria-describedby="modal-modal-description"
        //         >
        //             <Box sx={style}>
        //             <div className="modal-header">
        //                             <h1 className="modal-title">Enter Marks</h1>
        //                         </div>
                    // <div className="modal-body" >
                    //                 <form onSubmit={handleSubmit}>
                    //                     <div className="form-group">
                    //                         <label >SUBJECT:</label>
                    //                         <input type="text"
                    //                         className="form-control"
                    //                         value={subject}
                    //                         onChange={(e) => setSubject(e.target.value)}
                    //                         required/>
                    //                     </div>
                    //                     <div className="form-group">
                    //                         <label >First internal mark(25): </label>
                    //                         <input type="text" 
                    //                         className="form-control"
                    //                         value={int1}
                    //                         onChange={(e) => setint1(e.target.value)}
                    //                         required/>
                    //                     </div>
                    //                     <div className="form-group">
                    //                         <label >Second internal mark(25):</label>
                    //                         <input type="text" 
                    //                         className="form-control"
                    //                         value={int2}
                    //                         onChange={(e) => setint2(e.target.value)}
                    //                         required/>
                    //                     </div>
                    //                     <div className="form-group">
                    //                         <label >External mark(50): </label>
                    //                         <input type="text" 
                    //                          className="form-control"
                    //                          value={ext}
                    //                          onChange={(e) => setext(e.target.value)}
                    //                          required/>
                    //                     </div>
                                        
                    //                     <button type="submit" >Submit</button>
                                  
                    //                 </form>    
                    //             </div>
                                
                    
        //             </Box>
        //     </Modal>
        // </div>

































// import React from 'react';
// import Modal from '@material-ui/core/Modal';
// import { useState } from 'react';
 
// function modal() {
 
//     const [open, setOpen] = useState(false);
 
//     const handleClose = () => {
//         setOpen(false);
//     };
 
//     const handleOpen = () => {
//         setOpen(true);
//     };
 
 
//     return (
//         <div style={{ display: 'block', padding: 30 }}>
//             <h4>How to use Modal Component in ReactJS?</h4>
//             <button type="button"
//                 onClick={handleOpen}>
//                 Click Me to Open Modal
//             </button>
//             <Modal
//                 onClose={handleClose}
//                 open={open}
//                 style={{
//                     position: 'absolute',
//                     border: '2px solid #000',
//                     backgroundColor: 'gray',
//                     boxShadow: '2px solid black',
//                     height: 80,
//                     width: 240,
//                     margin: 'auto'
//                 }}
//             >
//                 <h2>How are you?</h2>
//             </Modal>
//         </div>
//     );
// }

// export default modal;
