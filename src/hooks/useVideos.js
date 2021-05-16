import { useEffect, useState } from 'react';

import youtube from '../Apis/Youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {

        const results = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(results.data.items);
    };

    return [videos, search];
}

export default useVideos;