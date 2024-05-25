import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const navigate = useNavigate()
    const [data,setData]= useState(
        {
        book_name: "",
        book_price: 0,
        book_description: "",
        book_image: null
    }
)

const InputData = (e)=>{

    console.log(e.target);
    // let {name,value} = e.target
    let name = e.target.name;
    let value = e.target.value;
    let files = e.target.files;
    console.log(name);
    console.log(files);
    console.log(value);
    
    
    let newData = {...data,[name]:files ? files[0]:value}
    setData(newData)
    // console.log(newData);

}
const addEntity = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/addbook', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        navigate('/')

    } catch (error) {
        if (error.response) {
            console.error(`Error Status Code: ${error.response.status}`);
            console.error(error.response.data);
        } else {
            console.error('There was a problem with the axios request:', error.message);
        }
    }
};



const submitBook  = () => {

    console.log('Function submit  is executed');
    console.log(data)
    addEntity()
    
    
};

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Add a New Book</h2>
      <form  >
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="book_name"
            value={data.book_name}
            onChange={InputData}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Book Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="book_price"
            value={data.book_price}
            onChange={InputData}
          
 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Book Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="book_description"
            onChange={InputData}
           
           
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Book Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="book_image"
            onChange={InputData}
         
            required
          />
        </div>
        <button type="button" onClick={submitBook}  className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddBook