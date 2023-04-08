import React from 'react'
import PropTypes from 'prop-types'

function PostItem(props) {
    return props.posts.map(post => {
        const { title, name, image, description } = post
        return (
            <div className='css.SearchItem' key={post.title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} />
                <p>{description}</p>
            </div>
        )
    })

}

export default PostItem
