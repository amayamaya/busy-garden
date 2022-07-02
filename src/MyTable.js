import MaterialTable from 'material-table';
import { customers } from './data';

export default function MyTable() {
  console.log();
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'COOL ID', field: 'id' },
          { title: 'First Name', field: 'fist_name' },
          { title: 'Special SurName', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Computer Address Host', field: 'ip_address' },
        ]}
        data={customers}
        title="My Special Title"
        options={{
          headerStyle: {
            background: 'papayawhip',
          },
          rowStyle: {
            background: 'mistyrose',
          },
        }}
      />
    </div>
  );
}
