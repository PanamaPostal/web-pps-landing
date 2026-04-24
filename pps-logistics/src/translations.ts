export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      business: "Enterprise",
      sustainability: "Technology",
      about: "About",
      shipNow: "Download App"
    },
    hero: {
      tagline: "Solving 123 years of address uncertainty",
      headline: "The future of logistics in Panama.",
      subheadline: "Powered by Third Generation Postal Codes. The definitive solution for precision movement.",
      learnMore: "The Technology",
      getQuote: "Get Started"
    },
    problem: {
      title: "The Panama Paradox",
      description: "For more than a century, Panama has navigated without standardized addressing. Ambiguity has been the cost of movement. PPS ends the uncertainty.",
      solution: "Our Third Generation Postal Codes structure merges traditional routing with precise Lat/Long coordinates, creating a digital identity for every square inch of the country."
    },
    services: {
      title: "Indispensable Services",
      tagging: {
        title: "House Tagging",
        description: "Secure a physical, high-visibility plate for your home. Standardized, verified, and delivered for a $25 one-time fee.",
        action: "Order Tag"
      },
      logistics: {
        title: "National Logistics",
        description: "Seamless pickup and delivery anywhere in Panama. From Chiriquí to Darién, we know exactly where you are.",
        action: "Book Pickup"
      },
      intl: {
        title: "Global Integration",
        description: "Send international packages directly to your PPS Address. We bridge the gap between global retail and your front door.",
        action: "Get PPS Address"
      }
    },
    b2b: {
      title: "Enterprise Systems",
      tagline: "Upgrade your infrastructure.",
      description: "Logistics companies: integrate the PPS API. Eliminate 'not found' deliveries and optimize your fleet with our proprietary database.",
      action: "API Documentation"
    },
    government: {
      title: "Public Sector Impact",
      tagline: "Collaborating for a better Panama.",
      description: "We work alongside government organizations to solve critical routing problems in complex zones. By providing precise digital identities, we ensure essential services arrive exactly where they are needed.",
      garbage: {
        title: "Garbage Collection",
        description: "Optimizing collection routes to ensure 100% coverage in every neighborhood.",
        details: "PPS integrates Third Generation Postal Codes into waste management fleets, allowing trucks to follow optimized routes that eliminate missed pick-ups. Our system provides real-time heatmaps for city managers to verify collection status and optimize resource allocation based on precise residential density data."
      },
      mayors: {
        title: "Mayors' Offices",
        description: "Helping municipal governments mapping and managing community resources more efficiently.",
        details: "Muncipal governments utilize the PPS grid to manage urban infrastructure. From tracking street lamp maintenance to delivering property tax notifications, our standardized addresses provide a reliable database for every citizen. We bridge the gap between municipal administration and the reality of local terrain."
      },
      police: {
        title: "National Police",
        description: "Reducing response times for emergency services to help save lives.",
        details: "Ambiguous locations lead to delayed response times. PPS provides the National Police with high-precision digital identifiers for every home. Officers no longer rely on landmarks; they navigate directly to the GPS-synchronized Third Generation Postal Codes, ensuring rapid arrival at any incident scene."
      },
      back: "Back to Home",
      knowMore: "Know more"
    },
    trust: {
      since: "Since 2020",
      houses: "Verified Homes",
      hubs: "Regional Hubs",
      support: "Live Support",
      visionaryTitle: "Genius-level logistics.",
      visionaryText: "We aren't just moving packages; we are architecting the foundational grid of a nation. Thousands of homes have already been verified by our Third Generation Postal Codes."
    },
    education: {
      title: "What is a Postal Code?",
      summary: "Think of a postal code as a digital fingerprint for your location. It's a precise identifier that helps courier services and public infrastructure find you instantly.",
      points: [
        { 
          title: "Faster delivery", 
          description: "Standardized codes allow automated sorting systems to process your packages without manual intervention, skipping the 'not found' delays." 
        },
        { 
          title: "Emergency support", 
          description: "Police and paramedics use these codes to find your exact door when every second counts, no landmarks required." 
        },
        { 
          title: "Global standards", 
          description: "A postal code connects you to the global logistics grid, making international shopping from any website as easy as local delivery." 
        },
        { 
          title: "Tech-driven accuracy", 
          description: "Our 3rd Gen codes link directly to geographical coordinates, creating a bridge between physical locations and digital maps." 
        }
      ]
    },
    cta: {
      headline: "Join the Future",
      description: "Download the PPS application today and claim your digital identity.",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    footer: {
      mission: "Building the digital operating system for Panama's movement.",
      infrastructure: {
        title: "Systems",
        links: ["3rd Gen Codes", "API Gateway", "Fleet Telemetry", "Mapping Hub"]
      },
      business: {
        title: "Solutions",
        links: ["Third-Party Logistics", "Retail Integration", "Last-Mile API", "Enterprise Console"]
      },
      values: {
        title: "Company",
        links: ["Our Story", "Tech Stack", "Press Kit", "Privacy"]
      },
      account: {
        title: "Account",
        links: ["PPS ID", "Business Portal", "Manage Tags", "Support"]
      },
      copyright: "© 2026 PPS Logistics Inc. Panama's Definitve Postal Solution.",
      legal: ["Panama", "Privacy", "Terms", "Legal"]
    },
    privacy: {
      back: "Back to home",
      title: "Privacy Policy",
      effectiveLabel: "Effective date",
      effectiveDate: "April 24, 2026",
      intro:
        "PPS Logistics Inc. (\"PPS\", \"we\", \"our\") operates the PPS mobile applications for customers and drivers, the web platforms for warehouses and administrators, and the backend services that power them. This policy explains what personal information we collect, how we use it, with whom we share it, and the rights you have. By using our apps you accept this policy. If you do not agree, please do not use the apps.",
      sections: [
        {
          title: "1. Information we collect",
          body: [
            "We collect the minimum information required to operate the service. Depending on which app you use (customer or driver) and which features you engage with, this includes:"
          ],
          bullets: [
            "Account data: first name, last name, email, phone number with country code, and a password (we only store a one-way bcrypt hash, never the plain text).",
            "Profile data: profile photo you upload.",
            "Driver-only data: date of birth, driver's license photos (front and back), license issue and expiry dates, vehicle make, model, year, color and photos, and bank account details (bank name, account holder, account number) used exclusively for earnings withdrawals.",
            "Addresses: pickup and drop-off postal codes and coordinates you create or reference during a shipment.",
            "Payment data: we do not store full card numbers. Payments are processed by PayPal (sandbox/production) and Yappy (Banco General, Panama). We keep only transaction identifiers, order references and payment confirmation status.",
            "Location data: for drivers while \"online\", the app publishes GPS coordinates in real time so the platform can show the driver on the map, compute distance to pickups and deliveries, and verify on-site arrivals. When the driver toggles offline this stops.",
            "Device data: Firebase Cloud Messaging (FCM) device token to deliver push notifications, device model, operating system version, app version, preferred language, and crash/error diagnostics captured by Sentry.",
            "Usage data: timestamps of bookings, status changes (reached, picked, delivered), ratings, and standard web server logs (IP address, user agent) retained for a limited period for security and debugging."
          ]
        },
        {
          title: "2. How we use your information",
          body: [
            "We use your information to provide, maintain and improve the service."
          ],
          bullets: [
            "Authenticate you, keep your session active and secure the app.",
            "Match customers with available drivers, route shipments, and track deliveries in real time.",
            "Process payments, compute driver earnings and handle withdrawal requests.",
            "Send transactional notifications about your bookings (confirmed, on the way, delivered, cancelled).",
            "Detect fraud, abuse and technical errors, and improve app performance.",
            "Comply with legal obligations and respond to lawful requests from authorities."
          ]
        },
        {
          title: "3. Service providers we share data with",
          body: [
            "We share the minimum data needed with trusted third parties that help us run the service. They are bound by their own privacy policies and process data on our behalf:"
          ],
          bullets: [
            "Google Firebase (Authentication, Cloud Messaging, Realtime Database, Analytics, Crashlytics) — USA.",
            "Google Maps Platform — for mapping, geocoding and route computation.",
            "Sentry — crash and error reporting.",
            "PayPal — card and PayPal account payments.",
            "Yappy (Banco General) — local mobile payments in Panama.",
            "ZeptoMail (Zoho) — transactional email delivery.",
            "Apple App Store and Google Play — app distribution, in line with their own privacy policies.",
            "Our own cloud infrastructure (VPS hosted at 31.97.148.78, managed via Coolify) — application runtime and database hosting."
          ]
        },
        {
          title: "4. Where your data is stored",
          body: [
            "Primary application data is stored in our MySQL database hosted on our VPS. Session tokens are stored in Redis. Real-time driver location is stored in Firebase Realtime Database (Google servers, United States). Uploaded images (profile, vehicle, license, proof of delivery) are stored on the server filesystem and served over HTTPS. We use TLS in transit and industry-standard access controls at rest."
          ]
        },
        {
          title: "5. How long we keep your data",
          body: [
            "We keep your account information while your account is active. Booking history is kept for up to 5 years for accounting, tax and dispute-resolution purposes. Driver location history is ephemeral: the \"online\" node is deleted automatically when the driver disconnects. Server logs are rotated within 30 days. Deleted accounts are purged within 30 days except for records we are legally required to preserve."
          ]
        },
        {
          title: "6. Your rights",
          body: [
            "You have the right to access, correct, port and delete the personal information we hold about you."
          ],
          bullets: [
            "Access and correction: most profile fields can be edited directly in the app's Profile screen.",
            "Account deletion: you can request deletion from within the app (Profile → Delete account) or by emailing us. Once processed, your personal data is removed from our active systems within 30 days. We may retain anonymized records for analytics and records required by Panamanian law.",
            "Portability: email us and we will send you a machine-readable export of your data.",
            "Withdraw consent: you can disable push notifications, location access and analytics from your device settings at any time."
          ]
        },
        {
          title: "7. Security",
          body: [
            "We apply reasonable administrative, technical and physical safeguards: HTTPS/TLS on all public endpoints, bcrypt hashing for passwords, JWT tokens validated against a Redis session store, role-based access control on the admin and warehouse portals, and rate limiting on sensitive endpoints. No system is perfectly secure, but we work continuously to reduce risk. If we become aware of a breach affecting your information we will notify you promptly and follow the applicable legal obligations."
          ]
        },
        {
          title: "8. Children",
          body: [
            "PPS is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it."
          ]
        },
        {
          title: "9. International transfers",
          body: [
            "Some service providers (Google, Sentry, PayPal) process data in the United States and other jurisdictions. By using PPS you consent to this transfer. These providers are contractually obligated to protect your data with safeguards equivalent to those applicable in Panama."
          ]
        },
        {
          title: "10. Changes to this policy",
          body: [
            "We may update this policy from time to time. If a change is material we will notify you through the app or by email before it takes effect. The date at the top of the page will always reflect the latest revision."
          ]
        }
      ],
      contact: {
        title: "Contact us",
        description:
          "For privacy questions, data access requests or account deletion requests, contact us using the details below. We respond within 30 days.",
        emailLabel: "Email",
        email: "privacy@pps507.com",
        addressLabel: "Address",
        address: "PPS Logistics Inc., Panama City, Republic of Panama"
      }
    }
  },
  es: {
    nav: {
      solutions: "Soluciones",
      business: "Empresas",
      sustainability: "Tecnología",
      about: "Nosotros",
      shipNow: "Descargar App"
    },
    hero: {
      tagline: "Resolviendo 123 años de incertidumbre",
      headline: "El futuro de la logística en Panamá.",
      subheadline: "Impulsado por Códigos Postales de 3ra Generación. La solución definitiva para el transporte de precisión.",
      learnMore: "La Tecnología",
      getQuote: "Comenzar"
    },
    problem: {
      title: "La Paradoja de Panamá",
      description: "Durante más de un siglo, Panamá ha navegado sin una dirección estandarizada. La ambigüedad ha sido el costo del movimiento. PPS pone fin a la incertidumbre.",
      solution: "Nuestra estructura de Códigos Postales de Tercera Generación fusiona el enrutamiento tradicional con coordenadas Lat/Long precisas, creando una identidad digital para cada rincón del país."
    },
    services: {
      title: "Servicios Indispensables",
      tagging: {
        title: "Identificación de Casas",
        description: "Asegura una placa física de alta visibilidad para tu hogar. Estandarizada, verificada y entregada por un pago único de $25.",
        action: "Pedir Placa"
      },
      logistics: {
        title: "Logística Nacional",
        description: "Recogida y entrega sin interrupciones en cualquier lugar de Panamá. De Chiriquí a Darién, sabemos exactamente dónde estás.",
        action: "Programar Entrega"
      },
      intl: {
        title: "Integración Global",
        description: "Envía paquetes internacionales directamente a tu Dirección PPS. Cerramos la brecha entre el comercio global y tu puerta.",
        action: "Obtener Dirección PPS"
      }
    },
    b2b: {
      title: "Sistemas Enterprise",
      tagline: "Actualiza tu infraestructura.",
      description: "Empresas de logística: integren la API de PPS. Eliminen las entregas 'no encontradas' y optimicen su flota con nuestra base de datos patentada.",
      action: "Documentación API"
    },
    government: {
      title: "Impacto en el Sector Público",
      tagline: "Colaborando por un mejor Panamá.",
      description: "Trabajamos junto a organizaciones gubernamentales para resolver problemas críticos de enrutamiento en zonas complejas. Al proporcionar identidades digitales precisas, aseguramos que los servicios esenciales lleguen exactamente donde se necesitan.",
      garbage: {
        title: "Recolección de Basura",
        description: "Optimizando las rutas de recolección para asegurar una cobertura del 100% en cada comunidad.",
        details: "PPS integra Códigos Postales de Tercera Generación en las flotas de gestión de residuos, permitiendo que los camiones sigan rutas optimizadas que eliminan las recogidas perdidas. Nuestro sistema proporciona mapas de calor en tiempo real para que los administradores de la ciudad verifiquen el estado de la recolección y optimicen la asignación de recursos basándose en datos precisos de densidad residencial."
      },
      mayors: {
        title: "Alcaldías",
        description: "Ayudando a los gobiernos municipales a mapear y gestionar los recursos comunitarios de manera más eficiente.",
        details: "Los gobiernos municipales utilizan la red de PPS para gestionar la infraestructura urbana. Desde el seguimiento del mantenimiento de las luminarias hasta la entrega de notificaciones de impuestos sobre la propiedad, nuestras direcciones estandarizadas proporcionan una base de datos fiable para cada ciudadano. Cerramos la brecha entre la administración municipal y la realidad del terreno local."
      },
      police: {
        title: "Policía Nacional",
        description: "Reduciendo los tiempos de respuesta para los servicios de emergencia para ayudar a salvar vidas.",
        details: "Las ubicaciones ambiguas conducen a retrasos en los tiempos de respuesta. PPS proporciona a la Policía Nacional identificadores digitales de alta precisión para cada hogar. Los oficiales ya no dependen de puntos de referencia; navegan directamente al Código Postal de Tercera Generación sincronizado con GPS, asegurando una llegada rápida a cualquier escena de incidente."
      },
      back: "Volver al Inicio",
      knowMore: "Conocer más"
    },
    trust: {
      since: "Desde 2020",
      houses: "Casas Verificadas",
      hubs: "Centros Regionales",
      support: "Soporte en Vivo",
      visionaryTitle: "Logística Eficiente.",
      visionaryText: "No solo movemos paquetes; estamos diseñando la red fundacional de una nación. Miles de hogares ya han sido verificados por nuestros Códigos Postales de Tercera Generación."
    },
    education: {
      title: "¿Qué es un Código Postal?",
      summary: "Imagina un código postal como una huella digital para tu ubicación. Es un identificador preciso que ayuda a los servicios de mensajería y a la infraestructura pública a encontrarte al instante.",
      points: [
        { 
          title: "Entrega más rápida", 
          description: "Los códigos estandarizados permiten que los sistemas de clasificación automatizados procesen sus paquetes sin intervención manual, evitando retrasos." 
        },
        { 
          title: "Soporte de emergencia", 
          description: "La policía y los paramédicos utilizan estos códigos para encontrar su puerta exacta cuando cada segundo cuenta, sin necesidad de puntos de referencia." 
        },
        { 
          title: "Estándares globales", 
          description: "Un código postal lo conecta con la red logística global, haciendo que las compras internacionales en cualquier sitio web sean tan fáciles como el envío local." 
        },
        { 
          title: "Precisión tecnológica", 
          description: "Nuestros códigos de 3ra generación se vinculan directamente con coordenadas geográficas, creando un puente entre ubicaciones físicas y mapas digitales." 
        }
      ]
    },
    cta: {
      headline: "Únete al Futuro",
      description: "Descarga la aplicación PPS hoy y reclama tu identidad digital.",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    footer: {
      mission: "Construyendo el sistema operativo digital para el movimiento de Panamá.",
      infrastructure: {
        title: "Sistemas",
        links: ["Códigos 3ra Gen", "Puerta de Enlace API", "Telemetría de Flota", "Centro de Mapas"]
      },
      business: {
        title: "Soluciones",
        links: ["Logística de Terceros", "Integración Retail", "API de Última Milla", "Consola Enterprise"]
      },
      values: {
        title: "Compañía",
        links: ["Nuestra Historia", "Stack Tecnológico", "Kit de Prensa", "Privacidad"]
      },
      account: {
        title: "Cuenta",
        links: ["PPS ID", "Portal de Negocios", "Gstionar Placas", "Soporte"]
      },
      copyright: "© 2026 PPS Logistics Inc. La solución postal definitiva de Panamá.",
      legal: ["Panamá", "Privacidad", "Términos", "Legal"]
    },
    privacy: {
      back: "Volver al inicio",
      title: "Política de Privacidad",
      effectiveLabel: "Fecha de vigencia",
      effectiveDate: "24 de abril de 2026",
      intro:
        "PPS Logistics Inc. (\"PPS\", \"nosotros\") opera las aplicaciones móviles PPS para clientes y conductores, las plataformas web para bodegas y administradores, y los servicios de backend que las soportan. Esta política explica qué información personal recopilamos, cómo la usamos, con quién la compartimos y cuáles son tus derechos. Al usar nuestras apps aceptas esta política. Si no estás de acuerdo, por favor no utilices las aplicaciones.",
      sections: [
        {
          title: "1. Información que recopilamos",
          body: [
            "Recopilamos únicamente la información necesaria para operar el servicio. Según qué app utilices (cliente o conductor) y qué funcionalidades uses, esto incluye:"
          ],
          bullets: [
            "Datos de cuenta: nombre, apellido, correo electrónico, número de teléfono con código de país y contraseña (solo guardamos un hash bcrypt de un solo sentido, nunca el texto plano).",
            "Datos de perfil: foto de perfil que subas.",
            "Datos exclusivos del conductor: fecha de nacimiento, fotos de la licencia de conducir (frente y reverso), fechas de emisión y vencimiento, marca, modelo, año, color y fotos del vehículo, y datos de cuenta bancaria (banco, titular, número de cuenta) utilizados exclusivamente para retirar tus ganancias.",
            "Direcciones: códigos postales y coordenadas de recogida y entrega que creás o utilizás en un envío.",
            "Datos de pago: no almacenamos números completos de tarjeta. Los pagos se procesan a través de PayPal (sandbox/producción) y Yappy (Banco General, Panamá). Solo guardamos identificadores de transacción, referencias de orden y el estado de confirmación del pago.",
            "Datos de ubicación: mientras el conductor esté \"en línea\", la app publica coordenadas GPS en tiempo real para mostrarlo en el mapa, calcular distancias a las recogidas y entregas, y verificar llegadas al sitio. Al ponerse fuera de línea esto se detiene.",
            "Datos del dispositivo: token de Firebase Cloud Messaging (FCM) para enviar notificaciones push, modelo de dispositivo, versión del sistema operativo, versión de la app, idioma preferido y diagnósticos de errores capturados por Sentry.",
            "Datos de uso: marcas de tiempo de reservas, cambios de estado (llegado, recogido, entregado), calificaciones y registros estándar del servidor web (IP, user agent) conservados por un período limitado para seguridad y depuración."
          ]
        },
        {
          title: "2. Cómo usamos tu información",
          body: [
            "Usamos tu información para proveer, mantener y mejorar el servicio."
          ],
          bullets: [
            "Autenticarte, mantener tu sesión activa y asegurar la app.",
            "Emparejar clientes con conductores disponibles, enrutar envíos y dar seguimiento en tiempo real.",
            "Procesar pagos, calcular las ganancias del conductor y atender solicitudes de retiro.",
            "Enviar notificaciones transaccionales sobre tus reservas (confirmada, en camino, entregada, cancelada).",
            "Detectar fraude, abuso y errores técnicos, y mejorar el desempeño de la app.",
            "Cumplir con obligaciones legales y responder a requerimientos válidos de autoridades."
          ]
        },
        {
          title: "3. Proveedores con quienes compartimos datos",
          body: [
            "Compartimos la mínima cantidad de datos con terceros de confianza que nos ayudan a operar el servicio. Estos terceros están sujetos a sus propias políticas de privacidad y procesan la información por cuenta nuestra:"
          ],
          bullets: [
            "Google Firebase (Authentication, Cloud Messaging, Realtime Database, Analytics, Crashlytics) — EE. UU.",
            "Google Maps Platform — mapas, geocodificación y cálculo de rutas.",
            "Sentry — reporte de errores y caídas.",
            "PayPal — pagos con tarjeta o cuenta PayPal.",
            "Yappy (Banco General) — pagos móviles locales en Panamá.",
            "ZeptoMail (Zoho) — envío de correos transaccionales.",
            "Apple App Store y Google Play — distribución de las apps, conforme a sus propias políticas.",
            "Nuestra infraestructura en la nube (VPS en 31.97.148.78, administrado con Coolify) — ejecución de la aplicación y hospedaje de la base de datos."
          ]
        },
        {
          title: "4. Dónde se almacenan tus datos",
          body: [
            "Los datos principales de la aplicación se almacenan en nuestra base de datos MySQL alojada en nuestro VPS. Los tokens de sesión se guardan en Redis. La ubicación del conductor en tiempo real se guarda en Firebase Realtime Database (servidores de Google en Estados Unidos). Las imágenes subidas (perfil, vehículo, licencia, prueba de entrega) se guardan en el sistema de archivos del servidor y se sirven por HTTPS. Usamos TLS en tránsito y controles de acceso estándar en reposo."
          ]
        },
        {
          title: "5. Por cuánto tiempo conservamos tus datos",
          body: [
            "Mantenemos la información de tu cuenta mientras esté activa. El historial de reservas se guarda hasta 5 años con fines contables, fiscales y de resolución de disputas. El historial de ubicación del conductor es efímero: el nodo \"en línea\" se borra automáticamente al desconectarse. Los registros del servidor se rotan dentro de 30 días. Las cuentas eliminadas se purgan en un plazo de 30 días, salvo aquellos registros que la ley panameña nos obligue a preservar."
          ]
        },
        {
          title: "6. Tus derechos",
          body: [
            "Tienes derecho a acceder, corregir, portar y eliminar la información personal que tenemos sobre tú."
          ],
          bullets: [
            "Acceso y corrección: la mayoría de los campos de perfil se pueden editar directamente desde la pantalla de Perfil en la app.",
            "Eliminación de cuenta: puedes solicitar la eliminación desde la app (Perfil → Eliminar cuenta) o escribiéndonos por correo. Una vez procesada, tus datos personales se eliminan de nuestros sistemas activos dentro de 30 días. Podremos conservar registros anonimizados para analítica y los obligados por la ley panameña.",
            "Portabilidad: escríbenos y te enviamos una exportación de tus datos en formato legible por máquina.",
            "Retirar consentimiento: puedes desactivar notificaciones push, acceso a ubicación y analítica desde la configuración del dispositivo en cualquier momento."
          ]
        },
        {
          title: "7. Seguridad",
          body: [
            "Aplicamos salvaguardas administrativas, técnicas y físicas razonables: HTTPS/TLS en todos los endpoints públicos, hashing con bcrypt para contraseñas, tokens JWT validados contra un almacén de sesiones en Redis, control de acceso por roles en los portales de administración y bodega, y límites de velocidad en endpoints sensibles. Ningún sistema es completamente seguro, pero trabajamos continuamente para reducir el riesgo. Si detectamos una brecha que afecte tu información, te notificaremos sin demora y cumpliremos las obligaciones legales aplicables."
          ]
        },
        {
          title: "8. Menores de edad",
          body: [
            "PPS no está dirigido a menores de 13 años. No recopilamos conscientemente información personal de menores. Si creés que un menor nos proporcionó datos personales, contactanos y los eliminaremos."
          ]
        },
        {
          title: "9. Transferencias internacionales",
          body: [
            "Algunos proveedores (Google, Sentry, PayPal) procesan datos en Estados Unidos u otras jurisdicciones. Al usar PPS aceptas esta transferencia. Estos proveedores están obligados contractualmente a proteger tus datos con salvaguardas equivalentes a las aplicables en Panamá."
          ]
        },
        {
          title: "10. Cambios a esta política",
          body: [
            "Podremos actualizar esta política periódicamente. Si el cambio es importante, te lo notificaremos a través de la app o por correo antes de que entre en vigor. La fecha al inicio de la página siempre reflejará la última revisión."
          ]
        }
      ],
      contact: {
        title: "Contáctanos",
        description:
          "Para consultas de privacidad, solicitudes de acceso a datos o solicitudes de eliminación de cuenta, escríbenos a los datos que están abajo. Respondemos dentro de 30 días.",
        emailLabel: "Correo",
        email: "privacy@pps507.com",
        addressLabel: "Dirección",
        address: "PPS Logistics Inc., Ciudad de Panamá, República de Panamá"
      }
    }
  }
};
