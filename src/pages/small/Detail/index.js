import React, { Component } from 'react'
import 'github-markdown-css'
// import mditor from 'mditor'
// import showdown from 'showdown';
import marked from 'marked'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

import axios from "../../../utils/http";
import { DetailWrapper, MdContent, DetailTitle, AuthorInfo, DetailDesc } from './style'
import { baseUrl } from '../../../utils/config';
import { formatTime } from '../../../utils/tools'

hljs.registerLanguage('javascript', javascript);
// const parser = new mditor.Parser()
// let converter = new showdown.Converter();

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});
// const renderer = new marked.Renderer()

export default class SmallDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }

    async componentDidMount() {
        const data = await axios.get('article/getarticleinfo', {params: {id: this.props.match.params.id}})
        // hljs.initHighlightingOnLoad();
        this.setState({
            info: data
        })
        // console.log( converter.makeHtml(this.state.info.content||''))
    }
    render() {
        const { title, desc, content, authorId, time } = this.state.info
        return (
            <DetailWrapper>
                { title && (
                    <>
                    <DetailTitle>{title}</DetailTitle>
                    <AuthorInfo>
                        <img src={`${baseUrl}${authorId && authorId.avatar}`} alt="头像" style={{width: '1.8rem', height: '1.8rem', borderRadius: '50%'}} />
                        <div className="author">
                            <div className="name">{authorId && authorId.name}</div>
                            <div>{formatTime(time, 'Y/M/D h:m:s')}</div>
                        </div>
                    </AuthorInfo>
                    <DetailDesc>{desc}</DetailDesc>
                    {/* <MdContent className="markdown-body" dangerouslySetInnerHTML={{__html: converter.makeHtml(content||'')}}> */}
                    <MdContent className="markdown-body" dangerouslySetInnerHTML={{__html: marked(content||'')}}>
                    </MdContent>
                    </>
                )}
            </DetailWrapper>
        )
    }
}
