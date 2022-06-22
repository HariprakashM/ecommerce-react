export default function Cart(props) {
    return (
       
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.data.name}</div>
                    <button className="btn btn-primary" onClick={()=>props.handleremovetask(props.data.id)}>Remove</button>
                </div>
                <span className="badge bg-primary rounded-pill">{props.data.price}</span>
            </li>
         
        
    )
}