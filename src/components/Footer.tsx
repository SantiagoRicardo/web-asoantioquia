import { Recycle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Asoantioquia</span>
            </div>
            <p className="text-gray-300 mb-4">
              Promovemos la cultura del reciclaje y la economía circular, 
              generando oportunidades para los recicladores de oficio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+57 (4) 789-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@asoantioquia.org</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ubicaciones</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Montería, Córdoba</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Turbo, Antioquia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Asoantioquia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}