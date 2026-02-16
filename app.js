/* ============================================
   Metro de Santiago - Ascensores PWA v2
   App Logic & Data - Enhanced with Tabs
   ============================================ */

// ========== METRO LINE CONFIGURATION ==========
const LINE_CONFIG = {
  L1: { name: 'Línea 1', color: '#E42313', rgb: '228, 35, 19' },
  L2: { name: 'Línea 2', color: '#F7941D', rgb: '247, 148, 29' },
  L3: { name: 'Línea 3', color: '#9B5E3C', rgb: '155, 94, 60' },
  L4: { name: 'Línea 4', color: '#0072BC', rgb: '0, 114, 188' },
  L4A: { name: 'Línea 4A', color: '#00AEEF', rgb: '0, 174, 239' },
  L5: { name: 'Línea 5', color: '#00A551', rgb: '0, 165, 81' },
  L6: { name: 'Línea 6', color: '#6F2C91', rgb: '111, 44, 145' }
};

// ========== EMBEDDED ELEVATOR DATA ==========
// Source: Consolidado_Ascensores_Metro_Línea.csv
const ELEVATORS_DATA = [
  {
    "codigo": "8000016",
    "nomenclatura": "ASC-01",
    "estacion": "CCA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "KONE",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000017",
    "nomenclatura": "ASC-02",
    "estacion": "CCA",
    "linea": "L1",
    "marca": "SUR",
    "modelo": "SUR",
    "inicio": "1989",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001547",
    "nomenclatura": "ASC-01",
    "estacion": "SEAT",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2003",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001548",
    "nomenclatura": "ASC-02",
    "estacion": "SEAT",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2003",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013704",
    "nomenclatura": "ASC-01",
    "estacion": "SAN PABLO",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013705",
    "nomenclatura": "ASC-02",
    "estacion": "SAN PABLO",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001527",
    "nomenclatura": "ASC-01",
    "estacion": "PAJARITOS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2009",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001528",
    "nomenclatura": "ASC-02",
    "estacion": "PAJARITOS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2009",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001516",
    "nomenclatura": "ASC-03",
    "estacion": "LAS REJAS",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001517",
    "nomenclatura": "ASC-04",
    "estacion": "LAS REJAS",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001472",
    "nomenclatura": "ASC-01",
    "estacion": "ECUADOR",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001490",
    "nomenclatura": "ASC-01",
    "estacion": "U. DE CHILE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2009",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001491",
    "nomenclatura": "ASC-02",
    "estacion": "U. DE CHILE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2009",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001492",
    "nomenclatura": "ASC-03",
    "estacion": "U. DE CHILE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2009",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001558",
    "nomenclatura": "ASC-03",
    "estacion": "U. CATOLICA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001559",
    "nomenclatura": "ASC-01",
    "estacion": "U. CATOLICA",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001560",
    "nomenclatura": "ASC-02",
    "estacion": "U. CATOLICA",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001568",
    "nomenclatura": "ASC-01",
    "estacion": "BAQUEDANO",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001542",
    "nomenclatura": "ASC-03",
    "estacion": "SALVADOR",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2015",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001543",
    "nomenclatura": "ASC-04",
    "estacion": "SALVADOR",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2015",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001522",
    "nomenclatura": "ASC-03",
    "estacion": "M. MONTT",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001523",
    "nomenclatura": "ASC-01",
    "estacion": "M. MONTT",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001524",
    "nomenclatura": "ASC-02",
    "estacion": "M. MONTT",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001571",
    "nomenclatura": "ASC-01",
    "estacion": "EC. MILITAR",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001518",
    "nomenclatura": "ASC-01",
    "estacion": "MANQUEHUE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001519",
    "nomenclatura": "ASC-02",
    "estacion": "MANQUEHUE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001520",
    "nomenclatura": "ASC-03",
    "estacion": "MANQUEHUE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001521",
    "nomenclatura": "ASC-04",
    "estacion": "MANQUEHUE",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001511",
    "nomenclatura": "ASC-01",
    "estacion": "H. MAGALLANES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001512",
    "nomenclatura": "ASC-02",
    "estacion": "H. MAGALLANES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001572",
    "nomenclatura": "ASC-03",
    "estacion": "H. MAGALLANES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001499",
    "nomenclatura": "ASC-01",
    "estacion": "LOS DOMINICOS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001500",
    "nomenclatura": "ASC-02",
    "estacion": "LOS DOMINICOS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001501",
    "nomenclatura": "ASC-03",
    "estacion": "LOS DOMINICOS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001561",
    "nomenclatura": "ASC-01",
    "estacion": "VESPUCIO NORTE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001562",
    "nomenclatura": "ASC-02",
    "estacion": "VESPUCIO NORTE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001563",
    "nomenclatura": "ASC-03",
    "estacion": "VESPUCIO NORTE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001564",
    "nomenclatura": "ASC-04",
    "estacion": "VESPUCIO NORTE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001565",
    "nomenclatura": "ASC-01",
    "estacion": "ZAPADORES",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001566",
    "nomenclatura": "ASC-02",
    "estacion": "ZAPADORES",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001567",
    "nomenclatura": "ASC-03",
    "estacion": "ZAPADORES",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001502",
    "nomenclatura": "ASC-02",
    "estacion": "DORSAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001503",
    "nomenclatura": "ASC-03",
    "estacion": "DORSAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001504",
    "nomenclatura": "ASC-01",
    "estacion": "DORSAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001505",
    "nomenclatura": "ASC-01",
    "estacion": "EINSTEIN",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001506",
    "nomenclatura": "ASC-02",
    "estacion": "EINSTEIN",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001507",
    "nomenclatura": "ASC-03",
    "estacion": "EINSTEIN",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001493",
    "nomenclatura": "ASC-01",
    "estacion": "CEMENTERIOS",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001494",
    "nomenclatura": "ASC-02",
    "estacion": "CEMENTERIOS",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001495",
    "nomenclatura": "ASC-03",
    "estacion": "CEMENTERIOS",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "Expert XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001540",
    "nomenclatura": "ASC-01",
    "estacion": "RONDIZZONI",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001541",
    "nomenclatura": "ASC-02",
    "estacion": "RONDIZZONI",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001549",
    "nomenclatura": "ASC-03",
    "estacion": "SAN MIGUEL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001550",
    "nomenclatura": "ASC-01",
    "estacion": "SAN MIGUEL",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001551",
    "nomenclatura": "ASC-02",
    "estacion": "SAN MIGUEL",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001496",
    "nomenclatura": "ASC-03",
    "estacion": "CIUDAD DEL NIÑO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001497",
    "nomenclatura": "ASC-01",
    "estacion": "CIUDAD DEL NIÑO",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001498",
    "nomenclatura": "ASC-02",
    "estacion": "CIUDAD DEL NIÑO",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000312",
    "nomenclatura": "ASC-01",
    "estacion": "COLON",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000313",
    "nomenclatura": "ASC-02",
    "estacion": "COLON",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000314",
    "nomenclatura": "ASC-03",
    "estacion": "COLON",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000308",
    "nomenclatura": "ASC-01",
    "estacion": "BILBAO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000309",
    "nomenclatura": "ASC-02",
    "estacion": "BILBAO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000310",
    "nomenclatura": "ASC-03",
    "estacion": "BILBAO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001473",
    "nomenclatura": "ASC-01",
    "estacion": "PLAZA EGAÑA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001474",
    "nomenclatura": "ASC-02",
    "estacion": "PLAZA EGAÑA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001475",
    "nomenclatura": "ASC-03",
    "estacion": "PLAZA EGAÑA",
    "linea": "L4",
    "marca": "",
    "modelo": "",
    "inicio": "",
    "contrato": "",
    "tecnologia": ""
  },
  {
    "codigo": "8001529",
    "nomenclatura": "ASC-01",
    "estacion": "PLAZA MAIPU",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001530",
    "nomenclatura": "ASC-02",
    "estacion": "PLAZA MAIPU",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001531",
    "nomenclatura": "ASC-03",
    "estacion": "PLAZA MAIPU",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001532",
    "nomenclatura": "ASC-04",
    "estacion": "PLAZA MAIPU",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001544",
    "nomenclatura": "ASC-01",
    "estacion": "SANTIAGO BUERAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001545",
    "nomenclatura": "ASC-02",
    "estacion": "SANTIAGO BUERAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001546",
    "nomenclatura": "ASC-03",
    "estacion": "SANTIAGO BUERAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013709",
    "nomenclatura": "ASC-03",
    "estacion": "DEL SOL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001553",
    "nomenclatura": "ASC-04",
    "estacion": "DEL SOL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001554",
    "nomenclatura": "ASC-02",
    "estacion": "DEL SOL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001555",
    "nomenclatura": "ASC-01",
    "estacion": "DEL SOL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001525",
    "nomenclatura": "ASC-01",
    "estacion": "MONTE TABOR",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001514",
    "nomenclatura": "ASC-01",
    "estacion": "LAS PARCELAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013697",
    "nomenclatura": "ASC-01",
    "estacion": "LAGUNA SUR",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001483",
    "nomenclatura": "ASC-01",
    "estacion": "BARRANCAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001484",
    "nomenclatura": "ASC-02",
    "estacion": "BARRANCAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001485",
    "nomenclatura": "ASC-03",
    "estacion": "BARRANCAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001486",
    "nomenclatura": "ASC-04",
    "estacion": "BARRANCAS",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001537",
    "nomenclatura": "ASC-01",
    "estacion": "PUDAHUEL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001538",
    "nomenclatura": "ASC-02",
    "estacion": "PUDAHUEL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001539",
    "nomenclatura": "ASC-03",
    "estacion": "PUDAHUEL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001482",
    "nomenclatura": "ASC-04",
    "estacion": "SAN PABLO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001573",
    "nomenclatura": "ASC-01",
    "estacion": "SAN PABLO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001574",
    "nomenclatura": "ASC-02",
    "estacion": "SAN PABLO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001575",
    "nomenclatura": "ASC-03",
    "estacion": "SAN PABLO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001533",
    "nomenclatura": "ASC-01",
    "estacion": "LO PRADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001534",
    "nomenclatura": "ASC-02",
    "estacion": "LO PRADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001535",
    "nomenclatura": "ASC-03",
    "estacion": "LO PRADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001536",
    "nomenclatura": "ASC-04",
    "estacion": "LO PRADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001487",
    "nomenclatura": "ASC-01",
    "estacion": "BLANQUEADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001488",
    "nomenclatura": "ASC-03",
    "estacion": "BLANQUEADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001489",
    "nomenclatura": "ASC-02",
    "estacion": "BLANQUEADO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001508",
    "nomenclatura": "ASC-01",
    "estacion": "GRUTA DE LOURDES",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001509",
    "nomenclatura": "ASC-02",
    "estacion": "GRUTA DE LOURDES",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001510",
    "nomenclatura": "ASC-03",
    "estacion": "GRUTA DE LOURDES",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001569",
    "nomenclatura": "ASC-01",
    "estacion": "BAQUEDANO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000311",
    "nomenclatura": "ASC-02",
    "estacion": "BAQUEDANO",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "ADV210",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8013707",
    "nomenclatura": "ASC-03",
    "estacion": "BAQUEDANO",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001478",
    "nomenclatura": "ASC-03",
    "estacion": "SANTA JULIA",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 LVA",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001479",
    "nomenclatura": "ASC-04",
    "estacion": "SANTA JULIA",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001476",
    "nomenclatura": "ASC-03",
    "estacion": "LA GRANJA",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001477",
    "nomenclatura": "ASC-04",
    "estacion": "LA GRANJA",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001480",
    "nomenclatura": "ASC-03",
    "estacion": "SAN RAMON",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001481",
    "nomenclatura": "ASC-04",
    "estacion": "SAN RAMON",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8000015",
    "nomenclatura": "ASC-01",
    "estacion": "LA CISTERNA",
    "linea": "L4A",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2011",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8001912",
    "nomenclatura": "ASC-01",
    "estacion": "IRARRAZAVAL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "ADV210",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001913",
    "nomenclatura": "ASC-02",
    "estacion": "IRARRAZAVAL",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "ADV210",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001914",
    "nomenclatura": "ASC-01",
    "estacion": "B. DE LA FLORIDA",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "ADV210",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001915",
    "nomenclatura": "ASC-02",
    "estacion": "B. DE LA FLORIDA",
    "linea": "L5",
    "marca": "OTIS",
    "modelo": "ADV210",
    "inicio": "1997",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001989",
    "nomenclatura": "ASC-01",
    "estacion": "PATRONATO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001990",
    "nomenclatura": "ASC-02",
    "estacion": "PATRONATO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001991",
    "nomenclatura": "ASC-03",
    "estacion": "PATRONATO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001992",
    "nomenclatura": "ASC-01",
    "estacion": "CERRO BLANCO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001993",
    "nomenclatura": "ASC-02",
    "estacion": "CERRO BLANCO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001994",
    "nomenclatura": "ASC-03",
    "estacion": "CERRO BLANCO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001995",
    "nomenclatura": "ASC-01",
    "estacion": "QUINTA NORMAL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001996",
    "nomenclatura": "ASC-02",
    "estacion": "QUINTA NORMAL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001997",
    "nomenclatura": "ASC-03",
    "estacion": "QUINTA NORMAL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001998",
    "nomenclatura": "ASC-01",
    "estacion": "RICARDO CUMMING",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8001999",
    "nomenclatura": "ASC-02",
    "estacion": "RICARDO CUMMING",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002000",
    "nomenclatura": "ASC-03",
    "estacion": "RICARDO CUMMING",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002001",
    "nomenclatura": "ASC-01",
    "estacion": "EL PARRÓN ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002002",
    "nomenclatura": "ASC-02",
    "estacion": "EL PARRÓN ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002003",
    "nomenclatura": "ASC-03",
    "estacion": "EL PARRÓN ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002004",
    "nomenclatura": "ASC-01",
    "estacion": "LA CISTERNA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002005",
    "nomenclatura": "ASC-02",
    "estacion": "LA CISTERNA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002006",
    "nomenclatura": "ASC-03",
    "estacion": "LA CISTERNA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 5",
    "inicio": "2004",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8012209",
    "nomenclatura": "ASC-01",
    "estacion": "SANTA ANA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002332",
    "nomenclatura": "ASC-01",
    "estacion": "P. DE GALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002333",
    "nomenclatura": "ASC-02",
    "estacion": "P. DE GALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002334",
    "nomenclatura": "ASC-03",
    "estacion": "P. DE GALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002335",
    "nomenclatura": "ASC-01",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 7",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8002336",
    "nomenclatura": "ASC-01",
    "estacion": "HEROES",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002337",
    "nomenclatura": "ASC-02",
    "estacion": "HEROES",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002338",
    "nomenclatura": "ASC-03",
    "estacion": "HEROES",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002339",
    "nomenclatura": "ASC-04",
    "estacion": "HEROES",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002340",
    "nomenclatura": "ASC-01",
    "estacion": "H. SOTERO DEL RIO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002341",
    "nomenclatura": "ASC-02",
    "estacion": "H. SOTERO DEL RIO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002342",
    "nomenclatura": "ASC-03",
    "estacion": "H. SOTERO DEL RIO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002343",
    "nomenclatura": "ASC-04",
    "estacion": "H. SOTERO DEL RIO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002352",
    "nomenclatura": "ASC-01",
    "estacion": "LOS HEROES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002353",
    "nomenclatura": "ASC-02",
    "estacion": "LOS HEROES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002354",
    "nomenclatura": "ASC-03",
    "estacion": "LOS HEROES",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2012",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002355",
    "nomenclatura": "ASC-01",
    "estacion": "LOS PRESIDENTES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002356",
    "nomenclatura": "ASC-02",
    "estacion": "LOS PRESIDENTES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002357",
    "nomenclatura": "ASC-03",
    "estacion": "LOS PRESIDENTES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002358",
    "nomenclatura": "ASC-04",
    "estacion": "LOS PRESIDENTES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002362",
    "nomenclatura": "ASC-01",
    "estacion": "LAS REJAS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002363",
    "nomenclatura": "ASC-02",
    "estacion": "LAS REJAS",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 REGEN",
    "inicio": "2014",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002364",
    "nomenclatura": "ASC-01",
    "estacion": "LAS TORRES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002365",
    "nomenclatura": "ASC-02",
    "estacion": "LAS TORRES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002366",
    "nomenclatura": "ASC-03",
    "estacion": "LAS TORRES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002367",
    "nomenclatura": "ASC-04",
    "estacion": "LAS TORRES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002438",
    "nomenclatura": "ASC-01",
    "estacion": "MACUL",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002439",
    "nomenclatura": "ASC-02",
    "estacion": "MACUL",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002440",
    "nomenclatura": "ASC-03",
    "estacion": "MACUL",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002441",
    "nomenclatura": "ASC-04",
    "estacion": "MACUL",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002442",
    "nomenclatura": "ASC-01",
    "estacion": "LAS MERCEDES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002443",
    "nomenclatura": "ASC-02",
    "estacion": "LAS MERCEDES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002444",
    "nomenclatura": "ASC-03",
    "estacion": "LAS MERCEDES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002503",
    "nomenclatura": "ASC-01",
    "estacion": "LOS ORIENTALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002504",
    "nomenclatura": "ASC-02",
    "estacion": "LOS ORIENTALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002505",
    "nomenclatura": "ASC-03",
    "estacion": "LOS ORIENTALES",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002976",
    "nomenclatura": "ASC-01",
    "estacion": "PLAZA PUENTE ALTO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002977",
    "nomenclatura": "ASC-02",
    "estacion": "PLAZA PUENTE ALTO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8002978",
    "nomenclatura": "ASC-03",
    "estacion": "PLAZA PUENTE ALTO",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003182",
    "nomenclatura": "ASC-01",
    "estacion": "PLAZA DE ARMAS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "BOETTICHER",
    "inicio": "2000",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8003183",
    "nomenclatura": "ASC-02",
    "estacion": "PLAZA DE ARMAS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "BOETTICHER",
    "inicio": "2000",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8003184",
    "nomenclatura": "ASC-03",
    "estacion": "PLAZA DE ARMAS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "BOETTICHER",
    "inicio": "2000",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8003185",
    "nomenclatura": "ASC-02",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "MCP 7",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Hidráulico"
  },
  {
    "codigo": "8003186",
    "nomenclatura": "ASC-03",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "80022",
    "nomenclatura": "ASC-03",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "",
    "modelo": "",
    "inicio": "",
    "contrato": "",
    "tecnologia": ""
  },
  {
    "codigo": "8003187",
    "nomenclatura": "ASC-04",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003188",
    "nomenclatura": "ASC-05",
    "estacion": "ROTONDA GRECIA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003192",
    "nomenclatura": "ASC-01",
    "estacion": "ROTONDA QUILIN",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003193",
    "nomenclatura": "ASC-02",
    "estacion": "ROTONDA QUILIN",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003194",
    "nomenclatura": "ASC-03",
    "estacion": "ROTONDA QUILIN",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003195",
    "nomenclatura": "ASC-04",
    "estacion": "ROTONDA QUILIN",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003196",
    "nomenclatura": "ASC-05",
    "estacion": "ROTONDA QUILIN",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003197",
    "nomenclatura": "ASC-01",
    "estacion": "SALVADOR",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2015",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003198",
    "nomenclatura": "ASC-02",
    "estacion": "SALVADOR",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2015",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012210",
    "nomenclatura": "ASC-02",
    "estacion": "SANTA ANA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003211",
    "nomenclatura": "ASC-01",
    "estacion": "SIMON BOLIVAR ",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003212",
    "nomenclatura": "ASC-02",
    "estacion": "SIMON BOLIVAR ",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003213",
    "nomenclatura": "ASC-03",
    "estacion": "SIMON BOLIVAR ",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003228",
    "nomenclatura": "ASC-01",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003229",
    "nomenclatura": "ASC-02",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003230",
    "nomenclatura": "ASC-03",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003231",
    "nomenclatura": "ASC-04",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003232",
    "nomenclatura": "ASC-05",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003233",
    "nomenclatura": "ASC-06",
    "estacion": "TOBALABA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003987",
    "nomenclatura": "ASC-01",
    "estacion": "VICENTE VALDÉS",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003988",
    "nomenclatura": "ASC-02",
    "estacion": "VICENTE VALDÉS",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003989",
    "nomenclatura": "ASC-03",
    "estacion": "VICENTE VALDÉS",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003990",
    "nomenclatura": "ASC-04",
    "estacion": "VICENTE VALDÉS",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2005",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003991",
    "nomenclatura": "ASC-01",
    "estacion": "VICUÑA MACKENA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003992",
    "nomenclatura": "ASC-02",
    "estacion": "VICUÑA MACKENA",
    "linea": "L4",
    "marca": "THYSENKRUPP",
    "modelo": "EXPERT XXI",
    "inicio": "2006",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8003993",
    "nomenclatura": "ASC-02",
    "estacion": "EC. MILITAR",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 COMFORT",
    "inicio": "2010",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012092",
    "nomenclatura": "ASC-01",
    "estacion": "NEPTUNO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012093",
    "nomenclatura": "ASC-02",
    "estacion": "NEPTUNO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012184",
    "nomenclatura": "ASC-01",
    "estacion": "S. ALBERTO HURTADO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012185",
    "nomenclatura": "ASC-02",
    "estacion": "S. ALBERTO HURTADO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012186",
    "nomenclatura": "ASC-03",
    "estacion": "S. ALBERTO HURTADO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012175",
    "nomenclatura": "ASC-01",
    "estacion": "U. DE SANTIAGO",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 LVA",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012176",
    "nomenclatura": "ASC-02",
    "estacion": "U. DE SANTIAGO",
    "linea": "L1",
    "marca": "OTIS",
    "modelo": "GEN2 LVA",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012177",
    "nomenclatura": "ASC-03",
    "estacion": "U. DE SANTIAGO",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012190",
    "nomenclatura": "ASC-01",
    "estacion": "ESTACION CENTRAL",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012191",
    "nomenclatura": "ASC-02",
    "estacion": "ESTACION CENTRAL",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012192",
    "nomenclatura": "ASC-03",
    "estacion": "ESTACION CENTRAL",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012172",
    "nomenclatura": "ASC-01",
    "estacion": "U. LATINOAMERICANA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012173",
    "nomenclatura": "ASC-02",
    "estacion": "U. LATINOAMERICANA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012174",
    "nomenclatura": "ASC-03",
    "estacion": "U. LATINOAMERICANA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012169",
    "nomenclatura": "ASC-01",
    "estacion": "REPUBLICA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012170",
    "nomenclatura": "ASC-02",
    "estacion": "REPUBLICA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012171",
    "nomenclatura": "ASC-03",
    "estacion": "REPUBLICA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012187",
    "nomenclatura": "ASC-01",
    "estacion": "SANTA LUCIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012188",
    "nomenclatura": "ASC-02",
    "estacion": "SANTA LUCIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013706",
    "nomenclatura": "ASC-03",
    "estacion": "SANTA LUCIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2022",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012181",
    "nomenclatura": "ASC-01",
    "estacion": "PEDRO DE VALDIVIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012182",
    "nomenclatura": "ASC-02",
    "estacion": "PEDRO DE VALDIVIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012183",
    "nomenclatura": "ASC-03",
    "estacion": "PEDRO DE VALDIVIA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012223",
    "nomenclatura": "ASC-01",
    "estacion": "EL GOLF",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012224",
    "nomenclatura": "ASC-02",
    "estacion": "EL GOLF",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012167",
    "nomenclatura": "ASC-03",
    "estacion": "EL GOLF",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012168",
    "nomenclatura": "ASC-03",
    "estacion": "ALCANTARA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012225",
    "nomenclatura": "ASC-01",
    "estacion": "ALCANTARA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012226",
    "nomenclatura": "ASC-02",
    "estacion": "ALCANTARA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012203",
    "nomenclatura": "ASC-01",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012204",
    "nomenclatura": "ASC-02",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012205",
    "nomenclatura": "ASC-03",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012206",
    "nomenclatura": "ASC-04",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012207",
    "nomenclatura": "ASC-05",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012208",
    "nomenclatura": "ASC-06",
    "estacion": "SANTA ANA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012194",
    "nomenclatura": "ASC-01",
    "estacion": "TOESCA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012195",
    "nomenclatura": "ASC-02",
    "estacion": "TOESCA",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012199",
    "nomenclatura": "ASC-03",
    "estacion": "PARQUE O´HIGGINS",
    "linea": "L2",
    "marca": "OTIS",
    "modelo": "GEN2 LVA",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012094",
    "nomenclatura": "ASC-01",
    "estacion": "EL LLANO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012095",
    "nomenclatura": "ASC-02",
    "estacion": "EL LLANO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012227",
    "nomenclatura": "ASC-03",
    "estacion": "EL LLANO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012200",
    "nomenclatura": "ASC-01",
    "estacion": "LO VIAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012201",
    "nomenclatura": "ASC-02",
    "estacion": "LO VIAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012202",
    "nomenclatura": "ASC-03",
    "estacion": "LO VIAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012196",
    "nomenclatura": "ASC-01",
    "estacion": "DEPARTAMENTAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012197",
    "nomenclatura": "ASC-02",
    "estacion": "DEPARTAMENTAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012198",
    "nomenclatura": "ASC-03",
    "estacion": "DEPARTAMENTAL",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012211",
    "nomenclatura": "ASC-03",
    "estacion": "SANTA ANA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012613",
    "nomenclatura": "ASC-01",
    "estacion": "LO OVALLE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012614",
    "nomenclatura": "ASC-02",
    "estacion": "LO OVALLE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012615",
    "nomenclatura": "ASC-03",
    "estacion": "LO OVALLE",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012561",
    "nomenclatura": "ASC-02",
    "estacion": "PARQUE O´HIGGINS",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012560",
    "nomenclatura": "ASC-01",
    "estacion": "PARQUE O´HIGGINS",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012178",
    "nomenclatura": "ASC-01",
    "estacion": "LA MONEDA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012179",
    "nomenclatura": "ASC-02",
    "estacion": "LA MONEDA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY E-CORE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012180",
    "nomenclatura": "ASC-03",
    "estacion": "LA MONEDA",
    "linea": "L1",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2018",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012648",
    "nomenclatura": "ASC-01",
    "estacion": "PEDRERO",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012649",
    "nomenclatura": "ASC-02",
    "estacion": "PEDRERO",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012650",
    "nomenclatura": "ASC-03",
    "estacion": "PEDRERO",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012636",
    "nomenclatura": "ASC-01",
    "estacion": "CAMINO AGRICOLA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012637",
    "nomenclatura": "ASC-02",
    "estacion": "CAMINO AGRICOLA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012638",
    "nomenclatura": "ASC-03",
    "estacion": "CAMINO AGRICOLA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012642",
    "nomenclatura": "ASC-01",
    "estacion": "SANTA ISABEL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012643",
    "nomenclatura": "ASC-02",
    "estacion": "SANTA ISABEL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012644",
    "nomenclatura": "ASC-03",
    "estacion": "SANTA ISABEL",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012657",
    "nomenclatura": "ASC-01",
    "estacion": "SAN JOAQUÍN",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012658",
    "nomenclatura": "ASC-02",
    "estacion": "SAN JOAQUÍN",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012634",
    "nomenclatura": "ASC-02",
    "estacion": "BELLAS ARTES",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012645",
    "nomenclatura": "ASC-01",
    "estacion": "CARLOS VALDOVINOS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012646",
    "nomenclatura": "ASC-02",
    "estacion": "CARLOS VALDOVINOS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012639",
    "nomenclatura": "ASC-01",
    "estacion": "PARQUE BUSTAMANTE",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012640",
    "nomenclatura": "ASC-02",
    "estacion": "PARQUE BUSTAMANTE",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012641",
    "nomenclatura": "ASC-03",
    "estacion": "PARQUE BUSTAMANTE",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012654",
    "nomenclatura": "ASC-01",
    "estacion": "RODRIGO ARAYA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012655",
    "nomenclatura": "ASC-02",
    "estacion": "RODRIGO ARAYA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012647",
    "nomenclatura": "ASC-03",
    "estacion": "CARLOS VALDOVINOS",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012633",
    "nomenclatura": "ASC-01",
    "estacion": "BELLAS ARTES",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012635",
    "nomenclatura": "ASC-03",
    "estacion": "BELLAS ARTES",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012651",
    "nomenclatura": "ASC-01",
    "estacion": "MIRADOR",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012652",
    "nomenclatura": "ASC-02",
    "estacion": "MIRADOR",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012653",
    "nomenclatura": "ASC-03",
    "estacion": "MIRADOR",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8012656",
    "nomenclatura": "ASC-03",
    "estacion": "RODRIGO ARAYA",
    "linea": "L5",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013679",
    "nomenclatura": "ASC-01",
    "estacion": "COCHERAS VESPUCIO NORTE",
    "linea": "L2",
    "marca": "ORONA",
    "modelo": "ARCA III",
    "inicio": "2021",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013849",
    "nomenclatura": "ASC 1",
    "estacion": "CARDENAL CARO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013850",
    "nomenclatura": "ASC 2",
    "estacion": "CARDENAL CARO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013851",
    "nomenclatura": "ASC 3",
    "estacion": "CARDENAL CARO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013855",
    "nomenclatura": "ASC 1",
    "estacion": "CONCHALÍ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013856",
    "nomenclatura": "ASC 2",
    "estacion": "CONCHALÍ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013857",
    "nomenclatura": "ASC 3",
    "estacion": "CONCHALÍ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013861",
    "nomenclatura": "ASC 1",
    "estacion": "CHILE-ESPAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013862",
    "nomenclatura": "ASC 2",
    "estacion": "CHILE-ESPAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013863",
    "nomenclatura": "ASC 3",
    "estacion": "CHILE-ESPAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013868",
    "nomenclatura": "ASC 1",
    "estacion": "FDO. CASTILLO VELASCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013869",
    "nomenclatura": "ASC 2",
    "estacion": "FDO. CASTILLO VELASCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013870",
    "nomenclatura": "ASC 3",
    "estacion": "FDO. CASTILLO VELASCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013873",
    "nomenclatura": "ASC 1",
    "estacion": "VILLA FREI (EX DIAG. ORIENTE)",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013874",
    "nomenclatura": "ASC 2",
    "estacion": "VILLA FREI (EX DIAG. ORIENTE)",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013875",
    "nomenclatura": "ASC 3",
    "estacion": "VILLA FREI (EX DIAG. ORIENTE)",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013876",
    "nomenclatura": "ASC 1",
    "estacion": "HOSPITALES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013877",
    "nomenclatura": "ASC 2",
    "estacion": "HOSPITALES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013878",
    "nomenclatura": "ASC 3",
    "estacion": "HOSPITALES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013883",
    "nomenclatura": "ASC 1",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013884",
    "nomenclatura": "ASC 2",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013885",
    "nomenclatura": "ASC 3",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013886",
    "nomenclatura": "ASC 4",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013887",
    "nomenclatura": "ASC 5",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013888",
    "nomenclatura": "ASC 6",
    "estacion": "IRARRÁZAVAL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013894",
    "nomenclatura": "ASC 2",
    "estacion": "LOS LIBERTADORES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013895",
    "nomenclatura": "ASC 3",
    "estacion": "LOS LIBERTADORES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013896",
    "nomenclatura": "ASC 5",
    "estacion": "LOS LIBERTADORES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013906",
    "nomenclatura": "ASC 1",
    "estacion": "MATTA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013907",
    "nomenclatura": "ASC 2",
    "estacion": "MATTA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013908",
    "nomenclatura": "ASC 3",
    "estacion": "MATTA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013913",
    "nomenclatura": "ASC 1",
    "estacion": "MONS. EYZAGUIRRE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013914",
    "nomenclatura": "ASC 2",
    "estacion": "MONS. EYZAGUIRRE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013915",
    "nomenclatura": "ASC 3",
    "estacion": "MONS. EYZAGUIRRE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013919",
    "nomenclatura": "ASC 5",
    "estacion": "ÑUÑOA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013920",
    "nomenclatura": "ASC 6",
    "estacion": "ÑUÑOA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013923",
    "nomenclatura": "ASC 1",
    "estacion": "PARQUE ALMAGRO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013924",
    "nomenclatura": "ASC 2",
    "estacion": "PARQUE ALMAGRO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013925",
    "nomenclatura": "ASC 3",
    "estacion": "PARQUE ALMAGRO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013928",
    "nomenclatura": "ASC 1",
    "estacion": "CAL Y CANTO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013929",
    "nomenclatura": "ASC 2",
    "estacion": "CAL Y CANTO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013930",
    "nomenclatura": "ASC 4",
    "estacion": "CAL Y CANTO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013931",
    "nomenclatura": "ASC 5",
    "estacion": "CAL Y CANTO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013932",
    "nomenclatura": "ASC 6",
    "estacion": "CAL Y CANTO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013942",
    "nomenclatura": "ASC 1",
    "estacion": "PZA. DE ARMAS",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013943",
    "nomenclatura": "ASC 2",
    "estacion": "PZA. DE ARMAS",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013944",
    "nomenclatura": "ASC 3",
    "estacion": "PZA. DE ARMAS",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013945",
    "nomenclatura": "ASC 4",
    "estacion": "PZA. DE ARMAS",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013961",
    "nomenclatura": "ASC 1",
    "estacion": "PZA. CHACABUCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013962",
    "nomenclatura": "ASC 2",
    "estacion": "PZA. CHACABUCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013963",
    "nomenclatura": "ASC 3",
    "estacion": "PZA. CHACABUCO",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013967",
    "nomenclatura": "ASC 1",
    "estacion": "PZA. EGAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013968",
    "nomenclatura": "ASC 2",
    "estacion": "PZA. EGAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013969",
    "nomenclatura": "ASC 3",
    "estacion": "PZA. EGAÑA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013982",
    "nomenclatura": "ASC 1",
    "estacion": "UNIVERSIDAD DE CHILE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013983",
    "nomenclatura": "ASC 2",
    "estacion": "UNIVERSIDAD DE CHILE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013984",
    "nomenclatura": "ASC 3",
    "estacion": "UNIVERSIDAD DE CHILE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8013985",
    "nomenclatura": "ASC 4",
    "estacion": "UNIVERSIDAD DE CHILE",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014005",
    "nomenclatura": "ASC 1",
    "estacion": "LOS LIBERTADORES",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014006",
    "nomenclatura": "ASC 1",
    "estacion": "BIO BIO",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014007",
    "nomenclatura": "ASC 2",
    "estacion": "BIO BIO",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014008",
    "nomenclatura": "ASC 3",
    "estacion": "BIO BIO",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014011",
    "nomenclatura": "ASC 1",
    "estacion": "CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014012",
    "nomenclatura": "ASC 2",
    "estacion": "CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014013",
    "nomenclatura": "ASC 3",
    "estacion": "CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014018",
    "nomenclatura": "ASC 1",
    "estacion": "ESTADIO NACIONAL",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014019",
    "nomenclatura": "ASC 2",
    "estacion": "ESTADIO NACIONAL",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014020",
    "nomenclatura": "ASC 3",
    "estacion": "ESTADIO NACIONAL",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014021",
    "nomenclatura": "ASC 4",
    "estacion": "ESTADIO NACIONAL",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014026",
    "nomenclatura": "ASC 1",
    "estacion": "FRANKLIN",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014027",
    "nomenclatura": "ASC 2",
    "estacion": "FRANKLIN",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014028",
    "nomenclatura": "ASC 3",
    "estacion": "FRANKLIN",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014029",
    "nomenclatura": "ASC 4",
    "estacion": "FRANKLIN",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014030",
    "nomenclatura": "ASC 5",
    "estacion": "FRANKLIN",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014040",
    "nomenclatura": "ASC 1",
    "estacion": "INES DE SUAREZ",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014041",
    "nomenclatura": "ASC 2",
    "estacion": "INES DE SUAREZ",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014042",
    "nomenclatura": "ASC 3",
    "estacion": "INES DE SUAREZ",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014046",
    "nomenclatura": "ASC 1",
    "estacion": "LOS LEONES SUR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014047",
    "nomenclatura": "ASC 1",
    "estacion": "LOS LEONES NORTE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014048",
    "nomenclatura": "ASC 2",
    "estacion": "LOS LEONES SUR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014049",
    "nomenclatura": "ASC 3",
    "estacion": "LOS LEONES SUR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014050",
    "nomenclatura": "ASC 2",
    "estacion": "LOS LEONES NORTE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014051",
    "nomenclatura": "ASC 3",
    "estacion": "LOS LEONES NORTE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014082",
    "nomenclatura": "ASC 1",
    "estacion": "LO VALLEDOR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014083",
    "nomenclatura": "ASC 2",
    "estacion": "LO VALLEDOR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014084",
    "nomenclatura": "ASC 3",
    "estacion": "LO VALLEDOR",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014089",
    "nomenclatura": "ASC 1",
    "estacion": "NUBLE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014090",
    "nomenclatura": "ASC 2",
    "estacion": "NUBLE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014091",
    "nomenclatura": "ASC 3",
    "estacion": "NUBLE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014092",
    "nomenclatura": "ASC 4",
    "estacion": "NUBLE",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014105",
    "nomenclatura": "ASC 1",
    "estacion": "ÑUÑOA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014106",
    "nomenclatura": "ASC 2",
    "estacion": "ÑUÑOA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014107",
    "nomenclatura": "ASC 3",
    "estacion": "ÑUÑOA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014108",
    "nomenclatura": "ASC 4",
    "estacion": "ÑUÑOA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014113",
    "nomenclatura": "ASC 1",
    "estacion": "PEDRO AGUIRRE CERDA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014114",
    "nomenclatura": "ASC 2",
    "estacion": "PEDRO AGUIRRE CERDA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014115",
    "nomenclatura": "ASC 3",
    "estacion": "PEDRO AGUIRRE CERDA",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014119",
    "nomenclatura": "ASC 2",
    "estacion": "TALLER EDIFICIO ADMINISTRATIVO 357",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014120",
    "nomenclatura": "ASC 1",
    "estacion": "TALLER REPARACIÓN MENOR 354",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014121",
    "nomenclatura": "ASC 1",
    "estacion": "VIVACETA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "EVOLUTION",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014122",
    "nomenclatura": "ASC 2",
    "estacion": "VIVACETA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014123",
    "nomenclatura": "ASC 3",
    "estacion": "VIVACETA",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2019",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014127",
    "nomenclatura": "ASC1",
    "estacion": "TALLER CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014128",
    "nomenclatura": "ASC2",
    "estacion": "TALLER CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014129",
    "nomenclatura": "ASC3",
    "estacion": "TALLER CERRILLOS",
    "linea": "L6",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY BLUE",
    "inicio": "2017",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014400",
    "nomenclatura": "ASC-01",
    "estacion": "EL BOSQUE ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014401",
    "nomenclatura": "ASC-02",
    "estacion": "EL BOSQUE ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014402",
    "nomenclatura": "ASC-03",
    "estacion": "EL BOSQUE ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014409",
    "nomenclatura": "ASC-01",
    "estacion": "OBSERVATORIO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014410",
    "nomenclatura": "ASC-02",
    "estacion": "OBSERVATORIO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014411",
    "nomenclatura": "ASC-03",
    "estacion": "OBSERVATORIO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014416",
    "nomenclatura": "ASC-01",
    "estacion": "COPA LO MARTINEZ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014417",
    "nomenclatura": "ASC-02",
    "estacion": "COPA LO MARTINEZ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014418",
    "nomenclatura": "ASC-03",
    "estacion": "COPA LO MARTINEZ",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014429",
    "nomenclatura": "ASC-01",
    "estacion": "EL PINO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014430",
    "nomenclatura": "ASC-02",
    "estacion": "EL PINO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014431",
    "nomenclatura": "ASC-03",
    "estacion": "EL PINO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014432",
    "nomenclatura": "ASC-04",
    "estacion": "EL PINO",
    "linea": "L2",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014435",
    "nomenclatura": "ASC-01",
    "estacion": "FERROCARRIL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014436",
    "nomenclatura": "ASC-02",
    "estacion": "FERROCARRIL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014437",
    "nomenclatura": "ASC-03",
    "estacion": "FERROCARRIL",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014440",
    "nomenclatura": "ASC-01",
    "estacion": "LO CRUZAT",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014441",
    "nomenclatura": "ASC-02",
    "estacion": "LO CRUZAT",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014442",
    "nomenclatura": "ASC-03",
    "estacion": "LO CRUZAT",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014452",
    "nomenclatura": "ASC-01",
    "estacion": "PLAZA DE QUILICURA ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014453",
    "nomenclatura": "ASC-02",
    "estacion": "PLAZA DE QUILICURA ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014454",
    "nomenclatura": "ASC-03",
    "estacion": "PLAZA DE QUILICURA ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  },
  {
    "codigo": "8014455",
    "nomenclatura": "ASC-04",
    "estacion": "PLAZA DE QUILICURA ",
    "linea": "L3",
    "marca": "THYSENKRUPP",
    "modelo": "SINERGY MHC2",
    "inicio": "2023",
    "contrato": "MN-115-2022-G-TKE",
    "tecnologia": "Electromecánico"
  }
];

// ========== STATE MANAGEMENT ==========
let currentState = {
  activeTab: 'byLine',
  selectedLine: null,
  selectedStation: null,
  selectedElevator: null
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log(`✓ App loaded: ${ELEVATORS_DATA.length} elevators`);
  initializeApp();
});

