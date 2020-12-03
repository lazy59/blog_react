import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Page, Layout, BgContainer, Header, Content, Footer } from './style'
import { Input } from 'antd';
import Articles from './Articles';
import Detail from './Detail';
const { Search } = Input;

export default class Pc extends Component {
    render() {
        return (
            
            <Page>
                <Layout>
                    <BgContainer>
                    </BgContainer>
                    <Header>
                        <div className="logo">LAZY BLOG</div>
                        <div className="search">
                            <Search
                                placeholder="搜索文章"
                                onSearch={value => console.log(value)}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </Header>
                    <Content>
                        <Route exact path={`${this.props.match.url}`} component={Articles}></Route>
                        <Route path={`${this.props.match.url}/:id`} component={Detail}></Route>
                    </Content>
                    <Footer>
                        版权信息
                    </Footer>
                </Layout>
            </Page>
        )
    }
}
