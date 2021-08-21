
import React, { useEffect, useState } from 'react';
import List from './List'
import { GET_LIST } from './Apollo/queries'
import { AddList } from './Apollo/mutation'

import {
    useMutation,
    useQuery,
} from "@apollo/client";

function MainApp() {
    const { loading, error, data: listArray } = useQuery(GET_LIST);
    const [listState, setListeState] = useState({ getList: [] });
    const [titre, setTitre] = useState("");


    useEffect(() => {

        if (!loading && listArray && listArray)
            setListeState(listArray)
    }, [listArray]);

    const [addList] = useMutation(AddList, {
        update(cache, { data: { addList } }) {
            try {
                const oldData = JSON.parse(JSON.stringify(cache.readQuery({
                    query: GET_LIST,
                })
                ))

                oldData.getList.push(addList)
                setListeState(oldData)
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
        if (titre === "") setListeState(listArray)
        else {
            let Search = listArray.getList.filter(list => list.titre === titre)
            if (Search.length > 0) {
                setListeState({ getList: Search })
            }
            else
                await addList({
                    variables: {
                        input: {
                            titre
                        }
                    }
                })

        }

   setTitre("")

    }
     const onChange=(e)=>setTitre(e.target.value)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { getList } = listState
    return (
        <div className="centerDiv">
            <h3> Test Technique</h3>
            <form onSubmit={handleSubmit} className="rowSection">
                <input htmlFor="search"  value={titre} name="search" onChange={onChange} />
                <button type="submit" className="customeButton">
                    Submit
                </button>

            </form>
            <div className="rowSection">
                {getList.map(listData =>
                    <List key={listData._id} data={listData} />

                )}


            </div>
        </div>
    );
}

export default MainApp;
