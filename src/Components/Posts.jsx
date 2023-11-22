import React from 'react'
import './MainSection.css'
import {BsDot} from "react-icons/bs"
import {TiThumbsUp} from "react-icons/ti"
import JsonData from '../Data.json';
function Posts() {
    const arr = JsonData[0];
    return (
    <div className="posts-section">
        <div className="postNumber">
            <p>{arr.PostNumber} Posts</p>
        </div>
        <div className='PostLine'>
            <hr style={{position:"relative",left:"150px",width:"calc(100%-150px)"}}/>
        </div>
        {
            arr.Posts.map(Post =>{  
                return (
                    <div className="posts" key={Post.id}>
                    <div className="title">
                    <h1>{Post.Title}</h1>
                    <TiThumbsUp className='TiThumbsUp'/>
                </div>
                <div className="content">
                    {Post.Content.substring(0,150) + '...'}
                </div>
                <div className="details">
                    <p><span>{Post.Type}</span> by {Post.Author}</p>
                    <p>{Post.Date}<BsDot/> {Post.TimeToRead} Read <BsDot/> {Post.Views} views</p>
                </div>
                <hr className='postLine'/>
                </div>
                )
            })
        }
        {/* <hr className='line'/>
        <div className="posts">
            <div className="title">
                <h1>A Changing World Over</h1>
                <TiThumbsUp className='TiThumbsUp'/>
            </div>
            <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa tempora, saepe excepturi repudiandae sapiente id libero accusamus culpa!
            </div>
            <div className="details">
                <p><span>musing</span> by anujgosalia</p>
                <p>August 2 <BsDot/> 2 mins Read <BsDot/> 102 views</p>
            </div>
            <hr className='postLine'/>
        </div>
        <div className="posts">
            <div className="title">
                <h1>A Changing World Over</h1>
                <TiThumbsUp className='TiThumbsUp'/>
            </div>
            <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa tempora, saepe excepturi repudiandae sapiente id libero accusamus culpa!
            </div>
            <div className="details">
                <p><span>musing</span> by anujgosalia</p>
                <p>August 2 <BsDot/> 2 mins Read <BsDot/> 102 views</p>
            </div>
            <hr className='postLine'/>
        </div>
        <div className="posts">
            <div className="title">
                <h1>A Changing World Over</h1>
                <TiThumbsUp className='TiThumbsUp'/>
            </div>
            <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa tempora, saepe excepturi repudiandae sapiente id libero accusamus culpa!
            </div>
            <div className="details">
                <p><span>musing</span> by anujgosalia</p>
                <p>August 2 <BsDot/> 2 mins Read <BsDot/> 102 views</p>
            </div>
        </div> */}
      </div>
  )
}

export default Posts
