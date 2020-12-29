import React from "react"


export const tableBasic = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableBasic extends React.Component {
    render() {
      return  (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableBasic
  `}
    </code>
  </pre>
)

export const tableInverse = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableInverse extends React.Component {
    render() {
      return  (
        <Table responsive dark>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      )
    }
  }
  export default TableInverse
  `}
    </code>
  </pre>
)

export const tableHeadOption = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableHeadOption extends React.Component {
    render() {
      return  (
        <Table responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableHeadOption
  `}
    </code>
  </pre>
)

export const tableHoverAnimation = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableHoverAnimation extends React.Component {
    render() {
      return  (
        <Table className="table-hover-animation" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableHoverAnimation
  `}
    </code>
  </pre>
)

export const tableStriped = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableStriped extends React.Component {
    render() {
      return  (
        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableStriped
  `}
    </code>
  </pre>
)

export const tableStripedDark = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableStripedDark extends React.Component {
    render() {
      return  (
        <Table striped dark responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableStripedDark
  `}
    </code>
  </pre>
)

export const tableBordered = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableBordered extends React.Component {
    render() {
      return  (
        <Table bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableBordered
  `}
    </code>
  </pre>
)

export const tableBorderless = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableBorderless extends React.Component {
    render() {
      return  (
        <Table borderless responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableBorderless
  `}
    </code>
  </pre>
)

export const tableHover = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableHover extends React.Component {
    render() {
      return  (
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableHover
  `}
    </code>
  </pre>
)

export const tableContextual = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableContextual extends React.Component {
    render() {
      return  (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          <tr className="table-active">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr className="table-success">
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr className="table-info">
            <th scope="row">4</th>
            <td>Adam</td>
            <td>the adam</td>
            <td>@adam</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">5</th>
            <td>Jennifer</td>
            <td>the jennifer</td>
            <td>@instagram</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">6</th>
            <td>Rick</td>
            <td>the rick</td>
            <td>@facebook</td>
          </tr>
          <tr className="table-light">
            <th scope="row">7</th>
            <td>Ellie</td>
            <td>the ellie</td>
            <td>@twitter</td>
          </tr>
          <tr className="table-dark">
            <th scope="row">8</th>
            <td>Lana</td>
            <td>the lana</td>
            <td>@instagram</td>
          </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableContextual
  `}
    </code>
  </pre>
)

export const tableResponsive = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import { Table } from "reactstrap"

  class TableResponsive extends React.Component {
    render() {
      return  (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      )
    }
  }
  export default TableResponsive
  `}
    </code>
  </pre>
)
