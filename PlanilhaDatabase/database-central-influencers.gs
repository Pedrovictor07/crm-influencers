/****************************************************
 * DATABASE CENTRAL DE INFLUENCERS
 * Arquivo novo para consolidar bases de advisors/gestores.
 ****************************************************/

const CENTRAL_INFLUENCER_DB = Object.freeze({
  SPREADSHEET_ID: '13XJFKBV5WQmVzZPpNtUrZQX_Oy9yLxk9eSHRiG24NoM',
  CLIENT_FOLDER_ID: '16cb849xUMXmXE0kcmmZiKnXSZ0MtP7qv',
  CLIENT_TEMPLATE_SPREADSHEET_ID: '1yhVvFAaqYPMDKpx3cs4XL1_qGgLt0XBGQ5RB4Wtvr5Y',
  CLIENT_SPREADSHEET_PREFIX: 'CRM Influencers - ',
  MENU_NAME: 'Database Influencers',
  HTML_FILE: 'dashboard-influencers-central',
  DEFAULT_SOURCE_SHEET: 'Banco De Dados',
  TAG_LEGEND_SHEET: 'Legenda de tags',
  CREATE_SPREADSHEET_ACTION: 'Criar planilha',
  ONBOARDING_VIDEO_URL: 'https://drive.google.com/file/d/1K9GPuOfs2d551dHl0TP_8WVznDiOuyRc/view?usp=sharing',
  ADVISOR_EMAILS: Object.freeze({
    Vini: 'viniciusnogueira.self@gmail.com',
    Victor: 'victorhltg@gmail.com',
    'Ju Miele': 'julianamiele.ii@gmail.com'
  }),
  SHEETS: Object.freeze({
    MANAGERS: 'DB_Config_Advisors',
    SOURCES: 'DB_Config_Planilhas',
    DATABASE: 'DB_Influencers',
    CLIENTS: 'DB_Gestores',
    LOG: 'DB_Historico_Atualizacoes',
    DASHBOARD: 'DB_Dashboard'
  }),
  LEGACY_SHEETS: Object.freeze({
    MANAGERS: 'DB_Config_Gestores',
    CLIENTS: 'DB_Clientes'
  }),
  MANAGER_HEADERS: Object.freeze([
    'Gestor',
    'Advisor',
    'Email',
    'Ativo',
    'Status',
    'Spreadsheet ID',
    'Link Planilha',
    'Atualizado Em',
    'Observacoes'
  ]),
  SOURCE_HEADERS: Object.freeze([
    'Gestor',
    'Advisor',
    'Spreadsheet ID ou URL',
    'Aba Origem',
    'Tipo Base',
    'Ativo',
    'Ultima Atualizacao',
    'Linhas Importadas',
    'Status',
    'Observacoes'
  ]),
  DATABASE_HEADERS: Object.freeze([
    'Database ID',
    'Gestor',
    'Advisor',
    'Fonte Spreadsheet ID',
    'Fonte Spreadsheet Name',
    'Fonte Sheet',
    'Fonte Row',
    'Influencer ID',
    'Nome',
    '@',
    'Plataforma',
    'Nicho/Tag',
    'Cidade/Estado',
    'Telefone',
    'Email',
    'Idioma',
    'Etapa / Status',
    'Fluxo Atual',
    'Origem',
    'Fonte Do Influencer',
    'Data Entrada',
    'Data Ultima Interacao',
    'Data Aula Show/Publicacao',
    'Proximo Follow-up',
    'Dias Sem Acao',
    'Saude da Gestao',
    'Score Efetividade',
    'Sinalizadores',
    'Observacoes',
    'Link Perfil',
    'Link Planilha',
    'Atualizado Em'
  ]),
  CLIENT_HEADERS: Object.freeze([
    'Gestor',
    'Advisor',
    'Planilhas',
    'Influencers',
    'Ativos',
    'Em Atencao',
    'Atrasados',
    'Concluidos',
    'Sem Etapa',
    'Ultima Acao',
    'Dias Desde Ultima Acao',
    'Taxa Efetividade',
    'Score Medio',
    'Saude',
    'Principais Sinais',
    'Atualizado Em'
  ]),
  LOG_HEADERS: Object.freeze([
    'Timestamp',
    'Acao',
    'Advisor',
    'Gestor',
    'Spreadsheet ID',
    'Linhas',
    'Status',
    'Detalhes'
  ]),
  SOURCE_FIELD_ALIASES: Object.freeze({
    id: Object.freeze(['ID', 'Influencer ID', 'Codigo', 'ID aluno']),
    handle: Object.freeze(['@', 'Handle', 'Instagram', 'Usuario', 'Perfil', 'User Instagram']),
    name: Object.freeze(['Nome', 'Name', 'Influencer', 'Criador', 'Nome do Influencer']),
    phone: Object.freeze(['Telefone', 'Phone', 'WhatsApp', 'Contato', 'Celular', 'Telefone / WhatsApp']),
    email: Object.freeze(['Email', 'E-mail', 'E mail', 'Email do Influencer']),
    stage: Object.freeze(['Etapa / Status', 'Etapa/Status', 'Status', 'Status Atual', 'Etapa', 'Fase', 'Estado Atual', 'Estado Atual do Influ']),
    lastAction: Object.freeze(['Data Ultima Interacao', 'Ultima Interacao', 'Ultima Acao', 'Ultimo Contato', 'Data Ultima Alteracao de Etapa', 'Atualizado Em']),
    nextFollowUp: Object.freeze(['Proxima Data / Follow-up', 'Proximo Follow-up', 'Data Proximo Follow-up', 'Follow-up', 'Fup']),
    entryDate: Object.freeze(['Timestamp Entrada', 'Data Entrada', 'Data de Entrada', 'Criado Em', 'Created At']),
    showDate: Object.freeze(['Data Aula Show', 'Data Publicacao', 'Data Postagem', 'Publicado Em']),
    currentFlow: Object.freeze(['Fluxo Atual', 'Pipeline', 'Funil']),
    platform: Object.freeze(['Plataforma', 'Rede', 'Canal']),
    tag: Object.freeze(['Tag', 'Nicho', 'Categoria', 'Segmento']),
    location: Object.freeze(['Cidade/Estado', 'Cidade', 'Estado', 'Localizacao']),
    language: Object.freeze(['Idioma', 'Lingua']),
    origin: Object.freeze(['Origem do Registro', 'Origem']),
    source: Object.freeze(['Fonte Do Influencer', 'Fonte', 'Indicacao']),
    observations: Object.freeze(['Observacoes', 'Comentarios', 'Notas', 'Instrucoes'])
  })
});

