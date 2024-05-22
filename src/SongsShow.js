import { useDispatch, useSelector } from "react-redux";

function SongsShow(){

  const dispatch = useDispatch();

  const songs = useSelector((state)=>{
    return state.data.songs;
  })

  const handleDeleteClick = (index)=>{
    dispatch({type:'data/removeSong',payload:index})
  }

  return(
    <div>
      {
        songs.map((ele,index)=>{
          return(
            <div key={index}>
              {ele}
              <span onClick={()=>handleDeleteClick(index)}>X</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default SongsShow;