import React, {useState} from "react";
import Controls from "../comps/Controls";
import ItemCart from "../comps/ItemCart";
import axios from "axios";

export default function Home() {
const [img, setImg] = useState(null);
const [desc, setDesc] = useState (null);
const [title, setTitle] = useState(null);

//coomunicate with another server
const HandleClick = async ()=> {
console.log("clicked")

//communicate with the end point
var resp = await axios.get('https://dog.ceo/api/breeds/image/random');

//response comes back as an object
console.log(resp, "img link", resp.data.message, "status", resp.data.status);
setImg(resp.data.message);
}


const HandleGhibliClick= async()=> {
    var par = await axios.get ("https://ghibliapi.herokuapp.com/films");
    console.log (par.data);
}
setTitle(par.data[0].title);
setDesc(par.data[0].descripion);

return <div>
    <Controls onClick={HandleClick}/>
    <Controls onClick={HandleGhibliClick}/>
    <ItemCart imgurl={img} desc={desc} title={title}></ItemCart>
</div>}
