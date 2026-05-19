/****************************************************
 * CONFIG.GS
 * Constantes centrais do projeto
 ****************************************************/

const APP = Object.freeze({
  SHEETS: Object.freeze({
    LEGEND: 'LEGENDA DE TAGS',
    CRM: 'CRM',
    CAPTACAO: 'Captação',
    DATABASE: 'Banco De Dados',
    SYNC_BUFFER: '__SYNC_BUFFER__',
    LOG: 'Log',
    ACTIVE_INFLUENCERS: 'Influencers Ativos',
    IMPORTANT_LINKS: 'Links Importantes',
    RELATIONSHIP_PENDING: 'Pendências e Relacionamento'
  }),

  LEGEND_CELLS: Object.freeze({
    ATTENDANT_NAME: 'A1',
    MODE: 'C1',
    RECRUITER_NAME: 'D1',
    ATTENDANT_PHONE: 'E1',
    NOTICE_LEFT: 'B16',
    NOTICE_RIGHT: 'K16',

    FORM_NAME: 'B3',
    FORM_PHONE: 'B4',
    FORM_LANGUAGE: 'B5'
  }),

  CRM_LAYOUT: Object.freeze({
    HEADER_ROW: 1,
    DATA_START_ROW: 2
  }),

  CAPTACAO_LAYOUT: Object.freeze({
    SUMMARY_HEADER_ROW: 1,
    SUMMARY_VALUE_ROW: 2,
    SECTION_TITLE_ROW: 3,
    INPUT_HEADER_ROW: 4,
    INPUT_START_ROW: 5,
    TABLE_HEADER_ROW: 3,
    TABLE_DATA_START_ROW: 4,
    INPUT_HANDLE_COLUMN: 1,
    INPUT_NAME_COLUMN: 2,
    INPUT_EMAIL_COLUMN: 3,
    INPUT_APPROVAL_COLUMN: 4,
    INPUT_WIDTH: 4,
    DIVIDER_COLUMN: 5,
    TABLE_START_COLUMN: 6
  }),

  // Cabeçalhos da base local do atendente
  BASE_HEADERS: Object.freeze([
    'ID',                           // A
    'Timestamp Entrada',            // B
    'Nome',                         // C
    'Telefone',                     // D
    'Idioma',                       // E
    'Tag',                          // F
    'Etapa / Status',               // G
    'Atendente',                    // H
    'Data Última Interação',         // I
    'Data Aula Show',               // J
    'Próxima Data / Follow-up',      // K
    'Quali 1',                      // L
    'Quali 2',                      // M
    'Quali 3',                      // N
    'Quali 4',                      // O
    'Quali 5',                      // P
    'Fluxo Atual',                  // Q
    'Observações',                   // R
    'Professor',                    // S
    'Idade',                        // T
    'Outra Classificação',           // U
    '@',                            // V
    'Origem do Registro',           // W
    'Pedido de Indicação',           // X
    'Fonte Do Influencer',          // Y
    'Data Última Alteração de Etapa', // Z
    'Email',                        // AA
    'Email 01 enviado em',          // AB
    'Email 02 enviado em',          // AC
    'Email 03 enviado em'           // AD
  ]),

  // Cabeçalhos do CRM operacional
  CRM_HEADERS: Object.freeze([
    'Nome',                         // A
    '@',                            // B
    'Telefone',                     // C
    'Email',                        // D
    'Idioma',                       // E
    'Etapa / Status',               // F
    'Instruções',                   // G
    'Comentários',                  // H
    'Professor',                    // I
    'Outra Classificação',          // J
    'Data Aula Show',               // K
    'Próxima Data / Follow-up',     // L
    'ID'                            // M
  ]),

  CAPTACAO_HEADERS: Object.freeze([
    '@',                            // D
    'Nome',                         // E
    'Email',                        // F
    'Telefone',                     // G
    'Link do instagram',            // H
    'Comentários',                  // I
    'Etapa / Status',               // J
    'Fonte Do Influencer',          // K
    'Instruções',                   // L
    'ID'                            // M
  ]),

  LOG_HEADERS: Object.freeze([
    'Timestamp',
    'Ação',
    'ID',
    'Nome',
    'Campo Alterado',
    'Valor Anterior',
    'Valor Novo',
    'Atendente',
    'Origem'
  ]),

  BASE_COLS: Object.freeze({
    ID: 1,
    ENTRY_TIMESTAMP: 2,
    NAME: 3,
    PHONE: 4,
    LANGUAGE: 5,
    TAG: 6,
    STAGE: 7,
    ATTENDANT: 8,
    LAST_INTERACTION: 9,
    SHOW_DATE: 10,
    NEXT_FOLLOWUP: 11,
    QUALI_1: 12,
    QUALI_2: 13,
    QUALI_3: 14,
    QUALI_4: 15,
    QUALI_5: 16,
    CURRENT_PIPELINE: 17,
    OBS: 18,
    PROFESSOR: 19,
    AGE: 20,
    OTHER_CLASSIFICATION: 21,
    HANDLE: 22,
    RECORD_ORIGIN: 23,
    INDICATION_REQUEST: 24,
    INFLUENCER_SOURCE: 25,
    LAST_STAGE_CHANGE: 26,
    EMAIL: 27,
    EMAIL_01_SENT_AT: 28,
    EMAIL_02_SENT_AT: 29,
    EMAIL_03_SENT_AT: 30
  }),

  CRM_COLS: Object.freeze({
    NAME: 1,
    HANDLE: 2,
    PHONE: 3,
    EMAIL: 4,
    LANGUAGE: 5,
    STAGE: 6,
    MESSAGE: 7,
    COMMENTS: 8,
    PROFESSOR: 9,
    OTHER_CLASSIFICATION: 10,
    SHOW_DATE: 11,
    NEXT_FOLLOWUP: 12,
    ID: 13
  }),

  CAPTACAO_COLS: Object.freeze({
    HANDLE: 6,
    NAME: 7,
    EMAIL: 8,
    PHONE: 9,
    INSTAGRAM_LINK: 10,
    COMMENTS: 11,
    STAGE: 12,
    SOURCE: 13,
    MESSAGE: 14,
    ID: 15
  }),

  CRM_STAGES: Object.freeze([
    'Em Atendimento',
    'FUP DO DIA',
    'Fup',
    'Buscando Prof',
    'Aula Show',
    'Matrícula',
    'Fechado',
    'FUP + 03 dias',
    'FUP + 07 dias',
    'FUP + 14 dias',
    'FUP + 30 dias',
    'Fez AS/Não fechou',
    'Agendou AS/Não fez',
    'RMKT',
    'Fazer FUP',
    'Checar Matrícula',
    'Pedir indicação',
    'Onboarding',
    'Enviar email 01',
    'Enviar email 02',
    'Enviar email 03',
    'Nunca Respondeu'
  ]),

  CRM_HIDDEN_STAGES: Object.freeze([
    'Fechado',
    'Fez AS/Não fechou',
    'Agendou AS/Não fez',
    'RMKT',
    'RMKT - Influencer não tem perfil para a Idioma',
    'Nunca Respondeu'
  ]),

  CAPTACAO_STAGES: Object.freeze([
    'Entrar em contato (Msg ou Email)',
    'Primeiro contato feito por msg',
    'FUP DO DIA',
    'Fup',
    'Enviar email 01',
    'Enviar email 02',
    'Enviar email 03',
    'Enviar para CRM',
    'RMKT - Influencer não tem perfil para a Idioma',
    'Nunca Respondeu'
  ]),

  CAPTACAO_INTERNAL_STAGES: Object.freeze([
    'Email 1 respondido?',
    'Email 2 respondido?',
    'Decisão Final'
  ]),

  STAGES: Object.freeze([
    'Em Atendimento',
    'FUP DO DIA',
    'Fup',
    'Buscando Prof',
    'Aula Show',
    'Matrícula',
    'Fechado',
    'FUP + 03 dias',
    'FUP + 07 dias',
    'FUP + 14 dias',
    'FUP + 30 dias',
    'Fez AS/Não fechou',
    'Agendou AS/Não fez',
    'RMKT',
    'Fazer FUP',
    'Checar Matrícula',
    'Pedir indicação',
    'Onboarding',
    'Enviar email 01',
    'Enviar email 02',
    'Enviar email 03',
    'RMKT - Influencer não tem perfil para a Idioma',
    'Nunca Respondeu',
    'Entrar em contato (Msg ou Email)',
    'Primeiro contato feito por msg',
    'Enviar para CRM'
  ]),

  CAPTACAO_SOURCE_OPTIONS: Object.freeze([
    'Captação Própria',
    'Rodízio/Draft',
    'Indicação'
  ]),

  PIPELINES: Object.freeze({
    CRM: 'CRM',
    CAPTACAO: 'Captação'
  }),

  PLACEHOLDER_QUALIFICATIONS: Object.freeze([
    'PlaceholderQuali1',
    'PlaceholderQuali2',
    'PlaceholderQuali3',
    'PlaceholderQuali4',
    'PlaceholderQuali5'
  ]),

  PLACEHOLDER_PROFESSORS: Object.freeze([
    'PlaceholderProfessor1',
    'PlaceholderProfessor2',
    'PlaceholderProfessor3'
  ]),

  PLACEHOLDER_LANGUAGES: Object.freeze([
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão',
    'Coreano',
    'Japonês',
    'Outros'
  ]),

  PLACEHOLDER_HOLIDAYS: Object.freeze([
    '2099-01-01 // PlaceholderHoliday1',
    '2099-12-25 // PlaceholderHoliday2'
  ]),

  DEFAULT_CRM_STAGE: 'Em Atendimento',
  DEFAULT_CAPTACAO_STAGE: 'Entrar em contato (Msg ou Email)',
  DEFAULT_TAG: 'Influencer 2026',

  INTEGRATIONS: Object.freeze({
    CONTACTED_INFLUENCERS: Object.freeze({
      ENABLED: true,
      SPREADSHEET_ID: '1vKwoZ4XZIjH_Gmp1bIQdSPwnzwiClbVyJFtNTKCL1lI',
      SHEET_NAME: 'Influencers Contatados',
      ACTIVE_SHEET_NAME: 'LISTA INFLUENCERS',
      ACTIVE_HANDLE_COLUMN: 1,         // A
      CONTACT_HISTORY_COLUMN: 2,       // B
      CONTACT_NAME_COLUMN: 11,         // K
      CONTACT_EMAIL_COLUMN: 12,        // L
      OWNED_INFLUENCER_COLUMN: 16,     // P
      CONTACT_HISTORY_LOOKBACK: 3000
    }),
    PROFESSORS: Object.freeze({
      ENABLED: true,
      SPREADSHEET_ID: '1-Y2TsEPCf75WNeh6fIbNZMnpSJlil4sBwdduYTKW-oc',
      SHEET_NAME: 'DB Profs completo'
    })
  }),

  LOG_ACTIONS: Object.freeze({
    CREATE: 'CREATE',
    UPDATE_FIELD: 'UPDATE_FIELD',
    UPDATE_STAGE: 'UPDATE_STAGE',
    SEND_EMAIL: 'SEND_EMAIL'
  }),

  LOG_ORIGINS: Object.freeze({
    MANUAL_ADD: 'ADD_MANUAL',
    CAPTACAO_UPDATE: 'CAPTACAO_UPDATE',
    CRM_UPDATE: 'CRM_UPDATE',
    DATABASE_UPDATE: 'DATABASE_UPDATE',
    EMAIL: 'EMAIL',
    SYSTEM: 'SYSTEM'
  })
});

/****************************************************
 * MENU.GS
 * Menu principal e wrappers para botões
 ****************************************************/

const CLIENT_ACTION_SLOT_COUNT = 30;
const HEADER_FILL_YELLOW_LIGHT_2 = '#fff2cc';
const HEADER_FILL_MAGENTA_LIGHT_3 = '#ead1dc';
const HEADER_TEXT_DARK = '#000000';

function getClientActionRegistry_() {
  return [
    {
      slot: 'crmAcao01',
      actionName: 'configurarEstruturaInicial',
      label: 'Configurar Estrutura Inicial',
      showInMenu: true,
      menuSeparatorBefore: false,
      handler: configurarEstruturaInicial
    },
    {
      slot: 'crmAcao02',
      actionName: 'checarMandaVerCaptacao',
      label: 'Passo 1 - Checar Manda Ver',
      showInMenu: true,
      menuSeparatorBefore: true,
      handler: checarMandaVerCaptacao
    },
    {
      slot: 'crmAcao03',
      actionName: 'adicionarInflu',
      label: 'Passo 2 - Adicionar Influ(s)',
      showInMenu: true,
      menuSeparatorBefore: false,
      handler: adicionarInflu
    },
    {
      slot: 'crmAcao05',
      actionName: 'atualizarCRM',
      label: 'Atualizar CRM',
      showInMenu: true,
      menuSeparatorBefore: true,
      handler: atualizarCRM
    },
    {
      slot: 'crmAcao06',
      actionName: 'enviarEmail01Selecionados',
      label: 'Enviar Email 01 dos Selecionados',
      showInMenu: false,
      menuSeparatorBefore: true,
      handler: enviarEmail01Selecionados
    },
    {
      slot: 'crmAcao07',
      actionName: 'enviarEmail02Selecionados',
      label: 'Enviar Email 02 dos Selecionados',
      showInMenu: false,
      menuSeparatorBefore: false,
      handler: enviarEmail02Selecionados
    },
    {
      slot: 'crmAcao08',
      actionName: 'montarCaptacao',
      label: 'Montar Captação',
      showInMenu: false,
      menuSeparatorBefore: false,
      handler: montarCaptacao
    },
    {
      slot: 'crmAcao09',
      actionName: 'montarBancoDeDados',
      label: 'Montar Banco De Dados',
      showInMenu: false,
      menuSeparatorBefore: false,
      handler: montarBancoDeDados
    },
    {
      slot: 'crmAcao10',
      actionName: 'atualizarListaProfessores',
      label: 'Atualizar Lista de Professores',
      showInMenu: false,
      menuSeparatorBefore: true,
      handler: atualizarListaProfessores
    }
  ];
}

function getClientActionSlotCount_() {
  return CLIENT_ACTION_SLOT_COUNT;
}

function formatClientActionSlot_(slotIndex) {
  const normalizedIndex = Math.max(1, Math.min(getClientActionSlotCount_(), Number(slotIndex) || 0));
  return 'crmAcao' + ('0' + normalizedIndex).slice(-2);
}

function normalizeClientActionSlot_(slotName) {
  const match = /^crmAcao(\d{2})$/i.exec(String(slotName || '').trim());
  if (!match) {
    return '';
  }

  const slotIndex = Number(match[1]);
  if (slotIndex < 1 || slotIndex > getClientActionSlotCount_()) {
    return '';
  }

  return formatClientActionSlot_(slotIndex);
}

function getClientActionBySlot_(slotName) {
  const normalizedSlot = normalizeClientActionSlot_(slotName);
  if (!normalizedSlot) {
    return null;
  }

  const registry = getClientActionRegistry_();
  for (let i = 0; i < registry.length; i += 1) {
    if (registry[i].slot === normalizedSlot) {
      return registry[i];
    }
  }

  return null;
}

function getClientActionSlotCatalog_() {
  const actionsBySlot = {};
  const registry = getClientActionRegistry_();

  registry.forEach(function (action) {
    actionsBySlot[action.slot] = action;
  });

  const catalog = [];
  for (let slotIndex = 1; slotIndex <= getClientActionSlotCount_(); slotIndex += 1) {
    const slotName = formatClientActionSlot_(slotIndex);
    const action = actionsBySlot[slotName] || null;

    catalog.push({
      slot: slotName,
      assigned: Boolean(action),
      actionName: action ? action.actionName : '',
      label: action ? action.label : '',
      showInMenu: Boolean(action && action.showInMenu)
    });
  }

  return catalog;
}

function buildAutomationMenu_(options) {
  const useClientSlots = Boolean(options && options.useClientSlots);
  const ui = (options && options.ui) || SpreadsheetApp.getUi();
  const menu = ui.createMenu('Automações CRM');

  getClientActionRegistry_().forEach(function (action) {
    if (!action.showInMenu) {
      return;
    }

    if (action.menuSeparatorBefore) {
      menu.addSeparator();
    }

    menu.addItem(action.label, useClientSlots ? action.slot : action.actionName);
  });

  menu.addToUi();
}

function getCRMSyncFieldMap_() {
  return [
    { viewCol: APP.CRM_COLS.NAME, baseCol: APP.BASE_COLS.NAME, label: 'Nome', type: 'text' },
    { viewCol: APP.CRM_COLS.HANDLE, baseCol: APP.BASE_COLS.HANDLE, label: '@', type: 'handle' },
    { viewCol: APP.CRM_COLS.PHONE, baseCol: APP.BASE_COLS.PHONE, label: 'Telefone', type: 'text' },
    { viewCol: APP.CRM_COLS.EMAIL, baseCol: APP.BASE_COLS.EMAIL, label: 'Email', type: 'text' },
    { viewCol: APP.CRM_COLS.LANGUAGE, baseCol: APP.BASE_COLS.LANGUAGE, label: 'Idioma', type: 'text' },
    { viewCol: APP.CRM_COLS.STAGE, baseCol: APP.BASE_COLS.STAGE, label: 'Etapa / Status', type: 'text' },
    { viewCol: APP.CRM_COLS.COMMENTS, baseCol: APP.BASE_COLS.OBS, label: 'Observações', type: 'text' },
    { viewCol: APP.CRM_COLS.PROFESSOR, baseCol: APP.BASE_COLS.PROFESSOR, label: 'Professor', type: 'text' },
    { viewCol: APP.CRM_COLS.OTHER_CLASSIFICATION, baseCol: APP.BASE_COLS.OTHER_CLASSIFICATION, label: 'Outra Classificação', type: 'text' },
    { viewCol: APP.CRM_COLS.SHOW_DATE, baseCol: APP.BASE_COLS.SHOW_DATE, label: 'Data Aula Show', type: 'date' },
    { viewCol: APP.CRM_COLS.NEXT_FOLLOWUP, baseCol: APP.BASE_COLS.NEXT_FOLLOWUP, label: 'Próxima Data / Follow-up', type: 'date' }
  ];
}

function getCaptacaoSyncFieldMap_() {
  return [
    { viewCol: 1, baseCol: APP.BASE_COLS.HANDLE, label: '@', type: 'handle' },
    { viewCol: 2, baseCol: APP.BASE_COLS.NAME, label: 'Nome', type: 'text' },
    { viewCol: 3, baseCol: APP.BASE_COLS.EMAIL, label: 'Email', type: 'text' },
    { viewCol: 4, baseCol: APP.BASE_COLS.PHONE, label: 'Telefone', type: 'text' },
    { viewCol: 6, baseCol: APP.BASE_COLS.OBS, label: 'Comentários', type: 'text' },
    { viewCol: 7, baseCol: APP.BASE_COLS.STAGE, label: 'Etapa / Status', type: 'text' },
    { viewCol: 8, baseCol: APP.BASE_COLS.INFLUENCER_SOURCE, label: 'Fonte Do Influencer', type: 'text' }
  ];
}

function getCaptacaoSheetHeaderPosition_(headerValues, label, fallbackPosition) {
  const normalizedLabel = normalizeText_(label);
  for (let idx = 0; idx < headerValues.length; idx += 1) {
    if (normalizeText_(headerValues[idx]) === normalizedLabel) {
      return idx + 1;
    }
  }

  return fallbackPosition;
}

function getCaptacaoSheetLayoutInfo_(captacaoSheet) {
  const width = APP.CAPTACAO_HEADERS.length;
  const headerValues = captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_HEADER_ROW, APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN, 1, width)
    .getDisplayValues()[0];

  const positions = {
    handle: getCaptacaoSheetHeaderPosition_(headerValues, '@', 1),
    name: getCaptacaoSheetHeaderPosition_(headerValues, 'Nome', 2),
    email: getCaptacaoSheetHeaderPosition_(headerValues, 'Email', 3),
    phone: getCaptacaoSheetHeaderPosition_(headerValues, 'Telefone', 4),
    instagramLink: getCaptacaoSheetHeaderPosition_(headerValues, 'Link do instagram', 5),
    comments: getCaptacaoSheetHeaderPosition_(headerValues, 'Comentários', 6),
    stage: getCaptacaoSheetHeaderPosition_(headerValues, 'Etapa / Status', 7),
    source: getCaptacaoSheetHeaderPosition_(headerValues, 'Fonte Do Influencer', 8),
    message: getCaptacaoSheetHeaderPosition_(headerValues, 'Instruções', 9),
    id: getCaptacaoSheetHeaderPosition_(headerValues, 'ID', 10)
  };

  return {
    width: width,
    idCol: positions.id,
    positions: positions,
    mappings: [
      { viewCol: positions.handle, baseCol: APP.BASE_COLS.HANDLE, label: '@', type: 'handle' },
      { viewCol: positions.name, baseCol: APP.BASE_COLS.NAME, label: 'Nome', type: 'text' },
      { viewCol: positions.email, baseCol: APP.BASE_COLS.EMAIL, label: 'Email', type: 'text' },
      { viewCol: positions.phone, baseCol: APP.BASE_COLS.PHONE, label: 'Telefone', type: 'text' },
      { viewCol: positions.comments, baseCol: APP.BASE_COLS.OBS, label: 'Comentários', type: 'text' },
      { viewCol: positions.stage, baseCol: APP.BASE_COLS.STAGE, label: 'Etapa / Status', type: 'text' },
      { viewCol: positions.source, baseCol: APP.BASE_COLS.INFLUENCER_SOURCE, label: 'Fonte Do Influencer', type: 'text' }
    ]
  };
}

