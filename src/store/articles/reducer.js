import { fromJS } from "immutable";
import { INIT_CATEGORY, INIT_ARTICLES, CHNAGE_FOCUS, SEARCH, CHNAGE_SEARCH_SHOW, SEARCH_RECORD, CHANGE_SEARCH_TEXT } from "./constants";
import { pageSize } from "../../utils/config";

const defaultState = fromJS({
    categories: [],
    articles: [],
    searchArticles: [],
    searchTotal: 0,
    total: 0,
    currentPage: 0,
    pageSize: pageSize,
    searchFocus: false,
    showSearchResult: false,
    searchText: ''
})

export default function( state = defaultState, action = {} ) {
    switch(action.type) {
        case INIT_CATEGORY:
            return state.set('categories', fromJS(action.data))
        case INIT_ARTICLES:
            const articles = action.data.change ? fromJS(action.data.data) : state.get('articles').merge(fromJS(action.data.data))
            return state.set('articles', articles).set('total', action.data.total).set('currentPage', action.data.currentPage)
        case CHNAGE_FOCUS:
            return state.set('searchFocus', action.flag)
        case SEARCH:
            return state.set('searchArticles', fromJS(action.articles.data)).set('searchTotal', action.articles.total).set('showSearchResult', true)
        case CHNAGE_SEARCH_SHOW:
            return state.set('showSearchResult', action.flag)
        case SEARCH_RECORD:
            return state.set('searchArticles', fromJS(action.data.articles.data)).set('searchTotal', action.data.articles.total).set('showSearchResult', true).set('searchText', action.data.value).set('searchFocus', false)
        case CHANGE_SEARCH_TEXT:
            return state.set('searchText', action.value)
        default:
            return state
    }
}