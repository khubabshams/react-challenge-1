import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export default function Content() {
    const [posts, filterPosts] = useState(savedPosts)
    const [searchTerm, updateSearchTerm] = useState("")
    const [isLoaded, updateIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            updateIsLoaded(true)
        }, 1000)
    });

    const searchPosts = (event) => {
        const postName = event.target.value.toLowerCase()
        const searchedPosts = savedPosts.filter((post) => post.name.toLowerCase().includes(postName))
        return filterPosts(searchedPosts)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        updateSearchTerm(`Search Results for: ${event.target.searchInput.value}`)
        console.log(event.target.searchInput.value)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                {searchTerm ? <p>{searchTerm}</p> : ''}
                <form onSubmit={submitSearch}>
                    <label htmlFor='search'>Search:</label>
                    <input
                        name='searchInput'
                        id='searchInput'
                        onChange={searchPosts} />
                </form>
                <h4>posts found: {posts.length}</h4>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                        <PostItem posts={posts} /> :
                        <Loader />
                }
            </div>

        </div>
    )
}
