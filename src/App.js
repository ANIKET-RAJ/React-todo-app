import React, { Component } from 'react';
import Results from './components/Results'
import Suggestions from './components/Suggestions'

// Bootstrap for react 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class App extends Component {
	constructor(props) {
		super(props);

		// Setting up state 
		this.state = {
			userInput: "",
			list: []
		}
		this.deleteItem = this.deleteItem.bind(this);
	}

	// Set a user input value 
	updateInput(value) {
		this.setState({
			userInput: value,
		});
	}

	// Add item if user input in not empty 
	addItem() {
		if (this.state.userInput !== '') {
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ '--'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			const userInput = {

				// Add a random id which is used to delete 
				id: Math.random(),

				// Add a user value to list 
				value: this.state.userInput,


				//add date of creation of item
				Created: date
			};

			// Update list 
			const list = [...this.state.list];
			list.push(userInput);

			// reset state 
			this.setState({
				list,
				userInput: ""
			});
		}
	}

	// Function to delete item from list use id to delete 
	deleteItem(key) {
		console.log(this.state)
		const list = [...this.state.list];

		// Filter values and leave value which we need to delete 
		const updateList = list.filter(item => item.id !== key);

		// Update list in state 
		this.setState({
			list: updateList,
		});

	}


	render() {
		return (
			<div>
				<div class="container">
					<div class="row">
						<div class="col-sm-12 bg-success">
							<Container>

								<Row style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontSize: '3rem',
									fontWeight: 'bolder',
								}}
								>TODO LIST
								</Row>

								<hr />
								<Row>
									<Col md={{ span: 5, offset: 4 }}>

										<InputGroup className="mb-3">
											<FormControl
												placeholder="add item . . . "
												size="lg"
												value={this.state.userInput}
												onChange={item => this.updateInput(item.target.value)}
												aria-label="add something"
												aria-describedby="basic-addon2"
											/>
											<InputGroup.Append>
												<Button
													variant="dark"
													size="lg"
													onClick={() => this.addItem()}
												>
													ADD
								</Button>
											</InputGroup.Append>
										</InputGroup>

									</Col>
								</Row>
							</Container> 
    
  
      					</div>
	  
						  <div class="col-sm-12">
						{this.state.userInput===''?<Results userInput={this.state.userInput} data={this.state} onDelete = {this.deleteItem} />:<Suggestions userInput={this.state.userInput} data={this.state} onDelete = {this.deleteItem} />}
						

						</div>
						</div>
				</div>

				
			</div>
			
			
			
		);
	}
}

export default App; 
