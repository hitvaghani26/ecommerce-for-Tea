import { kettle } from '@/assets/photo/index'
import { motion } from "framer-motion";

import React from 'react'
type TeaPointsType = {
    title: string;
    description: string;
};
const fadeinanimationfromLeft = {
    intial2:{
        
            opacity: 0,
            x: 200,
        
    },
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,

        x: 0,
        transition:{
            delay:1,
            duration: .4
        }
    }
}

const KettleScetion: React.FC = () => {


    const teaProducts: TeaPointsType[] = [
        {
            title: "Assam Full Leaf Tea",
            description: "Rich and robust, our Assam full leaf tea offers a bold flavor profile, handpicked for an elevated tea experience."
        },
        {
            title: "Jasmine Citrus Green Tea",
            description: "Experience the refreshing blend of finest green tea leaves with subtle hints of jasmine and citrus for an invigorating cup."
        },
        {
            title: "Chai Spice Infusion",
            description: "Indulge in the warmth of cinnamon, cardamom, and cloves with our comforting chai spice infusion, WooCommerce compatible."
        },
        {
            title: "Chamomile Relaxation Tea",
            description: "Unwind with our herbal chamomile tea, sourced from the finest flowers for a soothing and calming experience."
        },
        {
            title: "Earl Grey Infographic Blend",
            description: "Elevate your tea ritual with premium black tea infused with bergamot oil, offering a timeless and elegant flavor profile."
        },
        {
            title: "Vanilla Rooibos Indulgence",
            description: "Savor the smoothness of South African rooibos tea with sweet vanilla notes for a decadent and satisfying experience."
        }
    ];

    const firstThreeTeaPoints = teaProducts.slice(0, 3);
    const nextThreeTeaPoints = teaProducts.slice(3, 6);



    return (
        <div className="bg-gray-50 w-full flex justify-center items-center ">
            <div className='Kettle-section flex justify-center items-center max-w-[1440px] w-full py-32'>
                <div className='Kettle-body w-10/12 '>
                    <div className=' ' >
                        <section className="flex flex-wrap justify-center items-center ">
                            <div className='kettle-body-text-1 w-0 md:w-1/3 hidden lg:block'>
                                <div className='hidden md:block'>
                                    {firstThreeTeaPoints.map((element: TeaPointsType) => (
                                        <motion.div className='text-right'
                                            variants={fadeinanimationfromLeft} 
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={
                                                {once:true}
                                            }>
                                            <h4 className='font-semibold font-Signika md:text-xl text-lg'>

                                                {element.title}
                                            </h4>
                                            <p className='pt-2 pb-10 pr-1 font-openSans md:text-base text-sm'> {element.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className='Kettle-body-image p-8 md:p-8 w-0 lg:w-1/3 md:w-1/2 sm:w-1/2' >
                                <img src={kettle} className=' rounded-3xl'></img>
                            </div>
                            <div className='kettle-body-text-2  lg:w-1/3 md:w-1/2 sm:w-1/2 '>
                                <div className='block lg:hidden'>
                                    {firstThreeTeaPoints.map((element: TeaPointsType) => (
                                        <motion.div className='text-left'variants={fadeinanimationfromLeft} 
                                        initial="intial2"
                                        whileInView="animate"
                                        viewport={
                                            {once:true}
                                        } >
                                            <h4 className='font-semibold font-Signika md:text-xl text-lg'>

                                                {element.title}
                                            </h4>
                                            <p className='pt-2 pb-10 pr-1 font-openSans md:text-base text-sm'> {element.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div>
                                    {nextThreeTeaPoints.map((element: TeaPointsType) => (
                                        <motion.div className='text-left'
                                        variants={fadeinanimationfromLeft} 
                                            initial="intial2"
                                            whileInView="animate"
                                            viewport={
                                                {once:true}
                                            } >
                                            <h4 className='font-semibold font-Signika md:text-xl text-lg'>

                                                {element.title}
                                            </h4>
                                            <p className='pt-2 pb-10 pr-1 font-openSans md:text-base text-sm'> {element.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>


                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KettleScetion