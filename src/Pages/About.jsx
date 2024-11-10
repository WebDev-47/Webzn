import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'



const About = () => {
  return (
    <div>
        <div className=' text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className=' my-10 flex flex-col md:flex-row gap-16'>
          <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis explicabo ducimus amet ad alias distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex illo perferendis similique facilis ipsa, iusto distinctio laborum. Dolorum, voluptatum tenetur. Dicta laboriosam aspernatur quos beatae, quisquam labore, repellat laborum voluptates numquam provident est eius?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas architecto consequatur, ullam tenetur dolorum asperiores distinctio quos voluptas quo, unde voluptatem adipisci minus porro molestias itaque illum aliquid tempora?</p>
          <b className=' text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic inventore, dolorem magnam earum aliquid. Animi debitis a facere facilis.</p>
          </div>
        </div>
          <div className=' text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
          </div>

          <div className=' flex flex-col md:flex-row text-sm mb-20'>
            <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quaulity Assurance:</b>
              <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis at inventore iusto molestias ipsum cupiditate quidem ex? Iste iusto dolore odio in minus veritatis similique culpa magni dolores ipsa? Veritatis, architecto vitae necessitatibus modi dignissimos nobis assumenda animi ipsa.</p>
            </div>

            <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis at inventore iusto molestias ipsum cupiditate quidem ex? Iste iusto dolore odio in minus veritatis similique culpa magni dolores ipsa? Veritatis, architecto vitae necessitatibus modi dignissimos nobis assumenda animi ipsa.</p>
            </div>

            <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className=' text-gray-600'>Our team of dedicated proffessionals is here to a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis at inventore iusto molestias ipsum cupiditate quidem ex? Iste iusto dolore odio in minus veritatis similique culpa magni dolores ipsa? Veritatis, architecto vitae necessitatibus modi dignissimos nobis assumenda animi ipsa.</p>
            </div>
          </div>

          <NewsletterBox />

    </div>
  )
}

export default About