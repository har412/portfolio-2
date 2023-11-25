import React from 'react'
import { BallCanvas } from "../canvas";
import { tools } from "../../content";
import { styles } from "../styles";


const Stack = () => {
    return (
            <div className='flex flex-col bg-black py-10 relative'>
                <div className={styles.sectionHeadText}>Tools</div>
                <div className='flex flex-row flex-wrap justify-center gap-10 py-10 px-[60px]'>
                    {tools.map((technology) => (
                        <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <h1 className={styles.sectionSubText}>{technology.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Stack