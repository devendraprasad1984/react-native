export default function getFromAPI(uri,success,error){
    const errMsg=msg=>'something went wrong, check internet connection - '+msg;
    try {
        fetch(uri).then(res => res.json()).then(data => success(data)).catch(err => alert(errMsg(err)));
    } catch(err) {
        alert(errMsg(err));
    }
}
