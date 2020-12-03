import React, { Fragment } from 'react'
import { WhiteSpace, Card, WingBlank, Tag } from 'antd-mobile';
import { baseUrl } from '../../../utils/config';
import { CardBody } from '../style';
import { formatTime } from '../../../utils/tools'

const ArticleList = (articles, toDetail) => {
    return (
        <WingBlank size="lg">
            {articles.map((item) => {
                return  (
                    <Fragment key={item.get('_id')}>
                        <WhiteSpace size="lg" />
                        <Card onClick={ () => toDetail(item.get('_id'))}>
                            <Card.Header
                                title={item.getIn(['authorId', 'name'])}
                                thumb={`${baseUrl}${item.getIn(['authorId', 'avatar'])}`}
                                thumbStyle={{width: '1.5rem', height: '1.5rem', borderRadius: '50%'}}
                                extra={<Tag small selected={false}>{item.get('category')}</Tag>}
                            />
                            <Card.Body>
                                <CardBody>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </CardBody>
                            </Card.Body>
                            <Card.Footer style={{paddingBottom: '5px', fontSize: '0.7rem'}} content={formatTime(item.get('time'), 'Y/M/D')} extra={<div>阅读更多</div>} />
                        </Card>
                        <WhiteSpace size="lg" />
                    </Fragment>
                )
            })}
        </WingBlank>
    )
}

export default ArticleList