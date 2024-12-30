import './index.scss'
import Home from './home/home'
import Product from "./product/product";
import About from "./about/about";
import Join from "./join/join";
import News from "./news/news";
import { useEffect, useState } from "react";
import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';

// 视口高度
const viewHeight = window.innerHeight
document.body.style.overflow = 'hidden'


const viewList = [
  { domId: "home", element: <Home />, class: "main", styles: {} },
  { domId: "product", element: <Product />, class: "main", styles: {} },
  { domId: "about", element: <About />, class: "main", styles: {} },
  { domId: "join", element: <Join />, class: "main", styles: {} },
  { domId: "news", element: <News viewHeight={viewHeight} />, class: "main", styles: { transform: `translate3d(0px, 0px, 0px)` } },
]


function App() {
  const headerList = [
    { title: '首页', to: '/', page: 'home', active: "" },
    { title: '产品信息', to: '/?page=product', page: 'product', active: "" },
    { title: '了解我们', to: '/?page=about', page: 'about', active: "" },
    { title: '加入我们', to: '/?page=join', page: 'join', active: "" },
    { title: '新闻动态', to: '/?page=news', page: 'news', active: "" },
  ]

  const [currentPosition, setCurrentPosition] = useState(0) // translate3d Y轴高度
  const [flag, setFlag] = useState(false)
  const [headerDispaly, setHeaderDispaly] = useState('none')
  const [, setUrl] = useUrlState({ page: undefined })

  // 导航栏点击事件
  const headerClick = (item: { title?: string; to: string; page?: string; }) => {
    setUrl({ page: item.page })
    const anchorDom = document.getElementById(item.page as string)
    if (item.page === 'home') {
      setUrl({ page: undefined })
      setCurrentPosition(0)
    }
    if (anchorDom) {
      anchorDom.scrollIntoView({ block: 'start', behavior: "smooth" })
    }
  }


  // 滚动方法
  const rollFun = (deltaY: number) => {
    setFlag(true)
    if (deltaY > 0) {
      setCurrentPosition(currentPosition + viewHeight)
    } else {
      setCurrentPosition(currentPosition - viewHeight)
      if (currentPosition <= 0) {
        setCurrentPosition(0)
      }
    }
    // console.log(window.innerHeight);


    const currentTime = setTimeout(() => {
      setFlag(false)
      clearTimeout(currentTime)
    }, 700);

  }
  // 滚轮事件函数
  function wheelEvent(e: { deltaY: number; }) {

    console.log(e.deltaY);

    // console.log(document.getElementById(params.get('page'))?.style);
    // document.getElementById(params.get('page'))?.style = "#638eff"
    // console.log(params.get('page'), 'url参数');
    // content盒子高度
    const contentHeight = document.getElementById('content')?.clientHeight as number

    if (contentHeight - viewHeight == currentPosition && e.deltaY > 0) {
      console.log(123213213213);

      return
    }
    if (!flag) {
      rollFun(e.deltaY)
    }
  }

  // ahooks防抖
  const { run } = useRequest(wheelEvent, {
    debounceWait: 50,
    manual: true
  });

  useEffect(() => {

    setHeaderDispaly(currentPosition > 0 ? '' : 'none')
    return () => {
    }
  }, [currentPosition, flag])

  return (
    <>
      <header id="header" className='header' style={{ display: headerDispaly }}>
        <div className='header-box'>
          <div className="header-logo" >
            企业logo
          </div>
          <div className='header-menu'>
            {
              headerList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='header-menu__menuItem'
                    onClick={() => headerClick(item)}
                  >
                    {item.title}
                  </div>
                )
              })
            }
          </div>
        </div>
      </header>
      <div
        onWheel={run}
        id="content"
        style={{
          transform: `translate3d(0px, -${currentPosition}px, 0px)`,
          transitionDuration: '500ms'
        }}
      >
        {
          viewList.map((item) => {
            return (
              <div
                key={item.domId}
                id={item.domId}
                className={item.class}
                style={{ height: viewHeight, ...item.styles }}
              >
                {item.element}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
