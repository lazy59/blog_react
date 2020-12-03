import styled from 'styled-components'

const layoutWidth = '1200px'

const bgImage = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('http://blog.image.lazyzzd.cn/bg/bg2.jpg');
`

export const Page = styled.div`
    position: relative;
    width: 100%;
`

export const Layout = styled.div`
    max-width: ${layoutWidth};
    position: relative;
    margin: 0 auto;
    width: 100%;
`

export const BgContainer = styled(bgImage)`
    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 180px;
    background-position: left bottom;
`
export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    text-align: center;
    font-size: 16px;
`

export const Header = styled.div`
    max-width: ${layoutWidth};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 36px;
        color: #fff;
    }
    .search {
        width: 400px;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: ${layoutWidth};
    position: absolute;
    top: 80px;
    left: 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 20px;
    height: calc(100vh - 130px);
    overflow: auto;
`

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    >div {
        width: 45%;
        margin: 20px;
    }
`