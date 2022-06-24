import './modal.css';
import {useState} from 'react';

const Modal = ({ handleClose, show, itemId, itemName, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name, setName] = useState('');
//   const [id, setId] = useState(itemId);

  const handleUpdateClick = e => {
    e.preventDefault();
    
    const items = this.props.items;
  
    const index =  items.indexOf(itemId);
    console.log(index);
    items[index].text = name;
  
    this.setState({
        items: items,
        updateText: ''            
    });

    setName('');
    // setId('');
    
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <form onSubmit={handleUpdateClick}>
                    <input
                    id="new-todo"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    placeholder={itemName}
                    name="updateText"                   
                    />
                    <input 
                    type='hidden'                              
                    value={itemId == null ? '' : itemId}                    
                    name="itemId"                   
                    />                                  
                    <button>
                    Update
                    </button>
                </form>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );

  
};


export default Modal;