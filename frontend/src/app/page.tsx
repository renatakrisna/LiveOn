import Imagem1 from '../assets/Screenshot_1.png'

export default function Home() {
  return (
    <div className="w-full h-screen flex items-stard">
      <div className='relative w-1/2 h-full flex flex-col'>
      <img src={Imagem1.src} className="w-full h-full object-contain"/>
      </div>
      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col  p-20 justify-between'>
          <h1 className='text-base text-[#060606] font-semibold'>Interactive Brand</h1>

          <div className='w-full flex flex-col'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-base font-semibold text-[#060606]'>Login</h3>
              <p className='text-sm mb-2 text-[#060606]'>Welcome Back! Please enter your details.</p>
            </div>
            <div className='w-full flex flex-col'>
               <input 
               type="email"
               placeholder="Email"
               className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '/>
               <input 
               type="password"
               placeholder="Password"
               className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '/>
            </div>
            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex'>
                <input type='checkbox'/>

              </div>

            </div>
          </div>

          <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Dont have a account?<span className='font-semibold underline underline-offset-2 cursor-pointer '>Sing up for free</span></p>
          </div>
      </div>
    </div>
  )
}
