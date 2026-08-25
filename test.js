

// ==================== I18N System ====================
const I18N = {
  zh: {
    title: '输电线路张力放线计算系统',
    subtitle: '基于滑车磨阻递推法 / 支持控制档反算 / 牵引绳上扬检查 / 一键导出',
    nav_project: '工程参数',
    nav_towers: '杆塔数据',
    nav_params: '导线/绳参数',
    nav_control: '控制档与跨越',
    nav_results: '计算结果',
    nav_check: '校验报告',
    nav_equip: '工器具选型',
    nav_export: '导出',
    project_info: '工程基本信息',
    calc_control: '计算控制参数',
    tower_data: '杆塔数据录入',
    cond_rope_params: '导线与牵引绳参数',
    control_span: '控制档与跨越物',
    result_overview: '计算结果总览',
    check_report: '施工校验报告',
    equip_sel: '工器具选型',
    export_report: '导出计算书',
    label_projName: '项目名称',
    label_section: '施工区段',
    label_voltage: '电压等级 (kV)',
    label_condType: '导线型号',
    label_bundle: '分裂数',
    label_gwType: '地线型号',
    label_epsCond: '滑车对导线磨阻系数 epsilon',
    label_epsRope: '滑车对牵引绳磨阻系数 epsilon',
    label_margin: '放线裕度 (m)',
    label_safeDist: '对地安全距离要求 (m)',
    label_calcMode: '计算方式',
    label_manualT: '张力机出口整定张力 (N)',
    label_condModel: '导线型号（选择后自动填充参数）',
    label_wCond: '导线单位重量 w (N/m)',
    label_TpCond: '导线保证计算拉断力 Tp (N)',
    label_ropeModel: '牵引绳型号（选择后自动填充参数）',
    label_wRope: '牵引绳单位重量 (N/m)',
    label_breakRope: '牵引绳综合破断力 (N)',
    label_kpPull: '主牵引机额定牵引力系数 Kp',
    label_kpTension: '主张力机额定制动张力系数 Kp',
    label_subSpacing: '子导线间距 (mm)',
    label_controlMode: '控制档选择方式',
    label_controlPos: '控制档位置',
    label_reportNo: '计算书编号',
    label_author: '编写人',
    label_checker: '校核人',
    label_approver: '批准人',
    opt_single: '单导线',
    opt_manual: '手动指定张力机出口张力（推荐）',
    opt_auto: '自动选择控制档（由控制档跨越物反算张力）',
    opt_autoControl: '自动推荐（有跨越优先）',
    opt_manualControl: '手动指定',
    btn_next_towers: '下一步 - 杆塔数据',
    btn_next_params: '下一步 - 导线参数',
    btn_next_control: '下一步 - 控制档',
    btn_next_check: '下一步 - 校验',
    btn_next_equip: '下一步 - 工器具',
    btn_next_export: '下一步 - 导出',
    btn_prev: '上一步',
    btn_backHome: '返回首页',
    btn_addTower: '添加杆塔',
    btn_demo1: '载入示例（老挝13档）',
    btn_demo2: '载入示例（尼泊尔16档）',
    btn_clear: '清空',
    btn_calc: '开始计算',
    btn_print: '浏览器打印 / 保存PDF',
    btn_png: '导出PNG截图',
    btn_json: '保存工程数据(JSON)',
    btn_import: '导入工程数据',
    hint_eps: '常规 1.015~1.020',
    hint_margin: '常规 0.5m',
    hint_safeDist: '500kV 一般大于等于8.5m',
    hint_kpPull: '推荐 0.25~0.33',
    hint_kpTension: '推荐 0.17~0.20',
    alert_tower: '提示：从张力机到牵引机依次录入各杆塔。每行杆塔的"与右档距""与右高差""跨越物数据"均属于该杆到右侧下一杆的线档参数。',
    alert_control: '控制档是张力放线过程中弧垂最大的线档（通常是最大档距或跨越重要设施的档）。系统根据跨越物要求和档距自动推荐控制档，并由控制档安全距离反算出张力机出口张力。',
    alert_equip: '根据《架空输电线路张力架线施工工艺导则》及相关规范，按导线拉断力计算各主要工器具的选型参数。',
    alert_export: '生成计算书。推荐：使用"浏览器打印"（Ctrl+P）直接打印或保存为PDF，中文显示100%正常。',
    th_no: '序号',
    th_towerName: '杆塔号',
    th_span: '与右档距(m)',
    th_height: '与右高差(m)',
    th_angle: '转角(度)',
    th_crossDist: '跨越物距右杆(m)',
    th_crossHeight: '跨越悬垂距(m)',
    th_op: '操作',
    th_spanName: '档',
    th_spanL: '档距(m)',
    th_diffH: '高差(m)',
    th_Tin: '张力机侧张力(N)',
    th_Tout: '牵引机侧张力(N)',
    th_Taxial: '轴向张力(N)',
    th_spanCount: '距牵引机档数',
    th_ropeT: '牵引绳张力(N)',
    th_vertSpan: '垂直档距(m)',
    th_ropeUp: '牵引绳上扬',
    th_horizT: '水平张力(N)',
    th_sag: '平视弧垂(m)',
    th_lineLen: '线长(m)',
    th_actualSafe: '实际安全距(m)',
    th_reqSafe: '要求安全距(m)',
    th_reqSafe2: '要求安全距(m)',
    th_thetaA: '悬垂角A(度)',
    th_thetaB: '悬垂角B(度)',
    th_turnAngle: '转角(度)',
    th_wrapAngle: '包络角(度)',
    th_doubleSheave: '双滑车',
    th_calcItem: '计算项目',
    th_formula: '公式',
    th_reqVal: '要求值',
    th_recommend: '推荐规格',
    th_crossSpan: '跨越档',
    th_crossObj: '被跨越物',
    tab_cond: '导线张力递推',
    tab_rope: '牵引绳张力递推',
    tab_sag: '弧垂与安全距',
    tab_angle: '角度与包络角',
    tab_chart: '曲线图',
    msg_minTowers: '请至少录入2个杆塔',
    msg_keepOne: '至少保留一个杆塔',
    msg_warnSag: '警告：控制档最大允许弧垂 {fmax} m 超过档距的一半（{half} m），抛物线公式可能失效。请增大安全距离要求或检查跨越物参数。',
    msg_warnCross: '警告：控制档跨越物悬垂距不足以满足安全距离要求！',
    msg_manualMode: '提示：控制档 {span} 无跨越物数据，无法由安全距离反算张力机出口张力。系统将使用手动设定的张力机出口张力 {t0} N 进行计算。如需调整张力，请修改工程参数中的"张力机出口整定张力"。',
    msg_calcError: '计算过程中发生错误',
    msg_needCalc: '请先进行计算',
    msg_exporting: '正在生成截图，请稍候...',
    msg_exportFail: '导出失败',
    msg_importOK: '导入成功',
    msg_importFail: '导入失败',
    cross_none: '暂无跨越物数据，请在杆塔数据页录入"跨越物距离"和"悬垂距"',
    badge_control: '控制档',
    badge_up: '上扬',
    badge_normal: '正常',
    badge_double: '需双滑车',
    badge_single: '单滑车',
    check_pass: 'OK',
    check_fail: 'FAIL',
    check_info: 'ℹ',
    conclusion_normal: '正常',
    mode_auto: '自动模式',
    mode_manual: '手动模式',
    footer: 'Transmission Line Tension Stringing Calculator \u00a9 2024 | 本地计算，数据不上传'
  },
  en: {
    title: 'Transmission Line Tension Stringing Calculator',
    subtitle: 'Sheave Friction Recursive Method / Control Span Reverse Calculation / Rope Uplift Check / One-click Export',
    nav_project: 'Project Params',
    nav_towers: 'Tower Data',
    nav_params: 'Conductor/Rope',
    nav_control: 'Control Span',
    nav_results: 'Results',
    nav_check: 'Check Report',
    nav_equip: 'Equipment',
    nav_export: 'Export',
    project_info: 'Project Information',
    calc_control: 'Calculation Control Parameters',
    tower_data: 'Tower Data Entry',
    cond_rope_params: 'Conductor & Pulling Rope Parameters',
    control_span: 'Control Span & Crossings',
    result_overview: 'Calculation Results Overview',
    check_report: 'Construction Check Report',
    equip_sel: 'Equipment Selection',
    export_report: 'Export Report',
    label_projName: 'Project Name',
    label_section: 'Section',
    label_voltage: 'Voltage Level (kV)',
    label_condType: 'Conductor Type',
    label_bundle: 'Bundle Count',
    label_gwType: 'Ground Wire Type',
    label_epsCond: 'Sheave friction coeff. epsilon (conductor)',
    label_epsRope: 'Sheave friction coeff. epsilon (rope)',
    label_margin: 'Stringing Margin (m)',
    label_safeDist: 'Ground Clearance Required (m)',
    label_calcMode: 'Calculation Mode',
    label_manualT: 'Tensioner Outlet Tension (N)',
    label_condModel: 'Conductor Model (auto-fill)',
    label_wCond: 'Conductor Unit Weight w (N/m)',
    label_TpCond: 'Conductor Rated Breaking Load Tp (N)',
    label_ropeModel: 'Pulling Rope Model (auto-fill)',
    label_wRope: 'Rope Unit Weight (N/m)',
    label_breakRope: 'Rope Breaking Load (N)',
    label_kpPull: 'Puller Rated Tension Coeff. Kp',
    label_kpTension: 'Tensioner Brake Tension Coeff. Kp',
    label_subSpacing: 'Sub-conductor Spacing (mm)',
    label_controlMode: 'Control Span Selection',
    label_controlPos: 'Control Span Position',
    label_reportNo: 'Report No.',
    label_author: 'Author',
    label_checker: 'Checker',
    label_approver: 'Approver',
    opt_single: 'Single',
    opt_manual: 'Manual Tensioner Outlet Tension (Recommended)',
    opt_auto: 'Auto Select Control Span (Reverse from crossing)',
    opt_autoControl: 'Auto Recommend (Crossing Priority)',
    opt_manualControl: 'Manual Specify',
    btn_next_towers: 'Next - Tower Data',
    btn_next_params: 'Next - Conductor Params',
    btn_next_control: 'Next - Control Span',
    btn_next_check: 'Next - Check Report',
    btn_next_equip: 'Next - Equipment',
    btn_next_export: 'Next - Export',
    btn_prev: 'Previous',
    btn_backHome: 'Back to Home',
    btn_addTower: 'Add Tower',
    btn_demo1: 'Load Demo (Laos 13 spans)',
    btn_demo2: 'Load Demo (Nepal 16 spans)',
    btn_clear: 'Clear',
    btn_calc: 'Calculate',
    btn_print: 'Browser Print / Save PDF',
    btn_png: 'Export PNG',
    btn_json: 'Save Project (JSON)',
    btn_import: 'Import Project',
    hint_eps: 'Typical 1.015~1.020',
    hint_margin: 'Typical 0.5m',
    hint_safeDist: '500kV typically >= 8.5m',
    hint_kpPull: 'Recommended 0.25~0.33',
    hint_kpTension: 'Recommended 0.17~0.20',
    alert_tower: 'Tip: Enter towers from Tensioner to Puller. Each row\'s "Span", "Height Diff", and "Crossing" belong to the span to the RIGHT of this tower.',
    alert_control: 'Control span is the span with maximum sag during tension stringing. The system auto-recommends based on crossings and span length, and reverse-calculates tensioner outlet tension from clearance requirements.',
    alert_equip: 'Equipment selection parameters calculated per conductor breaking load, based on tension stringing construction guidelines.',
    alert_export: 'Generate report. Recommended: Use Browser Print (Ctrl+P) to print or save as PDF.',
    th_no: 'No.',
    th_towerName: 'Tower',
    th_span: 'Span to Right (m)',
    th_height: 'Height Diff to Right (m)',
    th_angle: 'Deflection Angle (deg)',
    th_crossDist: 'Crossing Dist to Right Tower (m)',
    th_crossHeight: 'Crossing Height (m)',
    th_op: 'Action',
    th_spanName: 'Span',
    th_spanL: 'Span (m)',
    th_diffH: 'Height Diff (m)',
    th_Tin: 'Tensioner Side Tension (N)',
    th_Tout: 'Puller Side Tension (N)',
    th_Taxial: 'Axial Tension (N)',
    th_spanCount: 'Spans from Puller',
    th_ropeT: 'Rope Tension (N)',
    th_vertSpan: 'Vertical Span (m)',
    th_ropeUp: 'Rope Uplift',
    th_horizT: 'Horizontal Tension (N)',
    th_sag: 'Sag (m)',
    th_lineLen: 'Line Length (m)',
    th_actualSafe: 'Actual Clearance (m)',
    th_reqSafe: 'Req. Clearance (m)',
    th_reqSafe2: 'Req. Clearance (m)',
    th_thetaA: 'Suspension A (deg)',
    th_thetaB: 'Suspension B (deg)',
    th_turnAngle: 'Deflection (deg)',
    th_wrapAngle: 'Wrap Angle (deg)',
    th_doubleSheave: 'Double Sheave',
    th_calcItem: 'Item',
    th_formula: 'Formula',
    th_reqVal: 'Required',
    th_recommend: 'Recommendation',
    th_crossSpan: 'Crossing Span',
    th_crossObj: 'Crossed Object',
    tab_cond: 'Conductor Tension',
    tab_rope: 'Rope Tension',
    tab_sag: 'Sag & Clearance',
    tab_angle: 'Angles',
    tab_chart: 'Charts',
    msg_minTowers: 'Please enter at least 2 towers',
    msg_keepOne: 'Keep at least one tower',
    msg_warnSag: 'Warning: Control span max allowed sag {fmax} m exceeds half span ({half} m). Parabola formula may fail. Increase clearance requirement or check crossing data.',
    msg_warnCross: 'Warning: Control span crossing height insufficient for required clearance!',
    msg_manualMode: 'Note: Control span {span} has no crossing data. Cannot reverse-calculate tensioner outlet tension from clearance. System will use manual tension {t0} N. Adjust in Project Params if needed.',
    msg_calcError: 'Calculation error',
    msg_needCalc: 'Please calculate first',
    msg_exporting: 'Generating screenshot, please wait...',
    msg_exportFail: 'Export failed',
    msg_importOK: 'Import successful',
    msg_importFail: 'Import failed',
    cross_none: 'No crossing data. Enter "Crossing Distance" and "Crossing Height" in Tower Data page.',
    badge_control: 'Control',
    badge_up: 'Uplift',
    badge_normal: 'Normal',
    badge_double: 'Double Sheave',
    badge_single: 'Single Sheave',
    check_pass: 'OK',
    check_fail: 'FAIL',
    check_info: 'ℹ',
    conclusion_normal: 'Normal',
    mode_auto: 'Auto Mode',
    mode_manual: 'Manual Mode',
    footer: 'TL Tension Calc \u00a9 2024 | Local calculation, no data upload'
  }
};

