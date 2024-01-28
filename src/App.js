import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route, Link,NavLink } from 'react-router-dom'
import './App.css';
import Flea from './routes/fleamarket.js'
import Nearbystores from './routes/nearby-stores.js'
import Jobs from './routes/jobs.js';
import Realty from './routes/realty.js';

function App() {
  return (
    <div className='App'>
      <Navbar bg="white" className='main-navbar'>
        <Container className='navcomponet'>
        <Navbar.Brand href="/" className='brand'><img className="logoimg" src="img/logo123.png"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="fleamarket">중고거래</Nav.Link>
          <Nav.Link href="nearby-stores">동네업체</Nav.Link>
          <Nav.Link href="jobs">알바</Nav.Link>
          <Nav.Link href="realty">부동산 직거래</Nav.Link>
          <Nav.Link href="car">중고차 직거래</Nav.Link>
        </Nav>
        <input type="text" className='search' placeholder="물품이나 동네를 검색해보세요"></input>
        <Button variant="light" className='chatting'>채팅하기</Button>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
          <div className='main-banner'>
            <div className='main-letters'>
              <h1 className='main-title'>당신 근처의</h1>
              <h1 className='main-title'>지역 생활 커뮤니티</h1>
              <p className='main-sub'>동네라서 가능한 모든 것<br></br>
                  당근에서 가까운 이웃과 함께해요.</p>
              <a href="https://play.google.com/store/apps/details?id=com.towneers.www&pli=1">
              <Button variant="warning" className='main-buttons'>Google Play</Button>{' '}
              </a>
              <a href="https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995">
              <Button variant="warning" className='main-buttons'>App store</Button>{' '}
              </a>
            </div>
            </div>
            <div className='second-banner'>
              <div>
                <h6 className='sec'>중고거래</h6>
                <h2 className='sec-title'>믿을만한</h2> 
                <h2 className='sec-title'>이웃 간 중고거래</h2>
                <p className='main-sub'>동네 주민들과 가깝고 따뜻한 거래를<br></br>
                    지금 경험해보세요.</p>
                  <Button variant="secondary" className='sec-buttons'>인기매물 보기</Button>{' '}
                  <Button variant="secondary" className='sec-buttons'>믿을 수 있는 중고거래</Button>{' '}
              </div>
            </div>
      <div>
    <div className='third-banner'>
      <div className='third-banner-content'>
        <h6 className='sec'>동네생활</h6>
          <h2 className='sec-title'>이웃만 아는</h2>
          <h2 className='sec-title'>동네 정보와 이야기</h2>
          <p className='main-sub'>우리동네의 다양한 정보와 이야기를<br></br>
              공감과 댓글로 나누어요.</p>
          <div className='third-container'>
          <div className='third-box'>
              <p className='third-detail'>동네모임</p>
                  <p className='third-detail2'>근처 이웃들과 동네
                    이야기를 해보세요.</p>
          </div>
          <div className='third-box'>
            <p className='third-detail'>동네질문</p>
                  <p className='third-detail2'>궁금한 게 있을 땐
                      이웃에 물어보세요.</p>
          </div>
          <div className='third-box'>
            <p className='third-detail'>동네분실센터</p>
            <p className='third-detail2'>무언가를 잃어버렸다면
                글을 올려보세요.</p>
          </div>
          </div>
      </div>
       
    </div>

    <div className='second-banner'>
        <div>
          <h6 className='sec'>알바</h6>
          <h2 className='sec-title'>걸어서 10분!</h2> 
          <h2 className='sec-title'>동네 알바 구하기</h2>
          <p className='main-sub'>당근하듯 쉽고, 편하게<br></br>
              당근 알바로 동네 알바를 구할 수 있어요.</p>
            <Button variant="secondary" className='sec-buttons'>내근처 알바 보기</Button>{' '}
        </div>
      </div>

      <div className='fourth-banner'>
        <div className='fourth-banner-content'>
          <h6 className='sec'>동네업체</h6>
          <h2 className='sec-title'>내 근처에서 찾는</h2>
          <h2 className='sec-title'> 동네업체</h2>
          <p className='main-sub'>이웃들의 추천 후기를 확인하고<br></br>
                        동네 곳곳의 업체들을 찾을 수 있어요.</p>
            <Button variant="secondary" className='sec-buttons'>당근 동네업체 보기</Button>{' '}
        </div>
      </div>

      <div className='credit-banner'>
        <div className='credit-left'>
        
        </div>
        <div className='credit-right'>

        </div>
      </div>
      </div>
          </>
        }/>
        <Route path="/fleamarket" element={
          <>
        <Flea></Flea>
          </>
        }/>
        <Route path="/nearby-stores" element={
          <>
        <Nearbystores></Nearbystores>
          </>
        }/>
         <Route path="/jobs" element={
          <>
        <Jobs></Jobs>
          </>
        }/>       
        <Route path="/realty" element={
          <>
        <Realty></Realty>
          </>
        }/>    
      </Routes>
</div>
  );
}

export default App;
