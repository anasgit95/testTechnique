
import Element from './Element'
import {
  useMutation,
} from "@apollo/client";
import { AddElement } from './Apollo/mutation'
import { GET_LIST } from './Apollo/queries'

function List({ data }) {

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
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: 50, margin: 5, height: 200, overflowY: "scroll" }}>

      <h3 > {data.titre}  </h3>
      {data.elements.map(elementData =>
        <Element key={elementData._id} data={elementData} idList={data._id} />


      )}


      <input name="element" required />
    </form>


  );
}

export default List;
