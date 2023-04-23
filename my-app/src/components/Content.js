import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secret.js'

export default function Content() {
    const [posts, filterPosts] = useState([])
    const [savedPosts, filterSavedPosts] = useState([])
    const [searchTerm, updateSearchTerm] = useState("")
    const [isLoaded, updateIsLoaded] = useState(false)

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        updateIsLoaded(true)
        filterPosts(fetchedPosts)
        filterSavedPosts(fetchedPosts)
    }

    useEffect(() => {
        fetchImages();
    }, []);

    const searchPosts = (event) => {
        const name = event.target.value.toLowerCase()
        const searchedPosts = savedPosts.filter((post) => post.user.toLowerCase().includes(name))
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
