import React from 'react'
import { Menu, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Menu borderless center="true" size="massive" id="navbar">
          <Menu.Menu>
            < Menu.Item
              as={Link}
              name="home"
              to="/"
              content="home"
            />
            < Menu.Item
              as={Link}
              name="calendar"
              to="/calendar"
              content="performances"
            />
            < Menu.Item
              as={Link}
              name="media"
              to="/media"
              content="media"
            />
            < Menu.Item
              as={Link}
              name="pictures"
              to="/pictures"
              content="pictures"
            />
            < Menu.Item
              as={Link}
              name="contact"
              to="/contact"
              content="contact"
            />
          </Menu.Menu>
        </Menu>
        <Divider hidden />
      </div>
    )
  }
}

export default Navbar
