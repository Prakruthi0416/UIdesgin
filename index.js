import React from 'react'
import money from '../Image/money.png'
import money2 from'../Image/money2.png'
import book from '../Image/book.png'
import text1 from'../Image/Text1.png'
import time from'../Image/time.png'
import text2 from'../Image/Text2.png'
import Live from'../Image/Live.png'
import text3 from'../Image/Text3.png'
import hat from'../Image/hat.png'
import text4 from'../Image/text4.png'
import Add from'../Image/Add.png'
import text5 from'../Image/text5.png'
// import Card from 'card'
import icon1 from'../Image/Icon 1.png'
import icon2 from'../Image/Icon 2.png'
// import Text from'../Image/Text.png'
import Summary from'../Image/Summary Container.png'
import Raz from'../Image/Frame 12537.png'
import'./Index.css'


 const Index = () => {
  return (
    <div className='Container-fluid scroll'>
        <div className='row'>
            <div className='col-sm-6'>
<h1>Access curated Courses worth<br/>
<img src={money} id='img3' alt=''/> at just <img  id="img4"src={money2} alt=''/> per year!</h1>
<div className='colms'>
<div className='row'>
    <div className='col-sm-1'>

    </div>
    <div className='col-sm-3'>
        <img src={book} id='img5' alt=''></img><br/>
        <img src={time} id="img6" alt=''></img><br/>
        <img src={Live} id="img7"alt=''></img><br/>
        <img src={hat} id="img8"alt=''></img><br/>
        <img src={Add} id="img9"alt=''></img>
    </div>
    <div   className='col-sm-4'>
        <img src={text1} id='text1' alt=''/><br/>
        <br/>
        <img src={text2} id='text1' alt=''/><br/><br/>
        <img src={text3}id='text3' alt=''/><br/><br/>
        <img src={text4}id='text1' alt=''/><br/><br/>
        <img src={text5}id='text1' alt=''/>

    </div>
    </div>
</div>
            </div>
            <div className='col-sm-6'>
                <div className="card" style={{width: '18rem;'}}>
  <div class="card-body">
    <h5 class="card-title">
        <div className='row'>
            <div className='col-sm-6'>
                <img src={icon1} alt='' /><br/>
                <h6>Sign UP</h6>
            </div>
            <div className='col-sm-6'>
                <img src={icon2} alt='' /><br/>
               <h6> Subscribe</h6>
            </div>
        </div>
        Select your subscription plan</h5>

        <div class="card m-2"  style={{width: 400,height:50,background:'lightgray' ,color:'gray'}}>
  <div class="card-body ">
    <div className='row'>
        <div className='col-sm-8'>
    <p class="card-text"><input type="radio"/>12 months Subscription </p>
    </div>
    <div className='col-sm-4'>
    <p>Total ₹99 </p>
    </div>
    <div className='col' style={{float:'right'}}>
        
    {/* <i >₹8 /mon</i> */}

    </div>
    </div>
  </div>
</div>

<div class="card m-2"  style={{width: 400,height:50,background:'lightgreen' ,color:'black',border: ' 3px soild green'}}>
  <div class="card-body ">
    <div className='row'>
        <div className='col-sm-8'>
    <p class="card-text"><input type="radio"/>12 months Subscription </p>
    </div>
    <div className='col-sm-4'>
    <p>Total ₹179 </p>
    </div>
    <div className='col' style={{float:'right'}}>
        
    {/* <i >₹8 /mon</i> */}

    </div>
    </div>
  </div>

</div>

<div class="card m-2"  style={{width: 400,height:50 ,color:'black',border: ' 3px soild green'}}>
  <div class="card-body ">
    <div className='row'>
        <div className='col-sm-8'>
    <p class="card-text"><input type="radio"/>6 months Subscription </p>
    </div>
    <div className='col-sm-4'>
    <p>Total ₹149 </p>
    </div>
       </div>
  </div>
</div>

<div class="card m-2"  style={{width: 400,height:50 ,color:'black',border: ' 3px soild green'}}>
  <div class="card-body ">
    <div className='row'>
        <div className='col-sm-8'>
    <p class="card-text"><input type="radio"/>3 months Subscription </p>
    </div>
    <div className='col-sm-4'>
    <p>Total ₹99 </p>
    </div>
    </div>
  </div>
</div>

<div className='pic'>   
 <img src={Summary} alt=' '  style={{height:110,width:400,marginRight:50}}/>
</div>

<div className='buutons'>
    <div className='row'>
        <div className='col-sm-6'>
            <button id="btn1">CANCEL</button>
        </div>
        <div className='col-sm-6'>
            <button id="btn2">PROCEED TO PAY</button>
        </div>
    </div>


<br/>
<div className='raz'>
    <img src={Raz} alt='' style={{marginRight:300}}/>
</div>

</div>
    </div>
    </div>
    </div>
    </div>
  </div>



    
  
        
  )
}
export default Index;