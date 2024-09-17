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


 export const siteMenuItem = [
    {
      label:'Home',
      slug:"",
      dropdown : false,

    },
    {
      label:'Service',
      slug:"",
      dropdown : true,
      dropDownItem :[
        {
          label:"bookkeeping",
          slug:"/service/book-keeping"
        },
        {
          label:"payroll",
          slug:"/service/payroll"
        },
        {
          label:"tax",
          slug:"/service/tax"
        },
        {
          label:"bill pay",
          slug:"/service/bill-pay"
        },
        {
          label:"data maigration",
          slug:"/service/data-maigration"
        }
      ]
    },
    {
      label:'About',
      slug:"/about",
      dropdown : false,
    },
    {
      label:'Contact Us',
      slug:"/contact-us",
      dropdown : false,
    },
    {
      label:'Pricing',
      slug:"/pricing",
      dropdown : false,
    },
    {
      label:'Career',
      slug:"/career",
      dropdown : false,
    }
  ]

  export const PricingData = [
    {
      id:1,
      labelName : "Tax",
      pricingStart : "120",
      facility:[
        "Preparation of Federal and State tax returns",
        "Tax Planning/Strategizing",
        "Preparation of business property tax return"
      ]
    },
    {
      id:2,
      labelName : "Bookkeeping",
      pricingStart : "199",
      facility:[
        "Bank, Credit Card, and Loan Reconciliations",
        "Monthly Financial Statements",
        "Dedicated Bookkeeper and Account Manager"
      ],
      popularPlans:[
        {
          plan:"199",
          mt : "150",
          sf : "monthly",
          mea : "yes",
          bankCCR : "yes",
          coa:"yes",
          tbtc:"no"
        },
        {
          plan:"399",
          mt : "250",
          sf : "monthly",
          mea : "yes",
          bankCCR : "yes",
          coa:"yes",
          tbtc:"yes"
        },
        {
          plan:"699",
          mt : "350",
          sf : "monthly",
          mea : "yes",
          bankCCR : "yes",
          coa:"yes",
          tbtc:"yes"
        },
      ]
    },
    {
      id:3,
      labelName : "Payroll",
      pricingStart : "120",
      facility:[
        "Direct Deposit",
        "Federal and State Payroll Taxes",
        "Employee Portal"
      ]
    },
  ]