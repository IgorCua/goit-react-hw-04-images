// i did not use helpers in this task
// import axios from "axios";

// export const loadImg = useCallback( async (num) => {
//     // const {input, API_KEY, page, pageLimit} = this.state;
//     const inputVal = input !== '' && `q=${input}`
//     let filteredReq;
//     console.log('loadImg ', page)
//     try{
//         const request = await axios.get(`
//             https://pixabay.com/api/?key=${API_KEY}&page=${num === 1 ? num : page + 1}&per_page=${PAGE_LIMIT}&${inputVal}
//         `);
//         // console.log("request", request.data.total)
//         // console.log(this.state.requestedImgArr.length)
     
//         filteredReq = request.data.hits.map(e => {
//             return {
//                 id: e.id,
//                 webformatURL: e.webformatURL, 
//                 largeImageURL: e.largeImageURL, 
//                 tags: e.tags,
//             }
//         });
//         setTotal(request.data.total);
//     } catch (error) {
//         console.log(error);
//     }
//     return filteredReq;
// }, [page, input])