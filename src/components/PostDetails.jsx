import react, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { updatePost, deletePost } from "../api-adapter";


const PostDetails = (props) => {
  const { id } = useParams()
  const post = props.filterPosts(id)[0]
    const [formDetails, setFormDetails] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        willDeliver: false,
    })
    useEffect(()=>{
        setFormDetails(
            {
                title: post.title,
                description: post.description,
                price: post.price,
                location: post.location,
            })
    },[])
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
        // console.log (deleted)
    // }
    // return (

    // )
    
}


export default PostDetails
