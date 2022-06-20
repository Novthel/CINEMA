
const URL= process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN


export async function get(path){
    const result = await fetch(URL + path, {
        headers: {
            Authorization: 'Bearer ' + TOKEN,
            'Content-Type': "application/json;charset=utf-8",
        }
    });
    return await result.json();

}