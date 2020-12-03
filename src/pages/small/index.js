import React, { Component } from 'react'
import Head from './Head'
import { connect } from 'react-redux';
// import axios from '../../utils/http';
import { SmallWrapper } from './style';

import List from './List';
import SearchArticles from './SearchArticles';
import SearchInfo from './SearchInfo'

class Small extends Component {
    toDetail(id) {
        this.props.history.push(`smalldetail/${id}`)
    }

    render() {
        const { focus, showSearchResult } = this.props
        return (
            <div className="small-view">
                <Head></Head>
                <SmallWrapper>
                    {focus ? <SearchInfo></SearchInfo> :(showSearchResult ? <SearchArticles toDetail={this.toDetail.bind(this)} /> : <List toDetail={this.toDetail.bind(this)} />)}
                </SmallWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    focus: state.articles.get('searchFocus'),
    showSearchResult: state.articles.get('showSearchResult')
})

export default connect(mapStateToProps, null)(Small)