function getDatabaseSyncFieldMap_() {
  return [
    { viewCol: APP.BASE_COLS.NAME, baseCol: APP.BASE_COLS.NAME, label: 'Nome', type: 'text' },
    { viewCol: APP.BASE_COLS.PHONE, baseCol: APP.BASE_COLS.PHONE, label: 'Telefone', type: 'text' },
    { viewCol: APP.BASE_COLS.LANGUAGE, baseCol: APP.BASE_COLS.LANGUAGE, label: 'Idioma', type: 'text' },
    { viewCol: APP.BASE_COLS.TAG, baseCol: APP.BASE_COLS.TAG, label: 'Tag', type: 'text' },
    { viewCol: APP.BASE_COLS.STAGE, baseCol: APP.BASE_COLS.STAGE, label: 'Etapa / Status', type: 'text' },
    { viewCol: APP.BASE_COLS.SHOW_DATE, baseCol: APP.BASE_COLS.SHOW_DATE, label: 'Data Aula Show', type: 'date' },
    { viewCol: APP.BASE_COLS.NEXT_FOLLOWUP, baseCol: APP.BASE_COLS.NEXT_FOLLOWUP, label: 'Próxima Data / Follow-up', type: 'date' },
    { viewCol: APP.BASE_COLS.QUALI_1, baseCol: APP.BASE_COLS.QUALI_1, label: 'Quali 1', type: 'text' },
    { viewCol: APP.BASE_COLS.QUALI_2, baseCol: APP.BASE_COLS.QUALI_2, label: 'Quali 2', type: 'text' },
    { viewCol: APP.BASE_COLS.QUALI_3, baseCol: APP.BASE_COLS.QUALI_3, label: 'Quali 3', type: 'text' },
    { viewCol: APP.BASE_COLS.QUALI_4, baseCol: APP.BASE_COLS.QUALI_4, label: 'Quali 4', type: 'text' },
    { viewCol: APP.BASE_COLS.QUALI_5, baseCol: APP.BASE_COLS.QUALI_5, label: 'Quali 5', type: 'text' },
    { viewCol: APP.BASE_COLS.OBS, baseCol: APP.BASE_COLS.OBS, label: 'Observações', type: 'text' },
    { viewCol: APP.BASE_COLS.PROFESSOR, baseCol: APP.BASE_COLS.PROFESSOR, label: 'Professor', type: 'text' },
    { viewCol: APP.BASE_COLS.AGE, baseCol: APP.BASE_COLS.AGE, label: 'Idade', type: 'text' },
    { viewCol: APP.BASE_COLS.OTHER_CLASSIFICATION, baseCol: APP.BASE_COLS.OTHER_CLASSIFICATION, label: 'Outra Classificação', type: 'text' },
    { viewCol: APP.BASE_COLS.HANDLE, baseCol: APP.BASE_COLS.HANDLE, label: '@', type: 'handle' },
    { viewCol: APP.BASE_COLS.INDICATION_REQUEST, baseCol: APP.BASE_COLS.INDICATION_REQUEST, label: 'Pedido de Indicação', type: 'text' },
    { viewCol: APP.BASE_COLS.INFLUENCER_SOURCE, baseCol: APP.BASE_COLS.INFLUENCER_SOURCE, label: 'Fonte Do Influencer', type: 'text' },
    { viewCol: APP.BASE_COLS.EMAIL, baseCol: APP.BASE_COLS.EMAIL, label: 'Email', type: 'text' }
  ];
}

function cloneBaseRows_(rows) {
  return (rows || []).map(function (row) {
    return row.slice();
  });
}

function buildBaseRowLookup_(baseRows) {
  const baseMap = {};

  (baseRows || []).forEach(function (row, index) {
    const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
    if (!id) {
      return;
    }

    baseMap[id] = {
      index: index,
      row: row,
      record: recordFromBaseRow_(row)
    };
  });

  return baseMap;
}

function normalizePendingSheetValue_(mapping, value, rowNumber) {
  if (mapping.type === 'handle') {
    return sanitizeInfluencerHandle_(value).trim();
  }

  return normalizeValueByType_(value, mapping.type, rowNumber, mapping.label);
}

function addPendingEdit_(pendingById, id, sourceKey, mapping, value) {
  if (!pendingById[id]) {
    pendingById[id] = {
      database: {},
      crm: {},
      captacao: {}
    };
  }

  pendingById[id][sourceKey][mapping.baseCol] = {
    value: value,
    type: mapping.type,
    label: mapping.label,
    sourceKey: sourceKey
  };
}

function collectPendingEditsFromSheet_(params) {
  const sheet = params.sheet;
  const startRow = params.startRow;
  const startCol = params.startCol;
  const width = params.width;
  const idCol = params.idCol;
  const sourceKey = params.sourceKey;
  const mappings = params.mappings;
  const baseMap = params.baseMap;
  const pendingById = params.pendingById;
  const buildCommittedRow = params.buildCommittedRow;
  const lastRow = sheet.getLastRow();

  if (lastRow < startRow) {
    return;
  }

  const rows = sheet.getRange(startRow, startCol, lastRow - startRow + 1, width).getValues();

  rows.forEach(function (row, index) {
    const sheetRowNumber = startRow + index;
    const id = String(row[idCol - 1] || '').trim();

    if (!id) {
      return;
    }

    const baseEntry = baseMap[id];
    if (!baseEntry) {
      return;
    }

    const committedRow = buildCommittedRow(baseEntry.record);

    mappings.forEach(function (mapping) {
      const visibleValue = normalizePendingSheetValue_(mapping, row[mapping.viewCol - 1], sheetRowNumber);
      const committedValue = normalizePendingSheetValue_(mapping, committedRow[mapping.viewCol - 1], sheetRowNumber);

      if (!areValuesEqualByType_(visibleValue, committedValue, mapping.type === 'handle' ? 'text' : mapping.type)) {
        addPendingEdit_(pendingById, id, sourceKey, mapping, visibleValue);
      }
    });
  });
}

function collectPendingEdits_(ctx, baseRows) {
  const pendingById = {};
  const baseMap = buildBaseRowLookup_(baseRows);
  const allowedLanguages = getNonEmptyValuesFromColumn_(ctx.legendSheet, 16, 2);
  const captacaoLayoutInfo = getCaptacaoSheetLayoutInfo_(ctx.captacaoSheet);

  collectPendingEditsFromSheet_({
    sheet: ctx.databaseSheet,
    startRow: 2,
    startCol: 1,
    width: APP.BASE_HEADERS.length,
    idCol: APP.BASE_COLS.ID,
    sourceKey: 'database',
    mappings: getDatabaseSyncFieldMap_(),
    baseMap: baseMap,
    pendingById: pendingById,
    buildCommittedRow: function (record) {
      return baseMap[record.id].row;
    }
  });

  collectPendingEditsFromSheet_({
    sheet: ctx.crmSheet,
    startRow: APP.CRM_LAYOUT.DATA_START_ROW,
    startCol: 1,
    width: APP.CRM_HEADERS.length,
    idCol: APP.CRM_COLS.ID,
    sourceKey: 'crm',
    mappings: getCRMSyncFieldMap_(),
    baseMap: baseMap,
    pendingById: pendingById,
    buildCommittedRow: function (record) {
      return buildCRMViewRow_(record, allowedLanguages);
    }
  });

  collectPendingEditsFromSheet_({
    sheet: ctx.captacaoSheet,
    startRow: APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW,
    startCol: APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN,
    width: captacaoLayoutInfo.width,
    idCol: captacaoLayoutInfo.idCol,
    sourceKey: 'captacao',
    mappings: captacaoLayoutInfo.mappings,
    baseMap: baseMap,
    pendingById: pendingById,
    buildCommittedRow: function (record) {
      return buildCaptacaoComparableRow_(record, captacaoLayoutInfo);
    }
  });

  return pendingById;
}

function resolvePendingValuesForRecord_(pendingEntry, sourcePriority) {
  const resolved = {};
  const priority = sourcePriority && sourcePriority.length
    ? sourcePriority
    : ['database', 'crm', 'captacao'];

  priority.forEach(function (sourceKey) {
    const sourceEntry = pendingEntry && pendingEntry[sourceKey] ? pendingEntry[sourceKey] : {};
    Object.keys(sourceEntry).forEach(function (baseColKey) {
      if (!resolved[baseColKey]) {
        resolved[baseColKey] = sourceEntry[baseColKey];
      }
    });
  });

  return resolved;
}

function applyResolvedPendingValuesToRow_(row, resolvedValues) {
  Object.keys(resolvedValues || {}).forEach(function (baseColKey) {
    const baseCol = Number(baseColKey);
    row[baseCol - 1] = resolvedValues[baseColKey].value;
  });
}

function buildPreviewBaseRowsWithPendingEdits_(ctx, baseRows, pendingById, sourcePriority) {
  const previewRows = cloneBaseRows_(baseRows);
  const previewMap = buildBaseRowLookup_(previewRows);
  const pendingLookup = pendingById || collectPendingEdits_(ctx, baseRows);

  Object.keys(pendingLookup).forEach(function (id) {
    const previewEntry = previewMap[id];
    if (!previewEntry) {
      return;
    }

    applyResolvedPendingValuesToRow_(previewEntry.row, resolvePendingValuesForRecord_(pendingLookup[id], sourcePriority));
  });

  return previewRows;
}

function refreshOperationalViews_(ctx, options) {
  const preservePending = Boolean(options && options.preservePending);
  const silent = Boolean(options && options.silent);
  const target = (options && options.target) || 'all';
  const committedRows = getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
  const pendingById = preservePending ? collectPendingEdits_(ctx, committedRows) : {};
  const databaseViewRows = preservePending
    ? buildPreviewBaseRowsWithPendingEdits_(ctx, committedRows, pendingById, ['database'])
    : committedRows;
  const crmViewRows = preservePending
    ? buildPreviewBaseRowsWithPendingEdits_(ctx, committedRows, pendingById, ['crm'])
    : committedRows;
  const captacaoViewRows = preservePending
    ? buildPreviewBaseRowsWithPendingEdits_(ctx, committedRows, pendingById, ['captacao'])
    : committedRows;
  const crmPendingIds = Object.keys(pendingById).filter(function (id) {
    return Object.keys((pendingById[id] && pendingById[id].crm) || {}).length > 0;
  });
  const captacaoPendingIds = Object.keys(pendingById).filter(function (id) {
    return Object.keys((pendingById[id] && pendingById[id].captacao) || {}).length > 0;
  });

  if (target === 'captacao') {
    montarBancoDeDados_Interno_(ctx, { silent: true, baseRowsOverride: databaseViewRows });
    refreshCRMView_Interno_(ctx, { silent: true, baseRowsOverride: crmViewRows, forceVisibleIds: crmPendingIds });
    montarCaptacao_Interno_(ctx, { silent: silent, baseRowsOverride: captacaoViewRows, forceVisibleIds: captacaoPendingIds });
    return;
  }

  if (target === 'crm') {
    montarBancoDeDados_Interno_(ctx, { silent: true, baseRowsOverride: databaseViewRows });
    montarCaptacao_Interno_(ctx, { silent: true, baseRowsOverride: captacaoViewRows, forceVisibleIds: captacaoPendingIds });
    refreshCRMView_Interno_(ctx, { silent: silent, baseRowsOverride: crmViewRows, forceVisibleIds: crmPendingIds });
    return;
  }

  if (target === 'database') {
    montarCaptacao_Interno_(ctx, { silent: true, baseRowsOverride: captacaoViewRows, forceVisibleIds: captacaoPendingIds });
    refreshCRMView_Interno_(ctx, { silent: true, baseRowsOverride: crmViewRows, forceVisibleIds: crmPendingIds });
    montarBancoDeDados_Interno_(ctx, { silent: silent, baseRowsOverride: databaseViewRows });
    return;
  }

  montarCaptacao_Interno_(ctx, { silent: true, baseRowsOverride: captacaoViewRows, forceVisibleIds: captacaoPendingIds });
  refreshCRMView_Interno_(ctx, { silent: true, baseRowsOverride: crmViewRows, forceVisibleIds: crmPendingIds });
  montarBancoDeDados_Interno_(ctx, { silent: true, baseRowsOverride: databaseViewRows });
}

function refreshOperationalQueuesSilently_() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      refreshOperationalViews_(ctx, { silent: true, preservePending: true });
    });
  } catch (error) {
    console.error('Erro ao atualizar as filas no onOpen', error);
  }
}

function ensureDailyRefreshTrigger_() {
  const handlerName = 'atualizacaoAutomaticaDiaria';
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (trigger.getHandlerFunction() === handlerName) {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger(handlerName)
    .timeBased()
    .everyDays(1)
    .atHour(4)
    .create();
}

function atualizacaoAutomaticaDiaria() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      sincronizarListaProfessores_Interno_(ctx.legendSheet, ctx.crmSheet);
      refreshOperationalViews_(ctx, { silent: true, preservePending: true });
    });
  } catch (error) {
    console.error('Erro na atualização automática diária.', error);
  }
}

function atualizarListaProfessores() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      const totalProfessors = sincronizarListaProfessores_Interno_(ctx.legendSheet, ctx.crmSheet);

      showToastMessage_(
        'Lista de professores atualizada com sucesso.\n\nTotal de nomes: ' + totalProfessors,
        'Automações CRM',
        8
      );
    });
  } catch (error) {
    handleError_('atualizarListaProfessores', error);
  }
}

function runClientAction_(slotName) {
  const normalizedSlot = normalizeClientActionSlot_(slotName);
  if (!normalizedSlot) {
    throw new Error('Slot de ação inválido: ' + slotName);
  }

  const action = getClientActionBySlot_(normalizedSlot);
  if (!action) {
    SpreadsheetApp.getUi().alert('O slot ' + normalizedSlot + ' ainda não foi configurado.');
    return;
  }

  action.handler();
}

function onOpen() {
  buildAutomationMenu_({ useClientSlots: false });
  refreshOperationalQueuesSilently_();
}

function onEdit(e) {
  try {
    if (!e || !e.range) return;
  } catch (error) {
    console.error('Erro em "onEdit"', error);
  }
}

function handleCRMEdit_(e) {
  const range = e.range;
  const sheet = range.getSheet();

  if (range.getRow() < getCRMDataStartRow_(sheet)) return;
  if (range.getColumn() !== APP.CRM_COLS.STAGE) return;
  if (range.getColumn() > APP.CRM_HEADERS.length) return;

  const rowNumber = range.getRow();
  const id = String(sheet.getRange(rowNumber, APP.CRM_COLS.ID).getDisplayValue() || '').trim();
  if (!id) return;

  const stageChangeContext = maybeHandleStageSelection_({
    sheet: sheet,
    rowNumber: rowNumber,
    stageColumn: APP.CRM_COLS.STAGE,
    professorColumn: APP.CRM_COLS.PROFESSOR,
    showDateColumn: APP.CRM_COLS.SHOW_DATE,
    nextFollowUpColumn: APP.CRM_COLS.NEXT_FOLLOWUP,
    oldStageValue: typeof e.oldValue === 'undefined' ? '' : e.oldValue
  });

  if (stageChangeContext && stageChangeContext.cancelled) {
    return;
  }

  const ctx = getContext_({ createMissing: false });
  syncCRMRowStageToBase_(ctx, rowNumber);
  montarCaptacao_Interno_(ctx, { silent: true });
  refreshCRMView_Interno_(ctx, { silent: true });
  montarBancoDeDados_Interno_(ctx, { silent: true });
}

function handleCaptacaoEdit_(e) {
  const range = e.range;
  const sheet = range.getSheet();
  const rowNumber = range.getRow();
  const columnNumber = range.getColumn();

  if (rowNumber < APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW) return;
  if (columnNumber < APP.CAPTACAO_COLS.HANDLE || columnNumber > APP.CAPTACAO_COLS.SOURCE) return;

  const id = String(sheet.getRange(rowNumber, APP.CAPTACAO_COLS.ID).getDisplayValue() || '').trim();
  if (!id) return;

  const ctx = getContext_({ createMissing: false });
  const baseLookup = findBaseRowById_(ctx.baseSheet, id);
  if (!baseLookup) return;

  const stageContext = columnNumber === APP.CAPTACAO_COLS.STAGE
    ? maybeHandleCaptacaoStageSelection_({
      sheet: sheet,
      rowNumber: rowNumber,
      baseRow: baseLookup.row,
      oldStageValue: typeof e.oldValue === 'undefined' ? '' : e.oldValue
    })
    : null;

  if (stageContext && stageContext.cancelled) {
    return;
  }

  syncCaptacaoRowToBase_(ctx, rowNumber, baseLookup, stageContext, typeof e.oldValue === 'undefined' ? '' : e.oldValue);
  montarCaptacao_Interno_(ctx, { silent: true });
  refreshCRMView_Interno_(ctx, { silent: true });
  montarBancoDeDados_Interno_(ctx, { silent: true });
}


function sincronizarBancoDeDadosParaBase_(ctx, baseRows, logs) {
  const databaseRows = getSheetDataRows_(ctx.databaseSheet, APP.BASE_HEADERS.length);
  if (!databaseRows.length || !baseRows.length) return 0;

  const baseMap = {};
  baseRows.forEach(function (row) {
    const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
    if (id) {
      baseMap[id] = row;
    }
  });

  let updatedRecords = 0;

  databaseRows.forEach(function (databaseRow, idx) {
    const sheetRowNumber = idx + 2;
    const id = String(databaseRow[APP.BASE_COLS.ID - 1] || '').trim();
    if (!id) return;

    const baseRow = baseMap[id];
    if (!baseRow) return;

    const oldStage = baseRow[APP.BASE_COLS.STAGE - 1];
    const newStage = normalizeValueByType_(
      databaseRow[APP.BASE_COLS.STAGE - 1],
      'text',
      sheetRowNumber,
      'Etapa / Status'
    );

    if (!areValuesEqualByType_(oldStage, newStage, 'text')) {
      baseRow[APP.BASE_COLS.STAGE - 1] = newStage;
      const now = new Date();
      baseRow[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
      baseRow[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
      baseRow[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;
      updatedRecords++;

      logs.push(makeLogRow_({
        action: APP.LOG_ACTIONS.UPDATE_STAGE,
        id: id,
        name: String(baseRow[APP.BASE_COLS.NAME - 1] || ''),
        field: 'Etapa / Status',
        oldValue: oldStage,
        newValue: newStage,
        attendant: ctx.attendantName,
        origin: APP.LOG_ORIGINS.DATABASE_UPDATE
      }));
    }
  });

  return updatedRecords;
}

/****************************************************
 * SETUP.GS
 * Criação e configuração das abas da operação
 ****************************************************/

function configurarEstruturaInicial() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: true });

      configurarLegenda_(ctx.legendSheet, ctx.ss);
      configurarCaptacao_(ctx.captacaoSheet);
      configurarCRM_(ctx.crmSheet);
      configurarSyncBuffer_(ctx.baseSheet);
      configurarBancoDeDados_(ctx.databaseSheet);
      configurarLog_(ctx.logSheet);
      configurarInfluencersAtivos_(ctx.activeInfluencersSheet);
      configurarLinksImportantes_(ctx.importantLinksSheet);
      configurarPendenciasRelacionamento_(ctx.relationshipPendingSheet);
      hideSupportSheets_(ctx);
      reaplicarValidacoesCaptacao_Interno_(ctx.captacaoSheet);
      reaplicarValidacoesCRM_Interno_(ctx.crmSheet, ctx.legendSheet);
      reaplicarValidacoesBancoDeDados_Interno_(ctx.databaseSheet, ctx.legendSheet);
      montarBancoDeDados_Interno_(ctx, { silent: true });
      montarCaptacao_Interno_(ctx, { silent: true });
      refreshCRMView_Interno_(ctx, { silent: true });
      ensureDailyRefreshTrigger_();

      showToastMessage_(
        'Configuração inicial feita com sucesso!\n\nVAMOS CAPTAR INFLUS!',
        'Automações CRM',
        10
      );
    });
  } catch (error) {
    handleError_('configurarEstruturaInicial', error);
  }
}

function reaplicarValidacoesCRM() {
  try {
    const ctx = getContext_({ createMissing: false });
    ensureOperationalLayouts_(ctx);
    reaplicarValidacoesCaptacao_Interno_(ctx.captacaoSheet);
    reaplicarValidacoesCRM_Interno_(ctx.crmSheet, ctx.legendSheet);
    showToastMessage_('Dropdowns do CRM e da Captação reaplicados com sucesso.', 'Automações CRM');
  } catch (error) {
    handleError_('reaplicarValidacoesCRM', error);
  }
}

function configurarLegenda_(legendSheet, ss) {
  // Nome oficial do atendente: usa o trecho após " - " no título da planilha
  const spreadsheetNameSanitized = sanitizeSheetName_(ss.getName());
  const attendantNameFromTitle = extractAttendantNameFromSpreadsheetTitle_(ss.getName());

  const currentA1 = String(legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_NAME).getDisplayValue() || '').trim();
  const shouldUpdateAttendantName = !currentA1 || currentA1 === spreadsheetNameSanitized;
  const attendantName = shouldUpdateAttendantName ? attendantNameFromTitle : currentA1;
  if (shouldUpdateAttendantName) {
    legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_NAME).setValue(attendantName);
  }

  const currentRecruiterName = String(
    legendSheet.getRange(APP.LEGEND_CELLS.RECRUITER_NAME).getDisplayValue() || ''
  ).trim();
  const shouldUpdateRecruiterName = !currentRecruiterName || currentRecruiterName === spreadsheetNameSanitized;
  if (shouldUpdateRecruiterName) {
    legendSheet.getRange(APP.LEGEND_CELLS.RECRUITER_NAME).setValue(attendantName);
  }

  // Modo placeholder
  const currentMode = String(legendSheet.getRange(APP.LEGEND_CELLS.MODE).getDisplayValue() || '').trim();
  if (!currentMode) {
    legendSheet.getRange(APP.LEGEND_CELLS.MODE).setValue('Teste');
  }

  // WhatsApp do atendente placeholder
  const currentPhone = String(legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_PHONE).getDisplayValue() || '').trim();
  if (!currentPhone) {
    legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_PHONE).setValue('WhatsAppAtendentePlaceholder');
  }

  // Notas nas células principais
  legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_NAME)
    .setNote('Nome oficial do atendente. Usado para logs e identificação da operação.');
  legendSheet.getRange(APP.LEGEND_CELLS.RECRUITER_NAME)
    .setNote('Nome do recrutador usado nos e-mails enviados aos influencers.');
  legendSheet.getRange(APP.LEGEND_CELLS.MODE)
    .setNote('Modo de funcionamento. Criado como placeholder para futuras evoluções.');
  legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_PHONE)
    .setNote('WhatsApp do atendente. Placeholder para uso futuro.');

  // Remove o bloco antigo de entrada manual da legenda
  legendSheet.getRange('A2:B6').clearContent();

  // Avisos
  if (!legendSheet.getRange(APP.LEGEND_CELLS.NOTICE_LEFT).getDisplayValue()) {
    legendSheet.getRange(APP.LEGEND_CELLS.NOTICE_LEFT).setValue('PlaceholderAvisoInicialEsquerda');
  }
  if (!legendSheet.getRange(APP.LEGEND_CELLS.NOTICE_RIGHT).getDisplayValue()) {
    legendSheet.getRange(APP.LEGEND_CELLS.NOTICE_RIGHT).setValue('PlaceholderAvisoInicialDireita');
  }

  // Cabeçalhos das listas
  legendSheet.getRange('M1').setValue('Qualificações');
  legendSheet.getRange('N1').setValue('Etapas');
  legendSheet.getRange('O1').setValue('Professores');
  legendSheet.getRange('P1').setValue('Idiomas');
  legendSheet.getRange('V1').setValue('Feriados');

  // Listas auxiliares
  writeVerticalList_(legendSheet, 2, 13, APP.PLACEHOLDER_QUALIFICATIONS); // M2:M
  writeVerticalList_(legendSheet, 2, 14, APP.STAGES);                     // N2:N
  writeVerticalList_(legendSheet, 2, 15, APP.PLACEHOLDER_PROFESSORS);     // O2:O
  writeVerticalList_(legendSheet, 2, 16, APP.PLACEHOLDER_LANGUAGES);      // P2:P
  writeVerticalList_(legendSheet, 2, 22, APP.PLACEHOLDER_HOLIDAYS);       // V2:V

  // Formatações úteis
  legendSheet.setFrozenRows(1);

  // Visual básico
  legendSheet.getRange('M1:P1').setFontWeight('bold');
  legendSheet.getRange('V1').setFontWeight('bold');
}

