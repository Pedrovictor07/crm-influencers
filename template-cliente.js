/****************************************************
 * TEMPLATE CLIENTE
 * Cole este arquivo no Apps Script de cada planilha cliente.
 *
 * Importante:
 * 1. Adicione a library publicada do CRM.
 * 2. Use exatamente o identificador: CRMCore
 * 3. Este template ja reserva 30 slots fixos para futuras automacoes
 ****************************************************/

function onOpen() {
  CRMCore.bootClientSlotMenu();
}

function onEdit(e) {
  CRMCore.handleClientEdit(e);
}

function atualizacaoAutomaticaDiaria() {
  CRMCore.runClientDailyRefreshTrigger();
}

function configurarEstruturaInicial() {
  CRMCore.setupClientSpreadsheet();
}

function checarMandaVerCaptacao() {
  CRMCore.checkClientInfluencerApproval();
}

function adicionarInflu() {
  CRMCore.addClientInfluencer();
}

function montarCaptacao() {
  CRMCore.buildClientCaptacao();
}

function atualizarCRM() {
  CRMCore.updateClientCRM();
}

function enviarEmail01Selecionados() {
  CRMCore.sendClientEmail01Selected();
}

function enviarEmail02Selecionados() {
  CRMCore.sendClientEmail02Selected();
}

function montarBancoDeDados() {
  CRMCore.buildClientDatabase();
}

function executarSlotCRM_(slotName) {
  CRMCore.runClientAction(slotName);
}

function crmAcao01() { executarSlotCRM_('crmAcao01'); }
function crmAcao02() { executarSlotCRM_('crmAcao02'); }
function crmAcao03() { executarSlotCRM_('crmAcao03'); }
function crmAcao04() { executarSlotCRM_('crmAcao04'); }
function crmAcao05() { executarSlotCRM_('crmAcao05'); }
function crmAcao06() { executarSlotCRM_('crmAcao06'); }
function crmAcao07() { executarSlotCRM_('crmAcao07'); }
function crmAcao08() { executarSlotCRM_('crmAcao08'); }
function crmAcao09() { executarSlotCRM_('crmAcao09'); }
function crmAcao10() { executarSlotCRM_('crmAcao10'); }
function crmAcao11() { executarSlotCRM_('crmAcao11'); }
function crmAcao12() { executarSlotCRM_('crmAcao12'); }
function crmAcao13() { executarSlotCRM_('crmAcao13'); }
function crmAcao14() { executarSlotCRM_('crmAcao14'); }
function crmAcao15() { executarSlotCRM_('crmAcao15'); }
function crmAcao16() { executarSlotCRM_('crmAcao16'); }
function crmAcao17() { executarSlotCRM_('crmAcao17'); }
function crmAcao18() { executarSlotCRM_('crmAcao18'); }
function crmAcao19() { executarSlotCRM_('crmAcao19'); }
function crmAcao20() { executarSlotCRM_('crmAcao20'); }
function crmAcao21() { executarSlotCRM_('crmAcao21'); }
function crmAcao22() { executarSlotCRM_('crmAcao22'); }
function crmAcao23() { executarSlotCRM_('crmAcao23'); }
function crmAcao24() { executarSlotCRM_('crmAcao24'); }
function crmAcao25() { executarSlotCRM_('crmAcao25'); }
function crmAcao26() { executarSlotCRM_('crmAcao26'); }
function crmAcao27() { executarSlotCRM_('crmAcao27'); }
function crmAcao28() { executarSlotCRM_('crmAcao28'); }
function crmAcao29() { executarSlotCRM_('crmAcao29'); }
function crmAcao30() { executarSlotCRM_('crmAcao30'); }
