const sections = {
  dashboard: `
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="stat-card bg-white p-6 rounded-lg shadow-sm border-blue-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600">Ingresos Mes</p>
              <p class="text-2xl font-bold text-gray-800 mt-1">€45,230</p>
              <p class="text-xs text-green-600 mt-2">↑ 12.5%</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-euro-sign text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div class="stat-card bg-white p-6 rounded-lg shadow-sm border-green-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600">Contratos Activos</p>
              <p class="text-2xl font-bold text-gray-800 mt-1">23</p>
              <p class="text-xs text-green-600 mt-2">↑ 3 nuevos</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-file-contract text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div class="stat-card bg-white p-6 rounded-lg shadow-sm border-orange-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600">Órdenes Pendientes</p>
              <p class="text-2xl font-bold text-gray-800 mt-1">8</p>
              <p class="text-xs text-orange-600 mt-2">5 urgentes</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-tasks text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div class="stat-card bg-white p-6 rounded-lg shadow-sm border-purple-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600">Empleados</p>
              <p class="text-2xl font-bold text-gray-800 mt-1">15</p>
              <p class="text-xs text-gray-600 mt-2">Activos</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-users text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Actividad Reciente</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Nueva factura generada #F-2024-0156</p>
                <p class="text-xs text-gray-500 mt-1">Hace 5 minutos</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Contrato renovado: Empresa XYZ</p>
                <p class="text-xs text-gray-500 mt-1">Hace 1 hora</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Orden de taller #OT-845 completada</p>
                <p class="text-xs text-gray-500 mt-1">Hace 2 horas</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Nuevo empleado: María García</p>
                <p class="text-xs text-gray-500 mt-1">Hace 3 horas</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Tareas Pendientes</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <input type="checkbox" class="w-4 h-4 text-blue-600">
              <div class="flex-1">
                <p class="text-sm text-gray-800">Revisar factura pendiente cliente ABC</p>
                <p class="text-xs text-red-600 mt-1">Vence hoy</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <input type="checkbox" class="w-4 h-4 text-blue-600">
              <div class="flex-1">
                <p class="text-sm text-gray-800">Aprobar presupuesto proyecto software</p>
                <p class="text-xs text-orange-600 mt-1">Vence mañana</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <input type="checkbox" class="w-4 h-4 text-blue-600">
              <div class="flex-1">
                <p class="text-sm text-gray-800">Actualizar inventario de piezas</p>
                <p class="text-xs text-gray-600 mt-1">Esta semana</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <input type="checkbox" class="w-4 h-4 text-blue-600">
              <div class="flex-1">
                <p class="text-sm text-gray-800">Llamar a proveedor equipos red</p>
                <p class="text-xs text-gray-600 mt-1">Esta semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  facturas: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Facturación</h3>
          <p class="text-sm text-gray-600">Gestión de facturas emitidas y recibidas</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nueva Factura</span>
        </button>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar factura..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todas</option>
              <option>Emitidas</option>
              <option>Recibidas</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los estados</option>
              <option>Pagada</option>
              <option>Pendiente</option>
              <option>Vencida</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Número</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Cliente/Proveedor</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Importe</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">F-2024-0156</td>
                <td class="px-6 py-4 text-sm text-gray-800">Empresa ABC S.L.</td>
                <td class="px-6 py-4 text-sm text-gray-600">15/11/2024</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€2,450.00</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Pagada</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-download"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">F-2024-0155</td>
                <td class="px-6 py-4 text-sm text-gray-800">Corporación XYZ</td>
                <td class="px-6 py-4 text-sm text-gray-600">12/11/2024</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€5,680.00</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pendiente</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-download"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">F-2024-0154</td>
                <td class="px-6 py-4 text-sm text-gray-800">Tech Solutions Ltd.</td>
                <td class="px-6 py-4 text-sm text-gray-600">08/11/2024</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€1,200.00</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Vencida</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-download"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <p class="text-sm text-gray-600">Mostrando 1-3 de 156 facturas</p>
          <div class="flex space-x-2">
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Anterior</button>
            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  `,

  contratos: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Contratos</h3>
          <p class="text-sm text-gray-600">Gestión de contratos con clientes y proveedores</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Contrato</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
          <p class="text-sm text-gray-600">Activos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">23</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <p class="text-sm text-gray-600">Por Vencer (30 días)</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">5</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-500">
          <p class="text-sm text-gray-600">Finalizados</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">47</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar contrato..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los tipos</option>
              <option>Cliente</option>
              <option>Proveedor</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Por vencer</option>
              <option>Finalizado</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Referencia</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Empresa</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tipo</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Fecha Inicio</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Fecha Fin</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">CT-2024-045</td>
                <td class="px-6 py-4 text-sm text-gray-800">Empresa ABC S.L.</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Cliente</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">01/01/2024</td>
                <td class="px-6 py-4 text-sm text-gray-600">31/12/2024</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€24,000</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Activo</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-file-invoice"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">CT-2024-043</td>
                <td class="px-6 py-4 text-sm text-gray-800">Tech Supplies Co.</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Proveedor</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">15/03/2024</td>
                <td class="px-6 py-4 text-sm text-gray-600">15/03/2025</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€18,500</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Activo</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-file-invoice"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">CT-2024-038</td>
                <td class="px-6 py-4 text-sm text-gray-800">Corporación XYZ</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Cliente</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">01/06/2024</td>
                <td class="px-6 py-4 text-sm text-gray-600">31/12/2024</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€36,000</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Por vencer</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-file-invoice"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,

  empleados: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Empleados</h3>
          <p class="text-sm text-gray-600">Gestión de personal y nóminas</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Empleado</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Total Empleados</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">15</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Administrativos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">5</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Técnicos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">8</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Directivos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">2</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar empleado..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los departamentos</option>
              <option>Administración</option>
              <option>Técnico</option>
              <option>Desarrollo</option>
              <option>Infraestructura</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JL
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Juan López</h4>
                  <p class="text-xs text-gray-600">Técnico Senior</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>juan.lopez@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 123 456</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Taller</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>

          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MG
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">María García</h4>
                  <p class="text-xs text-gray-600">Desarrolladora</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>maria.garcia@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 234 567</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Desarrollo</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>

          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  CS
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Carlos Sánchez</h4>
                  <p class="text-xs text-gray-600">Director Técnico</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>carlos.sanchez@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 345 678</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Dirección</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>

          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AM
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Ana Martínez</h4>
                  <p class="text-xs text-gray-600">Administrativa</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>ana.martinez@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 456 789</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Administración</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>

          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                  PR
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Pedro Rodríguez</h4>
                  <p class="text-xs text-gray-600">Ingeniero Redes</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>pedro.rodriguez@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 567 890</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Infraestructura</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>

          <div class="card border border-gray-200 rounded-lg p-4">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  LF
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Laura Fernández</h4>
                  <p class="text-xs text-gray-600">Técnico Taller</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope w-4"></i>
                <span>laura.fernandez@empresa.com</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-phone w-4"></i>
                <span>+34 600 678 901</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-briefcase w-4"></i>
                <span>Taller</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Activo</span>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  taller: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Taller</h3>
          <p class="text-sm text-gray-600">Órdenes de trabajo y reparaciones</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nueva Orden</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <p class="text-sm text-gray-600">Pendientes</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">8</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
          <p class="text-sm text-gray-600">En Proceso</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">12</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
          <p class="text-sm text-gray-600">Completadas</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">156</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
          <p class="text-sm text-gray-600">Urgentes</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">5</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar orden..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los estados</option>
              <option>Pendiente</option>
              <option>En proceso</option>
              <option>Completada</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los tipos</option>
              <option>Contrato</option>
              <option>Particular</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Orden</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tipo</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Descripción</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Técnico</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Prioridad</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">OT-845</td>
                <td class="px-6 py-4 text-sm text-gray-800">Empresa ABC</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Contrato</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">Mantenimiento servidor</td>
                <td class="px-6 py-4 text-sm text-gray-600">Juan López</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Alta</span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">En proceso</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">OT-844</td>
                <td class="px-6 py-4 text-sm text-gray-800">Pedro Gómez</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Particular</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">Reparación ordenador</td>
                <td class="px-6 py-4 text-sm text-gray-600">Laura Fernández</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Normal</span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Pendiente</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">OT-843</td>
                <td class="px-6 py-4 text-sm text-gray-800">Tech Solutions</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Contrato</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">Instalación equipo red</td>
                <td class="px-6 py-4 text-sm text-gray-600">Pedro Rodríguez</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Alta</span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completada</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-file-invoice"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,

  software: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Desarrollo de Software</h3>
          <p class="text-sm text-gray-600">Proyectos y tareas de desarrollo</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Proyecto</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Proyectos Activos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">6</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">En Desarrollo</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">4</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">En Testing</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">2</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Completados</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">28</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Portal Cliente Web</h4>
              <p class="text-xs text-gray-600 mt-1">Empresa ABC S.L.</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">En desarrollo</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Desarrollo de portal web para gestión de clientes con panel de administración y reporting.</p>
          <div class="space-y-3 mb-4">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Progreso</span>
                <span>65%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2">
              <i class="fas fa-calendar text-gray-400"></i>
              <span class="text-gray-600">Entrega: 30/12/2024</span>
            </div>
            <div class="flex items-center -space-x-2">
              <div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                MG
              </div>
              <div class="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                JR
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">App Móvil Inventario</h4>
              <p class="text-xs text-gray-600 mt-1">Uso interno</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Testing</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Aplicación móvil para gestión de inventario en tiempo real con código QR.</p>
          <div class="space-y-3 mb-4">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Progreso</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2">
              <i class="fas fa-calendar text-gray-400"></i>
              <span class="text-gray-600">Entrega: 15/12/2024</span>
            </div>
            <div class="flex items-center -space-x-2">
              <div class="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                LC
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Sistema CRM Personalizado</h4>
              <p class="text-xs text-gray-600 mt-1">Tech Solutions Ltd.</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">En desarrollo</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">CRM a medida con integración a sistemas existentes y automatización de procesos.</p>
          <div class="space-y-3 mb-4">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Progreso</span>
                <span>40%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 40%"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2">
              <i class="fas fa-calendar text-gray-400"></i>
              <span class="text-gray-600">Entrega: 28/02/2025</span>
            </div>
            <div class="flex items-center -space-x-2">
              <div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                MG
              </div>
              <div class="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                DS
              </div>
              <div class="w-8 h-8 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                AL
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">API Integración Pagos</h4>
              <p class="text-xs text-gray-600 mt-1">Corporación XYZ</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completado</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">API REST para integración de múltiples pasarelas de pago con sistema existente.</p>
          <div class="space-y-3 mb-4">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Progreso</span>
                <span>100%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2">
              <i class="fas fa-check-circle text-green-500"></i>
              <span class="text-gray-600">Completado: 10/11/2024</span>
            </div>
            <div class="flex items-center -space-x-2">
              <div class="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                JR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  infraestructura: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Infraestructura y Redes</h3>
          <p class="text-sm text-gray-600">Proyectos de infraestructura y diseño de redes</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Proyecto</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Proyectos Activos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">5</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Instalaciones</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">3</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Mantenimientos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">2</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Completados</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">42</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Diseño Red Corporativa</h4>
              <p class="text-xs text-gray-600 mt-1">Empresa ABC S.L.</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">En progreso</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Diseño e implementación de red corporativa para oficinas en 3 ubicaciones con VPN y redundancia.</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Tipo</p>
              <p class="text-sm font-semibold text-gray-800">Instalación</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Ubicaciones</p>
              <p class="text-sm font-semibold text-gray-800">3</p>
            </div>
          </div>
          <div class="space-y-2 text-sm mb-4">
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-calendar w-4"></i>
              <span>Inicio: 01/11/2024 - Fin: 20/12/2024</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-user w-4"></i>
              <span>Pedro Rodríguez</span>
            </div>
          </div>
          <button class="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Migración Cloud AWS</h4>
              <p class="text-xs text-gray-600 mt-1">Tech Solutions Ltd.</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Planificación</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Migración completa de infraestructura on-premise a AWS con arquitectura escalable.</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Tipo</p>
              <p class="text-sm font-semibold text-gray-800">Migración</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Servidores</p>
              <p class="text-sm font-semibold text-gray-800">12</p>
            </div>
          </div>
          <div class="space-y-2 text-sm mb-4">
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-calendar w-4"></i>
              <span>Inicio: 15/01/2025 - Fin: 15/03/2025</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-user w-4"></i>
              <span>Carlos Sánchez</span>
            </div>
          </div>
          <button class="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Actualización Firewall</h4>
              <p class="text-xs text-gray-600 mt-1">Corporación XYZ</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completado</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Actualización y configuración de firewall de nueva generación con IPS/IDS.</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Tipo</p>
              <p class="text-sm font-semibold text-gray-800">Actualización</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Equipos</p>
              <p class="text-sm font-semibold text-gray-800">2</p>
            </div>
          </div>
          <div class="space-y-2 text-sm mb-4">
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-check-circle text-green-500"></i>
              <span>Completado: 05/11/2024</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-user w-4"></i>
              <span>Pedro Rodríguez</span>
            </div>
          </div>
          <button class="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
        </div>

        <div class="card bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-semibold text-gray-800">Cableado Estructurado</h4>
              <p class="text-xs text-gray-600 mt-1">Nueva Oficina Centro</p>
            </div>
            <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">En progreso</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">Instalación de cableado estructurado Cat6A en nueva oficina con 50 puestos de trabajo.</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Tipo</p>
              <p class="text-sm font-semibold text-gray-800">Instalación</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-xs text-gray-600">Puntos</p>
              <p class="text-sm font-semibold text-gray-800">50</p>
            </div>
          </div>
          <div class="space-y-2 text-sm mb-4">
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-calendar w-4"></i>
              <span>Inicio: 10/11/2024 - Fin: 30/11/2024</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-user w-4"></i>
              <span>Juan López</span>
            </div>
          </div>
          <button class="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium">Ver detalles</button>
        </div>
      </div>
    </div>
  `,

  contactos: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Contactos</h3>
          <p class="text-sm text-gray-600">Clientes, proveedores y otros contactos</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Contacto</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Total Contactos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">156</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Clientes</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">98</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600">Proveedores</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">58</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar contacto..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todos los tipos</option>
              <option>Cliente</option>
              <option>Proveedor</option>
              <option>Otro</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nombre/Empresa</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tipo</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Teléfono</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Ciudad</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="table-row">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      EA
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800">Empresa ABC S.L.</p>
                      <p class="text-xs text-gray-600">Juan Pérez</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Cliente</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">contacto@empresaabc.com</td>
                <td class="px-6 py-4 text-sm text-gray-600">+34 912 345 678</td>
                <td class="px-6 py-4 text-sm text-gray-600">Madrid</td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-envelope"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      TS
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800">Tech Supplies Co.</p>
                      <p class="text-xs text-gray-600">María González</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Proveedor</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">ventas@techsupplies.com</td>
                <td class="px-6 py-4 text-sm text-gray-600">+34 913 456 789</td>
                <td class="px-6 py-4 text-sm text-gray-600">Barcelona</td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-envelope"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      CX
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800">Corporación XYZ</p>
                      <p class="text-xs text-gray-600">Carlos Ruiz</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Cliente</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">info@corporacionxyz.com</td>
                <td class="px-6 py-4 text-sm text-gray-600">+34 914 567 890</td>
                <td class="px-6 py-4 text-sm text-gray-600">Valencia</td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-envelope"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                      NI
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800">Network Imports S.A.</p>
                      <p class="text-xs text-gray-600">Ana López</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Proveedor</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">contacto@networkimports.com</td>
                <td class="px-6 py-4 text-sm text-gray-600">+34 915 678 901</td>
                <td class="px-6 py-4 text-sm text-gray-600">Sevilla</td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-envelope"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <p class="text-sm text-gray-600">Mostrando 1-4 de 156 contactos</p>
          <div class="flex space-x-2">
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Anterior</button>
            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  `,

  precios: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Listado de Precios</h3>
          <p class="text-sm text-gray-600">Productos, servicios y piezas</p>
        </div>
        <button class="btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>Nuevo Item</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
          <p class="text-sm text-gray-600">Productos</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">87</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
          <p class="text-sm text-gray-600">Servicios</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">24</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
          <p class="text-sm text-gray-600">Piezas y Partes</p>
          <p class="text-2xl font-bold text-gray-800 mt-1">243</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm">
        <div class="border-b border-gray-200">
          <div class="flex overflow-x-auto">
            <button class="tab-button px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap" data-tab="productos">
              Productos
            </button>
            <button class="tab-button px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap" data-tab="servicios">
              Servicios
            </button>
            <button class="tab-button px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap" data-tab="piezas">
              Piezas y Partes
            </button>
          </div>
        </div>

        <div class="p-4 border-b border-gray-200">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input type="text" placeholder="Buscar..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Todas las categorías</option>
              <option>Hardware</option>
              <option>Software</option>
              <option>Redes</option>
              <option>Accesorios</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Código</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Categoría</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Precio Base</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">IVA</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Precio Final</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">PROD-001</td>
                <td class="px-6 py-4 text-sm text-gray-800">Laptop Dell XPS 15</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Hardware</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">€1,245.00</td>
                <td class="px-6 py-4 text-sm text-gray-600">21%</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€1,506.45</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">15 unidades</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">PROD-002</td>
                <td class="px-6 py-4 text-sm text-gray-800">Monitor LG 27" 4K</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Hardware</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">€345.00</td>
                <td class="px-6 py-4 text-sm text-gray-600">21%</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€417.45</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">22 unidades</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">PROD-003</td>
                <td class="px-6 py-4 text-sm text-gray-800">Router Cisco Enterprise</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Redes</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">€890.00</td>
                <td class="px-6 py-4 text-sm text-gray-600">21%</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€1,076.90</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">3 unidades</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="px-6 py-4 text-sm text-gray-800 font-medium">PROD-004</td>
                <td class="px-6 py-4 text-sm text-gray-800">Teclado Mecánico Logitech</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Accesorios</span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">€85.00</td>
                <td class="px-6 py-4 text-sm text-gray-600">21%</td>
                <td class="px-6 py-4 text-sm text-gray-800 font-semibold">€102.85</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">45 unidades</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                    <button class="text-gray-600 hover:text-gray-800"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <p class="text-sm text-gray-600">Mostrando 1-4 de 87 productos</p>
          <div class="flex space-x-2">
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Anterior</button>
            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
            <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  `
};

const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const pageTitle = document.getElementById('pageTitle');
const sidebarItems = document.querySelectorAll('.sidebar-item');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

sidebarItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const section = item.dataset.section;
    content.innerHTML = sections[section];

    const titles = {
      dashboard: 'Dashboard',
      facturas: 'Facturación',
      contratos: 'Contratos',
      empleados: 'Empleados',
      taller: 'Taller',
      software: 'Desarrollo Software',
      infraestructura: 'Infraestructura',
      contactos: 'Contactos',
      precios: 'Precios'
    };

    pageTitle.textContent = titles[section];

    if (window.innerWidth < 768) {
      sidebar.classList.remove('open');
    }
  });
});

content.innerHTML = sections.dashboard;