function instalarDatabaseCentralInfluencers() {
  configurarDatabaseCentralInfluencers();
  databaseInfluencersOnOpen();
  cid_ensureOpenTrigger_();
  SpreadsheetApp.getUi().alert('Database Central instalado. Use o menu "Database Influencers" para abrir o painel ou atualizar a base.');
}

function onOpen() {
  adicionarMenuDatabaseInfluencers();
}

function databaseInfluencersOnOpen() {
  adicionarMenuDatabaseInfluencers();
}

function adicionarMenuDatabaseInfluencers() {
  SpreadsheetApp.getUi()
    .createMenu(CENTRAL_INFLUENCER_DB.MENU_NAME)
    .addItem('Abrir painel', 'abrirDashboardInfluencers')
    .addItem('Atualizar database', 'atualizarDatabaseCentralInfluencers')
    .addSeparator()
    .addItem('Configurar estrutura', 'configurarDatabaseCentralInfluencers')
    .addItem('Instalar menu automatico', 'instalarDatabaseCentralInfluencers')
    .addToUi();
}

function abrirDashboardInfluencers() {
  configurarDatabaseCentralInfluencers();
  const html = HtmlService
    .createHtmlOutputFromFile(CENTRAL_INFLUENCER_DB.HTML_FILE)
    .setTitle('Database Influencers')
    .setWidth(460);
  SpreadsheetApp.getUi().showSidebar(html);
}

function configurarDatabaseCentralInfluencers() {
  const ss = cid_getCentralSpreadsheet_();
  const sheets = cid_ensureAllSheets_(ss);
  cid_formatConfigSheets_(sheets);
  cid_formatDataSheets_(sheets);
  cid_writeDashboardShell_(sheets.dashboard);
  SpreadsheetApp.flush();
  return {
    ok: true,
    message: 'Estrutura do database central pronta.',
    spreadsheetUrl: ss.getUrl()
  };
}

function atualizarDatabaseCentralInfluencers() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) {
    throw new Error('Ja existe uma atualizacao em andamento. Tente novamente em alguns instantes.');
  }

  try {
    const startedAt = new Date();
    const ss = cid_getCentralSpreadsheet_();
    const sheets = cid_ensureAllSheets_(ss);
    const creationSummary = cid_processPendingClientCreations_(sheets);

    const sourceRows = cid_readObjectsFromSheet_(sheets.sources, CENTRAL_INFLUENCER_DB.SOURCE_HEADERS);
    const activeSources = sourceRows.filter(function (source) {
      return cid_isYes_(source['Ativo']) && String(source['Spreadsheet ID ou URL'] || '').trim();
    });

    const databaseRows = [];
    const sourceWriteBack = {};
    const logs = [];

    activeSources.forEach(function (source) {
      const sourceRowNumber = Number(source.__rowNumber);
      const clientName = String(source['Gestor'] || '').trim();
      const managerName = String(source['Advisor'] || '').trim();
      const sourceInput = String(source['Spreadsheet ID ou URL'] || '').trim();
      const sheetName = String(source['Aba Origem'] || '').trim() || CENTRAL_INFLUENCER_DB.DEFAULT_SOURCE_SHEET;
      const sourceId = cid_parseSpreadsheetId_(sourceInput);

      try {
        if (!sourceId) {
          throw new Error('Nao foi possivel identificar o ID da planilha.');
        }

        const sourceSpreadsheet = SpreadsheetApp.openById(sourceId);
        const sourceSheet = cid_findBestSourceSheet_(sourceSpreadsheet, sheetName);
        if (!sourceSheet) {
          throw new Error('Aba de origem nao encontrada: ' + sheetName);
        }

        const sourceData = cid_readSourceSheet_(sourceSheet);
        const importedRows = [];
        sourceData.rows.forEach(function (sourceRecord, index) {
          const mapped = cid_mapSourceRecord_({
            rowObject: sourceRecord,
            rowNumber: sourceData.startRow + index,
            sourceSpreadsheet: sourceSpreadsheet,
            sourceSheet: sourceSheet,
            sourceId: sourceId,
            clientName: clientName || sourceSpreadsheet.getName(),
            managerName: managerName
          });

          if (mapped) {
            importedRows.push(mapped);
          }
        });

        Array.prototype.push.apply(databaseRows, importedRows);
        sourceWriteBack[sourceRowNumber] = {
          lastUpdate: startedAt,
          imported: importedRows.length,
          status: 'OK',
          notes: sourceSheet.getName()
        };
        logs.push(cid_makeLogRow_('Importacao', managerName, clientName, sourceId, importedRows.length, 'OK', sourceSpreadsheet.getName() + ' / ' + sourceSheet.getName()));
      } catch (error) {
        sourceWriteBack[sourceRowNumber] = {
          lastUpdate: startedAt,
          imported: 0,
          status: 'Erro',
          notes: error.message
        };
        logs.push(cid_makeLogRow_('Importacao', managerName, clientName, sourceId || sourceInput, 0, 'Erro', error.message));
      }
    });

    const sortedRows = cid_sortDatabaseRows_(databaseRows);
    cid_replaceSheetData_(sheets.database, CENTRAL_INFLUENCER_DB.DATABASE_HEADERS, sortedRows);

    const clientRows = cid_buildClientRows_(sortedRows, startedAt);
    cid_replaceSheetData_(sheets.clients, CENTRAL_INFLUENCER_DB.CLIENT_HEADERS, clientRows);

    cid_applySourceWriteBack_(sheets.sources, sourceWriteBack);
    cid_appendLogs_(sheets.log, logs);
    cid_writeDashboardShell_(sheets.dashboard);
    cid_formatDataSheets_(sheets);
    SpreadsheetApp.flush();

    const result = {
      ok: true,
      importedSources: activeSources.length,
      importedRows: sortedRows.length,
      clients: clientRows.length,
      creationSummary: creationSummary,
      message: 'Atualizacao concluida: ' + sortedRows.length + ' influencers em ' + clientRows.length + ' gestores.'
    };
    cid_showUpdateAlert_(result);
    return result;
  } finally {
    lock.releaseLock();
  }
}

