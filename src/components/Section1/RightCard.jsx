import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
    console.log(props.color)
  return (
    <div  className='h-full shrink-0 overflow-hidden w-72 relative rounded-4xl'>
        <img className=' h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent  intro={props.intro} color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
