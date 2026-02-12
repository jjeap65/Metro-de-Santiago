/* ============================================
   Metro de Santiago - Ascensores PWA
   App Logic & Data
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

// ========== APP STATE ==========
let selectedLine = null;
let selectedStation = null;
let selectedElevator = null;

// ========== DOM ELEMENTS ==========
const lineButtons = document.getElementById('lineButtons');
const stationSection = document.getElementById('stationSection');
const stationSelect = document.getElementById('stationSelect');
const stationWrapper = document.getElementById('stationWrapper');
const elevatorSection = document.getElementById('elevatorSection');
const elevatorSelect = document.getElementById('elevatorSelect');
const elevatorWrapper = document.getElementById('elevatorWrapper');
const resultSection = document.getElementById('resultSection');
const resultCard = document.getElementById('resultCard');
const resetWrapper = document.getElementById('resetWrapper');
const resetBtn = document.getElementById('resetBtn');

// ========== INITIALIZE APP ==========
document.addEventListener('DOMContentLoaded', () => {
  renderLineButtons();
  resetBtn.addEventListener('click', resetApp);
});

// ========== RENDER LINE BUTTONS ==========
function renderLineButtons() {
  const lines = Object.keys(LINE_CONFIG);
  lineButtons.innerHTML = lines.map(lineCode => {
    const { name, color } = LINE_CONFIG[lineCode];
    return `
      <button class="line-btn" data-line="${lineCode}">
        <div class="line-circle" style="background-color: ${color};">
          ${lineCode}
        </div>
        <span class="line-name">${name.replace('Línea ', 'L')}</span>
      </button>
    `;
  }).join('');

  document.querySelectorAll('.line-btn').forEach(btn => {
    btn.addEventListener('click', () => selectLine(btn.dataset.line));
  });
}

// ========== SELECT LINE ==========
function selectLine(lineCode) {
  selectedLine = lineCode;
  selectedStation = null;
  selectedElevator = null;

  updateAccentColor(lineCode);

  document.querySelectorAll('.line-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.line === lineCode);
  });

  populateStations(lineCode);

  stationSection.classList.remove('hidden');
  elevatorSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  resetWrapper.classList.add('hidden');
}

// ========== UPDATE ACCENT COLOR ==========
function updateAccentColor(lineCode) {
  const { color, rgb } = LINE_CONFIG[lineCode];
  document.documentElement.style.setProperty('--accent', color);
  document.documentElement.style.setProperty('--accent-rgb', rgb);
}

// ========== POPULATE STATIONS ==========
function populateStations(lineCode) {
  const stations = [...new Set(
    ELEVATORS_DATA
      .filter(e => e.linea === lineCode)
      .map(e => e.estacion)
  )].sort();

  stationSelect.innerHTML = `
    <option value="">— Elige una estación —</option>
    ${stations.map(station => `<option value="${station}">${station}</option>`).join('')}
  `;

  stationWrapper.style.borderColor = LINE_CONFIG[lineCode].color;
  
  stationSelect.value = '';
  stationSelect.onchange = () => {
    if (stationSelect.value) {
      selectStation(stationSelect.value);
    }
  };
}

// ========== SELECT STATION ==========
function selectStation(stationName) {
  selectedStation = stationName;
  selectedElevator = null;

  populateElevators(selectedLine, stationName);

  elevatorSection.classList.remove('hidden');
  resultSection.classList.add('hidden');
  resetWrapper.classList.add('hidden');
}

// ========== POPULATE ELEVATORS ==========
function populateElevators(lineCode, stationName) {
  const elevators = ELEVATORS_DATA.filter(
    e => e.linea === lineCode && e.estacion === stationName
  ).sort((a, b) => a.nomenclatura.localeCompare(b.nomenclatura));

  elevatorSelect.innerHTML = `
    <option value="">— Elige un ascensor —</option>
    ${elevators.map(elev => 
      `<option value="${elev.codigo}">${elev.nomenclatura}</option>`
    ).join('')}
  `;

  elevatorWrapper.style.borderColor = LINE_CONFIG[lineCode].color;

  elevatorSelect.value = '';
  elevatorSelect.onchange = () => {
    if (elevatorSelect.value) {
      selectElevator(elevatorSelect.value);
    }
  };
}

// ========== SELECT ELEVATOR ==========
function selectElevator(codigo) {
  const elevator = ELEVATORS_DATA.find(e => e.codigo === codigo);
  if (!elevator) return;

  selectedElevator = codigo;
  displayElevatorDetails(elevator);
}

// ========== DISPLAY ELEVATOR DETAILS ==========
function displayElevatorDetails(elevator) {
  document.getElementById('resultBadge').textContent = elevator.linea;
  document.getElementById('resultBadge').style.backgroundColor = LINE_CONFIG[elevator.linea].color;
  document.getElementById('resultStation').textContent = elevator.estacion;
  document.getElementById('resultElevator').textContent = elevator.nomenclatura;
  document.getElementById('resultMarca').textContent = elevator.marca || '—';
  document.getElementById('resultModelo').textContent = elevator.modelo || '—';
  document.getElementById('resultAnio').textContent = elevator.inicio || '—';
  document.getElementById('resultTecnologia').textContent = elevator.tecnologia || '—';
  document.getElementById('resultContrato').textContent = elevator.contrato || '—';
  document.getElementById('resultCodigo').textContent = elevator.codigo || '—';

  resultSection.classList.remove('hidden');
  resetWrapper.classList.remove('hidden');
}

// ========== RESET APP ==========
function resetApp() {
  selectedLine = null;
  selectedStation = null;
  selectedElevator = null;

  document.querySelectorAll('.line-btn').forEach(btn => btn.classList.remove('active'));

  document.documentElement.style.setProperty('--accent', '#E42313');
  document.documentElement.style.setProperty('--accent-rgb', '228, 35, 19');

  stationSection.classList.add('hidden');
  elevatorSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  resetWrapper.classList.add('hidden');

  stationSelect.value = '';
  elevatorSelect.value = '';
}

console.log('✓ Metro de Santiago Elevator PWA loaded');
console.log(`✓ ${ELEVATORS_DATA.length} elevators in database`);
