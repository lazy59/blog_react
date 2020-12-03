import React from 'react'
import { CardContainer } from './style';
import { formatTime } from '../../../utils/tools';
import { baseUrl } from '../../../utils/config';

export default props => {
    const { title, authorId, time, desc, category, _id } = props.article.toJS();
    return (
        <CardContainer>
            <h3>
                <span className="title">{title}</span>
                <span className="category">{category}</span>
            </h3>
            <div className="desc">
                {desc}
            </div>
            <div className="authorInfo">
                <div className="author">
                    <i className="avatar" style={{backgroundImage: `url(${baseUrl + authorId.avatar})`}}></i>
                    <span className="name">{authorId.name}</span> | 
                    <div className="time">{formatTime(time, 'Y/M/D')}</div>
                </div>
                <div className="readmore" onClick={() => {props.readmore(_id)}}>阅读更多</div>
            </div>
        </CardContainer>
    )
}