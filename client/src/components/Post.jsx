import React from 'react'


const Post = ({ post }) => {
  return (
    <div className='post-card mt-5 mb-5 bg-white p-3'>
        <div className='top-part'>
            <img src={post.User.profilePic} width={47} height={49} className='user-profile rounded-circle' />
            <div className='user-info'>
                <h5 className='user-fullname mb-0'>{ post.User.firstName + ' ' + post.User.lastName }</h5>
                <small className='posted-time'>{ new Date(post.createdAt).toDateString() }</small>
            </div>
            <div className='post-options'>
                <i className='fa fa-ellipsis-vertical'></i>
            </div>
        </div>
        <p className='post-content mt-3'>
            { post.postContent }
        </p>
        { post.postImage && <img src={post.postImage} width="100%" className='rounded' /> }
        <div className='post-reactions mt-3'>
            <div className='reaction'>
                { post.likes.length > 0  
                    ? <span><i className='icon fa fa-heart mt-3'></i></span> 
                    : <span><i className='icon fa-regular fa-heart mt-3'></i></span>
                }
                <p className='mt-3'>{ post.likes.length }</p>
            </div>

            <div className='reaction comment'>
                { post.comments.length > 0 
                    ? <span><i className='icon fa fa-comment-dots mt-3'></i></span>
                    : <span><i className='icon fa-regular fa-comment-dots mt-3'></i></span>
                }
                <p className='mt-3'>{ post.comments.length }</p>
            </div>
            <form>
                <input type='text' className='post-comment-input form-control' placeholder='Write your comment' />
            </form>
        </div>
        { 
            post.comments.length > 0 &&
            <div>
                <hr/>
                <div className='post-comment rounded'>
                    <img src={post.comments[0].User.profilePic} width={28} height={28} className='user-profile rounded-circle' />
                    <div className='post-comment-content rounded'>
                        <div>
                            <p className='post-comment-fullname mb-0'>{post.comments[0].User.firstName}</p>
                            <p className='p-2'>{post.comments[0].commentContent}</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3 text-center'>
                <a href='#'>View all comments <i className='fa fa-angle-down'></i></a>
                </div>
            </div>
        }
    </div>
  )
}

export default Post