function configurarBaseDoAtendente_(baseSheet) {
  baseSheet.getRange(1, 1, 1, APP.BASE_HEADERS.length).setValues([APP.BASE_HEADERS]);
  styleHeaderRow_(baseSheet, APP.BASE_HEADERS.length);
  baseSheet.setFrozenRows(1);

  // Colunas de texto
  baseSheet.getRange('A:A').setNumberFormat('@STRING@'); // ID
  baseSheet.getRange('D:D').setNumberFormat('@STRING@'); // Telefone
  baseSheet.getRange('V:V').setNumberFormat('@STRING@'); // @
  baseSheet.getRange('AA:AA').setNumberFormat('@STRING@');

  // Colunas de data
  baseSheet.getRange('B:B').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  baseSheet.getRange('I:I').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  baseSheet.getRange('J:K').setNumberFormat('dd/MM/yyyy');
  baseSheet.getRange('Z:Z').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  baseSheet.getRange('AB:AD').setNumberFormat('dd/MM/yyyy HH:mm:ss');

  // Larguras sugeridas
  safeSetColumnWidths_(baseSheet, [
    [1, 160], [2, 150], [3, 220], [4, 150], [5, 120], [7, 170], [8, 160],
    [9, 150], [10, 130], [11, 150], [17, 140], [18, 260], [19, 160], [21, 180],
    [22, 180], [23, 170], [24, 170], [25, 170], [26, 180], [27, 220]
  ]);

  baseSheet.hideColumns(APP.BASE_COLS.EMAIL_01_SENT_AT, 3);
}

function configurarCaptacao_(captacaoSheet) {
  captacaoSheet.clear();
  captacaoSheet
    .getRange(1, 1, captacaoSheet.getMaxRows(), captacaoSheet.getMaxColumns())
    .clearDataValidations();
  captacaoSheet
    .getRange(1, 1, captacaoSheet.getMaxRows(), APP.CAPTACAO_COLS.ID)
    .breakApart();

  captacaoSheet.getRange('A1:D1').merge().setValue('Influencers captados esse mês');
  captacaoSheet.getRange('A2:D2').merge();
  captacaoSheet.getRange('A3:D3').merge().setValue('INSERIR NOVOS INFLUS ABAIXO');
  captacaoSheet.getRange('A4:D4').setValues([['@', 'Nome', 'Email', 'Aprovação']]);

  captacaoSheet.getRange('F1:G1').merge().setValue('influs enviados para o CRM no mês');
  captacaoSheet.getRange('H1:I1').merge().setValue('influs com AS agendada no mês');
  captacaoSheet.getRange('J1:K1').merge().setValue('influs fechados no mês');
  captacaoSheet.getRange('F2:G2').merge();
  captacaoSheet.getRange('H2:I2').merge();
  captacaoSheet.getRange('J2:K2').merge();
  captacaoSheet.getRange('F2').clearContent();
  captacaoSheet.getRange('H2').clearContent();
  captacaoSheet.getRange('J2').clearContent();
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_HEADER_ROW, APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN, 1, APP.CAPTACAO_HEADERS.length)
    .setValues([APP.CAPTACAO_HEADERS]);

  captacaoSheet.getRange('A1:D4').setHorizontalAlignment('center');
  captacaoSheet.getRange('F1:O3').setHorizontalAlignment('center');
  captacaoSheet.getRange('A1:O3').setVerticalAlignment('middle');
  captacaoSheet.getRange('A1:O3').setWrap(true);
  captacaoSheet
    .getRange(
      APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW,
      APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN,
      captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1,
      6
    )
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);

  captacaoSheet
    .getRange('A1:D1')
    .setFontWeight('bold')
    .setBackground(HEADER_FILL_MAGENTA_LIGHT_3)
    .setFontColor(HEADER_TEXT_DARK);
  captacaoSheet.getRange('A2:D3').setFontWeight('bold').setBackground('#f3f3f3');
  captacaoSheet
    .getRange('A4:D4')
    .setFontWeight('bold')
    .setBackground(HEADER_FILL_YELLOW_LIGHT_2)
    .setFontColor(HEADER_TEXT_DARK);
  captacaoSheet
    .getRange('F1:K1')
    .setFontWeight('bold')
    .setBackground(HEADER_FILL_MAGENTA_LIGHT_3)
    .setFontColor(HEADER_TEXT_DARK);
  captacaoSheet.getRange('F2:K2').setFontWeight('bold').setBackground('#f3f3f3');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_HEADER_ROW, APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN, 1, APP.CAPTACAO_HEADERS.length)
    .setFontWeight('bold')
    .setBackground(HEADER_FILL_YELLOW_LIGHT_2)
    .setFontColor(HEADER_TEXT_DARK);

  captacaoSheet.setRowHeight(1, 44);
  captacaoSheet.setRowHeight(2, 34);
  captacaoSheet.setRowHeight(3, 34);
  captacaoSheet.setFrozenRows(3);

  safeSetColumnWidths_(captacaoSheet, [
    [1, 100], [2, 100], [3, 100], [4, 100], [5, 12], [6, 120], [7, 120], [8, 170], [9, 100], [10, 100], [11, 240], [12, 210], [13, 180], [14, 280], [15, 160]
  ]);

  captacaoSheet.getRange(1, APP.CAPTACAO_LAYOUT.DIVIDER_COLUMN, captacaoSheet.getMaxRows(), 1).setBackground('#e6e6e6');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.INPUT_START_ROW, APP.CAPTACAO_LAYOUT.INPUT_HANDLE_COLUMN, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.INPUT_START_ROW + 1, 3)
    .setNumberFormat('@STRING@');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.HANDLE, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1, 1)
    .setNumberFormat('@STRING@');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.EMAIL, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1, 1)
    .setNumberFormat('@STRING@');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.PHONE, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1, 1)
    .setNumberFormat('@STRING@');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.INSTAGRAM_LINK, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1, 1)
    .setNumberFormat('@STRING@');
  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.ID, captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW + 1, 1)
    .setNumberFormat('@STRING@');
  captacaoSheet.showColumns(APP.CAPTACAO_COLS.SOURCE);
  captacaoSheet.hideColumns(APP.CAPTACAO_COLS.MESSAGE);
  captacaoSheet.hideColumns(APP.CAPTACAO_COLS.ID);
}

function configurarCRM_(crmSheet) {
  crmSheet.clear();
  crmSheet
    .getRange(1, 1, crmSheet.getMaxRows(), crmSheet.getMaxColumns())
    .clearDataValidations();
  crmSheet.getRange(1, 1, crmSheet.getMaxRows(), APP.CRM_HEADERS.length).breakApart();
  crmSheet
    .getRange(APP.CRM_LAYOUT.HEADER_ROW, 1, 1, APP.CRM_HEADERS.length)
    .setValues([APP.CRM_HEADERS]);
  styleHeaderRow_(crmSheet, APP.CRM_HEADERS.length, APP.CRM_LAYOUT.HEADER_ROW);
  crmSheet.setFrozenRows(APP.CRM_LAYOUT.HEADER_ROW);

  crmSheet.getRange('B:B').setNumberFormat('@STRING@'); // @
  crmSheet.getRange('C:C').setNumberFormat('@STRING@'); // Telefone
  crmSheet.getRange('D:D').setNumberFormat('@STRING@'); // E-mail
  crmSheet.getRange('M:M').setNumberFormat('@STRING@'); // ID
  crmSheet.getRange('K:L').setNumberFormat('dd/MM/yyyy');

  safeSetColumnWidths_(crmSheet, [
    [1, 180], [2, 150], [3, 160], [4, 220], [5, 140], [6, 170], [7, 220],
    [8, 260], [9, 160], [10, 180], [11, 130], [12, 150], [13, 160]
  ]);
}

function configurarSyncBuffer_(syncBufferSheet) {
  configurarBaseDoAtendente_(syncBufferSheet);

  if (!syncBufferSheet.isSheetHidden()) {
    syncBufferSheet.hideSheet();
  }
}

function configurarBancoDeDados_(databaseSheet) {
  databaseSheet.getRange(1, 1, 1, APP.BASE_HEADERS.length).setValues([APP.BASE_HEADERS]);
  styleHeaderRow_(databaseSheet, APP.BASE_HEADERS.length);
  databaseSheet.setFrozenRows(1);
  databaseSheet.getRange(1, APP.BASE_COLS.STAGE).setNote(
    'Edite esta aba livremente. As mudanças só serão consolidadas quando a automação "Atualizar CRM" for executada.'
  );

  databaseSheet.getRange('A:A').setNumberFormat('@STRING@'); // ID
  databaseSheet.getRange('D:D').setNumberFormat('@STRING@'); // Telefone
  databaseSheet.getRange('V:V').setNumberFormat('@STRING@'); // @
  databaseSheet.getRange('AA:AA').setNumberFormat('@STRING@');

  databaseSheet.getRange('B:B').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  databaseSheet.getRange('I:I').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  databaseSheet.getRange('J:K').setNumberFormat('dd/MM/yyyy');
  databaseSheet.getRange('Z:Z').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  databaseSheet.getRange('AB:AD').setNumberFormat('dd/MM/yyyy HH:mm:ss');

  safeSetColumnWidths_(databaseSheet, [
    [1, 160], [2, 150], [3, 220], [4, 150], [5, 120], [7, 170], [8, 160],
    [9, 150], [10, 130], [11, 150], [17, 140], [18, 260], [19, 160], [21, 180],
    [22, 180], [23, 170], [24, 170], [25, 170], [27, 220]
  ]);

  databaseSheet.hideColumns(APP.BASE_COLS.EMAIL_01_SENT_AT, 3);
}

function configurarLog_(logSheet) {
  logSheet.getRange(1, 1, 1, APP.LOG_HEADERS.length).setValues([APP.LOG_HEADERS]);
  styleHeaderRow_(logSheet, APP.LOG_HEADERS.length);
  logSheet.setFrozenRows(1);
  logSheet.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm:ss');

  safeSetColumnWidths_(logSheet, [
    [1, 150], [2, 130], [3, 160], [4, 220], [5, 170],
    [6, 220], [7, 220], [8, 160], [9, 140]
  ]);

  if (!logSheet.isSheetHidden()) {
    logSheet.hideSheet();
  }
}

function configurarInfluencersAtivos_(sheet) {
  if (!sheet.getRange('A1').getDisplayValue()) {
    sheet.getRange('A1').setValue('Reservado para uso futuro');
  }
}

function configurarLinksImportantes_(sheet) {
  if (!sheet.getRange('A1').getDisplayValue()) {
    sheet.getRange('A1').setValue('Links Importantes');
  }
}

function configurarPendenciasRelacionamento_(sheet) {
  const headers = [[
    'ID aluno',
    'Nome',
    'Whatsapp',
    'Email',
    'Idioma',
    'Idioma',
    'Estado Atual do Influ',
    'Feito?',
    'Comentários',
    'Instruções Sugeridas',
    'Está Atrasado?'
  ]];

  sheet.getRange(1, 1, 1, headers[0].length).setValues(headers);
  styleHeaderRow_(sheet, headers[0].length);
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 66);

  for (let col = 1; col <= headers[0].length; col++) {
    sheet.setColumnWidth(col, 100);
  }

  sheet.getRange('J:J').setWrap(true);
}

function hideSupportSheets_(ctx) {
  const fallbackSheet = ctx.crmSheet || ctx.captacaoSheet || ctx.databaseSheet;
  [
    ctx.legendSheet,
    ctx.activeInfluencersSheet,
    ctx.importantLinksSheet,
    ctx.relationshipPendingSheet
  ].forEach(function (sheet) {
    hideSheetSafely_(ctx.ss, sheet, fallbackSheet);
  });
}

function hideSheetSafely_(ss, sheet, fallbackSheet) {
  if (!sheet || sheet.isSheetHidden()) {
    return;
  }

  if (
    fallbackSheet &&
    fallbackSheet.getSheetId() !== sheet.getSheetId() &&
    ss.getActiveSheet().getSheetId() === sheet.getSheetId()
  ) {
    ss.setActiveSheet(fallbackSheet);
  }

  sheet.hideSheet();
}

function reaplicarValidacoesCaptacao_Interno_(captacaoSheet) {
  const totalRows = Math.max(captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.INPUT_HEADER_ROW, 1);
  const inputRows = Math.max(captacaoSheet.getMaxRows() - APP.CAPTACAO_LAYOUT.INPUT_START_ROW + 1, 1);
  const stageList = getCaptacaoManualStageOptions_();
  const sourceList = APP.CAPTACAO_SOURCE_OPTIONS.slice();

  captacaoSheet
    .getRange(APP.CAPTACAO_LAYOUT.INPUT_START_ROW, APP.CAPTACAO_LAYOUT.INPUT_APPROVAL_COLUMN, inputRows, 1)
    .clearDataValidations();

  if (stageList.length) {
    const stageRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(stageList, true)
      .setAllowInvalid(true)
      .build();

    captacaoSheet
      .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.STAGE, totalRows, 1)
      .setDataValidation(stageRule);
  }

  if (sourceList.length) {
    const sourceRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(sourceList, true)
      .setAllowInvalid(true)
      .build();

    captacaoSheet
      .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_COLS.SOURCE, totalRows, 1)
      .setDataValidation(sourceRule);
  }
}

function reaplicarValidacoesCRM_Interno_(crmSheet, legendSheet) {
  const totalRows = Math.max(crmSheet.getMaxRows() - APP.CRM_LAYOUT.HEADER_ROW, 1);
  const editableRows = Math.max(crmSheet.getMaxRows() - 1, 1);
  const languageList = getNonEmptyValuesFromColumn_(legendSheet, 16, 2); // P
  const professorRange = getProfessorOptionsRange_(legendSheet);
  const stageList = getCRMManualStageOptions_();

  crmSheet
    .getRange(2, APP.CRM_COLS.PROFESSOR, editableRows, 2)
    .clearDataValidations();

  if (languageList.length) {
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(languageList, true)
      .setAllowInvalid(false)
      .build();

    crmSheet.getRange(APP.CRM_LAYOUT.DATA_START_ROW, APP.CRM_COLS.LANGUAGE, totalRows, 1).setDataValidation(rule);
  }

  if (professorRange) {
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInRange(professorRange, true)
      .setAllowInvalid(false)
      .build();

    crmSheet.getRange(APP.CRM_LAYOUT.DATA_START_ROW, APP.CRM_COLS.PROFESSOR, totalRows, 1).setDataValidation(rule);
  }

  if (stageList.length) {
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(stageList, true)
      .setAllowInvalid(true)
      .build();

    crmSheet.getRange(APP.CRM_LAYOUT.DATA_START_ROW, APP.CRM_COLS.STAGE, totalRows, 1).setDataValidation(rule);
  }
}

function reaplicarValidacoesBancoDeDados_Interno_(databaseSheet, legendSheet) {
  const totalRows = Math.max(databaseSheet.getMaxRows() - 1, 1);
  const stageList = getDatabaseManualStageOptions_();

  if (stageList.length) {
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(stageList, true)
      .setAllowInvalid(true)
      .build();

    databaseSheet.getRange(2, APP.BASE_COLS.STAGE, totalRows, 1).setDataValidation(rule);
  }
}

/****************************************************
 * CADASTRO.GS
 * Adição manual de influencer pela aba Captação
 ****************************************************/

function checarMandaVerCaptacao() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      ensureOperationalLayouts_(ctx);
      const captacaoSheet = ctx.captacaoSheet;
      const inputRange = getCaptacaoInputRange_(captacaoSheet);
      const inputRows = inputRange.getDisplayValues();
      const resolver = getInfluencerApprovalStatusResolver_();
      const sanitizedHandleValues = [];
      const approvalValues = [];
      const invalidEntries = [];
      let validHandleCount = 0;

      inputRows.forEach(function (row, idx) {
        const rawHandle = String(row[0] || '').trim();

        if (!rawHandle) {
          sanitizedHandleValues.push(['']);
          approvalValues.push(['']);
          return;
        }

        const handleResult = parseInfluencerHandleInput_(rawHandle);

        if (!handleResult.valid) {
          sanitizedHandleValues.push([rawHandle]);
          approvalValues.push(['']);
          invalidEntries.push('Linha ' + (APP.CAPTACAO_LAYOUT.INPUT_START_ROW + idx) + ': ' + handleResult.error);
          return;
        }

        sanitizedHandleValues.push([handleResult.sanitized]);
        approvalValues.push([resolver(handleResult.sanitized)]);
        validHandleCount += 1;
      });

      if (!validHandleCount && !invalidEntries.length) {
        throw new Error('Preencha ao menos um handle em A5 para rodar a checagem de "Manda ver".');
      }

      captacaoSheet
        .getRange(APP.CAPTACAO_LAYOUT.INPUT_START_ROW, APP.CAPTACAO_LAYOUT.INPUT_HANDLE_COLUMN, sanitizedHandleValues.length, 1)
        .setValues(sanitizedHandleValues);
      getCaptacaoApprovalRange_(captacaoSheet).setValues(approvalValues);
      updateCaptacaoApprovalColors_(captacaoSheet);

      let alertMessage =
        'Checagem concluída.\n\n' +
        'Influencers analisados: ' + validHandleCount;

      if (invalidEntries.length) {
        alertMessage += '\n\nCorrija os campos inválidos antes de adicionar:\n- ' + invalidEntries.join('\n- ');
      }

      if (invalidEntries.length) {
        SpreadsheetApp.getUi().alert(alertMessage);
        return;
      }

      showToastMessage_(alertMessage, 'Checar Manda Ver', 8);
    });
  } catch (error) {
    handleError_('checarMandaVerCaptacao', error);
  }
}

function adicionarInflu() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      ensureOperationalLayouts_(ctx);
      const captacaoSheet = ctx.captacaoSheet;
      const inputRows = getCaptacaoInputRange_(captacaoSheet).getDisplayValues();
      const rowsToInsert = [];
      const blockedRows = [];
      const logs = [];

      inputRows.forEach(function (inputRow, idx) {
        const inputPosition = idx + 1;
        const rawHandle = String(inputRow[0] || '').trim();
        const inputName = String(inputRow[1] || '').trim();
        const inputEmail = String(inputRow[2] || '').trim();
        const approvalStatus = String(inputRow[3] || '').trim();
        const approvalStatusNormalized = normalizeText_(approvalStatus);

        if (!rawHandle) {
          return;
        }

        const handleResult = parseInfluencerHandleInput_(rawHandle);
        if (!handleResult.valid) {
          throw new Error('Influencer ' + inputPosition + ': ' + handleResult.error);
        }
        const handle = handleResult.sanitized;

        if (inputEmail && !isValidEmail_(inputEmail)) {
          throw new Error('Influencer ' + inputPosition + ': email inválido em "' + inputEmail + '".');
        }

        if (approvalStatusNormalized !== normalizeText_('Manda ver')) {
          blockedRows.push(
            'Influencer ' + inputPosition + ': "@' + handle + '" está com status "' +
            (approvalStatus || 'vazio') + '".'
          );
          return;
        }

        const now = new Date();
        const row = makeEmptyBaseRow_();
        const influencerId = Utilities.getUuid();

        row[APP.BASE_COLS.ID - 1] = influencerId;
        row[APP.BASE_COLS.ENTRY_TIMESTAMP - 1] = now;
        row[APP.BASE_COLS.NAME - 1] = inputName;
        row[APP.BASE_COLS.PHONE - 1] = '';
        row[APP.BASE_COLS.TAG - 1] = APP.DEFAULT_TAG;
        row[APP.BASE_COLS.STAGE - 1] = APP.DEFAULT_CAPTACAO_STAGE;
        row[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;
        row[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
        row[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
        row[APP.BASE_COLS.CURRENT_PIPELINE - 1] = APP.PIPELINES.CAPTACAO;
        row[APP.BASE_COLS.HANDLE - 1] = handle;
        row[APP.BASE_COLS.RECORD_ORIGIN - 1] = APP.PIPELINES.CAPTACAO;
        row[APP.BASE_COLS.INFLUENCER_SOURCE - 1] = '';
        row[APP.BASE_COLS.EMAIL - 1] = inputEmail;

        rowsToInsert.push(row);
        logs.push(makeLogRow_({
          action: APP.LOG_ACTIONS.CREATE,
          id: influencerId,
          name: inputName || ('@' + handle),
          field: 'Registro',
          oldValue: '',
          newValue: 'Criado via Captação',
          attendant: ctx.attendantName,
          origin: APP.LOG_ORIGINS.MANUAL_ADD
        }));
      });

      if (!rowsToInsert.length && !blockedRows.length) {
        throw new Error('Preencha ao menos um handle em A5 para adicionar influencers.');
      }

      if (rowsToInsert.length) {
        syncAddedInfluencersToContactedSheet_(rowsToInsert);

        const targetRow = ctx.baseSheet.getLastRow() + 1;
        ctx.baseSheet
          .getRange(targetRow, 1, rowsToInsert.length, APP.BASE_HEADERS.length)
          .setValues(rowsToInsert);

        appendLogEntries_(ctx.logSheet, logs);

        clearCaptacaoInputArea_(captacaoSheet);
        refreshOperationalViews_(ctx, { silent: true, preservePending: true });
      } else {
        clearCaptacaoInputArea_(captacaoSheet);
      }

      let alertMessage = rowsToInsert.length
        ? 'Influencers adicionados com sucesso.\n\nTotal inserido: ' + rowsToInsert.length
        : 'Nenhum influencer foi adicionado.';

      if (blockedRows.length) {
        alertMessage +=
          '\n\nOs influencers abaixo não foram adicionados porque não estão com status "Manda ver":\n\n' +
          blockedRows.join('\n');
      }

      if (blockedRows.length) {
        SpreadsheetApp.getUi().alert(alertMessage);
        return;
      }

      showToastMessage_(alertMessage, 'Adicionar Influ', 8);
    });
  } catch (error) {
    handleError_('adicionarInflu', error);
  }
}

