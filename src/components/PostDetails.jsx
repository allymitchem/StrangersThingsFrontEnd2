import react, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { updatePost, deletePost } from "../api-adapter";


const PostDetails = (props) => {
  const { id } = useParams()
  const post = props.filterPosts(id)[0]
  console.log(post)
    // const [formDetails, setFormDetails] = useState({
    //     title: '',
    //     description: '',
    //     price: '',
    //     location: '',
    //     willDeliver: false
    // })
    // useEffect(()=>{
    //     setFormDetails(
    //         {
    //             title: post.title,
    //             description: post.description,
    //             price: post.price,
    //             location: post.location,
    //         })
    // },[])
    // function handleChange(event){
    //     event.preventDefault()
    //     const toUpdate = event.target.id
    //     const update = event.target.value
    //     const updatedForm = {...formDetails, [toUpdate]: update}
    //     setFormDetails(updatedForm)
    // }
    // async function handleDelete(event){
    //     event.preventDefault()
    //     const toDelete = event.target.id
    //     const token = localStorage.getItem('token')
    //     const deleted = await deletePost(toDelete, token)
    //     console.log (deleted)
    // }
    return (
        // <h2>I am working</h2>
        <>
        { post ? ( <>
        <div className='box'>
            <div><b>{post.title}</b></div>
        <div>{post.description}</div>
              <div>
                <b>Price: </b>
                {post.price}
              </div>
              <div>
                <b>Location: </b>
                {post.location}
              </div>
              <div>
                {post.willDeliver ? (
                  <b>Will Deliver</b>
                ) : (
                  <b>Will Not Deliver</b>
                )}
                </div>
            
                <NavLink to={"/posts"}>
                    <button>Go Back</button>
                </NavLink>
                {/* <div>
                    <button id={post._id ? `${post._id}` : null} onClick = {(event)=> {handleDelete(event)}}>Delete Post</button>
                </div> */}
        
        </div>
        </> 
        ) : (
            <div>Loading post details...</div>

        )}
        </>

    )
    
}


export default PostDetails
