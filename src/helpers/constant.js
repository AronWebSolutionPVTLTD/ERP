const countries = [
    { name: "Afghanistan", dial_code: "+93", code: "AF" },
    { name: "Albania", dial_code: "+355", code: "AL" },
    { name: "Argentina", dial_code: "+54", code: "AR" },
    { name: "Australia", dial_code: "+61", code: "AU" },
    { name: "Austria", dial_code: "+43", code: "AT" },
    { name: "Bangladesh", dial_code: "+880", code: "BD" },
    { name: "Belgium", dial_code: "+32", code: "BE" },
    { name: "Bahrain", dial_code: "+973", code: "BH" },
    { name: "Brazil", dial_code: "+55", code: "BR" },
    { name: "Bhutan", dial_code: "+975", code: "BT" },
    { name: "Bulgaria", dial_code: "+359", code: "BG" },
    { name: "Canada", dial_code: "+1", code: "CA" },
    { name: "China", dial_code: "+86", code: "CN" },
    { name: "Chile", dial_code: "+56", code: "CL" },
    { name: "Colombia", dial_code: "+57", code: "CO" },
    { name: "Costa Rica", dial_code: "+506", code: "CR" },
    { name: "Cuba", dial_code: "+53", code: "CU" },
    { name: "Cyprus", dial_code: "+537", code: "CY" },
    { name: "Denmark", dial_code: "+45", code: "DK" },
    { name: "Egypt", dial_code: "+20", code: "EG" },
    { name: "Ethiopia", dial_code: "+251", code: "ET" },
    { name: "Finland", dial_code: "+358", code: "FI" },
    { name: "France", dial_code: "+33", code: "FR" },
    { name: "Georgia", dial_code: "+995", code: "GE" },
    { name: "Germany", dial_code: "+49", code: "DE" },
    { name: "Ghana", dial_code: "+233", code: "GH" },
    { name: "Greece", dial_code: "+30", code: "GR" },
    { name: "Greenland", dial_code: "+299", code: "GL" },
    { name: "Grenada", dial_code: "+1 473", code: "GD" },
    { name: "Guam", dial_code: "+1 671", code: "GU" },
    { name: "Guatemala", dial_code: "+502", code: "GT" },
    { name: "Guinea", dial_code: "+224", code: "GN" },
    { name: "Guyana", dial_code: "+595", code: "GY" },
    { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
    { name: "Honduras", dial_code: "+504", code: "HN" },
    { name: "Haiti", dial_code: "+509", code: "HT" },
    { name: "India", dial_code: "+91", code: "IN" },
    { name: "Indonesia", dial_code: "+62", code: "ID" },
    { name: "Iraq", dial_code: "+964", code: "IQ" },
    { name: "Ireland", dial_code: "+353", code: "IE" },
    { name: "Iceland", dial_code: "+354", code: "IS" },
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Italy", dial_code: "+39", code: "IT" },
    { name: "Cambodia", dial_code: "+855", code: "KH" },
    { name: "Algeria", dial_code: "+213", code: "DZ" },
    { name: "Fiji", dial_code: "+679", code: "FJ" },
    { name: "Guadeloupe", dial_code: "+590", code: "GP" },
    { name: "Hungary", dial_code: "+36", code: "HU" },
    { name: "Jamaica", dial_code: "+1 876", code: "JM" },
    { name: "Jordan", dial_code: "+962", code: "JO" },
    { name: "Japan", dial_code: "+81", code: "JP" },
    { name: "Kenya", dial_code: "+254", code: "KE" },
    { name: "Kiribati", dial_code: "+686", code: "KI" },
    { name: "Kuwait", dial_code: "+965", code: "KW" },
    { name: "Kyrgyzstan", dial_code: "+996", code: "KG" },
    { name: "Kazakhstan", dial_code: "+7 7", code: "KZ" },
    { name: "Lebanon", dial_code: "+961", code: "LB" },
    { name: "Liechtenstein", dial_code: "+423", code: "LI" },
    { name: "Lithuania", dial_code: "+370", code: "LT" },
    { name: "Liberia", dial_code: "+231", code: "LR" },
    { name: "Lesotho", dial_code: "+266", code: "LS" },
    { name: "Luxembourg", dial_code: "+352", code: "LU" },
    { name: "Latvia", dial_code: "+371", code: "LV" },
    { name: "Monaco", dial_code: "+377", code: "MC" },
    { name: "Montenegro", dial_code: "+382", code: "ME" },
    { name: "Morocco", dial_code: "+212", code: "MA" },
    { name: "Montserrat", dial_code: "+1664", code: "MS" },
    { name: "Mexico", dial_code: "+52", code: "MX" },
    { name: "Nicaragua", dial_code: "+505", code: "NI" },
    { name: "Niger", dial_code: "+227", code: "NE" },
    { name: "Norfolk Island", dial_code: "+672", code: "NF" },
    { name: "Northern Mariana Islands", dial_code: "+1 670", code: "MP" },
    { name: "Niue", dial_code: "+683", code: "NU" },
    { name: "New Zealand", dial_code: "+64", code: "NZ" },
    { name: "Mayotte", dial_code: "+262", code: "YT" },
    { name: "Mauritius", dial_code: "+230", code: "MU" },
    { name: "Mauritania", dial_code: "+222", code: "MR" },
    { name: "Martinique", dial_code: "+596", code: "MQ" },
    { name: "Marshall Islands", dial_code: "+692", code: "MH" },
    { name: "Malta", dial_code: "+356", code: "MT" },
    { name: "Mali", dial_code: "+223", code: "ML" },
    { name: "Mongolia", dial_code: "+976", code: "MN" },
    { name: "Maldives", dial_code: "+960", code: "MV" },
    { name: "Malaysia", dial_code: "+60", code: "MY" },
    { name: "Malawi", dial_code: "+265", code: "MW" },
    { name: "Madagascar", dial_code: "+261", code: "MG" },
    { name: "Myanmar", dial_code: "+95", code: "MM" },
    { name: "Namibia", dial_code: "+264", code: "NA" },
    { name: "Netherlands Antilles", dial_code: "+599", code: "AN" },
    { name: "New Caledonia", dial_code: "+687", code: "NC" },
    { name: "Nigeria", dial_code: "+234", code: "NG" },
    { name: "Netherlands", dial_code: "+31", code: "NL" },
    { name: "Norway", dial_code: "+47", code: "NO" },
    { name: "Nepal", dial_code: "+977", code: "NP" },
    { name: "Nauru", dial_code: "+674", code: "NR" },
    { name: "Oman", dial_code: "+968", code: "OM" },
    { name: "Panama", dial_code: "+507", code: "PA" },
    { name: "Peru", dial_code: "+51", code: "PE" },
    { name: "Philippines", dial_code: "+63", code: "PH" },
    { name: "Poland", dial_code: "+48", code: "PL" },
    { name: "Puerto Rico", dial_code: "+1 939", code: "PR" },
    { name: "Paraguay", dial_code: "+595", code: "PY" },
    { name: "Papua New Guinea", dial_code: "+675", code: "PG" },
    { name: "Portugal", dial_code: "+351", code: "PT" },
    { name: "Palau", dial_code: "+680", code: "PW" },
    { name: "Qatar", dial_code: "+974", code: "QA" },
    { name: "Romania", dial_code: "+40", code: "RO" },
    { name: "Rwanda", dial_code: "+250", code: "RW" },
    { name: "Saudi Arabia", dial_code: "+966", code: "SA" },
    { name: "Serbia", dial_code: "+381", code: "RS" },
    { name: "Seychelles", dial_code: "+248", code: "SC" },
    { name: "Singapore", dial_code: "+65", code: "SG" },
    { name: "Sierra Leone", dial_code: "+232", code: "SL" },
    { name: "Slovakia", dial_code: "+421", code: "SK" },
    { name: "Slovenia", dial_code: "+386", code: "SI" },
    { name: "Senegal", dial_code: "+221", code: "SN" },
    { name: "San Marino", dial_code: "+378", code: "SM" },
    { name: "Solomon Islands", dial_code: "+677", code: "SB" },
    {
        name: "South Georgia and the South Sandwich Islands",
        dial_code: "+500",
        code: "GS",
    },
    { name: "Spain", dial_code: "+34", code: "ES" },
    { name: "Sri Lanka", dial_code: "+94", code: "LK" },
    { name: "Sudan", dial_code: "+249", code: "SD" },
    { name: "Suriname", dial_code: "+597", code: "SR" },
    { name: "Sweden", dial_code: "+46", code: "SE" },
    { name: "Switzerland", dial_code: "+41", code: "CH" },
    { name: "Swaziland", dial_code: "+268", code: "SZ" },
    { name: "Thailand", dial_code: "+66", code: "TH" },
    { name: "Tajikistan", dial_code: "+992", code: "TJ" },
    { name: "Togo", dial_code: "+228", code: "TG" },
    { name: "Tokelau", dial_code: "+690", code: "TK" },
    { name: "Tonga", dial_code: "+676", code: "TO" },
    { name: "Trinidad and Tobago", dial_code: "+1 868", code: "TT" },
    { name: "Tunisia", dial_code: "+216", code: "TN" },
    { name: "Turkey", dial_code: "+90", code: "TR" },
    { name: "Turkmenistan", dial_code: "+993", code: "TM" },
    { name: "Turks and Caicos Islands", dial_code: "+1 649", code: "TC" },
    { name: "Tuvalu", dial_code: "+688", code: "TV" },
    { name: "Uganda", dial_code: "+256", code: "UG" },
    { name: "Ukraine", dial_code: "+380", code: "UA" },
    { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
    { name: "Bolivia, Plurinational State of", dial_code: "+591", code: "BO" },
    { name: "Brunei Darussalam", dial_code: "+673", code: "BN" },
    { name: "Cocos (Keeling) Islands", dial_code: "+61", code: "CC" },
    {
        name: "Congo, The Democratic Republic of the",
        dial_code: "+243",
        code: "CD",
    },
    { name: "Cote d'Ivoire", dial_code: "+225", code: "CI" },
    { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK" },
    { name: "United Kingdom", dial_code: "+44", code: "GB" },
    { name: "Guernsey", dial_code: "+44", code: "GG" },
    { name: "Hong Kong", dial_code: "+852", code: "HK" },
    { name: "Iran, Islamic Republic of", dial_code: "+98", code: "IR" },
    { name: "Isle of Man", dial_code: "+44", code: "IM" },
    { name: "Jersey", dial_code: "+44", code: "JE" },
    { name: "Korea, Republic of", dial_code: "+82", code: "KR" },
    {
        name: "Korea, Democratic People's Republic of",
        dial_code: "+850",
        code: "KP",
    },
    { name: "Lao People's Democratic Republic", dial_code: "+856", code: "LA" },
    { name: "Libyan Arab Jamahiriya", dial_code: "+218", code: "LY" },
    { name: "Micronesia, Federated States of", dial_code: "+691", code: "FM" },
    {
        name: "Macedonia, The Former Yugoslav Republic of",
        dial_code: "+389",
        code: "MK",
    },
    { name: "Macao", dial_code: "+853", code: "MO" },
    { name: "Moldova, Republic of", dial_code: "+373", code: "MD" },
    { name: "Mozambique", dial_code: "+258", code: "MZ" },
    { name: "Pitcairn", dial_code: "+872", code: "PN" },
    { name: "Palestinian Territory, Occupied", dial_code: "+970", code: "PS" },
    { name: "Pakistan", dial_code: "+92", code: "PK" },
    { name: "RÃ©union", dial_code: "+262", code: "RE" },
    { name: "Russia", dial_code: "+7", code: "RU" },
    { name: "Saint BarthÃ©lemy", dial_code: "+590", code: "BL" },
    { name: "Saint Kitts and Nevis", dial_code: "+1 869", code: "KN" },
    { name: "Saint Lucia", dial_code: "+1 758", code: "LC" },
    { name: "Saint Martin", dial_code: "+590", code: "MF" },
    { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" },
    { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" },
    { name: "Timor-Leste", dial_code: "+670", code: "TL" },
    { name: "Tanzania, United Republic of", dial_code: "+255", code: "TZ" },
    { name: "Taiwan, Province of China", dial_code: "+886", code: "TW" },
    { name: "Saint Vincent and the Grenadines", dial_code: "+1 784", code: "VC" },
    {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        dial_code: "+290",
        code: "SH",
    },
    { name: "Somalia", dial_code: "+252", code: "SO" },
    { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ" },
    { name: "Syrian Arab Republic", dial_code: "+963", code: "SY" },
    { name: "Holy See (Vatican City State)", dial_code: "+379", code: "VA" },
    { name: "Uruguay", dial_code: "+598", code: "UY" },
    { name: "United States", dial_code: "+1", code: "US" },
    { name: "Uzbekistan", dial_code: "+998", code: "UZ" },
    { name: "Venezuela, Bolivarian Republic of", dial_code: "+58", code: "VE" },
    { name: "Virgin Islands, British", dial_code: "+1 284", code: "VG" },
    { name: "Virgin Islands, U.S.", dial_code: "+1 340", code: "VI" },
    { name: "Viet Nam", dial_code: "+84", code: "VN" },
    { name: "South Africa", dial_code: "+27", code: "ZA" },
    { name: "Samoa", dial_code: "+685", code: "WS" },
    { name: "Yemen", dial_code: "+967", code: "YE" },
    { name: "Zimbabwe", dial_code: "+263", code: "ZW" },
];
const newCountries = {
    "AD": { primary: "+376", secondary: "AD" },
    "AF": { primary: "+93", secondary: "AF" },
    "AI": { primary: "+1264", secondary: "AI" },
    "AG": { primary: "+1268", secondary: "AG" },
    "AL": { primary: "+355", secondary: "AL" },
    "AM": { primary: "+374", secondary: "AM" },
    "AO": { primary: "+244", secondary: "AO" },
    "AW": { primary: "+297", secondary: "AW" },
    "AR": { primary: "+54", secondary: "AR" },
    "AS": { primary: "+1684", secondary: "AS" },
    "AU": { primary: "+61", secondary: "AU" },
    "AT": { primary: "+43", secondary: "AT" },
    "AZ": { primary: "+994", secondary: "AZ" },
    "BB": { primary: "+1246", secondary: "BB" },
    "BD": { primary: "+880", secondary: "BD" },
    "BE": { primary: "+32", secondary: "BE" },
    "BH": { primary: "+973", secondary: "BH" },
    "BS": { primary: "+1242", secondary: "BS" },
    "BR": { primary: "+55", secondary: "BR" },
    "BT": { primary: "+975", secondary: "BT" },
    "BG": { primary: "+359", secondary: "BG" },
    "BJ": { primary: "+229", secondary: "BJ" },
    "BM": { primary: "+1441", secondary: "BM" },
    "BY": { primary: "+375", secondary: "BY" },
    "BZ": { primary: "+501", secondary: "BZ" },
    "CA": { primary: "+1", secondary: "CA" },
    "CN": { primary: "+86", secondary: "CN" },
    "CL": { primary: "+56", secondary: "CL" },
    "CO": { primary: "+57", secondary: "CO" },
    "CR": { primary: "+506", secondary: "CR" },
    "CU": { primary: "+53", secondary: "CU" },
    "CY": { primary: "+537", secondary: "CY" },
    "DK": { primary: "+45", secondary: "DK" },
    "EG": { primary: "+20", secondary: "EG" },
    "ET": { primary: "+251", secondary: "ET" },
    "FI": { primary: "+358", secondary: "FI" },
    "FR": { primary: "+33", secondary: "FR" },
    "GE": { primary: "+995", secondary: "GE" },
    "DE": { primary: "+49", secondary: "DE" },
    "GH": { primary: "+233", secondary: "GH" },
    "GR": { primary: "+30", secondary: "GR" },
    "GL": { primary: "+299", secondary: "GL" },
    "GD": { primary: "+1 473", secondary: "GD" },
    "GU": { primary: "+1 671", secondary: "GU" },
    "GT": { primary: "+502", secondary: "GT" },
    "GN": { primary: "+224", secondary: "GN" },
    "GY": { primary: "+595", secondary: "GY" },
    "GW": { primary: "+245", secondary: "GW" },
    "HN": { primary: "+504", secondary: "HN" },
    "HT": { primary: "+509", secondary: "HT" },
    "IN": { primary: "+91", secondary: "IN" },
    "ID": { primary: "+62", secondary: "ID" },
    "IQ": { primary: "+964", secondary: "IQ" },
    "IE": { primary: "+353", secondary: "IE" },
    "IS": { primary: "+354", secondary: "IS" },
    "IL": { primary: "+972", secondary: "IL" },
    "IT": { primary: "+39", secondary: "IT" },
    "KH": { primary: "+855", secondary: "KH" },
    "DZ": { primary: "+213", secondary: "DZ" },
    "FJ": { primary: "+679", secondary: "FJ" },
    "GP": { primary: "+590", secondary: "GP" },
    "HU": { primary: "+36", secondary: "HU" },
    "JM": { primary: "+1 876", secondary: "JM" },
    "JO": { primary: "+962", secondary: "JO" },
    "JP": { primary: "+81", secondary: "JP" },
    "KE": { primary: "+254", secondary: "KE" },
    "KI": { primary: "+686", secondary: "KI" },
    "KW": { primary: "+965", secondary: "KW" },
    "KG": { primary: "+996", secondary: "KG" },
    "KZ": { primary: "+7 7", secondary: "KZ" },
    "LB": { primary: "+961", secondary: "LB" },
    "LI": { primary: "+423", secondary: "LI" },
    "LT": { primary: "+370", secondary: "LT" },
    "LT": { primary: "+231", secondary: "LT" },
    "LS": { primary: "+266", secondary: "LS" },
    "LU": { primary: "+352", secondary: "LU" },
    "LV": { primary: "+371", secondary: "LV" },
    "MC": { primary: "+377", secondary: "MC" },
    "ME": { primary: "+382", secondary: "ME" },
    "MA": { primary: "+212", secondary: "MA" },
    "MS": { primary: "+1664", secondary: "MS" },
    "MX": { primary: "+52", secondary: "MX" },
    "NI": { primary: "+505", secondary: "NI" },
    "NE": { primary: "+227", secondary: "NE" },
    "NF": { primary: "+672", secondary: "NF" },
    "MP": { primary: "+1 670", secondary: "MP" },
    "NU": { primary: "+683", secondary: "NU" },
    "NZ": { primary: "+64", secondary: "NZ" },
    "YT": { primary: "+262", secondary: "YT" },
    "MU": { primary: "+230", secondary: "MU" },
    "MR": { primary: "+222", secondary: "MR" },
    "MQ": { primary: "+596", secondary: "MQ" },
    "MH": { primary: "+692", secondary: "MH" },
    "MT": { primary: "+356", secondary: "MT" },
    "ML": { primary: "+223", secondary: "ML" },
    "MN": { primary: "+976", secondary: "MN" },
    "MV": { primary: "+960", secondary: "MV" },
    "MY": { primary: "+60", secondary: "MY" },
    "MW": { primary: "+265", secondary: "MW" },
    "MG": { primary: "+261", secondary: "MG" },
    "MM": { primary: "+95", secondary: "MM" },
    "NA": { primary: "+264", secondary: "NA" },
    "AN": { primary: "+599", secondary: "AN" },
    "NC": { primary: "+687", secondary: "NC" },
    "NG": { primary: "+234", secondary: "NG" },
    "NL": { primary: "+31", secondary: "NL" },
    "NO": { primary: "+47", secondary: "NO" },
    "NP": { primary: "+977", secondary: "NP" },
    "NR": { primary: "+674", secondary: "NR" },
    "OM": { primary: "+968", secondary: "OM" },
    "PA": { primary: "+507", secondary: "PA" },
    "PE": { primary: "+51", secondary: "PE" },
    "PH": { primary: "+63", secondary: "PH" },
    "PL": { primary: "+48", secondary: "PL" },
    "PR": { primary: "+1 939", secondary: "PR" },
    "PY": { primary: "+595", secondary: "PY" },
    "PG": { primary: "+675", secondary: "PG" },
    "PT": { primary: "+351", secondary: "PT" },
    "PW": { primary: "+680", secondary: "PW" },
    "QA": { primary: "+974", secondary: "QA" },
    "RO": { primary: "+40", secondary: "RO" },
    "RW": { primary: "+250", secondary: "RW" },
    "SA": { primary: "+966", secondary: "SA" },
    "RS": { primary: "+381", secondary: "RS" },
    "SC": { primary: "+248", secondary: "SC" },
    "SG": { primary: "+65", secondary: "SG" },
    "SL": { primary: "+232", secondary: "SL" },
    "SK": { primary: "+421", secondary: "SK" },
    "SS": { primary: "+211", secondary: "SS" },
    "SI": { primary: "+386", secondary: "SI" },
    "SN": { primary: "+221", secondary: "SN" },
    "SM": { primary: "+378", secondary: "SM" },
    "SX": { primary: "+721", secondary: "SX" },
    "SB": { primary: "+677", secondary: "SB" },
    "GS": {
        primary: "+500",
        secondary: "GS",
    },
    "ES": { primary: "+34", secondary: "ES" },
    "LK": { primary: "+94", secondary: "LK" },
    "SD": { primary: "+249", secondary: "SD" },
    "SR": { primary: "+597", secondary: "SR" },
    "SE": { primary: "+46", secondary: "SE" },
    "CH": { primary: "+41", secondary: "CH" },
    "SZ": { primary: "+268", secondary: "SZ" },
    "TH": { primary: "+66", secondary: "TH" },
    "TJ": { primary: "+992", secondary: "TJ" },
    "TG": { primary: "+228", secondary: "TG" },
    "TK": { primary: "+690", secondary: "TK" },
    "TO": { primary: "+676", secondary: "TO" },
    "TT": { primary: "+1 868", secondary: "TT" },
    "TN": { primary: "+216", secondary: "TN" },
    "TR": { primary: "+90", secondary: "TR" },
    "TM": { primary: "+993", secondary: "TM" },
    "TC": { primary: "+1 649", secondary: "TC" },
    "TV": { primary: "+688", secondary: "TV" },
    "UG": { primary: "+256", secondary: "UG" },
    "UA": { primary: "+380", secondary: "UA" },
    "AE": { primary: "+971", secondary: "AE" },
    "BO": { primary: "+591", secondary: "BO" },
    "BN": { primary: "+673", secondary: "BN" },
    "CC": { primary: "+61", secondary: "CC" },
    "CD": {
        primary: "+243",
        secondary: "CD",
    },
    "CI": { primary: "+225", secondary: "CI" },
    "FK": { primary: "+500", secondary: "FK" },
    "GB": { primary: "+44", secondary: "GB" },
    "GG": { primary: "+44", secondary: "GG" },
    "HK": { primary: "+852", secondary: "HK" },
    "IR": { primary: "+98", secondary: "IR" },
    "IM": { primary: "+44", secondary: "IM" },
    "JE": { primary: "+44", secondary: "JE" },
    "KR": { primary: "+82", secondary: "KR" },
    "KP": {
        primary: "+850",
        secondary: "KP",
    },
    "LA": { primary: "+856", secondary: "LA" },
    "LY": { primary: "+218", secondary: "LY" },
    "FM": { primary: "+691", secondary: "FM" },
    "MK": {
        primary: "+389",
        secondary: "MK",
    },
    "MO": { primary: "+853", secondary: "MO" },
    "MD": { primary: "+373", secondary: "MD" },
    "MZ": { primary: "+258", secondary: "MZ" },
    "PN": { primary: "+872", secondary: "PN" },
    "PS": { primary: "+970", secondary: "PS" },
    "PK": { primary: "+92", secondary: "PK" },
    "RE": { primary: "+262", secondary: "RE" },
    "RU": { primary: "+7", secondary: "RU" },
    "BL": { primary: "+590", secondary: "BL" },
    "KN": { primary: "+1 869", secondary: "KN" },
    "LC": { primary: "+1 758", secondary: "LC" },
    "MF": { primary: "+590", secondary: "MF" },
    "PM": { primary: "+508", secondary: "PM" },
    "ST": { primary: "+239", secondary: "ST" },
    "TL": { primary: "+670", secondary: "TL" },
    "TZ": { primary: "+255", secondary: "TZ" },
    "TW": { primary: "+886", secondary: "TW" },
    "VC": { primary: "+1 784", secondary: "VC" },
    "SH": {
        primary: "+290",
        secondary: "SH",
    },
    "SO": { primary: "+252", secondary: "SO" },
    "SJ": { primary: "+47", secondary: "SJ" },
    "SY": { primary: "+963", secondary: "SY" },
    "VA": { primary: "+379", secondary: "VA" },
    "UY": { primary: "+598", secondary: "UY" },
    "US": { primary: "+1", secondary: "US" },
    "UZ": { primary: "+998", secondary: "UZ" },
    "VE": { primary: "+58", secondary: "VE" },
    "VG": { primary: "+1 284", secondary: "VG" },
    "VI": { primary: "+1 340", secondary: "VI" },
    "VN": { primary: "+84", secondary: "VN" },
    "VU": { primary: "+84", secondary: "VN" },
    "ZA": { primary: "+678", secondary: "VU" },
    "WS": { primary: "+685", secondary: "WS" },
    "YE": { primary: "+967", secondary: "YE" },
    "ZM": { primary: "+260", secondary: "ZM" },
    "ZW": { primary: "+263", secondary: "ZW" },
};


const COUNTRIES = countries.map((key) => {
    return {
        [key.name]: key.name,
    };
});

const PHONECODES = countries.map((key, index) => {
    return {
        label: `${key.dial_code} (${key.code})`,
        value: `${key.dial_code}`,
        key: index
    };
});


export { COUNTRIES, countries, PHONECODES, newCountries};