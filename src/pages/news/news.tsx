import React from "react"

interface peopsType {
    viewHeight: string | number
}

const News: React.FC<peopsType> = ({ viewHeight }) => {
    return (
        <>
            <div style={{ height: viewHeight }}>
                新闻动态
            </div>
            <footer id="footer" className='footer'>123213</footer>
        </>
    )
}
export default News