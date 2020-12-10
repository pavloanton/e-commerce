import Table from 'react-bootstrap/Table'
import ButtonQL from '../Button/Button'

const EmptyCart = () => {

    return (
        <div>
          <Table responsive="sm" variant="dark" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>There are no Items in your cart.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><ButtonQL content={"RETURN TO HOME"} path={"/"}></ButtonQL></td>
              </tr>
            </tbody>
          </Table>
        </div>
    )
}

export default EmptyCart