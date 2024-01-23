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
            <h1 className="job-title">우리 동네에서 찾는</h1>
            <h1 className="job-title">당근 알바 </h1>
        </div>
        <div className="job-detail">
            <p>걸어서 10분 거리의
                <br></br>
        동네 알바들 여기 다 있어요.
            </p>
        </div>
        <div className="job-btn">
        <Button variant="danger">공고 올리기</Button>{' '}
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
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
        </>
    )
}

function Popjob(props){
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


export default Jobs