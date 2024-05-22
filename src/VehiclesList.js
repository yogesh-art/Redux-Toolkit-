import { useDispatch, useSelector } from "react-redux";

function VehiclesList(){

  const dispatch = useDispatch();

  const vehicles = useSelector((state)=>{
    return state.data.vehicles;
  })

  const handleDelete =(index)=>{
    dispatch({type:'data/removeVehicle',payload:index});
  }

  return(
    <div>
      {
        vehicles.map((ele,index)=>{
          return(
            <div key={index}>
              {ele}
              <span onClick={()=>handleDelete(index)}>X</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default VehiclesList;