export default function Card(props) {
    return (
        <div className='col-lg-4'>
            <div className="card" style={{ width: "15rem" }}>
                <img src={props.data.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
                        <h6>{props.data.price}</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button  disabled={props.cartitems.some((obj)=>obj.id==props.data.id)} onClick={()=>props.handleaddtask(props.data.id)} className="btn btn-primary">Add to cart</button>
                    </div>
            </div>

        </div >
    )
}