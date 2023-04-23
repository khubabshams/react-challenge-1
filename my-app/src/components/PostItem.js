import React from 'react'
import PropTypes from 'prop-types'

function PostItem(props) {
    return props.posts.map(post => {
        const { id, type, user, webformatURL, tags } = post
        return (
            <div className='css.SearchItem' key={id}>
                <p>Artwork Type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} />
                <p>Tags: {tags}</p>
            </div>
        )
    })

}

export default PostItem
