import '../style.css'
import brand_pic from '../images/brand_pic.png';
import { LinkedinFilled } from '@ant-design/icons';
import { InstagramFilled, FacebookFilled } from '@ant-design/icons';
import { CopyrightOutlined } from '@ant-design/icons';

export default function Footer(){
    return(
        <div className='bg-black text-white p-15'>
        <div className='container flex gap-20 justify-center md:gap-15'>
            <section className='md:pr-40'>
                <div className='flex'>
                <img src={brand_pic} alt="brand picture" className=" w-12 h-auto rounded-4xl bg-white"/> <h3 className='text-1xl pb-1 pl-2 md:text-2xl'>Prodmast</h3>
                </div>
                <p className='text-gray-400 pt-4 pl-5 md:pl-0'>Our solutions make production<br/>faster and cheaper. Contact us for<br/>more information.</p>
            </section>

            <section className='hidden md:block'>
                <h3 className='font-semibold pb-3'>Company</h3>
                <p className='py-2 text-gray-400'>About Us</p>
                <p className='py-2 text-gray-400'>Customers</p>
                <p className='py-2 text-gray-400'>Newsroom</p>
                <p className='py-2 text-gray-400'>Events</p>
            </section>

            <section className='hidden md:block'>
                <h3 className='font-semibold pb-3'>Industries</h3>
                <p className='py-2 text-gray-400'>Precision Metalforming</p>
                <p className='py-2 text-gray-400'>Industrial Manufacturing </p>
                <p className='py-2 text-gray-400'>High Tec and electronics</p>
                <p className='py-2 text-gray-400'>Aerospace</p>
            </section>

            <section className='hidden md:block'>
                <h3 className='font-semibold pb-3'>Products</h3>
                <p className='py-2 text-gray-400'>Manufacturing Execution System</p>
                <p className='py-2 text-gray-400'>Enterprise Resource Planning </p>
                <p className='py-2 text-gray-400'>Quality Management System</p>
                <p className='py-2 text-gray-400'>Supply Chain Planning</p>
            </section>

            <section>
                <h3 className='font-semibold pb-3'>Get In Touch</h3>
                <p className='py-2 text-gray-400'>hallo@prodmast.com</p>
                <div className='flex flex-col gap-7 md:flex-row '>
                <LinkedinFilled style={{ color: 'white', fontSize: '24px' }} />
                <InstagramFilled style={{ color: 'white', fontSize: '24px' }} />
                <FacebookFilled style={{ color: 'white', fontSize: '24px' }} />
                </div>

                
            </section>
            

        </div>
        <hr className='p-4 mt-8 w-1/1.5 border-gray-400'/>
        <section className='text-white flex flex-col gap-8 md:flex-row gap-5'>
            <div className='flex gap-5 pr-190'>
            <CopyrightOutlined style={{ fontSize: '24px' }} />
            <p className='text-gray-400'>2024 Prodmast, All rights reserved</p>
            </div>
        <p className='text-gray-400'>Terms&Conditions</p>
        <p className='text-gray-400'>Privacy Policy</p>
        </section>
        </div>
        
    );
}