import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import stores from '../nearbystoresdata';

function Nearbystores(){
    return(
    <>
       <section className="nearby-cover">
        <div className="nearby-cover-content">
        <div>
            <h1 className="nearby-title">동네 이웃들이  </h1>
            <h1 className="nearby-title">자주 가는 동네 업체 </h1>
        </div>
        <div className="nearby-detail">
            <p>우리 동네 사람들이
                <br></br>
            이용하는 업체를 찾아보세요.
            </p>
        </div>
        </div>
    </section>
    <div className="nearby-stores1">
        <h3 className="nearby-stores-letters1">다양한 동네 업체를 볼 수 있어요</h3>
    </div>    
    
    <div className='nearby-tabs'>

    </div>

    <div className="nearby-stores1-content">
    <Container className='container1'>
      <Row>
        <Col><NearbystoresDetail/></Col>
        <Col><NearbystoresDetail/></Col>
      </Row>
      <Row>
        <Col><NearbystoresDetail/></Col>
        <Col><NearbystoresDetail/></Col>
      </Row>
      <Row>
        <Col><NearbystoresDetail/></Col>
        <Col><NearbystoresDetail/></Col>
      </Row>
      <Row>
        <Col><NearbystoresDetail/></Col>
        <Col><NearbystoresDetail/></Col>
      </Row>
    </Container>
    </div>

    <div className="nearby-stores2">
        <h3 className="nearby-stores-letters">동네 이웃이 남긴 후기를 찾아보세요</h3>
    </div>
    <div className="nearby-stores2-content">
    <Container className='container2'>
      <Row>
        <Col><NearbyReviews stores={stores[0]}/></Col>
        <Col><NearbyReviews stores={stores[1]}/></Col>
      </Row>
      <Row>
        <Col><NearbyReviews stores={stores[2]}/></Col>
        <Col><NearbyReviews stores={stores[3]}/></Col>
      </Row>
    </Container>
    </div>
    <div className="credit-banner">

</div>
    <a href="https://www.flaticon.com/kr/free-icons/" title="프로필 아이콘">프로필 아이콘  제작자: SBTS2018 - Flaticon</a>
    </>
    
    )
}

function NearbyReviews(props){
    return(
    <div className='nearbyreview-box'>
        <div className='nearbyreview-profile'>
            <div>
                <img className='nearbyreview-img' src="img/userprofile.png"></img>
            </div>
            <div className='nearbyreview-profile-content'>
                <span className='nearbyreview-profile-nickname'>{props.stores.name}</span>
                <span className='nearbyreview-profile-locate'>{props.stores.locate} 인증 {props.stores.cert}회</span>
            </div>
        </div>
        <div className='nearbyreview-content'>
            <span className='nearbyreview-content-letters'>{props.stores.content}</span>
        </div>
        <div className='nearbyreview-stores'>
            <div>
                <img className='nearbyreview-imgs-stores' src="img/fleaimg.png"></img>
            </div>
            <div className='nearbyreview-store-content'>
                <span className='nearbyreview-stores-title'>{props.stores.storename}</span>
                <span className='nearbyreview-stores-detail'>후기 {props.stores.review} 단골 {props.stores.conn} {props.stores.category}</span>
            </div>
        </div>
    </div>
    )
}

function NearbystoresDetail(props){
    return(
        <>
            <div className='nbystore'>
                <div className='nbyimg'>
                    <img className='nbyprofileimg' src="img/fleaimg.png"></img>
                </div>
                <div className='nbycontent'>
                <div className='nbyprofile'>
                    <span className='nbytitle'>가게명</span>
                    <span className='nbylocation'>위치</span>
                </div>
                <div className='nbyintrobox'>
                    <span className='nbyintro'>가게 소개</span>
                </div>
                <div className='nbycountbox'>
                    <span className='nbycount'>
                    후기 단골 가게종류
                    </span>
            </div>
                </div>
        </div>
        <div className='nbybotm'>
        </div>
        </>
        
    )
}

export default Nearbystores