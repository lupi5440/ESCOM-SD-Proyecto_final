// Constante que contiene la lista completa de monedas Fiat (ISO 4217), ordenada alfabéticamente por código, faltan alguans pero meee.
const MONEDAS_FIAT = [
    {
        "pais": "EMIRATOS ÁRABES UNIDOS",
        "divisa": "Dirham DE EAU",
        "codigo": "AED",
        "numero": "784"
    },
    {
        "pais": "AFGANISTÁN",
        "divisa": "Afgani afgano",
        "codigo": "AFN",
        "numero": "971"
    },
    {
        "pais": "ALBANIA",
        "divisa": "Lek",
        "codigo": "ALL",
        "numero": "008"
    },
    {
        "pais": "ARMENIA",
        "divisa": "Dram armenio",
        "codigo": "AMD",
        "numero": "051"
    },
    {
        "pais": "CURAZAO",
        "divisa": "Florín antillano neerlandés",
        "codigo": "ANG",
        "numero": "532"
    },
    {
        "pais": "ANGOLA",
        "divisa": "Kwanza angoleño",
        "codigo": "AOA",
        "numero": "973"
    },
    {
        "pais": "ARGENTINA",
        "divisa": "Peso argentino",
        "codigo": "ARS",
        "numero": "032"
    },
    {
        "pais": "AUSTRALIA",
        "divisa": "Dólar australiano",
        "codigo": "AUD",
        "numero": "036"
    },
    {
        "pais": "ARUBA",
        "divisa": "Florín arubeño",
        "codigo": "AWG",
        "numero": "533"
    },
    {
        "pais": "AZERBAIYÁN",
        "divisa": "Manat azerbaiyano",
        "codigo": "AZN",
        "numero": "944"
    },
    {
        "pais": "BOSNIA Y HERZEGOVINA",
        "divisa": "Marco bosnioherzegovino",
        "codigo": "BAM",
        "numero": "977"
    },
    {
        "pais": "BARBADOS",
        "divisa": "Dólar de Barbados",
        "codigo": "BBD",
        "numero": "052"
    },
    {
        "pais": "BANGLADESH",
        "divisa": "Taka",
        "codigo": "BDT",
        "numero": "050"
    },
    {
        "pais": "BULGARIA",
        "divisa": "Lev",
        "codigo": "BGN",
        "numero": "975"
    },
    {
        "pais": "BARÉIN",
        "divisa": "Dinar bareiní",
        "codigo": "BHD",
        "numero": "048"
    },
    {
        "pais": "BURUNDI",
        "divisa": "Franco burundés",
        "codigo": "BIF",
        "numero": "108"
    },
    {
        "pais": "BERMUDA",
        "divisa": "Dólar bermudeño",
        "codigo": "BMD",
        "numero": "060"
    },
    {
        "pais": "BRUNÉI DARUSSALAM",
        "divisa": "Dólar de Brunei",
        "codigo": "BND",
        "numero": "096"
    },
    {
        "pais": "BOLIVIA (ESTADO PLURINACIONAL DE)",
        "divisa": "Boliviano",
        "codigo": "BOB",
        "numero": "068"
    },
    {
        "pais": "BOLIVIA (ESTADO PLURINACIONAL DE)",
        "divisa": "Mvdol",
        "codigo": "BOV",
        "numero": "984"
    },
    {
        "pais": "BRASIL",
        "divisa": "Real brasileño",
        "codigo": "BRL",
        "numero": "986"
    },
    {
        "pais": "BAHAMAS (LAS)",
        "divisa": "Dólar bahameño",
        "codigo": "BSD",
        "numero": "044"
    },
    {
        "pais": "BUTÁN",
        "divisa": "Ngultrum butanés",
        "codigo": "BTN",
        "numero": "064"
    },
    {
        "pais": "BOTSUANA",
        "divisa": "Pula",
        "codigo": "BWP",
        "numero": "072"
    },
    {
        "pais": "BIELORRUSIA",
        "divisa": "Rublo bielorruso",
        "codigo": "BYR",
        "numero": "974"
    },
    {
        "pais": "BELICE",
        "divisa": "Dólar beliceño",
        "codigo": "BZD",
        "numero": "084"
    },
    {
        "pais": "CANADÁ",
        "divisa": "Dólar canadiense",
        "codigo": "CAD",
        "numero": "124"
    },
    {
        "pais": "CONGO (REPÚBLICA DEMOCRÁTIC DEL)",
        "divisa": "Franco congoleño",
        "codigo": "CDF",
        "numero": "976"
    },
    {
        "pais": "SUIZA",
        "divisa": "WIR Euro",
        "codigo": "CHE",
        "numero": "947"
    },
    {
        "pais": "LIECHTENSTEIN",
        "divisa": "Franco suizo",
        "codigo": "CHF",
        "numero": "756"
    },
    {
        "pais": "SUIZA",
        "divisa": "Franco WIR",
        "codigo": "CHW",
        "numero": "948"
    },
    {
        "pais": "CHILE",
        "divisa": "Unidad de Fomento",
        "codigo": "CLF",
        "numero": "990"
    },
    {
        "pais": "CHILE",
        "divisa": "Peso chileno",
        "codigo": "CLP",
        "numero": "152"
    },
    {
        "pais": "CHINA",
        "divisa": "Renminbi",
        "codigo": "CNY",
        "numero": "156"
    },
    {
        "pais": "COLOMBIA",
        "divisa": "Peso colombiano",
        "codigo": "COP",
        "numero": "170"
    },
    {
        "pais": "COLOMBIA",
        "divisa": "Unidad de valor real",
        "codigo": "COU",
        "numero": "970"
    },
    {
        "pais": "COSTA RICA",
        "divisa": "Colón costarricense",
        "codigo": "CRC",
        "numero": "188"
    },
    {
        "pais": "CUBA",
        "divisa": "Peso convertible",
        "codigo": "CUC",
        "numero": "931"
    },
    {
        "pais": "CUBA",
        "divisa": "Peso cubano",
        "codigo": "CUP",
        "numero": "192"
    },
    {
        "pais": "CABO VERDE",
        "divisa": "Escudo caboverdiano",
        "codigo": "CVE",
        "numero": "132"
    },
    {
        "pais": "REPÚBLICA CHECA",
        "divisa": "Czech Koruna",
        "codigo": "CZK",
        "numero": "203"
    },
    {
        "pais": "YIBUTI",
        "divisa": "Franco yibutiano",
        "codigo": "DJF",
        "numero": "262"
    },
    {
        "pais": "DINAMARCA",
        "divisa": "Corona danesa",
        "codigo": "DKK",
        "numero": "208"
    },
    {
        "pais": "REPÚBLICA DOMINICANA",
        "divisa": "Peso dominicano",
        "codigo": "DOP",
        "numero": "214"
    },
    {
        "pais": "ALGERIA",
        "divisa": "Dinar argelino",
        "codigo": "DZD",
        "numero": "012"
    },
    {
        "pais": "EGIPTO",
        "divisa": "Libra egipcia",
        "codigo": "EGP",
        "numero": "818"
    },
    {
        "pais": "ERITREA",
        "divisa": "Nakfa",
        "codigo": "ERN",
        "numero": "232"
    },
    {
        "pais": "ETIOPÍA",
        "divisa": "Birr etíope",
        "codigo": "ETB",
        "numero": "230"
    },
    {
        "pais": "ALEMANIA",
        "divisa": "Euro",
        "codigo": "EUR",
        "numero": "978"
    },
    {
        "pais": "FIJI",
        "divisa": "Dólar fiyiano",
        "codigo": "FJD",
        "numero": "242"
    },
    {
        "pais": "ISLAS MALVINAS",
        "divisa": "Libra malvinense",
        "codigo": "FKP",
        "numero": "238"
    },
    {
        "pais": "GUERNSEY",
        "divisa": "Libra esterlina",
        "codigo": "GBP",
        "numero": "826"
    },
    {
        "pais": "GEORGIA",
        "divisa": "Lari",
        "codigo": "GEL",
        "numero": "981"
    },
    {
        "pais": "GHANA",
        "divisa": "Cedi",
        "codigo": "GHS",
        "numero": "936"
    },
    {
        "pais": "GIBRALTAR",
        "divisa": "Libra gibraltareña",
        "codigo": "GIP",
        "numero": "292"
    },
    {
        "pais": "GAMBIA",
        "divisa": "Dalasi",
        "codigo": "GMD",
        "numero": "270"
    },
    {
        "pais": "GUINEA",
        "divisa": "Franco guineano",
        "codigo": "GNF",
        "numero": "324"
    },
    {
        "pais": "GUATEMALA",
        "divisa": "Quetzal",
        "codigo": "GTQ",
        "numero": "320"
    },
    {
        "pais": "GUYANA",
        "divisa": "Dólar guyanés",
        "codigo": "GYD",
        "numero": "328"
    },
    {
        "pais": "HONG KONG",
        "divisa": "Dólar de Hong Kong",
        "codigo": "HKD",
        "numero": "344"
    },
    {
        "pais": "HONDURAS",
        "divisa": "Lempira",
        "codigo": "HNL",
        "numero": "340"
    },
    {
        "pais": "CROACIA",
        "divisa": "Kuna",
        "codigo": "HRK",
        "numero": "191"
    },
    {
        "pais": "HAITÍ",
        "divisa": "Gourde",
        "codigo": "HTG",
        "numero": "332"
    },
    {
        "pais": "HUNGRÍA",
        "divisa": "Forinto húngaro",
        "codigo": "HUF",
        "numero": "348"
    },
    {
        "pais": "INDONESIA",
        "divisa": "Rupia indonesia",
        "codigo": "IDR",
        "numero": "360"
    },
    {
        "pais": "ISRAEL",
        "divisa": "Nuevo séquel",
        "codigo": "ILS",
        "numero": "376"
    },
    {
        "pais": "INDIA",
        "divisa": "Rupia india",
        "codigo": "INR",
        "numero": "356"
    },
    {
        "pais": "IRAK",
        "divisa": "Dinar iraquí",
        "codigo": "IQD",
        "numero": "368"
    },
    {
        "pais": "REPÚBLICA ISLAMICA DE IRÁN",
        "divisa": "Rial iraní",
        "codigo": "IRR",
        "numero": "364"
    },
    {
        "pais": "ISLANDIA",
        "divisa": "Corona islandesa",
        "codigo": "ISK",
        "numero": "352"
    },
    {
        "pais": "JAMAICA",
        "divisa": "Dólar jamaiquino",
        "codigo": "JMD",
        "numero": "388"
    },
    {
        "pais": "JORDANIA",
        "divisa": "Dinar jordano",
        "codigo": "JOD",
        "numero": "400"
    },
    {
        "pais": "JAPÓN",
        "divisa": "Yen",
        "codigo": "JPY",
        "numero": "392"
    },
    {
        "pais": "KENIA",
        "divisa": "Chelín keniano",
        "codigo": "KES",
        "numero": "404"
    },
    {
        "pais": "KIRGUISTÁN",
        "divisa": "Som",
        "codigo": "KGS",
        "numero": "417"
    },
    {
        "pais": "CAMBOYA",
        "divisa": "Riel camboyano",
        "codigo": "KHR",
        "numero": "116"
    },
    {
        "pais": "COMORAS",
        "divisa": "Franco comorense",
        "codigo": "KMF",
        "numero": "174"
    },
    {
        "pais": "REPÚBLICA DEMOCRATICA DE COREA DEL NORTE",
        "divisa": "Won norcoreano",
        "codigo": "KPW",
        "numero": "408"
    },
    {
        "pais": "REPÚBLICA DE COREA DEL SUR",
        "divisa": "Won",
        "codigo": "KRW",
        "numero": "410"
    },
    {
        "pais": "KUWAIT",
        "divisa": "Dinar kuwaití",
        "codigo": "KWD",
        "numero": "414"
    },
    {
        "pais": "ISLAS CAIMÁN (LAS)",
        "divisa": "Dólar de las Islas Cayman",
        "codigo": "KYD",
        "numero": "136"
    },
    {
        "pais": "KAZAJISTÁN",
        "divisa": "Tenge kazajo",
        "codigo": "KZT",
        "numero": "398"
    },
    {
        "pais": "REPUBLICA DEMOCRÁTICA POPULAR LAO",
        "divisa": "Kip laosiano",
        "codigo": "LAK",
        "numero": "418"
    },
    {
        "pais": "LÍBANO",
        "divisa": "Libra libanesa",
        "codigo": "LBP",
        "numero": "422"
    },
    {
        "pais": "SRI LANKA",
        "divisa": "Rupia de Sri Lanka",
        "codigo": "LKR",
        "numero": "144"
    },
    {
        "pais": "LIBERIA",
        "divisa": "Dólar liberiano",
        "codigo": "LRD",
        "numero": "430"
    },
    {
        "pais": "LESOTO",
        "divisa": "Loti",
        "codigo": "LSL",
        "numero": "426"
    },
    {
        "pais": "LIBIA",
        "divisa": "Dinar libio",
        "codigo": "LYD",
        "numero": "434"
    },
    {
        "pais": "MARRUECOS",
        "divisa": "Dírham marroquí",
        "codigo": "MAD",
        "numero": "504"
    },
    {
        "pais": "REPÚBLICA DE MOLDAVIA",
        "divisa": "Leu Moldavo",
        "codigo": "MDL",
        "numero": "498"
    },
    {
        "pais": "MADAGASCAR",
        "divisa": "Ariary malgache",
        "codigo": "MGA",
        "numero": "969"
    },
    {
        "pais": "MACEDONIA",
        "divisa": "Dinar",
        "codigo": "MKD",
        "numero": "807"
    },
    {
        "pais": "BIRMANIA",
        "divisa": "Kyat birmano",
        "codigo": "MMK",
        "numero": "104"
    },
    {
        "pais": "MONGOLIA",
        "divisa": "Tugrik",
        "codigo": "MNT",
        "numero": "496"
    },
    {
        "pais": "MACAO",
        "divisa": "Pataca",
        "codigo": "MOP",
        "numero": "446"
    },
    {
        "pais": "MAURITANIA",
        "divisa": "Uguiya",
        "codigo": "MRO",
        "numero": "478"
    },
    {
        "pais": "MAURICIO",
        "divisa": "Rupia de Mauricio",
        "codigo": "MUR",
        "numero": "480"
    },
    {
        "pais": "MALDIVAS",
        "divisa": "Rupia de maldivas",
        "codigo": "MVR",
        "numero": "462"
    },
    {
        "pais": "MALAWI",
        "divisa": "Kwacha malauí",
        "codigo": "MWK",
        "numero": "454"
    },
    {
        "pais": "MÉXICO",
        "divisa": "Peso mexicano",
        "codigo": "MXN",
        "numero": "484"
    },
    {
        "pais": "MÉXICO",
        "divisa": "Unidad de Inversion Mexicana(UDI)",
        "codigo": "MXV",
        "numero": "979"
    },
    {
        "pais": "MALASIA",
        "divisa": "Ringgit malayo",
        "codigo": "MYR",
        "numero": "458"
    },
    {
        "pais": "MOZAMBIQUE",
        "divisa": "Metical mozambiqueño",
        "codigo": "MZN",
        "numero": "943"
    },
    {
        "pais": "NAMIBIA",
        "divisa": "Dólar de Namibia",
        "codigo": "NAD",
        "numero": "516"
    },
    {
        "pais": "NIGERIA",
        "divisa": "Naira",
        "codigo": "NGN",
        "numero": "566"
    },
    {
        "pais": "NICARAGUA",
        "divisa": "Córdoba oro",
        "codigo": "NIO",
        "numero": "558"
    },
    {
        "pais": "NORUEGA",
        "divisa": "Corona noruega",
        "codigo": "NOK",
        "numero": "578"
    },
    {
        "pais": "NEPAL",
        "divisa": "Rupia nepalí",
        "codigo": "NPR",
        "numero": "524"
    },
    {
        "pais": "NIUE",
        "divisa": "Dólar neozelandés",
        "codigo": "NZD",
        "numero": "554"
    },
    {
        "pais": "OMÁN",
        "divisa": "Rial omaní",
        "codigo": "OMR",
        "numero": "512"
    },
    {
        "pais": "PANAMÁ",
        "divisa": "Balboa",
        "codigo": "PAB",
        "numero": "590"
    },
    {
        "pais": "PERU",
        "divisa": "Nuevo Sol",
        "codigo": "PEN",
        "numero": "604"
    },
    {
        "pais": "PAPÚA NUEVA GUINEA",
        "divisa": "Kina",
        "codigo": "PGK",
        "numero": "598"
    },
    {
        "pais": "FILIPINAS",
        "divisa": "Peso filipino",
        "codigo": "PHP",
        "numero": "608"
    },
    {
        "pais": "PAKISTÁN",
        "divisa": "Rupia pakistaní",
        "codigo": "PKR",
        "numero": "586"
    },
    {
        "pais": "POLONIA",
        "divisa": "Zloty",
        "codigo": "PLN",
        "numero": "985"
    },
    {
        "pais": "PARAGUAY",
        "divisa": "Guaraní",
        "codigo": "PYG",
        "numero": "600"
    },
    {
        "pais": "QATAR",
        "divisa": "Riyal catarí",
        "codigo": "QAR",
        "numero": "634"
    },
    {
        "pais": "RUMANIA",
        "divisa": "Leu rumano",
        "codigo": "RON",
        "numero": "946"
    },
    {
        "pais": "SERBIA",
        "divisa": "Dinar serbio",
        "codigo": "RSD",
        "numero": "941"
    },
    {
        "pais": "RUSIA",
        "divisa": "Rublo ruso",
        "codigo": "RUB",
        "numero": "643"
    },
    {
        "pais": "RUANDA",
        "divisa": "Franco ruandés",
        "codigo": "RWF",
        "numero": "646"
    },
    {
        "pais": "ARABIA SAUDITA",
        "divisa": "Riyal saudí",
        "codigo": "SAR",
        "numero": "682"
    },
    {
        "pais": "ISLAS SALOMÓN",
        "divisa": "Dólar de Islas Salomón",
        "codigo": "SBD",
        "numero": "090"
    },
    {
        "pais": "SEYCHELLES",
        "divisa": "Rupia de Seychelles",
        "codigo": "SCR",
        "numero": "690"
    },
    {
        "pais": "SUDÁN",
        "divisa": "Libra sudanesa",
        "codigo": "SDG",
        "numero": "938"
    },
    {
        "pais": "SUECIA",
        "divisa": "Corona sueca",
        "codigo": "SEK",
        "numero": "752"
    },
    {
        "pais": "SINGAPUR",
        "divisa": "Dólar de Singapur",
        "codigo": "SGD",
        "numero": "702"
    },
    {
        "pais": "SANTA HELENA ASCENCIÓN Y TRISTÁN DE ACUÑA",
        "divisa": "Libra de Santa Helena",
        "codigo": "SHP",
        "numero": "654"
    },
    {
        "pais": "SIERRA LEONA",
        "divisa": "Leone",
        "codigo": "SLL",
        "numero": "694"
    },
    {
        "pais": "SOMALIA",
        "divisa": "Chelín somalí",
        "codigo": "SOS",
        "numero": "706"
    },
    {
        "pais": "SURINAM",
        "divisa": "Dólar de Surinam",
        "codigo": "SRD",
        "numero": "968"
    },
    {
        "pais": "SUDÁN DEL SUR",
        "divisa": "Libra sursudanesa",
        "codigo": "SSP",
        "numero": "728"
    },
    {
        "pais": "SAN TOMÉ Y PRÍNCIPE",
        "divisa": "Dobra",
        "codigo": "STD",
        "numero": "678"
    },
    {
        "pais": "EL SALVADOR",
        "divisa": "Colón",
        "codigo": "SVC",
        "numero": "222"
    },
    {
        "pais": "REPÚBLICA ÁRABE SIRIA",
        "divisa": "Libra siria",
        "codigo": "SYP",
        "numero": "760"
    },
    {
        "pais": "SUAZILANDIA",
        "divisa": "Lilangeni",
        "codigo": "SZL",
        "numero": "748"
    },
    {
        "pais": "TAILANDIA",
        "divisa": "Baht",
        "codigo": "THB",
        "numero": "764"
    },
    {
        "pais": "TAJIKISTÁN",
        "divisa": "Somoni",
        "codigo": "TJS",
        "numero": "972"
    },
    {
        "pais": "TURMENISTÁN",
        "divisa": "Manat turcomano",
        "codigo": "TMT",
        "numero": "934"
    },
    {
        "pais": "TÚNEZ",
        "divisa": "Dinar tunecino",
        "codigo": "TND",
        "numero": "788"
    },
    {
        "pais": "TONGA",
        "divisa": "Pa’anga",
        "codigo": "TOP",
        "numero": "776"
    },
    {
        "pais": "TURQUÍA",
        "divisa": "Lira turca",
        "codigo": "TRY",
        "numero": "949"
    },
    {
        "pais": "TRINIDAD Y TOBAGO",
        "divisa": "Dólar de Trinidad y Tobago",
        "codigo": "TTD",
        "numero": "780"
    },
    {
        "pais": "TAIWÁN (PROVINCIA DE CHINA)",
        "divisa": "Nuevo dólar de Taiwán",
        "codigo": "TWD",
        "numero": "901"
    },
    {
        "pais": "REPÚBLICA UNIDA DE TANZANIA",
        "divisa": "Chelín tanzano",
        "codigo": "TZS",
        "numero": "834"
    },
    {
        "pais": "UKRANIA",
        "divisa": "Grivnia",
        "codigo": "UAH",
        "numero": "980"
    },
    {
        "pais": "UGANDA",
        "divisa": "Chelín ugandés",
        "codigo": "UGX",
        "numero": "800"
    },
    {
        "pais": "BONAIRE, SAN EUSTAQUIO Y SABA",
        "divisa": "Dólar estadounidense",
        "codigo": "USD",
        "numero": "840"
    },
    {
        "pais": "ESTADOS UNIDOS DE AMÉRICA",
        "divisa": "Dólar estadounidense (Next day)",
        "codigo": "USN",
        "numero": "997"
    },
    {
        "pais": "URUGUAY",
        "divisa": "Peso uruguayo en unidades indexadas (URUIURUI)",
        "codigo": "UYI",
        "numero": "940"
    },
    {
        "pais": "URUGUAY",
        "divisa": "Peso uruguayo",
        "codigo": "UYU",
        "numero": "858"
    },
    {
        "pais": "UZBEKISTÁN",
        "divisa": "Som uzbeko",
        "codigo": "UZS",
        "numero": "860"
    },
    {
        "pais": "REPÚBLICA BOLIVARIANA DE VENEZUELA",
        "divisa": "Bolívar",
        "codigo": "VEF",
        "numero": "937"
    },
    {
        "pais": "VIETNAM",
        "divisa": "Dong",
        "codigo": "VND",
        "numero": "704"
    },
    {
        "pais": "VANUATU",
        "divisa": "Vatu",
        "codigo": "VUV",
        "numero": "548"
    },
    {
        "pais": "SAMOA",
        "divisa": "Tala",
        "codigo": "WST",
        "numero": "882"
    },
    {
        "pais": "CAMERÚN",
        "divisa": "Franco CFA de África Central",
        "codigo": "XAF",
        "numero": "950"
    },
    {
        "pais": "ANGUILLA",
        "divisa": "Dólar del Caribe Oriental",
        "codigo": "XCD",
        "numero": "951"
    },
    {
        "pais": "FONDO MONETARIO INTERNACIONAL",
        "divisa": "SDR (Derecho Especial de Retiro)",
        "codigo": "XDR",
        "numero": "960"
    },
    {
        "pais": "BENÍN",
        "divisa": "Franco CFA de África Occidental",
        "codigo": "XOF",
        "numero": "952"
    },
    {
        "pais": "NUEVA CALEDONIA",
        "divisa": "Franco CFP",
        "codigo": "XPF",
        "numero": "953"
    },
    {
        "pais": "SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS \"SUCRE\"",
        "divisa": "Sucre",
        "codigo": "XSU",
        "numero": "994"
    },
    {
        "pais": "PAISES MIEMBROS DEL BANCO AFRICANO DE DESARROLLO",
        "divisa": "BAD UNIDAD DE CUENTA",
        "codigo": "XUA",
        "numero": "965"
    },
    {
        "pais": "YEMEN",
        "divisa": "Rial yemení",
        "codigo": "YER",
        "numero": "886"
    },
    {
        "pais": "SUDÁFRICA",
        "divisa": "Rand",
        "codigo": "ZAR",
        "numero": "710"
    },
    {
        "pais": "ZAMBIA",
        "divisa": "Kwacha zambiano",
        "codigo": "ZMW",
        "numero": "967"
    },
    {
        "pais": "ZIMBABUE",
        "divisa": "Dólar zimbabuense",
        "codigo": "ZWL",
        "numero": "932"
    }
]

