import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';

function Vehicles(){

  const dispatch = useDispatch();

  const handleClick = ()=>{
    const randomVehicle = faker.vehicle.bicycle();
    dispatch({type:'data/addVehicle',payload:randomVehicle});
  }

  return(
    <div>
      <button onClick={handleClick}>Click to generate a color</button>
    </div>
  )
}

export default Vehicles;