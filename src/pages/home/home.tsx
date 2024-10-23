import ShubiaoSvg from "@/assets/svg/shubiao.svg?react";
import XiajiantouSvg from "@/assets/svg/xiajiantou.svg?react";
import './home.scss'
import { useState } from "react";


const videoUrl = ['/src/assets/media/IMG_1645.mp4', '/src/assets/media/IMG_3681.mp4']

// 视口高度
document.body.style.overflow = 'hidden'

function Home() {
  const [videoRecord, setVideoRecord] = useState(0)



  // 视频自动切换
  const videoEnded = () => {
    setVideoRecord(videoRecord + 1)
    if (videoUrl.length - 1 === videoRecord) {
      setVideoRecord(0)
    }
  }

  return (
    <>
      <div className="home-video-box">
        <div className='page'>
          <div className="page-logo1 header-logo">
            企业logo
          </div>
          <div className='page-logo2'>
            <img style={{ width: "100%" }} src="/src/assets/image/logo2.png" alt="" />
          </div>
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

    </>
  )
}

export default Home
