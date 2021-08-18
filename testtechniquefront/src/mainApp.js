
import React, { useState } from 'react';
import List from './List'
function mainApp() {
 
    const handleSubmit = (event) => {
         event.preventDefault();
         console.log(event.target.elements.search.value) // from elements property
        
        
        }

  return (
      <div className="centerDiv">  
          <h3> Test Technique</h3>
    <form onSubmit={handleSubmit} className="rowSection">
    <input   name="search" />
    <button type="submit" className="customeButton"> 
       Submit
    </button>

    </form>
    <div className="rowSection">  
<List/>
<List/>
<List/>
<List/>
<List/>
<List/>
<List/>
<List/>
<List/>

</div> 
    </div>
   );
}

export default mainApp;