/****************************************************
 * CRM.GS
 * Montagem das filas visuais de Captação e CRM
 ****************************************************/

function montarCaptacao() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      refreshOperationalViews_(ctx, { silent: false, target: 'captacao', preservePending: true });
    });
  } catch (error) {
    handleError_('montarCaptacao', error);
  }
}

function buildCRMViewRow_(record, allowedLanguages) {
  const crmStage = getCRMStage_(record);

  return [
    record.name || (record.handle ? '@' + sanitizeInfluencerHandle_(record.handle) : ''),
    record.handle ? '@' + sanitizeInfluencerHandle_(record.handle) : '',
    record.phone,
    record.email,
    normalizeSelectableCRMValue_(record.language, allowedLanguages),
    crmStage,
    gerarMensagemPlaceholder_(crmStage),
    record.obs,
    record.professor,
    record.otherClassification,
    record.showDate || '',
    record.nextFollowUp || '',
    record.id
  ];
}

function buildInstagramProfileLink_(handle) {
  const sanitizedHandle = sanitizeInfluencerHandle_(handle).trim();
  if (!sanitizedHandle) {
    return '';
  }

  return 'https://instagram.com/' + sanitizedHandle;
}

function buildCaptacaoComparableRow_(record, layoutInfo) {
  const captacaoStage = getCaptacaoStage_(record);
  const row = new Array((layoutInfo && layoutInfo.width) || APP.CAPTACAO_HEADERS.length).fill('');
  const positions = layoutInfo && layoutInfo.positions ? layoutInfo.positions : {
    handle: 1,
    name: 2,
    email: 3,
    phone: 4,
    instagramLink: 5,
    comments: 6,
    stage: 7,
    source: 8,
    message: 9,
    id: 10
  };

  row[positions.handle - 1] = sanitizeInfluencerHandle_(record.handle);
  row[positions.name - 1] = record.name;
  row[positions.email - 1] = record.email;
  row[positions.phone - 1] = record.phone;
  row[positions.instagramLink - 1] = buildInstagramProfileLink_(record.handle);
  row[positions.comments - 1] = record.obs;
  row[positions.stage - 1] = captacaoStage;
  row[positions.message - 1] = gerarMensagemPlaceholder_(captacaoStage);
  row[positions.source - 1] = record.influencerSource;
  row[positions.id - 1] = record.id;

  return row;
}

function buildCaptacaoViewRow_(record) {
  return buildCaptacaoComparableRow_(record, null);
}

function montarCaptacao_Interno_(ctx, options) {
  const silent = Boolean(options && options.silent);
  const forceVisibleLookup = {};
  (options && options.forceVisibleIds ? options.forceVisibleIds : []).forEach(function (id) {
    forceVisibleLookup[String(id || '').trim()] = true;
  });
  ensureOperationalLayouts_(ctx);
  const baseRows = (options && options.baseRowsOverride) || getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
  clearSheetBody_(ctx.captacaoSheet, APP.CAPTACAO_HEADERS.length, APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN);
  updateCaptacaoSummaries_(ctx, baseRows);

  if (!baseRows.length) {
    reaplicarValidacoesCaptacao_Interno_(ctx.captacaoSheet);
    if (!silent) {
      showToastMessage_('A base local está vazia. Nada foi enviado para a Captação.', 'Montar Captação');
    }
    return;
  }

  const captacaoRows = [];

  baseRows.forEach(function (row) {
    const record = recordFromBaseRow_(row);

    if (!record.id || !record.handle) {
      return;
    }

    if (!forceVisibleLookup[record.id] && !deveAparecerNaCaptacao_(record)) {
      return;
    }

    captacaoRows.push(buildCaptacaoViewRow_(record));
  });

  if (captacaoRows.length) {
    ctx.captacaoSheet
      .getRange(APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW, APP.CAPTACAO_LAYOUT.TABLE_START_COLUMN, captacaoRows.length, APP.CAPTACAO_HEADERS.length)
      .setValues(captacaoRows);
  }

  reaplicarValidacoesCaptacao_Interno_(ctx.captacaoSheet);

  if (!silent) {
    showToastMessage_(
      'Captação montada com sucesso.\n\n' +
      'Total de registros visíveis: ' + captacaoRows.length,
      'Montar Captação',
      8
    );
  }
}

function refreshCRMView_Interno_(ctx, options) {
  const silent = Boolean(options && options.silent);
  const forceVisibleLookup = {};
  (options && options.forceVisibleIds ? options.forceVisibleIds : []).forEach(function (id) {
    forceVisibleLookup[String(id || '').trim()] = true;
  });
  ensureOperationalLayouts_(ctx);
  const baseRows = (options && options.baseRowsOverride) || getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
  const allowedLanguages = getNonEmptyValuesFromColumn_(ctx.legendSheet, 16, 2);

  // Limpa o corpo antigo do CRM
  clearSheetBody_(ctx.crmSheet, APP.CRM_HEADERS.length, APP.CRM_LAYOUT.DATA_START_ROW);

  if (!baseRows.length) {
    reaplicarValidacoesCRM_Interno_(ctx.crmSheet, ctx.legendSheet);
    if (!silent) {
      showToastMessage_('A base local está vazia. Nada foi exibido no CRM.', 'CRM');
    }
    return;
  }

  const crmRows = [];

  baseRows.forEach(function (row) {
    const record = recordFromBaseRow_(row);

    if (!record.id) {
      return;
    }

    if (!isCRMRecord_(record)) {
      return;
    }

    if (!forceVisibleLookup[record.id] && !deveAparecerNoCRM_(record)) {
      return;
    }

    crmRows.push(buildCRMViewRow_(record, allowedLanguages));
  });

  if (crmRows.length) {
    ctx.crmSheet
      .getRange(APP.CRM_LAYOUT.DATA_START_ROW, 1, crmRows.length, APP.CRM_HEADERS.length)
      .setValues(crmRows);
  }

  reaplicarValidacoesCRM_Interno_(ctx.crmSheet, ctx.legendSheet);

  if (!silent) {
    showToastMessage_(
      'CRM atualizado com sucesso.\n\n' +
      'Total de registros visíveis: ' + crmRows.length,
      'CRM',
      8
    );
  }
}

function getEmailAutomationConfigs_() {
  return {
    'ENVIAR EMAIL 01': {
      requiredStage: 'Enviar email 01',
      postSendStage: 'FUP + 03 dias',
      postSendFollowUpDays: 3,
      sentAtCol: APP.BASE_COLS.EMAIL_01_SENT_AT,
      prerequisiteSentAtCol: null,
      buildSubject: function (record) {
        return record.name + ', queremos sua influência!';
      },
      buildHtml: function (ctx, record) {
        return (
          '<div style="font-family: Arial, sans-serif;">' +
            '<p>Olá, ' + escapeHtml_(record.name) + ' e equipe! Tudo bem?<br>' +
              'Espero que sim</p>' +
            '<p>' +
              'Aqui é a ' + escapeHtml_(ctx.recruiterName) + ', prazer! Sou responsável pela área de influencers da ' +
              '<a href="https://www.instagram.com/idiomaindependente/" target="_blank">@idiomaindependente</a>, ' +
              'uma startup de idiomas que já impactou mais de 10.000 alunos, conta com 600+ professores ' +
              'e uma comunidade ativa de 600+ influencers parceiros.' +
            '</p>' +
            '<p>' +
              'Cheguei até você porque gostei bastante do seu perfil e sinto que ele tem tudo a ver com ' +
              'o tipo de parceria que estamos construindo por aqui: leve, real e baseada em experiência ' +
              'de verdade, não só em publi.' +
            '</p>' +
            '<p>' +
              'Pra você entender melhor como funciona, deixo aqui o nosso site exclusivo para influencers:<br>' +
              '<a href="https://influ.idiomaindependente.com.br/influencer/" target="_blank">' +
                'influ.idiomaindependente.com.br/influencer/' +
              '</a>' +
            '</p>' +
            '<p>' +
              'Você sente que esse tipo de parceria faz sentido para o seu perfil e para o seu público?' +
            '</p>' +
            '<p>' +
              'Fico no aguardo do seu retorno!' +
            '</p>' +
            '<p>' +
              'Atenciosamente, ' + escapeHtml_(ctx.recruiterName) +
            '</p>' +
          '</div>'
        );
      }
    },
    'ENVIAR EMAIL 02': {
      requiredStage: 'Enviar email 02',
      postSendStage: 'FUP + 03 dias',
      postSendFollowUpDays: 3,
      sentAtCol: APP.BASE_COLS.EMAIL_02_SENT_AT,
      prerequisiteSentAtCol: APP.BASE_COLS.EMAIL_01_SENT_AT,
      buildSubject: function (record) {
        return 'Olá ' + record.name + ', talvez tenha passado em branco da última vez, mas ainda contamos com você…';
      },
      buildHtml: function (ctx, record) {
        return (
          '<div style="font-family: Arial, sans-serif;">' +
            '<p>Oi, ' + escapeHtml_(record.name) + '! Tudo bem?</p>' +
            '<p>' +
              'Imagino que sua rotina esteja corrida e meu e-mail anterior possa ter passado despercebido.' +
            '</p>' +
            '<p>' +
              'Resolvi te escrever novamente porque gostei bastante do seu perfil e realmente acredito que ele pode ' +
              'combinar com o formato das parcerias que construímos aqui na Idioma Independente.' +
            '</p>' +
            '<p>' +
              'Para você visualizar um pouco melhor, deixo aqui uma das campanhas feitas com alguns dos nossos parceiros:<br>' +
              '<a href="https://www.instagram.com/reel/C6CihQVLzo4/?igsh=MWFvcGZvMGg2cTZweQ==" target="_blank">' +
                'https://www.instagram.com/reel/C6CihQVLzo4/?igsh=MWFvcGZvMGg2cTZweQ==' +
              '</a>' +
            '</p>' +
            '<p>' +
              'Você sente que faria sentido conversarmos melhor sobre essa possibilidade?' +
            '</p>' +
            '<p>' +
              'Fico à disposição &#128522;' +
            '</p>' +
            '<p>' +
              'Um abraço,<br>' + escapeHtml_(ctx.recruiterName) +
            '</p>' +
          '</div>'
        );
      }
    },
    'ENVIAR EMAIL 03': {
      requiredStage: 'Enviar email 03',
      postSendStage: 'FUP + 03 dias',
      postSendFollowUpDays: 3,
      sentAtCol: APP.BASE_COLS.EMAIL_03_SENT_AT,
      prerequisiteSentAtCol: APP.BASE_COLS.EMAIL_02_SENT_AT,
      buildSubject: function (record) {
        return 'Olá ' + record.name + ', este é meu último contato sobre a parceria';
      },
      buildHtml: function (ctx, record) {
        return (
          '<div style="font-family: Arial, sans-serif;">' +
            '<p>Oi, ' + escapeHtml_(record.name) + '! Tudo bem?</p>' +
            '<p>' +
              'Antes de encerrar esse contato, achei importante passar por aqui mais uma vez porque o seu perfil ' +
              'realmente chamou atenção e parece estar alinhado com o tipo de parceria que estamos construindo.' +
            '</p>' +
            '<p>' +
              'Acreditamos muito em parcerias genuínas e a longo prazo, e hoje já contamos com creators como ' +
              'Isabella Lacerda (@isabellalacerda_nutri), Fernanda Concon (@fernandaconcon), ' +
              'Ekaterina Puchkova (@katiusha_a_russa), além de outros 500 influencers parceiros.' +
            '</p>' +
            '<p>' +
              'Também mantemos um índice de satisfação de 93 pontos de NPS entre mais de 7000 alunos, o que reforça ' +
              'o cuidado que existe em cada experiência.' +
            '</p>' +
            '<p>' +
              'Caso faça sentido para você conhecer melhor, fico à disposição para explicar com mais calma.' +
            '</p>' +
            '<p>' +
              'Um abraço,<br>' + escapeHtml_(ctx.recruiterName) +
            '</p>' +
          '</div>'
        );
      }
    }
  };
}

function getEmailAutomationConfigForStage_(stage) {
  const configs = getEmailAutomationConfigs_();
  return configs[normalizeText_(stage)] || null;
}

function getBaseValueType_(baseCol) {
  if (
    baseCol === APP.BASE_COLS.ENTRY_TIMESTAMP ||
    baseCol === APP.BASE_COLS.LAST_INTERACTION ||
    baseCol === APP.BASE_COLS.SHOW_DATE ||
    baseCol === APP.BASE_COLS.NEXT_FOLLOWUP ||
    baseCol === APP.BASE_COLS.LAST_STAGE_CHANGE ||
    baseCol === APP.BASE_COLS.EMAIL_01_SENT_AT ||
    baseCol === APP.BASE_COLS.EMAIL_02_SENT_AT ||
    baseCol === APP.BASE_COLS.EMAIL_03_SENT_AT
  ) {
    return 'date';
  }

  return 'text';
}

function hasBaseRowChanged_(oldRow, newRow) {
  for (let baseCol = 1; baseCol <= APP.BASE_HEADERS.length; baseCol += 1) {
    if (!areValuesEqualByType_(oldRow[baseCol - 1], newRow[baseCol - 1], getBaseValueType_(baseCol))) {
      return true;
    }
  }

  return false;
}

function parseInfluencerHandleInput_(value) {
  const rawValue = String(value || '').trim();
  const sanitized = sanitizeInfluencerHandle_(rawValue).trim();

  if (!sanitized) {
    return {
      valid: false,
      sanitized: '',
      error: 'O campo @ é obrigatório.'
    };
  }

  if (/\s/.test(sanitized)) {
    return {
      valid: false,
      sanitized: sanitized,
      error: 'No campo @, remova os espaços e deixe apenas o handle.'
    };
  }

  if (isUrlLike_(sanitized)) {
    return {
      valid: false,
      sanitized: sanitized,
      error: 'No campo @, não informe links ou URLs. Digite apenas o handle.'
    };
  }

  if (!/^[A-Za-z0-9._]+$/.test(sanitized)) {
    return {
      valid: false,
      sanitized: sanitized,
      error: 'No campo @, use apenas letras, números, ponto e underscore.'
    };
  }

  return {
    valid: true,
    sanitized: sanitized,
    error: ''
  };
}

function getPendingSourceOrigin_(sourceKey) {
  if (sourceKey === 'database') return APP.LOG_ORIGINS.DATABASE_UPDATE;
  if (sourceKey === 'crm') return APP.LOG_ORIGINS.CRM_UPDATE;
  if (sourceKey === 'captacao') return APP.LOG_ORIGINS.CAPTACAO_UPDATE;
  if (sourceKey === 'email') return APP.LOG_ORIGINS.EMAIL;
  return APP.LOG_ORIGINS.SYSTEM;
}

function clearSourceMetadataForCols_(meta, cols) {
  cols.forEach(function (baseCol) {
    delete meta.sourceByBaseCol[String(baseCol)];
  });
}

function revertStageRelatedFields_(workingRow, originalRow, meta) {
  [
    APP.BASE_COLS.STAGE,
    APP.BASE_COLS.SHOW_DATE,
    APP.BASE_COLS.NEXT_FOLLOWUP,
    APP.BASE_COLS.CURRENT_PIPELINE
  ].forEach(function (baseCol) {
    workingRow[baseCol - 1] = originalRow[baseCol - 1];
  });

  meta.stageLogValue = '';
  clearSourceMetadataForCols_(meta, [
    APP.BASE_COLS.STAGE,
    APP.BASE_COLS.SHOW_DATE,
    APP.BASE_COLS.NEXT_FOLLOWUP,
    APP.BASE_COLS.CURRENT_PIPELINE
  ]);
}

function ensureManualDateForRecord_(title, message, currentValue) {
  return promptForDate_(title, message, currentValue);
}

function promptForRequiredText_(title, promptMessage, currentValue) {
  const ui = SpreadsheetApp.getUi();
  const currentText = String(currentValue || '').trim();
  const message = promptMessage + (currentText ? '\n\nComentário atual: ' + currentText : '');

  while (true) {
    const response = ui.prompt(title, message, ui.ButtonSet.OK_CANCEL);

    if (response.getSelectedButton() !== ui.Button.OK) {
      return { cancelled: true, text: currentText };
    }

    const typedValue = String(response.getResponseText() || '').trim();
    if (typedValue) {
      return {
        cancelled: false,
        text: typedValue
      };
    }

    ui.alert('Preencha o comentário antes de continuar.');
  }
}

function sendAutomationEmailForRecord_(ctx, record, config) {
  const sendAsInfo = getDefaultSendAsInfo_();
  const gmailAliases = GmailApp.getAliases();
  const htmlMessage = config.buildHtml(ctx, record);
  const htmlBody = htmlMessage + (sendAsInfo.signature ? '<br><br>' + sendAsInfo.signature : '');
  const plainBody = htmlToPlainText_(htmlMessage);
  const subject = config.buildSubject(record);
  const sendOptions = {
    htmlBody: htmlBody
  };

  if (gmailAliases.indexOf(sendAsInfo.email) !== -1) {
    sendOptions.from = sendAsInfo.email;
  }

  GmailApp.sendEmail(record.email, subject, plainBody, sendOptions);
}

function finalizeRecordStageAutomation_(ctx, originalRow, workingRow, meta, issues, counters, options) {
  const originalRecord = recordFromBaseRow_(originalRow);
  let record = recordFromBaseRow_(workingRow);
  const stageSourceKey = meta.sourceByBaseCol[String(APP.BASE_COLS.STAGE)] || '';
  const handleSourceKey = meta.sourceByBaseCol[String(APP.BASE_COLS.HANDLE)] || '';
  const isCaptacaoPipeline = normalizeText_(record.currentPipeline) === normalizeText_(APP.PIPELINES.CAPTACAO);
  const stageChanged = !areValuesEqualByType_(originalRecord.stage, record.stage, 'text');
  const handleChanged = !areValuesEqualByType_(originalRecord.handle, record.handle, 'text');
  const emailConfig = getEmailAutomationConfigForStage_(record.stage);
  const shouldProcessPendingEmailStage = Boolean(
    emailConfig &&
    options.sendEmails &&
    isBlank_(originalRow[emailConfig.sentAtCol - 1])
  );

  if (handleChanged && handleSourceKey) {
    const handleResult = parseInfluencerHandleInput_(record.handle);
    if (!handleResult.valid) {
      issues.push('"' + (record.name || record.id || 'Sem nome') + '": ' + handleResult.error);
      workingRow[APP.BASE_COLS.HANDLE - 1] = originalRow[APP.BASE_COLS.HANDLE - 1];
      clearSourceMetadataForCols_(meta, [APP.BASE_COLS.HANDLE]);
      record = recordFromBaseRow_(workingRow);
    } else {
      workingRow[APP.BASE_COLS.HANDLE - 1] = handleResult.sanitized;
      record = recordFromBaseRow_(workingRow);
    }
  }

  if (!stageChanged && !shouldProcessPendingEmailStage) {
    return;
  }

  if (isCaptacaoPipeline && requiresInfluencerSource_(record.stage) && !record.influencerSource) {
    issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '": preencha "Fonte Do Influencer" antes de usar a etapa "' + record.stage + '".');
    revertStageRelatedFields_(workingRow, originalRow, meta);
    return;
  }

  if (!isCaptacaoPipeline && normalizeText_(record.stage) === normalizeText_('Aula Show')) {
    if (!String(workingRow[APP.BASE_COLS.PROFESSOR - 1] || '').trim()) {
      issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '": escolha o professor antes de usar a etapa "Aula Show".');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    if (isBlank_(workingRow[APP.BASE_COLS.SHOW_DATE - 1])) {
      const promptResult = options.manual
        ? ensureManualDateForRecord_('Aula Show', 'Digite a data da Aula Show no formato DD/MM/AAAA.', originalRow[APP.BASE_COLS.SHOW_DATE - 1])
        : { cancelled: true };

      if (promptResult.cancelled) {
        issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '": defina a data da Aula Show antes de atualizar.');
        revertStageRelatedFields_(workingRow, originalRow, meta);
        return;
      }

      workingRow[APP.BASE_COLS.SHOW_DATE - 1] = promptResult.date;
      meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    }

    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    return;
  }

  if (normalizeText_(record.stage) === normalizeText_('Fup')) {
    if (isBlank_(workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1])) {
      const promptResult = options.manual
        ? ensureManualDateForRecord_('Fup', 'Digite a data do follow-up no formato DD/MM/AAAA.', originalRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1])
        : { cancelled: true };

      if (promptResult.cancelled) {
        issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '": defina a data do follow-up antes de atualizar.');
        revertStageRelatedFields_(workingRow, originalRow, meta);
        return;
      }

      workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = promptResult.date;
      meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    }

    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    return;
  }

  if (isCaptacaoPipeline && normalizeText_(record.stage) === normalizeText_('Primeiro contato feito por msg')) {
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = getDatePlusDays_(new Date(), 1);
    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    return;
  }

  const scheduledFollowUpDays = getScheduledFollowUpDays_(record.stage);
  if (scheduledFollowUpDays !== null) {
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = getDatePlusDays_(new Date(), scheduledFollowUpDays);
    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    return;
  }

  if (isCaptacaoPipeline && normalizeText_(record.stage) === normalizeText_('Enviar para CRM')) {
    workingRow[APP.BASE_COLS.CURRENT_PIPELINE - 1] = APP.PIPELINES.CRM;
    workingRow[APP.BASE_COLS.STAGE - 1] = APP.DEFAULT_CRM_STAGE;
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = '';
    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.CURRENT_PIPELINE)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.STAGE)] = stageSourceKey || 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    meta.stageLogValue = 'Enviar para CRM';
    return;
  }

  if (normalizeText_(record.stage) === normalizeText_('RMKT - Influencer não tem perfil para a Idioma')) {
    const promptResult = options.manual
      ? promptForRequiredText_(
        'RMKT - Influencer não tem perfil para a Idioma',
        'Digite o que aconteceu',
        workingRow[APP.BASE_COLS.OBS - 1]
      )
      : { cancelled: true, text: '' };

    if (promptResult.cancelled) {
      issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '": informe o que aconteceu antes de concluir a etapa "RMKT - Influencer não tem perfil para a Idioma".');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    workingRow[APP.BASE_COLS.OBS - 1] = promptResult.text;
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = '';
    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.OBS)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';
    return;
  }

  if (emailConfig && options.sendEmails) {
    if (!record.email) {
      issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '" não tem email cadastrado no campo Email.');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    if (!isValidEmail_(record.email)) {
      issues.push('"' + (record.name || ('@' + record.handle) || record.id) + '" tem um email inválido no campo Email: ' + record.email + '.');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    if (!record.name) {
      issues.push('"' + (record.handle ? '@' + record.handle : record.id) + '" está sem Nome.');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    if (!isBlank_(originalRow[emailConfig.sentAtCol - 1])) {
      issues.push('"' + record.name + '" já recebeu este envio anteriormente.');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    if (emailConfig.prerequisiteSentAtCol && isBlank_(workingRow[emailConfig.prerequisiteSentAtCol - 1])) {
      issues.push('"' + record.name + '" ainda não recebeu o envio anterior necessário.');
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    try {
      sendAutomationEmailForRecord_(ctx, record, emailConfig);
    } catch (error) {
      issues.push('"' + record.name + '": falha ao enviar email. ' + (error && error.message ? error.message : String(error)));
      revertStageRelatedFields_(workingRow, originalRow, meta);
      return;
    }

    const now = new Date();
    const followUpDate = getDatePlusDays_(now, isCaptacaoPipeline ? 2 : emailConfig.postSendFollowUpDays);
    workingRow[APP.BASE_COLS.EMAIL - 1] = record.email;
    workingRow[emailConfig.sentAtCol - 1] = now;
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = followUpDate;
    workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';

    if (!isCaptacaoPipeline) {
      workingRow[APP.BASE_COLS.STAGE - 1] = emailConfig.postSendStage;
    }

    meta.sourceByBaseCol[String(APP.BASE_COLS.EMAIL)] = 'email';
    meta.sourceByBaseCol[String(emailConfig.sentAtCol)] = 'email';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'email';
    meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'email';
    meta.sourceByBaseCol[String(APP.BASE_COLS.STAGE)] = 'email';
    meta.extraLogs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.SEND_EMAIL,
      id: record.id,
      name: record.name,
      field: emailConfig.requiredStage,
      oldValue: '',
      newValue: 'Email enviado para ' + record.email,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.EMAIL
    }));
    counters.sentEmails += 1;
    return;
  }

  workingRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
  meta.sourceByBaseCol[String(APP.BASE_COLS.SHOW_DATE)] = 'system';

  if (!shouldKeepExistingFollowUpDate_(record.stage)) {
    workingRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = '';
    meta.sourceByBaseCol[String(APP.BASE_COLS.NEXT_FOLLOWUP)] = 'system';
  }
}

