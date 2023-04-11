import React, { Component } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(()=>({
                isLoaded: true,
                posts: savedPosts
            }))
        }, 2000);
    }

    searchPosts = (event) => {
        const postName = event.target.value.toLowerCase()
        this.setState(()=>({
            posts: savedPosts.filter((post) => post.name.toLowerCase().includes(postName))
        }))
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <lablel htmlFor='search'>Search:</lablel>
                        <input 
                        name='searchInput' 
                        id='searchInput'
                        onChange={(event) => this.searchPosts(event)} />
                    </form>
                    <h4>posts found: {this.state.posts.length}</h4>
                </div>
                <div className={css.SearchResults}>
                    {
                    this.state.isLoaded? 
                    <PostItem posts={this.state.posts} />: 
                    <Loader/>
                    }
                </div>
                
            </div>
        )
    }
}

export default Content