// Espera a que todo el contenido del HTML esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // ****************************************************************
    // Manejo de limite superio para el offset
    // ****************************************************************

    // Seleccionar los elementos de entrada por su ID.
    const limitInput = document.getElementById('limit-input');
    const offsetInput = document.getElementById('offset-input');

    //Función para actualizar el atributo 'max' del offset y validar su valor actual.
    function updateOffsetMax() {
        // 4. Obtener el valor de 'Resultados' y convertirlo a un número entero.
        const limitValue = parseInt(limitInput.value, 10);

        // Calcular el nuevo máximo para el offset.
        // Se usa Math.max para asegurar que el máximo nunca sea menor que 0.
        const newMax = Math.max(0, limitValue - 1);

        // Establecer el nuevo atributo 'max' en el campo de offset.
        offsetInput.max = newMax;

        // 5. Validar el valor actual del offset.
        // Si el valor actual del offset es mayor que el nuevo máximo permitido...
        if (parseInt(offsetInput.value, 10) > newMax) {
            // ...ajustar el valor del offset a ese nuevo máximo.
            offsetInput.value = newMax;
        }
    }

    // 2. Añadir un 'event listener' al campo 'Resultados'.
    // El evento 'input' se dispara cada vez que el valor cambia.
    limitInput.addEventListener('input', updateOffsetMax);

    // Llamada inicial al cargar la página.
    // Esto asegura que el 'max' del offset se configure correctamente 
    // con los valores por defecto del HTML al iniciar la aplicación.
    updateOffsetMax();

    // ****************************************************************
    // Manejo de opciones de monedas fiat
    // ****************************************************************

    const fiatSelect = document.getElementById('fiat-currency-select');

    // Limpiamos las opciones estáticas del HTML.
    fiatSelect.innerHTML = '';

    // Usamos la constante MONEDAS_FIAT definida en este mismo archivo.
    MONEDAS_FIAT.forEach(moneda => {
        const option = document.createElement('option');
        option.value = moneda.codigo;
        option.textContent = `(${moneda.codigo}) ${moneda.divisa} `;
        fiatSelect.appendChild(option);
    });

    // Establecemos el Peso Mexicano (MXN) como valor por defecto, relevante para su ubicación.
    fiatSelect.value = 'MXN';

});