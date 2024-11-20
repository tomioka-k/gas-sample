//

const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName('シート1');

//単一セルの値の取得
function getCellValue() {
  let value = ss.getRange('A1').getValue()
  console.log(value)
  return value
}

//複数セルの値の取得
function getCellValues() {
  let values = ss.getRange('A1:B2').getValues()
  console.log(values)
  return values
}

function setCell() {
  let insert_value = ['★']
  return sheet.getRange('A1').setValue(insert_value);
}

//複数セルの書き込み
function setCells() {
  let insert_values = [['A','B'],['C','D']]
  return sheet.getRange('A1:B2').setValues(insert_values);
}