function initializeApp() {
  // Tab navigation
  initTabs();
  
  // Tab 1: By Line/Station/Elevator
  renderLineButtons();
  document.getElementById('stationSelect').addEventListener('change', (e) => {
    if (e.target.value) {
      selectStation(e.target.value);
    }
  });
  document.getElementById('elevatorSelect').addEventListener('change', (e) => {
    if (e.target.value) {
      displayElevatorDetails(e.target.value);
    }
  });
  
  // Tab 2: By Code
  const codeInput = document.getElementById('codeSearch');
  codeInput.addEventListener('input', (e) => {
    const code = e.target.value.trim();
    if (code.length >= 7) {
      searchByCode(code);
    }
  });
  
  // Tab 3: By Brand/Model
  populateBrandDropdown();
  document.getElementById('brandSelect').addEventListener('change', (e) => {
    if (e.target.value) {
      selectBrand(e.target.value);
    }
  });
  document.getElementById('modelSelect').addEventListener('change', (e) => {
    if (e.target.value) {
      displayLocationsByModel(e.target.value);
    }
  });
  
  // Tab 4: Statistics
  // Stats are generated when tab is activated
  
  // Reset button
  document.getElementById('resetBtn').addEventListener('click', resetApp);
}

// ========== TAB NAVIGATION ==========
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(tabName) {
  // Update state
  currentState.activeTab = tabName;
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  // Update tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabName + 'Pane');
  });
  
  // Reset shared result section
  hideResult();
  
  // Generate stats if switching to stats tab
  if (tabName === 'stats') {
    generateStatistics();
  }
}

