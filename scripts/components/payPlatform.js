import DomHandler from "../domHandler.js";
import cartList from "./cartList.js"
import STORE from "../store.js";
import helpers from "../helpers/helpers.js";

const payPlatform = (() => {
  return {
    render: () => {
      return `
      <div class="flex-al-jsb">
      <p>Direccion de Facturacion</p>
          <select class = "border" data-purpose="billing-address-country" autocomplete="off" id="billingAddressCountry" class="form-control">
            <option value="" disabled="">Selecciona...</option>
            <option value="AF">Afganistan</option>
            <option value="AL">Albania</option>
            <option value="DE">Alemania</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguila</option>
            <option value="AQ">Antartida</option>
            <option value="AG">Antigua y Barbuda</option>
            <option value="SA">Arabia Saudi</option>
            <option value="DZ">Argelia</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaiyan</option>
            <option value="BS">Bahamas</option>
            <option value="BD">Banglades</option>
            <option value="BB">Barbados</option>
            <option value="BH">Barein</option>
            <option value="BE">Belgica</option>
            <option value="BZ">Belice</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BY">Bielorrusia</option>
            <option value="MM">Birmania</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire</option>
            <option value="BA">Bosnia y Herzegovina</option>
            <option value="BW">Botsuana</option>
            <option value="BR">Brasil</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="BT">Butan</option>
            <option value="CV">Cabo Verde</option>
            <option value="KH">Camboya</option>
            <option value="CM">Camerun</option>
            <option value="CA">Canada</option>
            <option value="QA">Catar</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CY">Chipre</option>
            <option value="VA">Ciudad del Vaticano</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoras</option>
            <option value="CG">Congo</option>
            <option value="KR">Corea del Sur</option>
            <option value="CI">Costa de Marfil</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croacia</option>
            <option value="CW">Curazao</option>
            <option value="DK">Dinamarca</option>
            <option value="DM">Dominica</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egipto</option>
            <option value="SV">El Salvador</option>
            <option value="AE">Emiratos arabes Unidos</option>
            <option value="ER">Eritrea</option>
            <option value="SK">Eslovaquia</option>
            <option value="SI">Eslovenia</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="EE">Estonia</option>
            <option value="ET">Etiopia</option>
            <option value="PH">Filipinas</option>
            <option value="FI">Finlandia</option>
            <option value="FJ">Fiyi</option>
            <option value="FR">Francia</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GD">Granada</option>
            <option value="GR">Grecia</option>
            <option value="GL">Groenlandia</option>
            <option value="GP">Guadalupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GF">Guayana Francesa</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GQ">Guinea Ecuatorial</option>
            <option value="GW">Guinea-Bisau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="NL">Holanda</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungria</option>
            <option value="ID">Indonesia</option>
            <option value="IQ">Irak</option>
            <option value="IE">Irlanda</option>
            <option value="BV">Isla Bouvet</option>
            <option value="IM">Isla de Man</option>
            <option value="NF">Isla Norfolk</option>
            <option value="IS">Islandia</option>
            <option value="AX">Islas Åland</option>
            <option value="KY">Islas Caiman</option>
            <option value="CC">Islas Cocos</option>
            <option value="CK">Islas Cook</option>
            <option value="FO">Islas Feroe</option>
            <option value="GS">Islas Georgias del Sur y Sandwich del Sur</option>
            <option value="HM">Islas Heard y McDonald</option>
            <option value="FK">Islas Malvinas</option>
            <option value="MP">Islas Marianas del Norte</option>
            <option value="MH">Islas Marshall</option>
            <option value="PN">Islas Pitcairn</option>
            <option value="SB">Islas Salomon</option>
            <option value="TC">Islas Turcas y Caicos</option>
            <option value="UM">Islas Ultramarinas de Estados Unidos</option>
            <option value="VG">Islas Virgenes Britanicas</option>
            <option value="VI">Islas Virgenes de los Estados Unidos</option>
            <option value="IL">Israel</option>
            <option value="IT">Italia</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japon</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordania</option>
            <option value="KZ">Kazajistan</option>
            <option value="KE">Kenia</option>
            <option value="KG">Kirguistan</option>
            <option value="KI">Kiribati</option>
            <option value="CX">Kiritimati</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="LA">Laos</option>
            <option value="LS">Lesoto</option>
            <option value="LV">Letonia</option>
            <option value="LB">Libano</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libia</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lituania</option>
            <option value="LU">Luxemburgo</option>
            <option value="MO">Macao</option>
            <option value="MK">Macedonia</option>
            <option value="MG">Madagascar</option>
            <option value="MY">Malasia</option>
            <option value="MW">Malaui</option>
            <option value="MV">Maldivas</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MA">Marruecos</option>
            <option value="MQ">Martinica</option>
            <option value="MU">Mauricio</option>
            <option value="MR">Mauritania</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldavia</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MZ">Mozambique</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NO">Noruega</option>
            <option value="NC">Nueva Caledonia</option>
            <option value="NZ">Nueva Zelanda</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palaos</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua Nueva Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PF">Polinesia Francesa</option>
            <option value="PL">Polonia</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="GB">Reino Unido</option>
            <option value="CF">Republica Centroafricana</option>
            <option value="CZ">Republica Checa</option>
            <option value="CD">Republica Democratica del Congo</option>
            <option value="DO">Republica Dominicana</option>
            <option value="RE">Reunion</option>
            <option value="RW">Ruanda</option>
            <option value="RO">Rumania</option>
            <option value="RU">Rusia</option>
            <option value="EH">Sahara Occidental</option>
            <option value="WS">Samoa</option>
            <option value="AS">Samoa Americana</option>
            <option value="BL">San Bartolome</option>
            <option value="KN">San Cristobal y Nieves</option>
            <option value="SM">San Marino</option>
            <option value="MF">San Martin</option>
            <option value="PM">San Pedro y Miquelon</option>
            <option value="VC">San Vicente y las Granadinas</option>
            <option value="SH">Santa Elena</option>
            <option value="LC">Santa Lucia</option>
            <option value="ST">Santo Tome y Principe</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leona</option>
            <option value="SG">Singapur</option>
            <option value="SX">Sint Maarten</option>
            <option value="SO">Somalia</option>
            <option value="LK">Sri Lanka</option>
            <option value="SZ">Suazilandia</option>
            <option value="ZA">Sudafrica</option>
            <option value="SS">Sudan del Sur</option>
            <option value="SE">Suecia</option>
            <option value="CH">Suiza</option>
            <option value="SR">Surinam</option>
            <option value="SJ">Svalbard y Jan Mayen</option>
            <option value="TH">Tailandia</option>
            <option value="TW">Taiwan</option>
            <option value="TZ">Tanzania</option>
            <option value="TJ">Tayikistan</option>
            <option value="IO">Territorio Britanico del Oceano indico</option>
            <option value="TF">Territorios Australes Franceses</option>
            <option value="PS">Territorios Palestinos</option>
            <option value="TL">Timor Oriental</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad y Tobago</option>
            <option value="TN">Tunez</option>
            <option value="TM">Turkmenistan</option>
            <option value="TR">Turquia</option>
            <option value="TV">Tuvalu</option>
            <option value="UA">Ucrania</option>
            <option value="UG">Uganda</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="WF">Wallis y Futuna</option>
            <option value="YE">Yemen</option>
            <option value="DJ">Yibuti</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabue</option>
          </select>
          <p>Metodo de pago</p>
          <select class = "border" class = "border">
            <option value ="" disabled ="">Seleccione....</option>
            <option value = "PP">Pay Pal</option>
            <option value = "CC">Tarjeta de Credito</option>
          </select>
          <div class = "flex-al-ja">
            <img class = "cd-image" src = "../images/cardvisa.svg" alt = "visa">
            <img class = "cd-image" src = "../images/cardmastercard.svg" alt = "master">
            <img class = "cd-image" src = "../images/cardamex.svg" alt = "amex">
            <img class = "cd-image" src = "../images/carddiscover.svg" alt = "discover">
          </div>
      </div>
      <div class = "flex column m4-m4 g4">
        <input class = "cd-input" type = "text" placeholder = "Juan Perez">
        <input class = "cd-input" type = "text" placeholder = "1234-1234-1234-1234">
        <input class = "cd-input" type = "text" placeholder = "10/29">
        <input class = "cd-input" type = "text" placeholder = "933">
        <input class = "cd-input" type = "text" placeholder = "123456">
        <input class = "cd-input" type = "text">  
      </div>
      <button class = "flex-al-jc correct-button m4-m4">Corregir Invoice</button>
      <button class = "flex-al-jc pay-button m4-m4">Realizar Pago 💰💸</button>
      `;
    },
    listeners: () => {
      document.querySelector(".pay-button").addEventListener('click', (e) => {
        const message = document.createElement('h2');
        message.innerText = "Pago Realizado Exitosamente!"
        e.target.after(message);
        location.reload();
      });
      document.querySelector(".correct-button").addEventListener('click', () => {
        DomHandler.render(cartList(STORE.getProductsAtCart()),".shopping-cart-content");
        helpers.totalAmount("#product-price");
      });
    },
  };
})();

export default payPlatform;
