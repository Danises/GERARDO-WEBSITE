/**
 * GL Handy Painter — EN (default) / ES / PT translations
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "glhp-lang";

  var DICT = {
    en: {
      skip: "Skip to content",
      brand_aria: "GL Handy Painter home",
      nav_open: "Open menu",
      nav_home: "Home",
      nav_services: "Services",
      nav_gallery: "Gallery",
      nav_about: "About",
      nav_contact: "Contact",
      nav_call: "Call Now",
      lang_aria: "Choose language",

      hero_eyebrow: "Local • Licensed-quality workmanship • Free estimates",
      hero_title: "Professional Painting & Handyman Services",
      hero_sub: "Interior • Exterior • Repairs • Carpentry • Power Washing",
      hero_cta_est: "Get Free Estimate",
      hero_cta_call: "Call Now",

      home_services_h2: "Services",
      home_services_lead:
        "Full-service painting and home repairs tailored to Connecticut homes—see details on each service page.",
      home_services_more: "All services & details",
      home_gallery_h2: "Gallery",
      home_gallery_lead:
        "A glimpse of the quality we bring to painting, decks, power washing, and repairs.",
      home_gallery_more: "View full gallery",

      home_about_h2: "About Gerardo",
      home_about_p1:
        "GL Handy Painter is owned and operated by <strong>Gerardo Landeros</strong>, serving homeowners in <strong>Danbury, CT</strong> and the surrounding area.",
      home_about_p2:
        "We focus on reliability: showing up on time, communicating clearly, and leaving every job neat and ready to enjoy—without cutting corners on prep or finish.",
      home_about_li1: "Local business you can call directly",
      home_about_li2: "Painting, decks, washing, carpentry, and more",
      home_about_li3: "Detail-driven prep and finish work",
      home_about_more: "More about us",
      about_badge_free: "Free",
      about_badge_est: "Estimates",

      home_contact_h2: "Get in touch",
      home_contact_teaser:
        "Call, email, or send a message—we respond quickly. Visit the contact page for the full form and project checklist.",
      home_contact_cta: "Contact page & form",
      home_contact_phone: "Phone",
      home_contact_email: "Email",
      home_contact_loc: "Location",

      footer_line:
        "<strong>GL Handy Painter</strong> · Gerardo Landeros · Danbury, CT",
      footer_insta: "Instagram @GLPainter1",
      footer_rights: "All rights reserved.",

      gal_cap_ext: "Exterior painting",
      gal_cap_int: "Interior finish",
      gal_cap_deck: "Deck & outdoor",
      gal_cap_wash: "Power washing",
      gal_cap_wood: "Carpentry & wood",
      gal_cap_curb: "Curb appeal",
      gal_cap_modern: "Modern homes",
      gal_cap_reno: "Renovation interiors",
      gal_cap_bright: "Bright, clean spaces",
      gal_cap_ladder: "Site prep & ladders",
      gal_cap_trim: "Trim & details",
      gal_cap_team: "On-site craftsmanship",

      page_home_title: "GL Handy Painter | Painting & Handyman Services | Danbury, CT",
      page_home_desc:
        "GL Handy Painter — professional painting and handyman services in Danbury, CT. Interior & exterior painting, power washing, deck repair, carpentry, and more. Free estimates. Call (845) 570-1512.",

      page_services_title: "Services | GL Handy Painter | Danbury, CT",
      page_services_desc:
        "Interior and exterior painting, power washing, deck repair, carpentry, siding, and handyman services in Danbury, Connecticut—with free estimates.",
      page_gallery_title: "Project Gallery | GL Handy Painter",
      page_gallery_desc:
        "Photos of painting, power washing, deck work, and carpentry by GL Handy Painter in Danbury, CT.",
      page_about_title: "About Us | GL Handy Painter",
      page_about_desc:
        "Meet Gerardo Landeros and learn how GL Handy Painter serves Danbury, CT with reliable painting and handyman work.",
      page_contact_title: "Contact | GL Handy Painter | Free Estimates",
      page_contact_desc:
        "Request a free estimate from GL Handy Painter in Danbury, CT. Call (845) 570-1512 or email Glhandypainter@gmail.com.",

      svc_intro_h2: "What we do",
      svc_intro_p:
        "Every project starts with honest recommendations, proper prep, and finishes built for New England weather. Below is an overview—reach out for a tailored quote.",

      s_interior_t: "Interior painting",
      s_interior_d:
        "Clean prep, crisp lines, and durable finishes for every room.",
      s_interior_a:
        "We protect furniture and floors, fix minor wall imperfections, and use quality primers and paints suited to kitchens, baths, and high-traffic halls. Color changes, accent walls, and ceiling refreshes are all in scope.",
      s_interior_b:
        "Expect clear communication on sheen, dry times, and ventilation so your household can get back to normal on schedule.",

      s_exterior_t: "Exterior painting",
      s_exterior_d:
        "Weather-ready coatings that protect siding, trim, and curb appeal.",
      s_exterior_a:
        "We wash or hand-clean surfaces as needed, scrape and spot-prime failing areas, and apply compatible coatings for wood, composite, or previously painted siding.",
      s_exterior_b:
        "Trim, shutters, and entry doors get the same attention so your home looks cohesive from the curb.",

      s_wash_t: "Power washing",
      s_wash_d: "Houses, decks, and walkways refreshed safely and evenly.",
      s_wash_a:
        "Low- and high-reach siding, mossy decks, and dirty concrete get cleaned with the right pressure and detergents to lift grime without damaging surfaces.",
      s_wash_b:
        "Washing is often the first step before staining or exterior painting—ask us to bundle services for a better timeline.",

      s_deck_t: "Deck cleaning & repair",
      s_deck_d: "Strip, clean, seal, and fix boards so your deck lasts.",
      s_deck_a:
        "We remove failed coatings where appropriate, replace damaged boards or fasteners when needed, and recommend sealers or stains for your wood type.",
      s_deck_b:
        "Safety checks on railings and stairs are part of how we leave outdoor spaces ready to use.",

      s_carp_t: "Carpentry",
      s_carp_d: "Custom woodwork, repairs, and structural touch-ups done right.",
      s_carp_a:
        "From patching trim and small framing fixes to building simple shelves or repairing stairs, we keep cuts tight and installs solid.",
      s_carp_b:
        "If a repair ties into paint or stain, we sequence the work so finishes look intentional—not patched together.",

      s_win_t: "Window & door repair",
      s_win_d:
        "Smooth operation, sealing, and hardware fixes for comfort and efficiency.",
      s_win_a:
        "Sticky sashes, failing weatherstripping, and loose hinges are addressed before paint or stain so everything operates cleanly.",
      s_win_b:
        "We can coordinate caulking and touch-up paint after hardware and alignment work.",

      s_side_t: "Siding",
      s_side_d: "Install and repair options to protect your home’s envelope.",
      s_side_a:
        "We address nail pops, small replacements, and prep transitions so moisture stays out and paint bonds well.",
      s_side_b:
        "Larger siding scopes can be quoted alongside full exterior painting.",

      s_reno_t: "Renovation & restoration",
      s_reno_d:
        "From refreshes to detailed restoration with careful craftsmanship.",
      s_reno_a:
        "Room refreshes, patch-and-paint after other trades, and careful restoration-style finishes when you want to preserve character.",
      s_reno_b:
        "We align schedules with other contractors when your project has multiple phases.",

      s_trim_t: "Trim & wood work",
      s_trim_d:
        "Baseboards, casings, and built-ins finished to a furniture-grade look.",
      s_trim_a:
        "Installation and repair of base, crown, and door casing, plus sanding and filling for glass-smooth paint results.",
      s_trim_b:
        "Built-ins and shelves can be painted or stained to match existing millwork.",

      cta_mid: "Ready to book?",
      cta_mid_p: "Free walkthrough and written estimates for Danbury-area projects.",
      cta_mid_btn: "Start on the contact page",

      about_page_h1: "About GL Handy Painter",
      about_page_lead:
        "Local, dependable painting and handyman work with a straight-shooting approach.",
      about_page_p1:
        "GL Handy Painter is owned and operated by Gerardo Landeros. We serve Danbury, CT, and nearby towns where homeowners expect professionals to show up on time and respect their property.",
      about_page_p2:
        "Most of our work comes from referrals and repeat clients—that’s because we prioritize clear estimates, tidy job sites, and finishes that hold up to real life, not just the day we leave.",
      about_page_p3:
        "Whether you need a full exterior repaint, deck cleaning, power washing before staining, or smaller carpentry fixes, we treat every job with the same attention to prep and detail.",
      about_h2_values: "How we work",
      about_li1: "Honest recommendations—no unnecessary upsells",
      about_li2: "Quality paints and materials suited to each surface",
      about_li3: "Respect for your home, schedule, and neighbors",
      about_h2_area: "Service area",
      about_area_p:
        "Based in Danbury, CT. Contact us to confirm availability in your neighborhood.",

      contact_page_h1: "Contact & estimates",
      contact_page_lead:
        "Tell us about your project—we reply quickly with next steps.",
      contact_pill: "Free estimates — no obligation",
      contact_phone_l: "Phone",
      contact_email_l: "Email",
      contact_loc_l: "Location",
      contact_hours_h: "Typical response",
      contact_hours_p:
        "Messages are checked daily. For urgent timing, call or text.",
      contact_tap: "Tap to call",
      form_name: "Name",
      form_phone: "Phone",
      form_msg: "Message",
      ph_name: "Your name",
      ph_phone: "(555) 555-5555",
      ph_msg: "Describe your project…",
      form_send: "Send message",
      form_err: "Please fill in all fields.",
      form_ok:
        "Opening your email app… If nothing opens, call (845) 570-1512.",

      gallery_page_h1: "Gallery",
      gallery_page_lead:
        "Real-world painting, washing, deck, and carpentry work—replace with your own before/after photos anytime.",

      lightbox_close: "Close preview",
      fab_aria: "Call GL Handy Painter",
    },
    es: {
      skip: "Saltar al contenido",
      brand_aria: "Inicio de GL Handy Painter",
      nav_open: "Abrir menú",
      nav_home: "Inicio",
      nav_services: "Servicios",
      nav_gallery: "Galería",
      nav_about: "Nosotros",
      nav_contact: "Contacto",
      nav_call: "Llamar",
      lang_aria: "Elegir idioma",

      hero_eyebrow: "Local • Acabado profesional • Estimados gratis",
      hero_title: "Pintura y mantenimiento profesional del hogar",
      hero_sub:
        "Interior • Exterior • Reparaciones • Carpintería • Lavadora a presión",
      hero_cta_est: "Estimado gratis",
      hero_cta_call: "Llamar ahora",

      home_services_h2: "Servicios",
      home_services_lead:
        "Pintura integral y reparaciones para hogares de Connecticut—vea los detalles en la página de servicios.",
      home_services_more: "Todos los servicios y detalles",
      home_gallery_h2: "Galería",
      home_gallery_lead:
        "Un vistazo a la calidad en pintura, decks, hidrolavado y reparaciones.",
      home_gallery_more: "Ver galería completa",

      home_about_h2: "Sobre Gerardo",
      home_about_p1:
        "GL Handy Painter es de <strong>Gerardo Landeros</strong>, atendiendo hogares en <strong>Danbury, CT</strong> y alrededores.",
      home_about_p2:
        "Nos enfocamos en la confiabilidad: puntualidad, comunicación clara y obra limpia—sin recortar la preparación ni el acabado.",
      home_about_li1: "Negocio local con quien puede hablar directamente",
      home_about_li2: "Pintura, decks, lavado, carpintería y más",
      home_about_li3: "Trabajo detallado en preparación y terminación",
      home_about_more: "Más sobre nosotros",
      about_badge_free: "Gratis",
      about_badge_est: "Estimados",

      home_contact_h2: "Contacto",
      home_contact_teaser:
        "Llame, escriba o envíe un mensaje—respondemos rápido. Visite la página de contacto para el formulario completo.",
      home_contact_cta: "Página de contacto y formulario",
      home_contact_phone: "Teléfono",
      home_contact_email: "Correo",
      home_contact_loc: "Ubicación",

      footer_line:
        "<strong>GL Handy Painter</strong> · Gerardo Landeros · Danbury, CT",
      footer_insta: "Instagram @GLPainter1",
      footer_rights: "Todos los derechos reservados.",

      gal_cap_ext: "Pintura exterior",
      gal_cap_int: "Acabado interior",
      gal_cap_deck: "Deck y exterior",
      gal_cap_wash: "Hidrolavado",
      gal_cap_wood: "Carpintería y madera",
      gal_cap_curb: "Estética exterior",
      gal_cap_modern: "Casas modernas",
      gal_cap_reno: "Interiores renovados",
      gal_cap_bright: "Espacios limpios y luminosos",
      gal_cap_ladder: "Preparación en obra",
      gal_cap_trim: "Molduras y detalles",
      gal_cap_team: "Oficio en sitio",

      page_home_title: "GL Handy Painter | Pintura y mantenimiento | Danbury, CT",
      page_home_desc:
        "GL Handy Painter — pintura y mantenimiento del hogar en Danbury, CT. Interior, exterior, hidrolavado, decks y más. Estimados gratis. (845) 570-1512.",

      page_services_title: "Servicios | GL Handy Painter | Danbury, CT",
      page_services_desc:
        "Pintura interior y exterior, hidrolavado, reparación de decks, carpintería y más en Danbury, CT—estimados gratis.",
      page_gallery_title: "Galería de proyectos | GL Handy Painter",
      page_gallery_desc:
        "Fotos de pintura, lavado a presión, decks y carpintería en Danbury, CT.",
      page_about_title: "Nosotros | GL Handy Painter",
      page_about_desc:
        "Conozca a Gerardo Landeros y el servicio local de GL Handy Painter en Danbury, CT.",
      page_contact_title: "Contacto | GL Handy Painter | Estimados gratis",
      page_contact_desc:
        "Solicite un estimado gratis en Danbury, CT. (845) 570-1512 o Glhandypainter@gmail.com.",

      svc_intro_h2: "Nuestros servicios",
      svc_intro_p:
        "Cada proyecto parte de recomendaciones honestas, preparación adecuada y acabados pensados para el clima de Nueva Inglaterra.",

      s_interior_t: "Pintura interior",
      s_interior_d: "Preparación limpia, líneas nítidas y acabados duraderos.",
      s_interior_a:
        "Protegemos muebles y pisos, corregimos imperfecciones menores y usamos imprimadores y pinturas adecuadas para cocinas, baños y pasillos.",
      s_interior_b:
        "Comunicación clara sobre brillo, tiempos de secado y ventilación para que su hogar vuelva a la normalidad a tiempo.",

      s_exterior_t: "Pintura exterior",
      s_exterior_d:
        "Recubrimientos resistentes para fachada, molduras y buena presencia.",
      s_exterior_a:
        "Lavamos o limpiamos superficies, alisamos zonas dañadas y aplicamos sistemas compatibles con madera, composite o pintura previa.",
      s_exterior_b:
        "Molduras, persianas y puertas de entrada reciben el mismo cuidado para un conjunto armonioso.",

      s_wash_t: "Hidrolavado",
      s_wash_d: "Fachadas, decks y entradas limpias con presión adecuada.",
      s_wash_a:
        "Usamos presión y detergentes correctos para levantar suciedad sin dañar revestimientos ni madera.",
      s_wash_b:
        "El lavado suele ser el primer paso antes de teñir o pintar—puede combinar servicios.",

      s_deck_t: "Limpieza y reparación de decks",
      s_deck_d: "Limpieza, sellado y reparación de tabla para mayor vida útil.",
      s_deck_a:
        "Retiramos recubrimientos fallidos cuando corresponde, cambiamos tablas o fijaciones dañadas y recomendamos selladores según la madera.",
      s_deck_b:
        "Revisamos barandas y escaleras para dejar espacios seguros al aire libre.",

      s_carp_t: "Carpintería",
      s_carp_d: "Trabajos a medida, retoques y reparaciones estructurales menores.",
      s_carp_a:
        "Desde molduras y pequeños arreglos de estructura hasta estantes sencillos y escaleras, con cortes precisos e instalación firme.",
      s_carp_b:
        "Si hay pintura o barniz después, coordinamos el orden de los trabajos.",

      s_win_t: "Ventanas y puertas",
      s_win_d:
        "Ajuste, sellado y herrajes para comodidad y eficiencia.",
      s_win_a:
        "Corregimos hojas trabadas, burletes gastados y bisagras sueltas antes del acabado final.",
      s_win_b:
        "Podemos sellar y retocar pintura después del ajuste.",

      s_side_t: "Revestimiento (siding)",
      s_side_d: "Reparación e instalación para proteger el envolvente del hogar.",
      s_side_a:
        "Clavos salientes, piezas pequeñas y transiciones preparadas para evitar humedad y mejor adherencia.",
      s_side_b:
        "Proyectos mayores se cotizan junto con pintura exterior si aplica.",

      s_reno_t: "Renovación y restauración",
      s_reno_d: "Desde actualizaciones hasta acabados tipo restauración.",
      s_reno_a:
        "Renovaciones de ambientes, preparación tras otros oficios y acabados cuidadosos cuando quiere conservar el carácter original.",
      s_reno_b:
        "Coordinamos plazos con otros contratistas en proyectos por fases.",

      s_trim_t: "Molduras y madera",
      s_trim_d:
        "Rodapiés, marcos y muebles empotrados con acabado de alta calidad.",
      s_trim_a:
        "Instalación y reparación de rodapié, cornisa y marcos, lijado y masillas para pintura impecable.",
      s_trim_b:
        "Estanterías y empotrados en pintura o tinte según su carpintería.",

      cta_mid: "¿Listo para agendar?",
      cta_mid_p: "Visita en sitio y estimados por escrito en la zona de Danbury.",
      cta_mid_btn: "Ir a contacto",

      about_page_h1: "Sobre GL Handy Painter",
      about_page_lead:
        "Trabajo local y confiable con comunicación directa.",
      about_page_p1:
        "GL Handy Painter es de Gerardo Landeros. Atendemos Danbury, CT, y pueblos cercanos donde los dueños esperan puntualidad y respeto por la propiedad.",
      about_page_p2:
        "Gran parte de nuestra obra viene de referencias y clientes que repiten—estimados claros, obra ordenada y acabados que duran.",
      about_page_p3:
        "Ya sea pintura exterior completa, limpieza de deck, hidrolavado o arreglos de carpintería, aplicamos el mismo cuidado en preparación y detalle.",
      about_h2_values: "Nuestra forma de trabajar",
      about_li1: "Recomendaciones honestas, sin ventas innecesarias",
      about_li2: "Materiales de calidad para cada superficie",
      about_li3: "Respeto por su hogar, tiempo y vecinos",
      about_h2_area: "Zona de servicio",
      about_area_p:
        "Con base en Danbury, CT. Escríbanos para confirmar disponibilidad.",

      contact_page_h1: "Contacto y estimados",
      contact_page_lead:
        "Cuéntenos su proyecto—respondemos pronto con los siguientes pasos.",
      contact_pill: "Estimados gratis — sin compromiso",
      contact_phone_l: "Teléfono",
      contact_email_l: "Correo",
      contact_loc_l: "Ubicación",
      contact_hours_h: "Respuesta habitual",
      contact_hours_p:
        "Revisamos mensajes a diario. Para urgencias, llame o envíe SMS.",
      contact_tap: "Tocar para llamar",
      form_name: "Nombre",
      form_phone: "Teléfono",
      form_msg: "Mensaje",
      ph_name: "Su nombre",
      ph_phone: "(555) 555-5555",
      ph_msg: "Describa su proyecto…",
      form_send: "Enviar mensaje",
      form_err: "Complete todos los campos.",
      form_ok:
        "Abriendo su correo… Si no abre, llame al (845) 570-1512.",

      gallery_page_h1: "Galería",
      gallery_page_lead:
        "Proyectos reales de pintura, lavado, decks y carpintería—puede sustituir por sus fotos antes/después.",

      lightbox_close: "Cerrar vista",
      fab_aria: "Llamar a GL Handy Painter",
    },
    pt: {
      skip: "Ir para o conteúdo",
      brand_aria: "Início GL Handy Painter",
      nav_open: "Abrir menu",
      nav_home: "Início",
      nav_services: "Serviços",
      nav_gallery: "Galeria",
      nav_about: "Sobre",
      nav_contact: "Contato",
      nav_call: "Ligar",
      lang_aria: "Idioma",

      hero_eyebrow: "Local • Acabamento profissional • Orçamentos grátis",
      hero_title: "Pintura e manutenção residencial profissional",
      hero_sub:
        "Interior • Exterior • Reparos • Carpintaria • Lavagem pressão",
      hero_cta_est: "Orçamento grátis",
      hero_cta_call: "Ligar agora",

      home_services_h2: "Serviços",
      home_services_lead:
        "Pintura e reparos para casas em Connecticut—veja detalhes na página de serviços.",
      home_services_more: "Todos os serviços e detalhes",
      home_gallery_h2: "Galeria",
      home_gallery_lead:
        "Um pouco da nossa qualidade em pintura, decks, lavagem e reparos.",
      home_gallery_more: "Ver galeria completa",

      home_about_h2: "Sobre o Gerardo",
      home_about_p1:
        "A GL Handy Painter é de <strong>Gerardo Landeros</strong>, atendendo <strong>Danbury, CT</strong> e região.",
      home_about_p2:
        "Focamos em confiabilidade: pontualidade, comunicação clara e obra limpa—sem cortar no preparo ou no acabamento.",
      home_about_li1: "Negócio local com contato direto",
      home_about_li2: "Pintura, decks, lavagem, carpintaria e mais",
      home_about_li3: "Preparo e acabamento com atenção ao detalhe",
      home_about_more: "Saiba mais",
      about_badge_free: "Grátis",
      about_badge_est: "Orçamentos",

      home_contact_h2: "Fale conosco",
      home_contact_teaser:
        "Ligue, envie e-mail ou mensagem—respondemos rápido. Na página de contato há o formulário completo.",
      home_contact_cta: "Página de contato e formulário",
      home_contact_phone: "Telefone",
      home_contact_email: "E-mail",
      home_contact_loc: "Local",

      footer_line:
        "<strong>GL Handy Painter</strong> · Gerardo Landeros · Danbury, CT",
      footer_insta: "Instagram @GLPainter1",
      footer_rights: "Todos os direitos reservados.",

      gal_cap_ext: "Pintura externa",
      gal_cap_int: "Acabamento interno",
      gal_cap_deck: "Deck e área externa",
      gal_cap_wash: "Lavagem alta pressão",
      gal_cap_wood: "Carpintaria e madeira",
      gal_cap_curb: "Fachada impecável",
      gal_cap_modern: "Casas modernas",
      gal_cap_reno: "Interiores renovados",
      gal_cap_bright: "Ambientes claros e limpos",
      gal_cap_ladder: "Preparação no canteiro",
      gal_cap_trim: "Molduras e detalhes",
      gal_cap_team: "Ofício no local",

      page_home_title: "GL Handy Painter | Pintura e serviços | Danbury, CT",
      page_home_desc:
        "GL Handy Painter — pintura e manutenção residencial em Danbury, CT. Interior, exterior, lavagem pressão, decks e mais. Orçamento grátis. (845) 570-1512.",

      page_services_title: "Serviços | GL Handy Painter | Danbury, CT",
      page_services_desc:
        "Pintura interna e externa, lavagem pressão, reparo de decks, carpintaria e mais em Danbury, CT—orçamentos grátis.",
      page_gallery_title: "Galeria | GL Handy Painter",
      page_gallery_desc:
        "Fotos de pintura, lavagem, decks e carpintaria em Danbury, CT.",
      page_about_title: "Sobre | GL Handy Painter",
      page_about_desc:
        "Conheça Gerardo Landeros e a GL Handy Painter em Danbury, CT.",
      page_contact_title: "Contato | GL Handy Painter | Orçamento grátis",
      page_contact_desc:
        "Solicite orçamento grátis em Danbury, CT. (845) 570-1512 ou Glhandypainter@gmail.com.",

      svc_intro_h2: "O que fazemos",
      svc_intro_p:
        "Cada trabalho começa com orientação honesta, preparo correto e acabamentos pensados para o clima da Nova Inglaterra.",

      s_interior_t: "Pintura interior",
      s_interior_d: "Preparo limpo, linhas certeiras e tintas duráveis.",
      s_interior_a:
        "Protegemos móveis e pisos, corrigimos pequenas imperfeições e aplicamos primers e tintas adequadas para cozinhas, banheiros e circulação.",
      s_interior_b:
        "Combinamos brilho, tempo de secagem e ventilação para o lar voltar ao normal no prazo.",

      s_exterior_t: "Pintura exterior",
      s_exterior_d:
        "Revestimentos resistentes para fachada, frisos e valor de rua.",
      s_exterior_a:
        "Lavamos ou limpamos superfícies, corrigimos áreas soltas e aplicamos sistemas compatíveis com madeira, compósito ou pintura anterior.",
      s_exterior_b:
        "Frisos, persianas e portas recebem o mesmo capricho para um conjunto harmônico.",

      s_wash_t: "Lavagem pressão",
      s_wash_d: "Fachadas, decks e calçadas limpas com pressão certa.",
      s_wash_a:
        "Água sob pressão e detergentes adequados para tirar sujeira sem danificar.",
      s_wash_b:
        "Lavagem costuma preceder tingimento ou pintura externa—é possível agrupar serviços.",

      s_deck_t: "Limpeza e reparo de decks",
      s_deck_d: "Limpar, selar e consertar tábuas para maior durabilidade.",
      s_deck_a:
        "Removemos acabamentos ruins quando preciso, trocamos tábuas ou fixadores e indicamos seladores para o tipo de madeira.",
      s_deck_b:
        "Checamos corrimãos e degraus para áreas externas mais seguras.",

      s_carp_t: "Carpintaria",
      s_carp_d: "Marcenaria sob medida, reparos e pequenos reforços.",
      s_carp_a:
        "De molduras e ajustes estruturais leves a prateleiras simples, com cortes limpos e fixação firme.",
      s_carp_b:
        "Se seguir pintura ou verniz, ordenamos as etapas corretamente.",

      s_win_t: "Portas e janelas",
      s_win_d: "Funcionamento suave, vedação e ferragens em ordem.",
      s_win_a:
        "Folhas emperradas, borrachas ruins e dobradiças frouxas são corrigidas antes do acabamento.",
      s_win_b:
        "Podemos calafetar e retocar tinta após o ajuste.",

      s_side_t: "Revestimento (siding)",
      s_side_d: "Reparo e instalação para proteger a casca da casa.",
      s_side_a:
        "Pregos saltados, pequenas trocas e preparo de junções para umidade e aderência.",
      s_side_b:
        "Projetos maiores orçados junto com pintura externa quando fizer sentido.",

      s_reno_t: "Renovação e restauração",
      s_reno_d: "De revitalização a acabamento estilo restauração.",
      s_reno_a:
        "Renovar ambientes, preparar após outros ofícios e respeitar o caráter original quando desejado.",
      s_reno_b:
        "Alinhamos prazos com outros profissionais em obras por etapas.",

      s_trim_t: "Frisos e madeira",
      s_trim_d: "Rodapés, caixilhos e painéis com acabamento fino.",
      s_trim_a:
        "Instalação e conserto de rodapé, sancas e aparas, massa e lixa para pintura lisa.",
      s_trim_b:
        "Nichos e prateleiras em tinta ou verniz combinando com a marcenaria existente.",

      cta_mid: "Pronto para agendar?",
      cta_mid_p: "Visita no local e orçamento por escrito na região de Danbury.",
      cta_mid_btn: "Ir ao contato",

      about_page_h1: "Sobre a GL Handy Painter",
      about_page_lead:
        "Trabalho local e confiável com comunicação direta.",
      about_page_p1:
        "A GL Handy Painter é de Gerardo Landeros. Atendemos Danbury, CT, e cidades próximas onde moradores esperam pontualidade e respeito à propriedade.",
      about_page_p2:
        "Grande parte dos trabalhos vem de indicações e clientes recorrentes—orçamentos claros, canteiro organizado e acabamento que dura.",
      about_page_p3:
        "De pintura externa completa à limpeza de deck, lavagem ou pequenos reparos de carpintaria, cuidamos igualmente do preparo e do detalhe.",
      about_h2_values: "Como trabalhamos",
      about_li1: "Recomendações honestas—sem vendas desnecessárias",
      about_li2: "Tintas e materiais adequados a cada superfície",
      about_li3: "Respeito à sua casa, agenda e vizinhança",
      about_h2_area: "Área de atendimento",
      about_area_p:
        "Sede em Danbury, CT. Escreva para confirmar disponibilidade na sua rua.",

      contact_page_h1: "Contato e orçamentos",
      contact_page_lead:
        "Conte seu projeto—respondemos rápido com próximos passos.",
      contact_pill: "Orçamentos grátis — sem compromisso",
      contact_phone_l: "Telefone",
      contact_email_l: "E-mail",
      contact_loc_l: "Local",
      contact_hours_h: "Resposta típica",
      contact_hours_p:
        "Mensagens checadas diariamente. Para urgência, ligue ou envie SMS.",
      contact_tap: "Toque para ligar",
      form_name: "Nome",
      form_phone: "Telefone",
      form_msg: "Mensagem",
      ph_name: "Seu nome",
      ph_phone: "(555) 555-5555",
      ph_msg: "Descreva seu projeto…",
      form_send: "Enviar mensagem",
      form_err: "Preencha todos os campos.",
      form_ok:
        "Abrindo o e-mail… Se não abrir, ligue (845) 570-1512.",

      gallery_page_h1: "Galeria",
      gallery_page_lead:
        "Fotos reais de pintura, lavagem, decks e carpintaria—substitua pelas suas antes e depois quando quiser.",

      lightbox_close: "Fechar",
      fab_aria: "Ligar GL Handy Painter",
    },
  };

  function getNested(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function resolve(lang, key) {
    var raw = DICT[lang] && DICT[lang][key];
    if (raw != null) return raw;
    return DICT.en[key];
  }

  function setMetaDescription(text) {
    var md = document.querySelector('meta[name="description"]');
    if (md && text) md.setAttribute("content", text);
  }

  function apply(lang) {
    if (!DICT[lang]) lang = "en";
    document.documentElement.setAttribute(
      "lang",
      lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en"
    );

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = resolve(lang, key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var val = resolve(lang, key);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = resolve(lang, key);
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = resolve(lang, key);
      if (val != null) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      var val = resolve(lang, key);
      if (val != null) el.setAttribute("title", val);
    });

    var page = document.body.getAttribute("data-page");
    if (page) {
      var titleKey = "page_" + page + "_title";
      var descKey = "page_" + page + "_desc";
      var title = resolve(lang, titleKey);
      var desc = resolve(lang, descKey);
      if (title) document.title = title;
      setMetaDescription(desc);
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-active", on);
    });
  }

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "pt" || stored === "en") return stored;
    return "en";
  }

  function setLang(code) {
    if (code !== "es" && code !== "pt" && code !== "en") code = "en";
    localStorage.setItem(STORAGE_KEY, code);
    apply(code);
    window.dispatchEvent(new CustomEvent("glhp-lang-changed", { detail: { lang: code } }));
  }

  function t(key) {
    return resolve(getLang(), key) || "";
  }

  function init() {
    apply(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.GLHP_I18N = { setLang: setLang, getLang: getLang, t: t, apply: apply };
})(window);
