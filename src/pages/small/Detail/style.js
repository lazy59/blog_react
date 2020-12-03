import styled from 'styled-components'
export const DetailWrapper = styled.div`
    padding: 20px;
`

export const MdContent = styled.div`
    font-size: 0.7rem!important;
    code {
        color: #abb2bf;
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: 400!important;
    }
    pre {
        background-color: #000!important;
    }
`

export const DetailTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 30px;
`

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 0.6rem;
    color: #666;
    .author {
        margin-left: 10px;
        .name {
            color: #333;
            font-size: 0.8rem;
            margin-bottom: 5px;
        }
    }
`

export const DetailDesc = styled.div`
    padding: 5px 10px;
    /* border-left: 2px solid #108ee9; */
    border-left: 1.5px solid #999;
    margin-bottom: 30px;
    font-size: 0.8rem;
    color: #999;
    font-style: italic;
`