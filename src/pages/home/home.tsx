import ShubiaoSvg from "@/assets/svg/shubiao.svg?react";
import XiajiantouSvg from "@/assets/svg/xiajiantou.svg?react";
import './home.scss'
import { useState } from "react";

const videoUrl = ['/src/assets/media/IMG_1645.mp4', '/src/assets/media/IMG_3681.mp4']
const viewHeight = window.innerHeight
function App() {
  const [videoRecord, setVideoRecord] = useState(0)
  const videoEnded = () => {
    setVideoRecord(videoRecord + 1)
    if (videoUrl.length - 1 === videoRecord) {
      setVideoRecord(0)
    }
  }
  return (
    <>
      <header className='header' style={{ display: "none" }}>
        <div className='header-box'>
          <div className="header-logo" >
            企业logo
          </div>
          <div className='header-menu'>
            <div className='header-menu__menuItem'>首页</div>
            <div className='header-menu__menuItem'>产品信息</div>
            <div className='header-menu__menuItem'>了解我们</div>
            <div className='header-menu__menuItem'>加入我们</div>
            <div className='header-menu__menuItem'>新闻动态</div>
          </div>
        </div>
      </header>
      <div className='home-video-box' style={{ height: viewHeight }}>
        <div className='page'>
          <div className="page-logo1 header-logo">
            企业logo
          </div>
          <div className='page-logo2'>
            <img style={{ width: "100%" }} src="/src/assets/image/logo2.png" alt="" />
          </div>
          {/* <div className='page-logo3' onClick={()=>{}}>
            视频播放按钮
            <b></b>
          </div> */}
          <div className='page-logo4'>
            <div>
              <ShubiaoSvg />
            </div>
            <div className="xiangxia">
              <XiajiantouSvg className="xiangxia-svg" />
            </div>
          </div>
        </div>
        <div className='video'>
          {/* 首页视频背景 */}
          <video onEnded={videoEnded} autoPlay muted src={videoUrl[videoRecord]}></video>
        </div>
        <div className='vague'></div>
      </div>
      <main className='main'>内容</main>
      <footer className='footer'>123213</footer>
    </>
  )
}

export default App