function buildLogEntriesForRecordUpdate_(ctx, originalRow, finalRow, meta) {
  const id = String(finalRow[APP.BASE_COLS.ID - 1] || '').trim();
  const name = String(finalRow[APP.BASE_COLS.NAME - 1] || '') || ('@' + String(finalRow[APP.BASE_COLS.HANDLE - 1] || ''));
  const logs = [];

  for (let baseCol = 1; baseCol <= APP.BASE_HEADERS.length; baseCol += 1) {
    if (baseCol === APP.BASE_COLS.LAST_INTERACTION || baseCol === APP.BASE_COLS.ATTENDANT) {
      continue;
    }

    const type = getBaseValueType_(baseCol);
    const oldValue = originalRow[baseCol - 1];
    const newValue = finalRow[baseCol - 1];

    if (areValuesEqualByType_(oldValue, newValue, type)) {
      continue;
    }

    const sourceKey = meta.sourceByBaseCol[String(baseCol)] || 'system';
    const action = baseCol === APP.BASE_COLS.STAGE ? APP.LOG_ACTIONS.UPDATE_STAGE : APP.LOG_ACTIONS.UPDATE_FIELD;
    const loggedNewValue = baseCol === APP.BASE_COLS.STAGE && meta.stageLogValue
      ? meta.stageLogValue
      : newValue;

    logs.push(makeLogRow_({
      action: action,
      id: id,
      name: name,
      field: APP.BASE_HEADERS[baseCol - 1],
      oldValue: oldValue,
      newValue: loggedNewValue,
      attendant: ctx.attendantName,
      origin: getPendingSourceOrigin_(sourceKey)
    }));
  }

  return logs.concat(meta.extraLogs || []);
}

function applyPendingEditsToCommittedRows_(ctx, originalRows, workingRows, pendingById, options) {
  const workingMap = buildBaseRowLookup_(workingRows);
  const originalMap = buildBaseRowLookup_(originalRows);
  const issues = [];
  const logs = [];
  const counters = {
    sentEmails: 0
  };
  let updatedRecords = 0;

  Object.keys(workingMap).forEach(function (id) {
    const originalRow = originalMap[id].row;
    const workingRow = workingMap[id].row;
    const pendingEntry = pendingById[id];
    const meta = {
      sourceByBaseCol: {},
      stageLogValue: '',
      extraLogs: []
    };

    if (pendingEntry) {
      const resolved = resolvePendingValuesForRecord_(pendingEntry);
      applyResolvedPendingValuesToRow_(workingRow, resolved);
      Object.keys(resolved).forEach(function (baseColKey) {
        meta.sourceByBaseCol[baseColKey] = resolved[baseColKey].sourceKey;
      });
    }

    finalizeRecordStageAutomation_(ctx, originalRow, workingRow, meta, issues, counters, options);

    if (!hasBaseRowChanged_(originalRow, workingRow)) {
      return;
    }

    const now = new Date();
    workingRow[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
    if (!areValuesEqualByType_(originalRow[APP.BASE_COLS.STAGE - 1], workingRow[APP.BASE_COLS.STAGE - 1], 'text')) {
      workingRow[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
    }
    workingRow[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;
    updatedRecords += 1;
    logs.push.apply(logs, buildLogEntriesForRecordUpdate_(ctx, originalRow, workingRow, meta));
  });

  return {
    updatedRecords: updatedRecords,
    issues: issues,
    logs: logs,
    sentEmails: counters.sentEmails
  };
}

function atualizarCRM() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      ensureOperationalLayouts_(ctx);
      const originalRows = getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);

      if (!originalRows.length) {
        showToastMessage_('A base local está vazia. Não há registros para atualizar.', 'Atualizar CRM');
        return;
      }

      const workingRows = cloneBaseRows_(originalRows);
      const pendingById = collectPendingEdits_(ctx, originalRows);
      const updateResult = applyPendingEditsToCommittedRows_(ctx, originalRows, workingRows, pendingById, {
        manual: true,
        sendEmails: true
      });

      if (updateResult.updatedRecords > 0) {
        replaceBaseRowsInSheet_(ctx.baseSheet, workingRows);
      }

      if (updateResult.logs.length) {
        appendLogEntries_(ctx.logSheet, updateResult.logs);
      }

      refreshOperationalViews_(ctx, { silent: true, preservePending: false });

      const alertLines = ['Atualização concluída.'];

      if (updateResult.updatedRecords > 0) {
        alertLines.push('Registros atualizados: ' + updateResult.updatedRecords);
      }

      if (updateResult.sentEmails > 0) {
        alertLines.push('Emails enviados: ' + updateResult.sentEmails);
      }

      let alertMessage = alertLines.join('\n\n');

      if (updateResult.issues.length) {
        alertMessage += '\n\nPendências encontradas:\n- ' + updateResult.issues.join('\n- ');
      }

      if (updateResult.issues.length) {
        SpreadsheetApp.getUi().alert(alertMessage);
        return;
      }

      showToastMessage_(alertMessage, 'Atualizar CRM', 8);
    });
  } catch (error) {
    handleError_('atualizarCRM', error);
  }
}

function enviarEmail01Selecionados() {
  showToastMessage_('Os envios de email agora são processados exclusivamente pela automação "Atualizar CRM".', 'Automações CRM', 8);
}

function enviarEmail02Selecionados() {
  showToastMessage_('Os envios de email agora são processados exclusivamente pela automação "Atualizar CRM".', 'Automações CRM', 8);
}

function enviarEmailsSelecionados_(config) {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      ensureOperationalLayouts_(ctx);
      const activeSheet = ctx.ss.getActiveSheet();
      const isCRMSelection = activeSheet.getSheetId() === ctx.crmSheet.getSheetId();
      const isCaptacaoSelection = activeSheet.getSheetId() === ctx.captacaoSheet.getSheetId();
      const selectionSheetName = isCaptacaoSelection ? APP.SHEETS.CAPTACAO : APP.SHEETS.CRM;

      if (!isCRMSelection && !isCaptacaoSelection) {
        throw new Error('Selecione as linhas diretamente na aba "CRM" ou "Captação" antes de enviar os e-mails.');
      }

      const selectedRows = getSelectedCRMRowNumbers_(
        ctx.ss,
        isCaptacaoSelection ? APP.CAPTACAO_LAYOUT.TABLE_DATA_START_ROW : getCRMDataStartRow_(ctx.crmSheet)
      );
      if (!selectedRows.length) {
        throw new Error('Selecione ao menos uma linha de dados da aba "' + selectionSheetName + '" para enviar os e-mails.');
      }

      const baseRows = getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
      if (!baseRows.length) {
        throw new Error('A base local está vazia. Não há registros para enviar.');
      }

      const baseMap = {};
      baseRows.forEach(function (row, index) {
        const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
        if (id) {
          baseMap[id] = {
            baseArrayIndex: index,
            row: row
          };
        }
      });

      const sendAsInfo = getDefaultSendAsInfo_();
      const validationErrors = [];
      const candidates = [];

      selectedRows.forEach(function (rowNumber) {
        const selectedRow = isCaptacaoSelection
          ? ctx.captacaoSheet.getRange(rowNumber, APP.CAPTACAO_COLS.HANDLE, 1, APP.CAPTACAO_HEADERS.length).getValues()[0]
          : ctx.crmSheet.getRange(rowNumber, 1, 1, APP.CRM_HEADERS.length).getValues()[0];

        if (isCRMRowCompletelyBlank_(selectedRow)) {
          return;
        }

        const id = String(
          isCaptacaoSelection
            ? (selectedRow[APP.CAPTACAO_HEADERS.length - 1] || '')
            : (selectedRow[APP.CRM_COLS.ID - 1] || '')
        ).trim();
        const stage = String(
          isCaptacaoSelection
            ? (selectedRow[APP.CAPTACAO_COLS.STAGE - APP.CAPTACAO_COLS.HANDLE] || '')
            : (selectedRow[APP.CRM_COLS.STAGE - 1] || '')
        ).trim();
        const name = String(
          isCaptacaoSelection
            ? (selectedRow[APP.CAPTACAO_COLS.NAME - APP.CAPTACAO_COLS.HANDLE] || '')
            : (selectedRow[APP.CRM_COLS.NAME - 1] || '')
        ).trim();
        const email = String(
          isCaptacaoSelection
            ? (selectedRow[APP.CAPTACAO_COLS.EMAIL - APP.CAPTACAO_COLS.HANDLE] || '')
            : (selectedRow[APP.CRM_COLS.EMAIL - 1] || '')
        ).trim();
        const displayLabel = name || String(
          isCaptacaoSelection
            ? (selectedRow[APP.CAPTACAO_COLS.HANDLE - APP.CAPTACAO_COLS.HANDLE] || '')
            : (selectedRow[APP.CRM_COLS.HANDLE - 1] || '')
        ).trim() || ('Linha ' + rowNumber);

        if (!id) {
          validationErrors.push('Linha ' + rowNumber + ' da aba "' + selectionSheetName + '" está sem ID.');
          return;
        }

        const baseEntry = baseMap[id];
        if (!baseEntry) {
          validationErrors.push('"' + displayLabel + '" não foi encontrado no Banco de Dados.');
          return;
        }

        if (!isAllowedEmailTriggerStage_(stage, config.requiredStage, config.legacyRequiredStage)) {
          validationErrors.push(
            '"' + displayLabel + '" está na etapa "' + stage +
            '". Para este envio, a etapa precisa ser "' + config.requiredStage + '".'
          );
          return;
        }

        if (!email) {
          validationErrors.push('"' + displayLabel + '" não tem email cadastrado no campo Email.');
          return;
        }

        if (!isValidEmail_(email)) {
          validationErrors.push('"' + displayLabel + '" tem um email inválido no campo Email: ' + email + '.');
          return;
        }

        if (!name) {
          validationErrors.push('Linha ' + rowNumber + ' da aba "' + selectionSheetName + '" está sem Nome.');
          return;
        }

        if (!isBlank_(baseEntry.row[config.sentAtCol - 1])) {
          validationErrors.push(
            '"' + name + '" já recebeu este envio em ' +
            Utilities.formatDate(
              new Date(baseEntry.row[config.sentAtCol - 1]),
              Session.getScriptTimeZone(),
              'dd/MM/yyyy HH:mm:ss'
            ) + '.'
          );
          return;
        }

        if (config.prerequisiteSentAtCol && isBlank_(baseEntry.row[config.prerequisiteSentAtCol - 1])) {
          validationErrors.push('"' + name + '" ainda não recebeu o Email 01. Envie o primeiro e-mail antes do segundo.');
          return;
        }

        candidates.push({
          rowNumber: rowNumber,
          id: id,
          name: name,
          email: email,
          isCaptacao: isCaptacaoSelection,
          baseEntry: baseEntry
        });
      });

      if (!candidates.length && !validationErrors.length) {
        throw new Error('Nenhuma linha válida foi encontrada na seleção atual da aba "' + selectionSheetName + '".');
      }

      if (validationErrors.length) {
        throw new Error('Não foi possível enviar os e-mails selecionados:\n\n- ' + validationErrors.join('\n- '));
      }

      let sentCount = 0;
      const gmailAliases = GmailApp.getAliases();

      try {
        candidates.forEach(function (candidate) {
          const htmlMessage = config.buildHtml(ctx, candidate);
          const htmlBody = htmlMessage + (sendAsInfo.signature ? '<br><br>' + sendAsInfo.signature : '');
          const plainBody = htmlToPlainText_(htmlMessage);
          const subject = config.buildSubject(candidate);
          const now = new Date();
          const postSendStage = candidate.isCaptacao ? config.requiredStage : config.postSendStage;
          const followUpDate = getDatePlusDays_(now, candidate.isCaptacao ? 2 : (config.postSendFollowUpDays || 0));
          const baseRow = candidate.baseEntry.row;
          const logs = [];
          const oldEmail = baseRow[APP.BASE_COLS.EMAIL - 1];
          const oldStage = baseRow[APP.BASE_COLS.STAGE - 1];
          const oldNextFollowUp = baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1];
          const sendOptions = {
            htmlBody: htmlBody
          };

          if (gmailAliases.indexOf(sendAsInfo.email) !== -1) {
            sendOptions.from = sendAsInfo.email;
          }

          GmailApp.sendEmail(candidate.email, subject, plainBody, sendOptions);

          if (!areValuesEqualByType_(oldEmail, candidate.email, 'text')) {
            logs.push(makeLogRow_({
              action: APP.LOG_ACTIONS.UPDATE_FIELD,
              id: candidate.id,
              name: candidate.name,
              field: 'Email',
              oldValue: oldEmail,
              newValue: candidate.email,
              attendant: ctx.attendantName,
              origin: APP.LOG_ORIGINS.EMAIL
            }));
          }

          if (!areValuesEqualByType_(oldStage, postSendStage, 'text')) {
            logs.push(makeLogRow_({
              action: APP.LOG_ACTIONS.UPDATE_STAGE,
              id: candidate.id,
              name: candidate.name,
              field: 'Etapa / Status',
              oldValue: oldStage,
              newValue: postSendStage,
              attendant: ctx.attendantName,
              origin: APP.LOG_ORIGINS.EMAIL
            }));
          }

          if (!areValuesEqualByType_(oldNextFollowUp, followUpDate, 'date')) {
            logs.push(makeLogRow_({
              action: APP.LOG_ACTIONS.UPDATE_FIELD,
              id: candidate.id,
              name: candidate.name,
              field: 'Próxima Data / Follow-up',
              oldValue: oldNextFollowUp,
              newValue: followUpDate,
              attendant: ctx.attendantName,
              origin: APP.LOG_ORIGINS.EMAIL
            }));
          }

          baseRow[APP.BASE_COLS.EMAIL - 1] = candidate.email;
          baseRow[APP.BASE_COLS.STAGE - 1] = postSendStage;
          baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = followUpDate;
          baseRow[config.sentAtCol - 1] = now;
          baseRow[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
          if (!areValuesEqualByType_(oldStage, postSendStage, 'text')) {
            baseRow[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
          }
          baseRow[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;

          logs.push(makeLogRow_({
            action: APP.LOG_ACTIONS.SEND_EMAIL,
            id: candidate.id,
            name: candidate.name,
            field: config.requiredStage,
            oldValue: '',
            newValue: 'Email enviado para ' + candidate.email,
            attendant: ctx.attendantName,
            origin: APP.LOG_ORIGINS.EMAIL
          }));

          ctx.baseSheet
            .getRange(candidate.baseEntry.baseArrayIndex + 2, 1, 1, APP.BASE_HEADERS.length)
            .setValues([baseRow]);
          appendLogEntries_(ctx.logSheet, logs);
          sentCount++;
        });
      } catch (error) {
        montarCaptacao_Interno_(ctx, { silent: true });
        refreshCRMView_Interno_(ctx, { silent: true });
        montarBancoDeDados_Interno_(ctx, { silent: true });
        throw new Error(
          (sentCount ? sentCount + ' e-mail(s) foram enviados antes da falha.\n\n' : '') +
          (error && error.message ? error.message : String(error))
        );
      }

      montarCaptacao_Interno_(ctx, { silent: true });
      refreshCRMView_Interno_(ctx, { silent: true });
      montarBancoDeDados_Interno_(ctx, { silent: true });

      showToastMessage_(
        config.successTitle + '\n\n' +
        'Total enviado: ' + sentCount,
        'Automações CRM',
        8
      );
    });
  } catch (error) {
    handleError_(config.functionName, error);
  }
}

function montarBancoDeDados() {
  try {
    runWithDocumentLock_(function () {
      const ctx = getContext_({ createMissing: false });
      refreshOperationalViews_(ctx, { silent: false, target: 'database', preservePending: true });
    });
  } catch (error) {
    handleError_('montarBancoDeDados', error);
  }
}

function montarBancoDeDados_Interno_(ctx, options) {
  const silent = Boolean(options && options.silent);
  const baseRows = (options && options.baseRowsOverride) || getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);

  ctx.databaseSheet.getRange(1, 1, 1, APP.BASE_HEADERS.length).setValues([APP.BASE_HEADERS]);
  ctx.databaseSheet.getRange('AA:AA').setNumberFormat('@STRING@');
  ctx.databaseSheet.getRange('Z:Z').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  ctx.databaseSheet.getRange('AB:AD').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  ctx.databaseSheet.hideColumns(APP.BASE_COLS.EMAIL_01_SENT_AT, 3);
  clearSheetBody_(ctx.databaseSheet, APP.BASE_HEADERS.length);

  if (!baseRows.length) {
    reaplicarValidacoesBancoDeDados_Interno_(ctx.databaseSheet, ctx.legendSheet);
    if (!silent) {
      showToastMessage_('A base local está vazia. Nada foi enviado para o Banco De Dados.', 'Montar Banco De Dados');
    }
    return;
  }

  ctx.databaseSheet
    .getRange(2, 1, baseRows.length, APP.BASE_HEADERS.length)
    .setValues(baseRows);

  reaplicarValidacoesBancoDeDados_Interno_(ctx.databaseSheet, ctx.legendSheet);

  if (!silent) {
    showToastMessage_(
      'Banco De Dados montado com sucesso.\n\n' +
      'Total de registros: ' + baseRows.length,
      'Montar Banco De Dados',
      8
    );
  }
}

function atualizarBancoDeDados() {
  atualizarCRM();
}

function maybeHandleStageSelection_(params) {
  const sheet = params.sheet;
  const rowNumber = params.rowNumber;
  const stageColumn = params.stageColumn;
  const professorColumn = params.professorColumn;
  const showDateColumn = params.showDateColumn;
  const nextFollowUpColumn = params.nextFollowUpColumn;
  const oldStageValue = params.oldStageValue;

  const newStageValue = String(sheet.getRange(rowNumber, stageColumn).getDisplayValue() || '').trim();
  const normalizedStage = normalizeText_(newStageValue);
  const oldShowDate = sheet.getRange(rowNumber, showDateColumn).getValue();
  const oldNextFollowUp = sheet.getRange(rowNumber, nextFollowUpColumn).getValue();
  let newShowDate = oldShowDate;
  let newNextFollowUp = oldNextFollowUp;

  if (isAulaShowStage_(newStageValue)) {
    if (professorColumn && !String(sheet.getRange(rowNumber, professorColumn).getDisplayValue() || '').trim()) {
      SpreadsheetApp.getUi().alert('Escolha o professor antes de usar a etapa "Aula Show".');
      sheet.getRange(rowNumber, stageColumn).setValue(oldStageValue || '');
      return { cancelled: true };
    }

    const promptResult = promptForDate_('Aula Show', 'Digite a data da Aula Show no formato DD/MM/AAAA.', oldShowDate);

    if (promptResult.cancelled) {
      sheet.getRange(rowNumber, stageColumn).setValue(oldStageValue || '');
      return { cancelled: true };
    }

    sheet.getRange(rowNumber, stageColumn).setValue('Aula Show');
    newShowDate = promptResult.date;
    sheet.getRange(rowNumber, showDateColumn).setValue(newShowDate);

    if (!isBlank_(oldNextFollowUp)) {
      newNextFollowUp = '';
      sheet.getRange(rowNumber, nextFollowUpColumn).clearContent();
    }
  } else if (normalizedStage === normalizeText_('Fup')) {
    const promptResult = promptForDate_('Fup', 'Digite a data do follow-up no formato DD/MM/AAAA.', oldNextFollowUp);

    if (promptResult.cancelled) {
      sheet.getRange(rowNumber, stageColumn).setValue(oldStageValue || '');
      return { cancelled: true };
    }

    sheet.getRange(rowNumber, stageColumn).setValue('Fup');
    newNextFollowUp = promptResult.date;
    sheet.getRange(rowNumber, nextFollowUpColumn).setValue(newNextFollowUp);

    if (!isBlank_(oldShowDate)) {
      newShowDate = '';
      sheet.getRange(rowNumber, showDateColumn).clearContent();
    }
  } else {
    const scheduledFollowUpDays = getScheduledFollowUpDays_(newStageValue);

    if (scheduledFollowUpDays === null) {
      if (isBlank_(oldShowDate) && isBlank_(oldNextFollowUp)) {
        return null;
      }

      if (!isBlank_(oldShowDate)) {
        newShowDate = '';
        sheet.getRange(rowNumber, showDateColumn).clearContent();
      }

      if (!isBlank_(oldNextFollowUp) && !shouldKeepExistingFollowUpDate_(newStageValue)) {
        newNextFollowUp = '';
        sheet.getRange(rowNumber, nextFollowUpColumn).clearContent();
      }

      return {
        cancelled: false,
        oldShowDate: oldShowDate,
        newShowDate: newShowDate,
        showDateChanged: !areValuesEqualByType_(oldShowDate, newShowDate, 'date'),
        oldNextFollowUp: oldNextFollowUp,
        newNextFollowUp: newNextFollowUp,
        nextFollowUpChanged: !areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date')
      };
    }

    sheet.getRange(rowNumber, stageColumn).setValue(formatScheduledFollowUpStage_(scheduledFollowUpDays));
    newNextFollowUp = getDatePlusDays_(new Date(), scheduledFollowUpDays);
    sheet.getRange(rowNumber, nextFollowUpColumn).setValue(newNextFollowUp);

    if (!isBlank_(oldShowDate)) {
      newShowDate = '';
      sheet.getRange(rowNumber, showDateColumn).clearContent();
    }
  }

  return {
    cancelled: false,
    oldShowDate: oldShowDate,
    newShowDate: newShowDate,
    showDateChanged: !areValuesEqualByType_(oldShowDate, newShowDate, 'date'),
    oldNextFollowUp: oldNextFollowUp,
    newNextFollowUp: newNextFollowUp,
    nextFollowUpChanged: !areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date')
  };
}

