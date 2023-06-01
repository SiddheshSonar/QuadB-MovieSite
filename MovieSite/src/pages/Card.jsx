import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function FilmCard({ film }) {
  return (
    <Card className="film-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        className='film-img'
        component="img"
        alt={film.show.name}
        image={film.show.image.medium}
      />
      <CardContent className='card-bottom'>
        <p className='show-name'>
          {film.show.name}
        </p>
        <button className='btn film-btn'><InfoOutlinedIcon className='info-icon'/>More Info</button>
      </CardContent>
    </Card>
  );
}

export default FilmCard;