import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'flowbite-react';

const Tugas11 = () => {
    
    //Indikator fetch
    const [data, setData] = useState(null)

    const [input, setInput] = useState(
        {
            name : "",
            course : "",
            score : ""
        }
    )

    const [fetchStatus, setFetchStatus] = useState(true)

    const [currentId, setCurrentId] = useState(-1)


    //useEffect
    useEffect (() => {
        if(fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res) => {
                let data = res.data
                console.log(data)
                let resultData = data.map((e) => {
                let {
                    course,
                    id,
                    name,
                    score,
                } = e
                
                return{
                    course,
                    id,
                    name,
                    score,
                }
                })

                setData([...resultData])
            })
            .catch((err) => {

            })

            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    //Handle Index Score
    const handleIndexScore = (param) => {

        if(param >= 80){
            return("A")
          }else if(param >=70 && param < 80){
            return("B")
          }else if(param >=60 && param < 70){
            return("C")
          }else if(param >=50 && param < 60){
            return("D")
          }else{
           return("E")
          }
    }

    //Handle Input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name"){
            setInput( {...input, name : value } )
        }else if(name === "course"){
            setInput( {...input, course : value } )
        }else if(name === "score"){
            setInput( {...input, score : value } )
        }
    }

    //Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            course,
            score
        } = input

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
                setFetchStatus(true)
            })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => setFetchStatus(true))
        }
        
        setCurrentId(-1)

        setInput(
            {
                name : "",
                course : "",
                score : ""
            }
        )
    }

    //Handle Delete
    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
           let result = res.data

           setInput(
                {
                    name : result.name,
                    course : result.course,
                    score : result.score
                }
           )

           setCurrentId(result.id)


        })
    }

    //Content
    return(
        <div className="container">
            <Table>
                <Table.Head className="bg-black">
                    <Table.HeadCell>
                    NO
                    </Table.HeadCell>
                    <Table.HeadCell>
                    NAMA
                    </Table.HeadCell>
                    <Table.HeadCell>
                    MATA KULIAH
                    </Table.HeadCell>
                    <Table.HeadCell>
                    NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                    INDEX NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                    ACTION
                    <span className="sr-only">
                        Edit
                    </span>
                    <span className="sr-only">
                        Delete
                    </span>
                    </Table.HeadCell>
                </Table.Head>
                
                {data !== null && data.map((res, index) => {
                    return(
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell>
                                {res.name}
                            </Table.Cell>
                            <Table.Cell>
                                {res.course}
                            </Table.Cell>
                            <Table.Cell>
                                {res.score}
                            </Table.Cell>
                            <Table.Cell>
                                {handleIndexScore(res.score)}
                            </Table.Cell>
                            <Table.Cell>
                                <div>
                                    <button type="button" onClick={handleEdit} value={res.id} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                                        Edit
                                    </button>
                                    <button type="button" onClick={handleDelete} value={res.id} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        Delete
                                    </button>
                                </div>
                    </Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    )
                })}               
            </Table>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input type="text" name="name" value={input.name} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
                    <input type="text" name="course" value={input.course} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai</label>
                    <input type="text" name="score" value={input.score} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Tugas11;