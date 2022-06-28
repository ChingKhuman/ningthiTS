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

export const Users: FC = () => {
    return <div className="overview">Users</div>;
};

export const Revenue: FC = () => {
    return <div className="overview">Revenue</div>;
};

export const Order: FC = () => {
    return <div className="overview">Order</div>;
};

export const History: FC = () => {
    return <div className="overview">History</div>;
};

export const Configurations: FC = () => {
    return <div className="overview">Configurations</div>;
};