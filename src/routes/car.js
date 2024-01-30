import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function Car(){
    return(
        <>
        <section className="real-cover">
        <div className="job-cover-content">
        <div>
            <h1 className="nearby-title">딜러 수수료 없는</h1>
            <h1 className="nearby-title">중고차 직거래 </h1>
        </div>
        <div className="nearby-detail">
            <p>딜러 없이 믿고 살 수 있는 중고차,
                <br></br>
                당근에서 직거래해보세요.
            </p>
        </div>
        <div className="job-btn">
        <Button variant="danger" className='job-button'>내 차 판매하기</Button>{' '}
            </div>
        </div>
    </section>
    <section className='realcontents'>
        <h2 className='real-title1'>인기 중고차</h2>
        <div className='real-items'>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <div className='realbanner'>
                <div className='realbannerletter'>
                <div className='realbanner1'>딜러 수수료 없는 중고차 직거래<br></br>
                당근 내 근처 탭에서 바로 찾아보세요!</div>
                 </div>
                 <Button variant="danger" className='bannerbtn3'>앱 다운로드 하기</Button>
            </div>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
            <Realitem></Realitem>
        </div>
    </section>
    <div className="credit-banner">
    </div>
        </>
    )
}

function Realitem(){
    return(
        <>
        <div className='realitem-box'>
            <article className='realitem-box2'>
                <div className='realitem-imgbox'>
                    <span className='realitem-imgbox2'>
                        <img className='realitem-img' src="img/fleaimg.png"></img>                        
                    </span>
                </div>
                <div className='realitem-detail'>
                    <div className='realitem-title'>매물 명</div>
                    <div className='realitem-locate'>위치</div>
                    <div className='realitem-price'>가격</div>
                </div>
            </article>
        </div>
        </>
    )
}

export default Car