import '../style.css'
import { LineChartOutlined } from '@ant-design/icons';
import { CodeSandboxOutlined } from '@ant-design/icons';
import { ShieldOutlined } from '@ant-design/icons';
import { ToolOutlined } from '@ant-design/icons';

export default function SecondPageContent(){
    return(
        <div className='bg-teal-950 text-white font-[poppins]'>
            <h2 className=' text-center font-semibold text-4xl pt-20 pb-2'>Efficient and Integrated <br/> Manufacturing Services</h2>
            <p className=' text-center'>Simplify operations with our efficient, quality-focused services.</p>
            <div className='cards container pt-10 grid grid-cols-3 gap-10 ml-30 pb-20 '>
                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                    <h3 className='font-semibold text-2xl pt-30'>Prodcution and Assembly</h3>
                    <p>Details on production processes, assembly, capacity, and product types.</p>
                </section>

                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                    <h3 className='font-semibold text-2xl pt-30'>Custom Manufacturing</h3>
                    <p>Custom product creation with design and customization options.</p>
                </section>

                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                <ToolOutlined style={{ fontSize: '24px', color: 'white' }} />
                    <h3 className='font-semibold text-2xl pt-30'>Quality Control</h3>
                    <p>Procedures and systems in place to ensure high product quality.</p>
                </section>

                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                    <ShieldOutlined style={{ fontSize: '24px', color: 'white' }} />
                    <h3 className='font-semibold text-2xl pt-30'>Technology and Innovation</h3>
                    <p>Details on the latest manufacturing technologies and ongoing innovations.</p>
                </section>

                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                <CodeSandboxOutlined style={{ fontSize: '40px', color: 'white' }} />
                    <h3 className='font-semibold text-2xl pt-11'>Packaging and Logistics</h3>
                    <p className='pt-2'>Packaging and logistics for shipping to customers and distributors. </p>
                </section>

                <section className='p-8 rounded-2xl shadow bg-teal-900 bg-opacity-50 h-70'>
                <LineChartOutlined style={{ fontSize: '40px', color: 'white' }} />
                    <h3 className='font-semibold text-2xl pt-10'>Consulting Market Research</h3>
                    <p>Services to help companies understand market needs and provide strategic advice.</p>
                </section>
            </div>
        </div>
    )
}