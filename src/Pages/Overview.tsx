import { FC } from 'react';

export const Login: FC = () => {
    return <div className="overview">Login</div>;
};

export const Overview: FC = () => {
    return <div className="overview">
        <table className=" table table-sm table-dark">
  <thead >
    <tr>
      <th  scope ="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
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
</table>
    </div>;
};

export const Shop: FC = () => {
    return <div className="overview">Shop</div>;
};

export const Supplier: FC = () => {
    return <div className="overview">Supplier</div>;
};

export const Agent: FC = () => {
    return <div className="overview">Agent</div>;
};

export const History: FC = () => {
    return <div className="overview">History</div>;
};

export const Report: FC = () => {
    return <div className="overview">Reports</div>;
};