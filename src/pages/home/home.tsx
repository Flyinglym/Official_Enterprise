import './home.scss'

function App() {

  return (
    <>
      <header className='header'>
        <div className='header-box'>
          <div className="header-logo" />
          <div className='header-menu'>
            <div className='header-menu__menuItem'>首页</div>
            <div className='header-menu__menuItem'>产品信息</div>
            <div className='header-menu__menuItem'>了解我们</div>
            <div className='header-menu__menuItem'>加入我们</div>
            <div className='header-menu__menuItem'>新闻动态</div>
          </div>
        </div>
      </header>
      <main className='main'>内容</main>
      <footer className='footer'>123213</footer>
    </>
  )
}

export default App
