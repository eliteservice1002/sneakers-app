import React from 'react';
import { routesMap } from '~/routes';
import {observer, inject} from 'mobx-react';

import "./style.less"


@inject('stores') @observer class newsBlock extends React.Component {
    render(){

        const {idOfNews} = this.props;
        
        let  newsPathInStore = this.props.stores.news.newsItems;

        let pathOfNews = "/dist/imgs/imgsForNews/"; 

        let news = newsPathInStore.map( (news,id) =>{

            if(id == 0){
                return(
                    <div  className="col-8 block">
                        <img src={pathOfNews+news.srcOfImg} alt=""/>
                        <div className="title_block_of_news">
                            <div className="content_of_title">{news.title}</div>
                    </div>
                </div>
                );
            }else{
                return(
                    <div  className="col-4 block">
                            <img src={pathOfNews+news.srcOfImg} alt=""/>
                            <div className="title_block_of_news">
                                <div className="content_of_title">{news.title}</div>
                            </div>
                    </div>
                    );
            }
            
        })

        return(
            <div className="container blocks_of_news">
                <div  className="col-4 block">
                            <img src={} alt=""/>
                            <div className="title_block_of_news">
                                <div className="content_of_title">{news.title}</div>
                            </div>
                    </div>
            </div>
        );
    }
}


export default newsBlock;