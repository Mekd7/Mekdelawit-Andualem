import '../style.css'
import fifth_pic from '../images/fifth_pic.png';
export default function FifthPageContent(){
    return(
        <div className='font-[poppins] flex flex-col gap-40 my-20 md:flex-row'>
            <section className='mt-30 ml-10 px-2 md:ml-20 px-0'>
                <h2 className='text-3xl font-semibold md:text-4xl'>Empowering Top Companies<br/> with Seamless Integrations</h2>
                <p className='text-gray-600 py-8'>Experience seamless connections with our innovative solutions, designed<br/> to effortlessly integrate with your existing systems, enhance productivity,<br/> and drive you business towards greater success. </p>
                <button className=' text-black font-semibold bg-green-300 rounded  py-3 px-6 my-4 rounded-3xl '>Work With Us</button>
            </section>
            <img src={fifth_pic} alt='rate picture' className='w-70 ml-8 rounded-3xl md:my-10 md:w-130 ml-0'/>
        </div>
    );
}