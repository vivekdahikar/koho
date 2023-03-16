import { Table } from '../../data/interface/table';

export interface TABLE {
  id: number;
  icon: string;
  status: string;
  signalName: string;
  security: string;
  stage: string;
  schedule: string;
  teamLead: string;
  bgClass: string;
}
export const table: TABLE[] = [
  {
    id: 1,
    icon: 'alert-triangle',
    status: 'No Signal',
    signalName: 'Astrid: NE Shared managed',
    security: 'Medium',
    stage: 'Triaged',
    schedule: '0.33',
    bgClass: 'bg-light-primary font-primary',
    teamLead: 'Chase Nguyen',
  },
  {
    id: 2,
    icon: 'alert-triangle',
    status: 'Offline',
    signalName: 'Cosmo: prod shared ares',
    security: 'Huge',
    stage: 'Triaged',
    schedule: '0.39',
    bgClass: 'bg-light-danger font-danger',
    teamLead: 'Brie Furman',
  },
  {
    id: 3,
    icon: 'alert-circle',
    status: 'Online',
    signalName: 'Phoenix: prod shared lyra-lists',
    security: 'Minor',
    stage: 'No Triaged',
    schedule: '3.12',
    bgClass: 'bg-light-success font-success',
    teamLead: 'Jeremy Lake',
  },
  {
    id: 4,
    icon: 'check-circle',
    status: 'No Signal',
    signalName: 'Astrid: NE Shared managed',
    security: 'Negligible',
    stage: 'triaged',
    schedule: '13.18',
    bgClass: 'bg-light-primary font-primary',
    teamLead: 'Angelica Howards',
  },
  {
    id: 5,
    icon: 'check-circle',
    status: 'Online',
    signalName: 'Astrid: NE Shared managed',
    security: 'Negligible',
    stage: 'triaged',
    schedule: '5.33',
    bgClass: 'bg-light-success font-success',
    teamLead: 'Diane Okuma',
  },
];

export const tableData3 = [
  {
    id: 1,
    img: 'assets/images/avtar/boy.png',
    firstName: 'Ram Jacob',
    lastName: 'Wolfe',
    userName: 'RamJacob@twitter',
    role: 'Developer',
    company: 'Apple Inc.',
    language: 'Php',
    badgeClass: 'badge-light-primary',
    credit: '$3500.00',
    borderColor: 'border-bottom-secondary',
    country: 'IND',
  },
  {
    id: 2,
    img: 'assets/images/avtar/man.png',
    firstName: 'John Deo',
    lastName: 'Gummer',
    userName: 'JohnDeo@twitter',
    role: 'Designer',
    company: 'Hewlett packard',
    language: 'Html',
    badgeClass: 'badge-light-success',
    credit: '$2400.00',
    borderColor: 'border-bottom-success',
    country: 'US',
  },
  {
    id: 3,
    img: 'assets/images/avtar/girl.png',
    firstName: 'Elana John',
    lastName: 'Cazale',
    userName: 'ElanaJohn@twitter',
    role: 'Designer',
    company: 'Microsoft',
    language: 'Pug',
    badgeClass: 'badge-light-primary',
    credit: '$2560.00',
    borderColor: 'border-bottom-info',
    country: 'UK',
  },
  {
    id: 4,
    img: 'assets/images/avtar/chat-user-1.png',
    firstName: 'Meryl Streep',
    lastName: 'Roberts',
    userName: 'MerylStreep@twitter',
    role: 'Developer',
    company: 'Tata Ltd.',
    language: 'React',
    badgeClass: 'badge-light-success',
    credit: '$1870.00',
    borderColor: 'border-bottom-warning',
    country: 'IDN',
  },
  {
    id: 5,
    img: 'assets/images/avtar/woman.png',
    firstName: 'Emma Stone',
    lastName: 'Stone',
    userName: 'EmmaStone@twitter',
    role: 'Developer',
    company: 'Wipro Ltd.',
    badgeClass: 'badge-light-primary',
    language: 'Vue',
    credit: '$4580.00',
    borderColor: 'border-bottom-danger',
    country: 'IRN',
  },
  {
    id: 6,
    img: 'assets/images/avtar/girl.png',
    firstName: 'Eliana Jons',
    lastName: 'Jons',
    userName: 'ElianaJons@twitter',
    role: 'Developer',
    company: 'Info Ltd.',
    badgeClass: 'badge-light-primary',
    language: 'Vue',
    credit: '$4580.00',
    borderColor: 'border-bottom-light',
    country: 'IRN',
  },
];

