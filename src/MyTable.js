import MaterialTable from 'material-table';
import { customers } from './data.js';
// console.log(customers);

export default function MyTable() {
  return (
    <div className='floralEnthusiasts' style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Username', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Special SurName', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Computer Address Host', field: 'ip_address' },
        ]}
        data={customers}
        title="Floral Enthusiasts"
        options={{
          headerStyle: {
            background: 'mistyrose',
          },
          rowStyle: {
            background: 'thistle',
          },
        }}
      />
    </div>
  );
}
