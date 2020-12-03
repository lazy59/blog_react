import axios from "../../utils/http";
import { INIT_CATEGORY, INIT_ARTICLES, CHNAGE_FOCUS, SEARCH, CHNAGE_SEARCH_SHOW, SEARCH_RECORD, CHANGE_SEARCH_TEXT } from "./constants";

export function initCategory() {
    return async dispatch => {
        const category = await axios.get('category')
        dispatch({
            type: INIT_CATEGORY,
            data: ['全部', ...category]
        })
    }
}

export function initArticle(currentPage, type, change) {
    return async dispatch => {
        currentPage = currentPage || 0
        if(type === '全部' || !type) type = ''
        const articles = await axios.get('article/getshowarticles', {params: {currentPage, type}})
        dispatch({
            type: INIT_ARTICLES,
            data: {...articles, change}
        })  
    }
}

export function changeFocus(flag) {
    return {
        type: CHNAGE_FOCUS,
        flag
    }
}

export function search(value) {
    // 存储搜索记录
    let searchInfos = window.localStorage.getItem('searchInfos')
    searchInfos = searchInfos ? JSON.parse(searchInfos) : []
    searchInfos.unshift(value)
    searchInfos.splice(10)
    window.localStorage.setItem('searchInfos', JSON.stringify(searchInfos))

    return async dispatch => {
        const articles = await axios.get('article/searcharticles', {params: {searchText: value}})
        dispatch({
            type: SEARCH,
            articles
        })
    }
}

export function changeSearchShow(flag) {
    return {
        type: CHNAGE_SEARCH_SHOW,
        flag
    }
}

export function searchRecord(value, index) {
    // 修改存储历史
    let searchInfos = JSON.parse(window.localStorage.getItem('searchInfos'))
    const item = searchInfos.splice(index, 1)
    searchInfos = item.concat(searchInfos)
    window.localStorage.setItem('searchInfos', JSON.stringify(searchInfos))

    return async dispatch => {
        const articles = await axios.get('article/searcharticles', {params: {searchText: value}})
        dispatch({
            type: SEARCH_RECORD,
            data: {
                articles,
                value
            }
        })
    }
}

export function changeSearchText(value) {
    return {
        type: CHANGE_SEARCH_TEXT,
        value
    }
}