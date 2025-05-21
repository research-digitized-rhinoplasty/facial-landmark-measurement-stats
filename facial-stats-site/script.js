let data = [];

fetch('data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    const subjects = [...new Set(data.map(item => item.subject_id))];
    const select = document.getElementById("subjectSelect");

    subjects.forEach(id => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = id;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      displayTable(select.value);
    });

    // Load first subject by default
    if (subjects.length > 0) displayTable(subjects[0]);
  });

function displayTable(subjectId) {
  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  const filtered = data.filter(item => item.subject_id === subjectId);
  filtered.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.landmark}</td>
      <td>${item.value}</td>
      <td>${item.unit}</td>
    `;
    tableBody.appendChild(row);
  });
}
