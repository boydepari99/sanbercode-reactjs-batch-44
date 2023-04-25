import '../style.css';
import React from 'react';

const Nama = (props) => {
    return <div>Nama Lengkap : {props.name}</div>
}
  
const Email = (props) => {
    return <div>Email : {props.name}</div>
}
  
const Batch = (props) => {
    return <div>Batch Pelatihan : {props.name}</div>
}
 
const Tugas7 = () => {
    return(
        <div className='container'>
            <div className='container__article-list'>
            <h1>Data diri peserta kelas Reactjs</h1>
        </div>
        <div className='article'>
          <Nama name="Boy Aribana Depari"/>
          <Email name="boyadepari@gmail.com"/>
          <Batch name="44"/>
        </div>
      </div>
    )
}

export default Tugas7;