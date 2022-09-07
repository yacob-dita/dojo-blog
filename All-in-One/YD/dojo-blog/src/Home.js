import React, { Component }  from 'react';
import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, Error} = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const [blogs, setBlogs] = useState([
    // {title: 'My new Website,body:"lorem ipsum...',author:"mario",id:1},
    // {title: 'Welcome party!,body:"lorem ipsum...',author:"yoshi",id:2},
    // {title: 'Web dev top tips, body:"lorem ipsum...',author:"chulaka",id:3}
    // ]);

    // const [name,setName] = useState('')

    // const handleDelete =(id) => {
    //   const newBlogs = blogs.filter(blog=>blog.id!==id);
    //   console.log(newBlogs);
    // setBlogs(newBlogs);
    // }
    // useEffect(() => {
    //  console.log('use effect run');
    //  console.log(blogs);
    // console.log(name);
    // setTimeout(()=>{
        // fetch('http://localhost:8000/blogss')
        // .then(res=>{
            // console.log(res);
            // if(!res.ok){
                // throw Error('could not fetch the data for that resource');
            // }
        //    return res.json();
        // }).then(data => {
        //    console.log(data);
        // setBlogs(data);
        // setIsPending(false);
        // setError(data);
        // })
        // catch does error handling in the network
        // .catch((err)=>{
            // setIsPending(false);
            // setError(err.message);
        // })
        // },1000)
        // }, []);
    
   
    // let name = "mario";
    // const [name, setName] = useState('mario');
    // const [age,setAge] = useState(25);
    // const handleClick = () => {
        // console.log('hello,Jacob',e);
        // name= "Luigi";
        // setName('luigi');
        // setAge(45);
        
    // }

    // const handleClickAgain = (name,e) => {
    //    console.log('hello ' + name,e.target);
    // }
     return(
        <nav className="home">
           {/* <h2>HomePage</h2> */}
           {/* <p>{name} is {age} years old</p> */}
           {/* <button onClick={handleClick}>Click me</button> */}
           {/* <br/> */}
           {/* <button onClick={(e)=>{handleClickAgain('mario',e)}}>click me again</button> */}
           <div>
            {/* <BlogList blogs={blogs} title="All Blogs!!" /> */}
            { Error  && <div>{ Error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <button onClick={()=>setName('Luigi')}>Change name</button> */}
            {/* <p>{name}</p> */}
           </div>
        </nav>
    );
};
export default Home;