function maybeHandleCaptacaoStageSelection_(params) {
  const sheet = params.sheet;
  const rowNumber = params.rowNumber;
  const oldStageValue = params.oldStageValue;
  const baseRow = params.baseRow;
  const newStageValue = String(sheet.getRange(rowNumber, APP.CAPTACAO_COLS.STAGE).getDisplayValue() || '').trim();
  const sourceValue = String(sheet.getRange(rowNumber, APP.CAPTACAO_COLS.SOURCE).getDisplayValue() || '').trim();
  const oldNextFollowUp = baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1];
  let newNextFollowUp = oldNextFollowUp;
  let storedStage = newStageValue;
  let moveToCRM = false;

  if (requiresInfluencerSource_(newStageValue) && !sourceValue) {
    SpreadsheetApp.getUi().alert(
      'Preencha "Fonte Do Influencer" antes de usar a etapa "' + newStageValue + '".'
    );
    sheet.getRange(rowNumber, APP.CAPTACAO_COLS.STAGE).setValue(oldStageValue || getCaptacaoStage_(recordFromBaseRow_(baseRow)));
    return { cancelled: true };
  }

  if (normalizeText_(newStageValue) === normalizeText_('Fup')) {
    const promptResult = promptForDate_('Fup', 'Digite a data do follow-up no formato DD/MM/AAAA.', oldNextFollowUp);

    if (promptResult.cancelled) {
      sheet.getRange(rowNumber, APP.CAPTACAO_COLS.STAGE).setValue(oldStageValue || getCaptacaoStage_(recordFromBaseRow_(baseRow)));
      return { cancelled: true };
    }

    storedStage = 'Fup';
    newNextFollowUp = promptResult.date;
  } else if (normalizeText_(newStageValue) === normalizeText_('Primeiro contato feito por msg')) {
    newNextFollowUp = getDatePlusDays_(new Date(), 1);
  } else if (
    normalizeText_(newStageValue) === normalizeText_('Enviar email 01') ||
    normalizeText_(newStageValue) === normalizeText_('Enviar email 02') ||
    normalizeText_(newStageValue) === normalizeText_('Enviar email 03')
  ) {
    newNextFollowUp = getDatePlusDays_(new Date(), 2);
  } else {
    newNextFollowUp = '';
  }

  if (normalizeText_(newStageValue) === normalizeText_('Enviar para CRM')) {
    moveToCRM = true;
  }

  return {
    cancelled: false,
    storedStage: storedStage,
    moveToCRM: moveToCRM,
    oldNextFollowUp: oldNextFollowUp,
    newNextFollowUp: newNextFollowUp,
    nextFollowUpChanged: !areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date')
  };
}

function maybeHandleDatabaseCaptacaoStageSelection_(params) {
  const sheet = params.sheet;
  const rowNumber = params.rowNumber;
  const oldStageValue = params.oldStageValue;
  const newStageValue = String(sheet.getRange(rowNumber, APP.BASE_COLS.STAGE).getDisplayValue() || '').trim();
  const sourceValue = String(sheet.getRange(rowNumber, APP.BASE_COLS.INFLUENCER_SOURCE).getDisplayValue() || '').trim();
  const oldShowDate = sheet.getRange(rowNumber, APP.BASE_COLS.SHOW_DATE).getValue();
  const oldNextFollowUp = sheet.getRange(rowNumber, APP.BASE_COLS.NEXT_FOLLOWUP).getValue();
  const oldPipeline = String(sheet.getRange(rowNumber, APP.BASE_COLS.CURRENT_PIPELINE).getDisplayValue() || '').trim();
  let newShowDate = oldShowDate;
  let newNextFollowUp = oldNextFollowUp;
  let newPipeline = oldPipeline || APP.PIPELINES.CAPTACAO;
  let logNewStage = newStageValue;

  if (requiresInfluencerSource_(newStageValue) && !sourceValue) {
    SpreadsheetApp.getUi().alert(
      'Preencha "Fonte Do Influencer" antes de usar a etapa "' + newStageValue + '".'
    );
    sheet.getRange(rowNumber, APP.BASE_COLS.STAGE).setValue(oldStageValue || '');
    return { cancelled: true };
  }

  if (normalizeText_(newStageValue) === normalizeText_('Fup')) {
    const promptResult = promptForDate_('Fup', 'Digite a data do follow-up no formato DD/MM/AAAA.', oldNextFollowUp);

    if (promptResult.cancelled) {
      sheet.getRange(rowNumber, APP.BASE_COLS.STAGE).setValue(oldStageValue || '');
      return { cancelled: true };
    }

    sheet.getRange(rowNumber, APP.BASE_COLS.STAGE).setValue('Fup');
    newNextFollowUp = promptResult.date;
    sheet.getRange(rowNumber, APP.BASE_COLS.NEXT_FOLLOWUP).setValue(newNextFollowUp);
  } else if (normalizeText_(newStageValue) === normalizeText_('Primeiro contato feito por msg')) {
    newNextFollowUp = getDatePlusDays_(new Date(), 1);
    sheet.getRange(rowNumber, APP.BASE_COLS.NEXT_FOLLOWUP).setValue(newNextFollowUp);
  } else if (
    normalizeText_(newStageValue) === normalizeText_('Enviar email 01') ||
    normalizeText_(newStageValue) === normalizeText_('Enviar email 02') ||
    normalizeText_(newStageValue) === normalizeText_('Enviar email 03')
  ) {
    newNextFollowUp = getDatePlusDays_(new Date(), 2);
    sheet.getRange(rowNumber, APP.BASE_COLS.NEXT_FOLLOWUP).setValue(newNextFollowUp);
  } else {
    newNextFollowUp = '';
    sheet.getRange(rowNumber, APP.BASE_COLS.NEXT_FOLLOWUP).clearContent();
  }

  if (!isBlank_(oldShowDate)) {
    newShowDate = '';
    sheet.getRange(rowNumber, APP.BASE_COLS.SHOW_DATE).clearContent();
  }

  if (normalizeText_(newStageValue) === normalizeText_('Enviar para CRM')) {
    newPipeline = APP.PIPELINES.CRM;
    logNewStage = 'Enviar para CRM';
    sheet.getRange(rowNumber, APP.BASE_COLS.CURRENT_PIPELINE).setValue(newPipeline);
    sheet.getRange(rowNumber, APP.BASE_COLS.STAGE).setValue(APP.DEFAULT_CRM_STAGE);
  } else if (!oldPipeline) {
    sheet.getRange(rowNumber, APP.BASE_COLS.CURRENT_PIPELINE).setValue(APP.PIPELINES.CAPTACAO);
  }

  return {
    cancelled: false,
    oldShowDate: oldShowDate,
    newShowDate: newShowDate,
    showDateChanged: !areValuesEqualByType_(oldShowDate, newShowDate, 'date'),
    oldNextFollowUp: oldNextFollowUp,
    newNextFollowUp: newNextFollowUp,
    nextFollowUpChanged: !areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date'),
    oldPipeline: oldPipeline,
    newPipeline: newPipeline,
    pipelineChanged: !areValuesEqualByType_(oldPipeline, newPipeline, 'text'),
    logNewStage: logNewStage
  };
}

function promptForDate_(title, promptMessage, currentDateValue) {
  const ui = SpreadsheetApp.getUi();
  const currentDateText = formatDateForPrompt_(currentDateValue);
  const message = promptMessage + (currentDateText ? '\n\nData atual: ' + currentDateText : '');

  while (true) {
    const response = ui.prompt(title, message, ui.ButtonSet.OK_CANCEL);

    if (response.getSelectedButton() !== ui.Button.OK) {
      return { cancelled: true };
    }

    const typedValue = String(response.getResponseText() || '').trim();
    const parsedDate = parseBrazilianDateStrict_(typedValue);

    if (parsedDate) {
      return {
        cancelled: false,
        date: parsedDate
      };
    }

    ui.alert('Data inválida. Use o formato DD/MM/AAAA.');
  }
}

function syncCRMRowStageToBase_(ctx, crmRowNumber) {
  const crmRow = ctx.crmSheet.getRange(crmRowNumber, 1, 1, APP.CRM_HEADERS.length).getValues()[0];
  const id = String(crmRow[APP.CRM_COLS.ID - 1] || '').trim();
  if (!id) return;

  const baseRows = getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
  let baseArrayIndex = -1;

  for (let i = 0; i < baseRows.length; i++) {
    if (String(baseRows[i][APP.BASE_COLS.ID - 1] || '').trim() === id) {
      baseArrayIndex = i;
      break;
    }
  }

  if (baseArrayIndex === -1) return;

  const baseRow = baseRows[baseArrayIndex];
  const newStage = normalizeValueByType_(
    crmRow[APP.CRM_COLS.STAGE - 1],
    'text',
    crmRowNumber,
    'Etapa / Status'
  );
  const newProfessor = normalizeValueByType_(
    crmRow[APP.CRM_COLS.PROFESSOR - 1],
    'text',
    crmRowNumber,
    'Professor'
  );
  const newShowDate = normalizeValueByType_(
    crmRow[APP.CRM_COLS.SHOW_DATE - 1],
    'date',
    crmRowNumber,
    'Data Aula Show'
  );
  const newNextFollowUp = normalizeValueByType_(
    crmRow[APP.CRM_COLS.NEXT_FOLLOWUP - 1],
    'date',
    crmRowNumber,
    'Próxima Data / Follow-up'
  );
  const logs = [];
  const oldStage = baseRow[APP.BASE_COLS.STAGE - 1];
  const oldProfessor = baseRow[APP.BASE_COLS.PROFESSOR - 1];
  const oldShowDate = baseRow[APP.BASE_COLS.SHOW_DATE - 1];
  const oldNextFollowUp = baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1];

  if (!areValuesEqualByType_(oldStage, newStage, 'text')) {
    baseRow[APP.BASE_COLS.STAGE - 1] = newStage;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_STAGE,
      id: id,
      name: String(baseRow[APP.BASE_COLS.NAME - 1] || ''),
      field: 'Etapa / Status',
      oldValue: oldStage,
      newValue: newStage,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CRM_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldProfessor, newProfessor, 'text')) {
    baseRow[APP.BASE_COLS.PROFESSOR - 1] = newProfessor;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: String(baseRow[APP.BASE_COLS.NAME - 1] || ''),
      field: 'Professor',
      oldValue: oldProfessor,
      newValue: newProfessor,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CRM_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldShowDate, newShowDate, 'date')) {
    baseRow[APP.BASE_COLS.SHOW_DATE - 1] = newShowDate;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: String(baseRow[APP.BASE_COLS.NAME - 1] || ''),
      field: 'Data Aula Show',
      oldValue: oldShowDate,
      newValue: newShowDate,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CRM_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date')) {
    baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = newNextFollowUp;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: String(baseRow[APP.BASE_COLS.NAME - 1] || ''),
      field: 'Próxima Data / Follow-up',
      oldValue: oldNextFollowUp,
      newValue: newNextFollowUp,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CRM_UPDATE
    }));
  }

  if (!logs.length) return;

  const now = new Date();
  baseRow[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
  if (!areValuesEqualByType_(oldStage, newStage, 'text')) {
    baseRow[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
  }
  baseRow[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;

  ctx.baseSheet
    .getRange(baseArrayIndex + 2, 1, 1, APP.BASE_HEADERS.length)
    .setValues([baseRow]);

  appendLogEntries_(ctx.logSheet, logs);
}

function syncCaptacaoRowToBase_(ctx, captacaoRowNumber, baseLookup, stageContext) {
  const captacaoRow = ctx.captacaoSheet
    .getRange(captacaoRowNumber, APP.CAPTACAO_COLS.HANDLE, 1, APP.CAPTACAO_HEADERS.length)
    .getValues()[0];
  const baseRow = baseLookup.row;
  const id = String(baseRow[APP.BASE_COLS.ID - 1] || '').trim();
  const now = new Date();
  const logs = [];
  const oldRecord = recordFromBaseRow_(baseRow);
  const oldHandle = oldRecord.handle;
  const oldName = oldRecord.name;
  const oldEmail = oldRecord.email;
  const oldSource = oldRecord.influencerSource;
  const oldStage = oldRecord.stage;
  const oldPipeline = oldRecord.currentPipeline;
  const oldNextFollowUp = oldRecord.nextFollowUp;
  const newHandle = sanitizeInfluencerHandle_(captacaoRow[0]).trim();
  const newName = String(captacaoRow[1] || '').trim();
  const newEmail = String(captacaoRow[2] || '').trim();
  const newSource = String(captacaoRow[APP.CAPTACAO_COLS.SOURCE - APP.CAPTACAO_COLS.HANDLE] || '').trim();
  const newStage = stageContext
    ? (stageContext.moveToCRM ? APP.DEFAULT_CRM_STAGE : stageContext.storedStage)
    : oldStage;
  const newPipeline = stageContext && stageContext.moveToCRM
    ? APP.PIPELINES.CRM
    : (oldPipeline || APP.PIPELINES.CAPTACAO);
  const newNextFollowUp = stageContext ? stageContext.newNextFollowUp : oldNextFollowUp;

  if (newHandle && !areValuesEqualByType_(oldHandle, newHandle, 'text')) {
    baseRow[APP.BASE_COLS.HANDLE - 1] = newHandle;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: newName || ('@' + newHandle),
      field: '@',
      oldValue: oldHandle,
      newValue: newHandle,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldName, newName, 'text')) {
    baseRow[APP.BASE_COLS.NAME - 1] = newName;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: newName || ('@' + (newHandle || oldHandle)),
      field: 'Nome',
      oldValue: oldName,
      newValue: newName,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldEmail, newEmail, 'text')) {
    baseRow[APP.BASE_COLS.EMAIL - 1] = newEmail;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: newName || ('@' + (newHandle || oldHandle)),
      field: 'Email',
      oldValue: oldEmail,
      newValue: newEmail,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
    }));
  }

  if (!areValuesEqualByType_(oldSource, newSource, 'text')) {
    baseRow[APP.BASE_COLS.INFLUENCER_SOURCE - 1] = newSource;
    logs.push(makeLogRow_({
      action: APP.LOG_ACTIONS.UPDATE_FIELD,
      id: id,
      name: newName || ('@' + (newHandle || oldHandle)),
      field: 'Fonte Do Influencer',
      oldValue: oldSource,
      newValue: newSource,
      attendant: ctx.attendantName,
      origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
    }));
  }

  if (stageContext) {
    if (stageContext.moveToCRM) {
      logs.push(makeLogRow_({
        action: APP.LOG_ACTIONS.UPDATE_STAGE,
        id: id,
        name: newName || ('@' + (newHandle || oldHandle)),
        field: 'Etapa / Status',
        oldValue: oldStage,
        newValue: 'Enviar para CRM',
        attendant: ctx.attendantName,
        origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
      }));
    } else if (!areValuesEqualByType_(oldStage, stageContext.storedStage, 'text')) {
      logs.push(makeLogRow_({
        action: APP.LOG_ACTIONS.UPDATE_STAGE,
        id: id,
        name: newName || ('@' + (newHandle || oldHandle)),
        field: 'Etapa / Status',
        oldValue: oldStage,
        newValue: stageContext.storedStage,
        attendant: ctx.attendantName,
        origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
      }));
    }

    if (!areValuesEqualByType_(oldPipeline, newPipeline, 'text')) {
      baseRow[APP.BASE_COLS.CURRENT_PIPELINE - 1] = newPipeline;
      logs.push(makeLogRow_({
        action: APP.LOG_ACTIONS.UPDATE_FIELD,
        id: id,
        name: newName || ('@' + (newHandle || oldHandle)),
        field: 'Fluxo Atual',
        oldValue: oldPipeline,
        newValue: newPipeline,
        attendant: ctx.attendantName,
        origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
      }));
    }

    if (!areValuesEqualByType_(oldNextFollowUp, newNextFollowUp, 'date')) {
      baseRow[APP.BASE_COLS.NEXT_FOLLOWUP - 1] = newNextFollowUp;
      logs.push(makeLogRow_({
        action: APP.LOG_ACTIONS.UPDATE_FIELD,
        id: id,
        name: newName || ('@' + (newHandle || oldHandle)),
        field: 'Próxima Data / Follow-up',
        oldValue: oldNextFollowUp,
        newValue: newNextFollowUp,
        attendant: ctx.attendantName,
        origin: APP.LOG_ORIGINS.CAPTACAO_UPDATE
      }));
    }

    baseRow[APP.BASE_COLS.STAGE - 1] = newStage;
    baseRow[APP.BASE_COLS.SHOW_DATE - 1] = '';
  }

  if (!logs.length) {
    return;
  }

  if (!baseRow[APP.BASE_COLS.CURRENT_PIPELINE - 1]) {
    baseRow[APP.BASE_COLS.CURRENT_PIPELINE - 1] = APP.PIPELINES.CAPTACAO;
  }
  if (!baseRow[APP.BASE_COLS.RECORD_ORIGIN - 1]) {
    baseRow[APP.BASE_COLS.RECORD_ORIGIN - 1] = APP.PIPELINES.CAPTACAO;
  }

  baseRow[APP.BASE_COLS.LAST_INTERACTION - 1] = now;
  if (stageContext && !areValuesEqualByType_(oldStage, newStage, 'text')) {
    baseRow[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] = now;
  }
  baseRow[APP.BASE_COLS.ATTENDANT - 1] = ctx.attendantName;

  ctx.baseSheet
    .getRange(baseLookup.baseArrayIndex + 2, 1, 1, APP.BASE_HEADERS.length)
    .setValues([baseRow]);

  appendLogEntries_(ctx.logSheet, logs);
}

function findBaseRowById_(baseSheet, id) {
  const baseRows = getSheetDataRows_(baseSheet, APP.BASE_HEADERS.length);

  for (let i = 0; i < baseRows.length; i++) {
    if (String(baseRows[i][APP.BASE_COLS.ID - 1] || '').trim() === String(id || '').trim()) {
      return {
        baseArrayIndex: i,
        row: baseRows[i]
      };
    }
  }

  return null;
}

function shouldKeepExistingFollowUpDate_(stage) {
  return false;
}

function getScheduledFollowUpDays_(stage) {
  const normalizedStage = normalizeText_(stage);
  const scheduleMap = {
    'FUP + 03 DIAS': 3,
    'FUP + 07 DIAS': 7,
    'FUP + 14 DIAS': 14,
    'FUP + 30 DIAS': 30
  };

  return Object.prototype.hasOwnProperty.call(scheduleMap, normalizedStage)
    ? scheduleMap[normalizedStage]
    : null;
}

function formatScheduledFollowUpStage_(days) {
  const paddedDays = Number(days) < 10 ? '0' + Number(days) : String(Number(days));
  return 'FUP + ' + paddedDays + ' dias';
}

function isScheduledFollowUpStage_(stage) {
  return normalizeText_(stage) === normalizeText_('Fup') ||
    getScheduledFollowUpDays_(stage) !== null;
}

function promptForAulaShowDate_(currentDateValue) {
  return promptForDate_('Aula Show', 'Digite a data da Aula Show no formato DD/MM/AAAA.', currentDateValue);
}

function syncCRMRowAulaShowToBase_(ctx, crmRowNumber) {
  syncCRMRowStageToBase_(ctx, crmRowNumber);
}

function maybeHandleAulaShowSelection_(params) {
  return maybeHandleStageSelection_(params);
}

function isCRMRowCompletelyBlank_(row) {
  return row.every(function (value) {
    return isBlank_(value);
  });
}

function recordFromBaseRow_(row) {
  return {
    id: String(row[APP.BASE_COLS.ID - 1] || '').trim(),
    entryTimestamp: row[APP.BASE_COLS.ENTRY_TIMESTAMP - 1],
    name: String(row[APP.BASE_COLS.NAME - 1] || '').trim(),
    phone: String(row[APP.BASE_COLS.PHONE - 1] || '').trim(),
    email: String(row[APP.BASE_COLS.EMAIL - 1] || '').trim(),
    language: String(row[APP.BASE_COLS.LANGUAGE - 1] || '').trim(),
    stage: String(row[APP.BASE_COLS.STAGE - 1] || '').trim(),
    attendant: String(row[APP.BASE_COLS.ATTENDANT - 1] || '').trim(),
    lastInteraction: row[APP.BASE_COLS.LAST_INTERACTION - 1],
    lastStageChange: row[APP.BASE_COLS.LAST_STAGE_CHANGE - 1],
    showDate: row[APP.BASE_COLS.SHOW_DATE - 1],
    nextFollowUp: row[APP.BASE_COLS.NEXT_FOLLOWUP - 1],
    obs: String(row[APP.BASE_COLS.OBS - 1] || '').trim(),
    professor: String(row[APP.BASE_COLS.PROFESSOR - 1] || '').trim(),
    otherClassification: String(row[APP.BASE_COLS.OTHER_CLASSIFICATION - 1] || '').trim(),
    handle: String(row[APP.BASE_COLS.HANDLE - 1] || '').trim(),
    currentPipeline: String(row[APP.BASE_COLS.CURRENT_PIPELINE - 1] || '').trim(),
    recordOrigin: String(row[APP.BASE_COLS.RECORD_ORIGIN - 1] || '').trim(),
    influencerSource: String(row[APP.BASE_COLS.INFLUENCER_SOURCE - 1] || '').trim(),
    email01SentAt: row[APP.BASE_COLS.EMAIL_01_SENT_AT - 1],
    email02SentAt: row[APP.BASE_COLS.EMAIL_02_SENT_AT - 1],
    email03SentAt: row[APP.BASE_COLS.EMAIL_03_SENT_AT - 1]
  };
}

