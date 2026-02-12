import csv
import json

# Read CSV data
csv_path = r'../Consolidado_Ascensores_Metro_Línea.csv'
with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    data = []
    for r in reader:
        if r['Línea']:  # Only include rows with a line
            data.append({
                'codigo': r['Código de Equipo'],
                'nomenclatura': r['Nomenclatura tipo de equipo'],
                'estacion': r['Estación'],
                'linea': r['Línea'],
                'marca': r['Marca'],
                'modelo': r['Modelo'],
                'inicio': r['Inicio de Servicio'].replace('.0', ''),
                'contrato': r['Contrato'],
                'tecnologia': r['Tecnología']
            })

# Create the complete app.js file
app_js_content = '''/* ============================================
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
const ELEVATORS_DATA = ''' + json.dumps(data, ensure_ascii=False, indent=2) + ''';

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
'''

# Write the complete app.js
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js_content)

print(f"Created app.js with {len(data)} elevator records")
