import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../ArticleList'
import { SearchResultTitle } from '../style'

class SearchArticles extends Component {
    render() {
        return (
            <div>
                <SearchResultTitle>搜索到{this.props.total}篇相关文章</SearchResultTitle>
                {ArticleList(this.props.articles, this.props.toDetail)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles.get('searchArticles'),
    total: state.articles.get('searchTotal')
})


export default connect(mapStateToProps, null)(SearchArticles)
