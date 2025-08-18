import React, { useState, useMemo } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import "../styles/Leadership.css";

// --- Data for the cards ---
const cardData = [
  
  {
    id: 2,
    imageUrl: 'https://th.bing.com/th/id/OIP.aqKA1YWlh64QRY_cRk4cugHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Abhay Singh Chautala',
    experience: '25+ years',
    role: 'Former Leader of Opposition',
    description: 'Former Leader of Opposition in Haryana Legislative Assembly and a key strategist of INLD. A seasoned politician with extensive experience in state politics, known for his strategic acumen and commitment to party ideology. He has been instrumental in shaping party policies and maintaining strong grassroots connections.',
    education: 'Graduate in Political Science',
    district: 'Sirsa',
    constituency: 'Ellenabad',
    achievements: [
      'Former Leader of Opposition in Haryana Assembly',
      'Senior INLD Leader and Party Strategist',
      'Promoted youth involvement in politics',
      'Champion of farmers rights and rural development',
      'Advocate for transparent governance',
      'Key architect of party electoral strategies'
    ],
    connect: { twitter: '@AbhayChautala', facebook: 'Facebook', email: 'Email' }
  },
  
  {
    id: 14,
    imageUrl: 'https://th.bing.com/th/id/OIP.bkq--MbBomQ9I9psCWU3QQHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Rekha Rana',
    experience: '20+ years',
    role: 'State Vice-President & Women\'s Wing Leader',
    description: 'State Vice-President of INLD Haryana and a dedicated leader championing women\'s rights and empowerment. Known for her grassroots connect and extensive work in social development, women\'s welfare, and educational initiatives. She has been instrumental in promoting gender equality and organizing women development programs across Haryana.',
    education: 'Master of Arts in Sociology & Post Graduate Diploma in Social Work',
    district: 'Panipat',
    constituency: 'Panipat City',
    achievements: [
      'State Vice-President, INLD Haryana',
      'President of INLD Women\'s Wing',
      'Champion of women\'s rights and empowerment',
      'Social development advocate and organizer',
      'Led numerous women development programs',
      'Advocate for gender equality and social justice',
      'Promoter of women\'s education and skill development'
    ],
    connect: { twitter: '@RekhaRana', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 17,
    imageUrl: 'https://th.bing.com/th/id/OIP.rJ8vZ2A-6tN1QVH5xYR2QAHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Bhopal Singh Bhati',
    experience: '20+ years',
    role: 'State Vice-President, Haryana',
    description: 'State Vice-President of INLD Haryana, known for his work in party organization and grassroots mobilization.',
    education: 'Bachelor of Arts, Public Administration',
    district: 'Fatehabad',
    constituency: 'Fatehabad',
    achievements: [
      'State Vice-President, Haryana',
      'Strengthened party organization',
      'Promoted unity across communities',
      'Led grassroots mobilization',
      'Expert in election management'
    ],
    connect: { twitter: '@BhopalSinghBhati', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 18,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Raj+Singh+Mor',
    name: 'Raj Singh Mor',
    experience: '17+ years',
    role: 'State Vice-President, Haryana',
    description: 'State Vice-President of INLD Haryana, focused on youth engagement.',
    education: 'Graduate',
    district: 'Jind',
    constituency: '',
    achievements: [
      'State Vice-President, Haryana',
      'Promoted youth engagement',
      'Worked for education'
    ],
    connect: { twitter: '', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 19,
    imageUrl: 'https://th.bing.com/th/id/OIP.5nKGxGY2-vH9YB8zRl5rJwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Mahendra Singh Chauhan',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, dedicated to grassroots organization and party development.',
    education: 'Master of Arts in Political Science, Maharshi Dayanand University',
    district: 'Jhajjar',
    constituency: 'Jhajjar',
    achievements: [
      'State General Secretary, Haryana',
      'Expert in grassroots organization',
      'Led rural development initiatives',
      'Strengthened party infrastructure',
      'Champion of farmers\' rights'
    ],
    connect: { twitter: '@MahendraSinghChauhan', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 20,
    imageUrl: 'https://th.bing.com/th/id/OIP.3E4vH2R9aV5Nx8bP1mL0wgHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Rajesh Godara',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, working towards social justice and community development.',
    education: 'Bachelor of Commerce, Kurukshetra University',
    district: 'Bhiwani',
    constituency: 'Bhiwani',
    achievements: [
      'State General Secretary, Haryana',
      'Advocate for social justice',
      'Led community development programs',
      'Expert in youth mobilization',
      'Promoted educational initiatives'
    ],
    connect: { twitter: '@RajeshGodara', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 21,
    imageUrl: 'https://th.bing.com/th/id/OIP.7R9mP4K3nQ2X5jT8yH6VcQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Dr Sitaram',
    experience: '30+ years',
    role: 'Senior Advisor & Healthcare Policy Expert',
    description: 'Veteran politician and medical professional bringing healthcare expertise to party policy. Known for his extensive service to rural communities and commitment to improving healthcare infrastructure. He has been instrumental in formulating health policies and ensuring medical care reaches the grassroots level.',
    education: 'MBBS & MD from Government Medical College, Rohtak',
    district: 'Rohtak',
    constituency: 'Meham',
    achievements: [
      'Senior Advisor to INLD leadership',
      'Healthcare policy expert and reformer',
      'Rural medical service provider for 3 decades',
      'Public health advocate and administrator',
      'Medical education promoter and mentor',
      'Champion of accessible healthcare for farmers',
      'Expert in rural health infrastructure development'
    ],
    connect: { twitter: '@DrSitaram', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 22,
    imageUrl: 'https://th.bing.com/th/id/OIP.8L5nJ9G4rQ3Y7mT2xH9VbQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Om Prakash Gora',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, focused on agricultural development and farmers\' welfare.',
    education: 'Master of Science in Agriculture, CCS Haryana Agricultural University',
    district: 'Kaithal',
    constituency: 'Kaithal',
    achievements: [
      'State General Secretary, Haryana',
      'Expert in agricultural development',
      'Led farmers\' welfare programs',
      'Promoted sustainable farming',
      'Advocate for agricultural reforms'
    ],
    connect: { twitter: '@OmPrakashGora', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 23,
    imageUrl: 'https://th.bing.com/th/id/OIP.6K2nH8F4pP1X9jT5yG7UcQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Dilbag Singh',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, dedicated to rural empowerment and social development.',
    education: 'Bachelor of Arts in Public Administration, Punjabi University',
    district: 'Kurukshetra',
    constituency: 'Kurukshetra',
    achievements: [
      'State General Secretary, Haryana',
      'Champion of rural empowerment',
      'Led social development programs',
      'Expert in community organization',
      'Promoted inclusive governance'
    ],
    connect: { twitter: '@DilbagSingh', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 24,
    imageUrl: 'https://th.bing.com/th/id/OIP.9M4nQ7G2rR5Y8kT3xI6VdQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Sunil Lamba',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, focused on industrial development and employment generation.',
    education: 'Bachelor of Technology, NIT Kurukshetra',
    district: 'Yamunanagar',
    constituency: 'Yamunanagar',
    achievements: [
      'State General Secretary, Haryana',
      'Expert in industrial development',
      'Led employment generation programs',
      'Promoted technical education',
      'Advocate for industrial reforms'
    ],
    connect: { twitter: '@SunilLamba', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 25,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Rameshwar+Das',
    name: 'Rameshwar Das',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, dedicated to social welfare and minority community development.',
    education: 'Master of Social Work, Jamia Millia Islamia University',
    district: 'Mewat',
    constituency: 'Nuh',
    achievements: [
      'State General Secretary, Haryana',
      'Champion of social welfare',
      'Led minority community development',
      'Expert in inclusive policies',
      'Promoted inter-community harmony'
    ],
    connect: { twitter: '@RameshwarDas', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 26,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Mangat+Ram+Saini',
    name: 'Mangat Ram Saini',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, working towards education reform and rural development.',
    education: 'Master of Education, Maharshi Dayanand University',
    district: 'Rewari',
    constituency: 'Rewari',
    achievements: [
      'State General Secretary, Haryana',
      'Champion of education reform',
      'Led rural development initiatives',
      'Expert in educational policy',
      'Promoted literacy programs'
    ],
    connect: { twitter: '@MangatRamSaini', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 27,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Naresh+Sharma',
    name: 'Naresh Sharma',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, focused on trade and commerce development.',
    education: 'Master of Commerce, Delhi University',
    district: 'Palwal',
    constituency: 'Palwal',
    achievements: [
      'State General Secretary, Haryana',
      'Expert in trade and commerce',
      'Led business development programs',
      'Promoted small scale industries',
      'Advocate for trader welfare'
    ],
    connect: { twitter: '@NareshSharma', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 28,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Ram+Kumar+Aibla',
    name: 'Ram Kumar Aibla',
    experience: '15+ years',
    role: 'State General Secretary',
    description: 'State General Secretary of INLD Haryana, dedicated to water resource management and environmental conservation.',
    education: 'Bachelor of Science in Environmental Engineering',
    district: 'Jind',
    constituency: 'Jind',
    achievements: [
      'State General Secretary, Haryana',
      'Expert in water resource management',
      'Led environmental conservation programs',
      'Promoted sustainable development',
      'Advocate for clean water initiatives'
    ],
    connect: { twitter: '@RamKumarAibla', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 29,
    imageUrl: 'https://th.bing.com/th/id/OIP.5P9nL7H4sS6Z9kT4xI7VeQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Dr KC Kajal',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, medical professional focused on healthcare policy and rural health initiatives.',
    education: 'MBBS, MD in Community Medicine, PGIMS Rohtak',
    district: 'Rohtak',
    constituency: 'Rohtak',
    achievements: [
      'State Secretary, Haryana',
      'Medical professional and health advocate',
      'Led rural health initiatives',
      'Expert in healthcare policy',
      'Promoted preventive medicine'
    ],
    connect: { twitter: '@DrKCKajal', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 30,
    imageUrl: 'https://th.bing.com/th/id/OIP.6Q8nM4G2rS5Y7jT3xH6UdQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'Satbir Badhesara',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, focused on agricultural policy and farmer welfare initiatives.',
    education: 'Master of Science in Agriculture, CCS Haryana Agricultural University',
    district: 'Fatehabad',
    constituency: 'Fatehabad',
    achievements: [
      'State Secretary, Haryana',
      'Expert in agricultural policy',
      'Led farmer welfare initiatives',
      'Promoted sustainable farming',
      'Advocate for crop insurance reforms'
    ],
    connect: { twitter: '@SatbirBadhesara', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 31,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Jagtar+Singh+Sandhu',
    name: 'Jagtar Singh Sandhu',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, dedicated to sports development and youth empowerment programs.',
    education: 'Bachelor of Physical Education, Punjabi University',
    district: 'Patiala',
    constituency: 'Patiala Rural',
    achievements: [
      'State Secretary, Haryana',
      'Champion of sports development',
      'Led youth empowerment programs',
      'Promoted physical fitness initiatives',
      'Expert in sports administration'
    ],
    connect: { twitter: '@JagtarSinghSandhu', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 32,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Tayyab+Hussain+Bhimshika',
    name: 'Tayyab Hussain Bhimshika',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, working towards minority community development and social harmony.',
    education: 'Master of Arts in Sociology, Jamia Millia Islamia University',
    district: 'Mewat',
    constituency: 'Punhana',
    achievements: [
      'State Secretary, Haryana',
      'Champion of minority rights',
      'Led community development programs',
      'Promoted social harmony',
      'Expert in inclusive governance'
    ],
    connect: { twitter: '@TayyabHussainBhimshika', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 33,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Anand+Sheoran',
    name: 'Anand Sheoran',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, focused on rural infrastructure development and water management.',
    education: 'Bachelor of Engineering in Civil Engineering, NIT Kurukshetra',
    district: 'Sonipat',
    constituency: 'Ganaur',
    achievements: [
      'State Secretary, Haryana',
      'Expert in rural infrastructure',
      'Led water management projects',
      'Promoted sustainable development',
      'Advocate for rural connectivity'
    ],
    connect: { twitter: '@AnandSheoran', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 34,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Sushil+Kumar+Gautam',
    name: 'Sushil Kumar Gautam',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, dedicated to education reform and skill development programs.',
    education: 'Master of Education, Kurukshetra University',
    district: 'Panipat',
    constituency: 'Samalkha',
    achievements: [
      'State Secretary, Haryana',
      'Champion of education reform',
      'Led skill development programs',
      'Promoted technical education',
      'Expert in vocational training'
    ],
    connect: { twitter: '@SushilKumarGautam', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 35,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Pala+Ram+Rathi',
    name: 'Pala Ram Rathi',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, working towards cooperative development and financial inclusion.',
    education: 'Master of Commerce in Cooperative Management, GGSIPU',
    district: 'Charkhi Dadri',
    constituency: 'Dadri',
    achievements: [
      'State Secretary, Haryana',
      'Expert in cooperative development',
      'Led financial inclusion programs',
      'Promoted rural banking',
      'Advocate for credit facilities'
    ],
    connect: { twitter: '@PalaRamRathi', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 36,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Ramesh+Kumar',
    name: 'Ramesh Kumar',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, focused on industrial development and employment generation.',
    education: 'Bachelor of Technology in Mechanical Engineering, Kurukshetra University',
    district: 'Ambala',
    constituency: 'Mullana',
    achievements: [
      'State Secretary, Haryana',
      'Expert in industrial development',
      'Led employment generation programs',
      'Promoted manufacturing sector',
      'Advocate for industrial reforms'
    ],
    connect: { twitter: '@RameshKumar', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 37,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Ram+Rattan+Kashyap',
    name: 'Ram Rattan Kashyap',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, dedicated to legal affairs and constitutional matters.',
    education: 'Bachelor of Laws, Rajiv Gandhi School of Intellectual Property Law',
    district: 'Yamunanagar',
    constituency: 'Jagadhri',
    achievements: [
      'State Secretary, Haryana',
      'Expert in legal affairs',
      'Led constitutional reform initiatives',
      'Promoted legal awareness',
      'Advocate for judicial reforms'
    ],
    connect: { twitter: '@RamRattanKashyap', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 38,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Jogiram',
    name: 'Jogiram',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, dedicated to administrative efficiency and organizational development.',
    education: 'Master of Public Administration, Kurukshetra University',
    district: 'Karnal',
    constituency: 'Karnal',
    achievements: [
      'State Secretary, Haryana',
      'Expert in administrative efficiency',
      'Led organizational development',
      'Promoted transparent governance',
      'Strengthened party infrastructure'
    ],
    connect: { twitter: '@Jogiram', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 39,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Joginder+Malik',
    name: 'Joginder Malik',
    experience: '15+ years',
    role: 'State Secretary',
    description: 'State Secretary of INLD Haryana, dedicated to party organization and member welfare.',
    education: 'Master of Arts in Political Science',
    district: 'Rohtak',
    constituency: 'Rohtak',
    achievements: [
      'State Secretary, Haryana',
      'Strengthened party organization',
      'Led member welfare initiatives',
      'Expert in political coordination',
      'Promoted grassroots democracy'
    ],
    connect: { twitter: '@JoginderMalik', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 40,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Ranveer+Mandola',
    name: 'Ranveer Mandola',
    experience: '15+ years',
    role: 'State Organization Secretary',
    description: 'State Organization Secretary of INLD Haryana, working on party infrastructure and organizational development.',
    education: 'Bachelor of Commerce, Organizational Management',
    district: 'Panipat',
    constituency: 'Panipat City',
    achievements: [
      'State Organization Secretary, Haryana',
      'Built strong party infrastructure',
      'Led organizational development',
      'Expert in member recruitment',
      'Promoted democratic participation'
    ],
    connect: { twitter: '@RanveerMandola', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 41,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Manoj+Aggarwal',
    name: 'Manoj Aggarwal',
    experience: '15+ years',
    role: 'State Treasurer',
    description: 'State Treasurer of INLD Haryana, responsible for financial management and party resource allocation.',
    education: 'Master of Commerce, Finance & Accounting',
    district: 'Gurgaon',
    constituency: 'Gurgaon',
    achievements: [
      'State Treasurer, Haryana',
      'Expert in financial management',
      'Transparent resource allocation',
      'Built strong financial foundation',
      'Promoted fiscal accountability'
    ],
    connect: { twitter: '@ManojAggarwal', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 5,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Prakash+Bharti',
    name: 'Prakash Bharti',
    experience: '25+ years',
    role: 'Secretary General',
    description: 'Secretary General of INLD, responsible for party administration and coordination.',
    education: 'Graduate',
    district: 'Hisar',
    constituency: '',
    achievements: [
      'Secretary General of INLD',
      'Expert in party organization',
      'Promoted youth involvement'
    ],
    connect: { twitter: '', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 6,
    imageUrl: 'https://th.bing.com/th/id/OIP.4L8nM6G1qQ2Y5jT7xH9UbQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'R.S. Choudhary',
    experience: '30+ years',
    role: 'National Vice-President',
    description: 'National Vice-President of INLD, experienced in policy formulation and strategic planning for rural development.',
    education: 'Master of Arts in Political Science, Kurukshetra University',
    district: 'Karnal',
    constituency: 'Karnal',
    achievements: [
      'National Vice-President of INLD',
      'Policy and strategy expert',
      'Promoted party growth across states',
      'Champion of rural development',
      'Led strategic planning initiatives'
    ],
    connect: { twitter: '@RSChoudhary', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 7,
    imageUrl: 'https://www.jagranimages.com/images/newimg/10122019/10_12_2019-03ynr-53_19831598_83144.jpg',
    name: 'Sher Singh Badshami',
    experience: '28+ years',
    role: 'National Vice-President & Chairman, Disciplinary Action Committee',
    description: 'National Vice-President and Chairman of the Disciplinary Action Committee, known for maintaining party discipline and ethics.',
    education: 'Bachelor of Laws, Punjabi University',
    district: 'Sonipat',
    constituency: 'Sonipat',
    achievements: [
      'National Vice-President of INLD',
      'Chairman, Disciplinary Action Committee',
      'Maintained party discipline',
      'Expert in organizational ethics',
      'Promoted transparency in governance'
    ],
    connect: { twitter: '@SherSinghBadshami', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 8,
    imageUrl: 'https://th.bing.com/th/id/OIP.qQAJcfBAyjIRjjeB-cK_BgHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'M.S. Malik',
    experience: '30+ years',
    role: 'Chairman, Policy & Programming Committee',
    description: 'Chairman of the Policy & Programming Committee, responsible for strategic planning and comprehensive policy formulation for the party.',
    education: 'Master of Public Administration, Punjab University',
    district: 'Hisar',
    constituency: 'Hisar',
    achievements: [
      'Chairman, Policy & Programming Committee',
      'Expert in policy formulation',
      'Strategic planner for INLD',
      'Led comprehensive policy reforms',
      'Architect of party vision documents'
    ],
    connect: { twitter: '@MSMalik', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 9,
    imageUrl: 'https://th.bing.com/th/id/OIP.e6ODTveTiFIJQKFUVVp8DwHaHY?w=177&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
    name: 'S. Nachhatar Singh Malhan',
    experience: '20+ years',
    role: 'Office Secretary',
    description: 'Office Secretary, manages party administration and ensures smooth operational efficiency across all party offices.',
    education: 'Bachelor of Arts in Public Administration',
    district: 'Fatehabad',
    constituency: 'Fatehabad',
    achievements: [
      'Office Secretary of INLD',
      'Expert in administrative management',
      'Streamlined party operations',
      'Led organizational efficiency initiatives',
      'Coordinator for inter-state activities'
    ],
    connect: { twitter: '@NachhatarSinghMalhan', facebook: 'Facebook', email: 'Email' }
  },
  {
    id: 10,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Rakesh+Sihag',
    name: 'Rakesh Sihag',
    experience: '15+ years',
    role: 'Media Coordinator',
    description: 'Media Coordinator, responsible for party communications, media relations, and public outreach strategies.',
    education: 'Master of Journalism and Mass Communication',
    district: 'Sirsa',
    constituency: 'Sirsa',
    achievements: [
      'Media Coordinator of INLD',
      'Expert in strategic communications',
      'Built strong media relationships',
      'Led digital outreach campaigns',
      'Enhanced party public image'
    ],
    connect: { twitter: '@RakeshSihag', facebook: 'Facebook', email: 'Email' }
  },
  
  {
    id: 12,
    imageUrl: 'https://placehold.co/400x600/ccc/FFFFFF?text=Adv+Raman+Dhaka',
    name: 'Adv Raman Dhaka',
    experience: '8+ years',
    role: 'ISO Secretary General',
    description: 'Secretary General of INLD Students Organization, responsible for student outreach and legal affairs.',
    education: 'LLB',
    district: 'Haryana',
    constituency: '',
    achievements: [
      'ISO Secretary General',
      'Legal advisor for student wing',
      'Promoted student engagement'
    ],
    connect: { twitter: '', facebook: 'Facebook', email: 'Email' }
  },
  
 

];

// --- Static lists for filters ---
const allDistricts = [
  'Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 
  'Gurugram (Gurgaon)', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 
  'Kurukshetra', 'Mahendragarh', 'Nuh (Mewat)', 'Palwal', 'Panchkula', 
  'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'
];

const allConstituencies = [
  'Ambala (SC)', 'Kurukshetra', 'Sirsa (SC)', 'Hisar', 'Karnal', 
  'Sonipat', 'Rohtak', 'Bhiwani–Mahendragarh', 'Gurgaon (Gurugram)', 'Faridabad'
];

// --- SVG Icons for the Cards ---
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> );
const TwitterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> );
const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> );
const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> );

// --- Card Component ---
const Card = ({ data, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <div className={`profile-card ${isOdd ? 'is-odd' : ''}`}>
      <div className="card-image-container">
        <img 
          src={data.imageUrl} 
          alt={`Profile of ${data.name}`} 
          className="profile-image" 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://placehold.co/400x600/ccc/FFFFFF?text=Image+Not+Found'; 
          }} 
        />
        {data.constituency && <span className="image-badge">{data.constituency}</span>}
      </div>
      <div className="card-content">
        <div className="header">
          <h1>{data.name}</h1>
          <div className="experience-info">
            <CalendarIcon />
            <span>{data.experience}</span>
          </div>
        </div>
        <p className="role">{data.role}</p>
        <p className="description">{data.description}</p>
        <div className="info-section">
          <h2>Education</h2>
          <p>{data.education}</p>
        </div>
        {data.district && (
          <div className="info-section">
            <h2>District</h2>
            <p>{data.district}</p>
          </div>
        )}
        <div className="info-section">
          <h2>Key Achievements</h2>
          <ul>
            {data.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="info-section">
          <h2>Connect</h2>
          <div className="connect-links">
            <a href="https://twitter.com/inldofficial" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /> {data.connect.twitter}</a>
            <a href="https://facebook.com/inldofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /> {data.connect.facebook}</a>
            <a href="mailto:info@inld.org" aria-label="Email"><EmailIcon /> {data.connect.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [constituencyFilter, setConstituencyFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter the data based on search term and filters
  const filteredData = useMemo(() => {
    return cardData
      .filter(card => {
        const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
        const districtMatch = districtFilter ? card.district === districtFilter : true;
        const constituencyMatch = constituencyFilter ? card.constituency === constituencyFilter : true;
        return nameMatch && districtMatch && constituencyMatch;
      })
      .sort((a, b) => a.id - b.id); // Sort by ID number in ascending order
  }, [searchTerm, districtFilter, constituencyFilter]);

  return (
    <div className="leadership-page">
      <div className="leadership-container">
        {/* Hero Section */}
        <div className="leadership-header">
          <h1>Our Leadership</h1>
          <p>
            Meet the leaders who have shaped INLD's journey and continue to work for the
            development of Haryana and the welfare of its people.
          </p>

          {/* Search and Filter Section */}
          <div className="search-filter-section">
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for a leader..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
                aria-label="Toggle filters"
              >
                <IoFilter /> Filters
              </button>
            </div>
            
            {showFilters && (
              <div className="filters-dropdown">
                <div className="filter-group">
                  <label htmlFor="district-filter">Filter by District:</label>
                  <select 
                    id="district-filter"
                    className="filter-select"
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                  >
                    <option value="">All Districts</option>
                    {allDistricts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter-group">
                  <label htmlFor="constituency-filter">Filter by Constituency:</label>
                  <select 
                    id="constituency-filter"
                    className="filter-select"
                    value={constituencyFilter}
                    onChange={(e) => setConstituencyFilter(e.target.value)}
                  >
                    <option value="">All Constituencies</option>
                    {allConstituencies.map((constituency) => (
                      <option key={constituency} value={constituency}>
                        {constituency}
                      </option>
                    ))}
                  </select>
                </div>
                {(districtFilter || constituencyFilter) && (
                  <button 
                    className="clear-filters-btn"
                    onClick={() => {
                      setDistrictFilter('');
                      setConstituencyFilter('');
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Leaders Section */}
        <section className="hero-section-wrapper">
          <div className="cards-grid">
            {filteredData.length > 0 ? (
              filteredData.map((card, index) => (
                <Card key={card.id} data={card} index={index} />
              ))
            ) : (
              <div className="no-results">
                <p>No leaders found matching your search criteria.</p>
                <button 
                  className="reset-search-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setDistrictFilter('');
                    setConstituencyFilter('');
                  }}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Chautala Legacy Section */}
        <div className="legacy-section">
          <h2>The Chautala Legacy</h2>
          <p>
            The Indian National Lok Dal carries forward the rich political legacy of the Chautala family, 
            which has been at the forefront of Haryana politics for over five decades. 
            From Chaudhary Devi Lal's vision of rural development to the current generation's 
            focus on modernization and youth empowerment, the family has consistently 
            championed the cause of farmers and rural communities.
          </p>
          <div className="legacy-features">
            <div className="legacy-item">
              <div className="legacy-icon-circle">🌾</div>
              <h4>Agricultural Heritage</h4>
              <p>Deep roots in farming community with firsthand understanding of agricultural challenges.</p>
            </div>
            <div className="legacy-item">
              <div className="legacy-icon-circle">🏛️</div>
              <h4>Political Experience</h4>
              <p>Decades of experience in governance at state and national levels.</p>
            </div>
            <div className="legacy-item">
              <div className="legacy-icon-circle">👥</div>
              <h4>People's Connect</h4>
              <p>Strong grassroots connection with the people of Haryana across all communities.</p>
            </div>
          </div>
        </div>

        {/* Party Organization Section */}
        <div className="organization-section">
          <h2>Party Organization</h2>
          <div className="organization-grid">
            <div className="org-card">
              <div className="org-icon">👤</div>
              <h4>Party President</h4>
              <p>Overall leadership and strategic direction</p>
            </div>
            <div className="org-card">
              <div className="org-icon">👥</div>
              <h4>Working Committee</h4>
              <p>Policy formulation and decision making</p>
            </div>
            <div className="org-card">
              <div className="org-icon">📅</div>
              <h4>District Units</h4>
              <p>Local organization and ground operations</p>
            </div>
            <div className="org-card">
              <div className="org-icon">🎯</div>
              <h4>Youth Wing</h4>
              <p>Future leaders and fresh perspectives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
