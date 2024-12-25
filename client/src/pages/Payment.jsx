import React from 'react'

function Payment() {
  return (
    <div className="bg-slate-400 ">
      <div className="w-11/12  place-self-center h-dvh bg-white px-20">
      <form>
        <h1 className="font-bold text-2xl">Customer information</h1>
        <hr className="w-64" />
        <br/>
        <input className='border w-3/5 h-14 text-2xl ' type="text" placeholder="Username or Email Address " />
        <br/>
        <br/>
        <h1 className='font-bold text-2xl'>Billing details</h1>
        <br/>
        <hr className='w-3/5'/>
        <br /> 
        <input className='border w-80 h-14 text-xl' type="text" placeholder='First Name' required />
        <input className='border w-80 h-14 text-xl mx-3' type="text" placeholder='Last Name'required />
        <br />
        <br/> 
        <input className='border w-3/5 h-14 text-2xl' type="text"placeholder='Company Name' />
        <br />
        <br />
        <select className='border w-3/5 h-14 text-2xl font-extralight'>
        <option value="Country">Select Your Country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="AlandIsland">Aland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Australia">Australia</option>
          <option value="Belgium">Belgium</option>
          <option value="Behrain">Behrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Belgium">Belgium</option>
          <option value="brazil">Brazil</option>
          <option value="India">India</option>
          <option value="Colombio">Colombio</option>
          <option value="SaudiArabia">Saudi Arabia</option>
        </select>
        <br />
        <br />
        <input className='border w-80 h-14 text-xl' type="text"placeholder='House number and street name' />
        <input className='border w-80 h-14 text-xl mx-3' type='text'placeholder='Apartment,Suit,Unit.(Optional)'/>
        <br />
        <br />
        <input className='border w-80 h-14 text-xl' type="text" placeholder='Town / City' />
        <input className='border w-80 h-14 text-xl mx-3' type="text" placeholder='ZIP Code' />
        <br />
        <br />
        <input className='border w-3/5 h-14 text-2xl ' type="text" placeholder='Phone Number' />
        </form>
      </div>
    </div>
  )
}

export default Payment
