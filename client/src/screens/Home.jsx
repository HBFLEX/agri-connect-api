import { useState, useEffect } from 'react';
import axios from 'axios'
import userLogo from '../assets/user.jpg'
import user2 from '../assets/post-user-1.jpeg'
import user3 from '../assets/post-user-2.jpeg'
import Post from '../components/Post';
import agriLogo from '../assets/agri-logo.png'
import businessLogo from '../assets/businessLogo.png'



const Home = () => {

    const [ posts, setPosts ] = useState([]);
    const [ postsLoading, setPostsLoading ] = useState(false)
    const [ postsFetchErr, setPostsFetchErr ] = useState(false)

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


    return (
        <>
            <div className='row'>
                {/* left side */}
                <div className='col-md-3'>
                    {/* nav links */}
                    <div className='left-container sticky-top'>
                        <div className='left-nav nav-active mt-4 p-2 rounded'>
                            <div className='mx-3'>
                                <i className='nav-link-icon fa fa-home text-info'></i>
                            </div>
                            <div>
                                <a href='#' className='nav-link-text'>Home</a>
                            </div>
                        </div>

                        <div className='left-nav mt-4'>
                            <div className='mx-3'>
                                <i className='nav-link-icon fa fa-user-group text-warning'></i>
                            </div>
                            <div>
                                <a href='#' className='nav-link-text'>Groups</a>
                            </div>
                        </div>

                        <div className='left-nav mt-4'>
                            <div className='mx-3'>
                                <i className='nav-link-icon fa fa-shopping-cart text-danger'></i>
                            </div>
                            <div>
                                <a href='#' className='nav-link-text'>Marketplace</a>
                            </div>
                        </div>

                        <div className='left-nav mt-4'>
                            <div className='mx-3'>
                                <i className='nav-link-icon fa fa-star text-success'></i>
                            </div>
                            <div>
                                <a href='#' className='nav-link-text'>Saved</a>
                            </div>
                        </div>
                        {/* groups */}
                        <h4 className='mt-5 font-bold'>My Groups</h4>

                        <div className='left-nav mt-4'>
                            <img src={agriLogo} width={30} height={30} className='group-profile mx-3' />
                            <div>
                                <a href='#' className='group-link-name'>Alimi World</a>
                            </div>
                        </div>

                        <div className='left-nav mt-4'>
                            <img src={businessLogo} width={30} height={30} className='group-profile mx-3' />
                            <div>
                                <a href='#' className='group-link-name'>Lets do business</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middle */}
                <div className='col-md-6'>
                    <div className='create-post-container bg-white p-4'>
                        <div className='top-part mb-4'>
                            <img src={userLogo} width={58} height={58} className='user-profile' />
                            <input type='text' className='form-control' placeholder='Whats on your mind ?' />
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
                            <div class="spinner-border mt-5 text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div> ||
                        postsFetchErr && <div className='mt-5 text-center'>Error getting posts, check your internet connection or try to refresh the page!</div> ||
                        postsLoading === false && postsFetchErr === false && posts.map((post) => (
                            <Post post={post} key={post.id} />
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
        </>
    )
}


export default Home;