function getDatabaseInfluencersDashboardData() {
  configurarDatabaseCentralInfluencers();
  const ss = cid_getCentralSpreadsheet_();
  const sheets = cid_ensureAllSheets_(ss);
  const database = cid_sheetToDisplayObjects_(sheets.database, CENTRAL_INFLUENCER_DB.DATABASE_HEADERS);
  const clients = cid_sheetToDisplayObjects_(sheets.clients, CENTRAL_INFLUENCER_DB.CLIENT_HEADERS);
  const logs = cid_sheetToDisplayObjects_(sheets.log, CENTRAL_INFLUENCER_DB.LOG_HEADERS).slice(-12).reverse();
  const managers = cid_buildManagerSummaryForDashboard_(clients);
  const stageDistribution = cid_distribution_(database, 'Etapa / Status');
  const healthDistribution = cid_distribution_(database, 'Saude da Gestao');
  const riskyClients = clients
    .slice()
    .sort(function (a, b) {
      return cid_sortScoreForRisk_(a['Score Medio']) - cid_sortScoreForRisk_(b['Score Medio']);
    })
    .slice(0, 8);

  return {
    generatedAt: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm'),
    spreadsheetUrl: ss.getUrl(),
    metrics: cid_buildDashboardMetrics_(database, clients, managers),
    clients: clients,
    managers: managers,
    stageDistribution: stageDistribution,
    healthDistribution: healthDistribution,
    riskyClients: riskyClients,
    recentLogs: logs
  };
}

function cid_getCentralSpreadsheet_() {
  return SpreadsheetApp.openById(CENTRAL_INFLUENCER_DB.SPREADSHEET_ID);
}

function cid_ensureAllSheets_(ss) {
  return {
    managers: cid_ensureManagerConfigSheet_(ss),
    sources: cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.SOURCES, CENTRAL_INFLUENCER_DB.SOURCE_HEADERS),
    database: cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.DATABASE, CENTRAL_INFLUENCER_DB.DATABASE_HEADERS),
    clients: cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.CLIENTS, CENTRAL_INFLUENCER_DB.CLIENT_HEADERS, CENTRAL_INFLUENCER_DB.LEGACY_SHEETS.CLIENTS),
    log: cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.LOG, CENTRAL_INFLUENCER_DB.LOG_HEADERS),
    dashboard: cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.DASHBOARD, ['Database Central de Influencers'])
  };
}

function cid_ensureManagerConfigSheet_(ss) {
  let sheet = ss.getSheetByName(CENTRAL_INFLUENCER_DB.SHEETS.MANAGERS);
  if (!sheet) {
    sheet = ss.getSheetByName(CENTRAL_INFLUENCER_DB.LEGACY_SHEETS.MANAGERS);
    if (sheet) {
      sheet.setName(CENTRAL_INFLUENCER_DB.SHEETS.MANAGERS);
    }
  }
  if (!sheet) {
    sheet = ss.insertSheet(CENTRAL_INFLUENCER_DB.SHEETS.MANAGERS);
  }

  cid_migrateManagerConfigEmailColumn_(sheet);
  return cid_ensureSheet_(ss, CENTRAL_INFLUENCER_DB.SHEETS.MANAGERS, CENTRAL_INFLUENCER_DB.MANAGER_HEADERS);
}

function cid_migrateManagerConfigEmailColumn_(sheet) {
  const width = Math.min(sheet.getMaxColumns(), CENTRAL_INFLUENCER_DB.MANAGER_HEADERS.length);
  const headers = sheet.getRange(1, 1, 1, width).getDisplayValues()[0].map(cid_norm_);
  const hasEmail = headers.indexOf('email') >= 0;
  const activeColumn = headers.indexOf('ativo') + 1;

  if (!hasEmail && activeColumn === 3) {
    sheet.insertColumnBefore(3);
  }
}

function cid_ensureSheet_(ss, name, headers, legacyName) {
  let sheet = ss.getSheetByName(name);
  if (!sheet && legacyName) {
    sheet = ss.getSheetByName(legacyName);
    if (sheet) {
      sheet.setName(name);
    }
  }
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  const width = headers.length;
  if (sheet.getMaxColumns() < width) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), width - sheet.getMaxColumns());
  }

  const currentHeaders = sheet.getRange(1, 1, 1, width).getDisplayValues()[0];
  const shouldWriteHeaders = currentHeaders.join('') === '' || currentHeaders.some(function (header, index) {
    return header !== headers[index];
  });

  if (shouldWriteHeaders) {
    sheet.getRange(1, 1, 1, width).setValues([headers]);
  }

  sheet.setFrozenRows(1);
  cid_styleHeader_(sheet, width);
  return sheet;
}

function cid_formatConfigSheets_(sheets) {
  const activeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Sim', 'Nao', CENTRAL_INFLUENCER_DB.CREATE_SPREADSHEET_ACTION], true)
    .setAllowInvalid(false)
    .build();
  const sourceActiveRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Sim', 'Nao'], true)
    .setAllowInvalid(false)
    .build();
  const managerRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(Object.keys(CENTRAL_INFLUENCER_DB.ADVISOR_EMAILS), true)
    .setAllowInvalid(false)
    .build();

  sheets.managers.getRange(2, 2, Math.max(sheets.managers.getMaxRows() - 1, 1), 1).setDataValidation(managerRule);
  sheets.managers.getRange(2, 4, Math.max(sheets.managers.getMaxRows() - 1, 1), 1).setDataValidation(activeRule);
  sheets.sources.getRange(2, 6, Math.max(sheets.sources.getMaxRows() - 1, 1), 1).setDataValidation(sourceActiveRule);
  sheets.managers.setColumnWidths(1, 9, 160);
  sheets.sources.setColumnWidths(1, 10, 165);

  sheets.managers.getRange('A1:I1').setNote('Preencha Gestor, Advisor, Email e Ativo = Criar planilha. Ao atualizar, o sistema cria a planilha na pasta padrao, concede acesso de edicao ao email informado e cadastra em DB_Config_Planilhas.');
  sheets.sources.getRange('A1:J1').setNote('Cada linha ativa e uma planilha/aba de gestor a ser importada para o DB_Influencers.');
}

function cid_formatDataSheets_(sheets) {
  cid_styleHeader_(sheets.database, CENTRAL_INFLUENCER_DB.DATABASE_HEADERS.length);
  cid_styleHeader_(sheets.clients, CENTRAL_INFLUENCER_DB.CLIENT_HEADERS.length);
  cid_styleHeader_(sheets.log, CENTRAL_INFLUENCER_DB.LOG_HEADERS.length);
  sheets.database.setColumnWidths(1, CENTRAL_INFLUENCER_DB.DATABASE_HEADERS.length, 145);
  sheets.clients.setColumnWidths(1, CENTRAL_INFLUENCER_DB.CLIENT_HEADERS.length, 145);
  sheets.log.setColumnWidths(1, CENTRAL_INFLUENCER_DB.LOG_HEADERS.length, 145);
}

