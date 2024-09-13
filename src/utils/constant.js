import { TfiReload } from "react-icons/tfi";
import { FaBookOpen } from "react-icons/fa6";
import { SiPayloadcms , SiSolus } from "react-icons/si";
export const servicesData = [
    {
      title: 'Bookkeeping',
      description: 'Accurate and efficient bookkeeping to keep your financials in order.',
      link: '/services/bookkeeping',
      icons:FaBookOpen
    },
    {
      title: 'Payroll Management',
      description: 'Manage payrolls with precision and on time, every time.',
      link: '/services/payroll',
      icons:SiPayloadcms

    },
    {
      title: 'Tax Solutions',
      description: 'Get professional tax planning and preparation services to maximize savings.',
      link: '/services/tax-solutions',
      icons:SiSolus

    },
    {
      title: 'Bill Payment',
      description: 'Handle bill payments efficiently to avoid delays and penalties.',
      link: '/services/bill-pay',
      icons:TfiReload
    }
  ];