import React,{useState, useEffect} from "react";
import './PostSearch.css'
function PostSearch(props){

    const [value, setValue]=useState('');
    const [result, setResult]= useState([]);

    useEffect(()=>{
        if (value.length>0){
            fetchPosts.then(
                response => response.json()
            ).then(responseData => {
                let searchQuery=value.toLowerCase();
                for (const key in responseData){
                    let posts=responseData[key].name.toLowerCase();
                    if(posts.slice(0, searchQuery.length).indexOf(searchQuery)!==-1){
                        setResult(preventResult=>{
                            return [...preventResult, responseData[key].name ]
                        });
                    }
                }
            }).catch(error=>{
                console.log(error);
            })
        }else{
            setResult([])
        }
    },[value])

    return(
        <div className="SearchBar">
            <p className="titleText">Search Posts: </p>
            <span className="Search">
            <input type="text"
            className="searchBar"
            onChange={(event)=>setValue(event.target.value)}
            value={value}
            />
            <button type="submit">Submit</button>
            </span>
            <div className="searchBack">
                {result.map((result, index)=>(
                    <a href="#" key={index}>
                        <div className="searchEntry">
                            {result}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default PostSearch;