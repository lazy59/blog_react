import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';

import { initCategory, initArticle } from '../../../store/articles/actions';
import List from '../List';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class Articles extends Component {
    async componentDidMount() {
        if(!this.props.articles.get('categories').count()) await this.props.initCategory()
        if(!this.props.articles.get('articles').count()) await this.props.initArticle()
        console.log(this.props, 666)
    }
    render() {
        const categories = this.props.articles.get('categories')
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    {
                        categories.map( item => (
                            <TabPane tab={item} key={item}>
                                <List articles={this.props.articles.get('articles')} readmore={(id) => { console.log(id);this.props.history.push(`/home/${id}`)}}></List>
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initCategory: () => {
            dispatch(initCategory())
        },
        initArticle: (currentPage, type, change) => {
            return dispatch(initArticle(currentPage, type, change))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
