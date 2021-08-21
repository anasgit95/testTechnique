
import Element from './Element'
import {
  useMutation,
} from "@apollo/client";
import { AddElement } from './Apollo/mutation'
import { GET_LIST } from './Apollo/queries'
import React, {  useState } from 'react';

function List({ data }) {
  const [titre, setTitre] = useState("");

  const [addElement] = useMutation(AddElement, {
    update(cache, { data: { addElement } }) {
      try {

        const oldData = JSON.parse(JSON.stringify(cache.readQuery({
          query: GET_LIST,
        })
        ))

        let index = oldData.getList.findIndex(list => list._id === addElement._id)
        if (index !== -1)
          oldData.getList[index] = addElement
        // oldData.getList.push(addList)
        cache.writeQuery({
          query: GET_LIST,
          data: oldData
        });
      }
      catch (error) {
        console.log(error)

      }
    },
  });
  const onChange=(e)=>setTitre(e.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    let input = {
      idList: data._id,
      element: { titre: event.target.elements.element.value }
    }
    await addElement({
      variables: {
        input
      }
    })
    setTitre("")
    }

  return (
    <form onSubmit={handleSubmit} style={{ width: 50, margin: 5, height: 200, overflowY: "scroll" }}>

      <h3  htmlFor="feFirstName"> {data.titre}  </h3>
      {data.elements.map(elementData =>
        <Element key={elementData._id} data={elementData} idList={data._id} />


      )}


      <input  onChange={onChange}  value={titre}  htmlFor="element" name="element" required  />
    </form>


  );
}

export default List;