function cid_styleHeader_(sheet, width) {
  sheet.getRange(1, 1, 1, width)
    .setBackground('#111827')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

function cid_writeDashboardShell_(sheet) {
  sheet.clear();
  const values = [
    ['Database Central de Influencers', ''],
    ['Use o menu Database Influencers > Abrir painel para ver a visualizacao em HTML.', ''],
    ['Use Database Influencers > Atualizar database para buscar planilhas novas e consolidar os dados.', ''],
    ['Configuracao principal:', CENTRAL_INFLUENCER_DB.SHEETS.MANAGERS + ' e ' + CENTRAL_INFLUENCER_DB.SHEETS.SOURCES],
    ['Base consolidada:', CENTRAL_INFLUENCER_DB.SHEETS.DATABASE],
    ['Resumo por gestor:', CENTRAL_INFLUENCER_DB.SHEETS.CLIENTS]
  ];
  sheet.getRange(1, 1, values.length, 2).setValues(values);
  sheet.getRange(1, 1).setFontSize(18).setFontWeight('bold');
  sheet.setColumnWidths(1, 2, 360);
}

function cid_ensureOpenTrigger_() {
  const ss = cid_getCentralSpreadsheet_();
  const handler = 'databaseInfluencersOnOpen';
  const existing = ScriptApp.getProjectTriggers().some(function (trigger) {
    return trigger.getHandlerFunction() === handler && trigger.getEventType() === ScriptApp.EventType.ON_OPEN;
  });

  if (!existing) {
    ScriptApp.newTrigger(handler).forSpreadsheet(ss).onOpen().create();
  }
}

function cid_processPendingClientCreations_(sheets) {
  const rows = cid_readObjectsFromSheet_(sheets.managers, CENTRAL_INFLUENCER_DB.MANAGER_HEADERS);
  const existingSources = cid_readObjectsFromSheet_(sheets.sources, CENTRAL_INFLUENCER_DB.SOURCE_HEADERS);
  const knownSourceIds = {};
  const folder = DriveApp.getFolderById(CENTRAL_INFLUENCER_DB.CLIENT_FOLDER_ID);
  const rowsToAppend = [];
  const summary = {
    created: [],
    duplicates: [],
    errors: [],
    warnings: []
  };

  existingSources.forEach(function (source) {
    const id = cid_parseSpreadsheetId_(source['Spreadsheet ID ou URL']);
    if (id) knownSourceIds[id] = true;
  });

  rows.forEach(function (row) {
    const rowNumber = Number(row.__rowNumber);
    const clientName = String(row['Gestor'] || '').trim();
    const managerName = String(row['Advisor'] || '').trim();
    const editorEmail = String(row['Email'] || '').trim();
    const action = String(row['Ativo'] || '').trim();

    if (cid_norm_(action) !== cid_norm_(CENTRAL_INFLUENCER_DB.CREATE_SPREADSHEET_ACTION)) {
      return;
    }

    try {
      if (!clientName) {
        throw new Error('Informe o gestor.');
      }
      if (!CENTRAL_INFLUENCER_DB.ADVISOR_EMAILS[managerName]) {
        throw new Error('Advisor invalido. Use Vini, Victor ou Ju Miele.');
      }
      if (!cid_isValidEmail_(editorEmail)) {
        throw new Error('Informe um email valido para conceder acesso de edicao.');
      }

      const spreadsheetName = CENTRAL_INFLUENCER_DB.CLIENT_SPREADSHEET_PREFIX + clientName;
      const duplicateFile = cid_findSpreadsheetByNameInFolder_(folder, spreadsheetName);
      if (duplicateFile) {
        const duplicateSpreadsheet = SpreadsheetApp.openById(duplicateFile.getId());
        cid_writeGestorNameToTagLegend_(duplicateSpreadsheet, clientName);
        const duplicateMessage = 'Ja existe uma planilha com o nome "' + spreadsheetName + '". Nada foi criado.';
        cid_writeManagerCreationStatus_(sheets.managers, rowNumber, {
          status: duplicateMessage,
          spreadsheetId: duplicateFile.getId(),
          url: duplicateFile.getUrl(),
          updatedAt: new Date(),
          notes: row['Observacoes']
        });
        summary.duplicates.push(clientName + ' (' + spreadsheetName + ')');
        return;
      }

      const spreadsheetFile = DriveApp
        .getFileById(CENTRAL_INFLUENCER_DB.CLIENT_TEMPLATE_SPREADSHEET_ID)
        .makeCopy(spreadsheetName, folder);
      const spreadsheet = SpreadsheetApp.openById(spreadsheetFile.getId());
      cid_seedClientSpreadsheet_(spreadsheet, clientName);
      spreadsheetFile.addEditor(editorEmail);
      const emailSummary = cid_sendSpreadsheetCreatedEmail_({
        to: editorEmail,
        gestor: clientName,
        advisor: managerName,
        spreadsheetName: spreadsheetName,
        spreadsheetUrl: spreadsheet.getUrl()
      });
      if (emailSummary.warning) {
        summary.warnings.push(emailSummary.warning);
      }

      if (!knownSourceIds[spreadsheet.getId()]) {
        rowsToAppend.push([
          clientName,
          managerName,
          spreadsheet.getId(),
          CENTRAL_INFLUENCER_DB.DEFAULT_SOURCE_SHEET,
          'Gestor',
          'Sim',
          '',
          '',
          'Criada',
          'Criada a partir do template.'
        ]);
        knownSourceIds[spreadsheet.getId()] = true;
      }

      cid_writeManagerCreationStatus_(sheets.managers, rowNumber, {
        active: 'Sim',
        status: 'Criada e cadastrada a partir do template.',
        spreadsheetId: spreadsheet.getId(),
        url: spreadsheet.getUrl(),
        updatedAt: new Date(),
        notes: row['Observacoes']
      });
      summary.created.push(clientName);
    } catch (error) {
      cid_writeManagerCreationStatus_(sheets.managers, rowNumber, {
        status: 'Erro: ' + error.message,
        updatedAt: new Date(),
        notes: row['Observacoes']
      });
      summary.errors.push((clientName || ('linha ' + rowNumber)) + ': ' + error.message);
    }
  });

  if (rowsToAppend.length) {
    sheets.sources.getRange(sheets.sources.getLastRow() + 1, 1, rowsToAppend.length, CENTRAL_INFLUENCER_DB.SOURCE_HEADERS.length).setValues(rowsToAppend);
  }

  return summary;
}

function cid_writeManagerCreationStatus_(sheet, rowNumber, status) {
  const rowValues = [
    status.active || sheet.getRange(rowNumber, 4).getValue(),
    status.status || '',
    status.spreadsheetId || '',
    status.url || '',
    status.updatedAt || new Date(),
    status.notes || ''
  ];
  sheet.getRange(rowNumber, 4, 1, 6).setValues([rowValues]);
}

function cid_sendSpreadsheetCreatedEmail_(params) {
  const videoUrl = String(CENTRAL_INFLUENCER_DB.ONBOARDING_VIDEO_URL || '').trim();
  const subject = 'Sua planilha de parcerias foi criada';
  const videoLine = videoUrl
    ? 'Vídeo de orientação: ' + videoUrl
    : 'Vídeo de orientação: o link será enviado em breve.';
  const body = [
    'Olá, ' + params.gestor,
    '',
    'Sua planilha foi criada e o acesso de edição já foi liberado.',
    '',
    'Gestor: ' + params.gestor,
    'Planilha: ' + params.spreadsheetUrl,
    videoLine,
    '',
    'Atenciosamente,',
    'Equipe de Parcerias'
  ].join('\n');
  const htmlBody = [
    '<p>Olá, ' + cid_escapeHtml_(params.gestor) + '</p>',
    '<p>Sua planilha foi criada e o acesso de edição já foi liberado.</p>',
    '<p>',
    '<strong>Gestor:</strong> ' + cid_escapeHtml_(params.gestor) + '<br>',
    '<strong>Planilha:</strong> <a href="' + cid_escapeHtml_(params.spreadsheetUrl) + '">' + cid_escapeHtml_(params.spreadsheetName) + '</a><br>',
    videoUrl
      ? '<strong>Vídeo de orientação:</strong> <a href="' + cid_escapeHtml_(videoUrl) + '">Assistir vídeo</a>'
      : '<strong>Vídeo de orientação:</strong> o link será enviado em breve.',
    '</p>',
    '<p>Atenciosamente,<br>Equipe de Parcerias</p>'
  ].join('');

  try {
    MailApp.sendEmail({
      to: params.to,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    });
    return { sent: true };
  } catch (error) {
    return {
      sent: false,
      warning: 'Email nao enviado para ' + params.to + ': ' + error.message
    };
  }
}

function cid_findSpreadsheetByNameInFolder_(folder, spreadsheetName) {
  const files = folder.getFilesByName(spreadsheetName);
  while (files.hasNext()) {
    const file = files.next();
    if (file.getMimeType() === MimeType.GOOGLE_SHEETS) {
      return file;
    }
  }
  return null;
}

function cid_seedClientSpreadsheet_(spreadsheet, gestorName) {
  let sheet = spreadsheet.getSheetByName(CENTRAL_INFLUENCER_DB.DEFAULT_SOURCE_SHEET);
  if (!sheet) {
    sheet = spreadsheet.getSheets()[0];
    sheet.setName(CENTRAL_INFLUENCER_DB.DEFAULT_SOURCE_SHEET);
  }

  const headerWidth = cid_getSourceHeaderWidth_(sheet);
  if (!headerWidth) {
    throw new Error('A aba "' + sheet.getName() + '" do template nao possui cabecalhos para importacao.');
  }

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headerWidth)
    .setBackground('#111827')
    .setFontColor('#ffffff')
    .setFontWeight('bold');

  cid_writeGestorNameToTagLegend_(spreadsheet, gestorName);
}

