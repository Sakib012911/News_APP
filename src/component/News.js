import React, {useEffect,useState } from 'react'

import Newsitems from './Newsitems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

// import { useState } from "react";

const News =(props)=> {
const [article,setArticle]=useState([]);
const [totalarticles,setTotalarticles]=useState(0);
const [loading,setLoading]=useState(true);
const [page,setPage]=useState(1);


 

  // constructor(){
  //   super();
  //   console.log("i am a constructor");
  //   this.state={
  //     article:[],
  //     page:1,
  //     totalarticles:0,
  //     loading:true
  //   }
  // }

  const update=async()=>{
    props.setprogress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data=await fetch(url);
    props.setprogress(50)
    // console.log(data);
     let parsdata=await data.json();
    //  console.log(parsdata)
  
      setArticle(parsdata.articles)
      setTotalarticles(parsdata.totalResults)
      setLoading(false)
    props.setprogress(100)
  }
// First api call=>
useEffect(()=>{
  update();
  // eslint-disable-next-line
},[])
// const componentDidMount= async()=>{
//   console.log("i am a component did mount")
// }

// To load next page by hitting and APi
//  const handleNext=async()=>{
//   if(!(page > Math.ceil(totalarticles/props.pageSize))){
 
//     setPage(page+1);
//     update();
//   console.log(Math.ceil(totalarticles/props.pageSize))
//     console.log(" i am a next function")
//   }
// }

// to load prev page
// handlePrevious=async()=>{
//   this.setState({
//     page:this.state.page-1
//   })
//   this.update();
// }

 const fetchMoreData = async() => {
   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
   // this.setState({loading:true})
   setPage(page+1)
  let data=await fetch(url);
  // console.log(data);
   let parsdata=await data.json();
  //  console.log(parsdata)
  setArticle(article.concat(parsdata.articles))
    setTotalarticles(parsdata.totalResults)
    // loading:false
};
// main  function calling
  
    return (
      <>
          <h1 className='text-center' style={{margin:"75px 0px"}}>{(props.category!=="General")?props.category:" "} News</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalarticles}
          loader={<Spinner/>}
        >
         
        <div className='container my-4'>
          <div className="row ">
          {article.map((element)=>{
            
              return <div className="col-md-3"  key={element.url}>
              <Newsitems title={element.title?element.title:"........."}
               description={element.description?element.description:"Latest NEWS"} url={element.urlToImage?element.urlToImage:"https://assets.thehansindia.com/h-upload/2021/07/14/1088455-tech.webp"} newsurl={element.url} author={element.author?element.author:"UnKnown"} date={element.publishedAt}/>
            </div>
          
        })}  
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-info" onClick={this.handlePrevious}> &#8592; Preview</button>
        <button type="button" className="btn btn-info" disabled={this.state.page>=Math.ceil(this.state.totalarticles/props.pageSize)}  onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
        </>
    )
  
}

// News.defaultProps={
//   country:"us",
//   category:"general",
//   pageSize:4,

// }

//  News.propTypes={
//   country:PropTypes.string,
//   category:PropTypes.string
// }


export default News;

