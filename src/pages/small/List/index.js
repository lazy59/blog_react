import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Tabs, PullToRefresh } from 'antd-mobile';
import ReactDOM from 'react-dom'
import { initCategory, initArticle } from '../../../store/articles/actions';



import ArticleList from '../ArticleList';

class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          down: false,
          height: document.documentElement.clientHeight,
          data: [],
        };
    }

    async componentDidMount() {
        console.log(this.props)
        if(!this.props.articles.get('categories').count()) await this.props.initCategory()
        if(!this.props.articles.get('articles').count()) await this.props.initArticle()
        setTimeout(() => {
            const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.ptr).offsetTop - 88;
            this.setState({
                height: hei,
            })
        }, 100);
    }

    tabChange(tab,index) {
        this.type = tab.title
        this.props.initArticle(0, tab.title, true)
    }

    render() {
        const tabs = this.props.articles.get('categories').toJS().map(item => {
            return {title: item}
        })
        const articles = this.props.articles.get('articles')
        const { currentPage } = this.props.articles.toJS()
        
        return (
            <Tabs tabs={tabs} initialPage={0} onChange={(tab,index) => {this.tabChange(tab,index)}} renderTabBar={props => <div  style={{ zIndex: 1000, position: 'fixed',top: '44px',left:0,width:'100%' }}><Tabs.DefaultTabBar {...props} page={4} /></div>} tabBarUnderlineStyle={{backgroundColor:'#108ee9'}}>
                <PullToRefresh
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                        WebkitOverflowScrolling:'touch'
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉加载更多', activate: '松开加载更多', finish: '加载完成' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        if(this.state.refreshing) return;
                        this.setState({ refreshing: true });
                        this.props.initArticle(currentPage+1, this.type).then(() => {
                            this.setState({ refreshing: false });
                        })
                    }}
                >
                    {ArticleList(articles, this.props.toDetail)}
                </PullToRefresh>
            </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