export const inverse = [
  {
    id: 1,
    firstName: 'Stephan',
    lastName: 'Laiten',
    office: 'Tokyo',
    role: 'Accountant',
    salary: '$2100.00',
    age: 20,
    join: '21/01/2023',
  },
  {
    id: 2,
    firstName: 'Fay',
    lastName: 'Van Damme',
    office: 'London',
    role: 'CEO',
    salary: '$1420.00',
    age: 22,
    join: '14/02/2023',
  },
  {
    id: 3,
    firstName: 'Brevin',
    lastName: 'Oleveria',
    office: 'New York',
    role: 'Software Engineer',
    salary: '$1340.00',
    age: 18,
    join: '04/06/2023',
  },
  {
    id: 4,
    firstName: 'Regina',
    lastName: 'Ottandy',
    office: 'France',
    role: 'Pre-sale Support',
    salary: '$3400.00',
    age: 25,
    join: '10/08/2023',
  },
  {
    id: 5,
    firstName: 'Vani',
    lastName: 'Shah',
    office: 'Los Angeles',
    role: 'Senior Developer',
    salary: '$3500.00',
    age: 28,
    join: '23/07/2023',
  },
];

export const contextual = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'active',
];
export const textOrBgUtilities = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
];

export const table2 = [
  {
    id: 1,
    firstName: 'Mark',
    name: 'Elana Robbert',
    email: 'ElanaRob@gmail.com',
    lastName: 'Otto',
    exp: '1 Year',
    sex: 'Male',
    contact: '+91 9789887777',
    userName: 'Mark@twitter',
    age: '28',
    dessert: 'KitKat',
    calories: '518',
    fat: '26',
    price: '20',
  },
  {
    id: 2,
    firstName: 'Elana',
    name: 'Stiphen Deo',
    email: 'Stiphen@yahoo.com',
    lastName: 'Thornton',
    exp: '6 Month',
    sex: 'Female',
    contact: '+91 9874563210',
    userName: 'Elana@twitter',
    age: '22',
    dessert: 'Donut',
    calories: '452',
    fat: '25',
    price: '80',
  },
  {
    id: 3,
    firstName: 'Larry',
    name: 'Genelia Ottre',
    email: 'Genelia@gmail.com',
    lastName: 'Otthe Birdto',
    exp: '2 Days',
    sex: 'Male',
    contact: '+91 8794562135',
    userName: 'Larry@twitter',
    age: '24',
    dessert: 'Eclair',
    calories: '262',
    fat: '16',
    price: '10',
  },
];

export const breckpointSpecific = [
  {
    id: 1,
    data: ['Iphone X Grey', 'C12345', '$12550', '1', '$12550'],
  },
  {
    id: 2,
    data: ['Titan Watch', 'A14725', '$120', '2', '$240'],
  },
  {
    id: 3,
    data: ['Apple Airpods', 'B54213', '$210', '1', '$210'],
  },
];

