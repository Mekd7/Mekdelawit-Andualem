import '../style.css'
import factor_image from '../images/factory_image.jpg';
import clock_icon from '../images/clock_icon.png';

export default function FirstPageContent(){
    return(
        <>
        <h1 className=' font-[poppins] text-center font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl pt-20 pb-2' >The Future of Manufacturing <br/>with <span className='text-teal-950 '>Latest Technology</span> </h1>
     <p className='text-center'>Expert tech to elevate your manufacturing. Let's take your business further.</p>
     <div className='buttons flex justify-center gap-10 pt-5'>
      <button className='bg-teal-950  rounded border py-2 px-6 rounded-3xl text-white font-semibold'>Get Started</button>
      <button className='rounded border py-2 px-6 rounded-3xl text-teal-950  font-semibold'> Try Demo</button>
     </div>
     <div className='flex justify-center flex-col py-20 gap-6 ml-20 sm:flex-col sm:ml-20 md:ml-0 md:flex-row md:gap-8  '>
        <img src={factor_image} alt="factory's pipe picture" className="w-55 h-auto rounded-3xl shadow-lg md:w-48" />

        <section className='rounded-3xl bg-teal-950  text-white shadow-lg text-center h-48 w-55 mt-15 pt-8  md:mt-23 w-55'>
            <p><span className='text-3xl font-bold '>100+</span> <br/> Our Esteemed <br/>Clinets and <br/>Partners</p>
        </section>

        <section className='rounded-3xl border-white shadow-lg h-28 mt-15 w-55 px-2 py-2 md:mt-43  w-60' >
            <p><span className='font-semibold'>Total Projects 8% </span><br/> <span className='text-3xl font-bold'>1951+</span> <br/> Increase of <span className='text-green-500'>126</span> this month</p>
        </section>

        <section className='bg-teal-100 rounded-3xl shadow-lg h-48 w-55 text-center mt-15 pt-8 md:mt-23 w-55 '>
            <p><span className='text-3xl font-bold ' >6+</span> <br/> Years of <br/> Dedicated <br/> Service</p>
        </section>

        <section className=' w-55 text-white py-3 px-4 font-semibold bg-teal-950  rounded-3xl shadow-lg mt-15 md:w-50 mt-0'>
            <img src={clock_icon} alt="clock_icon_image" className="pt-30 pb-5 w-8 h-auto " />
            <p>Achieve Optimal Efficiency and Boost Productivity</p>
        </section>

    </div>
        </>
    );
}