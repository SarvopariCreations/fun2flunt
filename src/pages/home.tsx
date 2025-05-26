import Header from "../component/header";

function Home() {
    return (
        <div className="top-bg">
            <Header />
            <div className="w-full p-6">                
                <div className="font-bold text-[30px] leading-[40px] tracking-[0]">Hey, Camila <span>👋</span></div>
            </div>

            <div className="w-full px-6">
                  <div className="box-border h-[290px] bg-white border border-[#EBEBEB] rounded-[12px]"></div>
            </div>
        </div>
    )
}
export default Home;
