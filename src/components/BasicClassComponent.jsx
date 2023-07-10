import {Component} from "react";

class BasicClassComponent extends Component {
    // lifecycle => mounting , updating, unmounting

    state = {
        name: 'divyansh'
    }
    
    // member =>variable
    // function
    render(){
        return (
            <div> class component </div>
        )
    }
}

export default BasicClassComponent;