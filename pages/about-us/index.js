import { Navbar, Nav, Form } from 'react-bootstrap';

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
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Resources</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
            <Form className='nav-link-right d-flex'>
              <Nav.Link className='text-dark'>LOGIN</Nav.Link>

              <Nav.Link className='btn-blue link'>SIGN UP</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='mt-80 appContainer'>
        <h1 className='text-center'>ABOUT US</h1>
        <p className='f-bolder f-20 mt-4 text-center'>
          Lorem Ipsum is simply dummy text of the printing and <br />{' '}
          typesetting industry
        </p>
      </div>

      <div className='mt-80 appContainer'>
        <h3 className='mb-4'>Description of the Company</h3>
        <div className='row'>
          <div className='col-md-6'>
            <p className='text-gray f-17 mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown unknown type and make a type
              specimen book. ummy text ever since the 1500s, when an unknown
              unknown type and make a type specimen book.
            </p>
            <p className='text-gray f-17'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className='col-md-6'>
            <p className='text-gray f-17 mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <p className='text-gray f-17'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown unknown type and make a type
              specimen book. ummy text ever since the 1500s, when an unknown
              unknown type and make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-60 appContainer'>
        <h3 className='mb-3 text-center'>
          Services: Lorem Ipsum is simply dummy
        </h3>
        <p className='text-gray f-17 text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <span className='text-blue'>
            Lorem Ipsum has been the industry's <br /> standard
          </span>
          dummy text ever since the 1500s, when an unknown unknown type and make
          a type specimen book.
        </p>
      </div>
      <div className='bg-right'>
        <div className='appContainer'>
          <div className=' mt-5 row align-items-center'>
            <div className='col-md-6'>
              <div className='d-flex'>
                <div className='number mr-2'>1</div>
                <p className='f-17'>
                  Lorem Ipsum is simply dummy text of the printing <br /> and
                  typesetting industry.
                </p>
              </div>
              <div className='d-flex'>
                <div className='number mr-2'>2</div>
                <p className='f-17'>
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s
                </p>
              </div>
              <div className='d-flex'>
                <div className='number mr-2'>3</div>
                <p className='f-17'>
                  When an unknown unknown type and make a <br /> type specimen
                  book.
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <img
                src='/landing.png'
                alt=''
                className='w-100 ml-3 mw-400 fade-shadow'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='appContainer'>
        <div className='mt-5 row align-items-center'>
          <div className='col-md-5 mr-auto'>
            <img src='/MaskGroup6.png' alt='' className='w-100 max-400' />
          </div>
          <div className='col-md-6 ml-auto'>
            <h3 className='mb-4'>Advantages</h3>
            <p className='text-gray mb-3 f-17'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown unknown type and make a type
              specimen book. ummy text ever since the 1500s, when an unknown
              unknown type and make a type specimen book
            </p>
            <p className='text-gray f-17'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
      </div>
      <div className='mt-60'>
        <div className='footer-top-wrap'>
          <footer className='login appContainer'>
            <a>About PsyVey</a>
            <a>Resources</a>
            <a>Pricing</a>
            <a to='/privacy'>Privacy Policy</a>
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
  );
};
