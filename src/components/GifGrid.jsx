import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';

import {GifGridItem} from './GifGridItem';
// import {getGifs} from '../helpers/GetGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images,loading} = useFetchGifs(category);


    return (
        <>
        <h3>{category}</h3>
        {loading? <p>Loading</p>:null}
        <div className="card-grid">
            {
                    images.map((img)=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }

        </div>
        </>
        
    )
}
