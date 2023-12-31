import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { filterPost } from '../features/postsSlice'

const PostFilter = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    
    const queryPosts = (query) => {

        // Dispacth query instruction.
        dispatch(filterPost(query))

    }

    const onChangeHandle = (e) => setQuery(e.target.value)

    return <div>
        <input
            type="text"
            name="query"
            id="query"
            placeholder='Filtro de nombre'
            onChange={onChangeHandle}
            value={query}
        />
        <button onClick={() => queryPosts(query)}>
            Buscar
        </button>
    </div>
};

export default PostFilter;