function cid_getSourceHeaderWidth_(sheet) {
  const width = sheet.getLastColumn();
  if (width < 1 || sheet.getLastRow() < 1) return 0;

  return sheet.getRange(1, 1, 1, width).getDisplayValues()[0].reduce(function (lastUsedColumn, header, index) {
    return String(header || '').trim() ? index + 1 : lastUsedColumn;
  }, 0);
}

function cid_writeGestorNameToTagLegend_(spreadsheet, gestorName) {
  const legendSheet = spreadsheet.getSheetByName(CENTRAL_INFLUENCER_DB.TAG_LEGEND_SHEET);
  if (legendSheet) {
    legendSheet.getRange('A1').setValue(gestorName);
    legendSheet.getRange('D1').setValue(gestorName);
  }
}

function cid_readSourceSheet_(sheet) {
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow < 2 || lastCol < 1) {
    return { headers: [], rows: [], startRow: 2 };
  }

  const values = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  const headers = values[0].map(function (value) {
    return String(value || '').trim();
  });

  const rows = values.slice(1).map(function (row, index) {
    const object = { __rowNumber: index + 2 };
    headers.forEach(function (header, colIndex) {
      if (header) {
        object[cid_norm_(header)] = row[colIndex];
      }
    });
    return object;
  }).filter(function (rowObject) {
    return Object.keys(rowObject).some(function (key) {
      return key !== '__rowNumber' && String(rowObject[key] || '').trim() !== '';
    });
  });

  return { headers: headers, rows: rows, startRow: 2 };
}

