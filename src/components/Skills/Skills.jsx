import React from 'react'
import { BallCanvas } from "../canvas";
import { technologies } from "../../content";
import { styles } from "../styles";


const Stack = () => {
    return (
            <div className='flex flex-col bg-black py-[60px] relative'>
                <div className={styles.sectionHeadText}>Skills</div>
                <div className='flex flex-row flex-wrap justify-center gap-10 py-10 px-[60px] max-lg:px-[20px]'>
                    {technologies.map((technology) => ( 
                        <div className='w-28 h-28 my-4 mx-2' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <h1 className={styles.sectionSubText}>{technology.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Stack