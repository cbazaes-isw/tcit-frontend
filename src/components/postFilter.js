import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { filterPost } from '../features/postsSlice'

const PostFilter = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    
    const queryPosts = (query) => {

        console.log('Intentando filtrar', query)

        dispatch(filterPost(query))

    }

    const onChangeHandle = (e) => setQuery(e.target.value)

    return <div>
        <input
            type="text"
            name="query"
            id="query"
            onChange={onChangeHandle}
            value={query}
        />
        <button onClick={() => queryPosts(query)}>
            Buscar
        </button>
    </div>
};

export default PostFilter;