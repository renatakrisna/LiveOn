import Imagem1 from '../assets/Screenshot_1.png'

export default function Home() {
  return (
    <div className="w-full h-screen flex items-stard">
      <div className='relative w-1/2 h-full flex flex-col'>
      <img src={Imagem1.src} className="w-full h-full object-contain"/>
      </div>
      <div className='w-full h-full bg-[#E0E0E0] flex flex-col p-10'>
          <h1 className='text-base tet-[#060606]'>Brand</h1>
      </div>
    </div>
  )
}
