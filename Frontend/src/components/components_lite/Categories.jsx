import React from 'react'
import { Button } from '../ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Category=[
  "Front Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center text-blue-600'>Categories</h1>
      </div>
      <p className='text-center text-gray-600'>Explore our extensive job market.</p>
      <Carousel className="w-full max-w-xl mx-auto my-20">
      <CarouselContent>
      
        {
          Category.map((category,index)=>{
            return <CarouselItem className="md-basis-1/2 lg-basis-2/3">
              <Button>{category}</Button>
            </CarouselItem>
          })
        }
      
      </CarouselContent>
      <CarouselPrevious />
  <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Categories
