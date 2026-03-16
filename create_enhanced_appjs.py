# Script to create the enhanced app.js with all new features
import codecs

# Read the current app.js to extract the elevator data
with codecs.open(r'c:\Users\jjaltamiranop\OneDrive - Metro de Santiago de Chile\Documentos\Material Estudio\Transporte Vertical\Formato EXCEL\AscensoresMetro\mds-tv\app.js', 'r', 'utf-8') as f:
    current_content = f.read()

# Extract just the data section
data_start = current_content.find('const ELEVATORS_DATA = [')
data_end = current_content.find('];', data_start) + 2
elevators_data_str = current_content[data_start:data_end]

# Create the new enhanced app.js
new_app_js = f'''/* ============================================
   Metro de Santiago - Ascensores PWA v2
   App Logic & Data - Enhanced with Tabs
   ============================================ */

// ========== METRO LINE CONFIGURATION ==========
const LINE_CONFIG = {{
  L1: {{ name: 'Línea 1', color: '#E42313', rgb: '228, 35, 19' }},
  L2: {{ name: 'Línea 2', color: '#F7941D', rgb: '247, 148, 29' }},
  L3: {{ name: 'Línea 3', color: '#9B5E3C', rgb: '155, 94, 60' }},
  L4: {{ name: 'Línea 4', color: '#0072BC', rgb: '0, 114, 188' }},
  L4A: {{ name: 'Línea 4A', color: '#00AEEF', rgb: '0, 174, 239' }},
  L5: {{ name: 'Línea 5', color: '#00A551', rgb: '0, 165, 81' }},
  L6: {{ name: 'Línea 6', color: '#6F2C91', rgb: '111, 44, 145' }}
}};

// ========== EMBEDDED ELEVATOR DATA ==========
// Source: Consolidado_Ascensores_Metro_Línea.csv
{elevators_data_str}

// ========== STATE MANAGEMENT ==========
let currentState = {{
  activeTab: 'byLine',
  selectedLine: null,
  selectedStation: null,
  selectedElevator: null
}};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {{
  console.log(`✓ App loaded: ${{ELEVATORS_DATA.length}} elevators`);
  initializeApp();
}});

function initializeApp() {{
  // Tab navigation
  initTabs();
  
  // Tab 1: By Line/Station/Elevator
  renderLineButtons();
  document.getElementById('stationSelect').addEventListener('change', (e) => {{
    if (e.target.value) {{
      selectStation(e.target.value);
    }}
  }});
  document.getElementById('elevatorSelect').addEventListener('change', (e) => {{
    if (e.target.value) {{
      displayElevatorDetails(e.target.value);
    }}
  }});
  
  // Tab 2: By Code
  const codeInput = document.getElementById('codeSearch');
  codeInput.addEventListener('input', (e) => {{
    const code = e.target.value.trim();
    if (code.length >= 7) {{
      searchByCode(code);
    }}
  }});
  
  // Tab 3: By Brand/Model
  populateBrandDropdown();
  document.getElementById('brandSelect').addEventListener('change', (e) => {{
    if (e.target.value) {{
      selectBrand(e.target.value);
    }}
  }});
  document.getElementById('modelSelect').addEventListener('change', (e) => {{
    if (e.target.value) {{
      displayLocationsByModel(e.target.value);
    }}
  }});
  
  // Tab 4: Statistics
  // Stats are generated when tab is activated
  
  // Reset button
  document.getElementById('resetBtn').addEventListener('click', resetApp);
}}

// ========== TAB NAVIGATION ==========
function initTabs() {{
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {{
    btn.addEventListener('click', () => {{
      switchTab(btn.dataset.tab);
    }});
  }});
}}

function switchTab(tabName) {{
  // Update state
  currentState.activeTab = tabName;
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {{
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  }});
  
  // Update tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {{
    pane.classList.toggle('active', pane.id === tabName + 'Pane');
  }});
  
  // Reset shared result section
  hideResult();
  
  // Generate stats if switching to stats tab
  if (tabName === 'stats') {{
    generateStatistics();
  }}
}}

// ========== TAB 1: SEARCH BY LINE/STATION/ELEVATOR ==========
function renderLineButtons() {{
  const container = document.getElementById('lineButtons');
  const lines = Object.keys(LINE_CONFIG);
  
  container.innerHTML = lines.map(lineKey => `
    <button class="line-btn" onclick="selectLine('${{lineKey}}')">
      <div class="line-circle" style="background:${{LINE_CONFIG[lineKey].color}}">
        ${{lineKey}}
      </div>
      <span class="line-name">${{LINE_CONFIG[lineKey].name.split(' ')[1]}}</span>
    </button>
  `).join('');
}}

function selectLine(lineKey) {{
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
}}

function populateStations(lineKey) {{
  const stations = [...new Set(
    ELEVATORS_DATA
      .filter(e => e.linea === lineKey)
      .map(e => e.estacion)
  )].sort();
  
  const select = document.getElementById('stationSelect');
  select.innerHTML = '<option value="">— Elige una estación —</option>';
  stations.forEach(station => {{
    select.innerHTML += `<option value="${{station}}">${{station}}</option>`;
  }});
  
  select.value = '';
}}

function selectStation(stationName) {{
  currentState.selectedStation = stationName;
  populateElevators(currentState.selectedLine, stationName);
  document.getElementById('elevatorSection').classList.remove('hidden');
  hideResult();
}}

function populateElevators(lineKey, stationName) {{
  const elevators = ELEVATORS_DATA.filter(e => 
    e.linea === lineKey && e.estacion === stationName
  );
  
  const select = document.getElementById('elevatorSelect');
  select.innerHTML = '<option value="">— Elige un ascensor —</option>';
  elevators.forEach(elev => {{
    select.innerHTML += `<option value="${{elev.codigo}}">${{elev.nomenclatura}} - ${{elev.marca}} ${{elev.modelo}}</option>`;
  }});
  
  select.value = '';
}}

// ========== TAB 2: SEARCH BY CODE ==========
function searchByCode(code) {{
  const elevator = ELEVATORS_DATA.find(e => e.codigo === code);
  
  if (elevator) {{
    // Update state for accent color
    currentState.selectedLine = elevator.linea;
    const lineConfig = LINE_CONFIG[elevator.linea];
    document.documentElement.style.setProperty('--accent', lineConfig.color);
    document.documentElement.style.setProperty('--accent-rgb', lineConfig.rgb);
    
    displayElevatorDetails(code);
  }} else {{
    hideResult();
  }}
}}

// ========== TAB 3: SEARCH BY BRAND/MODEL ==========
function populateBrandDropdown() {{
  const brands = [...new Set(
    ELEVATORS_DATA.map(e => e.marca).filter(b => b.trim())
  )].sort();
  
  const select = document.getElementById('brandSelect');
  select.innerHTML = '<option value="">— Elige una marca —</option>';
  brands.forEach(brand => {{
    select.innerHTML += `<option value="${{brand}}">${{brand}}</option>`;
  }});
}}

function selectBrand(brand) {{
  const models = [...new Set(
    ELEVATORS_DATA
      .filter(e => e.marca === brand)
      .map(e => e.modelo)
      .filter(m => m.trim())
  )].sort();
  
  const select = document.getElementById('modelSelect');
  select.innerHTML = '<option value="">— Elige un modelo —</option>';
  models.forEach(model => {{
    select.innerHTML += `<option value="${{brand}}|||${{model}}">${{model}}</option>`;
  }});
  
  document.getElementById('modelSection').classList.remove('hidden');
  document.getElementById('locationListSection').classList.add('hidden');
  hideResult();
}}

function displayLocationsByModel(brandModelKey) {{
  const [brand, model] = brandModelKey.split('|||');
  const elevators = ELEVATORS_DATA.filter(e => 
    e.marca === brand && e.modelo === model
  );
  
  const listContainer = document.getElementById('locationList');
  listContainer.innerHTML = elevators.map(e => {{
    const lineConfig = LINE_CONFIG[e.linea];
    return `
      <div class="location-card" onclick="showElevatorFromLocation('${{e.codigo}}')">
        <div class="location-header">
          <div class="location-badge" style="background:${{lineConfig.color}}">${{e.linea}}</div>
          <div class="location-details">
            <h4>${{e.estacion}}</h4>
            <p>${{e.nomenclatura}}</p>
          </div>
        </div>
      </div>
    `;
  }}).join('');
  
  document.getElementById('locationListSection').classList.remove('hidden');
  hideResult();
}}

function showElevatorFromLocation(codigo) {{
  const elevator = ELEVATORS_DATA.find(e => e.codigo === codigo);
  if (elevator) {{
    currentState.selectedLine = elevator.linea;
    const lineConfig = LINE_CONFIG[elevator.linea];
    document.documentElement.style.setProperty('--accent', lineConfig.color);
    document.documentElement.style.setProperty('--accent-rgb', lineConfig.rgb);
    displayElevatorDetails(codigo);
  }}
}}

// ========== TAB 4: STATISTICS ==========
function generateStatistics() {{
  const statsGrid = document.getElementById('statsGrid');
  
  // Total elevators
  const total = ELEVATORS_DATA.length;
  
  // By line
  const byLine = {{}};
  Object.keys(LINE_CONFIG).forEach(line => {{
    byLine[line] = ELEVATORS_DATA.filter(e => e.linea === line).length;
  }});
  
  // By brand
  const byBrand = {{}};
  ELEVATORS_DATA.forEach(e => {{
    if (e.marca) {{
      byBrand[e.marca] = (byBrand[e.marca] || 0) + 1;
    }}
  }});
  
  // By technology
  const byTech = {{}};
  ELEVATORS_DATA.forEach(e => {{
    if (e.tecnologia) {{
      byTech[e.tecnologia] = (byTech[e.tecnologia] || 0) + 1;
    }}
  }});
  
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
      <div class="stat-value">${{total}}</div>
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
      <div class="stat-value">${{oldest}} - ${{newest}}</div>
    </div>
    
    <!-- By Line Chart -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Línea</span>
      </div>
      <div class="stat-chart">
        ${{Object.keys(byLine).sort().map(line => `
          <div class="chart-item">
            <span class="chart-label" style="color:${{LINE_CONFIG[line].color}}">${{line}}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${{(byLine[line] / total * 100).toFixed(1)}}%; background:${{LINE_CONFIG[line].color}}">
                <span class="chart-value">${{byLine[line]}}</span>
              </div>
            </div>
          </div>
        `).join('')}}
      </div>
    </div>
    
    <!-- By Brand Chart -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Marca</span>
      </div>
      <div class="stat-chart">
        ${{Object.entries(byBrand).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([brand, count]) => `
          <div class="chart-item">
            <span class="chart-label">${{brand}}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${{(count / total * 100).toFixed(1)}}%">
                <span class="chart-value">${{count}}</span>
              </div>
            </div>
          </div>
        `).join('')}}
      </div>
    </div>
    
    <!-- By Technology -->
    <div class="stat-card full-width">
      <div class="stat-header">
        <span class="stat-label">Por Tecnología</span>
      </div>
      <div class="stat-chart">
        ${{Object.entries(byTech).map(([tech, count]) => `
          <div class="chart-item">
            <span class="chart-label">${{tech}}</span>
            <div class="chart-bar-wrapper">
              <div class="chart-bar" style="width:${{(count / total * 100).toFixed(1)}}%">
                <span class="chart-value">${{count}}</span>
              </div>
            </div>
          </div>
        `).join('')}}
      </div>
    </div>
  `;
}}

// ========== SHARED: DISPLAY ELEVATOR DETAILS ==========
function displayElevatorDetails(codigo) {{
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
  setTimeout(() => {{
    document.getElementById('resultSection').scrollIntoView({{ behavior: 'smooth', block: 'nearest' }});
  }}, 100);
}}

// ========== UTILITY FUNCTIONS ==========
function hideResult() {{
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('resetWrapper').classList.add('hidden');
}}

function resetApp() {{
  // Reset state
  currentState = {{
    activeTab: currentState.activeTab,
    selectedLine: null,
    selectedStation: null,
    selectedElevator: null
  }};
  
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
}}
'''

# Write the new app.js
with codecs.open(r'c:\Users\jjaltamiranop\OneDrive - Metro de Santiago de Chile\Documentos\Material Estudio\Transporte Vertical\Formato EXCEL\AscensoresMetro\mds-tv\app.js', 'w', 'utf-8') as f:
    f.write(new_app_js)

print('Created enhanced app.js with all new features')
print(f'  - Tab navigation system')
print(f'  - Search by code (instant)')
print(f'  - Search by brand/model')
print(f'  - Statistics dashboard')
print(f'  - {ELEVATORS_DATA.count("codigo")} elevators embedded')
