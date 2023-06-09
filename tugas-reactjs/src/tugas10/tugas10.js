import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'flowbite-react';


const Tugas10 = () => {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(null)

    useEffect (() => {
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

    }, [])

    console.log(data)

    const handleIndexScore = (param) => {
        // var index = res.score

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
                            </Table.Row>

                        </Table.Body>
                    )
                })}               
                
            </Table>
        </div>
    )
}

export default Tugas10;