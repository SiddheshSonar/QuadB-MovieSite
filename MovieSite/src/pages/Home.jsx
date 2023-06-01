import { React, useState, useEffect } from 'react';
import NavB from '../navbar/NavB';
import "../App.css";
import FilmCard from './Card';

const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const jsonData = await response.json();
            setData(jsonData);
            setIsLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      console.log(data)
      const filmBlocks = data?.map((film) => {
        return <FilmCard film={film}/>
      });

    return (
        <>
            <NavB />
            <div className='movie-section'>
                {filmBlocks}
            </div>
        </>
    );
};

export default Home;