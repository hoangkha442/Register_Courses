import { Col, Row } from 'antd'
import React from 'react'

export default function FooterDesktop() {
  return (
    <Row gutter={52} className=''>
          <Col lg={7}>
            <div className="logo mt-4 mb-5">
              <p className='font-bold text-xl text-[#585757]'>COURSEPLUS</p>
            </div>
            <div className="text-[#727374] text-[14px] font-[500] tracking-wider">
            209, Nguyen Van Luong, GoVap, HCM
            </div>
            <div className="text-[#727374] text-[14px] font-[500] tracking-wider mt-3">
              Call us: <span className='text-[#585757] text-base'>(+01) 202 342 6789</span>
            </div>
          </Col>
          <Col lg={5}>
            <p className='text-[16px] font-bold text-[#585757]  mt-4'>Resources</p>
            <ul className='text-[#727374] text-[14px] font-[500]  tracking-wider mt-5'>
              <li><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">About CoursePlus</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Contact Us</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Forums</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Blog</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Help Center</a></li>
            </ul>
          </Col>
          <Col lg={5}>
              <p className='text-[16px] font-bold text-[#585757]  mt-4'>Products</p>
              <ul className='text-[#727374] text-[14px] font-[500]  tracking-wider mt-5'>
                <li><a  className='transition-all duration-700 hover:text-[#dcf836]' href="https://capstone-movie-one.vercel.app/">MovieCapstone</a></li>
                <li className='mt-1'><a  className='transition-all duration-700 hover:text-[#dcf836]' href="https://register-courses.vercel.app/">RegisterCourse</a></li>
              </ul>
          </Col>
          <Col lg={7}>
              <p className='text-[16px] font-bold text-[#585757]  mt-4'>CoursePlus EDUCATION TECHNOLOGY JOINT STOCK COMPANY</p>
              <ul className='text-[#727374] text-[14px] font-[500]  tracking-wider mt-5'>
                <li><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Tax code: 01099256322
</a></li>
                <li className='mt-1'><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Established date: 08/08/2023</a></li>
                <li className='mt-1'><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Areas: Technology, education, programming. CoursePlus builds and develops products that bring value to the community.</a></li>
              </ul>
          </Col>
    </Row>
  )
}
