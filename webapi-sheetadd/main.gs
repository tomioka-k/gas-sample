const fetchAddSheet = () => {
  const sheet_id = "xxxxxxxxxxxxxxxxxxxxxx";
  const sheet_name = "シート1";

  const sheet = SpreadsheetApp.openById(sheet_id).getSheetByName(sheet_name);

  const url = "https://jsonplaceholder.typicode.com/";
  let response = UrlFetchApp.fetch(`${url}posts`);

  const data = JSON.parse(response);

  let add_values = [];

  add_values.push(["userId", "id", "title", "body"]);

  data.map((d) => {
    add_values.push([d.userId, d.id, d.title, d.body]);
  });
  const value_length = add_values.length;
  const range = sheet.getRange(1, 1, value_length, 4);
  sheet.clearContents();
  range.setValues(add_values);
};
