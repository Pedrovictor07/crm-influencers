/****************************************************
 * LIBRARY API
 * Superficie publica para uso via Apps Script Library
 ****************************************************/

function bootClientMenu() {
  buildAutomationMenu_({ useClientSlots: false });
  refreshOperationalQueuesSilently_();
}

function bootClientSlotMenu() {
  buildAutomationMenu_({ useClientSlots: true });
  refreshOperationalQueuesSilently_();
}

function handleClientEdit(e) {
  onEdit(e);
}

function runClientDailyRefreshTrigger() {
  atualizacaoAutomaticaDiaria();
}

function runClientAction(slotName) {
  runClientAction_(slotName);
}

function getClientActionSlots() {
  return getClientActionSlotCatalog_();
}

function setupClientSpreadsheet() {
  configurarEstruturaInicial();
}

function addClientInfluencer() {
  adicionarInflu();
}

function checkClientInfluencerApproval() {
  checarMandaVerCaptacao();
}

function buildClientCaptacao() {
  montarCaptacao();
}

function updateClientCRM() {
  atualizarCRM();
}

function sendClientEmail01Selected() {
  enviarEmail01Selecionados();
}

function sendClientEmail02Selected() {
  enviarEmail02Selecionados();
}

function buildClientDatabase() {
  montarBancoDeDados();
}

function getClientTemplateInfo() {
  const assignedSlots = getClientActionSlotCatalog_().filter(function (slotInfo) {
    return slotInfo.assigned;
  });

  return {
    libraryApiVersion: '1.3.0',
    expectedLibraryIdentifier: 'CRMCore',
    preferredMenuBootstrapFunction: 'bootClientSlotMenu',
    slotCount: getClientActionSlotCount_(),
    menuSlots: assignedSlots
      .filter(function (slotInfo) {
        return slotInfo.showInMenu;
      })
      .map(function (slotInfo) {
        return slotInfo.slot;
      }),
    assignedSlots: assignedSlots,
    legacyFunctions: [
      'configurarEstruturaInicial',
      'checarMandaVerCaptacao',
      'adicionarInflu',
      'montarCaptacao',
      'atualizarCRM',
      'enviarEmail01Selecionados',
      'enviarEmail02Selecionados',
      'montarBancoDeDados'
    ]
  };
}
