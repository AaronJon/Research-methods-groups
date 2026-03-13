const groups = {
  1: [
    { name: "AKUM VIVIAN", index: "BSCIT/AH/30/25/0002", region: "BA" },
    { name: "AGYEI SAMPSON", index: "BSCIT/BA/30/25/0002", region: "BA" },
    { name: "KUNGFIRE BUKARI BRUCE", index: "BSCIT/BA/302/25/0003", region: "BA" },
    { name: "MICHAEL ADJEI SARPONG", index: "BSCIT/BA/33/25/0004", region: "BA" },
    { name: "ABIGAIL KONJOUR", index: "BSCIT/BA/33/25/0003", region: "BA" },
    { name: "ASUMA EBENEZER", index: "BEMAT/BA/33/25/0002", region: "BA" },
    { name: "BARBARA AHINAKWA", index: "BSCIT/AH/30/25/0001", region: "BA" },
    { name: "FUSEINI ISSIFU", index: "BSCIT/BA/33/25/0001", region: "BA" },
    { name: "BUKARI SAMUEL BABA", index: "BSCIT/CR/01/25/0001", region: "BA" }
  ],
  2: [
    { name: "FOSU STEPHEN", index: "CD/ITE/BA/33/25/0002", region: "BA" },
    { name: "OBENG ABIGAIL", index: "CD/ITE/BR/30/25/0003", region: "BA" },
    { name: "JOYCE SERWAA BOADU", index: "CD/ITE/BR/30/25/0005", region: "BA" },
    { name: "KAMAGE JACOB", index: "CD/ITE/BR/30/25/0006", region: "BA" },
    { name: "GBANG DOUGLAS", index: "CD/ITE/CR/01/25/01/25/0011", region: "BA" },
    { name: "Emmanuel Frimpong", index: "BSCIT/BA/33/25/0002", region: "BA" }
  ],
  3: [
    { name: "DIANA BOATENG", index: "BEMAT/AS/30/25/0017", region: "ASHANTI" },
    { name: "SOLOMON ASARE", index: "BEMAT/AS//30/25/0020", region: "ASHANTI" },
    { name: "DICKSON OPPONG", index: "BEMAT/AS/30/25/0004", region: "ASHANTI" },
    { name: "AKWASI ADDO", index: "BEMAT/AS/30/25/0006", region: "ASHANTI" },
    { name: "NSIAH ALEXANDER MANU", index: "BEMAT/AS/30/25/0010", region: "ASHANTI" },
    { name: "JULIET BREFO", index: "BEMAT/AS/30/25/0025", region: "ASHANTI" },
    { name: "BLESSING KUMI", index: "BSCIT/AS/30/25/0002", region: "ASHANTI" },
    { name: "MARTHA TEYE", index: "BSCIT/AS/01/25/0001", region: "ASHANTI" },
    { name: "OWUSU BRIGHT ANSAH", index: "BSCIT/AS/22/25/0002", region: "ASHANTI" },
    { name: "COSBY SETH DENNIS", index: "BSCIT/AS/22/25/0003", region: "ASHANTI" }
  ],
  4: [
    { name: "BRIGHT OFORI", index: "BSCIT/AS/22/25/0004", region: "ASHANTI" },
    { name: "ABDULAI BUKARI", index: "BSCIT/AS/30/25/0004", region: "ASHANTI" },
    { name: "FELICIA BOATEMAA AKOWUAH", index: "BSCIT/CR/01/25/0013", region: "ASHANTI" },
    { name: "KPORGAH MELODY AKU SEFAKOR", index: "CD/ITE/AS/01/25/0002", region: "ASHANTI" },
    { name: "AGYEMANG SENYAH DERRICK", index: "CD/ITE/AS/01/25/0003", region: "ASHANTI" },
    { name: "KWAKU AMPONSAH", index: "CD/ITE/AS/30/25/0002", region: "ASHANTI" },
    { name: "MUFIDA FAISAL", index: "CD/ITE/AS/30/25/0005", region: "ASHANTI" },
    { name: "OSEI PATRICIA", index: "CD/ITE/AS/30/25/0007", region: "ASHANTI" },
    { name: "BRIGHT MENSAH", index: "CD/ITE/AS/30/25/0008", region: "ASHANTI" },
    { name: "YEBOAH CLEMENT", index: "CD/ITE/AS/30/25/0010", region: "ASHANTI" }
  ],
  5: [
    { name: "MEMUNA ISHAQ", index: "CD/ITE/AS/30/25/0012", region: "ASHANTI" },
    { name: "SANDY AGYEMANG", index: "CD/ITE/AS/30/25/0021", region: "ASHANTI" },
    { name: "ASIAMAH VICTOR", index: "CD/ITE/AS/30/25/0026", region: "ASHANTI" },
    { name: "RICHMOND SARPONG", index: "CD/ITE/CR/30/25/0004", region: "ASHANTI" },
    { name: "KATE ACKON", index: "BEMAT/CR/01/25/0001", region: "CENTRAL" },
    { name: "ISAAC ANNAN", index: "BEMAT/CR/01/25/0006", region: "CENTRAL" },
    { name: "GYASI KOFI", index: "CD/ITE/AS/30/25/0023", region: "ASHANTI" }
  ],
  6: [
    { name: "DENNIS BAIDOO", index: "BEMAT/CR/01/25/0010", region: "CENTRAL" },
    { name: "JOSEPH TANKO", index: "BEMAT/CR/17/25/0001", region: "CENTRAL" },
    { name: "EMMANUEL AMOAKO", index: "BEMAT/CR/30/25/0016", region: "CENTRAL" },
    { name: "GELI MICHAEL KOFI", index: "BSCIT/CR/30/25/0012", region: "CENTRAL" },
    { name: "BAIDOO ISAAC", index: "BSCIT/CR/30/25/0002", region: "CENTRAL" },
    { name: "ABIGAIL KOOMSON", index: "BSCIT/AS/22/25/0001", region: "CENTRAL" },
    { name: "DANIEL GOLO", index: "BSCIT/CR/01/25/0004", region: "CENTRAL" },
    { name: "ABDUL JAFAR MUSAH APPIAH", index: "BSCIT/CR/01/25/0006", region: "CENTRAL" },
    { name: "LAWRENCE ABAKAH TURKSON", index: "BSCIT/CR/01/25/0008", region: "CENTRAL" },
    { name: "JACOB APPIAH", index: "BSCIT/CR/01/25/0009", region: "CENTRAL" }
  ],
  7: [
    { name: "SALU HARUNA", index: "BSCIT/CR/17/25/0001", region: "CENTRAL" },
    { name: "AUGUSTINE ESSEL", index: "BSCIT/CR/30/25/0001", region: "CENTRAL" },
    { name: "ANDREWS DUODU", index: "BSCIT/CR/30/25/0004", region: "CENTRAL" },
    { name: "SAMUEL ODARTEY LAMPTEY", index: "BSCIT/CR/30/25/0005", region: "CENTRAL" },
    { name: "JOHN BONAL ESSUMAN", index: "BSCIT/CR/30/25/0009", region: "CENTRAL" },
    { name: "PATIENCE APPIAH", index: "BSCIT/CR/30/25/0014", region: "CENTRAL" },
    { name: "MICHAEL SACKEY", index: "BSCIT/CR/30/25/0016", region: "CENTRAL" },
    { name: "BLESSING ANNAN-TAKYI", index: "BSCIT/CR/30/25/0017", region: "CENTRAL" },
    { name: "NKWANTABISAH JOHN KLYPHORD", index: "BSCIT/CR/30/25/0018", region: "CENTRAL" },
    { name: "GODFRED ARMAH", index: "BSCIT/SR/30/25/0001", region: "CENTRAL" }
  ],
  8: [
    { name: "DANIEL OWUSU", index: "BSCIT/SR/30/25/0002", region: "CENTRAL" },
    { name: "ENOCH SAKYI YAW OBISAW", index: "BSCIT/SR/30/25/0003", region: "CENTRAL" },
    { name: "RICHMOND KRAMPAH", index: "BSCIT/WR/06/25/0001", region: "CENTRAL" },
    { name: "SAMUEL ODARTEY LAMPTEY", index: "BSEIT/CR/30/25/0005", region: "CENTRAL" },
    { name: "JERRY HEGAH", index: "CD/ITE/CR/01/25/0003", region: "CENTRAL" },
    { name: "SOLOMON LAWSON", index: "CD/ITE/CR/01/25/0004", region: "CENTRAL" },
    { name: "OBED ADOKOH", index: "CD/ITE/CR/30/25/0005", region: "CENTRAL" },
    { name: "PATRICK LUMOR", index: "CD/ITE/CR/30/25/0010", region: "CENTRAL" },
    { name: "JOSHUA YAW OTABIL ANTWI", index: "CD/ITE/CR/30/25/0019", region: "CENTRAL" },
    { name: "Khadijah Mohammed Sani", index: "BSCIT/GA/09/25/0017", region: "CENTRAL" }
  ],
  9: [
    { name: "NKEMJIEME JOEL IFEANYI", index: "BEMAT/CR/01/25/0025", region: "EASTERN" },
    { name: "AMUZU PATIENCE", index: "BEMAT/ER/30/25/0002", region: "EASTERN" },
    { name: "AMEGBE DOE SARAH", index: "BEMAT/ER/30/25/0005", region: "EASTERN" },
    { name: "KONADU VIDA", index: "BEMAT/ER/30/25/0007", region: "EASTERN" },
    { name: "SETENU STEPHEN", index: "BEMAT/GA/09/25/0002", region: "EASTERN" },
    { name: "DJEAGUU MAVIS MAMLE", index: "BSCIT/ER/30/25/0007", region: "EASTERN" },
    { name: "NARH GIFTY DEDO", index: "BSCIT/GA/09/25/0010", region: "EASTERN" },
    { name: "CECILIA KWARTEMAA OPPONG", index: "BSCIT/CR/01/25/0011", region: "EASTERN" },
    { name: "DERRICK DOGBE KLIDO", index: "BSCIT/ER/30/25/0001", region: "EASTERN" },
    { name: "NYARKO DANIEL", index: "BSCIT/ER/30/25/0003", region: "EASTERN" }
  ],
  10: [
    { name: "JOSEPH DJEAGUU", index: "BSCIT/ER/30/25/0004", region: "EASTERN" },
    { name: "DEBRAH RICHMOND OSEI", index: "CCEME25/000357", region: "EASTERN" },
    { name: "AARON AMOAKO DANKWA", index: "CD/ITE/ER/30/25/0001", region: "EASTERN" },
    { name: "TERKPERTEY EMMANUEL", index: "CD/ITE/ER/30/25/0003", region: "EASTERN" },
    { name: "DANIEL ACQUAH", index: "CD/ITE/ER/30/25/0006", region: "EASTERN" },
    { name: "OWUSU DENKYIRA FRANK", index: "CD/ITE/ER/30/25/0007", region: "EASTERN" },
    { name: "APORI JACOB KORANTENG", index: "CD/ITE/ER/30/25/0014", region: "EASTERN" },
    { name: "DANIEL KENNEY TETTEY", index: "CD/ITE/GA/09/25/0010", region: "EASTERN" },
    { name: "Seyram Kofi Alormenu", index: "CD/ITE/ER/30/25/0005", region: "EASTERN" }
  ],
  11: [
    { name: "TAKYI SETH", index: "BSCIT/GA/40/25/0026", region: "GREATER ACCRA" },
    { name: "WINFRED KWESI GAWONYAH", index: "CD/ITE/GA/40/25/0019", region: "GREATER ACCRA" },
    { name: "PRECIOUS AKPENE KOFIGAH", index: "BEMAT/GA/40/25/0034", region: "GREATER ACCRA" },
    { name: "KUMI PRINCE", index: "BEMAT/GA/09/25/0001", region: "GREATER ACCRA" },
    { name: "NOBLE ASHONG", index: "BEMAT/GA/09/25/0003", region: "GREATER ACCRA" },
    { name: "AMABLE KWAME ALFRED", index: "BEMAT/GA/09/25/0004", region: "GREATER ACCRA" },
    { name: "OSARFO SEKYIE COLLINS", index: "BEMAT/GA/09/25/0005", region: "GREATER ACCRA" },
    { name: "SAMUEL NYAME", index: "BEMAT/GA/40/25/0013", region: "GREATER ACCRA" },
    { name: "ADJETEY EBENEZER", index: "BEMAT/GA/40/25/0014", region: "GREATER ACCRA" },
    { name: "ADDICO AKUNARH PHILIP", index: "BEMAT/GA/40/25/0021", region: "GREATER ACCRA" }
  ],
  12: [
    { name: "ADAMA GARIBA", index: "BSCIT/GA/40/25/0019", region: "GREATER ACCRA" },
    { name: "AMOAH MAXWELL", index: "BSCIT/CR/01/25/0010", region: "GREATER ACCRA" },
    { name: "FRANK HAMENU", index: "BSCIT/ER/30/25/0002", region: "GREATER ACCRA" },
    { name: "SANDRA APENKRO LARKO", index: "BSCIT/GA/09/25/0005", region: "GREATER ACCRA" },
    { name: "SAMUEL ABOAGYE", index: "BSCIT/GA/09/25/0001", region: "GREATER ACCRA" },
    { name: "AGBEYOME XORSE KWAKU", index: "BSCIT/GA/09/25/0002", region: "GREATER ACCRA" },
    { name: "SARFO KAITOO GIDEON", index: "BSCIT/GA/09/25/0003", region: "GREATER ACCRA" },
    { name: "SANDRA LARKO APENKRO", index: "BSCIT/GA/09/25/0005", region: "GREATER ACCRA" },
    { name: "BENEDICTA HUJALEY", index: "BSCIT/GA/09/25/0006", region: "GREATER ACCRA" },
    { name: "ANDOH GABRIEL", index: "BSCIT/GA/09/25/0007", region: "GREATER ACCRA" }
  ],
  13: [
    { name: "DUMEVI ERNEST DREY", index: "BSCIT/GA/09/25/0008", region: "GREATER ACCRA" },
    { name: "OSEI JESSICA AGYEIWAA", index: "BSCIT/GA/09/25/0014", region: "GREATER ACCRA" },
    { name: "ATSIKEN JONAS DONALDSON", index: "BSCIT/GA/25/40/0003", region: "GREATER ACCRA" },
    { name: "MENSAH-BRUCE JOHN", index: "BSCIT/GA/40/25/0002", region: "GREATER ACCRA" },
    { name: "DERRICK OKYERE", index: "BSCIT/GA/40/25/0004", region: "GREATER ACCRA" },
    { name: "DORCAS OWUSU", index: "BSCIT/GA/40/25/0005", region: "GREATER ACCRA" },
    { name: "JESSE ARTHUR JOHNSON", index: "BSCIT/GA/40/25/0006", region: "GREATER ACCRA" },
    { name: "CHARLES OCRAN", index: "BSCIT/GA/40/25/0007", region: "GREATER ACCRA" },
    { name: "FRANK OWIREDU", index: "BSCIT/GA/40/25/0009", region: "GREATER ACCRA" },
    { name: "WISDOM LUCAS DELA", index: "BSCIT/GA/40/25/0010", region: "GREATER ACCRA" }
  ],
  14: [
    { name: "TEKPOR ELORM JESSEY", index: "BSCIT/GA/40/25/0011", region: "GREATER ACCRA" },
    { name: "PRINCE ENSEIMEDEN- AMETT", index: "BSCIT/GA/40/25/0012", region: "GREATER ACCRA" },
    { name: "SAMUEL MORDECAI LAMPTEY", index: "BSCIT/GA/40/25/0013", region: "GREATER ACCRA" },
    { name: "DANIEL AFRIFA", index: "BSCIT/GA/40/25/0014", region: "GREATER ACCRA" },
    { name: "LORD YEBOAH", index: "BSCIT/GA/40/25/0015", region: "GREATER ACCRA" },
    { name: "MAROUF MUTAWAKIL MALTITI", index: "BSCIT/GA/40/25/0020", region: "GREATER ACCRA" },
    { name: "PRISCILLA AKU BOKOZATEY", index: "BSCIT/GA/40/25/0022", region: "GREATER ACCRA" },
    { name: "JOSEPH LARYEA ANNANG", index: "BSCIT/GA/40/25/0023", region: "GREATER ACCRA" },
    { name: "THEOPHILUS KOTEY", index: "BSCIT/GA/40/25/0024", region: "GREATER ACCRA" },
    { name: "ENOCH TIEKU", index: "BSCIT/GA/40/25/0028", region: "GREATER" }
  ],
  15: [
    { name: "JOSEPH NII LARYEA", index: "BSCIT/GA/40/25/23", region: "GREATER ACCRA" },
    { name: "ASSIE OFORI BERNARD", index: "CD/ITE/GA/40/25/0003", region: "GREATER ACCRA" },
    { name: "ANITA ANDAM", index: "CD/ITE/CR/01/25/0002", region: "GREATER ACCRA" },
    { name: "ADDISON DINSEY", index: "CD/ITE/CR/01/25/0010", region: "GREATER ACCRA" },
    { name: "FUMEY DANIEL MAWULI KWAKU", index: "CD/ITE/GA/09/25/0008", region: "GREATER ACCRA" },
    { name: "ABRAHAM TETTEH AGBENORSI", index: "CD/ITE/GA/09/0003", region: "GREATER ACCRA" },
    { name: "GILBERT ADANUSAH", index: "CD/ITE/GA/09/25/0001", region: "GREATER ACCRA" },
    { name: "OBODAI PASCALENE TORSHIE", index: "CD/ITE/GA/09/25/0002", region: "GREATER ACCRA" },
    { name: "ABRAHAM TETTEH AGBENORSI", index: "CD/ITE/GA/09/25/0003", region: "GREATER ACCRA" },
    { name: "PHILIP DEY", index: "CD/ITE/GA/09/25/0005", region: "GREATER ACCRA" }
  ],
  16: [
    { name: "VIKPOHO DELADEM EVANS", index: "CD/ITE/GA/09/25/0006", region: "GREATER ACCRA" },
    { name: "ASARE AKUSIKA VANESSA", index: "CD/ITE/GA/09/25/0007", region: "GREATER ACCRA" },
    { name: "EBENEZER KWAME KORAMPONG", index: "CD/ITE/GA/09/25/0011", region: "GREATER ACCRA" },
    { name: "ZEVOR DELIGHT KEKELI", index: "CD/ITE/GA/40/25/0002", region: "GREATER ACCRA" },
    { name: "BOAFO SAMUEL", index: "CD/ITE/GA/40/25/0011", region: "GREATER ACCRA" },
    { name: "JUDITH BABIE TEYE", index: "CD/ITE/GA/40/25/0013", region: "GREATER ACCRA" },
    { name: "Amoah Linus", index: "BEMAT/GA/40/25/0015", region: "GREATER ACCRA" },
    { name: "Esame Princess Senam", index: "BSCIT/GA/09/25/0013", region: "GREATER ACCRA" },
    { name: "Sani Rasheed", index: "BSCIT/GA/09/25/0016", region: "GREATER ACCRA" },
    { name: "Grace Kwashie", index: "BSCIT/GA/40/25/0008", region: "GREATER ACCRA" }
  ],
  17: [
    { name: "NSOR KWESI", index: "BSCIT/NR/30/25/0002", region: "NORTHERN" },
    { name: "DOUGLAS N YUORIPUREE", index: "BSCIT/NR/30/25/0004", region: "NORTHERN" },
    { name: "EBENEZER HAYFORD", index: "BSCIT/CR/01/25/0002", region: "UPPEREAST" },
    { name: "ASIKANDA SUMANI", index: "CD/ITE/UE/30/25/0001", region: "UPPEREAST" },
    { name: "ATAFO ADOLYINE BENJAMIN", index: "CD/ITE/UE/30/25/0003", region: "UPPEREAST" },
    { name: "DUMBA PASCAL", index: "BSCIT/UW/30/25/0001", region: "UPPERWEST" },
    { name: "Abdul-Wahab A Kamil", index: "CD/ITE/NR/30/25/0002", region: "NORTHERN" }
  ],
  18: [
    { name: "BLUDE STEPHEN KWASI", index: "BSCIT/CR/01/25/0018", region: "VOLTA" },
    { name: "ANTHONY BADU OSEI", index: "BSCIT/OT/30/25/0001", region: "VOLTA" },
    { name: "DZAMESI FRANK KWAKU", index: "BSCIT/VR/02/25/0001", region: "VOLTA" }
  ],
  19: [
    { name: "JOHN MYERS", index: "CD/ITE/WR/30/25/0001", region: "WESTERN" },
    { name: "APPIAH CHRISTOPHER", index: "BEMAT/WR/06/25/0002", region: "WESTERN" },
    { name: "EMMANUEL ASLAM MENSAH", index: "BEMAT/WR/30/25/0003", region: "WESTERN" },
    { name: "JAMES ASARE GALLEY", index: "BEMAT/WR/30/25/0005", region: "WESTERN" },
    { name: "PORTIA AGYAPOMAA NTIAMOAH", index: "BSCIT/WN/30/25/0001", region: "WESTERN" },
    { name: "MOSES ASANTE", index: "BSCIT/WN/30/25/0002", region: "WESTERN" },
    { name: "GEORGE OFORI ARTHUR", index: "BSCIT/WR/30/25/0001", region: "WESTERN" },
    { name: "FRANCIS ASIEDU KWOFIE", index: "CD/ITE/CR/01/25/0006", region: "WESTERN" },
    { name: "Richard Amissah", index: "BEMAT/WR/30/25/0009", region: "WESTERN" }
  ],
  20: [
    { name: "YAKUBU NASHIRU ABANG", index: "BSCIT/CR/01/25/0016", region: "WESTERN NORTH" },
    { name: "MENSAH BRIGHT", index: "CD/ITE/WR/30/25/0006", region: "WESTERN NORTH" },
    { name: "APPIAH PRINCE", index: "CD/ITE/WR/30/25/0009", region: "WESTERN NORTH" }
  ]
};