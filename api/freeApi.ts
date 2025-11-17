export const fetchBookData = async({page=1, limit=10,inc='kind%252Cid%252Cetag%252CvolumeInfo',query='tech'}:{page:number,limit:number,inc:string,query:string}) => {
    const baseURL =`https://api.freeapi.app/api/v1/public/books?limit=${limit}&page=${page}&inc=${inc}&q=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await fetch(baseURL, options);
        // console.log("response ==>",response)
        if(response.status === 200){
            const data = await response.json();
            // console.log("data.data ==> ",data.data)
            // console.log("data.data.data ==> ",data.data.data)
            return data.data.data;
        }
        
    } catch (error) {
        console.error("Error fetching book data:", error);
    }
}

