import { useContext } from 'react';
import { MovieContext } from '../context/MovieProvide';
import PropType from 'prop-types';

const MovieSearch = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext);
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text=3xl font-bold mb-4">{title}</h2>
            <div className='grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
                {data && data.map((item) => (
                    <div key={item.id} className="w-[200px] h-[300px] relative group"
                        onClick={() => handleTrailer(item.id)}
                    >
                        <div className="w-full h-full group-hover:scale-105 transition-transform 
                         duration-500 ease-in-out cursor-pointer">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                                alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute text-center bottom-4 left-2 right-2">
                                <p className="uppercase text-md">{item.title || item.original_title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    title: PropType.string,
    data: PropType.array
}

export default MovieSearch;