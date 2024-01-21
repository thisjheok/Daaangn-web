import fleadata  from "../fleadata";
function Flea(){
return(
    <>
    <section className="flea-cover">
        <div className="flea-cover-content">
        <div>
            <h1 className="flea-title">믿을만한  </h1>
            <h1 className="flea-title">이웃 간 중고거래 </h1>
        </div>
        <div className="flea-detail">
            <p>동네 주민들과 가깝고 따뜻한 거래를
                <br></br>
            지금 경험해보세요
            </p>
        </div>
        </div>
    </section>

    <section className="flea-list">
        <div className="flea-title-div">
        <h1 className="flea-list-title">중고거래 인기매물</h1>
        </div>
            <div className="container">
                <div className="row">
                    {
                        fleadata.map((a,i)=>{
                            return(
                                <div className="col-md-4"><Card fleadata={fleadata[i]}/></div>
                            )
                        })
                    }
                </div>
        </div>
    </section>
</>
)
}

function Card(props){
    return(
        <div>
            <a></a>
            <div className="card-imgs">
                <img src="img/fleaimg.png"></img>
            </div>
            <div className="card-desc">
                    <p className="card-title">{props.fleadata.title}</p>
                    <div className="card-price">{props.fleadata.price}</div>
                    <div className="card-place">{props.fleadata.locate}</div>
                    <div className="card-count"></div>
            </div>
        </div>
    )
}

export default Flea;



