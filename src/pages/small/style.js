import styled from 'styled-components'

export const SmallWrapper = styled.div`
    position: relative;
    margin-top: 37px;
    padding-top: 44px;
`

export const CardBody = styled.div`
    margin-bottom: 0.7rem;
    h3 {
        font-size: 0.8rem;
        font-weight: 400;
    }
    p {
        margin-top: 0.6rem;
        color: #999;
        font-size: 0.7rem;
    }
`

export const SearchResultTitle = styled.div`
    position: relative;
    font-size: 0.9rem;
    color: #666;
    padding: 0 20px;
    margin-top: -20px;
    .clear {
        position: absolute;
        right: 20px;
        bottom: 0;
        font-size: 0.7rem;
    }
`

export const SearchList = styled.ul`
    padding: 20px;
    >li {
        display: flex;
        height: 1.8rem;
        font-size: 0.8rem;
        color: #999;
        align-items: center;
        justify-content: space-between;
        .searchText {
            flex: 1;
            .record {
                padding-left: 5px;
            }
        }
        .cross {
                padding-left:30px;
            }
    }
`