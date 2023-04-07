import axios from "axios";
import { useState, useRef, useEffect, useCallback } from "react";
import { Searchbar } from "./searchbar/Searchbar.jsx";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { ImageGalleryItem } from "./imageGalleryItem/ImageGalleryItem.jsx";
import { Button } from "./button/Button.jsx";
// import { loadImg } from "./helpers/helpers.js";
// import { Audio } from  'react-loader-spinner';

export const ImageFinder = () => {
    const API_KEY = "34265158-b3e7c04db650eceaa44e6318e";
    const PAGE_LIMIT = 12;
    const [page, setPage] = useState(1);
    // const [pageLimit, setPagelimit] = useState(4);
    const [requestedArr, setRequestedArr] = useState([]);
    const [input, setInput] = useState('');
    const [total, setTotal] = useState(0);
    const reqArrPrevState = usePrevState(requestedArr);
    const inputPrevState = usePrevState(input);
    // const pagePrevState = usePrevState(page);
    const snapshot = usePrevState(document.body.clientHeight)

    function usePrevState(val){
        const ref = useRef();

        useEffect(() => {
            ref.current = val;
        }, [val]);

        return ref.current !== undefined ? ref.current : val;
    }

    const loadImg = useCallback( async (num) => {
        const inputVal = input !== '' && `q=${input}`
        let filteredReq;
        try{
            const request = await axios.get(`
                https://pixabay.com/api/?key=${API_KEY}&page=${num === 1 ? num : page + 1}&per_page=${PAGE_LIMIT}&${inputVal}
            `);
            
            filteredReq = request.data.hits.map(e => {
                return {
                    id: e.id,
                    webformatURL: e.webformatURL, 
                    largeImageURL: e.largeImageURL, 
                    tags: e.tags,
                }
            });

            setTotal(request.data.total);

        } catch (error) {
            console.log(error);
        }
        return filteredReq;
    }, [page, input])

    useEffect(()=>{
        if(reqArrPrevState !== requestedArr){
            window.scrollTo({
                top: snapshot,
                behavior: "smooth"
            });
        }
        if (inputPrevState !== input) {
            setPage(1);

            loadImg(1).then(req => {
                setRequestedArr(req);
            });
        }
    }, [input, inputPrevState, reqArrPrevState, requestedArr, snapshot, loadImg])
    
    const loadMore = async () => {
        await setPage(page + 1);

        loadImg().then(req => {
            setRequestedArr([...requestedArr, ...req])
        })
    }

    const formHandler = (evt) => {
        evt.preventDefault();

        setInput(evt.target[1].value)
    }

    
    return (
        <>
            <Searchbar input={input} formHandler={formHandler}></Searchbar>
            <ImageGallery>
                <ImageGalleryItem requestedImgArr={requestedArr}/>
            </ImageGallery>
            <Button 
                loadMore={loadMore}
                total = {total}
                reqImgArrLength={requestedArr.length} 
            />
        </>
    )
}