function normalizeSelectableCRMValue_(value, allowedValues) {
  const normalizedValue = String(value || '').trim();

  if (!normalizedValue) {
    return '';
  }

  const hasMatch = allowedValues.some(function (allowedValue) {
    return normalizeText_(allowedValue) === normalizeText_(normalizedValue);
  });

  return hasMatch ? normalizedValue : '';
}

function isImmediateFollowUpStage_(stage) {
  const normalizedStage = normalizeText_(stage);
  return normalizedStage === normalizeText_('Fazer FUP') ||
    normalizedStage === normalizeText_('Fazer Fup Hoje');
}

function isCRMRecord_(record) {
  return normalizeText_(record.currentPipeline) !== normalizeText_(APP.PIPELINES.CAPTACAO);
}

function isCaptacaoRecord_(record) {
  return normalizeText_(record.currentPipeline) === normalizeText_(APP.PIPELINES.CAPTACAO);
}

function deveAparecerNoCRM_(record) {
  const crmStage = getCRMStage_(record);
  const crmStageNormalized = normalizeText_(crmStage);
  const stageNormalized = normalizeText_(record.stage);

  // Sai da fila definitivamente nessas etapas
  if (APP.CRM_HIDDEN_STAGES.some(function (stage) {
    return normalizeText_(stage) === crmStageNormalized;
  })) {
    return false;
  }

  if (isImmediateFollowUpStage_(crmStageNormalized)) {
    return true;
  }

  // Regra da v1:
  // se houver data futura de Aula Show, não aparece
  if (isFutureDate_(record.showDate)) {
    return false;
  }

  // se houver data futura de Follow-up, não aparece
  if (isFutureDate_(record.nextFollowUp)) {
    return false;
  }

  if (stageNormalized === normalizeText_('FUP DO DIA') && isToday_(record.lastInteraction)) {
    return false;
  }

  // Se não caiu em nenhuma regra de ocultação, aparece
  return true;
}

function getCaptacaoStage_(record) {
  const stageNormalized = normalizeText_(record.stage);

  if (stageNormalized === normalizeText_('FUP DO DIA') && !isToday_(record.lastInteraction)) {
    return 'Fazer FUP';
  }

  if (stageNormalized === normalizeText_('Primeiro contato feito por msg') && !isFutureDate_(record.nextFollowUp)) {
    return 'Fazer FUP';
  }

  if (
    stageNormalized === normalizeText_('Enviar email 01') &&
    !isBlank_(record.email01SentAt) &&
    !isFutureDate_(record.nextFollowUp)
  ) {
    return 'Email 1 respondido?';
  }

  if (
    stageNormalized === normalizeText_('Enviar email 02') &&
    !isBlank_(record.email02SentAt) &&
    !isFutureDate_(record.nextFollowUp)
  ) {
    return 'Email 2 respondido?';
  }

  if (
    stageNormalized === normalizeText_('Enviar email 03') &&
    !isBlank_(record.email03SentAt) &&
    !isFutureDate_(record.nextFollowUp)
  ) {
    return 'Decisão Final';
  }

  if (normalizeText_(record.stage) === normalizeText_('Fup') && !isFutureDate_(record.nextFollowUp)) {
    return 'Fazer FUP';
  }

  return record.stage;
}

function deveAparecerNaCaptacao_(record) {
  const captacaoStage = getCaptacaoStage_(record);
  const stageNormalized = normalizeText_(record.stage);
  const visibleStageNormalized = normalizeText_(captacaoStage);

  if (!isCaptacaoRecord_(record)) {
    return false;
  }

  if (
    visibleStageNormalized === normalizeText_('Nunca Respondeu') ||
    visibleStageNormalized === normalizeText_('RMKT - Influencer não tem perfil para a Idioma')
  ) {
    return false;
  }

  if (isImmediateFollowUpStage_(captacaoStage)) {
    return true;
  }

  if (
    stageNormalized === normalizeText_('Primeiro contato feito por msg') ||
    stageNormalized === normalizeText_('Enviar email 01') ||
    stageNormalized === normalizeText_('Enviar email 02') ||
    stageNormalized === normalizeText_('Enviar email 03') ||
    stageNormalized === normalizeText_('Fup')
  ) {
    return !isFutureDate_(record.nextFollowUp);
  }

  if (stageNormalized === normalizeText_('FUP DO DIA') && isToday_(record.lastInteraction)) {
    return false;
  }

  return true;
}

function gerarMensagemPlaceholder_(stage) {
  if (normalizeText_(stage) === normalizeText_('Em Atendimento')) {
    return '';
  }

  const token = toPlaceholderToken_(stage || 'Sem Etapa');
  return 'PlaceholderText' + token;
}

/****************************************************
 * LOG.GS
 * Helpers para registro de histórico
 ****************************************************/

function appendLogEntries_(logSheet, entries) {
  if (!entries || !entries.length) return;

  const startRow = logSheet.getLastRow() + 1;
  logSheet.getRange(startRow, 1, entries.length, APP.LOG_HEADERS.length).setValues(entries);
}

function syncAddedInfluencersToContactedSheet_(rowsToInsert) {
  const integration = APP.INTEGRATIONS.CONTACTED_INFLUENCERS;
  if (!integration || !integration.ENABLED) return;
  if (!rowsToInsert || !rowsToInsert.length) return;

  const userEmail = getExecutingUserEmail_();
  const externalSpreadsheet = SpreadsheetApp.openById(integration.SPREADSHEET_ID);
  const targetSheet = externalSpreadsheet.getSheetByName(integration.SHEET_NAME);

  if (!targetSheet) {
    throw new Error(
      'A aba "' + integration.SHEET_NAME + '" não foi encontrada na planilha externa de influencers contatados.'
    );
  }

  let nextTargetRow = findNextAppendRowByColumns_(
    targetSheet,
    [1, 2, integration.CONTACT_NAME_COLUMN, integration.CONTACT_EMAIL_COLUMN],
    2
  );

  rowsToInsert.forEach(function (row) {
    const handle = String(row[APP.BASE_COLS.HANDLE - 1] || '').trim();
    const name = String(row[APP.BASE_COLS.NAME - 1] || '').trim();
    const email = String(row[APP.BASE_COLS.EMAIL - 1] || '').trim();
    const targetRow = nextTargetRow;

    targetSheet.getRange(targetRow, 1).setValue(userEmail);
    targetSheet.getRange(targetRow, 2).setValue(handle);

    if (name) {
      targetSheet.getRange(targetRow, integration.CONTACT_NAME_COLUMN).setValue(name);
    }

    if (email) {
      targetSheet.getRange(targetRow, integration.CONTACT_EMAIL_COLUMN).setValue(email);
    }

    nextTargetRow += 1;
  });
}

function findNextAppendRowByColumns_(sheet, columnNumbers, startRow) {
  const firstRow = Math.max(Number(startRow) || 1, 1);
  const totalRows = Math.max(sheet.getMaxRows() - firstRow + 1, 1);
  let lastUsedRow = firstRow - 1;

  columnNumbers.forEach(function (columnNumber) {
    if (!columnNumber || columnNumber < 1) {
      return;
    }

    const values = sheet.getRange(firstRow, columnNumber, totalRows, 1).getDisplayValues();

    for (let idx = values.length - 1; idx >= 0; idx--) {
      if (String(values[idx][0] || '').trim() !== '') {
        lastUsedRow = Math.max(lastUsedRow, firstRow + idx);
        break;
      }
    }
  });

  return Math.max(lastUsedRow + 1, firstRow);
}

function getExecutingUserEmail_() {
  const activeUserEmail = Session.getActiveUser().getEmail();
  if (activeUserEmail) {
    return activeUserEmail;
  }

  const effectiveUserEmail = Session.getEffectiveUser().getEmail();
  if (effectiveUserEmail) {
    return effectiveUserEmail;
  }

  throw new Error(
    'Não foi possível identificar o e-mail do usuário que executou a ação para registrar na planilha externa.'
  );
}

function makeLogRow_(params) {
  return [
    new Date(),
    params.action || '',
    params.id || '',
    params.name || '',
    params.field || '',
    toLogText_(params.oldValue),
    toLogText_(params.newValue),
    params.attendant || '',
    params.origin || ''
  ];
}

/****************************************************
 * UTILS.GS
 * Funções utilitárias e infraestrutura
 ****************************************************/

function migrarBaseLegadaParaBancoDeDados_(ss, legacySheet, databaseSheet) {
  if (!legacySheet || !databaseSheet) return;
  if (legacySheet.getSheetId() === databaseSheet.getSheetId()) return;

  const legacyRows = getSheetDataRows_(legacySheet, APP.BASE_HEADERS.length);
  const databaseRows = getSheetDataRows_(databaseSheet, APP.BASE_HEADERS.length);
  const merged = [];
  const seen = {};

  function appendRows_(rows) {
    rows.forEach(function (row, index) {
      const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
      const fallbackKey = '__ROW__' + index + '__' + String(row[APP.BASE_COLS.NAME - 1] || '').trim();
      const key = id || fallbackKey;

      if (!(key in seen)) {
        seen[key] = merged.length;
        merged.push(row);
        return;
      }

      merged[seen[key]] = row;
    });
  }

  appendRows_(legacyRows);
  appendRows_(databaseRows);

  clearSheetBody_(databaseSheet, APP.BASE_HEADERS.length);
  if (merged.length) {
    databaseSheet.getRange(2, 1, merged.length, APP.BASE_HEADERS.length).setValues(merged);
  }

  ss.deleteSheet(legacySheet);
}

function replaceBaseRowsInSheet_(sheet, rows) {
  clearSheetBody_(sheet, APP.BASE_HEADERS.length);

  if (rows && rows.length) {
    sheet.getRange(2, 1, rows.length, APP.BASE_HEADERS.length).setValues(rows);
  }
}

function buildAuditTimestampLookups_(logRows) {
  const createdById = {};
  const lastStageChangeById = {};

  (logRows || []).forEach(function (row) {
    const timestamp = row[0];
    const action = String(row[1] || '').trim();
    const id = String(row[2] || '').trim();

    if (!id || !(timestamp instanceof Date)) return;

    if (action === APP.LOG_ACTIONS.CREATE && !createdById[id]) {
      createdById[id] = timestamp;
    }

    if (action === APP.LOG_ACTIONS.UPDATE_STAGE) {
      if (!lastStageChangeById[id] || timestamp > lastStageChangeById[id]) {
        lastStageChangeById[id] = timestamp;
      }
    }
  });

  return {
    createdById: createdById,
    lastStageChangeById: lastStageChangeById
  };
}

function ensureBaseAuditDataForSheet_(sheet, auditLookups) {
  if (!sheet) return;

  sheet.getRange(1, 1, 1, APP.BASE_HEADERS.length).setValues([APP.BASE_HEADERS]);
  sheet.getRange('B:B').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  sheet.getRange('I:I').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  sheet.getRange('Z:Z').setNumberFormat('dd/MM/yyyy HH:mm:ss');

  const rows = getSheetDataRows_(sheet, APP.BASE_HEADERS.length);
  if (!rows.length) return;

  let changed = false;

  rows.forEach(function (row) {
    const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
    if (!id) return;

    if (isBlank_(row[APP.BASE_COLS.ENTRY_TIMESTAMP - 1])) {
      row[APP.BASE_COLS.ENTRY_TIMESTAMP - 1] =
        auditLookups.createdById[id] ||
        row[APP.BASE_COLS.LAST_INTERACTION - 1] ||
        new Date();
      changed = true;
    }

    if (isBlank_(row[APP.BASE_COLS.LAST_STAGE_CHANGE - 1])) {
      row[APP.BASE_COLS.LAST_STAGE_CHANGE - 1] =
        auditLookups.lastStageChangeById[id] ||
        row[APP.BASE_COLS.LAST_INTERACTION - 1] ||
        row[APP.BASE_COLS.ENTRY_TIMESTAMP - 1];
      changed = true;
    }
  });

  if (changed) {
    sheet.getRange(2, 1, rows.length, APP.BASE_HEADERS.length).setValues(rows);
  }
}

function ensureBaseAuditData_(ctx) {
  const logRows = getSheetDataRows_(ctx.logSheet, APP.LOG_HEADERS.length);
  const auditLookups = buildAuditTimestampLookups_(logRows);

  ensureBaseAuditDataForSheet_(ctx.baseSheet, auditLookups);
  ensureBaseAuditDataForSheet_(ctx.databaseSheet, auditLookups);
}

function seedSyncBufferFromExistingSources_(ss, syncBufferSheet, databaseSheet, legacySheet) {
  const syncRows = getSheetDataRows_(syncBufferSheet, APP.BASE_HEADERS.length);
  if (syncRows.length) {
    if (!syncBufferSheet.isSheetHidden()) {
      syncBufferSheet.hideSheet();
    }
    return;
  }

  const legacyRows = legacySheet ? getSheetDataRows_(legacySheet, APP.BASE_HEADERS.length) : [];
  const databaseRows = databaseSheet ? getSheetDataRows_(databaseSheet, APP.BASE_HEADERS.length) : [];
  const merged = [];
  const seen = {};

  function appendRows_(rows) {
    rows.forEach(function (row, index) {
      const id = String(row[APP.BASE_COLS.ID - 1] || '').trim();
      const fallbackKey = '__ROW__' + index + '__' + String(row[APP.BASE_COLS.NAME - 1] || '').trim();
      const key = id || fallbackKey;

      if (!(key in seen)) {
        seen[key] = merged.length;
        merged.push(row);
        return;
      }

      merged[seen[key]] = row;
    });
  }

  appendRows_(legacyRows);
  appendRows_(databaseRows);
  replaceBaseRowsInSheet_(syncBufferSheet, merged);

  if (legacySheet && legacySheet.getSheetId() !== databaseSheet.getSheetId()) {
    ss.deleteSheet(legacySheet);
  }

  if (!syncBufferSheet.isSheetHidden()) {
    syncBufferSheet.hideSheet();
  }
}

