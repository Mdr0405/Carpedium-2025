import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png"
import blue_wave from "./Vector270.png"
import bottom_wave from "./bottom_wave.png"
function Events(){
return (
<div className="bg-bag-color min-h-screen relative">
   <div className="flex flex-wrap">
  <img src={logoSvg} alt="logo" className="w-[142.34px] h-[68px] pt-[16px] pl-[56px]"/>
  
  
  </div>
  <div className="relative mt-[120px]">
   <img src={blue_wave} alt="wave"
    className="w-full h-auto "/>
 <img src={white_wave} alt="wave" className=" absolute top-0 left-0 w-full h-auto" />
  </div>
  <div>buttons</div>
  <div>cards</div>
  <div className="h-auto bottom-0  "> 
<img src={bottom_wave} className="h-auto w-full "/>
  </div>
</div>
)
}
export default Events