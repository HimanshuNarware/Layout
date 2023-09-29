import logo from '../image/logo.png'
import {IoMdMenu} from 'react-icons/io'
import '../index.css'
function Navbar() {
  return (
    <div >
<nav className=" nav flex ms-28 justify-between w-5/6   m-8">
    <div className="left-row text-xl font-semibold mt-1 flex gap-2">
        <img className='-mt-1 w-9 h-9' src={logo} alt="logo-igm" />
        TECH</div>
        <div className="nav-link md:static absolute bg-transparent md:min-h-fit min-h-[60v vh] left-0  top-[-100%] md:w-auto   w-full flex   items-center px-5">

        
<div className="  flex gap-10 mt-2 md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8 ">
    <div className="text-gray-600 hover:text-gray-400">Solution</div>
    <div className="text-gray-600 hover:text-gray-400">Servies</div>
    <div className="text-gray-600 hover:text-gray-400">About</div>
    <div className="text-gray-600 hover:text-gray-400">Culture</div>
</div>
</div>
    <div className="right-row flex gap-3">
        <div className=" bg-zinc-900  text-cyan-50 py-2 px-4 rounded-full text- -mt-2 hover:bg-zinc-800 ">Contact us</div>
        <div className=" bg-zinc-900  text-cyan-50 py-2 px-4 rounded-full text- -mt-2 hover:bg-zinc-800 "> &rarr;</div>
        <div className='text-3xl cursor-pointer md:hidden' onClick={handleClick} >{<IoMdMenu/>}</div>
    </div>
</nav>
    </div>
  )
}
// ?const click=useRef<HTMLDivElement>(null);
const click=document.querySelector('.nav-link')
function handleClick(){
    click?.classList.toggle('top-[9%]')
    // alert("clicked")

}


export default Navbar
