import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'
const AllPost = () => {
    console.log('allpost');
    

    const [posts, setPosts] = useState([])
       useEffect(()=>{
           appwriteService.getPosts([]).then((posts)=> {
               if (posts) {
                   console.log(posts);
                   
                   setPosts(posts.documents)
               }})
       },[])
      

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                   {/* {post} */}
                    <PostCard {...post}  />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost