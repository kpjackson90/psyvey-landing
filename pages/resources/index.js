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
      <div className='resources-top'>
        <div className='pt-80 appContainer'>
          <h1 className='text-center'>RESOURCES</h1>
          <p className='f-bolder f-20 mt-4 text-center'>
            Lorem Ipsum is simply dummy text of the printing and <br />{' '}
            typesetting industry
          </p>
        </div>
      </div>

      <div className='bg-left-resources'>
        <div className='appContainer'>
          <div className='advantages row align-items-center pb-4 minus-margin'>
            <div className='col-md-6 pr-5'>
              <img src='/MaskGroup7.png' alt='' className='w-100' />
            </div>
            <div className='col-md-6 pl-5'>
              <h1>What is Lorem Ipsum?</h1>

              <p className='f-20 text-gray mt-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span className='text-blue'>
                  {' '}
                  Lorem Ipsum has been the industry's standard{' '}
                </span>
                dummy text ever since the 1500s, when an unknown unknown type
                and make a type specimen book.
              </p>
              <p className='f-20 text-gray mt-4'>
                Lorem Ipsum is simply dummy printer took a galley of when text
                of the printing and typesetting industry
              </p>

              <p className='f-20 text-gray mt-4'>
                Lorem Ipsum is simply dummy printer took a galley of when text
                of the printing and typesetting industry
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-60 appContainer'>
        <div className='round-blue'>
          <i class='fas fa-book fa-3x text-white'></i>
        </div>
        <h3 className='text-bolder mt-3 text-center'>
          Long <span className='deep-yellow'>established fact</span>
        </h3>
        <h3 className='mt-5 text-bolder'>
          It is a long established fact that a reader
        </h3>

        <p className='f-20 text-gray mt-4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <span className='text-blue'>
            {' '}
            Lorem Ipsum has been the industry's <br /> standard{' '}
          </span>
          dummy text ever since the 1500s, when an unknown unknown type and make
          a type specimen book.
        </p>
      </div>

      <div className='appContainer'>
        <div className='mt-5 row align-items-center'>
          <div className='col-md-5'>
            <p className='text-gray mb-3 f-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown unknown type and make a type
              specimen book. ummy text ever since the 1500s, when an unknown
              unknown type and make a type specimen book
            </p>
            <p className='text-gray f-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className='col-md-7'>
            <img
              src='/aggression.png'
              alt=''
              className='w-100 max-400 fade-shadow'
            />
          </div>
        </div>
      </div>

      <div className='appContainer'>
        <div className='mt-5 row align-items-center'>
          <div className='col-md-5 mr-auto'>
            <img src='/dashboard.png' alt='' className='w-100 max-400' />
            <img
              src='/MaskGroup3.png'
              alt=''
              className='w-100 max-300 img-overlay fade-shadow'
            />
          </div>
          <div className='col-md-5 ml-auto'>
            <h3 className='mb-4'>Advantages</h3>
            <p className='text-gray mb-3 f-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown unknown type and make a type
              specimen book. ummy text ever since the 1500s, when an unknown
              unknown type and make a type specimen book
            </p>
            <p className='text-gray f-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
      </div>

      <div className='mt-80 appContainer'>
        <h3 className='bolder text-center'>Fact that a reader</h3>
        <p className='f-20 text-gray mt-4 text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <span className='text-blue'>
            {' '}
            Lorem Ipsum has <br /> been the industry's standard{' '}
          </span>
          dummy text ever since the 1500s, when an unknown <br /> type and make
          a type specimen book.
        </p>
        <div className='mt-5 row'>
          <div className='col-md-3 bg-1 pl-3 pr-5 pt-4'>
            <div className='number'>
              <span className='text-dark'>1</span>
            </div>
            <h5 className='text-white mt-4'>Lorem Ipsum is simply</h5>
            <p className='text-white mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='col-md-3 pl-3 pr-5 pt-4 bg-23'>
            <div className='number'>
              <span className='text-dark'>2</span>
            </div>
            <h5 className='text-white mt-4'>Lorem Ipsum is simply</h5>
            <p className='text-white mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='col-md-3 pl-3 pr-5 pt-4 bg-23'>
            <div className='number'>
              <span className='text-dark'>3</span>
            </div>
            <h5 className='text-white mt-4'>Lorem Ipsum is simply</h5>
            <p className='text-white mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='col-md-3 pl-3 pr-5 pt-4 bg-4'>
            <div className='number'>
              <span className='text-dark'>4</span>
            </div>
            <h5 className='text-white mt-4'>Lorem Ipsum is simply</h5>
            <p className='text-white mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
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
