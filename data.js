const groups = {
  1: [
    { name: "Asare Abaitey", index: "CD/ITE/VR/04/24/0008", region: "VR" },
    { name: "CORBAN AWUKU", index: "CD/ITE/VR/04/24/0006", region: "VR" },
    { name: "DONKOR COLLINS", index: "CD/ITE/VR/04/23/0005", region: "VR" },
    { name: "DORA EDITH FIABU", index: "BSCIT/VR/04/24/0005", region: "VR" },
    { name: "Emmanuel Kwaku Klutse", index: "CD/ITE/VR/04/23/0013", region: "VR" },
    { name: "INNOCENT KWASI XEVI", index: "CD/ITE/VR/04/23/0006", region: "VR" },
    { name: "JOHNNY ALIFODZI", index: "BSCIT/VR/24/0012", region: "VR" },
    { name: "JOSHUA KORBLAH WANORMETAH", index: "BSCIT/VR/04/23/0002", region: "VR" }
  ],
  2: [
    { name: "Lukman Sulemana", index: "CD/ITE/VR/04/24/0005", region: "VR" },
    { name: "MISHIHU PETER EDEM", index: "CD/ITE/VR/04/23/0001", region: "VR" },
    { name: "NUKUNU BENJAMIN", index: "CD/ITE/VR/04/24/0012", region: "VR" },
    { name: "ROBERT AHIAVE", index: "CD/ITE/VR/04/23/0009", region: "VR" },
    { name: "SYLVESTER ATTAH", index: "CD/ITE/VR/04/24/0004", region: "VR" },
    { name: "TSEDZAH DAVID LIVINGSTON YAW", index: "CD/ITE/VR/04/24/00011", region: "VR" },
    { name: "AWUKU CORBAN", index: "CD/ITE/VR/04/24/0006", region: "VR" },
    { name: "ADDAE FELIX", index: "CD/ITE/VR/04/24/0013", region: "VR" }
  ],
  3: [
    { name: "ALFRED KWASI", index: "BSCIT/CR/01/23/0016", region: "CR" },
    { name: "ANNAN FRANKLIN", index: "CD/ITE/CR/01/23/0028", region: "CR" },
    { name: "ANTHONY DAVID AUBYN", index: "CD/ITE/CR/01/23/0029", region: "CR" },
    { name: "BOYE, EMMANUEL ABBAS", index: "CD/ITE/CR/01/23/0013", region: "CR" },
    { name: "CLEMENT KOFI PRAH", index: "CD/ITE/CR/01/24/0014", region: "CR" },
    { name: "CLEMENT KOFI PRAH", index: "CD/ITE/CR/01/24/0014", region: "CR" },
    { name: "DORCAS ASIEDUWAA DONKOR", index: "CD/ITE/CR/01/23/0021", region: "CR" },
    { name: "Ebenezer Arthur", index: "BScIT/CR/01/23/0018", region: "CR" },
    { name: "EDWARD ESHUN", index: "BSCIT/CR/01/23/0001", region: "CR" }
  ],
  4: [
    { name: "EMMANUEL ATO KOOMSON-BINEY", index: "BSCIT/CR/01/24/0014", region: "CR" },
    { name: "EMMANUEL KOFI PIETERSON", index: "CD/ITE/CR/01/24/0004", region: "CR" },
    { name: "FRANCIS MAWULI FIATI", index: "BSCIT/CR/01/23/0004", region: "CR" },
    { name: "FRANK EGHAN", index: "CD/ITE/CR/01/24/0005", region: "CR" },
    { name: "GODWIN ADZRA", index: "CD/ITE/CR/01/23/0014", region: "CR" },
    { name: "JAMIL UMAR", index: "BSCIT/CR/01/24/0023", region: "CR" },
    { name: "JOSEPH AHINAKWAH", index: "BSCIT/CR/01/23/0005", region: "CR" },
    { name: "KYAKYE EMMANUEL OKYERE", index: "BSCIT/CR/30/25/0003", region: "CR" }
  ],
  5: [
    { name: "MENSAH LEONNDEL", index: "CD/ITE/CR/01/23/0023", region: "CR" },
    { name: "MERSHACK ANNAN", index: "CD/ITE/CR/01/23/0003", region: "CR" },
    { name: "MOHAMMED SAEED", index: "BSCIT/CR/01/24/0022", region: "CR" },
    { name: "NANA DANSO OKOH-OKAI", index: "BSCIT/CR/01/23/0010", region: "CR" },
    { name: "Obeng Emmanuel", index: "BSCIT/BR/30/25/0001", region: "CR" },
    { name: "OSEI KOFI BROBBEY", index: "BSCIT/CR/30/25/0010", region: "CR" },
    { name: "PATRICK PRINCE ZIKPUI", index: "BSCIT/CR/01/23/0014", region: "CR" },
    { name: "RICHARD ESSEL", index: "BSCIT/CR/01/23/0006", region: "CR" }
  ],
  6: [
    { name: "ROCKSON ODURO AKUAMOAH", index: "BSCIT/CR/01/23/0002", region: "CR" },
    { name: "RUTH MENSAH", index: "CD/ITE/CR/01/23/0001", region: "CR" },
    { name: "SALAMATU AHMED ABUBAKAR", index: "CD/ITE/CR/01/23/0002", region: "CR" },
    { name: "SIMON QUAICOE", index: "CD/ITE/CR/01/24/0010", region: "CR" },
    { name: "STEPHEN BOATENG", index: "CD/ITE/CR/01/23/0018", region: "CR" },
    { name: "THEOPHILUS ARYEE", index: "CD/ITE/CR/01/23/0032", region: "CR" },
    { name: "THEOPHILUS ARYEE", index: "CD/ITE/CR/01/23/0032", region: "CR" },
    { name: "VALENTINE KAFUI AWUNYO", index: "BSCIT/CR/01/23/0013", region: "CR" }
  ],
  7: [
    { name: "AFUM CLEMENT", index: "CD/ITE/AS/09/24/0019", region: "AS" },
    { name: "Agnes Addai-Yeboah", index: "CD/ITE/AS/09/24/0008", region: "AS" },
    { name: "Amofa  Amponsah Emmanuel", index: "CD/ITE/AS/09/24/0011", region: "AS" },
    { name: "ANDREWS SEIDU", index: "BSCIT/AS/09/24/0005", region: "AS" },
    { name: "ANNOR KOFI SETH", index: "CD/ITE/AS/09/23/0031", region: "AS" },
    { name: "ANNOR OLIVER", index: "CD/ITE/AS/09/23/0003", region: "AS" },
    { name: "AWUDU MALIK", index: "CD/ITE/AS/09/24/0003", region: "AS" },
    { name: "Baffour kyei Emmanuel", index: "CD/ITE/AS/09/23/0012", region: "AS" },
    { name: "Boadu Richard", index: "BSCIT/AS/09/23/0006", region: "AS" },
    { name: "Boateng Richard", index: "CD/ITE/AS/09/24/0024", region: "AS" }
  ],
  8: [
    { name: "Christiana Alarle", index: "CD/ITE/AS/09/24/0004", region: "AS" },
    { name: "Collins Tuffour", index: "CD/ITE/AS/09/24/0016", region: "AS" },
    { name: "Daniel Kwabena Boakye", index: "CD/ITE/AS/09/24/0006", region: "AS" },
    { name: "DANQUAH HANNAH", index: "CD/ITE/AS/09/23/0027", region: "AS" },
    { name: "Edmund Yedu Quansah", index: "BSCIT/AS/09/23/0002", region: "AS" },
    { name: "Edwin Kwakye", index: "BSCIT/AS/09/23/0007", region: "AS" },
    { name: "EMMANUELLA ADU-ADOMAH", index: "CD/ITE/AS/09/24/0001", region: "AS" },
    { name: "Erica Asante", index: "CD/ITE/AS/09/23/0021", region: "AS" },
    { name: "Faustina Awuah", index: "CD/ITE/AS/09/23/0032", region: "AS" }
  ],
  9: [
    { name: "FRANK NANA ADJEI BAFFOUR", index: "BSCIT/AS/09/23/0008", region: "AS" },
    { name: "ISAAC OPPONG", index: "CD/ITE/AS/09/23/0010", region: "AS" },
    { name: "JONATHAN OSEI BOATENG", index: "CD/ITE/AS/09/24/0012", region: "AS" },
    { name: "Maxwell Junior Atta Poku", index: "CD/ITE/AS/09/24/0014", region: "AS" },
    { name: "MICHEAL OPOKU ASAMOAH", index: "CD/ITE/AS/09/23/0029", region: "AS" },
    { name: "Rita Bobie Ansah", index: "CD/ITE/AS/09/24/0005", region: "AS" },
    { name: "SAAH ATTA DANIEL", index: "CD/ITE/AS/09/24/0010", region: "AS" },
    { name: "SAMIRA NUHU YAHYA", index: "CD/ITE/AS/09/24/0007", region: "AS" },
    { name: "Stella Boateng Mensah", index: "CD/ITE/AS/09/23/0009", region: "AS" }
  ],
  10: [
    { name: "ADDEY SAMPSON", index: "CD/ITE/ER/01/24/0001", region: "ER" },
    { name: "Adjovu Abdul Rahman", index: "CD/ITE/ER/01/24/0018", region: "ER" },
    { name: "ALEX TETTEH", index: "CD/ITE/ER/01/24/0005", region: "ER" },
    { name: "Awo-Teye Seth", index: "CD/ITE/ER/01/24/0012", region: "ER" },
    { name: "Boateng Emmanuel Boadu", index: "CD/ITE/ER/01/24/0006", region: "ER" },
    { name: "BOATENG PRINCE", index: "CD/ITE/ER/01/24/0009", region: "ER" },
    { name: "Darko Emmanuel", index: "BSCIT/ER/01/23/0005", region: "ER" },
    { name: "Larbi Tetteh Gabriel", index: "BSCIT/ER/01/23/0001", region: "ER" },
    { name: "ERIC KOBINA MENSAH", index: "CD/ITE/ER/01/24/0017", region: "ER" },
    { name: "FYNN-SNAMAN ARCHIBALD NYAMEATE", index: "CD/ITE/ER/01/23/0019", region: "ER" }
  ],
  11: [
    { name: "Joana Yaa Amponsah", index: "CD/ITE/ER/01/24/0016", region: "ER" },
    { name: "KYEI ASOMANING KWAKU", index: "CD/ITE/ER/01/24/0004", region: "ER" },
    { name: "Lydia Baah Amoako", index: "CD/ITE/ER/01/24/0010", region: "ER" },
    { name: "OBENG ERNEST", index: "CD/ITE/ER/01/24/0011", region: "ER" },
    { name: "Peter Kofi Agradi", index: "CD/ITE/ER/01/23/0003", region: "ER" },
    { name: "Richmond Seyram Wordekpor", index: "CD/ITE/ER/01/23/0017", region: "ER" },
    { name: "Susana Antwi", index: "BSCIT/ER/01/23/0002", region: "ER" },
    { name: "YELLOOH YAW ZAKKOUR", index: "CD/ITE/ER/01/24/0003", region: "ER" }
  ],
  12: [
    { name: "ABDUL NASIR ABDUL RAHAMAN", index: "CD/ITE/NR/02/24/0008", region: "NR" },
    { name: "ABDUL-WARIS ZUA ISSAH", index: "CD/ITE/NR/02/24/0005", region: "NR" },
    { name: "Adam Mansuru", index: "CD/ITE/NR/02/24/0001", region: "NR" },
    { name: "Akanbasiwayi Joshua", index: "CD/ITE/NR/02/24/0016", region: "NR" },
    { name: "Alhassan Shaibu Eliasu", index: "CD/ITE/NR/02/24/0009", region: "NR" },
    { name: "Alhassan Tarika Mohammed", index: "CD/ITE/NR/02/24/0015", region: "NR" },
    { name: "Daniel Mawuli Agbelesessie", index: "BSCIT/NR/02/23/0005", region: "NR" },
    { name: "Dery Naamwin Charlotte", index: "BSCIT/NR/02/24/0003", region: "NR" }
  ],
  13: [
    { name: "Fuseini Rauf", index: "CD/ITE/NR/02/24/0010", region: "NR" },
    { name: "ISSAH BABA IDDI", index: "BSCIT/NR/02/24/0009", region: "NR" },
    { name: "JOSEPH SUHUYINI MAHAMA", index: "CD/ITE/NR/02/23/0020", region: "NR" },
    { name: "Kwesi Sam Wilson", index: "CD/ITE/NR/02/23/0021", region: "NR" },
    { name: "MOHAMMED ABDUL MUMIN", index: "BSCIT/NR/02/23/0007", region: "NR" },
    { name: "Nkabiche Joel Niyasangma", index: "Cd/ite/NR/23/0002", region: "NR" },
    { name: "OSMAN SALIM", index: "BSCIT/NR/02/23/0001", region: "NR" },
    { name: "YAKUBU ABDUL-RAZAK", index: "CD/ITE/NR/02/24/0004", region: "NR" }
  ],
  14: [
    { name: "ALLAKOM", index: "CD/ITE/BA/11/24/0003", region: "BA" },
    { name: "AMANKWAA ISAAC", index: "CD/ITE/BA/11/24/0015", region: "BA" },
    { name: "Asaman Salifu Charles", index: "BScIT/BA/11/24/0005", region: "BA" },
    { name: "ASAMAN SALIFU CHARLES", index: "BSCIT/BA/11/24/0005", region: "BA" },
    { name: "ASARE KWAKU SAMUEL", index: "CD/ITE/BA/11/23/0001", region: "BA" },
    { name: "BAWEL ANDREWS", index: "CD/ITE/BA/11/24/0013", region: "BA" },
    { name: "BRIGHT ASOMAH", index: "CD/ITE/BA/11/24/0011", region: "BA" },
    { name: "EBENEZER OSEI BOAHEN", index: "CD/ITE/BA/11/24/0006", region: "BA" }
  ],
  15: [
    { name: "GEORGE BOATENG", index: "CD/ITE/BA/11/23/0021", region: "BA" },
    { name: "ISAAC OSEI YEBOAH", index: "CD/ITE/BA/11/23/0008", region: "BA" },
    { name: "JOSEPH OHENE ASARE", index: "CD/ITE/BA/11/24/0008", region: "BA" },
    { name: "NSOH NICHOLAS", index: "CD/ITE/BA/11/23/0014", region: "BA" },
    { name: "Sarfo kwadwo Evans", index: "CD/ITE/BA/11/23/0005", region: "BA" },
    { name: "SEI YIRIARAH RANSOM", index: "CD/ITE/BA/11/24/0018", region: "BA" },
    { name: "Tsitsia Pearl Afi", index: "CD/ITE/BA/11/23/0015", region: "BA" }
  ],
  16: [
    { name: "ABRAHAM KATTAH", index: "BSCIT/WR/08/23/0006", region: "WR" },
    { name: "Asamoah Raymond Senior", index: "BSCIT/WR/08/23/0004", region: "WR" },
    { name: "EBENEZER KWESI NKRUMAH", index: "BSCIT/WR/08/23/0002", region: "WR" },
    { name: "Emmanuel Baidoo", index: "BSCIT/WR/08/23/0003", region: "WR" },
    { name: "Gloria obenewaa-Adjei", index: "BSCIT/WR/08/24/0007", region: "WR" },
    { name: "Isaac Kwesi Dei-Forson", index: "BSCIT/WR/08/23/0011", region: "WR" }
  ],
  17: [
    { name: "ISAAC OPOKU", index: "CD/ITE/WR/08/24/0001", region: "WR" },
    { name: "MERCY ADOMAKOA BOATENG", index: "BSCIT/WR/08/23/0009", region: "WR" },
    { name: "Michael Aidoo", index: "CD/ITE/WR/08/24/0007", region: "WR" },
    { name: "SAFO DOMINIC CLEMENT", index: "CD/ITE/WR/08/23/0005", region: "WR" },
    { name: "Solomon Dodoo-Entsie", index: "CD/ITE/WR/08/24/0006", region: "WR" },
    { name: "Solomon Yao Agbemadu", index: "CD/ITE/WR/08/24/0008", region: "WR" }
  ],
  18: [
    { name: "AKURUGU ASSIBI JOSEPHINE", index: "CD/ITE/UE/02/24/0010", region: "UE" },
    { name: "AMADU WABUGU SHERIF", index: "CD/ITE/UE/02/24/0007", region: "UE" },
    { name: "AMARTEY ISAAC JUNIOR", index: "CD/ITE/UE/02/24/0005", region: "UE" },
    { name: "Eric Wonbod Laar", index: "CD/ITE/UE/02/24/0003", region: "UE" },
    { name: "Faisal Ali", index: "BSCIT/UE/02/23/0001", region: "UE" }
  ],
  19: [
    { name: "KABA BUGASE RAPHAEL", index: "CD/ITE/UE/02/23/0007", region: "UE" },
    { name: "KORTOE RICHARD MAKAFUI", index: "CD/ ITE/UE/02/24/0001", region: "UE" },
    { name: "ATULE AUGUSTINE AWINTIBRA", index: "CD/ITE/UE/02/23/0004", region: "UE" },
    { name: "MAJEED ABDULAI", index: "CD/ITE/UE/02/23/0002", region: "UE" },
    { name: "SEIDU SURINLA ABDALLAH", index: "CD/ITE/UE/02/24/0011", region: "UE" },
    { name: "YIDANA ABDUL-MAJEED", index: "BScIT/UE/30/25/0001", region: "UE" }
  ],
  20: [
    { name: "ABDUL-RASHID ISSAHAKU SUNGSUMA", index: "CD/ITE/UW/01/24/0003", region: "UW" },
    { name: "ABDUL-WASIR MAHAMA YAKUBU", index: "CD/ITE/UW/01/24/0002", region: "UW" },
    { name: "Beyuo Rita", index: "CD/ITE/UW/30/25/0001", region: "UW" },
    { name: "Mumuni mabruk", index: "CD/ITE/UW/01/24/0001", region: "UW" },
    { name: "MWINI REINFRED", index: "CD/ITE/UW/01/24/0006", region: "UW" }
  ],
  21: [
    { name: "Agyei Richard", index: "CD/ITE/GA/14/23/0018", region: "GA" },
    { name: "Azama Portia", index: "BSCIT/GA/14/23/0036", region: "GA" },
    { name: "KELVIN EDOE QUARSHIE", index: "BSCIT/GA/14/23/0004", region: "GA" },
    { name: "SELBY LESLIE BLANKSON", index: "BSCIT/GA/14/24/0054", region: "GA" },
    { name: "Steven Okra Prah", index: "BSCIT/GA/14/23/0003", region: "GA" }
  ],
  22: [
    { name: "ABOTSI JOY", index: "BSCIT/VR/04/24/0006", region: "VR" },
    { name: "ADZIMAHE Gabriel Kwaku", index: "CD/ITE/VR/04/24/0018", region: "VR" },
    { name: "Agbeko Elijah", index: "CD/ITE/VR/04/24/0009", region: "VR" },
    { name: "AMEKUFE VICTOR", index: "CD/ITE/VR/04/24/0014", region: "VR" },
    { name: "AMOAH DAVID", index: "CD/ITE/VR/04/24/0016", region: "VR" },
    { name: "Apetsi Joseph Senyo", index: "CD/ITE/VR/04/24/0002", region: "VR" },
    { name: "Lawrence Richmond Agbemadu", index: "BSCIT/VR/04/23/0003", region: "VR" }
  ]
};
