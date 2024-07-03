import { RevenueCard } from "./components/RevenueCard"
function App() {

  return <div className="grid  grid-cols-12 gap-2 p-2">
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
    <RevenueCard
      title={"Amount pending"} 
      amount={"8,23,34.23"} 
      orderCount={true}
      count={13}></RevenueCard>
    </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
    <RevenueCard
      title={"Amount pending"} 
      amount={"8,23,34.23"} 
      orderCount={true}
      count={13}></RevenueCard>
    </div>
    <div className="col-span-12 sm:col-span-12 md:col-span-4">
    <RevenueCard
      title={"Amount pending"} 
      amount={"8,23,34.23"} 
      orderCount={true}
      count={13}></RevenueCard>
    </div>
  </div>

  // return <div>
  //   <div className='text-center'>CSS code</div>
  //   <div style={{display:"flex", justifyContent:'space-between'}}>
  //     <div style={{backgroundColor:"red"}}>Red</div>
  //     <div style={{backgroundColor:"green"}}>Green</div>
  //     <div style={{backgroundColor:"blue"}}>Blue</div>
  //   </div>  

  //   <br></br>
  //   <div className="text-center">Tailwind code</div>
  //   <br></br>
  //   <div className="text-center">FLEX</div>
  //   <div className='flex justify-between'>
  //     <div className='bg-red-500'>Red</div>
  //     <div className='bg-green-500'>Green</div>
  //     <div className='bg-blue-500'>Blue</div>
  //   </div>

  //   <br></br>
  //   <div className="text-center">GRID</div>
  //   <div className='grid grid-cols-2 sm:grid-cols-3'>
  //     <div className='bg-red-500'>Red</div>
  //     <div className='bg-green-500'>Green</div>
  //     <div className='bg-blue-500'>Blue</div>
  //   </div>

  //   <br></br>
  //   <div className="text-center">Different width</div>
  //   <div className='grid grid-cols-12 gap-2'>
  //     <div className='col-span-4 bg-red-500'>Red</div>
  //     <div className='col-span-6 bg-green-500'>Green</div>
  //     <div className='col-span-2 bg-blue-500'>Blue</div>
  //   </div>

  //   <br></br>
  //   <div className="text-center">Responsiveness</div>
  //   <div className='grid grid-cols-12 gap-2'>
  //     <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-red-500'>Red</div>
  //     <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-green-500'>Green</div>
  //     <div className='col-span-12 md:col-span-12 lg:col-span-4 bg-blue-500'>Blue</div>
  //   </div>



  // </div>
}

export default App
