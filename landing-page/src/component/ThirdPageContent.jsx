import '../style.css';
import rate_pic from '../images/rate_pic.png';
import {}
export default function ThirdPageContent(){
    return(
        <div className='container flex gap-5 justify-center'>
            <div className='bg-gray-200 rounded-2xl p-10 m-15 w-110 h-120 flex justify-center '>
            <img src={rate_pic} alt='rate picture' className='w-100'/>
            </div>

            <section>
                <h2 className='font-[poppins] font-semibold text-4xl pt-20 pb-5'>Key Benefits of Our System for <br/>Your Business Efficiency</h2>
                <p className='text-gray-500 '>Our systems boost productivity, cut costs, and drive business growth.</p>
                <ul>
                    <li>Boosting Quality with Tech</li>
                    <p>With advanced technology, we help you achieve top product quality.<br/>
                    Discover how we can enhance your standards.</p>

                    <li>Optimization Production Process</li>
                    <p>Boost factory efficiency and productivity with our innovative solutions.<br/>
                    See how the latest technology can maximize you output.</p>

                    <li>AI-Driven Production</li>
                    <p>Leverage the power of AI to transform your manufacturing processes.<br/>
                    Achieving faster and more effective results.</p>
                </ul>
            </section>
        </div>
    );
}