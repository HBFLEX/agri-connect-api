import { useState, useEffect } from 'react'
import getCookie from '../hooks/getCookie'
import setCookie from '../hooks/setCookie'
import axios from 'axios'
import user2 from '../assets/post-user-1.jpeg'
import user3 from '../assets/post-user-2.jpeg'
import Post from '../components/Post';
import Navbar from '../components/Navbar'
import SideNavBar from '../components/SideNavBar';




const Home = () => {

    const [ posts, setPosts ] = useState([]);
    const [ postsLoading, setPostsLoading ] = useState(false)
    const [ postsFetchErr, setPostsFetchErr ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(JSON.parse(getCookie('currentUser')));


    const [ newPost, setNewPost ] = useState('');

    useEffect(() => {
        const getAllPosts = async () => {
            try{
                setPostsLoading(true)
                const posts = await axios.get('http://127.0.0.1:8000/api/posts')   
                if(posts.status === 200)
                    setPosts(posts.data.posts)
            }catch(err){
                setPostsFetchErr(true)
            }finally{
                setPostsLoading(false)
            }

        }
        getAllPosts()
    }, [])

    // create new post

    const createNewPostHandle = async (e) => {

        const postInfo = {
            postContent: newPost,
            post_author_id: currentUser.id
        }

        try{
            const request = await axios.post('http://127.0.0.1:8000/api/posts/add', postInfo)
     
            if(request.status === 200){
                setCookie('currentUser', JSON.stringify(request.data.user))
                alert('Post created successfully!')
            }
        }catch(err){
            alert('There was an error creating a post. Try again later!')
        }
    }


    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {/* left side */}
                    <SideNavBar />
                    {/* middle */}
                    <div className='col-md-6'>
                        <div className='create-post-container bg-white p-4'>
                            <div className='top-part mb-4'>
                                <a href='/profile'>
                                    <img src={currentUser.profilePic} width={58} height={58} className='user-profile rounded-circle' />
                                </a>
                                <form onSubmit={createNewPostHandle}>
                                    <input value={newPost} onChange={(e) => setNewPost(e.target.value)} type='text' className='form-control' placeholder='Whats on your mind ?' />
                                </form>
                            </div>
                            <hr />
                            <div className='add-activity-post mt-4 mb-0'>
                                <div className='activity'>
                                    <span><i className='activity-icon fa fa-image'></i></span>
                                    <p>Photo</p>
                                </div>

                                <div className='activity'>
                                    <span><i className='activity-icon fa fa-video'></i></span>
                                    <p>Video</p>
                                </div>

                                <div className='activity'>
                                    <span><i className='activity-icon fa fa-face-laugh'></i></span>
                                    <p>Feeling</p>
                                </div>
                            </div>
                        </div>

                        {/* Posts */}
                        {
                            postsLoading && 
                            <div className='text-center'>
                                <div className="spinner-border mt-5 text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> ||
                            postsFetchErr && <div className='mt-5 text-center'>Error getting posts, check your internet connection or try to refresh the page!</div> ||
                            postsLoading === false && postsFetchErr === false && posts.map((post) => (
                                <Post post={post} commentAuthor={currentUser} key={post.id} />
                            ))
                        }
                    </div>
                    {/* right side */}
                    <div className='col-md-3'>
                        <div className='right-container'>
                            <h4>Must follow</h4>
                            {/* people */}
                            <div className='left-nav mt-4'>
                                <img src={user2} width={30} height={30} className='group-profile mx-3' />
                                <div>
                                    <a href='#' className='group-link-name'>John Kayange</a>
                                    <div>
                                        <button className='follow-user-btn btn-sm btn-info'>Follow</button>
                                    </div>
                                </div>
                            </div>

                            <div className='left-nav mt-4'>
                                <img src={user3} width={30} height={30} className='group-profile mx-3' />
                                <div>
                                    <a href='#' className='group-link-name'>Lucy Matimati</a>
                                    <div>
                                        <button className='follow-user-btn btn-sm btn-info'>Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='chatbot-btn'>
                    <button className='chatbot-btn-open btn btn-warning p-2'>
                        <i className='fa fa-robot'></i> Open Chatbot
                    </button>
                </div>
            </div>
        </>
    )
}


export default Home;