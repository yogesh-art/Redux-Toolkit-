import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';

function Songs(){

  const dispatch = useDispatch();

  const handleClick = ()=>{
    const randomSong = faker.music.songName();
    console.log(randomSong);
    dispatch({type:'data/addSong',payload:randomSong});
  }

  return(
    <div>
      <button onClick={handleClick}>Click me to generate song</button>
    </div>
  )
}

export default Songs;