// ========== TAB 1: SEARCH BY LINE/STATION/ELEVATOR ==========
function renderLineButtons() {
  const container = document.getElementById('lineButtons');
  const lines = Object.keys(LINE_CONFIG);
  
  container.innerHTML = lines.map(lineKey => `
    <button class="line-btn" onclick="selectLine('${lineKey}')">
      <div class="line-circle" style="background:${LINE_CONFIG[lineKey].color}">
        ${lineKey}
      </div>
      <span class="line-name">${LINE_CONFIG[lineKey].name.split(' ')[1]}</span>
    </button>
  `).join('');
}

function selectLine(lineKey) {
  const lineConfig = LINE_CONFIG[lineKey];
  currentState.selectedLine = lineKey;
  
  // Update accent color
  document.documentElement.style.setProperty('--accent', lineConfig.color);
  document.documentElement.style.setProperty('--accent-rgb', lineConfig.rgb);
  
  // Highlight active line button
  document.querySelectorAll('.line-btn').forEach(btn => btn.classList.remove('active'));
  event.target.closest('.line-btn').classList.add('active');
  
  // Populate stations
  populateStations(lineKey);
  
  // Show station selector
  document.getElementById('stationSection').classList.remove('hidden');
  document.getElementById('elevatorSection').classList.add('hidden');
  hideResult();
}

