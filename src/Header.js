import userEvent from '@testing-library/user-event';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
function Header()
{
  const history = useHistory();
    const user=JSON.parse(localStorage.getItem('user-info'));
    function logout(){
      localStorage.clear();
      history.push('./register')
    }
    return(
        <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto nav_bar_wrapper">
      {
        localStorage.getItem('user-info') ?
        <>
         <Link to ="/" className="headerLink">Product List</Link>

         <Link to ="/add" className="headerLink">Add Product </Link>
         <Link to ="/update" className="headerLink">Update Product</Link>
         <Link to ="/search/" className="headerLink">Search Product</Link>
        </>
        :
        <>
         <Link to ="/login" className="headerLink">Login</Link>
         <Link to ="/register"className="headerLink">Register</Link>
        </>
      }  
    </Nav> 
    {localStorage.getItem('user-info') ?
    <Nav className="float-right">
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </NavDropdown>
    </Nav> 
    :
    null
    }
  </Navbar>

  </div>
    )
}

export default Header ;