let currentLang = 'zh';

function t(key) {
  const str = I18N[currentLang]?.[key] || I18N['zh']?.[key] || key;
  return str;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('tl_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyI18N();
}

function applyI18N() {
  document.getElementById('pageTitle').textContent = t('title');
  document.getElementById('headerTitle').textContent = t('title');
  document.getElementById('headerSubtitle').textContent = t('subtitle');
  document.getElementById('footerText').textContent = t('footer');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      const enPh = el.dataset.placeholderEn;
      el.placeholder = currentLang === 'en' && enPh ? enPh : text;
    } else {
      el.textContent = text;
    }
  });

  document.getElementById('actTitle').textContent = t('act_title');
  document.getElementById('actSubtitle').textContent = t('act_subtitle');
  document.getElementById('actPriceNote').textContent = t('act_price_note');
  document.getElementById('actBuyBtn').textContent = t('act_buy');
  document.getElementById('actDivider').textContent = t('act_divider');
  document.getElementById('licenseKey').placeholder = t('act_placeholder');
  document.getElementById('actVerifyBtn').textContent = t('act_verify');
  document.getElementById('actError').textContent = t('act_error');
  document.getElementById('actNote').textContent = t('act_note');

  const feats = document.getElementById('actFeatures');
  if (feats) {
    feats.innerHTML = `
      <li>${t('act_feat1')}</li>
      <li>${t('act_feat2')}</li>
      <li>${t('act_feat3')}</li>
      <li>${t('act_feat4')}</li>
      <li>${t('act_feat5')}</li>
    `;
  }

  // Update locked hints
  });
}

