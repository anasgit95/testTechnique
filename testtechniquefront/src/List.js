 
 import Element from './Element'
 function List() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements.element.value) // from elements property
       
       
       }
  return (
      <form onSubmit={handleSubmit} style={{width:50,margin:5,height:200}}>

<h3 > List Name  </h3> 

        <Element/> 
        

        <input name="element" />
      </form>


    );
}

export default List;