function getContext_(options) {
  const createMissing = Boolean(options && options.createMissing);
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let legendSheet = ss.getSheetByName(APP.SHEETS.LEGEND);
  if (!legendSheet && createMissing) {
    legendSheet = ss.insertSheet(APP.SHEETS.LEGEND);
  }
  if (!legendSheet) {
    throw new Error('A aba "LEGENDA DE TAGS" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  // Nome oficial do atendente
  const spreadsheetNameSanitized = sanitizeSheetName_(ss.getName());
  const attendantNameFromTitle = extractAttendantNameFromSpreadsheetTitle_(ss.getName());
  const currentAttendantName = String(
    legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_NAME).getDisplayValue() || ''
  ).trim();
  let attendantNameRaw = currentAttendantName;
  if (!attendantNameRaw || attendantNameRaw === spreadsheetNameSanitized) {
    attendantNameRaw = attendantNameFromTitle;
  }

  const attendantName = sanitizeSheetName_(attendantNameRaw);
  if (attendantName !== currentAttendantName) {
    legendSheet.getRange(APP.LEGEND_CELLS.ATTENDANT_NAME).setValue(attendantName);
  }

  const currentRecruiterName = String(
    legendSheet.getRange(APP.LEGEND_CELLS.RECRUITER_NAME).getDisplayValue() || ''
  ).trim();
  let recruiterName = currentRecruiterName;
  if (!recruiterName || recruiterName === spreadsheetNameSanitized) {
    recruiterName = attendantName;
  }
  if (recruiterName !== currentRecruiterName) {
    legendSheet.getRange(APP.LEGEND_CELLS.RECRUITER_NAME).setValue(recruiterName);
  }

  ensureLegendStagesArePresent_(legendSheet);

  let captacaoSheet = ss.getSheetByName(APP.SHEETS.CAPTACAO);
  if (!captacaoSheet && createMissing) {
    captacaoSheet = ss.insertSheet(APP.SHEETS.CAPTACAO);
  }
  if (!captacaoSheet) {
    throw new Error('A aba "Captação" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let crmSheet = ss.getSheetByName(APP.SHEETS.CRM);
  if (!crmSheet && createMissing) {
    crmSheet = ss.insertSheet(APP.SHEETS.CRM);
  }
  if (!crmSheet) {
    throw new Error('A aba "CRM" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let databaseSheet = ss.getSheetByName(APP.SHEETS.DATABASE);
  if (!databaseSheet && createMissing) {
    databaseSheet = ss.insertSheet(APP.SHEETS.DATABASE);
  }
  if (!databaseSheet) {
    throw new Error('A aba "Banco De Dados" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let syncBufferSheet = ss.getSheetByName(APP.SHEETS.SYNC_BUFFER);
  if (!syncBufferSheet && createMissing) {
    syncBufferSheet = ss.insertSheet(APP.SHEETS.SYNC_BUFFER);
  }
  if (!syncBufferSheet) {
    throw new Error('A aba "__SYNC_BUFFER__" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  const legacyBaseSheet = ss.getSheetByName(attendantName);
  if (legacyBaseSheet && legacyBaseSheet.getSheetId() !== databaseSheet.getSheetId()) {
    seedSyncBufferFromExistingSources_(ss, syncBufferSheet, databaseSheet, legacyBaseSheet);
  } else {
    seedSyncBufferFromExistingSources_(ss, syncBufferSheet, databaseSheet, null);
  }

  const baseSheet = syncBufferSheet;

  let logSheet = ss.getSheetByName(APP.SHEETS.LOG);
  if (!logSheet && createMissing) {
    logSheet = ss.insertSheet(APP.SHEETS.LOG);
  }
  if (!logSheet) {
    throw new Error('A aba "Log" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let activeInfluencersSheet = ss.getSheetByName(APP.SHEETS.ACTIVE_INFLUENCERS);
  if (!activeInfluencersSheet && createMissing) {
    activeInfluencersSheet = ss.insertSheet(APP.SHEETS.ACTIVE_INFLUENCERS);
  }
  if (!activeInfluencersSheet) {
    throw new Error('A aba "Influencers Ativos" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let importantLinksSheet = ss.getSheetByName(APP.SHEETS.IMPORTANT_LINKS);
  if (!importantLinksSheet && createMissing) {
    importantLinksSheet = ss.insertSheet(APP.SHEETS.IMPORTANT_LINKS);
  }
  if (!importantLinksSheet) {
    throw new Error('A aba "Links Importantes" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  let relationshipPendingSheet = ss.getSheetByName(APP.SHEETS.RELATIONSHIP_PENDING);
  if (!relationshipPendingSheet && createMissing) {
    relationshipPendingSheet = ss.insertSheet(APP.SHEETS.RELATIONSHIP_PENDING);
  }
  if (!relationshipPendingSheet) {
    throw new Error('A aba "Pendências e Relacionamento" não existe. Rode primeiro a função "Configurar Estrutura Inicial".');
  }

  const ctx = {
    ss: ss,
    legendSheet: legendSheet,
    baseSheet: baseSheet,
    syncBufferSheet: syncBufferSheet,
    captacaoSheet: captacaoSheet,
    crmSheet: crmSheet,
    databaseSheet: databaseSheet,
    logSheet: logSheet,
    activeInfluencersSheet: activeInfluencersSheet,
    importantLinksSheet: importantLinksSheet,
    relationshipPendingSheet: relationshipPendingSheet,
    attendantName: attendantName,
    recruiterName: recruiterName
  };

  hideSupportSheets_(ctx);

  return ctx;
}

function runWithDocumentLock_(callback) {
  const lock = LockService.getDocumentLock();
  lock.waitLock(30000);

  try {
    return callback();
  } finally {
    lock.releaseLock();
  }
}

function handleError_(functionName, error) {
  const message =
    'Erro em "' + functionName + '"\n\n' +
    (error && error.message ? error.message : String(error));

  console.error(message, error);

  try {
    SpreadsheetApp.getUi().alert(message);
  } catch (uiError) {
    // Em caso de execução fora de contexto visual
    console.error('Não foi possível exibir alerta na UI.', uiError);
  }

  throw error;
}

function showToastMessage_(message, title, timeoutSeconds) {
  SpreadsheetApp.getActiveSpreadsheet().toast(message, title || 'Automações CRM', timeoutSeconds || 6);
}

function styleHeaderRow_(sheet, numCols, headerRow) {
  const row = headerRow || 1;
  sheet.getRange(row, 1, 1, numCols)
    .setFontWeight('bold')
    .setBackground(HEADER_FILL_YELLOW_LIGHT_2)
    .setFontColor(HEADER_TEXT_DARK);
}

function safeSetColumnWidths_(sheet, definitions) {
  definitions.forEach(function (item) {
    const col = item[0];
    const width = item[1];
    sheet.setColumnWidth(col, width);
  });
}

function writeVerticalList_(sheet, startRow, startCol, values) {
  const rowsToClear = Math.max(100, values && values.length ? values.length : 0);
  const requiredLastRow = startRow + rowsToClear - 1;

  if (sheet.getMaxRows() < requiredLastRow) {
    sheet.insertRowsAfter(sheet.getMaxRows(), requiredLastRow - sheet.getMaxRows());
  }

  sheet.getRange(startRow, startCol, rowsToClear, 1).clearContent();

  if (!values || !values.length) return;

  const rows = values.map(function (value) {
    return [value];
  });

  sheet.getRange(startRow, startCol, rows.length, 1).setValues(rows);
}

function ensureLegendStagesArePresent_(legendSheet) {
  const existingStages = getNonEmptyValuesFromColumn_(legendSheet, 14, 2);
  const existingMap = {};
  const mergedStages = existingStages.slice();

  existingStages.forEach(function (stage) {
    existingMap[normalizeText_(stage)] = true;
  });

  APP.STAGES.forEach(function (stage) {
    const normalizedStage = normalizeText_(stage);
    if (!existingMap[normalizedStage]) {
      mergedStages.push(stage);
    }
  });

  if (mergedStages.length !== existingStages.length) {
    writeVerticalList_(legendSheet, 2, 14, mergedStages);
  }
}

function getNonEmptyValuesFromColumn_(sheet, colNumber, startRow) {
  const lastRow = sheet.getLastRow();
  if (lastRow < startRow) return [];

  const values = sheet.getRange(startRow, colNumber, lastRow - startRow + 1, 1).getDisplayValues();

  return values
    .map(function (row) { return String(row[0] || '').trim(); })
    .filter(function (value) { return value !== ''; });
}

function getProfessorOptions_(legendSheet) {
  const integration = APP.INTEGRATIONS.PROFESSORS;
  let values = [];

  if (integration && integration.ENABLED) {
    try {
      const externalSpreadsheet = SpreadsheetApp.openById(integration.SPREADSHEET_ID);
      const professorSheet = externalSpreadsheet.getSheetByName(integration.SHEET_NAME);

      if (professorSheet) {
        const lastRow = professorSheet.getLastRow();
        const lastColumn = professorSheet.getLastColumn();

        if (lastRow >= 2 && lastColumn >= 1) {
          const headerValues = professorSheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0];
          let nameColumn = 1;

          for (let idx = 0; idx < headerValues.length; idx += 1) {
            const normalizedHeader = normalizeText_(headerValues[idx]);
            if (normalizedHeader.indexOf('professor') >= 0 || normalizedHeader === normalizeText_('Nome')) {
              nameColumn = idx + 1;
              break;
            }
          }

          values = getNonEmptyValuesFromColumn_(professorSheet, nameColumn, 2);
        }
      }
    } catch (error) {
      console.warn('Não foi possível carregar a lista externa de professores.', error);
    }
  }

  if (!values.length) {
    values = getNonEmptyValuesFromColumn_(legendSheet, 15, 2); // O
  }

  return values.filter(function (value, index, list) {
    const normalizedValue = normalizeText_(value);
    return normalizedValue && list.findIndex(function (candidate) {
      return normalizeText_(candidate) === normalizedValue;
    }) === index;
  });
}

function getProfessorOptionsRange_(legendSheet) {
  const professorOptions = getProfessorOptions_(legendSheet);

  if (!professorOptions.length) {
    return null;
  }

  writeVerticalList_(legendSheet, 2, 15, professorOptions); // O2:O
  return legendSheet.getRange(2, 15, professorOptions.length, 1);
}

function sincronizarListaProfessores_Interno_(legendSheet, crmSheet) {
  const professorOptions = getProfessorOptions_(legendSheet);

  if (!professorOptions.length) {
    throw new Error('Nenhum professor foi encontrado para atualizar a lista.');
  }

  writeVerticalList_(legendSheet, 2, 15, professorOptions); // O2:O

  if (crmSheet) {
    reaplicarValidacoesCRM_Interno_(crmSheet, legendSheet);
  }

  return professorOptions.length;
}

function clearSheetBody_(sheet, numCols, startRow, startCol) {
  const firstDataRow = startRow || 2;
  const firstDataCol = startCol || 1;
  const maxRows = sheet.getMaxRows();
  if (maxRows < firstDataRow) return;
  sheet.getRange(firstDataRow, firstDataCol, maxRows - firstDataRow + 1, numCols).clearContent();
}

function getSheetDataRows_(sheet, numCols, startRow) {
  const firstDataRow = startRow || 2;
  const lastRow = sheet.getLastRow();
  if (lastRow < firstDataRow) return [];
  return sheet.getRange(firstDataRow, 1, lastRow - firstDataRow + 1, numCols).getValues();
}

function makeEmptyBaseRow_() {
  return new Array(APP.BASE_HEADERS.length).fill('');
}

function getCaptacaoInputLastRow_(captacaoSheet) {
  return captacaoSheet.getMaxRows();
}

function getCaptacaoInputRange_(captacaoSheet) {
  const startRow = APP.CAPTACAO_LAYOUT.INPUT_START_ROW;
  const totalRows = Math.max(getCaptacaoInputLastRow_(captacaoSheet) - startRow + 1, 1);
  return captacaoSheet.getRange(
    startRow,
    APP.CAPTACAO_LAYOUT.INPUT_HANDLE_COLUMN,
    totalRows,
    APP.CAPTACAO_LAYOUT.INPUT_WIDTH
  );
}

function getCaptacaoApprovalRange_(captacaoSheet) {
  const startRow = APP.CAPTACAO_LAYOUT.INPUT_START_ROW;
  const totalRows = Math.max(getCaptacaoInputLastRow_(captacaoSheet) - startRow + 1, 1);
  return captacaoSheet.getRange(startRow, APP.CAPTACAO_LAYOUT.INPUT_APPROVAL_COLUMN, totalRows, 1);
}

function clearCaptacaoInputArea_(captacaoSheet) {
  getCaptacaoInputRange_(captacaoSheet).clearContent();
  updateCaptacaoApprovalColors_(captacaoSheet);
}

function buildCaptacaoApprovalValues_(captacaoSheet) {
  const handleValues = captacaoSheet
    .getRange(
      APP.CAPTACAO_LAYOUT.INPUT_START_ROW,
      APP.CAPTACAO_LAYOUT.INPUT_HANDLE_COLUMN,
      Math.max(getCaptacaoInputLastRow_(captacaoSheet) - APP.CAPTACAO_LAYOUT.INPUT_START_ROW + 1, 1),
      1
    )
    .getDisplayValues();
  const resolver = getInfluencerApprovalStatusResolver_();

  return handleValues.map(function (row) {
    return [resolver(row[0])];
  });
}

function getInfluencerApprovalStatusResolver_() {
  const integration = APP.INTEGRATIONS.CONTACTED_INFLUENCERS;

  if (!integration || !integration.ENABLED) {
    return function (handle) {
      return normalizeInfluencerHandleKey_(handle) ? 'Manda ver' : '';
    };
  }

  const externalSpreadsheet = SpreadsheetApp.openById(integration.SPREADSHEET_ID);
  const activeSheet = externalSpreadsheet.getSheetByName(integration.ACTIVE_SHEET_NAME);
  const contactedSheet = externalSpreadsheet.getSheetByName(integration.SHEET_NAME);

  if (!activeSheet) {
    throw new Error(
      'A aba "' + integration.ACTIVE_SHEET_NAME + '" não foi encontrada na planilha externa de influencers.'
    );
  }

  if (!contactedSheet) {
    throw new Error(
      'A aba "' + integration.SHEET_NAME + '" não foi encontrada na planilha externa de influencers contatados.'
    );
  }

  const activeHandles = getNonEmptyValuesFromColumn_(activeSheet, integration.ACTIVE_HANDLE_COLUMN, 1);
  const ownedInfluencerHandles = getNonEmptyValuesFromColumn_(contactedSheet, integration.OWNED_INFLUENCER_COLUMN, 1);
  const contactedHistoryHandles = getNonEmptyValuesFromColumn_(contactedSheet, integration.CONTACT_HISTORY_COLUMN, 1)
    .slice(-integration.CONTACT_HISTORY_LOOKBACK);

  const activeLookup = toNormalizedLookup_(activeHandles);
  const ownedInfluencerLookup = toNormalizedLookup_(ownedInfluencerHandles);
  const contactedHistoryLookup = toNormalizedLookup_(contactedHistoryHandles);

  return function (handle) {
    const normalizedHandle = normalizeInfluencerHandleKey_(handle);

    if (!normalizedHandle) {
      return '';
    }

    if (activeLookup[normalizedHandle]) {
      return 'Influencer ativo nosso';
    }

    if (ownedInfluencerLookup[normalizedHandle]) {
      return 'É influencer nosso';
    }

    if (contactedHistoryLookup[normalizedHandle]) {
      return 'Já enviamos mensagem';
    }

    return 'Manda ver';
  };
}

function updateCaptacaoApprovalColors_(captacaoSheet) {
  const range = getCaptacaoApprovalRange_(captacaoSheet);
  const displayValues = range.getDisplayValues();
  const backgrounds = displayValues.map(function (row) {
    const status = String(row[0] || '').trim();
    const normalizedStatus = normalizeText_(status);

    if (normalizedStatus === normalizeText_('Manda ver')) {
      return ['#008000'];
    }

    if (
      normalizedStatus === normalizeText_('Influencer ativo nosso') ||
      normalizedStatus === normalizeText_('É influencer nosso') ||
      normalizedStatus === normalizeText_('Já enviamos mensagem')
    ) {
      return ['#FF0000'];
    }

    return ['#ffffff'];
  });

  range.setBackgrounds(backgrounds);
}

function getCRMManualStageOptions_() {
  return APP.CRM_STAGES.slice();
}

function getCaptacaoManualStageOptions_() {
  return APP.CAPTACAO_STAGES.slice();
}

function getDatabaseManualStageOptions_() {
  const merged = [];
  const seen = {};

  APP.CRM_STAGES.concat(APP.CAPTACAO_STAGES).forEach(function (stage) {
    const key = normalizeText_(stage);
    if (seen[key]) {
      return;
    }

    seen[key] = true;
    merged.push(stage);
  });

  return merged;
}

function getCRMDataStartRow_(crmSheet) {
  return APP.CRM_LAYOUT.DATA_START_ROW;
}

function reconfigureCaptacaoPreservingPending_(ctx) {
  const committedRows = getSheetDataRows_(ctx.baseSheet, APP.BASE_HEADERS.length);
  const pendingById = committedRows.length ? collectPendingEdits_(ctx, committedRows) : {};
  const previewRows = committedRows.length
    ? buildPreviewBaseRowsWithPendingEdits_(ctx, committedRows, pendingById, ['captacao'])
    : [];
  const captacaoPendingIds = Object.keys(pendingById).filter(function (id) {
    return Object.keys((pendingById[id] && pendingById[id].captacao) || {}).length > 0;
  });

  configurarCaptacao_(ctx.captacaoSheet);

  if (committedRows.length || captacaoPendingIds.length) {
    montarCaptacao_Interno_(ctx, {
      silent: true,
      baseRowsOverride: previewRows,
      forceVisibleIds: captacaoPendingIds
    });
  }
}

function ensureOperationalLayouts_(ctx) {
  ensureBaseAuditData_(ctx);

  const crmHeader = normalizeText_(ctx.crmSheet.getRange(APP.CRM_LAYOUT.HEADER_ROW, 1).getDisplayValue());
  if (crmHeader !== normalizeText_(APP.CRM_HEADERS[0])) {
    configurarCRM_(ctx.crmSheet);
  }

  const captacaoTitle = normalizeText_(ctx.captacaoSheet.getRange('A1').getDisplayValue());
  const captacaoInputHeader = normalizeText_(ctx.captacaoSheet.getRange('A4').getDisplayValue());
  const captacaoInputNameHeader = normalizeText_(ctx.captacaoSheet.getRange('B4').getDisplayValue());
  const captacaoInputEmailHeader = normalizeText_(ctx.captacaoSheet.getRange('C4').getDisplayValue());
  const captacaoInputApprovalHeader = normalizeText_(ctx.captacaoSheet.getRange('D4').getDisplayValue());
  const captacaoTableHeader = normalizeText_(ctx.captacaoSheet.getRange('F3').getDisplayValue());
  const captacaoPhoneHeader = normalizeText_(ctx.captacaoSheet.getRange('I3').getDisplayValue());
  const captacaoInstagramHeader = normalizeText_(ctx.captacaoSheet.getRange('J3').getDisplayValue());
  const captacaoCommentsHeader = normalizeText_(ctx.captacaoSheet.getRange('K3').getDisplayValue());
  const captacaoSourceHeader = normalizeText_(ctx.captacaoSheet.getRange('M3').getDisplayValue());
  const captacaoMessageHeader = normalizeText_(ctx.captacaoSheet.getRange('N3').getDisplayValue());

  if (
    captacaoTitle !== normalizeText_('Influencers captados esse mês') ||
    captacaoInputHeader !== normalizeText_('@') ||
    captacaoInputNameHeader !== normalizeText_('Nome') ||
    captacaoInputEmailHeader !== normalizeText_('Email') ||
    captacaoInputApprovalHeader !== normalizeText_('Aprovação') ||
    captacaoTableHeader !== normalizeText_('@') ||
    captacaoPhoneHeader !== normalizeText_('Telefone') ||
    captacaoInstagramHeader !== normalizeText_('Link do instagram') ||
    captacaoCommentsHeader !== normalizeText_('Comentários') ||
    captacaoSourceHeader !== normalizeText_('Fonte Do Influencer') ||
    captacaoMessageHeader !== normalizeText_('Instruções')
  ) {
    reconfigureCaptacaoPreservingPending_(ctx);
  } else {
    ctx.captacaoSheet.showColumns(APP.CAPTACAO_COLS.SOURCE);
    ctx.captacaoSheet.hideColumns(APP.CAPTACAO_COLS.MESSAGE);
    ctx.captacaoSheet.hideColumns(APP.CAPTACAO_COLS.ID);
  }
}

function extractAttendantNameFromSpreadsheetTitle_(spreadsheetName) {
  const title = String(spreadsheetName || '').trim();
  const separator = ' - ';
  const separatorIndex = title.indexOf(separator);
  const extractedName = separatorIndex >= 0 ? title.substring(separatorIndex + separator.length).trim() : title;

  return sanitizeSheetName_(extractedName);
}

function sanitizeSheetName_(name) {
  let sanitized = String(name || '').trim();

  // Caracteres inválidos para nome de aba
  sanitized = sanitized.replace(/[\[\]\*\?\/\\:]/g, ' ');
  sanitized = sanitized.replace(/\s+/g, ' ').trim();

  if (!sanitized) sanitized = 'Atendente';
  if (sanitized.length > 99) sanitized = sanitized.substring(0, 99);

  return sanitized;
}

function normalizeText_(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function sanitizeInfluencerHandle_(value) {
  return String(value || '').replace(/@/g, '');
}

function normalizeInfluencerHandleKey_(value) {
  return normalizeText_(sanitizeInfluencerHandle_(value));
}

function toNormalizedLookup_(values) {
  return values.reduce(function (lookup, value) {
    const normalizedValue = normalizeInfluencerHandleKey_(value);

    if (normalizedValue) {
      lookup[normalizedValue] = true;
    }

    return lookup;
  }, {});
}

function getSelectedCRMRowNumbers_(ss, dataStartRow) {
  const activeRangeList = ss.getActiveRangeList();
  const ranges = activeRangeList ? activeRangeList.getRanges() : [ss.getActiveRange()];
  const rowMap = {};

  ranges.forEach(function (range) {
    if (!range) return;

    const startRow = Math.max(range.getRow(), dataStartRow);
    const endRow = range.getLastRow();

    for (let row = startRow; row <= endRow; row++) {
      rowMap[row] = true;
    }
  });

  return Object.keys(rowMap)
    .map(function (row) { return Number(row); })
    .sort(function (a, b) { return a - b; });
}

function getDefaultSendAsInfo_() {
  const response = Gmail.Users.Settings.SendAs.list('me');
  const sendAsAccounts = response && response.sendAs ? response.sendAs : [];
  const account = sendAsAccounts.find(function (item) {
    return item && item.isDefault;
  }) || sendAsAccounts[0];

  if (!account || !account.sendAsEmail) {
    throw new Error('Não foi possível identificar o e-mail remetente padrão deste usuário.');
  }

  return {
    email: account.sendAsEmail,
    signature: account.signature || ''
  };
}

function htmlToPlainText_(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, function (_, code) {
      return String.fromCodePoint(Number(code));
    })
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function escapeHtml_(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isAllowedEmailTriggerStage_(currentStage, requiredStage, legacyRequiredStage) {
  const normalizedCurrentStage = normalizeText_(currentStage);

  if (normalizedCurrentStage === normalizeText_(requiredStage)) {
    return true;
  }

  if (legacyRequiredStage && normalizedCurrentStage === normalizeText_(legacyRequiredStage)) {
    return true;
  }

  return false;
}

function getDatePlusDays_(value, daysToAdd) {
  const baseDate = value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())
    ? new Date(value.getTime())
    : new Date();
  const result = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate());
  result.setDate(result.getDate() + Number(daysToAdd || 0));
  return result;
}

function requiresInfluencerSource_(stage) {
  const normalizedStage = normalizeText_(stage);
  return normalizedStage === normalizeText_('Nunca Respondeu') ||
    normalizedStage === normalizeText_('Enviar para CRM');
}

function getRecordUniqueKey_(record) {
  const handleKey = normalizeInfluencerHandleKey_(record.handle);
  return handleKey || String(record.id || '').trim();
}

function isCurrentMonthDate_(value) {
  const date = coerceToDate_(value);
  if (!date) return false;

  const now = new Date();
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}

function buildCurrentMonthCaptacaoCohort_(baseRows) {
  const cohortById = {};
  const uniqueKeys = {};

  baseRows.forEach(function (row) {
    const record = recordFromBaseRow_(row);
    const recordOriginNormalized = normalizeText_(record.recordOrigin);

    if (recordOriginNormalized !== normalizeText_(APP.PIPELINES.CAPTACAO)) {
      return;
    }

    if (!isCurrentMonthDate_(record.entryTimestamp)) {
      return;
    }

    const uniqueKey = getRecordUniqueKey_(record);
    if (!uniqueKey) {
      return;
    }

    uniqueKeys[uniqueKey] = true;
    cohortById[record.id] = uniqueKey;
  });

  return {
    cohortById: cohortById,
    totalUniqueCount: Object.keys(uniqueKeys).length
  };
}

function countUniqueStageEventsInMonth_(logRows, cohortById, stageName) {
  const matchedKeys = {};

  logRows.forEach(function (row) {
    const timestamp = row[0];
    const id = String(row[2] || '').trim();
    const field = String(row[4] || '').trim();
    const newValue = String(row[6] || '').trim();

    if (!id || !cohortById[id]) {
      return;
    }

    if (!isCurrentMonthDate_(timestamp)) {
      return;
    }

    if (normalizeText_(field) !== normalizeText_('Etapa / Status')) {
      return;
    }

    if (normalizeText_(newValue) !== normalizeText_(stageName)) {
      return;
    }

    matchedKeys[cohortById[id]] = true;
  });

  return Object.keys(matchedKeys).length;
}

function updateCaptacaoSummaries_(ctx, baseRows) {
  const captacaoSheet = ctx.captacaoSheet;
  const cohort = buildCurrentMonthCaptacaoCohort_(baseRows || []);
  const logRows = getSheetDataRows_(ctx.logSheet, APP.LOG_HEADERS.length);
  const totalAdded = cohort.totalUniqueCount;
  const sentToCRMCount = countUniqueStageEventsInMonth_(logRows, cohort.cohortById, 'Enviar para CRM');
  const aulaShowCount = countUniqueStageEventsInMonth_(logRows, cohort.cohortById, 'Aula Show');
  const fechadoCount = countUniqueStageEventsInMonth_(logRows, cohort.cohortById, 'Fechado');

  captacaoSheet.getRange('A2').setValue(totalAdded);
  captacaoSheet.getRange('F2').setValue(sentToCRMCount);
  captacaoSheet.getRange('H2').setValue(totalAdded ? aulaShowCount / totalAdded : 0).setNumberFormat('0.00%');
  captacaoSheet.getRange('J2').setValue(totalAdded ? fechadoCount / totalAdded : 0).setNumberFormat('0.00%');
}

function getCRMStage_(record) {
  const stageNormalized = normalizeText_(record.stage);

  if (stageNormalized === normalizeText_('FUP DO DIA') && !isToday_(record.lastInteraction)) {
    return 'Fazer FUP';
  }

  if (isScheduledFollowUpStage_(record.stage) && !isFutureDate_(record.nextFollowUp)) {
    return 'Fazer FUP';
  }

  return record.stage;
}

function toPlaceholderToken_(text) {
  const normalized = String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');

  return normalized || 'SemEtapa';
}

function isBlank_(value) {
  return value === '' || value === null || typeof value === 'undefined';
}

function isAulaShowStage_(value) {
  return normalizeText_(value) === normalizeText_('Aula Show');
}

function isValidEmail_(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function isUrlLike_(value) {
  const text = String(value || '').trim().toLowerCase();
  return /^(https?:\/\/|www\.)/.test(text) || text.indexOf('.com') !== -1 || text.indexOf('.br') !== -1;
}

function isFutureDate_(value) {
  const date = coerceToDate_(value);
  if (!date) return false;

  const today = stripTime_(new Date());
  return date.getTime() > today.getTime();
}

function isToday_(value) {
  const date = coerceToDate_(value);
  if (!date) return false;

  const today = stripTime_(new Date());
  return date.getTime() === today.getTime();
}

function stripTime_(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function coerceToDate_(value) {
  if (isBlank_(value)) return null;

  // Já é Date válido
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    return stripTime_(value);
  }

  // Tentativa com número (caso raro)
  if (typeof value === 'number') {
    const numericDate = new Date(value);
    if (!isNaN(numericDate.getTime())) {
      return stripTime_(numericDate);
    }
  }

  const text = String(value).trim();
  if (!text) return null;

  // dd/MM/yyyy
  const brMatch = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (brMatch) {
    const day = Number(brMatch[1]);
    const month = Number(brMatch[2]) - 1;
    const year = Number(brMatch[3]);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return stripTime_(d);
  }

  // yyyy-MM-dd
  const isoMatch = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    const year = Number(isoMatch[1]);
    const month = Number(isoMatch[2]) - 1;
    const day = Number(isoMatch[3]);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return stripTime_(d);
  }

  // Fallback
  const parsed = new Date(text);
  if (!isNaN(parsed.getTime())) {
    return stripTime_(parsed);
  }

  return null;
}

function parseBrazilianDateStrict_(value) {
  const text = String(value || '').trim();
  const brMatch = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!brMatch) return null;

  const day = Number(brMatch[1]);
  const month = Number(brMatch[2]) - 1;
  const year = Number(brMatch[3]);
  const date = new Date(year, month, day);

  if (
    isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null;
  }

  return stripTime_(date);
}

function normalizeValueByType_(value, type, rowNumber, fieldLabel) {
  if (type === 'date') {
    if (isBlank_(value)) return '';
    const date = coerceToDate_(value);

    if (!date) {
      throw new Error(
        'CRM linha ' + rowNumber + ': o campo "' + fieldLabel + '" precisa ser uma data válida ou ficar vazio.'
      );
    }

    return date;
  }

  return String(value || '').trim();
}

function areValuesEqualByType_(oldValue, newValue, type) {
  if (type === 'date') {
    const oldDate = coerceToDate_(oldValue);
    const newDate = coerceToDate_(newValue);

    if (!oldDate && !newDate) return true;
    if (!oldDate || !newDate) return false;

    return oldDate.getTime() === newDate.getTime();
  }

  return String(oldValue || '').trim() === String(newValue || '').trim();
}

function toLogText_(value) {
  if (isBlank_(value)) return '';

  const date = coerceToDate_(value);
  if (date) {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), 'dd/MM/yyyy');
  }

  return String(value);
}

function formatDateForPrompt_(value) {
  const date = coerceToDate_(value);
  if (!date) return '';

  return Utilities.formatDate(date, Session.getScriptTimeZone(), 'dd/MM/yyyy');
}










