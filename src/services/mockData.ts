export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

export interface Recycler {
  id: string;
  name: string;
  story: string;
  image: string;
  location: string;
  yearsWorking: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Recolección Especializada',
    description: 'Servicio de recolección puerta a puerta de materiales reciclables con rutas optimizadas y personal capacitado.',
    icon: 'Truck',
    image: 'https://images.pexels.com/photos/3181031/pexels-photo-3181031.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '2',
    title: 'Clasificación y Procesamiento',
    description: 'Clasificación técnica de materiales con tecnología avanzada para maximizar el aprovechamiento.',
    icon: 'Recycle',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '3',
    title: 'Capacitación Ambiental',
    description: 'Programas de educación ambiental para comunidades, empresas e instituciones educativas.',
    icon: 'GraduationCap',
    image: 'https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    title: 'Consultoría Sostenible',
    description: 'Asesoría especializada en gestión integral de residuos y implementación de programas sostenibles.',
    icon: 'FileText',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Nueva Planta de Clasificación en Montería',
    description: 'Inauguramos nuestra nueva planta con tecnología de punta que procesará 50 toneladas diarias de material reciclable, generando 120 nuevos empleos directos.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Infraestructura'
  },
  {
    id: '2',
    title: 'Programa de Educación Ambiental Escolar',
    description: 'Lanzamos nuestro programa educativo que beneficiará a más de 10,000 estudiantes de la región con talleres interactivos sobre reciclaje.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Educación'
  },
  {
    id: '3',
    title: 'Alianza Estratégica con Empresas Locales',
    description: 'Firmamos convenios con 15 empresas locales para implementar programas de reciclaje corporativo y economía circular.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Alianzas'
  }
];

export const recyclers: Recycler[] = [
  {
    id: '1',
    name: 'María Rodríguez',
    story: 'Llevo 15 años dedicada al reciclaje. Gracias a Asoantioquia he podido mejorar mis ingresos y dar una mejor educación a mis hijos.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Montería',
    yearsWorking: 15
  },
  {
    id: '2',
    name: 'Carlos Martínez',
    story: 'El programa de capacitación me ayudó a especializar mi trabajo. Ahora lidero un grupo de 8 recicladores en mi sector.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Turbo',
    yearsWorking: 8
  },
  {
    id: '3',
    name: 'Ana Gómez',
    story: 'Gracias al apoyo de Asoantioquia, logré formalizar mi microempresa de reciclaje y ahora empleo a 3 personas más.',
    image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Montería',
    yearsWorking: 12
  }
];

export const locations: Location[] = [
  {
    id: '1',
    name: 'Sede Principal - Montería',
    address: 'Carrera 5 #12-34, Barrio La Granja, Montería, Córdoba',
    phone: '+57 (4) 789-1234',
    email: 'monteria@asoantioquia.org',
    hours: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
    coordinates: { lat: 8.7479, lng: -75.8814 }
  },
  {
    id: '2',
    name: 'Sede Secundaria - Turbo',
    address: 'Calle 8 #15-20, Centro, Turbo, Antioquia',
    phone: '+57 (4) 789-5678',
    email: 'turbo@asoantioquia.org',
    hours: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
    coordinates: { lat: 8.0936, lng: -76.7350 }
  }
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Coca-Cola',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Coca-Cola-Logo.png',
    category: 'Bebidas'
  },
  {
    id: '2',
    name: 'Unilever',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Unilever-Logo.png',
    category: 'Consumo'
  },
  {
    id: '3',
    name: 'Nestlé',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Nestle-Logo.png',
    category: 'Alimentos'
  },
  {
    id: '4',
    name: 'P&G',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Procter-and-Gamble-Logo.png',
    category: 'Cuidado Personal'
  },
  {
    id: '5',
    name: 'Grupo Éxito',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_Grupo_%C3%89xito.svg/1200px-Logo_Grupo_%C3%89xito.svg.png',
    category: 'Retail'
  },
  {
    id: '6',
    name: 'Bavaria',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Bavaria-Logo.png',
    category: 'Bebidas'
  }
];

export const heroSlides: HeroSlide[] = [
  {
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Transformamos Residuos',
    subtitle: 'en Oportunidades',
    description: 'Promovemos la economía circular y generamos empleo digno para los recicladores de oficio en Colombia'
  },
  {
    image: 'https://images.pexels.com/photos/3181031/pexels-photo-3181031.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Construimos Futuro',
    subtitle: 'Sostenible',
    description: 'Innovamos en tecnologías limpias para crear un impacto positivo en el medio ambiente y la sociedad'
  },
  {
    image: 'https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Educamos para',
    subtitle: 'el Cambio',
    description: 'Capacitamos comunidades y empresas en prácticas sostenibles que transforman realidades'
  }
];

export const companyInfo = {
  mission: 'Promover la cultura del reciclaje y la economía circular en Colombia, generando oportunidades de empleo digno para los recicladores de oficio y contribuyendo a la sostenibilidad ambiental.',
  vision: 'Ser la organización líder en gestión integral de residuos en Colombia, reconocida por su impacto social y ambiental positivo.',
  values: [
    { name: 'Sostenibilidad', description: 'Compromiso con el cuidado del medio ambiente y el desarrollo de prácticas que preserven los recursos naturales para las futuras generaciones.' },
    { name: 'Inclusión Social', description: 'Apoyo integral a las comunidades de recicladores, promoviendo la equidad, el respeto y la dignificación de su labor.' },
    { name: 'Innovación', description: 'Implementación de tecnologías limpias y metodologías avanzadas que optimicen los procesos de reciclaje y gestión de residuos.' },
    { name: 'Transparencia', description: 'Gestión clara, ética y responsable de recursos, manteniendo comunicación abierta con todos nuestros grupos de interés.' }
  ],
  impact: {
    tonnagesRecycled: 12500,
    jobsCreated: 450,
    companiesPartnered: 85,
    communitiesBenefited: 25
  }
};