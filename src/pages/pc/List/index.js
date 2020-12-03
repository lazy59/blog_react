import React from 'react'
import Card from '../Card'
import { ListContainer } from '../style'

export default props => {
    // console.log('list:', props.articles.toJS())
    const articles = props.articles
    return (
        <ListContainer>
            {
                articles.map( (article, index) => 
                    (
                        <Card article={article} key={index} readmore={props.readmore}></Card>
                    )
                )
            }
        </ListContainer>
    )
}