function cid_findBestSourceSheet_(spreadsheet, preferredName) {
  const preferred = preferredName ? spreadsheet.getSheetByName(preferredName) : null;
  if (preferred) return preferred;

  const defaultSheet = spreadsheet.getSheetByName(CENTRAL_INFLUENCER_DB.DEFAULT_SOURCE_SHEET);
  if (defaultSheet) return defaultSheet;

  const sheets = spreadsheet.getSheets();
  let bestSheet = null;
  let bestScore = -1;
  sheets.forEach(function (sheet) {
    const width = Math.min(sheet.getLastColumn(), 40);
    if (sheet.getLastRow() < 1 || width < 1) return;

    const headers = sheet.getRange(1, 1, 1, width).getDisplayValues()[0].map(cid_norm_);
    const score = ['id', 'name', 'handle', 'stage', 'phone', 'email', 'lastAction', 'nextFollowUp'].reduce(function (sum, field) {
      return sum + (cid_hasSourceHeader_(headers, field) ? 1 : 0);
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      bestSheet = sheet;
    }
  });

  return bestScore > 0 ? bestSheet : null;
}

function cid_mapSourceRecord_(params) {
  const rowObject = params.rowObject;
  const handle = cid_cleanHandle_(cid_sourceValue_(rowObject, 'handle'));
  const name = String(cid_sourceValue_(rowObject, 'name') || '').trim();
  const phone = String(cid_sourceValue_(rowObject, 'phone') || '').trim();
  const email = String(cid_sourceValue_(rowObject, 'email') || '').trim();
  const stage = String(cid_sourceValue_(rowObject, 'stage') || '').trim();
  const influencerId = String(cid_sourceValue_(rowObject, 'id') || '').trim();

  if (!handle && !name && !phone && !email && !stage) {
    return null;
  }

  const lastAction = cid_coerceDate_(cid_sourceValue_(rowObject, 'lastAction'));
  const nextFollowUp = cid_coerceDate_(cid_sourceValue_(rowObject, 'nextFollowUp'));
  const entryDate = cid_coerceDate_(cid_sourceValue_(rowObject, 'entryDate'));
  const showDate = cid_coerceDate_(cid_sourceValue_(rowObject, 'showDate'));
  const currentFlow = String(cid_sourceValue_(rowObject, 'currentFlow') || '').trim();
  const now = new Date();
  const daysWithoutAction = cid_daysBetween_(lastAction || entryDate, now);
  const health = cid_calculateRecordHealth_(stage, lastAction, nextFollowUp);
  const score = cid_shouldCountInEffectivenessScore_(stage, currentFlow)
    ? cid_calculateRecordScore_(stage, health, lastAction, {
      hasContact: Boolean(phone || email),
      hasHandle: Boolean(handle),
      hasName: Boolean(name)
    })
    : '';
  const flags = cid_buildRecordFlags_(stage, health, lastAction, nextFollowUp, { phone: phone, email: email, handle: handle });
  const databaseId = [
    params.sourceId,
    params.sourceSheet.getName(),
    influencerId || handle || name || ('row-' + params.rowNumber)
  ].join('|');

  return [
    databaseId,
    params.clientName,
    params.managerName,
    params.sourceId,
    params.sourceSpreadsheet.getName(),
    params.sourceSheet.getName(),
    params.rowNumber,
    influencerId,
    name,
    handle,
    String(cid_sourceValue_(rowObject, 'platform') || (handle ? 'Instagram' : '')).trim(),
    String(cid_sourceValue_(rowObject, 'tag') || '').trim(),
    String(cid_sourceValue_(rowObject, 'location') || '').trim(),
    phone,
    email,
    String(cid_sourceValue_(rowObject, 'language') || '').trim(),
    stage,
    currentFlow,
    String(cid_sourceValue_(rowObject, 'origin') || '').trim(),
    String(cid_sourceValue_(rowObject, 'source') || '').trim(),
    entryDate || '',
    lastAction || '',
    showDate || '',
    nextFollowUp || '',
    daysWithoutAction === null ? '' : daysWithoutAction,
    health,
    score,
    flags.join(' | '),
    String(cid_sourceValue_(rowObject, 'observations') || '').trim(),
    cid_buildProfileLink_(handle),
    params.sourceSpreadsheet.getUrl(),
    now
  ];
}

function cid_buildClientRows_(databaseRows, updatedAt) {
  const headers = CENTRAL_INFLUENCER_DB.DATABASE_HEADERS;
  const idx = cid_headerIndex_(headers);
  const groups = {};

  databaseRows.forEach(function (row) {
    const client = String(row[idx['Gestor']] || 'Sem gestor').trim() || 'Sem gestor';
    const manager = String(row[idx['Advisor']] || 'Sem advisor').trim() || 'Sem advisor';
    const key = client + '|' + manager;

    if (!groups[key]) {
      groups[key] = {
        client: client,
        manager: manager,
        sheets: {},
        count: 0,
        active: 0,
        attention: 0,
        overdue: 0,
        done: 0,
        blank: 0,
        scoreTotal: 0,
        scoreCount: 0,
        lastAction: null,
        signals: {}
      };
    }

    const group = groups[key];
    const health = String(row[idx['Saude da Gestao']] || '').trim();
    const stage = String(row[idx['Etapa / Status']] || '').trim();
    const rawScore = row[idx['Score Efetividade']];
    const hasScore = rawScore !== '' && rawScore !== null && typeof rawScore !== 'undefined';
    const score = hasScore ? Number(rawScore) : 0;
    const sourceSheet = String(row[idx['Fonte Spreadsheet ID']] || '');
    const lastAction = cid_coerceDate_(row[idx['Data Ultima Interacao']]) || cid_coerceDate_(row[idx['Data Entrada']]);
    const flags = String(row[idx['Sinalizadores']] || '').split('|').map(function (flag) {
      return flag.trim();
    }).filter(Boolean);

    group.sheets[sourceSheet] = true;
    group.count += 1;
    if (hasScore && !isNaN(score)) {
      group.scoreTotal += score;
      group.scoreCount += 1;
    }
    if (cid_norm_(health) === 'ativo') group.active += 1;
    if (cid_norm_(health) === 'em atencao') group.attention += 1;
    if (cid_norm_(health) === 'atrasado') group.overdue += 1;
    if (cid_norm_(health) === 'concluido') group.done += 1;
    if (!stage) group.blank += 1;
    if (lastAction && (!group.lastAction || lastAction > group.lastAction)) {
      group.lastAction = lastAction;
    }
    flags.forEach(function (flag) {
      group.signals[flag] = (group.signals[flag] || 0) + 1;
    });
  });

  return Object.keys(groups).sort().map(function (key) {
    const group = groups[key];
    const scoreAverage = group.scoreCount ? Math.round(group.scoreTotal / group.scoreCount) : '';
    const effectiveness = group.count ? group.done / group.count : 0;
    const daysSinceLastAction = cid_daysBetween_(group.lastAction, updatedAt);
    const health = cid_calculateClientHealth_(group, scoreAverage, daysSinceLastAction);
    const topSignals = Object.keys(group.signals)
      .sort(function (a, b) {
        return group.signals[b] - group.signals[a];
      })
      .slice(0, 4)
      .join(' | ');

    return [
      group.client,
      group.manager,
      Object.keys(group.sheets).length,
      group.count,
      group.active,
      group.attention,
      group.overdue,
      group.done,
      group.blank,
      group.lastAction || '',
      daysSinceLastAction === null ? '' : daysSinceLastAction,
      effectiveness,
      scoreAverage,
      health,
      topSignals,
      updatedAt
    ];
  });
}

function cid_calculateRecordHealth_(stage, lastAction, nextFollowUp) {
  const normalizedStage = cid_norm_(stage);
  const today = cid_stripTime_(new Date());
  const followUp = cid_stripTime_(nextFollowUp);
  const daysWithoutAction = cid_daysBetween_(lastAction, today);

  if (!normalizedStage) return 'Em Atencao';
  if (cid_isFinalStage_(normalizedStage)) return 'Concluido';
  if (followUp && followUp < today) return 'Atrasado';
  if (daysWithoutAction !== null && daysWithoutAction >= 14) return 'Em Atencao';
  return 'Ativo';
}

function cid_calculateRecordScore_(stage, health, lastAction, completeness) {
  const normalizedStage = cid_norm_(stage);
  let score = 45;

  if (normalizedStage.indexOf('fechado') >= 0 || normalizedStage.indexOf('public') >= 0 || normalizedStage.indexOf('post') >= 0) score += 35;
  else if (normalizedStage.indexOf('aula show') >= 0 || normalizedStage.indexOf('aprov') >= 0) score += 25;
  else if (normalizedStage.indexOf('negoci') >= 0 || normalizedStage.indexOf('respondeu') >= 0) score += 18;
  else if (normalizedStage.indexOf('contat') >= 0 || normalizedStage.indexOf('enviado') >= 0) score += 10;

  if (health === 'Atrasado') score -= 25;
  if (health === 'Em Atencao') score -= 12;
  if (health === 'Concluido') score += 12;

  const daysWithoutAction = cid_daysBetween_(lastAction, new Date());
  if (daysWithoutAction !== null) {
    if (daysWithoutAction <= 3) score += 10;
    else if (daysWithoutAction >= 14) score -= 10;
  }

  if (completeness.hasContact) score += 5;
  if (completeness.hasHandle) score += 5;
  if (completeness.hasName) score += 3;

  return Math.max(0, Math.min(100, Math.round(score)));
}

function cid_shouldCountInEffectivenessScore_(stage, currentFlow) {
  const normalizedStage = cid_norm_(stage);
  const normalizedFlow = cid_norm_(currentFlow);
  const text = normalizedStage + ' ' + normalizedFlow;

  return text.indexOf('enviar para crm') >= 0 ||
    text.indexOf('crm') >= 0 ||
    text.indexOf('aula show') >= 0 ||
    text.indexOf('fechado') >= 0 ||
    text.indexOf('public') >= 0 ||
    text.indexOf('postado') >= 0 ||
    text.indexOf('concluido') >= 0 ||
    text.indexOf('entreg') >= 0 ||
    text.indexOf('aprov') >= 0 ||
    text.indexOf('negoci') >= 0 ||
    text.indexOf('respondeu') >= 0;
}

function cid_buildRecordFlags_(stage, health, lastAction, nextFollowUp, contact) {
  const flags = [];
  const normalizedStage = cid_norm_(stage);
  const daysWithoutAction = cid_daysBetween_(lastAction, new Date());

  if (health === 'Atrasado') flags.push('FUP atrasado');
  if (daysWithoutAction !== null && daysWithoutAction >= 14) flags.push('Parado ha 14+ dias');
  if (cid_isFinalStage_(normalizedStage)) flags.push('Entregando Resultados');
  return flags;
}

function cid_calculateClientHealth_(group, scoreAverage, daysSinceLastAction) {
  if (!group.count) return 'Sem Dados';
  const hasScore = scoreAverage !== '' && scoreAverage !== null && typeof scoreAverage !== 'undefined';
  if (group.overdue > 0 || (hasScore && scoreAverage < 45)) return 'Critico';
  if (group.attention / group.count >= 0.35 || daysSinceLastAction >= 14) return 'Em Atencao';
  if (group.done / group.count >= 0.2 || (hasScore && scoreAverage >= 70)) return 'Forte';
  return 'Ativo';
}

function cid_isFinalStage_(normalizedStage) {
  return normalizedStage.indexOf('fechado') >= 0 ||
    normalizedStage.indexOf('public') >= 0 ||
    normalizedStage.indexOf('postado') >= 0 ||
    normalizedStage.indexOf('concluido') >= 0 ||
    normalizedStage.indexOf('entreg') >= 0 ||
    normalizedStage.indexOf('aula show') >= 0;
}

function cid_replaceSheetData_(sheet, headers, rows) {
  const width = headers.length;
  sheet.clearContents();
  if (sheet.getMaxColumns() < width) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), width - sheet.getMaxColumns());
  }
  if (sheet.getMaxRows() < Math.max(rows.length + 1, 2)) {
    sheet.insertRowsAfter(sheet.getMaxRows(), rows.length + 1 - sheet.getMaxRows());
  }

  sheet.getRange(1, 1, 1, width).setValues([headers]);
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, width).setValues(rows);
  }
  cid_styleHeader_(sheet, width);
  sheet.setFrozenRows(1);
}