const ACT_KEY = 'tl_activated_v2';
const ACT_TS_KEY = 'tl_activated_ts';


// ==================== Core Logic ====================
let towers = [];
let calcResults = null;
let condChart = null, ropeChart = null, sagChart = null;

function showStep(idx) {
  document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
  document.getElementById('step-'+idx).classList.add('active');
  document.querySelectorAll('.step-item').forEach((el, i) => {
    el.classList.remove('active');
    if (i === idx) el.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (idx === 1) updateTowerSelect();
  if (idx === 3) refreshCrossTable();
}

function showTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleCalcMode() {
  const mode = document.getElementById('calcMode').value;
  document.getElementById('manualTensionBox').classList.toggle('hidden', mode !== 'manual');
}

function addTower(data) {
  const tbody = document.getElementById('towerBody');
  const idx = tbody.children.length;
  const row = document.createElement('tr');
  row.dataset.idx = idx;
  const d = data || {};
  row.innerHTML = `
    <td>${idx}</td>
    <td><input class="table-input" value="${d.name || ''}" placeholder="${currentLang==='en'?'Tower':'杆塔号'}"></td>
    <td><input class="table-input" type="number" value="${d.span !== undefined ? d.span : ''}" placeholder="${currentLang==='en'?'Span':'档距'}"></td>
    <td><input class="table-input" type="number" value="${d.height !== undefined ? d.height : ''}" placeholder="${currentLang==='en'?'Height':'高差'}"></td>
    <td><input class="table-input" type="number" value="${d.angle !== undefined ? d.angle : 0}" step="0.01"></td>
    <td><input class="table-input" type="number" value="${d.crossDist !== undefined ? d.crossDist : ''}" placeholder="${currentLang==='en'?'None':'无'}"></td>
    <td><input class="table-input" type="number" value="${d.crossHeight !== undefined ? d.crossHeight : ''}" placeholder="${currentLang==='en'?'None':'无'}"></td>
    <td class="row-action">
      <button class="add-row" onclick="insertTower(${idx})">${currentLang==='en'?'Insert':'插入'}</button>
      <button class="del-row" onclick="deleteTower(${idx})">${currentLang==='en'?'Del':'删除'}</button>
    </td>`;
  tbody.appendChild(row);
  towers.push({});
  reindexTowers();
}

function insertTower(afterIdx) {
  const tbody = document.getElementById('towerBody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>--</td>
    <td><input class="table-input" placeholder="${currentLang==='en'?'Tower':'杆塔号'}"></td>
    <td><input class="table-input" type="number" placeholder="${currentLang==='en'?'Span':'档距'}"></td>
    <td><input class="table-input" type="number" placeholder="${currentLang==='en'?'Height':'高差'}"></td>
    <td><input class="table-input" type="number" value="0" step="0.01"></td>
    <td><input class="table-input" type="number" placeholder="${currentLang==='en'?'None':'无'}"></td>
    <td><input class="table-input" type="number" placeholder="${currentLang==='en'?'None':'无'}"></td>
    <td class="row-action">
      <button class="add-row" onclick="insertTowerByElement(this)">${currentLang==='en'?'Insert':'插入'}</button>
      <button class="del-row" onclick="deleteRow(this)">${currentLang==='en'?'Del':'删除'}</button>
    </td>`;
  const refRow = tbody.children[afterIdx];
  if (refRow && refRow.nextSibling) tbody.insertBefore(newRow, refRow.nextSibling);
  else tbody.appendChild(newRow);
  reindexTowers();
}

function insertTowerByElement(btn) {
  const row = btn.closest('tr');
  const tbody = document.getElementById('towerBody');
  const allRows = Array.from(tbody.children);
  const idx = allRows.indexOf(row);
  insertTower(idx);
}

function deleteTower(idx) {
  const tbody = document.getElementById('towerBody');
  if (tbody.children.length <= 1) { alert(t('msg_keepOne')); return; }
  tbody.removeChild(tbody.children[idx]);
  reindexTowers();
}

function deleteRow(btn) {
  const row = btn.closest('tr');
  const tbody = document.getElementById('towerBody');
  if (tbody.children.length <= 1) { alert(t('msg_keepOne')); return; }
  row.remove();
  reindexTowers();
}

function reindexTowers() {
  const tbody = document.getElementById('towerBody');
  Array.from(tbody.children).forEach((tr, i) => {
    tr.dataset.idx = i;
    tr.cells[0].textContent = i;
    const btns = tr.querySelectorAll('.row-action button');
    if (btns.length >= 2) {
      btns[0].setAttribute('onclick', `insertTower(${i})`);
      btns[1].setAttribute('onclick', `deleteTower(${i})`);
    }
  });
  towers = new Array(tbody.children.length).fill({});
  updateTowerSelect();
}

function clearTowers() {
  document.getElementById('towerBody').innerHTML = '';
  towers = [];
}

function updateTowerSelect() {
  const sel = document.getElementById('controlTowerSelect');
  if (!sel) return;
  const data = getTowerData();
  sel.innerHTML = '';
  for (let i = 0; i < data.length - 1; i++) {
    const left = data[i].name || (currentLang==='en'?'Tower':'杆塔')+i;
    const right = data[i+1].name || (currentLang==='en'?'Tower':'杆塔')+(i+1);
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${left} ~ ${right} (${currentLang==='en'?'Span':'第'}${i+1}${currentLang==='en'?'':'档'})`;
    sel.appendChild(opt);
  }
}

function getTowerData() {
  const tbody = document.getElementById('towerBody');
  return Array.from(tbody.children).map(tr => {
    const inputs = tr.querySelectorAll('input');
    return {
      name: inputs[0]?.value || '',
      span: parseFloat(inputs[1]?.value) || 0,
      height: parseFloat(inputs[2]?.value) || 0,
      angle: parseFloat(inputs[3]?.value) || 0,
      crossDist: parseFloat(inputs[4]?.value) || 0,
      crossHeight: parseFloat(inputs[5]?.value) || 0
    };
  });
}

function updateControlUI() {
  const mode = document.getElementById('controlMode').value;
  document.getElementById('controlTowerBox').classList.toggle('hidden', mode !== 'manual');
}

function refreshCrossTable() {
  const data = getTowerData();
  const tbody = document.getElementById('crossBody');
  tbody.innerHTML = '';
  for (let i = 0; i < data.length - 1; i++) {
    const t = data[i];
    if (t.crossDist || t.crossHeight) {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      tdName.textContent = `${t.name || (currentLang==='en'?'Tower':'杆塔')+i} ~ ${data[i+1].name || (currentLang==='en'?'Tower':'杆塔')+(i+1)}`;
      tr.appendChild(tdName);

      const tdObj = document.createElement('td');
      const objInput = document.createElement('input');
      objInput.className = 'table-input';
      objInput.value = currentLang==='en'?'Power line/road':'电力线/道路等';
      objInput.style.width = '120px';
      tdObj.appendChild(objInput);
      tr.appendChild(tdObj);

      const tdDist = document.createElement('td');
      tdDist.textContent = t.crossDist || '--';
      tr.appendChild(tdDist);

      const tdHeight = document.createElement('td');
      const heightInput = document.createElement('input');
      heightInput.className = 'table-input';
      heightInput.type = 'number';
      heightInput.value = t.crossHeight || '';
      heightInput.style.width = '80px';
      heightInput.onchange = function() {
        const towerRows = document.querySelectorAll('#towerBody tr');
        if (towerRows[i]) {
          const inputs = towerRows[i].querySelectorAll('input');
          if (inputs[5]) inputs[5].value = this.value;
        }
      };
      tdHeight.appendChild(heightInput);
      tr.appendChild(tdHeight);

      const tdSafe = document.createElement('td');
      const safeInput = document.createElement('input');
      safeInput.className = 'table-input';
      safeInput.type = 'number';
      safeInput.value = document.getElementById('safeDistance').value || '8';
      safeInput.style.width = '80px';
      safeInput.onchange = function() {
        document.getElementById('safeDistance').value = this.value;
      };
      tdSafe.appendChild(safeInput);
      tr.appendChild(tdSafe);

      tbody.appendChild(tr);
    }
  }
  if (tbody.children.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">${t('cross_none')}</td></tr>`;
  }
}


function loadDemoData(id) {
  clearTowers();
  if (id === 1) {
    const data = [
      {name:'牵引机', span:115, height:6.27, angle:0, crossDist:0, crossHeight:0},
      {name:'N1', span:569, height:17, angle:66.57, crossDist:215, crossHeight:45},
      {name:'N2', span:365, height:14, angle:0, crossDist:0, crossHeight:0},
      {name:'N3', span:321, height:7.76, angle:0, crossDist:0, crossHeight:0},
      {name:'N4', span:525, height:54.36, angle:0, crossDist:0, crossHeight:0},
      {name:'N5', span:738, height:-31.89, angle:0, crossDist:0, crossHeight:0},
      {name:'N6', span:176, height:2.75, angle:0, crossDist:0, crossHeight:0},
      {name:'N7', span:479, height:-37.47, angle:0, crossDist:0, crossHeight:0},
      {name:'N8', span:481, height:0.67, angle:0, crossDist:0, crossHeight:0},
      {name:'N9', span:452, height:111.1, angle:9.2, crossDist:0, crossHeight:0},
      {name:'N10', span:304, height:-30.1, angle:0, crossDist:0, crossHeight:0},
      {name:'N11', span:622, height:-89.96, angle:0, crossDist:0, crossHeight:0},
      {name:'N12', span:172, height:-54.82, angle:0, crossDist:0, crossHeight:0},
      {name:'N13', span:821, height:-71.19, angle:9.48, crossDist:0, crossHeight:0},
      {name:'张力机', span:0, height:0, angle:0, crossDist:0, crossHeight:0}
    ];
    data.forEach(t => addTower(t));
    document.getElementById('projName').value = currentLang==='en'?'Laos 500kV Transmission Line':'老挝500kV送出线路';
    document.getElementById('sectionName').value = 'N1~N14';
    document.getElementById('voltageLevel').value = '500';
    document.getElementById('bundleCount').value = '4';
    document.getElementById('conductorModel').value = 'JL/G1A-400/35';
    document.getElementById('wCond').value = '13.475';
    document.getElementById('TpCond').value = '123400';
    document.getElementById('ropeModel').value = 'phi24';
    document.getElementById('wRope').value = '22.5';
    document.getElementById('frictionCond').value = '1.017';
    document.getElementById('frictionRope').value = '1.015';
    document.getElementById('calcMode').value = 'manual';
    document.getElementById('manualTension').value = '15000';
    toggleCalcMode();
  } else {
    const data = [
      {name:'张力机', span:285, height:-9, angle:0, crossDist:0, crossHeight:0},
      {name:'SP29-3', span:434, height:-61.9, angle:0, crossDist:0, crossHeight:0},
      {name:'SP29-2', span:253, height:-28.3, angle:0, crossDist:0, crossHeight:0},
      {name:'SP29-1', span:344, height:-65.5, angle:10.36, crossDist:120, crossHeight:37},
      {name:'AP29', span:294, height:-89, angle:0, crossDist:0, crossHeight:0},
      {name:'SP28-1', span:379, height:-99.3, angle:24.18, crossDist:35, crossHeight:12},
      {name:'SP27-1', span:168, height:-29.7, angle:0, crossDist:0, crossHeight:0},
      {name:'AP27', span:313, height:-71.2, angle:13.02, crossDist:90, crossHeight:40},
      {name:'SP26-1', span:166, height:-27.6, angle:0, crossDist:0, crossHeight:0},
      {name:'AP26', span:399, height:-152.7, angle:9.15, crossDist:0, crossHeight:0},
      {name:'AP25', span:82, height:-8.7, angle:0, crossDist:0, crossHeight:0},
      {name:'SP24-5', span:149, height:-74.9, angle:0, crossDist:0, crossHeight:0},
      {name:'SP24-4', span:245, height:-127.2, angle:0, crossDist:0, crossHeight:0},
      {name:'SP24-3', span:397, height:-152.7, angle:0, crossDist:0, crossHeight:0},
      {name:'SP24-2', span:304, height:-42.5, angle:0, crossDist:0, crossHeight:0},
      {name:'牵引机', span:0, height:0, angle:0, crossDist:0, crossHeight:0}
    ];
    data.forEach(t => addTower(t));
    document.getElementById('projName').value = currentLang==='en'?'Nepal Upper Marsyangdi Transmission':'尼泊尔上垂树里输变电项目';
    document.getElementById('sectionName').value = 'SP24-1~AP30';
    document.getElementById('voltageLevel').value = '220';
    document.getElementById('bundleCount').value = '2';
    document.getElementById('conductorModel').value = 'LGJ-400/50';
    document.getElementById('wCond').value = '14.8078';
    document.getElementById('TpCond').value = '123400';
    document.getElementById('ropeModel').value = 'phi24';
    document.getElementById('wRope').value = '22.5';
    document.getElementById('frictionCond').value = '1.015';
    document.getElementById('frictionRope').value = '1.015';
    document.getElementById('calcMode').value = 'manual';
    document.getElementById('manualTension').value = '18003.6';
    toggleCalcMode();
  }
}

// ==================== Core Calculation Engine ====================
function calculateAll() {
  
  try {
    const towerData = getTowerData();
    if (towerData.length < 2) { alert(t('msg_minTowers')); return; }

    const params = {
      wCond: parseFloat(document.getElementById('wCond').value) || 14.8,
      wRope: parseFloat(document.getElementById('wRope').value) || 22.5,
      frictionCond: parseFloat(document.getElementById('frictionCond').value) || 1.015,
      frictionRope: parseFloat(document.getElementById('frictionRope').value) || 1.015,
      bundle: parseInt(document.getElementById('bundleCount').value) || 2,
      Tp: parseFloat(document.getElementById('TpCond').value) || 123400,
      safeDist: parseFloat(document.getElementById('safeDistance').value) || 8,
      margin: parseFloat(document.getElementById('margin').value) || 0.5,
      calcMode: document.getElementById('calcMode').value,
      manualTension: parseFloat(document.getElementById('manualTension').value) || 15000,
      kpPull: parseFloat(document.getElementById('kpPull').value) || 0.33,
      kpTension: parseFloat(document.getElementById('kpTension').value) || 0.2
    };

    const spans = [];
    for (let i = 0; i < towerData.length - 1; i++) {
      const L = towerData[i].span || 0;
      const h = towerData[i].height || 0;
      const phi = L > 0 ? Math.atan(h / L) : 0;
      spans.push({
        idx: i,
        leftTower: towerData[i].name,
        rightTower: towerData[i+1].name,
        L: L,
        h: h,
        phi: phi,
        cosPhi: Math.cos(phi),
        sinPhi: Math.sin(phi),
        angle: towerData[i+1].angle || 0,
        crossDist: towerData[i].crossDist || 0,
        crossHeight: towerData[i].crossHeight || 0
      });
    }

    const controlMode = document.getElementById('controlMode').value;
    let controlIdx;
    if (controlMode === 'manual') {
      controlIdx = parseInt(document.getElementById('controlTowerSelect').value) || 0;
    } else {
      let crossSpans = [];
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].crossDist > 0 && spans[i].crossHeight > 0) crossSpans.push({ idx: i, L: spans[i].L });
      }
      if (crossSpans.length > 0) {
        crossSpans.sort((a, b) => b.L - a.L);
        controlIdx = crossSpans[0].idx;
      } else {
        controlIdx = 0;
        let maxSpan = 0;
        for (let i = 0; i < spans.length; i++) {
          if (spans[i].L > maxSpan) { maxSpan = spans[i].L; controlIdx = i; }
        }
      }
    }

    const controlSpan = spans[controlIdx];
    let f_max, H_control;
    if (controlSpan.crossHeight > 0 && controlSpan.crossDist > 0 && controlSpan.crossDist < controlSpan.L) {
      const x = controlSpan.crossDist;
      const L = controlSpan.L;
      const fx_allowed = controlSpan.crossHeight - params.safeDist;
      if (fx_allowed > 0) {
        f_max = fx_allowed * L * L / (4 * x * (L - x));
      } else {
        f_max = params.safeDist + params.margin;
        alert(t('msg_warnCross'));
      }
    } else {
      f_max = null;
      H_control = null;
    }

    if (f_max !== null && f_max > controlSpan.L / 2) {
      alert(t('msg_warnSag').replace('{fmax}', f_max.toFixed(2)).replace('{half}', (controlSpan.L/2).toFixed(1)));
    }

    H_control = f_max !== null ? params.wCond * controlSpan.L * controlSpan.L / (8 * f_max * controlSpan.cosPhi) : null;

    let epsProd = 1.0, cosProd = 1.0;
    for (let i = 0; i < controlIdx; i++) {
      epsProd *= params.frictionCond;
      cosProd *= spans[i].cosPhi;
    }
    cosProd *= controlSpan.cosPhi;
    let T0_calc = H_control !== null ? H_control * cosProd / epsProd : null;

    let T0 = T0_calc;
    if (params.calcMode === 'manual' || f_max === null) {
      T0 = params.manualTension;
      if (f_max === null && params.calcMode !== 'manual') {
        const spanName = controlSpan.leftTower + '~' + controlSpan.rightTower;
        alert(t('msg_manualMode').replace('{span}', spanName).replace('{t0}', T0.toFixed(0)));
      }
    }

    let H_control_display = H_control;
    if (H_control_display === null) {
      let currentH = T0;
      for (let i = 0; i <= controlIdx; i++) {
        currentH = currentH * params.frictionCond / spans[i].cosPhi;
      }
      H_control_display = currentH / params.frictionCond;
    }

    let currentT = T0;
    const condResults = [];
    for (let i = 0; i < spans.length; i++) {
      const sp = spans[i];
      const epsilon = params.frictionCond;
      const T_in = currentT;
      const T_out = T_in * epsilon;
      const T_axial = T_out / sp.cosPhi;

      const H_i = (i === 0) ? T0 / sp.cosPhi : condResults[i-1].H * epsilon / sp.cosPhi;
      const sag = params.wCond * sp.L * sp.L / (8 * H_i * sp.cosPhi);
      const lineLength = sp.L / sp.cosPhi + (params.wCond * params.wCond * Math.pow(sp.L, 3)) / (24 * H_i * H_i);
      const thetaA = Math.atan((params.wCond * sp.L) / (2 * H_i) - sp.h / sp.L);
      const thetaB = Math.atan((params.wCond * sp.L) / (2 * H_i) + sp.h / sp.L);
      const angleRad = sp.angle * Math.PI / 180;
      const wrapAngle = Math.abs(thetaA) + Math.abs(thetaB) + angleRad;

      let safeDistCalc = null;
      let safeCheck = 'N/A';
      if (sp.crossDist > 0 && sp.crossHeight > 0) {
        const x = sp.crossDist;
        const fx = 4 * sag * x * (sp.L - x) / (sp.L * sp.L);
        safeDistCalc = sp.crossHeight - fx;
        safeCheck = safeDistCalc >= params.safeDist ? 'OK' : 'FAIL';
      }

      condResults.push({
        ...sp,
        T_in: T_in,
        T_out: T_out,
        T_axial: T_axial,
        H: H_i,
        sag: sag,
        lineLength: lineLength,
        thetaA: thetaA * 180 / Math.PI,
        thetaB: thetaB * 180 / Math.PI,
        wrapAngle: wrapAngle * 180 / Math.PI,
        doubleSheave: wrapAngle * 180 / Math.PI > 60 ? 'Y' : 'N',
        safeDistCalc: safeDistCalc,
        safeCheck: safeCheck
      });

      currentT = T_out;
    }

    const pullerTension = condResults[condResults.length - 1].T_axial;
    const pullerMax = pullerTension * params.bundle;

    const ropePullerTension = pullerMax / params.bundle;
    const ropeResults = [];
    let ropeT = ropePullerTension;
    for (let i = spans.length - 1; i >= 0; i--) {
      const sp = spans[i];
      const ropeT_in = ropeT;
      const ropeT_out = ropeT_in / params.frictionRope;
      const ropeH = ropeT_out / sp.cosPhi;
      const ropeVerticalSpan = sp.L + (2 * ropeH / params.wRope) * (sp.h / sp.L);
      const ropeUp = ropeVerticalSpan < 0 ? 'Y' : 'N';

      ropeResults.unshift({
        idx: i,
        leftTower: sp.leftTower,
        rightTower: sp.rightTower,
        L: sp.L,
        h: sp.h,
        cosPhi: sp.cosPhi,
        T_in: ropeT_in,
        T_out: ropeT_out,
        H: ropeH,
        verticalSpan: ropeVerticalSpan,
        ropeUp: ropeUp
      });

      ropeT = ropeT_out;
    }

    calcResults = {
      params: params,
      towers: towerData,
      spans: spans,
      condResults: condResults,
      ropeResults: ropeResults,
      controlIdx: controlIdx,
      T0: T0,
      T0_calc: T0_calc,
      H_control: H_control_display,
      f_max: f_max,
      pullerTension: pullerTension,
      pullerMax: pullerMax,
      totalLineLength: condResults.reduce((s, r) => s + r.lineLength, 0)
    };

    renderResults();
    showStep(4);
  } catch (err) {
    alert(t('msg_calcError') + ': ' + err.message);
    console.error(err);
  }
}

