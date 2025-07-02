import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Award, BookOpen, Handshake, TrendingUp, Globe } from 'lucide-react';

export function SocialResponsibility() {
  const initiatives = [
    {
      icon: Users,
      title: 'Inclusión Laboral',
      description: 'Generamos empleo digno para recicladores de oficio, mejorando sus condiciones de vida y formalizando su trabajo.',
      color: 'blue',
      stats: '450+ empleos creados',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: BookOpen,
      title: 'Educación Ambiental',
      description: 'Desarrollamos programas educativos en colegios y comunidades para promover la cultura del reciclaje.',
      color: 'green',
      stats: '10,000+ personas capacitadas',
      image: 'https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Heart,
      title: 'Apoyo Comunitario',
      description: 'Brindamos capacitación técnica y apoyo psicosocial a las familias de recicladores.',
      color: 'red',
      stats: '25 comunidades beneficiadas',
      image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Award,
      title: 'Reconocimiento',
      description: 'Celebramos y visibilizamos el trabajo de los recicladores como agentes ambientales clave.',
      color: 'purple',
      stats: '15 reconocimientos otorgados',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const programs = [
    {
      title: 'Programa de Microcréditos',
      description: 'Facilitamos acceso a capital para que los recicladores puedan mejorar sus herramientas y equipos.',
      icon: TrendingUp,
      beneficiaries: 120
    },
    {
      title: 'Red de Apoyo Familiar',
      description: 'Acompañamiento integral a las familias con servicios de salud, educación y bienestar.',
      icon: Handshake,
      beneficiaries: 300
    },
    {
      title: 'Certificación Laboral',
      description: 'Programas de certificación que dignifican y profesionalizan el oficio del reciclaje.',
      icon: Globe,
      beneficiaries: 200
    }
  ];

  const FloatingParticle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-2 h-2 bg-green-400/30 rounded-full"
      animate={{
        y: [-20, -100, -20],
        x: [-10, 10, -10],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 1.5} />
        ))}
        
        {/* Curved decorations */}
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ef4444" opacity="0.05"></path>
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
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Heart className="mr-2 h-4 w-4" />
              Compromiso Social
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Responsabilidad
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"> Social</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso va más allá del reciclaje. Trabajamos por la 
              transformación social y el desarrollo sostenible de las comunidades
            </p>
          </motion.div>

          {/* Main Initiatives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              const colorClasses = {
                blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
                green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
                red: { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-600' },
                purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' }
              };
              const colors = colorClasses[initiative.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="md:flex">
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <img
                          src={initiative.image}
                          alt={initiative.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className={`inline-block ${colors.light} ${colors.text} px-3 py-1 rounded-full text-sm font-semibold`}>
                            {initiative.stats}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-3/5 p-8">
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className={`text-2xl font-bold text-gray-900 group-hover:${colors.text} transition-colors duration-300`}>
                            {initiative.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {initiative.description}
                        </p>
                        
                        <motion.button
                          whileHover={{ x: 5 }}
                          className={`inline-flex items-center ${colors.text} font-semibold hover:opacity-80 transition-opacity duration-300`}
                        >
                          Conocer más
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-2"
                          >
                            →
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Programas Complementarios
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Iniciativas adicionales que fortalecen nuestro impacto social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                      <Icon className="h-8 w-8 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                      {program.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">{program.beneficiaries}+</div>
                      <div className="text-sm text-green-700">Beneficiarios</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.1&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;4&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Nuestro Impacto Social Medible
                </h3>
                <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
                  Cada número representa vidas transformadas y comunidades fortalecidas
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-4xl font-bold text-white mb-2"
                    >
                      450+
                    </motion.div>
                    <div className="text-red-200">Empleos Generados</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="text-4xl font-bold text-white mb-2"
                    >
                      25
                    </motion.div>
                    <div className="text-red-200">Comunidades Beneficiadas</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      className="text-4xl font-bold text-white mb-2"
                    >
                      10,000+
                    </motion.div>
                    <div className="text-red-200">Personas Capacitadas</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="text-4xl font-bold text-white mb-2"
                    >
                      95%
                    </motion.div>
                    <div className="text-red-200">Satisfacción Familiar</div>
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