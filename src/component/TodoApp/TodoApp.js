import React, { Component } from 'react';
import "./TodoApp.css";

class TodoApp extends Component {
    constructor(props)
    {
       super(props)
        this.state=
        {
            input:'',
            items:[]
        }
    }
    handleChange=(event)=>
    {
        this.setState({
            input:event.target.value
        })
    }
    handleSubmit=(event)=>
    {
         // const {input}=this.state;
         // const allitems=this.state.items;
         // allitems.push(input);
         // this.setState(
         //     {
         //         items:allitems
         //     }
         // );

         event.preventDefault();
         const {input,items}=this.state;
         this.setState({
             items:[...items,input],
             input:''

         });
      
        
    };
    deleteItem=key=>
    {
        //  const allitems=this.state.items ;
        // allitems.splice(key,1);
        this.setState({
            items:this.state.items.filter((data,index)=>index !==  key)
         }); 
    };

    render() {
        const {input,items}=this.state;
        return ( 
            <div className="todo-container">
           
                <form className="input-section" onSubmit={this.handleSubmit}>
                <h1>TodoApp</h1>
                    <input type="text" placeholder="Enter items.." value={this.state.input} onChange={this.handleChange}/>

                </form>
                <ul>
                  { items.map((item,index)=>(<li key={index}> {item}<i class="far fa-trash-alt " onClick={()=>this.deleteItem(index)}></i></li>))} 
                </ul>
            
            </div>
        )
    }
}
export default TodoApp