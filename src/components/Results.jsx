import React from 'react'; 

// Bootstrap for react 
import '../App.css'

function Results(props) {

 
   
   
  return (
    <div>
      <p>You have {props.data.list.length} items in the list :)</p>
      <section className="cards-wrapper">
      
        {props.data.list.map(item => {
          return (
            
            <div className="card-grid-space">
              <div className="num">To-do Item</div>
              <div className="card"  >
              <div className="date">{item.Created}
                    </div>
                <div className="todo-item">
                  {item.value}
                  </div>
                  <button type="button" class="btn btn-danger" onClick={()=>props.onDelete(item.id)}>Delete </button>
              </div>
             
            </div>  
         

          )
        })} 
        
        </section>



    </div>);
    
    
  }
   
  export default Results;