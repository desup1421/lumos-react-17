import axios  from 'axios';

axios.get('https://lumoshive-academy-media-api.vercel.app/api/games?page=5&search')
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})