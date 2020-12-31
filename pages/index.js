import { Navbar, Nav, Form } from 'react-bootstrap';
import Link from 'next/link';
import Svgcomp from '../public/computer.svg';
import Svgchart from '../public/chart.svg';
import Svgvector from '../public/Vector.svg';

export default () => {
  return (
    <div>
      <div className='custom-nav'>
        <Navbar expand='lg' className='appContainer'>
          <Navbar.Brand>
            <img src='/logo.png' alt='' className='max-100' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto ml-auto left-links'>
              <Link href='/about-us'>
              <Nav.Link as="a" href="/about-us">About Us</Nav.Link>
              </Link>
              <Link href='/resources'>
              <Nav.Link as="a" href="/resources">Resources</Nav.Link>
              </Link>
              <Link href='/pricing'>
              <Nav.Link as="a" href='/pricing'>Pricing</Nav.Link>
              </Link>
            </Nav>
            <Form className='nav-link-right d-flex'>
              <Nav.Link className='text-dark'>LOGIN</Nav.Link>

              <Nav.Link className='btn-blue link'>SIGN UP</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className='main-content'>
        <img src='/Vector44.png' alt='' className='right-line' />
        <div className='bg-top'>
          <div className='bg-top-right'>
            <div className='top-section appContainer'>
              <div className='left'>
                <h2>THE NEW STANDARD IN</h2>
                <h1 className='text-blue'>ONLINE QUESTIONNAIRE</h1>
                <p className='text-gray'>
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button className='big btn-blue mt-2'>GET STARTED</button>
              </div>
              <div></div>
            </div>
            <img src='/Vector45.png' alt='' className='bottom-line' />
          </div>
        </div>
        <div className='appContainer'>
          <div className='flex-container row'>
            <div className='col-md-4'>
              <img src='/chat.png' alt='chat' className='chat mb-3' />
              <h3>Lorem Ipsum</h3>
              <p className='text-gray'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text ever since the time
              </p>
            </div>
            <div className='col-md-4'>
              <div className='mb-3'>
                <Svgcomp />
              </div>
              <h3>Lorem Ipsum</h3>
              <p className='text-gray'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text ever since the time
              </p>
            </div>
            <div className='col-md-4'>
              <div className='mb-3'>
                <Svgchart />
              </div>
              <h3>Lorem Ipsum</h3>
              <p className='text-gray'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text ever since the time
              </p>
            </div>
          </div>
        </div>
        <div className='mt-60 appContainer pt-5'>
          <div className='round-blue'>
            <i class='far fa-lightbulb fa-3x text-white'></i>
          </div>
          <h1 className='text-center mt-3'>
            About <span className='deep-yellow'>application</span>
          </h1>
          <p className='text-center f-22'>
            Lorem Ipsum is simply dummy text of the printing and typesetting{' '}
            <br />
            industry.{' '}
            <span className='text-blue'>
              Lorem Ipsum has been the industry's standard
            </span>{' '}
            dummy text
          </p>
        </div>
        <div className='mt-60 appContainer'>
          <h3 className='mb-2'>Lorem Ipsum</h3>
          <p className='text-gray f-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to <br /> make a type specimen book.
          </p>
        </div>
        <div className='appContainer'>
          <div className='mt-5 row align-items-center pdf-section pt-4'>
            <div className='col-md-4 pr-5'>
              <div className='d-flex'>
                <i class='fas fa-arrow-right mr-3 mt-3 text-blue'></i>
                <p className='text-blue'>
                  Send the questionnaire (questionnaire) to the patient by mail
                </p>
              </div>

              <div className='d-flex'>
                <i class='fas fa-arrow-right mr-3 mt-3 text-blue'></i>
                <p className='text-blue'>
                  Сhoose one of five prepared questionnaires
                </p>
              </div>

              <div className='d-flex'>
                <i class='fas fa-arrow-right mr-3 mt-3 text-blue'></i>
                <p className='text-blue'>
                  Аutomatically calculates the results of the questionnaire
                </p>
              </div>

              <div className='d-flex'>
                <i class='fas fa-arrow-right mr-3 mt-3 deep-yellow'></i>
                <p className='deep-yellow'>
                  Download PDF questionnaire results
                </p>
              </div>
            </div>
            <div className='col-md-8 fade-shadow pt-5 pl-5 pr-5 pb-3'>
              <h3 className='text-center'>
                Download PDF questionnaire results
              </h3>
              <img src='/pdfImage2.png' alt='' className='w-100' />
              <p className='f-22 f-bolder text-center mt-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br /> industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
          </div>
        </div>
        <div className='bg-rect'>
          <div className='bg-left'>
            <div className='appContainer'>
              <div className='advantages mt-10 row align-items-center pb-4'>
                <div className='col-md-6 pr-5 pt-5'>
                  <img
                    src='/dashboard.png'
                    alt=''
                    className='w-100 fade-shadow'
                  />
                </div>
                <div className='col-md-6 pl-5'>
                  <h1>How the application works and our Advantages</h1>

                  <p className='f-20 text-gray mt-4'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <span className='text-blue'>
                      {' '}
                      Lorem Ipsum has been the industry's standard{' '}
                    </span>
                    dummy text ever since the 1500s, when an unknown unknown
                    type and make a type specimen book.
                  </p>
                  <p className='f-20 text-gray mt-4'>
                    Lorem Ipsum is simply dummy printer took a galley of when
                    text of the printing and typesetting industry
                  </p>
                  <h5 className='text-blue mt-5 '>
                    LEARN MORE
                    <i class='fas fa-arrow-right ml-2'></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='line-right'>
          <div className='mt-80 pt-5 appContainer'>
            <h1 className='mb-5 text-center'>More about application</h1>
            <div className='row'>
              <div className='col-md-4 pl-4 pr-4 fade-shadow bg-white'>
                <img src='/MaskGroup2.png' alt='' className='w-100' />
                <h3 className='mt-4'>Lorem Ipsum is simply</h3>
                <p className='text-gray f-17'>
                  Lorem Ipsum is simply dummy printer took a galley of when text
                  of the printing and typesetting industry
                </p>
              </div>
              <div className='col-md-4 pl-4 pr-4 fade-shadow bg-white'>
                <img src='/MaskGroup3.png' alt='' className='w-100' />
                <h3 className='mt-4'>Lorem Ipsum is simply</h3>
                <p className='text-gray f-17'>
                  Lorem Ipsum is simply dummy printer took a galley of when text
                  of the printing and typesetting industry
                </p>
              </div>
              <div className='col-md-4 pl-4 pr-4 fade-shadow bg-white'>
                <img src='/MaskGroup4.png' alt='' className='w-100' />
                <h3 className='mt-4'>Lorem Ipsum is simply</h3>
                <p className='text-gray f-17'>
                  Lorem Ipsum is simply dummy printer took a galley of when text
                  of the printing and typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='line-left'>
          <div className='appContainer minus-margin'>
            <div className='row'>
              <div className='col-md-7 bg-blue d-flex align-items-center justify-content-center'>
                <div className='content-left'>
                  <h1 className='mb-4 text-white f-40'>Сall to action!</h1>
                  <p className='text-white f-20'>
                    Lorem Ipsum is simply printing.
                    <span className='text-dark'> Lorem Ipsum is simply </span>
                    dummy text of the printing and typesetting Lorem Ipsum is
                    simply printing.
                  </p>
                  <button className='big btn-blue mt-2 border border-white'>
                    CREATE AN ACCOUNT
                  </button>
                  <div className='arrow-left'>
                    <Svgvector />
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <img src='/MaskGroup5.png' alt='' className='w-100' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-60'>
          <div className='footer-top-wrap'>
            <footer className='login appContainer'>
              <Link href='/about-us'>About PsyVey</Link>
              <Link href='/resources'>Resources</Link>
              <Link href='/pricing'>Pricing</Link>
              <Link href='/privacy'>Privacy Policy</Link>
              <a>Contact@psycey.co</a>
              <div className='social-icons'>
                <a>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a>
                  <i class='fab fa-linkedin-in'></i>
                </a>
                <a>
                  <i class='fab fa-instagram'></i>
                </a>
              </div>
            </footer>
          </div>
          <div className='footer-bottom-wrap'>
            <footer className='footer-bottom appContainer'>
              <img src='/logo-footer.png' alt='' className='max-100' />
              <span>
                Copyright PsyVey 2020. All Rights Reserved - PsyVey is a product
                developed and managed by P. Jackson & Associates LLC
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
