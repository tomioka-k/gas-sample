//最終行に追加
const sheetAdd = () => {
  const sheet_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const sheet_name = "シート1";

  const sheet = SpreadsheetApp.openById(sheet_id).getSheetByName(sheet_name);

  const addArray = ["あ", "い", "う"];

  sheet.appendRow(addArray);
};
