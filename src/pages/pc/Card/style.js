import styled from 'styled-components'

export const CardContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
    box-sizing: border-box;
    padding: 15px;
    h3 {
        font-size: 16px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        .category {
            font-size: 12px;
            color: #ccc;
            margin-left: 10px;
        }
    }
    .desc {
        height: 60px;
        margin: 15px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .authorInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .author {
            margin-right: 5px;
            display: flex;
            align-items: center;
            .avatar {
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 50%;
                margin-right: 5px;
            }
            .name {
                margin-right: 5px;
            }
            .time {
                margin-left: 5px;
            }
        }
        .readmore {
            color: #1890ff;
            cursor: pointer;
            font-size: 14px;
            opacity: 0.8
        }
    }
`