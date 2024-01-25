import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Jobs(){
    return(
        <>
        <section className="job-cover">
        <div className="job-cover-content">
        <div>
            <h1 className="nearby-title">우리 동네에서 찾는</h1>
            <h1 className="nearby-title">당근 알바 </h1>
        </div>
        <div className="nearby-detail">
            <p>걸어서 10분 거리의
                <br></br>
        동네 알바들 여기 다 있어요.
            </p>
        </div>
        <div className="job-btn">
        <Button variant="danger" className='job-button'>공고 올리기</Button>{' '}
            </div>
        </div>
    </section>
    <div className="job-stores1">
        <h3 className="job-stores-letters1">인기 당근알바</h3>
    </div>  
    <div className="nearby-stores1-content">
    <Container className='container1'>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
    </Container>
    </div>

    <div className='jobanner1'>
        <div className='jobanner1box'>
            <div></div>
            <div className='bannerletter1'>
                대규모 채용이 필요하다면<br></br>
                당근알바 기업용 서비스에 대해 알아보세요!
            </div>
        </div>
        <div className='bannerbtns'>
            <Button variant="danger" className='bannerbtn1'>7일 무료 체험</Button>{' '}
            <Button variant="danger" className='bannerbtn2'>1:1 문의</Button>{' '}
        </div>
    </div>

    <div className="nearby-stores1-content">
    <Container className='container1'>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
      <Row>
        <Col><Popjob/></Col>
        <Col><Popjob/></Col>
      </Row>
    </Container>
    </div>
    <div className='jobanner2'>
        <div className='jobanner1box'>
            <div></div>
            <div className='bannerletter1'>
                당근알바 이용방법이 궁금하다면<br></br>
                지금 바로 알아보세요!
            </div>
        </div>
        <div className='bannerbtns2'>
            <Button variant="danger" className='bannerbtn3'>이용 방법 알아보기</Button>{' '} 
        </div>
    </div>
    <div className="credit-banner">
    </div>
        </>
        
    )
}

function Popjob(props){
    return(
        <>
        <div className='nbystore'>
            <div className='jobimg'>
                <img className='nbyprofileimg' src="img/fleaimg.png"></img>
            </div>
            <div className='nbycontent'>
            <div className='nbyprofile'>
                <span className='nbytitle'>제목</span>
            </div>
            <div className='nbyintrobox'>
                <span className='nbyintro'>업체명 위치</span>
            </div>
            <div className='nbycountbox'>
                <span className='nbycount'>
                월급 
                </span>
            </div>
            </div>
    </div>
    </>
    )
}


export default Jobs