function renderResults() {
  if (!calcResults) return;
  const { condResults, ropeResults, spans, T0, T0_calc, H_control, f_max, pullerMax, totalLineLength, controlIdx, params } = calcResults;

  const summary = document.getElementById('resultSummary');
  const hasCrossing = condResults[controlIdx]?.crossHeight > 0 && condResults[controlIdx]?.crossDist > 0;
  const calcModeDesc = hasCrossing && params.calcMode !== 'manual'
    ? `${t('mode_auto')}: ${t('badge_control')} ${condResults[controlIdx]?.leftTower}~${condResults[controlIdx]?.rightTower} ${currentLang==='en'?'has crossing, reverse-calculated tensioner outlet tension':'有跨越物，由跨越参数反算出张力机出口张力'} ${T0.toFixed(0)} N`
    : `${t('mode_manual')}: ${currentLang==='en'?'Using manual tensioner outlet tension':'使用设定的张力机出口张力'} ${T0.toFixed(0)} N (${currentLang==='en'?'Control span has no crossing data':'控制档无跨越物，无法由安全距离反算'})`;

  summary.innerHTML = `
    <div style="grid-column:1/-1; margin-bottom:12px; padding:12px 16px; border-radius:8px; background:#e3f2fd; border-left:4px solid #1976d2; font-size:0.9rem;">
      <strong>${currentLang==='en'?'Calc Mode':'计算模式说明'}：</strong>${calcModeDesc}
    </div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Tensioner Outlet Tension':'张力机出口张力'}</div><div class="value">${T0.toFixed(0)}</div><div class="unit">N</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Control Span Horiz. Tension':'控制档水平张力'}</div><div class="value">${H_control !== null ? H_control.toFixed(0) : 'N/A'}</div><div class="unit">N</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Control Span Sag Limit':'控制档弧垂限值'}</div><div class="value">${f_max !== null ? f_max.toFixed(2) : (currentLang==='en'?'Manual':'手动设定')}</div><div class="unit">m</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Puller Max Tension':'牵引机最大牵引力'}</div><div class="value">${(pullerMax/1000).toFixed(2)}</div><div class="unit">kN</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Control Span':'控制档'}</div><div class="value">${condResults[controlIdx]?.leftTower||''}~${condResults[controlIdx]?.rightTower||''}</div><div class="unit">${currentLang==='en'?'Span':'第'}${controlIdx+1}${currentLang==='en'?'':'档'}</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Total Line Length':'放线总线长'}</div><div class="value">${totalLineLength.toFixed(1)}</div><div class="unit">m</div></div>
    <div class="result-card"><div class="label">${currentLang==='en'?'Span Count':'档数'}</div><div class="value">${spans.length}</div><div class="unit">${currentLang==='en'?'spans':'档'}</div></div>`;

  const cBody = document.querySelector('#condTable tbody');
  cBody.innerHTML = condResults.map((s, i) => {
    const epsAcc = Math.pow(params.frictionCond, i);
    const isControl = i === controlIdx ? `<span class="badge badge-yellow">${t('badge_control')}</span>` : '';
    return `
    <tr class="${i===controlIdx?'control-row':''}">
      <td>${i+1}</td>
      <td>${s.leftTower}~${s.rightTower} ${isControl}</td>
      <td>${s.L.toFixed(1)}</td>
      <td>${s.h.toFixed(2)}</td>
      <td>${s.cosPhi.toFixed(4)}</td>
      <td>${epsAcc.toFixed(4)}</td>
      <td>${s.T_in.toFixed(1)}</td>
      <td>${s.T_out.toFixed(1)}</td>
      <td>${s.T_axial.toFixed(1)}</td>
    </tr>`;
  }).join('');

  const rBody = document.querySelector('#ropeTable tbody');
  rBody.innerHTML = ropeResults.map((s, i) => {
    const epsAcc = Math.pow(params.frictionRope, spans.length - i);
    const isControl = i === controlIdx ? `<span class="badge badge-yellow">${t('badge_control')}</span>` : '';
    return `
    <tr class="${i===controlIdx?'control-row':''}">
      <td>${i+1}</td>
      <td>${s.rightTower}</td>
      <td>${spans.length - i}</td>
      <td>${epsAcc.toFixed(4)}</td>
      <td>${s.T_out.toFixed(1)}</td>
      <td>${s.verticalSpan.toFixed(1)}</td>
      <td><span class="badge ${s.ropeUp==='Y'?'badge-red':'badge-green'}">${s.ropeUp==='Y'?t('badge_up'):t('badge_normal')}</span></td>
    </tr>`;
  }).join('');

  const sBody = document.querySelector('#sagTable tbody');
  sBody.innerHTML = condResults.map((s, i) => {
    const isControl = i === controlIdx ? `<span class="badge badge-yellow">${t('badge_control')}</span>` : '';
    return `
    <tr class="${i===controlIdx?'control-row':''}">
      <td>${i+1}</td>
      <td>${s.leftTower}~${s.rightTower} ${isControl}</td>
      <td>${s.H.toFixed(1)}</td>
      <td>${s.sag.toFixed(3)}</td>
      <td>${s.lineLength.toFixed(2)}</td>
      <td>${s.safeDistCalc !== null ? s.safeDistCalc.toFixed(2) : 'N/A'}</td>
      <td>${s.crossHeight > 0 ? params.safeDist.toFixed(1) : 'N/A'}</td>
    </tr>`;
  }).join('');

  const aBody = document.querySelector('#angleTable tbody');
  aBody.innerHTML = condResults.map((s, i) => `
    <tr class="${i===controlIdx?'control-row':''}">
      <td>${i+1}</td>
      <td>${s.rightTower}</td>
      <td>${s.thetaA.toFixed(2)}</td>
      <td>${s.thetaB.toFixed(2)}</td>
      <td>${s.angle}</td>
      <td>${s.wrapAngle.toFixed(2)}</td>
      <td><span class="badge ${s.doubleSheave==='Y'?'badge-red':'badge-green'}">${s.doubleSheave==='Y'?t('badge_double'):t('badge_single')}</span></td>
    </tr>`).join('');

  renderCheckReport();
  renderEquipment();
  renderCharts();
}

