import { Project } from "../models/project";

export const PROJECTS: Project[]=[
// =====================================================
  // FRONTEND
  // =====================================================
{
  id: 1,

  title: 'Framework Frontend GOV.CO',

  company: 'ADRES',

  description:
    'Diseño y desarrollo de un framework frontend para la integración de trámites digitales de ADRES con GOV.CO, orientado a construir experiencias consistentes, responsivas y accesibles.',

  image: 'img/furpen.png',

  category: 'Frontend',

  role:
    'Desarrolladora Frontend responsable de construir el framework desde cero, traducir los lineamientos visuales y de accesibilidad a componentes reutilizables, y participar en la definición de historias de usuario y requerimientos funcionales.',

  challenge:
    'ADRES necesitaba integrar sus trámites digitales con GOV.CO manteniendo una experiencia consistente con los lineamientos del portal y facilitando la construcción de nuevos trámites.',

  solution:
    'Desarrollé un framework frontend basado en Angular, creando componentes reutilizables y estructuras orientadas a facilitar la implementación de los trámites. El desarrollo tomó como referencia el Anexo 5.1 y el Kit UI 8.1 de GOV.CO, incorporando criterios de accesibilidad y diseño responsive.',

  results: [
    'Integración de 4 trámites digitales de ADRES con GOV.CO.',
    'Desarrollo de un framework frontend reutilizable basado en Angular.',
    'Creación de aproximadamente 80 componentes reutilizables.',
    'Estandarización de la experiencia visual y técnica de los trámites.'
  ],

  technologies: [
    'Angular',
    'TypeScript',
    'SCSS',
    'WCAG',
    'Git'
  ],

  featured: true
},

{
  id: 2,

  title: 'Soluciones digitales para BBVA',

  company: 'Saming S.A.S',

  description:
    'Desarrollo frontend para soluciones digitales de BBVA utilizando BonitaSoft, adaptando los componentes nativos del framework a la nueva línea visual definida para los proyectos MVP4 y MVP5.',

  image: 'img/bonita.png',

  category: 'Frontend',

  role:
    'Desarrolladora Frontend encargada de modificar y personalizar los elementos nativos de BonitaSoft para alinearlos con la nueva línea visual de BBVA.',

  challenge:
    'BBVA necesitaba desarrollar el proceso de créditos para PYMES utilizando BonitaSoft, pero los componentes nativos del framework no respondían completamente a la nueva línea visual definida para los proyectos MVP4 y MVP5.',

  solution:
    'Personalicé los componentes y estilos nativos de BonitaSoft utilizando Bootstrap, CSS y JavaScript, adaptando la interfaz a los lineamientos visuales establecidos por BBVA y buscando mantener una experiencia consistente en los diferentes flujos del proceso.',

  results: [
    'Adaptación visual de los componentes nativos de BonitaSoft.',
    'Implementación de la nueva línea visual de BBVA.',
    'Participación en los proyectos MVP4 y MVP5.',
    'Desarrollo frontend para el proceso de créditos dirigido a PYMES.'
  ],

  technologies: [
    'BonitaSoft',
    'Bootstrap',
    'CSS3',
    'JavaScript',
    'UX/UI'
  ],

  featured: true
},
{
  id: 3,

  title: 'PIKI — Historia clínica para mascotas',

  company: 'Saming S.A.S',

  description:
    'Diseño y desarrollo frontend de una solución web para centralizar la historia clínica de las mascotas y facilitar el acceso a información como vacunas, alergias, medicamentos y exámenes.',

  image: 'img/piki.jpg',

  category: 'Frontend',

  role:
    'Desarrolladora Frontend responsable de diseñar y desarrollar la interfaz responsive utilizando Angular, Material y Bootstrap.',

  challenge:
    'Los dueños de mascotas no contaban con un medio práctico para conservar y consultar la historia clínica de sus animales. Información importante como vacunas, alergias, medicamentos y exámenes se registraba principalmente en papel y podía perderse fácilmente.',

  solution:
    'Desarrollé la interfaz frontend de PIKI utilizando Angular, Angular Material y Bootstrap, construyendo una experiencia responsive orientada a facilitar la consulta y gestión de la información clínica de las mascotas.',

  results: [
    'Digitalización de la información relacionada con la historia clínica de las mascotas.',
    'Diseño de una experiencia responsive para diferentes dispositivos.',
    'Implementación de componentes utilizando Angular Material y Bootstrap.'
  ],

  technologies: [
    'Angular',
    'JavaScript',
    'Angular Material',
    'Bootstrap',
    'CSS3'
  ],

  featured: true
},
{
  id: 4,

  title: 'Interfaces Frontend',

  company: 'Odasi',

  description:
    'Desarrollo de interfaces web responsivas e integración con servicios backend, participando en la construcción de soluciones frontend orientadas a mejorar la experiencia de usuario.',

  image: 'img/odasi.png',

  category: 'Frontend',

  role:
    'Desarrolladora Frontend responsable de la construcción de interfaces y su integración con servicios backend.',

  solution:
    'Desarrollo de interfaces responsive utilizando React, JavaScript y CSS, junto con la integración de APIs REST para la comunicación con los servicios backend.',

  technologies: [
    'React',
    'JavaScript',
    'CSS3',
    'Python',
    'REST API'
  ],

  featured: true
},
{
  id: 5,

  title: 'Sistema de inspección para naves marítimas',

  company: 'Codaltec — Ministerio de Defensa',

  description:
    'Diseño y desarrollo frontend de una plataforma para digitalizar el proceso de inspección de naves marítimas realizado por la Armada de Colombia.',

  image: 'img/genav.png',

  category: 'Frontend',

  role:
    'Desarrolladora Frontend responsable de diseñar las maquetas de bajo nivel a partir de las historias de usuario y traducirlas posteriormente a código mediante Angular. También participé en la identificación de requerimientos y validación de las propuestas con el usuario.',

  challenge:
    'El proceso de control e inspección de naves marítimas se realizaba principalmente en papel. Los inspectores, en su mayoría de edad senior, debían diligenciar formularios extensos que resultaban incómodos y poco prácticos para el proceso de inspección.',

  solution:
    'Diseñé maquetas de bajo nivel a partir de las historias de usuario y requerimientos identificados, validándolas con los usuarios antes de llevarlas a desarrollo. Posteriormente desarrollé las interfaces frontend responsive utilizando Angular y SurveyJS, buscando simplificar la interacción con formularios extensos y adaptar la solución a las necesidades reales de los inspectores.',

  results: [
    'Digitalización del proceso de inspección de naves marítimas.',
    'Transformación de formularios físicos en una experiencia digital.',
    'Diseño de interfaces orientadas a usuarios con diferentes niveles de experiencia tecnológica.',
    'Implementación de una solución frontend responsive.'
  ],

  technologies: [
    'Angular 14',
    'SurveyJS',
    'HTML5',
    'CSS3',
    '.NET'
  ],
  featured: true
},
{
  id: 6,

  title: 'Sistema de componentes web',

  company: 'Corporación Agencia Nacional Digital',

  description:
    'Diseño y desarrollo de componentes web reutilizables para estandarizar la construcción de interfaces digitales dentro del ecosistema GOV.CO.',

  image: 'img/cdngovco.png',

  category: 'Design System',

  role:
    'Desarrolladora Frontend y especialista en accesibilidad, responsable del diseño y desarrollo de componentes reutilizables, así como de la incorporación de criterios de accesibilidad en su construcción.',

  challenge:
    'Las entidades públicas necesitaban contar con componentes y patrones reutilizables que permitieran construir interfaces más consistentes, mantenibles y accesibles.',

  solution:
    'Participé en la creación del CDN y desarrollé componentes frontend reutilizables siguiendo lineamientos de diseño y accesibilidad. El trabajo buscó facilitar la adopción de patrones comunes por parte de diferentes equipos de desarrollo.',

  results: [
    'Creación de componentes web reutilizables.',
    'Contribución a la construcción del CDN para el ecosistema GOV.CO.',
    'Estandarización de patrones frontend.',
    'Incorporación de criterios de accesibilidad en los componentes.'
  ],

  technologies: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'SCSS',
    'HTML5',
    'WCAG'
  ],

  featured: true
},
{
  id: 7,

  title: 'Sede Electrónica — Accesibilidad Digital',

  company: 'Superintendencia de Industria y Comercio',

  description:
    'Estrategia de mejora de accesibilidad para la Sede Electrónica de la Superintendencia de Industria y Comercio, enfocada en la remediación técnica, auditoría y acompañamiento a equipos de desarrollo.',

  image: 'img/superintendencia.png',

  category: 'Accesibilidad',

  role:
    'Líder de accesibilidad digital, responsable de auditar la Sede Electrónica, identificar barreras de accesibilidad, corregir código y acompañar a los equipos Frontend en la implementación de buenas prácticas basadas en WCAG 2.2.',

  challenge:
    'La Sede Electrónica presentaba diferentes barreras de accesibilidad relacionadas con estructura semántica, formularios, navegación, contraste, enlaces y otros componentes de la interfaz.',

  solution:
    'Realicé auditorías de accesibilidad sobre la Sede Electrónica, prioricé hallazgos y participé directamente en la corrección del código para cumplir los criterios de WCAG 2.2. Además, acompañé a los equipos de desarrollo durante la implementación de las correcciones y promoví la incorporación de accesibilidad desde el proceso de desarrollo.',

  results: [
    'Alcance de un 97 % de cumplimiento de WCAG 2.2 AA.',
    'Remediación de barreras de accesibilidad en la Sede Electrónica.',
    'Acompañamiento técnico a equipos de desarrollo Frontend.',
    'Fortalecimiento de la accesibilidad como parte del proceso de desarrollo.'
  ],

  technologies: [
    'Angular',
    'HTML5',
    'CSS3',
    'WCAG 2.2',
    'WAI-ARIA',
    'Axe DevTools',
    'Lighthouse'
  ],

  featured: true
},
{
  id: 8,

  title: 'Kit Guía Nacional de Accesibilidad Web',

  company: 'Corporación Agencia Nacional Digital',

  description:
    'Creación de lineamientos, herramientas y recursos para orientar a equipos de diseño y desarrollo en la implementación de accesibilidad web dentro del sector público.',

  image: 'img/guiaaccesibilidad.png',

  category: 'Accesibilidad',

  role:
    'Responsable del diseño y estructuración del Kit Guía Nacional de Accesibilidad Web y del Manual de Políticas de Accesibilidad, además de la formación y acompañamiento de equipos técnicos.',

  challenge:
    'Las entidades y equipos de desarrollo requerían una referencia práctica que permitiera comprender y aplicar los criterios de accesibilidad web de forma consistente durante el diseño y desarrollo de soluciones digitales.',

  solution:
    'Diseñé lineamientos, patrones y recursos orientados a facilitar la implementación de accesibilidad web. También desarrollé el curso Fundamentos de Accesibilidad Web y dicté capacitaciones dirigidas a equipos de Frontend y desarrollo.',

  results: [
    'Creación del Kit Guía Nacional de Accesibilidad Web.',
    'Elaboración del Manual de Políticas de Accesibilidad.',
    'Creación del curso Fundamentos de Accesibilidad Web.',
    'Capacitación y acompañamiento a equipos técnicos.',
    'Realización de auditorías de accesibilidad a soluciones digitales.'
  ],

  technologies: [
    'WCAG',
    'HTML5',
    'CSS3',
    'JavaScript',
    'UX',
    'WAI-ARIA'
  ],

  featured: true
},
{
  id: 9,

  title: 'Auditoría de accesibilidad — Bancolombia',

  company: 'Vórtico S.A.S',

  description:
    'Auditoría y acompañamiento para mejorar la accesibilidad de Landing Pages de Bancolombia en Panamá y Puerto Rico.',

  image: 'img/bancolombia.png',

  category: 'Accesibilidad',

  role:
    'Especialista en accesibilidad responsable de realizar auditorías técnicas, identificar barreras de accesibilidad y acompañar a los equipos Frontend, UX y Contenido en la implementación de mejoras.',

  challenge:
    'Las Landing Pages requerían ser evaluadas frente a los criterios de accesibilidad para identificar barreras que pudieran afectar la interacción de personas con diferentes necesidades de acceso.',

  solution:
    'Realicé auditorías técnicas de las interfaces, documenté los hallazgos y propuse acciones de remediación para los equipos involucrados. También participé en espacios de capacitación y acompañamiento técnico.',

  results: [
    'Auditoría de Landing Pages para Panamá y Puerto Rico.',
    'Identificación y priorización de barreras de accesibilidad.',
    'Acompañamiento a equipos Frontend, UX y Contenido.',
    'Alcance de hasta 96 % de cumplimiento en las interfaces evaluadas.'
  ],

  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'WCAG 2.1',
    'WAI-ARIA',
    'Axe DevTools'
  ],

  featured: true
}

]