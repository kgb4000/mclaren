import ContactContent from './ContactContent'

const title = 'Contact Us'
const description =
  'Contact McLaren Rentals Las Vegas to reserve a McLaren 570GT or 570S. Phone, hours, and pickup location.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
