import '../style.css'
import fifth_pic from '../images/fifth_pic.png';
export default function FifthPageContent(){
    return(
        <div className='font-[poppins] flex gap-40 my-20'>
            <section className='mt-30 ml-20'>
                <h2 className='text-4xl font-semibold'>Empowering Top Companies<br/> with Seamless Integrations</h2>
                <p className='text-gray-600 py-8'>Experience seamless connections with our innovative solutions, designed<br/> to effortlessly integrate with your existing systems, enhance productivity,<br/> and drive you business towards greater success. </p>
                <button className=' text-black font-semibold bg-green-300 rounded  py-3 px-6 my-4 rounded-3xl '>Work With Us</button>
            </section>
            <img src={fifth_pic} alt='rate picture' className='my-10 w-130 rounded-3xl'/>
        </div>
    );
}