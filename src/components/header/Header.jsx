import { Navbar, Container } from "react-bootstrap"

export const Header = () => {
    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <h1 className="text-danger">User Random</h1>
        </Container>
      </Navbar>
    )
}