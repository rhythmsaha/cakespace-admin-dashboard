import DashboardLayout from '../../components/layouts/DashboardLayout'

function Invoices() {
  return <div>Invoices</div>
}
export default Invoices

Invoices.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
