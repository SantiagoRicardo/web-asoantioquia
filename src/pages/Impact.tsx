import { motion } from 'framer-motion';
import { BarChart3, Users, Building2, MapPin, TrendingUp, Leaf, Award, Target } from 'lucide-react';
import { companyInfo } from '../services/mockData';

export function Impact() {
  const impacts = [
    {
      icon: BarChart3,
      value: companyInfo.impact.tonnagesRecycled.toLocaleString(),
      label: 'Toneladas Recicladas',
      description: 'Material procesado y reintegrado a la cadena productiva',
      color: 'green',
      trend: '+15%'
    },
    {
      icon: Users,
      value: companyInfo.impact.jobsCreated.toLocaleString(),
      label: 'Empleos Creados',
      description: 'Oportunidades laborales generadas para recicladores',
      color: 'blue',
      trend: '+22%'
    },
    {
      icon: Building2,
      value: companyInfo.impact.companiesPartnered.toLocaleString(),
      label: 'Empresas Aliadas',
      description: 'Organizaciones que confían en nuestros servicios',
      color: 'purple',
      trend: '+18%'
    },
    {
      icon: MapPin,
      value: companyInfo.impact.communitiesBenefited.toLocaleString(),
      label: 'Comunidades Beneficiadas',
      description: 'Barrios y sectores con programas activos',
      color: 'orange',
      trend: '+12%'
    }
  ];

  const environmentalImpact = [
    { label: 'Reducción de CO₂', value: 85, unit: '2,500 toneladas anuales', color: 'green' },
    { label: 'Ahorro de Agua', value: 60, unit: '15,000 litros diarios', color: 'blue' },
    { label: 'Energía Renovable', value: 75, unit: '60% de nuestras operaciones', color: 'yellow' },
    { label: 'Residuos Aprovechados', value: 92, unit: '92% de eficiencia', color: 'purple' }
  ];

  const goals2024 = [
    { icon: BarChart3, text: 'Procesar 20,000 toneladas', progress: 65 },
    { icon: Users, text: 'Crear 200 nuevos empleos', progress: 45 },
    { icon: Building2, text: 'Alianzas con 50 empresas más', progress: 70 },
    { icon: MapPin, text: 'Expandir a 10 comunidades', progress: 30 }
  ];

  const colorClasses = {
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600', bar: 'bg-green-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600', bar: 'bg-blue-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', bar: 'bg-purple-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600', bar: 'bg-orange-500' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', gradient: 'from-yellow-500 to-yellow-600', bar: 'bg-yellow-500' }
  };

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Floating geometric shapes */}
        <FloatingElement delay={0}>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/30 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-green-600/30 rounded-full blur-lg"></div>
        </FloatingElement>
        
        {/* Curved decorations */}
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.05"></path>
        </svg>
      </div>

      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Resultados Medibles
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nuestro
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Impacto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mira cómo estamos transformando residuos en oportunidades y 
              generando un impacto positivo en el medio ambiente y la sociedad
            </p>
          </motion.div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              const colors = colorClasses[impact.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 overflow-hidden">
                    {/* Decorative background */}
                    <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-full transform translate-x-12 -translate-y-12`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex p-4 rounded-2xl mb-6 ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      
                      <div className="flex items-center justify-center mb-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="text-4xl font-bold text-gray-900"
                        >
                          {impact.value}
                        </motion.div>
                        <div className="ml-2 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                          {impact.trend}
                        </div>
                      </div>
                      
                      <div className="text-lg font-semibold text-gray-700 mb-3">
                        {impact.label}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Environmental Impact & Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Impacto Ambiental
                  </h2>
                  <p className="text-green-600 font-medium">Resultados sostenibles</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {environmentalImpact.map((item, index) => {
                  const colors = colorClasses[item.color as keyof typeof colorClasses];
                  
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-700">{item.label}</h3>
                        <span className="text-sm font-medium text-gray-600">{item.value}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                          className={`h-3 rounded-full ${colors.bar}`}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.unit}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* 2024 Goals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Objetivos 2024
                  </h2>
                  <p className="text-blue-600 font-medium">Metas en progreso</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {goals2024.map((goal, index) => {
                  const Icon = goal.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 font-medium">{goal.text}</span>
                          <span className="text-sm font-semibold text-blue-600">{goal.progress}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${goal.progress}%` }}
                            transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                            className="h-2 rounded-full bg-blue-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.1&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;4&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <Award className="h-12 w-12 text-white mr-4" />
                  <h3 className="text-4xl font-bold text-white">
                    Reconocimientos y Certificaciones
                  </h3>
                </div>
                
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                  Nuestro trabajo ha sido reconocido por organizaciones nacionales e internacionales
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      ISO 14001
                    </motion.div>
                    <div className="text-blue-200">Gestión Ambiental</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      5
                    </motion.div>
                    <div className="text-blue-200">Premios Nacionales</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      A+
                    </motion.div>
                    <div className="text-blue-200">Calificación Sostenibilidad</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}