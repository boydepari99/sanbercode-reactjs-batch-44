import React from "react";
import { Table } from 'flowbite-react';
import '../style.css'
import { Button } from "flowbite-react";

const Tugas9 = () => {
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
                
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        1
                    </Table.Cell>
                    <Table.Cell>
                        John
                    </Table.Cell>
                    <Table.Cell>
                        Algoritma
                    </Table.Cell>
                    <Table.Cell>
                        80
                    </Table.Cell>
                    <Table.Cell>
                        A
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                <Button href="/Tables">
                                Edit
                                </Button>
                            </div>
                            <div>
                                <Button href="/Tables" color="failure">
                                Delete
                                </Button>
                            </div>
                        </div>
                    </Table.Cell>
                    </Table.Row>
                    
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        2
                    </Table.Cell>
                    <Table.Cell>
                        Doe
                    </Table.Cell>
                    <Table.Cell>
                        Matematika
                    </Table.Cell>
                    <Table.Cell>
                        70
                    </Table.Cell>
                    <Table.Cell>
                        B
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                <Button href="/Tables">
                                Edit
                                </Button>
                            </div>
                            <div>
                                <Button href="/Tables" color="failure">
                                Delete
                                </Button>
                            </div>
                        </div>
                    </Table.Cell>
                    </Table.Row>
                    
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        3
                    </Table.Cell>
                    <Table.Cell>
                        Frank
                    </Table.Cell>
                    <Table.Cell>
                        Kalkulus
                    </Table.Cell>
                    <Table.Cell>
                        60
                    </Table.Cell>
                    <Table.Cell>
                        C
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                <Button href="/Tables">
                                Edit
                                </Button>
                            </div>
                            <div>
                                <Button href="/Tables" color="failure">
                                Delete
                                </Button>
                            </div>
                        </div>
                    </Table.Cell>
                    </Table.Row>
                    
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        4
                    </Table.Cell>
                    <Table.Cell>
                        Jason
                    </Table.Cell>
                    <Table.Cell>
                        Basis data
                    </Table.Cell>
                    <Table.Cell>
                        90
                    </Table.Cell>
                    <Table.Cell>
                        A
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                <Button href="/Tables">
                                Edit
                                </Button>
                            </div>
                            <div>
                                <Button href="/Tables" color="failure">
                                Delete
                                </Button>
                            </div>
                        </div>
                    </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default Tugas9;