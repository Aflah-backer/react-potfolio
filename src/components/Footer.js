import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/a.gif'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/twitter.svg'
import navIcon3 from '../assets/img/github.svg'


export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <MailchimpForm/>
                <Col size={12} sm={6}>
                    <img className='img-footer' src={logo} alt='Logo' />
                </Col>
                <Col size={12} sm={6} className='text-center text-sm-end'>
                    <div className="social-icon" style={{marginTop:"6.5rem"}}>
                        <a href="https://www.linkedin.com/in/aflah-backer-ak-95825220b/" target="_blank"><img src={navIcon1} /></a>
                        <a href="https://twitter.com/aflah_backer_ak" target="_blank"><img src={navIcon2} /></a>
                        <a href="https://github.com/Aflah-backer" target="_blank"><img src={navIcon3} /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