function renderCheckReport() {
  const { condResults, ropeResults, controlIdx, params, spans, f_max } = calcResults;
  const checks = [];

  const tensionerRated = params.Tp * params.kpTension;
  checks.push({
    name: currentLang==='en'?'Tensioner Outlet Tension':'张力机出口张力',
    pass: true,
    info: true,
    desc: `${currentLang==='en'?'Calculated outlet tension':'计算出口张力'} ${calcResults.T0.toFixed(1)} N (${currentLang==='en'?'Tensioner rated brake tension':'主张力机单根额定制动张力选型值'} ${tensionerRated.toFixed(0)} N)`
  });

  const controlSag = condResults[controlIdx]?.sag || 0;
  const controlL = condResults[controlIdx]?.L || 0;
  const sagRatio = controlL > 0 ? controlSag / controlL : 0;
  checks.push({
    name: currentLang==='en'?'Control Span Sag Rationality':'控制档弧垂合理性',
    pass: sagRatio < 0.5,
    desc: `${currentLang==='en'?'Control span sag':'控制档弧垂'} ${controlSag.toFixed(2)} m / ${currentLang==='en'?'Span':'档距'} ${controlL.toFixed(1)} m = ${(sagRatio*100).toFixed(1)}%, ${currentLang==='en'?'req < 50%':'要求 < 50%'}`
  });

  const pullerMax = calcResults.pullerMax;
  checks.push({
    name: currentLang==='en'?'Puller Tension Check':'牵引机牵引力检查',
    pass: pullerMax < 200000,
    desc: `${currentLang==='en'?'Calculated puller tension':'计算牵引力'} ${(pullerMax/1000).toFixed(2)} kN`
  });

  checks.push({
    name: currentLang==='en'?'Clearance Control Parameters':'安全距离控制参数',
    pass: true,
    info: true,
    desc: f_max !== null
      ? `${currentLang==='en'?'Control span req. clearance':'控制档要求安全距'} ${params.safeDist.toFixed(1)} m + ${currentLang==='en'?'margin':'裕度'} ${params.margin.toFixed(1)} m → ${currentLang==='en'?'Sag limit':'控制档弧垂限值'} ${f_max.toFixed(2)} m → ${currentLang==='en'?'Tensioner outlet':'张力机出口张力'} ${calcResults.T0.toFixed(0)} N → ${currentLang==='en'?'Puller max':'牵引机最大牵引力'} ${(calcResults.pullerMax/1000).toFixed(2)} kN`
      : `${currentLang==='en'?'Manual tensioner outlet':'手动设定张力机出口张力'} ${calcResults.T0.toFixed(0)} N → ${currentLang==='en'?'Puller max':'牵引机最大牵引力'} ${(calcResults.pullerMax/1000).toFixed(2)} kN (${currentLang==='en'?'No crossing data, not reverse-calculated':'控制档无跨越物，未由安全距离反算'})`
  });

  const ropeUpY = ropeResults.filter(s => s.ropeUp === 'Y');
  checks.push({
    name: currentLang==='en'?'Rope Uplift Check':'牵引绳上扬检查',
    pass: ropeUpY.length === 0,
    desc: ropeUpY.length > 0 ? `${ropeUpY.length} ${currentLang==='en'?'rope uplift(s) need handling':'处牵引绳上扬需处理'}` : `${currentLang==='en'?'No rope uplift':'无牵引绳上扬'}`
  });

  const dsY = condResults.filter(s => s.doubleSheave === 'Y');
  checks.push({
    name: currentLang==='en'?'Double Sheave Check':'双滑车检查',
    pass: true,
    info: true,
    desc: dsY.length > 0 ? `${dsY.length} ${currentLang==='en'?'locations need double sheave':'处需增设双滑车'}` : `${currentLang==='en'?'None needed':'无需要'}`
  });

  const container = document.getElementById('checkReport');
  container.innerHTML = `
    <div style="margin-bottom:20px"><strong>${currentLang==='en'?'I. Overall Check Conclusion':'一、总体检查结论'}</strong></div>
    ${checks.map(c => `
    <div class="check-item ${c.info ? '' : (c.pass ? 'pass' : 'fail')}">
      <span class="check-icon">${c.info ? t('check_info') : (c.pass ? t('check_pass') : t('check_fail'))}</span>
      <span class="check-text"><strong>${c.name}</strong> - ${c.desc}</span>
    </div>`).join('')}

    <div class="section-divider"></div>
    <div style="margin-bottom:12px"><strong>${currentLang==='en'?'II. Span-by-Span Check Detail':'二、逐档校验明细表'}</strong></div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${t('th_no')}</th><th>${t('th_spanName')}</th><th>${currentLang==='en'?'Cond. Tension(N)':'导线张力(N)'}</th><th>${t('th_sag')}</th><th>${currentLang==='en'?'Crossing Sag(m)':'跨越悬垂距(m)'}</th><th>${t('th_actualSafe')}</th><th>${t('th_reqSafe2')}</th>
            <th>${t('th_doubleSheave')}</th><th>${t('th_ropeUp')}</th><th>${currentLang==='en'?'Conclusion':'结论'}</th>
          </tr>
        </thead>
        <tbody>
          ${condResults.map((s, i) => {
            const ropeUp = ropeResults[i]?.ropeUp || 'N';
            const issues = [];
            if (s.doubleSheave === 'Y') issues.push(currentLang==='en'?'Double Sheave':'需双滑车');
            if (ropeUp === 'Y') issues.push(currentLang==='en'?'Rope Uplift':'牵引绳上扬');
            const conclusion = issues.length === 0 ? t('conclusion_normal') : issues.join('、');
            const actualSafe = s.safeDistCalc !== null ? s.safeDistCalc.toFixed(2) : 'N/A';
            const crossH = s.crossHeight > 0 ? s.crossHeight.toFixed(1) : 'N/A';
            return `<tr class="${i===controlIdx?'control-row':''}">
              <td>${i+1}</td>
              <td>${s.leftTower}~${s.rightTower}${i===controlIdx?` <span class="badge badge-yellow">${t('badge_control')}</span>`:''}</td>
              <td>${s.T_axial.toFixed(0)}</td>
              <td>${s.sag.toFixed(2)}</td>
              <td>${crossH}</td>
              <td>${actualSafe}</td>
              <td>${s.safeCheck !== 'N/A' ? params.safeDist.toFixed(1) : 'N/A'}</td>
              <td><span class="badge ${s.doubleSheave==='Y'?'badge-red':'badge-green'}">${s.doubleSheave==='Y'?t('badge_double'):t('badge_single')}</span></td>
              <td><span class="badge ${ropeUp==='Y'?'badge-red':'badge-green'}">${ropeUp==='Y'?t('badge_up'):t('badge_normal')}</span></td>
              <td><strong>${conclusion}</strong></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderEquipment() {
  const { params } = calcResults;
  const Tp = params.Tp;
  const bundle = params.bundle;
  const kpPull = params.kpPull;
  const kpTension = params.kpTension;

  const items = [
    { name: currentLang==='en'?'Main Puller Rated Tension':'主牵引机额定牵引力', formula: 'P >= m*Kp*Tp', req: bundle * kpPull * Tp, unit: 'N', rec: `>= ${(bundle * kpPull * Tp / 1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Puller Overload Safety':'牵引机过载保安值', formula: 'Pg = P + 1000', req: bundle * kpPull * Tp + 1000, unit: 'N', rec: `>= ${((bundle * kpPull * Tp + 1000)/1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Main Tensioner Brake Tension':'主张力机单根额定制动张力', formula: 'T = Kp*Tp', req: kpTension * Tp, unit: 'N', rec: `>= ${(kpTension * Tp / 1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Rope Breaking Load':'牵引绳综合破断力', formula: 'Qp >= 3n*Tp/5', req: 3 * bundle * Tp / 5, unit: 'N', rec: `>= ${(3 * bundle * Tp / 5 / 1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Pilot Rope Breaking Load':'导引绳综合破断力', formula: 'Pp >= Qp/4', req: 3 * bundle * Tp / 20, unit: 'N', rec: `>= ${(3 * bundle * Tp / 20 / 1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Small Puller Rated Tension':'小牵引机额定牵引力', formula: 'P >= Qp/10', req: 3 * bundle * Tp / 50, unit: 'N', rec: `>= ${(3 * bundle * Tp / 50 / 1000).toFixed(1)} kN` },
    { name: currentLang==='en'?'Small Tensioner Brake Tension':'小张力机额定制动张力', formula: 't >= Qp/15', req: 3 * bundle * Tp / 75, unit: 'N', rec: `>= ${(3 * bundle * Tp / 75 / 1000).toFixed(1)} kN` }
  ];

  const tbody = document.querySelector('#equipTable tbody');
  tbody.innerHTML = items.map((it, i) => `
    <tr><td>${i+1}</td><td>${it.name}</td><td style="font-family:monospace">${it.formula}</td>
    <td>${it.req.toFixed(0)} ${it.unit}</td><td>${it.rec}</td></tr>`).join('');
}

function renderCharts() {
  const { condResults, ropeResults } = calcResults;
  const labels = condResults.map((s, i) => `${s.leftTower}~${s.rightTower}`);
  const condData = condResults.map(s => s.T_axial);
  const ropeData = ropeResults.map(s => s.T_out);
  const sagData = condResults.map(s => s.sag);

  if (condChart) condChart.destroy();
  if (ropeChart) ropeChart.destroy();
  if (sagChart) sagChart.destroy();

  const ctx1 = document.getElementById('condChart').getContext('2d');
  condChart = new Chart(ctx1, {
    type: 'line',
    data: { labels: labels, datasets: [{ label: currentLang==='en'?'Conductor Axial Tension (N)':'导线轴向张力 (N)', data: condData, borderColor: '#1976d2', backgroundColor: 'rgba(25,118,210,0.1)', fill: true, tension: 0.3 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: currentLang==='en'?'Conductor Tension Curve (Tensioner → Puller)':'导线张力递推曲线（张力机→牵引机）' } }, scales: { y: { beginAtZero: false } } }
  });

  const ctx2 = document.getElementById('ropeChart').getContext('2d');
  ropeChart = new Chart(ctx2, {
    type: 'line',
    data: { labels: labels, datasets: [{ label: currentLang==='en'?'Rope Tension (N)':'牵引绳张力 (N)', data: ropeData, borderColor: '#ed6c02', backgroundColor: 'rgba(237,108,2,0.1)', fill: true, tension: 0.3 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: currentLang==='en'?'Rope Tension Curve (Puller → Tensioner)':'牵引绳张力递推曲线（牵引机→张力机）' } }, scales: { y: { beginAtZero: false } } }
  });

  const ctx3 = document.getElementById('sagChart').getContext('2d');
  sagChart = new Chart(ctx3, {
    type: 'bar',
    data: { labels: labels, datasets: [{ label: currentLang==='en'?'Sag (m)':'弧垂 (m)', data: sagData, backgroundColor: 'rgba(46,125,50,0.7)' }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: currentLang==='en'?'Sag Comparison by Span':'各档弧垂对比' } } }
  });
}

function exportPNG() {
  if (!calcResults) { alert(t('msg_needCalc')); return; }
  alert(t('msg_exporting'));
  const main = document.querySelector('.main');
  html2canvas(main, { scale: 2, useCORS: true, allowTaint: true }).then(canvas => {
    const link = document.createElement('a');
    link.download = `TL_Tension_${document.getElementById('sectionName').value||'data'}_${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => { alert(t('msg_exportFail') + ': ' + err.message); });
}

function exportJSON() {
  const data = {
    project: {
      name: document.getElementById('projName').value,
      section: document.getElementById('sectionName').value,
      voltage: document.getElementById('voltageLevel').value,
      bundle: document.getElementById('bundleCount').value
    },
    towers: getTowerData(),
    params: {
      wCond: document.getElementById('wCond').value,
      Tp: document.getElementById('TpCond').value,
      friction: document.getElementById('frictionCond').value,
      safeDistance: document.getElementById('safeDistance').value
    },
    results: calcResults
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TL_Tension_${document.getElementById('sectionName').value || 'data'}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importJSON() {
  document.getElementById('importFile').click();
}

function handleImport(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.project) {
        document.getElementById('projName').value = data.project.name || '';
        document.getElementById('sectionName').value = data.project.section || '';
        document.getElementById('voltageLevel').value = data.project.voltage || '500';
        document.getElementById('bundleCount').value = data.project.bundle || '2';
      }
      if (data.towers) {
        clearTowers();
        data.towers.forEach(t => addTower(t));
      }
      if (data.params) {
        document.getElementById('wCond').value = data.params.wCond || '14.8';
        document.getElementById('TpCond').value = data.params.Tp || '123400';
        document.getElementById('frictionCond').value = data.params.friction || '1.015';
        document.getElementById('safeDistance').value = data.params.safeDistance || '8';
      }
      if (data.results) {
        calcResults = data.results;
        renderResults();
      }
      alert(t('msg_importOK'));
    } catch (err) { alert(t('msg_importFail') + ': ' + err.message); }
  };
  reader.readAsText(file);
  input.value = '';
}

const CONDUCTOR_DATA = {
  'LGJ-400/50':   { w: 14.8078, Tp: 123400 },
  'JL/G1A-400/35':{ w: 13.2126, Tp: 100440 },
  'LGJ-500/45':   { w: 16.8000, Tp: 155000 },
  'LGJ-300/40':   { w: 11.3000, Tp: 90000  }
};
const ROPE_DATA = {
  'phi24': { w: 22.5, break: 350000 },
  'phi18': { w: 11.8, break: 190000 },
  'phi15': { w: 8.2,  break: 140000 },
  'phi13': { w: 6.5,  break: 100000 }
};
function fillConductorParams() {
  const model = document.getElementById('conductorModel').value;
  if (model === 'custom') return;
  const d = CONDUCTOR_DATA[model];
  if (!d) return;
  document.getElementById('wCond').value = d.w.toFixed(4);
  document.getElementById('TpCond').value = d.Tp;
}
function fillRopeParams() {
  const model = document.getElementById('ropeModel').value;
  if (model === 'custom') return;
  const d = ROPE_DATA[model];
  if (!d) return;
  document.getElementById('wRope').value = d.w;
  document.getElementById('breakRope').value = d.break;
}

// Close modal on overlay click

// Init
const savedLang = localStorage.getItem('tl_lang');
if (savedLang === 'en' || savedLang === 'zh') {
  currentLang = savedLang;
} else {
  currentLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
}
addTower();
addTower();
