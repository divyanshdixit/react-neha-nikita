
// component => functional, class 
// controlled, uncontrolled

const HeadingComponent = ({from,id, value}) => {
    // props.from = "apps"; // props can not be changed
    
    return (
    <div>
        <h1> Divyansh - { from} - {id} </h1>
        {value}
        </div>
    )
}

// <h1>  </h1>
// self closing <input/>
export default HeadingComponent
