
 import { DeleteElement } from './Apollo/mutation'
import {
    useMutation,
} from "@apollo/client";
function Element({ data, idList }) {
    const [deleteElement] = useMutation(DeleteElement);
    const deletElementFunction = async () => {
         let input = {
            idList,
            _id: data._id
        }
        await deleteElement({
            variables: {
                input
            }
        })


    }
    const { titre  } = data
    return (
        <div className="rowSection">

            <p > {titre}  </p>

            <p style={{ flex: 1, fontWeight: "bold", cursor: "pointer" }} onClick={deletElementFunction}> Delete  </p>

        </div>


    );
}

export default Element;
