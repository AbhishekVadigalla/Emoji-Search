import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react,{useState,useEffect} from 'react'
import Emojidata from './emoji.json'
function App() {
  const [search,setSearch]=useState('')
  useEffect(()=>{
    console.log(search)
  },[search])
  return (
    <div>
      <h2 className='text-center fs-2 mt-3'>Emoji Search</h2>
      <center><input type="text" className="w-50 form-control mt-5" value={search} onChange={(e)=>setSearch(()=>e.target.value)} ></input></center> 
      {
        Emojidata.filter(data=>data.title.toLowerCase().includes(search)).map(emoji=><li onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert('emoji copied')}} style={{width:'40%'}} className=' border m-3  p-2'>{emoji.symbol} {emoji.title}</li>)
      }
    </div>
  );
}
export default App;