function cid_appendLogs_(sheet, rows) {
  if (!rows.length) return;
  const startRow = sheet.getLastRow() + 1;
  sheet.getRange(startRow, 1, rows.length, CENTRAL_INFLUENCER_DB.LOG_HEADERS.length).setValues(rows);
}

function cid_applySourceWriteBack_(sheet, writeBack) {
  Object.keys(writeBack).forEach(function (rowNumberText) {
    const rowNumber = Number(rowNumberText);
    const item = writeBack[rowNumberText];
    sheet.getRange(rowNumber, 7, 1, 4).setValues([[
      item.lastUpdate,
      item.imported,
      item.status,
      item.notes
    ]]);
  });
}

function cid_showUpdateAlert_(result) {
  const summary = result.creationSummary || {};
  const lines = [result.message || 'Atualizacao concluida.'];

  if (summary.created && summary.created.length) {
    lines.push('Planilhas criadas: ' + summary.created.join(', '));
  }
  if (summary.duplicates && summary.duplicates.length) {
    lines.push('Duplicadas nao criadas: ' + summary.duplicates.join(', '));
  }
  if (summary.warnings && summary.warnings.length) {
    lines.push('Avisos: ' + summary.warnings.join(' | '));
  }
  if (summary.errors && summary.errors.length) {
    lines.push('Erros: ' + summary.errors.join(' | '));
  }

  try {
    SpreadsheetApp.getUi().alert(lines.join('\n\n'));
  } catch (error) {
    // Chamadas sem UI, como execucoes futuras por gatilho, apenas ignoram o alerta.
  }
}

function cid_readObjectsFromSheet_(sheet, headers) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const width = headers.length;
  const values = sheet.getRange(2, 1, lastRow - 1, width).getValues();
  return values.map(function (row, index) {
    const object = { __rowNumber: index + 2 };
    headers.forEach(function (header, colIndex) {
      object[header] = row[colIndex];
    });
    return object;
  }).filter(function (object) {
    return headers.some(function (header) {
      return String(object[header] || '').trim() !== '';
    });
  });
}

function cid_sheetToDisplayObjects_(sheet, headers) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const values = sheet.getRange(2, 1, lastRow - 1, headers.length).getDisplayValues();
  return values.map(function (row) {
    const object = {};
    headers.forEach(function (header, index) {
      object[header] = row[index];
    });
    return object;
  }).filter(function (object) {
    return headers.some(function (header) {
      return String(object[header] || '').trim() !== '';
    });
  });
}

function cid_buildManagerSummaryForDashboard_(clients) {
  const groups = {};
  clients.forEach(function (client) {
    const manager = String(client['Advisor'] || 'Sem advisor').trim() || 'Sem advisor';
    if (!groups[manager]) {
      groups[manager] = {
        Advisor: manager,
        Gestores: 0,
        Influencers: 0,
        Ativos: 0,
        Atrasados: 0,
        Concluidos: 0,
        Score: 0,
        _scoreTotal: 0,
        _scoreCount: 0
      };
    }

    groups[manager].Gestores += 1;
    groups[manager].Influencers += cid_toNumber_(client['Influencers']);
    groups[manager].Ativos += cid_toNumber_(client['Ativos']);
    groups[manager].Atrasados += cid_toNumber_(client['Atrasados']);
    groups[manager].Concluidos += cid_toNumber_(client['Concluidos']);
    if (String(client['Score Medio'] || '').trim() !== '') {
      groups[manager]._scoreTotal += cid_toNumber_(client['Score Medio']);
      groups[manager]._scoreCount += 1;
    }
  });

  return Object.keys(groups).sort().map(function (manager) {
    const item = groups[manager];
    item.Score = item._scoreCount ? Math.round(item._scoreTotal / item._scoreCount) : '';
    delete item._scoreTotal;
    delete item._scoreCount;
    return item;
  });
}