function populateStations(lineKey) {
  const stations = [...new Set(
    ELEVATORS_DATA
      .filter(e => e.linea === lineKey)
      .map(e => e.estacion)
  )].sort();
  
  const select = document.getElementById('stationSelect');
  select.innerHTML = '<option value="">— Elige una estación —</option>';
  stations.forEach(station => {
    select.innerHTML += `<option value="${station}">${station}</option>`;
  });
  
  select.value = '';
}

function selectStation(stationName) {
  currentState.selectedStation = stationName;
  populateElevators(currentState.selectedLine, stationName);
  document.getElementById('elevatorSection').classList.remove('hidden');
  hideResult();
}

function populateElevators(lineKey, stationName) {
  const elevators = ELEVATORS_DATA.filter(e => 
    e.linea === lineKey && e.estacion === stationName
  );
  
  const select = document.getElementById('elevatorSelect');
  select.innerHTML = '<option value="">— Elige un ascensor —</option>';
  elevators.forEach(elev => {
    select.innerHTML += `<option value="${elev.codigo}">${elev.nomenclatura} - ${elev.marca} ${elev.modelo}</option>`;
  });
  
  select.value = '';
}

// ========== TAB 2: SEARCH BY CODE ==========
function searchByCode(code) {
  const elevator = ELEVATORS_DATA.find(e => e.codigo === code);
  
  if (elevator) {
    // Update state for accent color
    currentState.selectedLine = elevator.linea;
    const lineConfig = LINE_CONFIG[elevator.linea];
    document.documentElement.style.setProperty('--accent', lineConfig.color);
    document.documentElement.style.setProperty('--accent-rgb', lineConfig.rgb);
    
    displayElevatorDetails(code);
  } else {
    hideResult();
  }
}

