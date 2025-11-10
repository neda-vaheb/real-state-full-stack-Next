import Image from 'next/image'
import React from 'react'

function Calculate() {
  return (
    <div className='container flex md:flex-row flex-col justify-center items-center my-10'>
      <div className='md:w-fit'>
        <Image src="/calculate.svg" alt="calculate" width={600} height={600}/>

      </div>
      <div className='md:w-1/2 flex flex-col gap-4'>
        <h3 className='text-primary font-bold text-xl md:text-2xl md:text-right text-center'>
            محاسبه ی ملک مورد نظرتان 
        </h3>
        <p className='text-center md:text-right'>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود.
        </p>
      </div>
    </div>
  )
}

export default Calculate
