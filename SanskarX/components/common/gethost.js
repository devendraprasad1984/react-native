export const getHost=()=>{
    let ip='192.168.1.3:8080';
    // let ip='192.168.225.84:8080';
    //let ip='192.168.1.11:181';
    // let ip='192.168.29.102:8083';
    return 'http://' + ip + '/';
}

export default getHost;