export const TABLEDATA: Table[] = [
  {
    id: 1,
    img: 'assets/images/user/1.jpg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Hewlett packard',
    invoice: '#PX0101',
    startDate: '2023/04/27',
    Budget: '$3142.00',
    salary: 'High',
    credit: '4.3%',
    ActionClass: 'badge-light-primary',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 2,
    img: 'assets/images/user/2.jpg',
    name: 'Garrett Winters',
    position: 'Maintenace service',
    office: 'Apple Inc.',
    invoice: '#RF304f',
    startDate: '2023/04/22',
    Budget: '$1234.00',
    salary: 'Urgent',
    credit: '5.6%',
    ActionClass: 'badge-light-danger',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 3,
    img: 'assets/images/user/3.jpg',
    name: 'Ashton Cox',
    position: 'Junior Technical Author	',
    office: 'Edinburgh',
    invoice: '#DNJ480',
    startDate: '2023/05/21',
    Budget: '$2345.00',
    salary: 'Low',
    credit: '2.4%',
    ActionClass: 'badge-light-success',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 4,
    img: 'assets/images/user/6.jpg',
    name: 'Brielle Williamson',
    position: 'Senior Javascript Developer',
    office: 'Microsoft',
    invoice: '#G189d0',
    startDate: '2023/03/09',
    Budget: '$7689.00',
    salary: 'Medium',
    credit: '2.2%',
    ActionClass: 'badge-light-warning',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 5,
    img: 'assets/images/user/7.jpg',
    name: 'Tiger Nixon',
    position: 'Accountant',
    office: 'Tata Co.',
    invoice: '#31D8FFS',
    startDate: '2023/04/10',
    Budget: '$2145.00',
    salary: 'High',
    credit: '5.8%',
    ActionClass: 'badge-light-primary',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 6,
    img: 'assets/images/user/14.png',
    name: 'Michael Morris',
    position: 'General service',
    office: 'Google Inc.',
    invoice: '#G189D4',
    startDate: '2023/06/12',
    Budget: '$2578.00',
    salary: 'Urgent',
    credit: '6.4%',
    ActionClass: 'badge-light-danger',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 7,
    img: 'assets/images/user/10.jpg',
    name: 'Kevin Dawson',
    position: 'System Architect',
    office: 'Mindtree Ltd.',
    invoice: '#PX2101',
    startDate: '2023/04/25',
    Budget: '$6538.00',
    salary: 'Low',
    credit: '0.3%',
    ActionClass: 'badge-light-sucess',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 8,
    img: 'assets/images/user/12.png',
    name: 'Thomas Taylor',
    position: 'System Architect',
    office: 'Wipro Ltd.',
    invoice: '#px0101',
    startDate: '2023/06/09',
    Budget: '$2121.00',
    salary: 'Urgent',
    credit: '7.3%',
    ActionClass: 'badge-light-danger',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 9,
    img: 'assets/images/user/14.png',
    name: 'Carolyn Jones',
    position: 'General service',
    office: 'Edinburgh',
    invoice: '#G5384H',
    startDate: '2023/01/11',
    Budget: '$9546.00',
    salary: 'High',
    credit: '6.3%',
    ActionClass: 'badge-light-primary',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
  {
    id: 10,
    img: 'assets/images/user/6.jpg',
    name: 'Glen Matney',
    position: 'System Architect',
    office: 'Mphasis Ltd',
    invoice: '#E5384H',
    startDate: '2023/04/02',
    Budget: '$4587.00',
    salary: 'Medium',
    credit: '3.3%',
    ActionClass: 'badge-light-warning',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 11,
    img: 'assets/images/user/9.jpg',
    name: 'Charles Kubik',
    position: 'System Architect',
    office: 'Infosys Ltd.',
    invoice: '#JK384H',
    startDate: '2023/05/01',
    Budget: '$3140.00',
    salary: 'Low',
    credit: '2.3%',
    ActionClass: 'badge-light-success',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 12,
    img: 'assets/images/user/10.jpg',
    name: 'Herbert Stokes',
    position: 'General service',
    office: 'Edinburgh',
    invoice: '#HY5384H',
    startDate: '2023/07/04',
    Budget: '$3014.00',
    salary: 'Low',
    credit: '1.3%',
    ActionClass: 'badge-light-success',
    iconClass: 'icofont-arrow-down',
    iconColor: 'danger',
  },
  {
    id: 13,
    img: 'assets/images/user/11.png',
    name: 'Mary Cousar',
    position: 'System Architect',
    office: 'Infosys.',
    invoice: '#KH384H',
    startDate: '2023/04/06',
    Budget: '$2014.00',
    salary: 'Urgent',
    credit: '5.3%',
    ActionClass: 'badge-light-danger',
    iconClass: 'icofont-arrow-up',
    iconColor: 'success',
  },
];
