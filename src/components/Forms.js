import React, {Component} from 'react';

class Forms extends Component {

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
           <label>
             Person Name:
           <input type="text" name="name" onChange={this.handleChange} />
         </label>
         <button type="submit">Add</button>
       </form>
        );
    }
}

export default Forms;
