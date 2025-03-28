import '../style.css';
import rate_pic from '../images/rate_pic.png';
import { CheckCircleFilled } from '@ant-design/icons';

export default function ThirdPageContent(){
    return(
        <div className='container flex-rows gap-8 justify-center ml-7 md:flex '>
            <div className='bg-gray-200 rounded-2xl p-10 m-5 w-auto h-auto flex justify-center md: m-15 w-110 h-120'>
            <img src={rate_pic} alt='rate picture' className='w-70 md:w-100'/>
            </div>

            <section className='font-[poppins] p-10 md:p-0'>
                <h2 className=' font-semibold text-3xl pt-20 pb-5 md:text-4xl'>Key Benefits of Our System for <br/>Your Business Efficiency</h2>
                <p className='text-gray-500 '>Our systems boost productivity, cut costs, and drive business growth.</p>
                <ul>
                    <li className='py-2 font-semibold'> <CheckCircleFilled style={{ color: 'teal', fontSize: '20px' }} /> Boosting Quality with Tech</li>
                    <p className='py-2 text-gray-500'>With advanced technology, we help you achieve top product quality.<br/>
                    Discover how we can enhance your standards.</p>

                    <li className='py-2 font-semibold'> <CheckCircleFilled style={{ color: 'teal', fontSize: '20px' }} /> Optimization Production Process</li>
                    <p className='py-2 text-gray-500'>Boost factory efficiency and productivity with our innovative solutions.<br/>
                    See how the latest technology can maximize you output.</p>

                    <li className='py-2 font-semibold'><CheckCircleFilled style={{ color: 'teal', fontSize: '20px' }} /> AI-Driven Production</li>
                    <p className='py-2 text-gray-500'>Leverage the power of AI to transform your manufacturing processes.<br/>
                    Achieving faster and more effective results.</p>
                </ul>
            </section>
        </div>
    );
}