// import { json } from "@sveltejs/kit";

export async function GET({ url }){
    let data = {};
    try{
        const page = url.searchParams.get('page')
        // if ( page ){
        // }
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7f133a015879b4682f0c6b8f01b29da9&language=en-US&page=${page}`)
        data = await res.json()
        // console.log("page: ", page);
        // console.log(data);

    }
    catch(e){
        console.log(e.message);
    }
    finally{
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": 'application/json'
            }
        })
    }
}

