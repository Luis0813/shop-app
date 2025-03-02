import {
  Home,
  Login,
  Help,
  Logout,
  Contact,
  Filter,
} from '../../components/Icons';
export const Sidebar = ({ setFilter }) => {
  return (
    <>
      <nav className='main-menu'>
        <div className='scrollbar' id='style-1'>
          <ul>
            <li>
              <a href='http://startific.com'>
                <i className='fa'>
                  <Home />
                </i>
                <span className='nav-text'>Home</span>
              </a>
            </li>
            <li>
              <a href='http://startific.com'>
                <i className='fa'>
                  <Login />
                </i>
                <span className='nav-text'>Login</span>
              </a>
            </li>
            <li>
              <a href='http://startific.com'>
                <i className='fa'>
                  <Contact />
                </i>
                <span className='nav-text'>Contact</span>
              </a>
            </li>
            <li>
              <a href='http://startific.com'>
                <i className='fa'>
                  <Filter />
                </i>
                <span className='nav-text'>Filter</span>
              </a>
            </li>
            <li className='darkerlishadow'>
              <a href='http://startific.com'>
                <i className='fa '></i>
                <span className='nav-text'>News</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa '></i>
                <span className='nav-text'>Technology</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa fa-plane fa-lg'></i>
                <span className='nav-text'>Travel</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa'></i>
                <span className='nav-text'>Shopping</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa '></i>
                <span className='nav-text'>Film & Music</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa '></i>
                <span className='nav-text'>Web Tools</span>
              </a>
            </li>
            <li className='darkerli'>
              <a href='http://startific.com'>
                <i className='fa'></i>
                <span className='nav-text'>Art & Design</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='http://startific.com'>
                <i className='fa '>
                  <Help />
                </i>
                <span className='nav-text'>Help</span>
              </a>
            </li>
          </ul>
          <ul className='logout'>
            <li>
              <a href='http://startific.com'>
                <i className='fa fa-lightbulb-o fa-lg'>
                  <Logout />
                </i>
                <span className='nav-text'>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
