import React from 'react';
import Modal from './Modal.js';

class Todolist extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { 
            completed: [], 
            updateText: '', 
            show: false,
            activeItemName: '',
            activeItemId: null,
         };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);                       
      }

    showModal = (item) => {        
        this.setState({ 
            show: true,
            activeItemName: item.text,
            activeItemId: item.id,
            updateText: '',
        });        
    };

    hideModal = () => {
        this.setState({ 
            show: false,
            activeItemName: '',
            // activeItemId: null, 
        });
    };

    render() {
        return (
            <div>
                <Modal 
                show={this.state.show} 
                handleClose={this.hideModal}
                itemId={this.state.activeItemId}
                itemName={this.state.activeItemName}                
                updateText={this.state.updateText}
                >
                <p>Modal</p>
                
                </Modal>
                <ul>
                    {this.props.items.map(item => (
                    <li key={item.id}>
                    {item.text}
                    <button onClick={() => this.handleCompleteClick(item)}>Complete</button>
                    <button onClick={() => this.showModal(item)}>Update</button>
                    <button onClick={() => this.handleDeleteClick(item)}>X</button>
                    </li>                
                    ))}
                </ul>
                <h5>Completed Task List : </h5>
                <ul>
                    {this.state.completed.map(complete => (
                    <li key={complete.id}>
                    {complete.text}                    
                    </li>                
                    ))}
                </ul>                
            </div>
        );
    }

    handleCompleteClick(item) {           
        const items = this.props.items;
        const index =  items.indexOf(item);
        if(index !== -1) {
            items.splice(index,1);
            this.setState( state => ({
                completed: state.completed.concat(item),            
                items: items,                                 
              })
              );
        }
    }

    handleDeleteClick(item) {           
        const items = this.props.items;
        const index =  items.indexOf(item);
        if(index !== -1) {
            items.splice(index,1);
            this.setState( {                          
                items: items,                                 
              }
            );
        }
    }

}

export default Todolist;