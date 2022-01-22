const invoiceComponent = (details) => {
  return {
    render: () => {
      return`
      <table class="default">
        <tr>
          <th>Cantidad</th>
          <th>Descripcion</th>
          <th>Importe</th>
        </tr>
        ${details.map(details => `<tr><td>${details[0]}</td><td>${details[1]}</td><td>${details[2]}</td></tr>`).join('')}
      </table>`;
    },
    listeners: () => {},
  };
};

export default invoiceComponent;
