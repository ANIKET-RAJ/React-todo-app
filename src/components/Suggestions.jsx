import React, {Component} from 'react'; 

// Bootstrap for react 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button'; 
import InputGroup from 'react-bootstrap/InputGroup'; 
import FormControl from 'react-bootstrap/FormControl'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import '../App.css'


function Suggestions(props) {

    let arr = props.data.list
    let filterarr =[]
    let i =0
    for(i = 0; i<arr.length;i++){
      if (arr[i].value.substr(0, props.userInput.length).toUpperCase() == props.userInput.toUpperCase()) {
        filterarr.push(arr[i]);

    }
  }
  
    return(
        <div>
      <p><marquee>You have {filterarr.length} similar items in the list :)</marquee></p>
      <section className="cards-wrapper">
      
        {filterarr.map(item => {
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



    </div>





    )
}
export default Suggestions;