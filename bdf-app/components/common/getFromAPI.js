export default function getFromAPI(uri,success,error){
    try {
        fetch(uri).then(res => res.json()).then(data => success(data)).catch(err => console.log(err));
    } catch(err) {
        console.log(err)
    }
}
