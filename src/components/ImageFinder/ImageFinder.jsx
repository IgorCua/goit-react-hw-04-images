import axios from "axios";
import { PureComponent } from "react";
import { Searchbar } from "./searchbar/Searchbar.jsx";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { ImageGalleryItem } from "./imageGalleryItem/ImageGalleryItem.jsx";
import { Button } from "./button/Button.jsx";
// import { Audio } from  'react-loader-spinner';

export class ImageFinder extends PureComponent{
    state = {
        API_KEY: "34265158-b3e7c04db650eceaa44e6318e",
        page: 0,
        pageLimit: 12,
        requestedImgArr: [],
        input: '',
        total: 0
    }

    async componentDidMount(){
        // const imgArr = await this.loadImg();
        // console.log(imgArr);
        // console.log("didMount");
        // this.setState({requestedImgArr: imgArr});
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return document.body.clientHeight;
    }

    async componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.requestedImgArr !== this.state.requestedImgArr){
            window.scrollTo({
                top: snapshot,
                behavior: "smooth"
            })
        }
        if (prevState.input !== this.state.input) {
            // console.log("didUpdate")

            this.loadImg(1).then(req => {
                // console.log('req',req)
                this.setState({page: 1, requestedImgArr: req})
            })
        }
    }
    
    loadMore = async () => {
        await this.setState(prevState => {
            return {page: prevState.page + 1}
        })
        // console.log("loadMore2", this.state)

        this.loadImg().then(req => {
            this.setState({requestedImgArr: [...this.state.requestedImgArr, ...req]})
        })
    }
    
    async loadImg(num){
        const {input, API_KEY, page, pageLimit} = this.state;
        const inputVal = input !== '' && `q=${input}`
        let filteredReq;

        try{
            const request = await axios.get(`
                https://pixabay.com/api/?key=${API_KEY}&page=${num === 1 ? num : page}&per_page=${pageLimit}
                &${inputVal}
            `);
            // console.log("request", request.data.total)
            // console.log(this.state.requestedImgArr.length)
            
            filteredReq = request.data.hits.map(e => {
                return {
                    id: e.id,
                    webformatURL: e.webformatURL, 
                    largeImageURL: e.largeImageURL, 
                    tags: e.tags,
                }
            });

            this.setState({total: request.data.total});

        } catch (error) {
            console.log(error);
        }
        return filteredReq;
    }

    formHandler = (evt) => {
        evt.preventDefault();
        // console.log(evt.target[1].value);

        this.setState({input: evt.target[1].value})
    }

    render(){
        // console.log("render", this.state)
        // console.log(this.state.requestedImgArr)
        return (
            <>
                <Searchbar input={this.state.input} formHandler={this.formHandler}></Searchbar>
                <ImageGallery>
                    <ImageGalleryItem requestedImgArr={this.state.requestedImgArr}/>
                </ImageGallery>
                <Button 
                    loadMore={this.loadMore}
                    total = {this.state.total}
                    reqImgArrLength={this.state.requestedImgArr.length} 
                />
            </>
        )
    }
}