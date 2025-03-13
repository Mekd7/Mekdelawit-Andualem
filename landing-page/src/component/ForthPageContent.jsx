import '../style.css';
import { CheckCircleFilled } from '@ant-design/icons';

export default function ForthPageContent(){
    return(
        <div className='bg-black text-white font-[poppins] pt-20 pb-5'>
            <h2 className='text-center text-2xl font-semibold md:text-4xl'>Tailored Plans for Your <br/> Manufacturing Scale</h2>
            <p className='text-center pt-5 pb-15 text-gray-500'>Flexible pricing for any business size.</p>
            <div className='all cards container flex flex-col justify-center w-70 gap-10 md:ml-30 md:w-300  '>
                <div className='two cards container flex flex-col gap-10 ml-10 md:flex-row md:ml-30'>
                    <section className='bg-gray-900 rounded-3xl shadow p-8'>
                        <h3 className='text-2xl'>Starter</h3>
                        <p className='text-gray-400 py-4 '>This package offers the basic features you need to <br/> get started.</p>
                        <p className='text-gray-500 pt-5'><span className='font-semibold text-3xl text-white'>$39</span>/month</p>
                        <button className='rounded border py-2 px-15 mt-8 mb-10 rounded-3xl font-semibold md:px-45'>Get Started</button>
                        <hr className=' md:w-1/1.5 mx-auto '/>
                        

                        <ul>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Production up to 10,000 units per month</li>
                            <li className='py-3' ><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> 24/7 technical support</li>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Access the production dashboard</li>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Initial setup guide</li>
                        </ul>
                    </section>

                    <section className='bg-gray-900 rounded-3xl shadow p-8'>
                        <h3 className='text-2xl'>Enterprise</h3>
                        <p className='text-gray-400 py-4'>This package provides full access to all premium<br/> features.</p>
                        <p className='text-gray-500 pt-5'><span className='font-semibold text-3xl text-white'>$99</span>/month</p>
                        <button className='rounded border py-2 px-15 mt-8 mb-10 rounded-3xl font-semibold md:px-45'>Get Started</button>
                        <hr className='py-2 w-1/1.5 mx-auto '/>
                        

                        <ul>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Unlimited production units</li>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Dedicated account manager</li>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Tailored manufacturing solutions</li>
                            <li className='py-3'><CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} /> Predictive production optimization</li>
                        </ul>
                    </section>

                </div>
                <section className='bg-teal-950 text-center py-8 rounded-3xl shadow w-70 ml-10 mb-20 md:ml-30 md:w-auto'>
                    <h3 className='text-2xl'>Professional</h3>
                    <p className='text-gray-400 py-4'>Designed for greater flexibility, this solution offers<br/> advanced tools for custom tailoring to you needs.</p>
                    <button className=' text-black font-semibold bg-green-300 rounded  py-2 px-10 my-4 rounded-3xl '>Get Strated</button>
                </section>

            </div>
        </div>
    );
}