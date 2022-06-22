import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './card';
import Cart from './cart';
import { useState } from 'react';
function App() {
  const [product,setproduct]=useState([
    {
      id:1,
      name:"Iphone",
      price:30000,
      image:"https://i.pcmag.com/imagery/reviews/07GmIupznWhAzDQ3Z7li99a-1.fit_lim.size_625x365.v1632849626.jpg"
    },
    {
      id:2,
      name:"Samsung",
      price:20000,
      image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      id:3,
      name:"Nokia",
      price:10000,
      image:"https://images.ctfassets.net/wcfotm6rrl7u/1HD1IDQs70vvgkUESgOwW7/86e5ec0424f117248cc4576b4c45defa/nokia_4_2-og_image.jpg"
    },
    {
      id:4,
      name:"Blackberry",
      price:15000,
      image:"https://drop.ndtv.com/TECH/product_database/images/5312013103100AM_635_blackberry_curve_8530.png"
    },
    {
      id:5,
      name:"MI",
      price:7000,
      image:"https://www.androidauthority.com/wp-content/uploads/2021/04/Xiaomi-Mi-11-Ultra-angled-rear-view.jpg"
    },
    {
      id:6,
      name:"Oppo",
      price:25000,
      image:"https://petapixel.com/assets/uploads/2021/09/oppo-reno-800x556.jpeg"
    }
  ])
  const [cartitems,setcartitems]=useState([]);
  const [total,settotal]=useState(0);
  let handleaddtask=(id)=>{
    const pindex=product.findIndex((obj)=>obj.id==id);
    let p=product[pindex];
    setcartitems([...cartitems,p]);
    settotal(total + p.price);
  }
  let handleremovetask=(id)=>{
    const cindex=cartitems.findIndex((obj)=>obj.id==id);
    settotal(total - cartitems[cindex].price);
    cartitems.splice(cindex,1);
    setcartitems([...cartitems]);
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <h3 className='col-lg-12'>PRODUCTS</h3>
          </div>
          <div className='row'>
            {
               product.map((e)=><Card cartitems={cartitems}data={e} handleaddtask={handleaddtask}></Card>)
            }

          </div>
        </div>
        <div className='col-md-4'>
          <div className='row '>
            <h3 className='col-md-12'>CART</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <ol className="list-group list-group-numbered">
                {cartitems.map((e)=><Cart data={e} handleremovetask={handleremovetask}></Cart>)}
              </ol>
            </div>
            <div className="col-md-12">
              <h1>Total:{total}</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
