import React from 'react';


class StorePicker extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form className='store-selector'>
        {/* Hello! */}
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name' />
        <button type='submit'>Visit Store -> </button>
      </form>
    );
  }

}

export default StorePicker;