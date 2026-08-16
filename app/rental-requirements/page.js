import RequirementsContent from './RequirementsContent'

const title = 'McLaren Rental Requirements'
const description =
  'Everything you need to rent a McLaren in Las Vegas: age and license requirements, insurance, security deposit, and mileage allowance.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/rental-requirements',
  },
}

export default function RentalRequirementsPage() {
  return <RequirementsContent />
}
