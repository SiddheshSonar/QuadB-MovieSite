import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import App from '../App';

function FilmCard({ film }) {

  const handleClick = () => {
    console.log(film)
    localStorage.setItem('film', JSON.stringify(film));
   window.location.href = `/${film.show.name}`; 
  };

  return (
    <Card onClick={handleClick} className="film-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        className='film-img'
        component="img"
        alt={film.show.name}
        image={film.show.image.original}
      />
      <CardContent className='card-bottom'>
        <p className='show-name'>
          {film.show.name}
        </p>
        <button className='btn film-btn' onClick={handleClick}>
          <InfoOutlinedIcon className='info-icon' />
          More Info
        </button>
      </CardContent>
    </Card>
  );
}

export default FilmCard;