function cid_buildDashboardMetrics_(database, clients, managers) {
  const totalInfluencers = database.length;
  const active = database.filter(function (row) { return cid_norm_(row['Saude da Gestao']) === 'ativo'; }).length;
  const attention = database.filter(function (row) { return cid_norm_(row['Saude da Gestao']) === 'em atencao'; }).length;
  const overdue = database.filter(function (row) { return cid_norm_(row['Saude da Gestao']) === 'atrasado'; }).length;
  const done = database.filter(function (row) { return cid_norm_(row['Saude da Gestao']) === 'concluido'; }).length;
  const scoreRows = database.filter(function (row) {
    return String(row['Score Efetividade'] || '').trim() !== '';
  });
  const score = scoreRows.length
    ? Math.round(scoreRows.reduce(function (sum, row) { return sum + cid_toNumber_(row['Score Efetividade']); }, 0) / scoreRows.length)
    : '';

  return {
    clients: clients.length,
    managers: managers.length,
    influencers: totalInfluencers,
    active: active,
    attention: attention,
    overdue: overdue,
    done: done,
    score: score
  };
}

function cid_distribution_(rows, field) {
  const counts = {};
  rows.forEach(function (row) {
    const label = String(row[field] || 'Sem valor').trim() || 'Sem valor';
    counts[label] = (counts[label] || 0) + 1;
  });
  const total = rows.length || 1;
  return Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  }).slice(0, 12).map(function (label) {
    return {
      label: label,
      count: counts[label],
      percent: Math.round((counts[label] / total) * 100)
    };
  });
}

function cid_sortDatabaseRows_(rows) {
  const headers = CENTRAL_INFLUENCER_DB.DATABASE_HEADERS;
  const idx = cid_headerIndex_(headers);
  return rows.sort(function (a, b) {
    const clientCompare = String(a[idx['Gestor']] || '').localeCompare(String(b[idx['Gestor']] || ''));
    if (clientCompare) return clientCompare;
    return String(a[idx['@']] || '').localeCompare(String(b[idx['@']] || ''));
  });
}

function cid_makeLogRow_(action, manager, client, spreadsheetId, rows, status, details) {
  return [new Date(), action, manager, client, spreadsheetId, rows, status, details];
}

function cid_headerIndex_(headers) {
  const index = {};
  headers.forEach(function (header, position) {
    index[header] = position;
  });
  return index;
}

function cid_sourceValue_(rowObject, field) {
  return cid_pick_(rowObject, CENTRAL_INFLUENCER_DB.SOURCE_FIELD_ALIASES[field] || []);
}

function cid_hasSourceHeader_(headers, field) {
  const aliases = CENTRAL_INFLUENCER_DB.SOURCE_FIELD_ALIASES[field] || [];
  return aliases.some(function (alias) {
    return headers.indexOf(cid_norm_(alias)) >= 0;
  });
}

function cid_pick_(rowObject, aliases) {
  for (let i = 0; i < aliases.length; i += 1) {
    const key = cid_norm_(aliases[i]);
    if (Object.prototype.hasOwnProperty.call(rowObject, key)) {
      const value = rowObject[key];
      if (String(value || '').trim() !== '') return value;
    }
  }
  return '';
}

function cid_isValidEmail_(value) {
  const email = String(value || '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cid_escapeHtml_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cid_parseSpreadsheetId_(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  const urlMatch = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (urlMatch) return urlMatch[1];
  const idMatch = text.match(/^[a-zA-Z0-9-_]{20,}$/);
  return idMatch ? idMatch[0] : '';
}

function cid_parseFolderId_(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  const folderMatch = text.match(/\/folders\/([a-zA-Z0-9-_]+)/);
  if (folderMatch) return folderMatch[1];
  const idParamMatch = text.match(/[?&]id=([a-zA-Z0-9-_]+)/);
  if (idParamMatch) return idParamMatch[1];
  const idMatch = text.match(/^[a-zA-Z0-9-_]{20,}$/);
  return idMatch ? idMatch[0] : '';
}

function cid_guessClientName_(fileName, managerName) {
  return String(fileName || '')
    .replace(managerName || '', '')
    .replace(/crm/ig, '')
    .replace(/influencers/ig, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() || fileName;
}

function cid_cleanHandle_(value) {
  return String(value || '')
    .trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
    .replace(/^@+/, '')
    .replace(/[/?#].*$/, '')
    .trim();
}

function cid_buildProfileLink_(handle) {
  const cleanHandle = cid_cleanHandle_(handle);
  return cleanHandle ? 'https://www.instagram.com/' + cleanHandle : '';
}

function cid_isYes_(value) {
  const normalized = cid_norm_(value);
  return normalized === 'sim' || normalized === 's' || normalized === 'yes' || normalized === 'true' || normalized === 'ativo';
}

function cid_norm_(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function cid_toNumber_(value) {
  const number = Number(String(value || '').replace('%', '').replace(',', '.'));
  return isNaN(number) ? 0 : number;
}

function cid_sortScoreForRisk_(value) {
  const text = String(value || '').trim();
  if (!text) return 999;
  const number = cid_toNumber_(text);
  return isNaN(number) ? 999 : number;
}

function cid_coerceDate_(value) {
  if (!value) return null;
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    return value;
  }
  if (typeof value === 'number') {
    const dateFromNumber = new Date(value);
    return isNaN(dateFromNumber.getTime()) ? null : dateFromNumber;
  }

  const text = String(value || '').trim();
  if (!text) return null;
  const brMatch = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (brMatch) {
    const date = new Date(Number(brMatch[3]), Number(brMatch[2]) - 1, Number(brMatch[1]));
    return isNaN(date.getTime()) ? null : date;
  }

  const parsed = new Date(text);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function cid_stripTime_(date) {
  if (!date) return null;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function cid_daysBetween_(fromDate, toDate) {
  const from = cid_stripTime_(cid_coerceDate_(fromDate));
  const to = cid_stripTime_(cid_coerceDate_(toDate));
  if (!from || !to) return null;
  return Math.floor((to.getTime() - from.getTime()) / 86400000);
}