// ========== TAB 3: SEARCH BY BRAND/MODEL ==========
function populateBrandDropdown() {
  const brands = [...new Set(
    ELEVATORS_DATA.map(e => e.marca).filter(b => b.trim())
  )].sort();
  
  const select = document.getElementById('brandSelect');
  select.innerHTML = '<option value="">— Elige una marca —</option>';
  brands.forEach(brand => {
    select.innerHTML += `<option value="${brand}">${brand}</option>`;
  });
}

function selectBrand(brand) {
  const models = [...new Set(
    ELEVATORS_DATA
      .filter(e => e.marca === brand)
      .map(e => e.modelo)
      .filter(m => m.trim())
  )].sort();
  
  const select = document.getElementById('modelSelect');
  select.innerHTML = '<option value="">— Elige un modelo —</option>';
  models.forEach(model => {
    select.innerHTML += `<option value="${brand}|||${model}">${model}</option>`;
  });
  
  document.getElementById('modelSection').classList.remove('hidden');
  document.getElementById('locationListSection').classList.add('hidden');
  hideResult();
}

function displayLocationsByModel(brandModelKey) {
  const [brand, model] = brandModelKey.split('|||');
  const elevators = ELEVATORS_DATA.filter(e => 
    e.marca === brand && e.modelo === model
  );
  
  const listContainer = document.getElementById('locationList');
  listContainer.innerHTML = elevators.map(e => {
    const lineConfig = LINE_CONFIG[e.linea];
    return `
      <div class="location-card" onclick="showElevatorFromLocation('${e.codigo}')">
        <div class="location-header">
          <div class="location-badge" style="background:${lineConfig.color}">${e.linea}</div>
          <div class="location-details">
            <h4>${e.estacion}</h4>
            <p>${e.nomenclatura}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  document.getElementById('locationListSection').classList.remove('hidden');
  hideResult();
}

function showElevatorFromLocation(codigo) {
  const elevator = ELEVATORS_DATA.find(e => e.codigo === codigo);
  if (elevator) {
    currentState.selectedLine = elevator.linea;
    const lineConfig = LINE_CONFIG[elevator.linea];
    document.documentElement.style.setProperty('--accent', lineConfig.color);
    document.documentElement.style.setProperty('--accent-rgb', lineConfig.rgb);
    displayElevatorDetails(codigo);
  }
}

// ========== TAB 4: STATISTICS ==========
function generateStatistics() {
  const statsGrid = document.getElementById('statsGrid');
  
  // Total elevators
  const total = ELEVATORS_DATA.length;
  
  // By line
  const byLine = {};
  Object.keys(LINE_CONFIG).forEach(line => {
    byLine[line] = ELEVATORS_DATA.filter(e => e.linea === line).length;
  });
  
  // By brand
  const byBrand = {};
  ELEVATORS_DATA.forEach(e => {
    if (e.marca) {
      byBrand[e.marca] = (byBrand[e.marca] || 0) + 1;
    }
  });
  
  // By technology
  const byTech = {};
  ELEVATORS_DATA.forEach(e => {
    if (e.tecnologia) {
      byTech[e.tecnologia] = (byTech[e.tecnologia] || 0) + 1;
    }
  });
  
  // Oldest and newest
  const years = ELEVATORS_DATA
    .map(e => parseInt(e.inicio))
    .filter(y => !isNaN(y))
    .sort((a, b) => a - b);
  const oldest = years[0];
  const newest = years[years.length - 1];
  
  statsGrid.innerHTML = `
    <!-- Total Count -->
    <div class="stat-card">
      <div class="stat-header">
        <span class="stat-label">Total Ascensores</span>
        <svg class="stat-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
      </div>
      <div class="stat-value">${total}</div>
    </div>
    
    <!-- Oldest/Newest -->
    <div class="stat-card">
      <div class="stat-header">
        <span class="stat-label">Rango de Años</span>
        <svg class="stat-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
      </div>
      <div class="stat-value">${oldest} - ${newest}</div>
    </div>
    
    <!-- By Line Chart -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Línea</span>
      </div>
      <div class="stat-chart">
        ${Object.keys(byLine).sort().map(line => `
          <div class="chart-item">
            <span class="chart-label" style="color:${LINE_CONFIG[line].color}">${line}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${(byLine[line] / total * 100).toFixed(1)}%; background:${LINE_CONFIG[line].color}">
                <span class="chart-value">${byLine[line]}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- By Brand Chart -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Marca</span>
      </div>
      <div class="stat-chart">
        ${Object.entries(byBrand).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([brand, count]) => `
          <div class="chart-item">
            <span class="chart-label">${brand}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${(count / total * 100).toFixed(1)}%">
                <span class="chart-value">${count}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- By Technology -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Tecnología</span>
      </div>
      <div class="stat-chart">
        ${Object.entries(byTech).map(([tech, count]) => `
          <div class="chart-item">
            <span class="chart-label">${tech}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${(count / total * 100).toFixed(1)}%">
                <span class="chart-value">${count}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ========== SHARED: DISPLAY ELEVATOR DETAILS ==========
function displayElevatorDetails(codigo) {
  const elevator = ELEVATORS_DATA.find(e => e.codigo === codigo);
  if (!elevator) return;
  
  const lineConfig = LINE_CONFIG[elevator.linea];
  
  // Update result card
  document.getElementById('resultBadge').textContent = elevator.linea;
  document.getElementById('resultBadge').style.background = lineConfig.color;
  document.getElementById('resultStation').textContent = elevator.estacion;
  document.getElementById('resultElevator').textContent = elevator.nomenclatura;
  document.getElementById('resultMarca').textContent = elevator.marca || '—';
  document.getElementById('resultModelo').textContent = elevator.modelo || '—';
  document.getElementById('resultAnio').textContent = elevator.inicio || '—';
  document.getElementById('resultTecnologia').textContent = elevator.tecnologia || '—';
  document.getElementById('resultContrato').textContent = elevator.contrato || '—';
  document.getElementById('resultCodigo').textContent = elevator.codigo;
  
  // Show result section
  document.getElementById('resultSection').classList.remove('hidden');
  document.getElementById('resetWrapper').classList.remove('hidden');
  
  // Scroll to result
  setTimeout(() => {
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// ========== UTILITY FUNCTIONS ==========
function hideResult() {
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('resetWrapper').classList.add('hidden');
}

function resetApp() {
  // Reset state
  currentState = {
    activeTab: currentState.activeTab,
    selectedLine: null,
    selectedStation: null,
    selectedElevator: null
  };
  
  // Reset Tab 1: By Line
  document.querySelectorAll('.line-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('stationSection').classList.add('hidden');
  document.getElementById('elevatorSection').classList.add('hidden');
  
  // Reset Tab 2: By Code
  document.getElementById('codeSearch').value = '';
  
  // Reset Tab 3: By Brand/Model
  document.getElementById('brandSelect').value = '';
  document.getElementById('modelSection').classList.add('hidden');
  document.getElementById('locationListSection').classList.add('hidden');
  
  // Hide results
  hideResult();
  
  // Reset accent color
  document.documentElement.style.setProperty('--accent', '#E42313');
  document.documentElement.style.setProperty('--accent-rgb', '228, 35, 19');
}
