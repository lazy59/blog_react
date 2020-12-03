import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile';
import { SearchResultTitle, SearchList } from "../style";
import { searchRecord } from '../../../store/articles/actions';

class SearchInfo extends Component {
    removeRecord() {
        console.log('click')
        window.localStorage.removeItem('searchInfos')
        this.forceUpdate();
    }

    removeItem(searchInfos, index) {
        searchInfos.splice(index, 1)
        window.localStorage.setItem('searchInfos', JSON.stringify(searchInfos))
        this.forceUpdate();
    }

    render() {
        let searchInfos = window.localStorage.getItem('searchInfos')
        searchInfos = searchInfos ? JSON.parse(searchInfos) : []
        
        return (
            <div>
                { searchInfos.length ? (
                    <>
                    <SearchResultTitle>
                        <span>历史记录</span>
                        <span className="clear" onClick={this.removeRecord.bind(this)}>清空记录</span>
                    </SearchResultTitle>
                    <SearchList>
                        {searchInfos.map( (item,index) => (
                            <li key={index}>
                                <div className="searchText" onClick={() => this.props.searchRecord(item, index)}><Icon type="search" size="xxs" /><span className="record">{item}</span></div>
                                <div className="cross" onClick={() => this.removeItem(searchInfos, index) }><Icon type="cross" size="md" /></div>
                            </li>
                        ))}
                    </SearchList>
                    </>
                ) : <SearchResultTitle style={{textAlign: 'center'}}>暂无历史记录</SearchResultTitle>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchRecord(item, index) {
            return dispatch(searchRecord(item, index))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchInfo)
