import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { changeFocus, search, changeSearchShow, changeSearchText } from '../../../store/articles/actions';

class Head extends Component {
    cancel() {
        this.props.changeSearchText('')
        this.props.changeSearchShow(false)
        this.props.changeFocus(false)
    }

    blur() {
        // this.props.changeFocus(false)
        if(!this.props.searchText) {
            this.props.changeSearchShow(false)
        }
    }

    render() {
        return (
            <SearchBar 
                style={{position:'fixed', zIndex: 1000,top:0, left:0, width: '100%', boxSizing: 'border-box'}} 
                placeholder="搜索文章"
                value={this.props.searchText}
                onChange={ value => this.props.changeSearchText(value)}
                onFocus={ () => {this.props.changeFocus(true)}}
                onBlur={ () => {this.blur()}}
                onSubmit={ value => {this.props.search(value).then(() => this.props.changeFocus(false))}}
                onCancel={ () => this.cancel() }
                maxLength={8} />
        )
    }
}

const mapStateToProps = (state) => ({
    focus: state.articles.get('searchFocus'),
    searchText: state.articles.get('searchText')
})

const mapDispatchToProps = dispatch => {
    return {
        changeFocus(flag) {
            dispatch(changeFocus(flag))
        },
        search(value) {
            return dispatch(search(value))
        },
        changeSearchShow(flag) {
            dispatch(changeSearchShow(flag))
        },
        changeSearchText(value) {
            dispatch(changeSearchText(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)