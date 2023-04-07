// i did not use helpers in this task
// import axios from "axios";

// const fetchImages = async searchQuery => {
//     let filteredReq;
    
//     try{
//         const request = axios.get(`
//             https://pixabay.com/api/${searchQuery}
//         `);
//         // ?key=${this.state.API_KEY}&page=${this.state.page}&per_page=${this.state.pageLimit}
//       //     &${input !== '' && `q=${this.state.input}`}
//         // console.log(request.data.hits)
//         filteredReq = request.data.hits.map(e => {
//             return {
//                 id: e.id,
//                 webformatURL: e.webformatURL, 
//                 largeImageURL: e.largeImageURL, 
//                 tags: e.tags
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
//     return filteredReq;
// }