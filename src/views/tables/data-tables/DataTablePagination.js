import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "EIN",
    selector: "id",
    sortable: true
  },
  {
    name: "Name",
    selector: "name",
    sortable: true
  },
  {
    name: "Department",
    selector: "Job_title",
    sortable: true
  },
  {
    name: "Skill",
    selector: "skill",
    sortable: true
  },
  {
    name: "Salary",
    selector: "salary",
    sortable: true
  }
]

const data = [
  {
    id: "39-4771822",
    name: "Irv Josselson",
    Job_title: "Product Engineer",
    skill: "Key Account Management",
    salary: "$3723.32"
  },
  {
    id: "49-9001520",
    name: "Herby Buxsy",
    Job_title: "Web Designer IV",
    skill: "VSAM",
    salary: "$9690.39"
  },
  {
    id: "63-1420126",
    name: "Erik Capron",
    Job_title: "VP Marketing",
    skill: "EP",
    salary: "$2174.25"
  },
  {
    id: "85-1701479",
    name: "Min Elsmere",
    Job_title: "Help Desk Operator",
    skill: "Rotating Equipment",
    salary: "$9698.06"
  },
  {
    id: "25-6134818",
    name: "Wilmette Beggin",
    Job_title: "Sales Associate",
    skill: "BJT",
    salary: "$8023.20"
  },
  {
    id: "45-1674363",
    name: "Karney Shovelton",
    Job_title: "Actuary",
    skill: "DV",
    salary: "$2954.95"
  },
  {
    id: "82-5283205",
    name: "Anya Tumbelty",
    Job_title: "Project Manager",
    skill: "DFS",
    salary: "$4586.59"
  },
  {
    id: "20-7192766",
    name: "Gates Conradie",
    Job_title: "Cost Accountant",
    skill: "Ultrasonics",
    salary: "$8205.23"
  },
  {
    id: "56-5503064",
    name: "Derron Dahlback",
    Job_title: "Dental Hygienist",
    skill: "VBAC",
    salary: "$6907.90"
  },
  {
    id: "88-5128610",
    name: "Bernarr Tydeman",
    Job_title: "Senior Cost Accountant",
    skill: "Image Manipulation",
    salary: "$7593.62"
  },
  {
    id: "51-7471492",
    name: "Sibyl Amthor",
    Job_title: "Nurse",
    skill: "LMS Test.Lab",
    salary: "$6507.97"
  },
  {
    id: "50-6598195",
    name: "Quincy Founds",
    Job_title: "Tax Accountant",
    skill: "WSE",
    salary: "$4039.51"
  },
  {
    id: "46-4885608",
    name: "Richmond McKitterick",
    Job_title: "Technical Writer",
    skill: "mLearning",
    salary: "$5264.54"
  },
  {
    id: "17-3568868",
    name: "Joyous Cundey",
    Job_title: "Assistant Media Planner",
    skill: "MP3",
    salary: "$2591.20"
  },
  {
    id: "34-1010373",
    name: "Ruttger Heatly",
    Job_title: "Database Administrator II",
    skill: "FPA",
    salary: "$2755.98"
  },
  {
    id: "02-0334091",
    name: "Emmet Snadden",
    Job_title: "Sales Associate",
    skill: "UL",
    salary: "$7346.24"
  },
  {
    id: "56-6166703",
    name: "Randal Slatter",
    Job_title: "GIS Technical Architect",
    skill: "Channel Partners",
    salary: "$4138.58"
  },
  {
    id: "56-2788303",
    name: "Misty Farrall",
    Job_title: "Biostatistician IV",
    skill: "VPLS",
    salary: "$4309.57"
  },
  {
    id: "62-7041114",
    name: "Leoine Angrick",
    Job_title: "Nurse Practicioner",
    skill: "Web Analytics",
    salary: "$9867.89"
  },
  {
    id: "63-5519247",
    name: "Gusta MacVagh",
    Job_title: "Research Associate",
    skill: "MRPII",
    salary: "$1259.87"
  },
  {
    id: "02-8622207",
    name: "Blakelee Trowler",
    Job_title: "Nurse Practicioner",
    skill: "Improvisation",
    salary: "$5176.55"
  },
  {
    id: "34-9814193",
    name: "Lyndsey Sumption",
    Job_title: "Accountant II",
    skill: "FPC 1",
    salary: "$3615.70"
  },
  {
    id: "53-0772100",
    name: "Cass Rainsdon",
    Job_title: "Analyst Programmer",
    skill: "Snow Leopard",
    salary: "$2275.19"
  },
  {
    id: "68-6136006",
    name: "Hussein Peatt",
    Job_title: "Administrative Officer",
    skill: "TWiki",
    salary: "$2202.65"
  },
  {
    id: "52-8655965",
    name: "Stanislas Weathey",
    Job_title: "Physical Therapy Assistant",
    skill: "NICU",
    salary: "$1285.65"
  },
  {
    id: "98-1533931",
    name: "Sean Nurden",
    Job_title: "Media Manager III",
    skill: "Veterinary Medicine",
    salary: "$2355.09"
  },
  {
    id: "80-6843020",
    name: "Robert Burgott",
    Job_title: "Technical Writer",
    skill: "SQL PL",
    salary: "$6181.63"
  },
  {
    id: "05-2939471",
    name: "Tamqrah Gawthorpe",
    Job_title: "Mechanical Systems Engineer",
    skill: "USDA",
    salary: "$8087.90"
  },
  {
    id: "92-2002994",
    name: "Dru O'Farrell",
    Job_title: "Teacher",
    skill: "DFU",
    salary: "$6436.26"
  },
  {
    id: "84-2461596",
    name: "Paulette Coghlan",
    Job_title: "Nuclear Power Engineer",
    skill: "Substance Use Disorders",
    salary: "$8865.40"
  },
  {
    id: "54-0592230",
    name: "Claire Franceschelli",
    Job_title: "Nurse Practicioner",
    skill: "LGBT Rights",
    salary: "$6160.04"
  },
  {
    id: "49-6724516",
    name: "Clareta Dovidaitis",
    Job_title: "Junior Executive",
    skill: "AKTA",
    salary: "$9334.82"
  },
  {
    id: "40-2963802",
    name: "Samuel D'Angeli",
    Job_title: "Editor",
    skill: "Teaching Writing",
    salary: "$9448.99"
  },
  {
    id: "30-2534196",
    name: "Kaia Gully",
    Job_title: "Clinical Specialist",
    skill: "Olefins",
    salary: "$5114.83"
  },
  {
    id: "04-6909567",
    name: "Iris Tomowicz",
    Job_title: "Payment Adjustment Coordinator",
    skill: "Land Use Planning",
    salary: "$3593.02"
  },
  {
    id: "17-1972776",
    name: "Mable Bowery",
    Job_title: "Computer Systems Analyst IV",
    skill: "IA32",
    salary: "$8772.72"
  },
  {
    id: "58-9315753",
    name: "Corbie Stickings",
    Job_title: "Physical Therapy Assistant",
    skill: "DGA",
    salary: "$7216.57"
  },
  {
    id: "99-2197211",
    name: "Sabrina Ebanks",
    Job_title: "Desktop Support Technician",
    skill: "TBS",
    salary: "$4153.62"
  },
  {
    id: "24-8358111",
    name: "Benedetta Ripley",
    Job_title: "Account Coordinator",
    skill: "Air Compressors",
    salary: "$4181.38"
  },
  {
    id: "95-2063564",
    name: "Clovis Lenthall",
    Job_title: "Marketing Assistant",
    skill: "RSA Security",
    salary: "$4109.87"
  },
  {
    id: "54-1060468",
    name: "Dorena Druitt",
    Job_title: "Electrical Engineer",
    skill: "Tax Accounting",
    salary: "$7894.11"
  },
  {
    id: "42-8136686",
    name: "Vicki Gilderoy",
    Job_title: "Chemical Engineer",
    skill: "Jury Trials",
    salary: "$5067.17"
  },
  {
    id: "30-7608155",
    name: "Gayler Pinke",
    Job_title: "Biostatistician IV",
    skill: "Syslog-ng",
    salary: "$4970.00"
  },
  {
    id: "62-9649723",
    name: "Demetra Moxsom",
    Job_title: "Assistant Professor",
    skill: "Music History",
    salary: "$9595.24"
  },
  {
    id: "11-7534698",
    name: "Farrel Lavery",
    Job_title: "Computer Systems Analyst III",
    skill: "ZoomText",
    salary: "$3355.10"
  },
  {
    id: "46-6913263",
    name: "Sigismond Gelly",
    Job_title: "Product Engineer",
    skill: "Ghostwriting",
    salary: "$2668.62"
  },
  {
    id: "14-7560892",
    name: "Cris Middis",
    Job_title: "Administrative Officer",
    skill: "Islamic Finance",
    salary: "$9166.95"
  },
  {
    id: "05-5458242",
    name: "Mattie Cassar",
    Job_title: "Teacher",
    skill: "Egyptology",
    salary: "$2137.36"
  },
  {
    id: "14-4342260",
    name: "Harmonie Loache",
    Job_title: "Software Consultant",
    skill: "DDoS",
    salary: "$5224.93"
  },
  {
    id: "51-8133118",
    name: "Dena Lyst",
    Job_title: "Operator",
    skill: "WCCP",
    salary: "$5662.93"
  },
  {
    id: "08-2228609",
    name: "Theodore Wyvill",
    Job_title: "Research Assistant I",
    skill: "Key Opinion Leaders",
    salary: "$6070.08"
  },
  {
    id: "90-0620831",
    name: "Anica Ponsford",
    Job_title: "Information Systems Manager",
    skill: "Financial Risk Management",
    salary: "$9869.33"
  },
  {
    id: "54-5918795",
    name: "Gerti Yardley",
    Job_title: "Financial Advisor",
    skill: "RDI",
    salary: "$2680.73"
  },
  {
    id: "67-7841426",
    name: "Genovera Grocock",
    Job_title: "Automation Specialist I",
    skill: "Oil Painting",
    salary: "$5231.21"
  },
  {
    id: "63-1569258",
    name: "Rikki Seamark",
    Job_title: "Teacher",
    skill: "Handmade Jewelry",
    salary: "$6074.80"
  },
  {
    id: "14-6712354",
    name: "Emelda Jaquet",
    Job_title: "Staff Accountant I",
    skill: "21 CFR Part 11",
    salary: "$5912.11"
  },
  {
    id: "55-9651266",
    name: "Ahmed Howlings",
    Job_title: "Nurse",
    skill: "Disaster Recovery",
    salary: "$7611.45"
  },
  {
    id: "78-7009350",
    name: "Mace Divell",
    Job_title: "Budget/Accounting Analyst IV",
    skill: "RGB",
    salary: "$7760.72"
  },
  {
    id: "00-9374030",
    name: "Salvador Ivins",
    Job_title: "Statistician II",
    skill: "Agency MBS",
    salary: "$4869.19"
  },
  {
    id: "92-6310387",
    name: "Edwin Small",
    Job_title: "Safety Technician III",
    skill: "Acoustic Guitar",
    salary: "$5200.58"
  },
  {
    id: "12-8039331",
    name: "Thoma Botting",
    Job_title: "Desktop Support Technician",
    skill: "Utilization Review",
    salary: "$5619.19"
  },
  {
    id: "21-0594816",
    name: "Lora Sall",
    Job_title: "Administrative Assistant II",
    skill: "DNP3",
    salary: "$2859.45"
  },
  {
    id: "16-5588629",
    name: "Alaine Stockley",
    Job_title: "Editor",
    skill: "Vlookup",
    salary: "$4041.11"
  },
  {
    id: "31-5172301",
    name: "Casey Imlin",
    Job_title: "Senior Developer",
    skill: "PL/SQL",
    salary: "$6781.62"
  },
  {
    id: "06-0884902",
    name: "Eugene McBain",
    Job_title: "Clinical Specialist",
    skill: "VSTS",
    salary: "$6185.01"
  },
  {
    id: "25-2646231",
    name: "Andre Keave",
    Job_title: "Community Outreach Specialist",
    skill: "Cash Flow Forecasting",
    salary: "$6885.49"
  },
  {
    id: "75-9195727",
    name: "Hyacinthe Saw",
    Job_title: "Pharmacist",
    skill: "Rhythm Guitar",
    salary: "$4246.50"
  },
  {
    id: "84-6344086",
    name: "Bruis Lintin",
    Job_title: "Nurse Practicioner",
    skill: "Oasys",
    salary: "$3413.97"
  },
  {
    id: "83-5677677",
    name: "Lisbeth Dranfield",
    Job_title: "Human Resources Manager",
    skill: "IBM Utilities",
    salary: "$9051.79"
  },
  {
    id: "85-9897808",
    name: "Heindrick Tolliday",
    Job_title: "VP Accounting",
    skill: "Supply Chain",
    salary: "$4259.27"
  },
  {
    id: "02-0900129",
    name: "Kristo Ledrun",
    Job_title: "VP Product Management",
    skill: "XMind",
    salary: "$8483.75"
  },
  {
    id: "15-4997350",
    name: "Patrice Laraway",
    Job_title: "Chemical Engineer",
    skill: "Olfaction",
    salary: "$2612.04"
  },
  {
    id: "37-0625194",
    name: "Merla Sell",
    Job_title: "Dental Hygienist",
    skill: "MVA",
    salary: "$3974.28"
  },
  {
    id: "29-1831422",
    name: "Hallsy Birmingham",
    Job_title: "Clinical Specialist",
    skill: "ABAP-OO",
    salary: "$3020.75"
  },
  {
    id: "86-8816064",
    name: "Allie Adne",
    Job_title: "Analog Circuit Design manager",
    skill: "Urban Design",
    salary: "$5666.04"
  },
  {
    id: "60-1243477",
    name: "Courtnay Randalston",
    Job_title: "Teacher",
    skill: "VSX",
    salary: "$5063.76"
  },
  {
    id: "83-2842528",
    name: "Emanuel Clewlow",
    Job_title: "General Manager",
    skill: "Jetty",
    salary: "$4234.61"
  },
  {
    id: "04-6393105",
    name: "Coralie Hallbird",
    Job_title: "Junior Executive",
    skill: "EZNews",
    salary: "$5649.75"
  },
  {
    id: "93-6455971",
    name: "Germana Howels",
    Job_title: "Graphic Designer",
    skill: "XPlanner",
    salary: "$1122.82"
  },
  {
    id: "01-4544881",
    name: "Doti Drennan",
    Job_title: "Structural Analysis Engineer",
    skill: "Functional Training",
    salary: "$3127.90"
  },
  {
    id: "55-9258648",
    name: "Fulvia Rowaszkiewicz",
    Job_title: "Biostatistician III",
    skill: "HSM",
    salary: "$7756.31"
  },
  {
    id: "14-1460047",
    name: "Mikol Brain",
    Job_title: "Registered Nurse",
    skill: "TIBCO",
    salary: "$9034.90"
  },
  {
    id: "08-0250879",
    name: "Modestine Dearing",
    Job_title: "Human Resources Manager",
    skill: "High Yield Bonds",
    salary: "$2380.54"
  },
  {
    id: "47-0001410",
    name: "Stormi Tilmouth",
    Job_title: "VP Accounting",
    skill: "TPNS",
    salary: "$4302.00"
  },
  {
    id: "29-2333796",
    name: "Cassandra Plumridege",
    Job_title: "Mechanical Systems Engineer",
    skill: "Student Financial Aid",
    salary: "$5347.78"
  },
  {
    id: "69-8473847",
    name: "Dode Deshorts",
    Job_title: "Analog Circuit Design manager",
    skill: "PDE",
    salary: "$4354.98"
  },
  {
    id: "13-8280315",
    name: "Chance Sirey",
    Job_title: "Developer IV",
    skill: "BMC Portal",
    salary: "$7441.91"
  },
  {
    id: "91-8188856",
    name: "Vladimir Cordero",
    Job_title: "Teacher",
    skill: "Geotechnical Engineering",
    salary: "$5254.39"
  },
  {
    id: "29-2144396",
    name: "Eadith Beltzner",
    Job_title: "Account Coordinator",
    skill: "Old English",
    salary: "$3902.39"
  },
  {
    id: "15-2317614",
    name: "Eulalie Allner",
    Job_title: "Quality Control Specialist",
    skill: "UCaaS",
    salary: "$9458.15"
  },
  {
    id: "37-7458262",
    name: "Dukie Venmore",
    Job_title: "Professor",
    skill: "Dual Diagnosis",
    salary: "$9647.08"
  },
  {
    id: "53-8786725",
    name: "Timofei Duell",
    Job_title: "Analyst Programmer",
    skill: "CDL Class A",
    salary: "$9983.30"
  },
  {
    id: "26-5608636",
    name: "Maddy Tinston",
    Job_title: "Software Consultant",
    skill: "JWICS",
    salary: "$9238.28"
  },
  {
    id: "89-7064480",
    name: "Abelard Dinse",
    Job_title: "Programmer Analyst II",
    skill: "Hypermesh",
    salary: "$9431.15"
  },
  {
    id: "12-7269871",
    name: "Mannie Cage",
    Job_title: "Human Resources Assistant III",
    skill: "ProSystem fx Engagement",
    salary: "$6796.26"
  },
  {
    id: "55-1199297",
    name: "Sidoney Derdes",
    Job_title: "Paralegal",
    skill: "IT Solutions",
    salary: "$2013.51"
  },
  {
    id: "17-3733515",
    name: "Saree Pragnell",
    Job_title: "Compensation Analyst",
    skill: "Fundraising",
    salary: "$5040.43"
  },
  {
    id: "38-5920785",
    name: "Jordan Mcwhinney",
    Job_title: "Food Chemist",
    skill: "Leadership",
    salary: "$4340.75"
  },
  {
    id: "55-0685917",
    name: "Beryle Duddan",
    Job_title: "Design Engineer",
    skill: "System Administration",
    salary: "$2380.73"
  },
  {
    id: "40-1815160",
    name: "Joycelin Cleef",
    Job_title: "Research Assistant II",
    skill: "Tax Accounting",
    salary: "$8947.97"
  }
]

class DataTablePagination extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
        </CardHeader>
        <CardBody>
          <DataTable data={data} columns={columns} noHeader pagination />
        </CardBody>
      </Card>
    )
  }
}

export default DataTablePagination
