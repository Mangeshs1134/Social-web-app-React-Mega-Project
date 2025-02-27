import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

const Home = () => {
    const [posts, setPosts] = useState([])
       useEffect(()=>{
           appwriteService.getPosts([]).then((posts)=> {
               if (posts) {
                   console.log(posts);
                   
                   setPosts(posts.documents)
               }})
       },[])
  if (posts.length===0){
    return (
        <div className='w-full py-8 mt-4 text-center'>
                <Container>
                Login to read posts
        </Container>
            </div>
    )
  }
  return(    
    <div className='w-full py-8'>
        mangesh
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        {/* {post} */}
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )

}

export default Home