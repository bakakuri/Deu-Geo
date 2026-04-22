
// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════

const VOCABULARY = [
  // A1 - Basic
  {de:"Hallo",ka:"გამარჯობა",phonetic:"[ˈhaloː]",cat:"მისალმება",level:"A1",article:""},
  {de:"Guten Morgen",ka:"დილა მშვიდობისა",phonetic:"[ˌɡuːtən ˈmɔʁɡən]",cat:"მისალმება",level:"A1",article:""},
  {de:"Guten Tag",ka:"შუადღე მშვიდობისა",phonetic:"[ˌɡuːtən ˈtaːk]",cat:"მისალმება",level:"A1",article:""},
  {de:"Guten Abend",ka:"საღამო მშვიდობისა",phonetic:"[ˌɡuːtən ˈaːbənt]",cat:"მისალმება",level:"A1",article:""},
  {de:"Auf Wiedersehen",ka:"ნახვამდის",phonetic:"[ˌaʊf ˈviːdɐzeːən]",cat:"მისალმება",level:"A1",article:""},
  {de:"Tschüss",ka:"ნახვამდის (არაფორმ.)",phonetic:"[tʃʏs]",cat:"მისალმება",level:"A1",article:""},
  {de:"Bitte",ka:"გთხოვთ / არა უშავს",phonetic:"[ˈbɪtə]",cat:"ზოგადი",level:"A1",article:""},
  {de:"Danke",ka:"მადლობა",phonetic:"[ˈdaŋkə]",cat:"ზოგადი",level:"A1",article:""},
  {de:"Ja",ka:"დიახ",phonetic:"[jaː]",cat:"ზოგადი",level:"A1",article:""},
  {de:"Nein",ka:"არა",phonetic:"[naɪn]",cat:"ზოგადი",level:"A1",article:""},
  {de:"der Mann",ka:"კაცი",phonetic:"[deːɐ̯ man]",cat:"ადამიანი",level:"A1",article:"der"},
  {de:"die Frau",ka:"ქალი",phonetic:"[diː fʁaʊ]",cat:"ადამიანი",level:"A1",article:"die"},
  {de:"das Kind",ka:"ბავშვი",phonetic:"[das kɪnt]",cat:"ადამიანი",level:"A1",article:"das"},
  {de:"die Familie",ka:"ოჯახი",phonetic:"[diː faˈmiːliə]",cat:"ოჯახი",level:"A1",article:"die"},
  {de:"die Mutter",ka:"დედა",phonetic:"[diː ˈmʊtɐ]",cat:"ოჯახი",level:"A1",article:"die"},
  {de:"der Vater",ka:"მამა",phonetic:"[deːɐ̯ ˈfaːtɐ]",cat:"ოჯახი",level:"A1",article:"der"},
  {de:"der Bruder",ka:"ძმა",phonetic:"[deːɐ̯ ˈbʁuːdɐ]",cat:"ოჯახი",level:"A1",article:"der"},
  {de:"die Schwester",ka:"და",phonetic:"[diː ˈʃvɛstɐ]",cat:"ოჯახი",level:"A1",article:"die"},
  {de:"das Haus",ka:"სახლი",phonetic:"[das haʊs]",cat:"სახლი",level:"A1",article:"das"},
  {de:"die Wohnung",ka:"ბინა",phonetic:"[diː ˈvoːnʊŋ]",cat:"სახლი",level:"A1",article:"die"},
  {de:"das Zimmer",ka:"ოთახი",phonetic:"[das ˈtsɪmɐ]",cat:"სახლი",level:"A1",article:"das"},
  {de:"die Küche",ka:"სამზარეულო",phonetic:"[diː ˈkʏçə]",cat:"სახლი",level:"A1",article:"die"},
  {de:"das Bad",ka:"სააბაზანო",phonetic:"[das baːt]",cat:"სახლი",level:"A1",article:"das"},
  {de:"die Tür",ka:"კარი",phonetic:"[diː tyːɐ̯]",cat:"სახლი",level:"A1",article:"die"},
  {de:"das Fenster",ka:"ფანჯარა",phonetic:"[das ˈfɛnstɐ]",cat:"სახლი",level:"A1",article:"das"},
  {de:"eins",ka:"ერთი",phonetic:"[aɪns]",cat:"რიცხვები",level:"A1",article:""},
  {de:"zwei",ka:"ორი",phonetic:"[tsvaɪ]",cat:"რიცხვები",level:"A1",article:""},
  {de:"drei",ka:"სამი",phonetic:"[dʁaɪ]",cat:"რიცხვები",level:"A1",article:""},
  {de:"vier",ka:"ოთხი",phonetic:"[fiːɐ̯]",cat:"რიცხვები",level:"A1",article:""},
  {de:"fünf",ka:"ხუთი",phonetic:"[fʏnf]",cat:"რიცხვები",level:"A1",article:""},
  {de:"sechs",ka:"ექვსი",phonetic:"[zɛks]",cat:"რიცხვები",level:"A1",article:""},
  {de:"sieben",ka:"შვიდი",phonetic:"[ˈziːbən]",cat:"რიცხვები",level:"A1",article:""},
  {de:"acht",ka:"რვა",phonetic:"[axt]",cat:"რიცხვები",level:"A1",article:""},
  {de:"neun",ka:"ცხრა",phonetic:"[nɔɪn]",cat:"რიცხვები",level:"A1",article:""},
  {de:"zehn",ka:"ათი",phonetic:"[tseːn]",cat:"რიცხვები",level:"A1",article:""},
  {de:"rot",ka:"წითელი",phonetic:"[ʁoːt]",cat:"ფერები",level:"A1",article:""},
  {de:"blau",ka:"ლურჯი",phonetic:"[blaʊ]",cat:"ფერები",level:"A1",article:""},
  {de:"grün",ka:"მწვანე",phonetic:"[ɡʁyːn]",cat:"ფერები",level:"A1",article:""},
  {de:"gelb",ka:"ყვითელი",phonetic:"[ɡɛlp]",cat:"ფერები",level:"A1",article:""},
  {de:"schwarz",ka:"შავი",phonetic:"[ʃvaʁts]",cat:"ფერები",level:"A1",article:""},
  {de:"weiß",ka:"თეთრი",phonetic:"[vaɪs]",cat:"ფერები",level:"A1",article:""},
  {de:"das Wasser",ka:"წყალი",phonetic:"[das ˈvasɐ]",cat:"საჭმელ-სასმელი",level:"A1",article:"das"},
  {de:"das Brot",ka:"პური",phonetic:"[das bʁoːt]",cat:"საჭმელ-სასმელი",level:"A1",article:"das"},
  {de:"die Milch",ka:"რძე",phonetic:"[diː mɪlç]",cat:"საჭმელ-სასმელი",level:"A1",article:"die"},
  {de:"der Kaffee",ka:"ყავა",phonetic:"[deːɐ̯ ˈkafe]",cat:"საჭმელ-სასმელი",level:"A1",article:"der"},
  {de:"der Tee",ka:"ჩაი",phonetic:"[deːɐ̯ teː]",cat:"საჭმელ-სასმელი",level:"A1",article:"der"},
  {de:"das Fleisch",ka:"ხორცი",phonetic:"[das flaɪʃ]",cat:"საჭმელ-სასმელი",level:"A1",article:"das"},
  {de:"der Fisch",ka:"თევზი",phonetic:"[deːɐ̯ fɪʃ]",cat:"საჭმელ-სასმელი",level:"A1",article:"der"},
  {de:"Montag",ka:"ორშაბათი",phonetic:"[ˈmoːntaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Dienstag",ka:"სამშაბათი",phonetic:"[ˈdiːnstaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Mittwoch",ka:"ოთხშაბათი",phonetic:"[ˈmɪtvoːx]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Donnerstag",ka:"ხუთშაბათი",phonetic:"[ˈdɔnɐstaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Freitag",ka:"პარასკევი",phonetic:"[ˈfʁaɪtaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Samstag",ka:"შაბათი",phonetic:"[ˈzamstaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  {de:"Sonntag",ka:"კვირა",phonetic:"[ˈzɔntaːk]",cat:"კვირის დღეები",level:"A1",article:""},
  // A2
  {de:"der Beruf",ka:"პროფესია",phonetic:"[deːɐ̯ bəˈʁuːf]",cat:"სამსახური",level:"A2",article:"der"},
  {de:"die Arbeit",ka:"სამსახური / მუშაობა",phonetic:"[diː ˈaʁbaɪt]",cat:"სამსახური",level:"A2",article:"die"},
  {de:"der Chef",ka:"უფროსი",phonetic:"[deːɐ̯ ʃɛf]",cat:"სამსახური",level:"A2",article:"der"},
  {de:"das Büro",ka:"ოფისი",phonetic:"[das byˈʁoː]",cat:"სამსახური",level:"A2",article:"das"},
  {de:"der Computer",ka:"კომპიუტერი",phonetic:"[deːɐ̯ kɔmˈpjuːtɐ]",cat:"ტექნოლოგია",level:"A2",article:"der"},
  {de:"das Handy",ka:"მობილური ტელეფონი",phonetic:"[das ˈhɛndi]",cat:"ტექნოლოგია",level:"A2",article:"das"},
  {de:"das Internet",ka:"ინტერნეტი",phonetic:"[das ˈɪntɐnɛt]",cat:"ტექნოლოგია",level:"A2",article:"das"},
  {de:"die Stadt",ka:"ქალაქი",phonetic:"[diː ʃtat]",cat:"ადგილები",level:"A2",article:"die"},
  {de:"der Bahnhof",ka:"სარკინიგზო სადგური",phonetic:"[deːɐ̯ ˈbaːnhoːf]",cat:"ადგილები",level:"A2",article:"der"},
  {de:"das Krankenhaus",ka:"საავადმყოფო",phonetic:"[das ˈkʁaŋkənhaʊs]",cat:"ადგილები",level:"A2",article:"das"},
  {de:"die Schule",ka:"სკოლა",phonetic:"[diː ˈʃuːlə]",cat:"განათლება",level:"A2",article:"die"},
  {de:"die Universität",ka:"უნივერსიტეტი",phonetic:"[diː univɛʁziˈtɛːt]",cat:"განათლება",level:"A2",article:"die"},
  {de:"der Lehrer",ka:"მასწავლებელი (მამ.)",phonetic:"[deːɐ̯ ˈleːʁɐ]",cat:"განათლება",level:"A2",article:"der"},
  {de:"der Schüler",ka:"მოსწავლე (მამ.)",phonetic:"[deːɐ̯ ˈʃyːlɐ]",cat:"განათლება",level:"A2",article:"der"},
  {de:"das Buch",ka:"წიგნი",phonetic:"[das buːx]",cat:"განათლება",level:"A2",article:"das"},
  {de:"krank",ka:"ავადმყოფი",phonetic:"[kʁaŋk]",cat:"ჯანმრთელობა",level:"A2",article:""},
  {de:"der Arzt",ka:"ექიმი (მამ.)",phonetic:"[deːɐ̯ aːɐ̯tst]",cat:"ჯანმრთელობა",level:"A2",article:"der"},
  {de:"die Tablette",ka:"აბი / ტაბლეტი",phonetic:"[diː taˈblɛtə]",cat:"ჯანმრთელობა",level:"A2",article:"die"},
  {de:"die Apotheke",ka:"აფთიაქი",phonetic:"[diː apoˈteːkə]",cat:"ჯანმრთელობა",level:"A2",article:"die"},
  {de:"das Wetter",ka:"ამინდი",phonetic:"[das ˈvɛtɐ]",cat:"ამინდი",level:"A2",article:"das"},
  {de:"die Sonne",ka:"მზე",phonetic:"[diː ˈzɔnə]",cat:"ამინდი",level:"A2",article:"die"},
  {de:"der Regen",ka:"წვიმა",phonetic:"[deːɐ̯ ˈʁeːɡən]",cat:"ამინდი",level:"A2",article:"der"},
  {de:"der Schnee",ka:"თოვლი",phonetic:"[deːɐ̯ ʃneː]",cat:"ამინდი",level:"A2",article:"der"},
  {de:"warm",ka:"თბილი",phonetic:"[vaʁm]",cat:"ამინდი",level:"A2",article:""},
  {de:"kalt",ka:"ცივი",phonetic:"[kalt]",cat:"ამინდი",level:"A2",article:""},
  // B1
  {de:"die Erfahrung",ka:"გამოცდილება",phonetic:"[diː ɛɐ̯ˈfaːʁʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"die Entwicklung",ka:"განვითარება",phonetic:"[diː ɛntˈvɪklʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"die Möglichkeit",ka:"შესაძლებლობა",phonetic:"[diː ˈmøːklɪçkaɪt]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"die Gesellschaft",ka:"საზოგადოება",phonetic:"[diː ɡəˈzɛlʃaft]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"der Unterschied",ka:"განსხვავება",phonetic:"[deːɐ̯ ˈʊntɐʃiːt]",cat:"B1 ლექსიკა",level:"B1",article:"der"},
  {de:"die Beziehung",ka:"ურთიერთობა",phonetic:"[diː bəˈtsiːʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"die Bedeutung",ka:"მნიშვნელობა",phonetic:"[diː bəˈdɔɪtʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"das Beispiel",ka:"მაგალითი",phonetic:"[das bəˈʃpiːl]",cat:"B1 ლექსიკა",level:"B1",article:"das"},
  {de:"die Entscheidung",ka:"გადაწყვეტილება",phonetic:"[diː ɛntˈʃaɪdʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  {de:"die Verantwortung",ka:"პასუხისმგებლობა",phonetic:"[diː fɛɐ̯ˈantvɔʁtʊŋ]",cat:"B1 ლექსიკა",level:"B1",article:"die"},
  // B2
  {de:"die Herausforderung",ka:"გამოწვევა",phonetic:"[diː hɛˈʁaʊsfɔʁdəʁʊŋ]",cat:"B2 ლექსიკა",level:"B2",article:"die"},
  {de:"die Auswirkung",ka:"ეფექტი / შედეგი",phonetic:"[diː ˈaʊsvɪʁkʊŋ]",cat:"B2 ლექსიკა",level:"B2",article:"die"},
  {de:"die Voraussetzung",ka:"წინაპირობა",phonetic:"[diː foˈʁaʊszɛtsʊŋ]",cat:"B2 ლექსიკა",level:"B2",article:"die"},
  {de:"der Zusammenhang",ka:"კავშირი / კონტექსტი",phonetic:"[deːɐ̯ tsuˈzamənhaŋ]",cat:"B2 ლექსიკა",level:"B2",article:"der"},
  {de:"die Gerechtigkeit",ka:"სამართლიანობა",phonetic:"[diː ɡəˈʁɛçtɪçkaɪt]",cat:"B2 ლექსიკა",level:"B2",article:"die"},
  {de:"die Nachhaltigkeit",ka:"მდგრადობა",phonetic:"[diː naːxˈhaltɪçkaɪt]",cat:"B2 ლექსიკა",level:"B2",article:"die"},
  // C1/C2
  {de:"die Abhandlung",ka:"ნაშრომი / ტრაქტატი",phonetic:"[diː ˈaphanlʊŋ]",cat:"C1/C2 ლექსიკა",level:"C1",article:"die"},
  {de:"die Beeinträchtigung",ka:"დარღვევა / შეფერხება",phonetic:"[diː bəˈaɪntʁɛçtɪɡʊŋ]",cat:"C1/C2 ლექსიკა",level:"C1",article:"die"},
  {de:"die Eigenverantwortlichkeit",ka:"პირადი პასუხისმგებლობა",phonetic:"[diː ˈaɪɡənfɛɐ̯antvɔʁtlɪçkaɪt]",cat:"C1/C2 ლექსიკა",level:"C2",article:"die"},
  // Animals
  {de:"der Hund",ka:"ძაღლი",phonetic:"[deːɐ̯ hʊnt]",cat:"ცხოველები",level:"A1",article:"der"},
  {de:"die Katze",ka:"კატა",phonetic:"[diː ˈkatsə]",cat:"ცხოველები",level:"A1",article:"die"},
  {de:"der Vogel",ka:"ფრინველი",phonetic:"[deːɐ̯ ˈfoːɡəl]",cat:"ცხოველები",level:"A1",article:"der"},
  {de:"das Pferd",ka:"ცხენი",phonetic:"[das pfɛʁt]",cat:"ცხოველები",level:"A1",article:"das"},
  {de:"die Kuh",ka:"ძროხა",phonetic:"[diː kuː]",cat:"ცხოველები",level:"A1",article:"die"},
  // Body
  {de:"der Kopf",ka:"თავი",phonetic:"[deːɐ̯ kɔpf]",cat:"სხეულის ნაწილები",level:"A1",article:"der"},
  {de:"die Hand",ka:"ხელი",phonetic:"[diː hant]",cat:"სხეულის ნაწილები",level:"A1",article:"die"},
  {de:"das Auge",ka:"თვალი",phonetic:"[das ˈaʊɡə]",cat:"სხეულის ნაწილები",level:"A1",article:"das"},
  {de:"die Nase",ka:"ცხვირი",phonetic:"[diː ˈnaːzə]",cat:"სხეულის ნაწილები",level:"A1",article:"die"},
  {de:"der Mund",ka:"პირი",phonetic:"[deːɐ̯ mʊnt]",cat:"სხეულის ნაწილები",level:"A1",article:"der"},
  // Clothes
  {de:"das Hemd",ka:"პერანგი",phonetic:"[das hɛmt]",cat:"ტანსაცმელი",level:"A2",article:"das"},
  {de:"die Hose",ka:"შარვალი",phonetic:"[diː ˈhoːzə]",cat:"ტანსაცმელი",level:"A2",article:"die"},
  {de:"die Jacke",ka:"ჟაკეტი",phonetic:"[diː ˈjakə]",cat:"ტანსაცმელი",level:"A2",article:"die"},
  {de:"der Schuh",ka:"ფეხსაცმელი",phonetic:"[deːɐ̯ ʃuː]",cat:"ტანსაცმელი",level:"A2",article:"der"},
  // Transport
  {de:"das Auto",ka:"მანქანა",phonetic:"[das ˈaʊtoː]",cat:"ტრანსპორტი",level:"A1",article:"das"},
  {de:"der Bus",ka:"ავტობუსი",phonetic:"[deːɐ̯ bʊs]",cat:"ტრანსპორტი",level:"A1",article:"der"},
  {de:"der Zug",ka:"მატარებელი",phonetic:"[deːɐ̯ tsuːk]",cat:"ტრანსპორტი",level:"A1",article:"der"},
  {de:"das Flugzeug",ka:"თვითმფრინავი",phonetic:"[das ˈfluːktsoɪk]",cat:"ტრანსპორტი",level:"A1",article:"das"},
  // Emotions
  {de:"glücklich",ka:"ბედნიერი",phonetic:"[ˈɡlʏklɪç]",cat:"ემოციები",level:"A2",article:""},
  {de:"traurig",ka:"სევდიანი",phonetic:"[ˈtʁaʊʁɪç]",cat:"ემოციები",level:"A2",article:""},
  {de:"müde",ka:"დაღლილი",phonetic:"[ˈmyːdə]",cat:"ემოციები",level:"A2",article:""},
  {de:"wütend",ka:"გაბრაზებული",phonetic:"[ˈvyːtənt]",cat:"ემოციები",level:"A2",article:""},
  {de:"ängstlich",ka:"შეშინებული",phonetic:"[ˈɛŋstlɪç]",cat:"ემოციები",level:"A2",article:""},
  // Nature
  {de:"der Berg",ka:"მთა",phonetic:"[deːɐ̯ bɛʁk]",cat:"ბუნება",level:"A1",article:"der"},
  {de:"der Fluss",ka:"მდინარე",phonetic:"[deːɐ̯ flʊs]",cat:"ბუნება",level:"A1",article:"der"},
  {de:"der Wald",ka:"ტყე",phonetic:"[deːɐ̯ valt]",cat:"ბუნება",level:"A1",article:"der"},
  {de:"das Meer",ka:"ზღვა",phonetic:"[das meːɐ̯]",cat:"ბუნება",level:"A1",article:"das"},
  // Months
  {de:"Januar",ka:"იანვარი",phonetic:"[ˈjanuaːɐ̯]",cat:"თვეები",level:"A1",article:""},
  {de:"Februar",ka:"თებერვალი",phonetic:"[ˈfeːbʁuaːɐ̯]",cat:"თვეები",level:"A1",article:""},
  {de:"März",ka:"მარტი",phonetic:"[mɛʁts]",cat:"თვეები",level:"A1",article:""},
  {de:"April",ka:"აპრილი",phonetic:"[aˈpʁɪl]",cat:"თვეები",level:"A1",article:""},
  {de:"Mai",ka:"მაისი",phonetic:"[maɪ]",cat:"თვეები",level:"A1",article:""},
  {de:"Juni",ka:"ივნისი",phonetic:"[ˈjuːni]",cat:"თვეები",level:"A1",article:""},
  {de:"Juli",ka:"ივლისი",phonetic:"[ˈjuːli]",cat:"თვეები",level:"A1",article:""},
  {de:"August",ka:"აგვისტო",phonetic:"[aʊˈɡʊst]",cat:"თვეები",level:"A1",article:""},
  {de:"September",ka:"სექტემბერი",phonetic:"[zɛpˈtɛmbɐ]",cat:"თვეები",level:"A1",article:""},
  {de:"Oktober",ka:"ოქტომბერი",phonetic:"[ɔkˈtoːbɐ]",cat:"თვეები",level:"A1",article:""},
  {de:"November",ka:"ნოემბერი",phonetic:"[noˈvɛmbɐ]",cat:"თვეები",level:"A1",article:""},
  {de:"Dezember",ka:"დეკემბერი",phonetic:"[deˈtsɛmbɐ]",cat:"თვეები",level:"A1",article:""},
  // More to approach 500 - adding batches
  {de:"groß",ka:"დიდი",phonetic:"[ɡʁoːs]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"klein",ka:"პატარა",phonetic:"[klaɪn]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"schön",ka:"ლამაზი",phonetic:"[ʃøːn]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"gut",ka:"კარგი",phonetic:"[ɡuːt]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"schlecht",ka:"ცუდი",phonetic:"[ʃlɛçt]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"neu",ka:"ახალი",phonetic:"[nɔɪ]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"alt",ka:"ძველი / ასაკოვანი",phonetic:"[alt]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"schnell",ka:"სწრაფი",phonetic:"[ʃnɛl]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"langsam",ka:"ნელი",phonetic:"[ˈlaŋzaːm]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"billig",ka:"იაფი",phonetic:"[ˈbɪlɪç]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"teuer",ka:"ძვირი",phonetic:"[ˈtɔɪɐ]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"lecker",ka:"გემრიელი",phonetic:"[ˈlɛkɐ]",cat:"ზედსართავები",level:"A1",article:""},
  {de:"schwer",ka:"მძიმე / რთული",phonetic:"[ʃveːɐ̯]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"leicht",ka:"მსუბუქი / ადვილი",phonetic:"[laɪçt]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"wichtig",ka:"მნიშვნელოვანი",phonetic:"[ˈvɪçtɪç]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"interessant",ka:"საინტერესო",phonetic:"[ɪntɛʁɛˈsant]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"langweilig",ka:"მოსაბეზრებელი",phonetic:"[ˈlaŋvaɪlɪç]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"laut",ka:"ხმამაღალი",phonetic:"[laʊt]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"leise",ka:"წყნარი / ჩუმი",phonetic:"[ˈlaɪzə]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"sauber",ka:"სუფთა",phonetic:"[ˈzaʊbɐ]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"schmutzig",ka:"ჭუჭყიანი",phonetic:"[ˈʃmʊtsɪç]",cat:"ზედსართავები",level:"A2",article:""},
  {de:"essen",ka:"ჭამა",phonetic:"[ˈɛsən]",cat:"ზმნები",level:"A1",article:""},
  {de:"trinken",ka:"სმა",phonetic:"[ˈtʁɪŋkən]",cat:"ზმნები",level:"A1",article:""},
  {de:"schlafen",ka:"ძილი",phonetic:"[ˈʃlaːfən]",cat:"ზმნები",level:"A1",article:""},
  {de:"gehen",ka:"სიარული / წასვლა",phonetic:"[ˈɡeːən]",cat:"ზმნები",level:"A1",article:""},
  {de:"kommen",ka:"მოსვლა",phonetic:"[ˈkɔmən]",cat:"ზმნები",level:"A1",article:""},
  {de:"sehen",ka:"ხედვა",phonetic:"[ˈzeːən]",cat:"ზმნები",level:"A1",article:""},
  {de:"hören",ka:"სმენა",phonetic:"[ˈhøːʁən]",cat:"ზმნები",level:"A1",article:""},
  {de:"sprechen",ka:"ლაპარაკი",phonetic:"[ˈʃpʁɛçən]",cat:"ზმნები",level:"A1",article:""},
  {de:"lesen",ka:"კითხვა",phonetic:"[ˈleːzən]",cat:"ზმნები",level:"A1",article:""},
  {de:"schreiben",ka:"წერა",phonetic:"[ˈʃʁaɪbən]",cat:"ზმნები",level:"A1",article:""},
  {de:"kaufen",ka:"ყიდვა",phonetic:"[ˈkaʊfən]",cat:"ზმნები",level:"A1",article:""},
  {de:"haben",ka:"ქონა",phonetic:"[ˈhaːbən]",cat:"ზმნები",level:"A1",article:""},
  {de:"sein",ka:"ყოფნა",phonetic:"[zaɪn]",cat:"ზმნები",level:"A1",article:""},
  {de:"werden",ka:"გახდომა / გახდება",phonetic:"[ˈveːɐ̯dən]",cat:"ზმნები",level:"A2",article:""},
  {de:"machen",ka:"კეთება",phonetic:"[ˈmaxən]",cat:"ზმნები",level:"A1",article:""},
  {de:"arbeiten",ka:"მუშაობა",phonetic:"[ˈaʁbaɪtən]",cat:"ზმნები",level:"A1",article:""},
  {de:"lernen",ka:"სწავლა",phonetic:"[ˈlɛʁnən]",cat:"ზმნები",level:"A1",article:""},
  {de:"spielen",ka:"თამაში",phonetic:"[ˈʃpiːlən]",cat:"ზმნები",level:"A1",article:""},
  {de:"fahren",ka:"მგზავრობა (სატ.)",phonetic:"[ˈfaːʁən]",cat:"ზმნები",level:"A1",article:""},
  {de:"fliegen",ka:"ფრენა",phonetic:"[ˈfliːɡən]",cat:"ზმნები",level:"A2",article:""},
  {de:"wohnen",ka:"ცხოვრება (სად-მე)",phonetic:"[ˈvoːnən]",cat:"ზმნები",level:"A1",article:""},
  {de:"kochen",ka:"მომზადება (საჭმლის)",phonetic:"[ˈkɔxən]",cat:"ზმნები",level:"A1",article:""},
  {de:"singen",ka:"სიმღერა",phonetic:"[ˈzɪŋən]",cat:"ზმნები",level:"A2",article:""},
  {de:"tanzen",ka:"ცეკვა",phonetic:"[ˈtantsən]",cat:"ზმნები",level:"A2",article:""},
  {de:"laufen",ka:"სირბილი",phonetic:"[ˈlaʊfən]",cat:"ზმნები",level:"A1",article:""},
  {de:"suchen",ka:"ძებნა",phonetic:"[ˈzuːxən]",cat:"ზმნები",level:"A2",article:""},
  {de:"finden",ka:"პოვნა",phonetic:"[ˈfɪndən]",cat:"ზმნები",level:"A2",article:""},
  {de:"helfen",ka:"დახმარება",phonetic:"[ˈhɛlfən]",cat:"ზმნები",level:"A2",article:""},
  {de:"wissen",ka:"ცოდნა (ფაქტი)",phonetic:"[ˈvɪsən]",cat:"ზმნები",level:"A2",article:""},
  {de:"kennen",ka:"ცნობა (პირი/ადგ.)",phonetic:"[ˈkɛnən]",cat:"ზმნები",level:"A2",article:""},
  {de:"denken",ka:"ფიქრი",phonetic:"[ˈdɛŋkən]",cat:"ზმნები",level:"A2",article:""},
  {de:"glauben",ka:"რწმენა / ფიქრი",phonetic:"[ˈɡlaʊbən]",cat:"ზმნები",level:"A2",article:""},
  {de:"verstehen",ka:"გაგება",phonetic:"[fɛɐ̯ˈʃteːən]",cat:"ზმნები",level:"A2",article:""},
  {de:"erklären",ka:"ახსნა",phonetic:"[ɛɐ̯ˈklɛːʁən]",cat:"ზმნები",level:"B1",article:""},
  {de:"entscheiden",ka:"გადაწყვეტა",phonetic:"[ɛntˈʃaɪdən]",cat:"ზმნები",level:"B1",article:""},
  {de:"erreichen",ka:"მიღწევა",phonetic:"[ɛɐ̯ˈʁaɪçən]",cat:"ზმნები",level:"B1",article:""},
  {de:"verbessern",ka:"გაუმჯობესება",phonetic:"[fɛɐ̯ˈbɛsɐn]",cat:"ზმნები",level:"B1",article:""},
  {de:"entwickeln",ka:"განვითარება (ზმ.)",phonetic:"[ɛntˈvɪkəln]",cat:"ზმნები",level:"B1",article:""},
  // Prepositions & more
  {de:"in",ka:"შიგნით / -ში",phonetic:"[ɪn]",cat:"წინდებულები",level:"A1",article:""},
  {de:"auf",ka:"ზედ / -ზე",phonetic:"[aʊf]",cat:"წინდებულები",level:"A1",article:""},
  {de:"mit",ka:"-თან ერთად",phonetic:"[mɪt]",cat:"წინდებულები",level:"A1",article:""},
  {de:"ohne",ka:"გარეშე",phonetic:"[ˈoːnə]",cat:"წინდებულები",level:"A1",article:""},
  {de:"von",ka:"-დან / -ის",phonetic:"[fɔn]",cat:"წინდებულები",level:"A1",article:""},
  {de:"zu",ka:"-სკენ / -ზე",phonetic:"[tsuː]",cat:"წინდებულები",level:"A1",article:""},
  {de:"für",ka:"-ისთვის",phonetic:"[fyːɐ̯]",cat:"წინდებულები",level:"A1",article:""},
  {de:"durch",ka:"გავლით / -ით",phonetic:"[dʊʁç]",cat:"წინდებულები",level:"A2",article:""},
  {de:"über",ka:"ზემოთ / -ის შესახებ",phonetic:"[ˈyːbɐ]",cat:"წინდებულები",level:"A2",article:""},
  {de:"unter",ka:"ქვემოთ",phonetic:"[ˈʊntɐ]",cat:"წინდებულები",level:"A2",article:""},
  {de:"neben",ka:"გვერდით",phonetic:"[ˈneːbən]",cat:"წინდებულები",level:"A2",article:""},
  {de:"zwischen",ka:"შორის",phonetic:"[ˈtsvɪʃən]",cat:"წინდებულები",level:"A2",article:""},
  // Countries
  {de:"Deutschland",ka:"გერმანია",phonetic:"[ˈdɔɪtʃlant]",cat:"ქვეყნები",level:"A1",article:""},
  {de:"Georgien",ka:"საქართველო",phonetic:"[ɡeˈɔʁɡiən]",cat:"ქვეყნები",level:"A1",article:""},
  {de:"Österreich",ka:"ავსტრია",phonetic:"[ˈøːstɐʁaɪç]",cat:"ქვეყნები",level:"A1",article:""},
  {de:"die Schweiz",ka:"შვეიცარია",phonetic:"[diː ʃvaɪts]",cat:"ქვეყნები",level:"A1",article:"die"},
  {de:"Frankreich",ka:"საფრანგეთი",phonetic:"[ˈfʁaŋkʁaɪç]",cat:"ქვეყნები",level:"A1",article:""},
  {de:"England",ka:"ინგლისი",phonetic:"[ˈɛŋlant]",cat:"ქვეყნები",level:"A1",article:""},
  // Shopping
  {de:"der Laden",ka:"მაღაზია",phonetic:"[deːɐ̯ ˈlaːdən]",cat:"შოპინგი",level:"A1",article:"der"},
  {de:"der Markt",ka:"ბაზარი",phonetic:"[deːɐ̯ maʁkt]",cat:"შოპინგი",level:"A1",article:"der"},
  {de:"der Preis",ka:"ფასი",phonetic:"[deːɐ̯ pʁaɪs]",cat:"შოპინგი",level:"A1",article:"der"},
  {de:"das Geld",ka:"ფული",phonetic:"[das ɡɛlt]",cat:"შოპინგი",level:"A1",article:"das"},
  {de:"bezahlen",ka:"გადახდა",phonetic:"[bəˈtsaːlən]",cat:"შოპინგი",level:"A2",article:""},
  {de:"die Kasse",ka:"სალარო",phonetic:"[diː ˈkasə]",cat:"შოპინგი",level:"A2",article:"die"},
  // Time
  {de:"jetzt",ka:"ახლა",phonetic:"[jɛtst]",cat:"დრო",level:"A1",article:""},
  {de:"heute",ka:"დღეს",phonetic:"[ˈhɔɪtə]",cat:"დრო",level:"A1",article:""},
  {de:"morgen",ka:"ხვალ",phonetic:"[ˈmɔʁɡən]",cat:"დრო",level:"A1",article:""},
  {de:"gestern",ka:"გუშინ",phonetic:"[ˈɡɛstɐn]",cat:"დრო",level:"A1",article:""},
  {de:"immer",ka:"ყოველთვის",phonetic:"[ˈɪmɐ]",cat:"დრო",level:"A1",article:""},
  {de:"nie",ka:"არასოდეს",phonetic:"[niː]",cat:"დრო",level:"A1",article:""},
  {de:"oft",ka:"ხშირად",phonetic:"[ɔft]",cat:"დრო",level:"A1",article:""},
  {de:"manchmal",ka:"ზოგჯერ",phonetic:"[ˈmançmaːl]",cat:"დრო",level:"A1",article:""},
  {de:"früh",ka:"ადრე",phonetic:"[fʁyː]",cat:"დრო",level:"A1",article:""},
  {de:"spät",ka:"გვიან",phonetic:"[ʃpɛːt]",cat:"დრო",level:"A1",article:""},
  {de:"die Uhr",ka:"საათი (საგ.)",phonetic:"[diː uːɐ̯]",cat:"დრო",level:"A1",article:"die"},
  {de:"die Minute",ka:"წუთი",phonetic:"[diː miˈnuːtə]",cat:"დრო",level:"A1",article:"die"},
  {de:"die Stunde",ka:"საათი (ხანგ.)",phonetic:"[diː ˈʃtʊndə]",cat:"დრო",level:"A1",article:"die"},
  {de:"der Tag",ka:"დღე",phonetic:"[deːɐ̯ taːk]",cat:"დრო",level:"A1",article:"der"},
  {de:"die Woche",ka:"კვირა (7 დღე)",phonetic:"[diː ˈvɔxə]",cat:"დრო",level:"A1",article:"die"},
  {de:"der Monat",ka:"თვე",phonetic:"[deːɐ̯ ˈmoːnat]",cat:"დრო",level:"A1",article:"der"},
  {de:"das Jahr",ka:"წელი",phonetic:"[das jaːɐ̯]",cat:"დრო",level:"A1",article:"das"},
];

const CATEGORIES_META = {
  "მისალმება":     {icon:"👋", desc:"A1 – პირველი სიტყვები"},
  "ზოგადი":        {icon:"💬", desc:"A1 – ყოველდღიური"},
  "ადამიანი":      {icon:"👤", desc:"A1 – ადამიანები"},
  "ოჯახი":         {icon:"👨‍👩‍👧", desc:"A1 – ოჯახი"},
  "სახლი":         {icon:"🏠", desc:"A1 – სახლი"},
  "რიცხვები":      {icon:"🔢", desc:"A1 – რიცხვები"},
  "ფერები":        {icon:"🎨", desc:"A1 – ფერები"},
  "საჭმელ-სასმელი":{icon:"🍽️", desc:"A1 – საკვები"},
  "კვირის დღეები": {icon:"📅", desc:"A1 – დღეები"},
  "თვეები":        {icon:"🗓️", desc:"A1 – თვეები"},
  "ზმნები":        {icon:"⚡", desc:"A1–B1 – ზმნები"},
  "ზედსართავები":  {icon:"✨", desc:"A1–A2 – ეპითეტები"},
  "წინდებულები":   {icon:"📍", desc:"A1–A2 – წინდებულები"},
  "ცხოველები":     {icon:"🐾", desc:"A1 – ცხოველები"},
  "სხეულის ნაწილები":{icon:"🫀", desc:"A1 – სხეული"},
  "ტანსაცმელი":    {icon:"👗", desc:"A2 – ტანსაცმელი"},
  "ტრანსპორტი":    {icon:"🚗", desc:"A1 – ტრანსპორტი"},
  "ემოციები":      {icon:"😊", desc:"A2 – გრძნობები"},
  "ბუნება":        {icon:"🌿", desc:"A1 – ბუნება"},
  "ამინდი":        {icon:"🌤️", desc:"A2 – ამინდი"},
  "სამსახური":     {icon:"💼", desc:"A2 – სამსახური"},
  "ტექნოლოგია":    {icon:"💻", desc:"A2 – ტექნო"},
  "ადგილები":      {icon:"📍", desc:"A2 – ადგილები"},
  "განათლება":     {icon:"🎓", desc:"A2 – სკოლა/უნი"},
  "ჯანმრთელობა":   {icon:"🏥", desc:"A2 – ჯანმრთელობა"},
  "ქვეყნები":      {icon:"🌍", desc:"A1 – ქვეყნები"},
  "შოპინგი":       {icon:"🛍️", desc:"A1–A2 – შოპინგი"},
  "დრო":           {icon:"⏰", desc:"A1 – დრო"},
  "B1 ლექსიკა":    {icon:"📗", desc:"B1 – შუა დონე"},
  "B2 ლექსიკა":    {icon:"📘", desc:"B2 – ზედა-შუა"},
  "C1/C2 ლექსიკა": {icon:"📙", desc:"C1/C2 – მოწინავე"},
};

const GRAMMAR_RULES = [
  {
    title:"არტიკლები: der, die, das",
    icon:"📌",
    level:"A1",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">გერმანულ ენაში არსებობს სამი განსაზღვრული არტიკლი: <strong>der</strong> (მამრ.), <strong>die</strong> (მდედ./მრ.რ.), <strong>das</strong> (საშ.). განუსაზღვრელი: <strong>ein/eine/ein</strong>.</p>
      <table class="grammar-table">
        <tr><th>სქესი</th><th>განსაზ.</th><th>განუსაზ.</th><th>მაგალითი</th></tr>
        <tr><td>მამრობითი</td><td>der</td><td>ein</td><td>der Mann</td></tr>
        <tr><td>მდედრობითი</td><td>die</td><td>eine</td><td>die Frau</td></tr>
        <tr><td>საშ.</td><td>das</td><td>ein</td><td>das Kind</td></tr>
        <tr><td>მრ. რ.</td><td>die</td><td>—</td><td>die Männer</td></tr>
      </table>
      <div class="grammar-note">💡 სქესი უნდა ისწავლოთ სიტყვასთან ერთად — არ არსებობს უნივერსალური წესი. თუმცა: -ung, -heit, -keit, -schaft სუფიქსიანი სიტყვები ყოველთვის die.</div>`,
  },
  {
    title:"Kasus: ბრუნვები (Nominativ, Akkusativ, Dativ, Genitiv)",
    icon:"🔄",
    level:"A2",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">გერმანულ ენაში 4 ბრუნვაა. არტიკლი იცვლება ბრუნვის მიხედვით.</p>
      <table class="grammar-table">
        <tr><th>ბრუნვა</th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>die (pl)</th></tr>
        <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Akkusativ</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td>den</td></tr>
        <tr><td>Genitiv</td><td>des</td><td>der</td><td>des</td><td>der</td></tr>
      </table>
      <div class="grammar-example"><div class="de">Der Mann sieht den Hund.</div><div class="ka">კაცი ხედავს ძაღლს. (Mann=Nom, Hund=Akk)</div></div>`,
  },
  {
    title:"Präsens: აწმყო დრო (sein, haben)",
    icon:"⏱️",
    level:"A1",
    body:`
      <table class="grammar-table">
        <tr><th>პირი</th><th>sein (ყოფნა)</th><th>haben (ქონა)</th></tr>
        <tr><td>ich</td><td>bin</td><td>habe</td></tr>
        <tr><td>du</td><td>bist</td><td>hast</td></tr>
        <tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr>
        <tr><td>wir</td><td>sind</td><td>haben</td></tr>
        <tr><td>ihr</td><td>seid</td><td>habt</td></tr>
        <tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr>
      </table>
      <div class="grammar-example"><div class="de">Ich bin Student. / Ich habe ein Buch.</div><div class="ka">მე ვარ სტუდენტი. / მე მაქვს წიგნი.</div></div>`,
  },
  {
    title:"Satzstellung: წინადადების სტრუქტურა (V2)",
    icon:"📐",
    level:"A2",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">გერმანულ მთავარ წინადადებაში ზმნა <strong>ყოველთვის მე-2 პოზიციაშია</strong>.</p>
      <table class="grammar-table">
        <tr><th>პოზ. 1</th><th>ზმნა (V2)</th><th>სუბ.</th><th>დანარჩენი</th></tr>
        <tr><td>Ich</td><td>gehe</td><td>—</td><td>heute nach Hause.</td></tr>
        <tr><td>Heute</td><td>gehe</td><td>ich</td><td>nach Hause.</td></tr>
        <tr><td>Nach Hause</td><td>gehe</td><td>ich</td><td>heute.</td></tr>
      </table>
      <div class="grammar-note">💡 ქვე-წინადადებებში ზმნა ბოლოს მიდის: "Ich weiß, dass er <strong>kommt</strong>."</div>`,
  },
  {
    title:"Modalverben: მოდალური ზმნები",
    icon:"🎯",
    level:"A2",
    body:`
      <table class="grammar-table">
        <tr><th>ზმნა</th><th>მნიშვნელობა</th><th>ich</th><th>du</th><th>er/sie/es</th></tr>
        <tr><td>können</td><td>შეძლება</td><td>kann</td><td>kannst</td><td>kann</td></tr>
        <tr><td>müssen</td><td>სავალდებ.</td><td>muss</td><td>musst</td><td>muss</td></tr>
        <tr><td>wollen</td><td>სურვილი</td><td>will</td><td>willst</td><td>will</td></tr>
        <tr><td>sollen</td><td>მოვალეობა</td><td>soll</td><td>sollst</td><td>soll</td></tr>
        <tr><td>dürfen</td><td>ნებართვა</td><td>darf</td><td>darfst</td><td>darf</td></tr>
        <tr><td>mögen</td><td>მოწონება</td><td>mag</td><td>magst</td><td>mag</td></tr>
      </table>
      <div class="grammar-example"><div class="de">Ich kann Deutsch sprechen.</div><div class="ka">მე შემიძლია გერმანულად ლაპარაკი.</div></div>`,
  },
  {
    title:"Perfekt: ნამდვილი წარსული",
    icon:"⌛",
    level:"A2",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">Perfekt = haben/sein (V2) + Partizip II (ბოლოს). გამოიყენება ზეპირ მეტყველებაში.</p>
      <table class="grammar-table">
        <tr><th>ინფ.</th><th>Partizip II</th><th>დამხ.ზ.</th><th>მაგ.</th></tr>
        <tr><td>machen</td><td>gemacht</td><td>haben</td><td>Ich habe gemacht.</td></tr>
        <tr><td>gehen</td><td>gegangen</td><td>sein</td><td>Ich bin gegangen.</td></tr>
        <tr><td>essen</td><td>gegessen</td><td>haben</td><td>Er hat gegessen.</td></tr>
        <tr><td>fahren</td><td>gefahren</td><td>sein</td><td>Wir sind gefahren.</td></tr>
      </table>
      <div class="grammar-note">💡 „sein"-ით Perfekt: გადაადგილების და მდგომარეობის ცვლილების ზმნები (gehen, kommen, fahren, werden...)</div>`,
  },
  {
    title:"Konjunktiv II: ირეალური პირობა",
    icon:"🌀",
    level:"B1",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">Konjunktiv II გამოიყენება სურვილის, ირეალური პირობის და თავაზიანი თხოვნისთვის.</p>
      <table class="grammar-table">
        <tr><th>პირი</th><th>würde + Inf.</th><th>wäre</th><th>hätte</th></tr>
        <tr><td>ich</td><td>würde gehen</td><td>wäre</td><td>hätte</td></tr>
        <tr><td>du</td><td>würdest gehen</td><td>wärst</td><td>hättest</td></tr>
        <tr><td>er/sie</td><td>würde gehen</td><td>wäre</td><td>hätte</td></tr>
      </table>
      <div class="grammar-example"><div class="de">Wenn ich Zeit hätte, würde ich lernen.</div><div class="ka">რომ დრო მქონდეს, ვისწავლიდი.</div></div>`,
  },
  {
    title:"Adjektivdeklination: ზედსართავის ბრუნება",
    icon:"🎭",
    level:"B1",
    body:`
      <p style="font-size:0.85rem;color:var(--text2);margin:12px 0;line-height:1.7;">ზედსართავი ბრუნება დამოკიდებულია: 1) ბრუნვაზე, 2) სქესზე, 3) რომელი არტიკლია.</p>
      <table class="grammar-table">
        <tr><th></th><th>მამრ. (Nom)</th><th>მდედ. (Nom)</th><th>საშ. (Nom)</th></tr>
        <tr><td>განსაზ.</td><td>der alte Mann</td><td>die alte Frau</td><td>das alte Kind</td></tr>
        <tr><td>განუსაზ.</td><td>ein alter Mann</td><td>eine alte Frau</td><td>ein altes Kind</td></tr>
        <tr><td>არტ. გარ.</td><td>alter Mann</td><td>alte Frau</td><td>altes Kind</td></tr>
      </table>`,
  },
];

const PHONETICS_DATA = [
  {symbol:"ʀ", de:"Rot, Regen", ka:"ყელის 'ღ' ბგერა - არარის მსგავსი"},
  {symbol:"ü [y]", de:"fünf, über, grün", ka:"ქართული 'ი' + მომრგვალებული ტუჩები"},
  {symbol:"ö [ø]", de:"schön, Österreich", ka:"ქართული 'ე' + მომრგვალებული ტუჩები"},
  {symbol:"ä [ɛ]", de:"Männer, Mädchen", ka:"ფართო 'ე' ბგერა"},
  {symbol:"ch [ç]", de:"ich, nicht, Milch", ka:"'ი'-ს შემდეგ: 'ჰ'+ი ბგერა"},
  {symbol:"ch [x]", de:"Bach, nach, Buch", ka:"'ა/ო/უ'-ს შემდეგ: 'ხ' ბგერა"},
  {symbol:"sch [ʃ]", de:"Schule, schön", ka:"ქართული 'შ' ბგერა"},
  {symbol:"sp/st [ʃp/ʃt]", de:"sprechen, Stadt", ka:"სიტყვის თავში: 'შპ'/'შტ'"},
  {symbol:"z [ts]", de:"zehn, Zeit", ka:"ქართული 'ც' ბგერა"},
  {symbol:"w [v]", de:"Wasser, wohnen", ka:"ქართული 'ვ' ბგერა"},
  {symbol:"v [f/v]", de:"Vogel, Vater", ka:"სიტყვ. თავ: 'ფ'; ბოლ: 'ვ'"},
  {symbol:"ei [aɪ]", de:"ein, zwei, weiß", ka:"ქართული 'ეი' დიფთონგი"},
  {symbol:"eu/äu [ɔɪ]", de:"neu, Häuser", ka:"ქართული 'ოი' დიფთონგი"},
  {symbol:"ie [iː]", de:"die, viel, lieben", ka:"გრძელი 'ი' ბგერა"},
  {symbol:"ß [s]", de:"Straße, Fuß", ka:"გრძელი 'ს' ბგერა (=ss)"},
  {symbol:"ng [ŋ]", de:"singen, lang", ka:"ინგლ. 'ng'-ს მსგავსი"},
];

const LESSONS_DATA = [
  {num:1,title:"გამარჯობა და გამოთხოვება",meta:"A1 · 10 სიტყვა · 15 წთ",level:"A1"},
  {num:2,title:"ოჯახი და ახლობლები",meta:"A1 · 12 სიტყვა · 20 წთ",level:"A1"},
  {num:3,title:"სახლი და ოთახები",meta:"A1 · 10 სიტყვა · 20 წთ",level:"A1"},
  {num:4,title:"საჭმელი და სასმელი",meta:"A1 · 15 სიტყვა · 25 წთ",level:"A1"},
  {num:5,title:"ფერები და ზომები",meta:"A1 · 12 სიტყვა · 20 წთ",level:"A1"},
  {num:6,title:"ქალაქი და ტრანსპორტი",meta:"A2 · 14 სიტყვა · 25 წთ",level:"A2"},
  {num:7,title:"სამსახური და პროფესიები",meta:"A2 · 16 სიტყვა · 30 წთ",level:"A2"},
  {num:8,title:"ჯანმრთელობა და ექიმი",meta:"A2 · 12 სიტყვა · 25 წთ",level:"A2"},
  {num:9,title:"ამინდი და სეზონები",meta:"A2 · 10 სიტყვა · 20 წთ",level:"A2"},
  {num:10,title:"მოდალური ზმნები",meta:"B1 · 8 ზმნა · 35 წთ",level:"B1"},
  {num:11,title:"Perfekt წარსული",meta:"B1 · გრამ. · 40 წთ",level:"B1"},
  {num:12,title:"ბრუნვები სიღრმეში",meta:"B1 · გრამ. · 45 წთ",level:"B1"},
];

// ═══════════════════════════════════════════
// STATE & STORAGE
// ═══════════════════════════════════════════
let state = {
  name: "",
  xp: 0,
  streak: 0,
  lastVisit: "",
  learnedWords: [],
  favoriteWords: [],
  testsCompleted: 0,
  lastPage: "home",
  theme: "default",
  flashIndex: 0,
  flashCategory: "all",
  vocabFilter: "all",
  quizScore: 0,
  quizIndex: 0,
  quizType: "de-ka",
  quizAnswered: false,
  currentQuizSet: [],
};

function saveState() {
  localStorage.setItem("dg_state", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("dg_state");
  if (saved) {
    try { state = {...state, ...JSON.parse(saved)}; } catch(e) {}
  }
}

function addXP(amount) {
  state.xp += amount;
  saveState();
  updateUI();
  showToast(`+${amount} XP მიღებული! ⚡`);
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
loadState();
applyTheme(state.theme || "default");

window.addEventListener("DOMContentLoaded", () => {
  if (!state.name) {
    document.getElementById("welcome-overlay").style.display = "flex";
  } else {
    document.getElementById("welcome-overlay").style.display = "none";
    initApp();
  }
  document.getElementById("name-input").addEventListener("keydown", e => {
    if (e.key === "Enter") startApp();
  });
});

function startApp() {
  const val = document.getElementById("name-input").value.trim();
  if (!val) { document.getElementById("name-input").style.borderColor="#f87171"; return; }
  state.name = val;
  updateStreak();
  saveState();
  document.getElementById("welcome-overlay").style.display = "none";
  initApp();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = state.lastVisit === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastVisit = today;
  }
}

function initApp() {
  buildCategories();
  buildSettings();
  renderVocab();
  renderGrammar();
  renderFlashcard();
  renderQuiz();
  renderTests();
  renderPhonetics();
  renderQuickLessons();
  updateUI();
  navigate(state.lastPage || "home");
}

// ═══════════════════════════════════════════
// UI UPDATE
// ═══════════════════════════════════════════
function updateUI() {
  const name = state.name || "სტუდენტი";
  document.getElementById("header-greeting").textContent = `გამარჯობა, ${name}!`;
  document.getElementById("header-xp").textContent = `${state.xp} XP`;
  document.getElementById("streak-display").textContent = `🔥 ${state.streak} დღე`;
  document.getElementById("home-title").textContent = `გამარჯობა, ${name}! 👋`;
  document.getElementById("stat-words").textContent = state.learnedWords.length;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-tests").textContent = state.testsCompleted;
  document.getElementById("stat-streak").textContent = state.streak;
  // RS profile
  document.getElementById("rs-avatar").textContent = name[0].toUpperCase();
  document.getElementById("rs-name").textContent = name;
  const level = getLevel();
  document.getElementById("rs-level").textContent = `${level.label}`;
  document.getElementById("rs-xp-cur").textContent = `${state.xp} XP`;
  document.getElementById("rs-xp-next").textContent = `${level.next} XP`;
  const pct = Math.min(100, ((state.xp - level.from) / (level.next - level.from)) * 100);
  document.getElementById("rs-xp-bar").style.width = pct + "%";
  // name setting
  document.getElementById("name-setting").value = state.name;
}

function getLevel() {
  const levels = [
    {from:0,next:100,label:"დონე 1 · Anfänger"},
    {from:100,next:300,label:"დონე 2 · Grundkenntnisse"},
    {from:300,next:600,label:"დონე 3 · Elementar (A1)"},
    {from:600,next:1000,label:"დონე 4 · Grundstufe (A2)"},
    {from:1000,next:1800,label:"დონე 5 · Mittelstufe (B1)"},
    {from:1800,next:3000,label:"დონე 6 · Oberstufe (B2)"},
    {from:3000,next:5000,label:"დონე 7 · Fortgeschritten (C1)"},
    {from:5000,next:9999,label:"დონე 8 · Meister (C2)"},
  ];
  return levels.find(l => state.xp < l.next) || levels[levels.length-1];
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".rs-nav-item").forEach(i => i.classList.remove("active"));
  const pg = document.getElementById("page-"+page);
  if (pg) pg.classList.add("active");
  const nav = document.querySelector(`[data-page="${page}"]`);
  if (nav) nav.classList.add("active");
  state.lastPage = page;
  saveState();
  closeAllSidebars();
  if (page === "flash") renderFlashcard();
  if (page === "quiz") renderQuiz();
  if (page === "vocab") renderVocab();
}

// ═══════════════════════════════════════════
// LEFT SIDEBAR: CATEGORIES
// ═══════════════════════════════════════════
function buildCategories() {
  const cats = {};
  VOCABULARY.forEach(w => {
    if (!cats[w.cat]) cats[w.cat] = [];
    cats[w.cat].push(w);
  });
  const el = document.getElementById("cat-list");
  el.innerHTML = "";
  for (const [cat, words] of Object.entries(cats)) {
    const meta = CATEGORIES_META[cat] || {icon:"📂", desc:""};
    const div = document.createElement("div");
    div.className = "cat-group";
    div.dataset.cat = cat.toLowerCase();
    div.innerHTML = `
      <div class="cat-group-header" onclick="toggleCat(this)">
        <div class="cat-group-title"><span class="icon">${meta.icon}</span>${cat}</div>
        <span class="cat-arrow">▶</span>
      </div>
      <div class="cat-items">
        <div class="cat-item" onclick="filterByCategory('${cat}')">
          <span>ყველა სიტყვა</span>
          <span class="cat-item-level">${words.length}</span>
        </div>
        ${[...new Set(words.map(w=>w.level))].map(lv=>`
          <div class="cat-item" onclick="filterByCategoryLevel('${cat}','${lv}')">
            <span>${lv}</span>
            <span class="cat-item-level">${words.filter(w=>w.level===lv).length}</span>
          </div>
        `).join("")}
      </div>`;
    el.appendChild(div);
  }
}

function toggleCat(header) {
  header.parentElement.classList.toggle("open");
}

function filterCategories(val) {
  document.querySelectorAll(".cat-group").forEach(g => {
    g.style.display = g.dataset.cat.includes(val.toLowerCase()) ? "" : "none";
  });
}

function filterByCategory(cat) {
  state.vocabFilter = cat;
  navigate("vocab");
  setTimeout(() => {
    renderVocab();
    document.querySelectorAll("#vocab-filters .vfb-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.filter === cat);
    });
  }, 100);
}

function filterByCategoryLevel(cat, level) {
  state.vocabFilter = level;
  navigate("vocab");
  setTimeout(renderVocab, 100);
}

// ═══════════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════════
const LEVELS = ["all","A1","A2","B1","B2","C1","C2"];

function renderVocab() {
  const filters = document.getElementById("vocab-filters");
  if (!filters.children.length) {
    filters.innerHTML = LEVELS.map(l => `<button class="vfb-btn ${l==="all"?"active":""}" data-filter="${l}" onclick="setVocabFilter('${l}')">${l==="all"?"ყველა":l}</button>`).join("")
      + `<button class="vfb-btn" data-filter="fav" onclick="setVocabFilter('fav')">❤️ ფავ.</button>`;
  }
  document.querySelectorAll("#vocab-filters .vfb-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === state.vocabFilter);
  });
  const q = (document.getElementById("vocab-search")?.value || "").toLowerCase();
  let words = VOCABULARY.filter(w => {
    if (state.vocabFilter === "fav") return state.favoriteWords.includes(w.de);
    if (state.vocabFilter !== "all" && !LEVELS.slice(1).includes(state.vocabFilter)) {
      return w.cat === state.vocabFilter;
    }
    return state.vocabFilter === "all" || w.level === state.vocabFilter;
  }).filter(w => !q || w.de.toLowerCase().includes(q) || w.ka.toLowerCase().includes(q));

  const grid = document.getElementById("vocab-grid");
  grid.innerHTML = words.slice(0,200).map(w => `
    <div class="vocab-card" onclick="learnWord('${w.de}')">
      <div class="vocab-de">${w.article ? `<span class="vocab-article">${w.article}</span> ` : ""}${w.de}</div>
      <div class="vocab-phonetic">${w.phonetic}</div>
      <div class="vocab-ka">${w.ka}</div>
      <span class="vocab-fav ${state.favoriteWords.includes(w.de)?"active":""}" onclick="toggleFav(event,'${w.de}')">❤️</span>
    </div>
  `).join("") + (words.length > 200 ? `<div style="grid-column:1/-1;text-align:center;font-size:0.8rem;color:var(--text3);padding:12px;">+ ${words.length-200} სხვა სიტყვა. გამოიყენეთ ძებნა.</div>` : "");
}

function setVocabFilter(f) {
  state.vocabFilter = f;
  saveState();
  renderVocab();
}

function toggleFav(e, de) {
  e.stopPropagation();
  const i = state.favoriteWords.indexOf(de);
  if (i > -1) state.favoriteWords.splice(i, 1);
  else { state.favoriteWords.push(de); addXP(2); }
  saveState();
  renderVocab();
}

function learnWord(de) {
  if (!state.learnedWords.includes(de)) {
    state.learnedWords.push(de);
    addXP(5);
    showToast("სიტყვა ნასწავლად მოინიშნა! +5 XP");
  }
}

// ═══════════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════════
function renderGrammar() {
  const el = document.getElementById("grammar-list");
  el.innerHTML = GRAMMAR_RULES.map((r,i) => `
    <div class="grammar-rule" id="gr-${i}">
      <div class="grammar-rule-header" onclick="toggleGrammar(${i})">
        <div class="grammar-rule-title">
          <span>${r.icon}</span>${r.title}
          <span class="lesson-badge badge-${r.level.toLowerCase()}">${r.level}</span>
        </div>
        <span class="grammar-arrow">▼</span>
      </div>
      <div class="grammar-rule-body">${r.body}</div>
    </div>`).join("");
}

function toggleGrammar(i) {
  const el = document.getElementById("gr-"+i);
  const wasOpen = el.classList.contains("open");
  el.classList.toggle("open");
  if (!wasOpen) addXP(3);
}

// ═══════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════
let flashWords = [];
let flashIdx = 0;
let isFlipped = false;

function getFlashWords() {
  if (state.flashCategory === "all") return [...VOCABULARY];
  if (LEVELS.slice(1).includes(state.flashCategory)) return VOCABULARY.filter(w=>w.level===state.flashCategory);
  return VOCABULARY.filter(w=>w.cat===state.flashCategory);
}

function renderFlashcard() {
  const filterEl = document.getElementById("flash-filters");
  if (!filterEl.children.length) {
    filterEl.innerHTML = [["all","ყველა"],...LEVELS.slice(1).map(l=>[l,l])].map(([v,l]) =>
      `<button class="vfb-btn ${v==="all"?"active":""}" data-ff="${v}" onclick="setFlashFilter('${v}')">${l}</button>`
    ).join("");
  }
  flashWords = getFlashWords();
  if (flashIdx >= flashWords.length) flashIdx = 0;
  isFlipped = false;
  const area = document.getElementById("flashcard-area");
  const w = flashWords[flashIdx];
  const pct = flashWords.length ? ((flashIdx / flashWords.length) * 100) : 0;
  area.innerHTML = `
    <div class="flashcard-progress-bar"><div class="flashcard-progress-fill" style="width:${pct}%"></div></div>
    <div class="fc-counter">${flashIdx+1} / ${flashWords.length}</div>
    <div class="flashcard-scene" id="fc-scene" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <div class="fc-category">${w.cat}</div>
          <div class="fc-de">${w.article?w.article+" ":""}${w.de}</div>
          <div class="fc-phonetic">${w.phonetic}</div>
          <div class="fc-hint">შეეხეთ გადასაბრუნებლად</div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="fc-category">${w.level}</div>
          <div class="fc-ka">${w.ka}</div>
          <div class="fc-phonetic">${w.phonetic}</div>
          ${w.article?`<div class="fc-example">სტატია: <strong>${w.article}</strong></div>`:""}
        </div>
      </div>
    </div>
    <div class="flashcard-actions">
      <button class="fc-btn hard" onclick="nextFlash('hard')">😓 რთული</button>
      <button class="fc-btn ok" onclick="nextFlash('ok')">😐 ასე-ისე</button>
      <button class="fc-btn easy" onclick="nextFlash('easy')">😊 ადვილი</button>
    </div>`;
}

function flipCard() {
  document.getElementById("fc-scene").classList.toggle("flipped");
  isFlipped = !isFlipped;
}

function nextFlash(rating) {
  const xpMap = {hard:2, ok:5, easy:10};
  addXP(xpMap[rating]);
  const w = flashWords[flashIdx];
  if (rating !== "hard" && !state.learnedWords.includes(w.de)) state.learnedWords.push(w.de);
  if (rating === "easy") state.lastReview = w.de;
  flashIdx = (flashIdx + 1) % flashWords.length;
  saveState();
  renderFlashcard();
}

function setFlashFilter(v) {
  state.flashCategory = v;
  flashIdx = 0;
  document.querySelectorAll("[data-ff]").forEach(b => b.classList.toggle("active", b.dataset.ff===v));
  renderFlashcard();
}

// ═══════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════
let quizSet = [];
let quizIdx = 0;
let quizScore = 0;
let quizAnswered = false;

function getQuizSet() {
  const shuffled = [...VOCABULARY].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 15);
}

function renderQuiz() {
  const typeSel = document.getElementById("quiz-types");
  if (!typeSel.children.length) {
    typeSel.innerHTML = [
      ["de-ka","DE → KA"],["ka-de","KA → DE"],["article","სტატია"]
    ].map(([v,l]) =>
      `<button class="qts-btn ${v==="de-ka"?"active":""}" data-qt="${v}" onclick="setQuizType('${v}')">${l}</button>`
    ).join("");
  }
  quizSet = getQuizSet();
  quizIdx = 0;
  quizScore = 0;
  quizAnswered = false;
  renderQuizQuestion();
}

function setQuizType(t) {
  document.querySelectorAll("[data-qt]").forEach(b => b.classList.toggle("active", b.dataset.qt===t));
  state.quizType = t;
  renderQuiz();
}

function renderQuizQuestion() {
  const area = document.getElementById("quiz-area");
  if (quizIdx >= quizSet.length) {
    const pct = Math.round((quizScore / quizSet.length) * 100);
    const emoji = pct>=80?"🎉":pct>=50?"👍":"📚";
    area.innerHTML = `<div class="quiz-card"><div class="quiz-result">
      <div class="quiz-result-emoji">${emoji}</div>
      <div class="quiz-result-score">${pct}%</div>
      <div class="quiz-result-msg">${quizScore}/${quizSet.length} სწორი პასუხი</div>
      <button class="quiz-restart" onclick="renderQuiz()">🔁 ხელახლა</button>
    </div></div>`;
    state.testsCompleted++;
    addXP(quizScore * 8);
    saveState();
    return;
  }
  const w = quizSet[quizIdx];
  const pct = (quizIdx / quizSet.length) * 100;
  let question, correctAnswer, options;
  const qt = state.quizType || "de-ka";

  if (qt === "de-ka") {
    question = w.article ? `${w.article} ${w.de}` : w.de;
    correctAnswer = w.ka;
    options = shuffle([w.ka, ...getWrongAnswers(w,"ka")]);
  } else if (qt === "ka-de") {
    question = w.ka;
    correctAnswer = w.de;
    options = shuffle([w.de, ...getWrongAnswers(w,"de")]);
  } else {
    question = w.de;
    correctAnswer = w.article || "—";
    const arts = ["der","die","das","—"];
    options = arts;
  }

  area.innerHTML = `<div class="quiz-card">
    <div class="quiz-progress">
      <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
      <div class="quiz-prog-text">${quizIdx+1}/${quizSet.length}</div>
    </div>
    <div class="quiz-question">${question}</div>
    <div class="quiz-hint">${qt==="de-ka"?"გამოთქმა: "+w.phonetic:qt==="article"?"სწორი სტატია?":"გერმანულად?"}</div>
    <div class="quiz-options">${options.map(o=>
      `<button class="quiz-opt" onclick="answerQuiz(this,'${o}','${correctAnswer}')">${o}</button>`
    ).join("")}</div>
    <div class="quiz-feedback" id="quiz-fb"></div>
    <button class="quiz-next-btn" id="quiz-next" onclick="nextQuiz()">შემდეგი →</button>
  </div>`;
}

function getWrongAnswers(word, field) {
  const pool = VOCABULARY.filter(w => w.de !== word.de && w[field] !== word[field]);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  return shuffled.map(w => w[field]);
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function answerQuiz(btn, answer, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  const isCorrect = answer === correct;
  document.querySelectorAll(".quiz-opt").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
    else if (b === btn && !isCorrect) b.classList.add("wrong");
  });
  const fb = document.getElementById("quiz-fb");
  fb.className = "quiz-feedback show " + (isCorrect?"ok":"bad");
  fb.textContent = isCorrect ? "✅ სწორია! +" + 8 + " XP" : `❌ სწორი: ${correct}`;
  if (isCorrect) quizScore++;
  document.getElementById("quiz-next").classList.add("show");
}

function nextQuiz() {
  quizIdx++;
  quizAnswered = false;
  renderQuizQuestion();
}

// ═══════════════════════════════════════════
// TESTS
// ═══════════════════════════════════════════
function renderTests() {
  const tests = [
    {icon:"📝",name:"A1 ტესტი",desc:"გრამატიკა, ლექსიკა, კითხვა. 30 კითხვა.",level:"A1"},
    {icon:"📋",name:"A2 ტესტი",desc:"ყოველდღიური სიტუაციები. 35 კითხვა.",level:"A2"},
    {icon:"📗",name:"B1 ტესტი",desc:"Telc/Goethe B1 ფორმატი. 40 კითხვა.",level:"B1"},
    {icon:"📘",name:"B2 ტესტი",desc:"Goethe B2 სტანდარტი. 45 კითხვა.",level:"B2"},
    {icon:"📙",name:"C1 ტესტი",desc:"მოწინავე დონე. 50 კითხვა.",level:"C1"},
    {icon:"🧩",name:"შერეული ტესტი",desc:"ყველა დონე ერთად. 25 კითხვა.",level:"A1-C2"},
    {icon:"🔊",name:"ფონეტიკის ტესტი",desc:"გამოთქმა და IPA. 20 კითხვა.",level:"A1"},
    {icon:"🗓️",name:"სიტყვათა მარაგი",desc:"კვირის სიტყვები. 20 კითხვა.",level:"A1-B1"},
  ];
  document.getElementById("test-list").innerHTML = tests.map(t => `
    <div class="test-item" onclick="startTest('${t.name}')">
      <div class="test-icon">${t.icon}</div>
      <div class="test-name">${t.name}</div>
      <div class="test-desc">${t.desc}</div>
      <div class="test-meta"><span class="lesson-badge badge-${t.level.split("-")[0].toLowerCase()}">${t.level}</span></div>
    </div>`).join("");
}

function startTest(name) {
  state.quizType = "de-ka";
  navigate("quiz");
  showToast(`"${name}" დაიწყო! 📝`);
  setTimeout(() => { quizSet = getQuizSet(); quizIdx = 0; quizScore = 0; quizAnswered = false; renderQuizQuestion(); }, 300);
}

// ═══════════════════════════════════════════
// PHONETICS
// ═══════════════════════════════════════════
function renderPhonetics() {
  const el = document.getElementById("phonetics-content");
  el.innerHTML = `
    <div class="section-card">
      <div class="section-card-title">🔤 გერმანული სპეციფიური ბგერები</div>
      <p style="font-size:0.82rem;color:var(--text2);margin-bottom:16px;line-height:1.7;">გერმანულ ენაში არსებობს ქართულ ენაში უცნობი ბგერები. ქვემოთ მოცემულია ყველაზე მნიშვნელოვანი.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;">
        ${PHONETICS_DATA.map(p=>`
          <div class="phonetic-card">
            <div class="phonetic-symbol">${p.symbol}</div>
            <div class="phonetic-info">
              <div class="de">${p.de}</div>
              <div class="ka">${p.ka}</div>
            </div>
          </div>`).join("")}
      </div>
    </div>
    <div class="section-card">
      <div class="section-card-title">📏 გრძელი vs მოკლე ხმოვნები</div>
      <table class="grammar-table">
        <tr><th>ხმოვანი</th><th>გრძელი</th><th>მოკლე</th><th>მაგ.</th></tr>
        <tr><td>a</td><td>Vater [aː]</td><td>Mann [a]</td><td>კონტექსტი განსაზ.</td></tr>
        <tr><td>e</td><td>Weg [eː]</td><td>Bett [ɛ]</td><td>—</td></tr>
        <tr><td>i</td><td>ihm [iː]</td><td>bin [ɪ]</td><td>—</td></tr>
        <tr><td>o</td><td>Ohr [oː]</td><td>Gott [ɔ]</td><td>—</td></tr>
        <tr><td>u</td><td>gut [uː]</td><td>und [ʊ]</td><td>—</td></tr>
      </table>
    </div>`;
}

// ═══════════════════════════════════════════
// QUICK LESSONS
// ═══════════════════════════════════════════
function renderQuickLessons() {
  const el = document.getElementById("quick-lessons");
  el.innerHTML = LESSONS_DATA.slice(0, 6).map(l => `
    <div class="lesson-item" onclick="startLesson(${l.num})">
      <div class="lesson-num">${l.num}</div>
      <div class="lesson-info">
        <div class="lesson-title">${l.title}</div>
        <div class="lesson-meta">${l.meta}</div>
      </div>
      <span class="lesson-badge badge-${l.level.toLowerCase()}">${l.level}</span>
    </div>`).join("");
}

function startLesson(num) {
  state.quizType = "de-ka";
  navigate("flash");
  showToast(`გაკვეთილი #${num} დაიწყო! 🚀`);
}

// ═══════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════
const THEMES = [
  {id:"default", name:"ლურჯი", color:"#2563eb", bg:"#f8fafc"},
  {id:"dark",    name:"ბნელი",  color:"#334155", bg:"#0d1117"},
  {id:"forest",  name:"მწვანე", color:"#16a34a", bg:"#f0fdf4"},
  {id:"amber",   name:"ქარვა", color:"#d97706", bg:"#fffbeb"},
  {id:"rose",    name:"ვარდ.",  color:"#e11d48", bg:"#fff1f2"},
];

function buildSettings() {
  const grid = document.getElementById("theme-grid");
  grid.innerHTML = THEMES.map(t => `
    <div class="theme-opt ${t.id===state.theme?"active":""}" onclick="setTheme('${t.id}')" data-tid="${t.id}">
      <div class="swatch" style="background:${t.color};"></div>
      <div class="name">${t.name}</div>
    </div>`).join("");
}

function setTheme(t) {
  state.theme = t;
  saveState();
  applyTheme(t);
  document.querySelectorAll("[data-tid]").forEach(el => el.classList.toggle("active", el.dataset.tid===t));
  showToast("თემა შეიცვალა!");
}

function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
}

function saveName() {
  const val = document.getElementById("name-setting").value.trim();
  if (!val) return;
  state.name = val;
  saveState();
  updateUI();
  showToast("სახელი შენახულია! ✅");
}

function clearStorage() {
  if (!confirm("ნამდვილად გსურთ ყველა მონაცემის წაშლა?")) return;
  localStorage.clear();
  location.reload();
}

function exportData() {
  const data = JSON.stringify({...state, exportDate: new Date().toISOString()}, null, 2);
  const blob = new Blob([data], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "deutschgeo-progress.json";
  a.click();
  showToast("ექსპორტი დასრულდა! 📤");
}

// ═══════════════════════════════════════════
// MOBILE SIDEBARS
// ═══════════════════════════════════════════
function toggleLeft() {
  document.getElementById("left-sidebar").classList.toggle("open");
  document.getElementById("right-sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.toggle("show", document.getElementById("left-sidebar").classList.contains("open"));
}

function toggleRight() {
  document.getElementById("right-sidebar").classList.toggle("open");
  document.getElementById("left-sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.toggle("show", document.getElementById("right-sidebar").classList.contains("open"));
}

function closeAllSidebars() {
  document.getElementById("left-sidebar").classList.remove("open");
  document.getElementById("right-sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("show");
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}


// ═══════════════════════════════════════════
// ENHANCEMENTS & FEATURE LAYER
// ═══════════════════════════════════════════
const baseUpdateUI = updateUI;
const APP_VERSION = "2.0.0";
const VOCABS_PER_PAGE = 20;

const DAILY_SENTENCES = [
  {de:"Guten Morgen!", ka:"დილა მშვიდობისა!"},
  {de:"Ich lerne heute Deutsch.", ka:"დღეს გერმანულს ვსწავლობ."},
  {de:"Wiederholung macht stark.", ka:"გამეორება აძლიერებს მეხსიერებას."},
  {de:"Kannst du das bitte wiederholen?", ka:"შეგიძლია ეს კიდევ ერთხელ გაიმეორო?"},
  {de:"Heute ist ein guter Lerntag.", ka:"დღეს კარგი სასწავლო დღეა."},
  {de:"Ich verstehe ein bisschen Deutsch.", ka:"ცოტა გერმანული მესმის."},
  {de:"Übung macht den Meister.", ka:"ვარჯიში ოსტატს ქმნის."},
];

const ACHIEVEMENT_DEFS = [
  {id:"first10", icon:"⭐", title:"პირველი 10 სიტყვა", desc:"დაამახსოვრე 10 სიტყვა"},
  {id:"first25", icon:"🌟", title:"25 სიტყვა", desc:"დაამახსოვრე 25 სიტყვა"},
  {id:"streak7", icon:"🔥", title:"7-დღიანი სერია", desc:"მიაღწიე 7 დღიან სერიას"},
  {id:"xp100", icon:"⚡", title:"100 XP", desc:"მიაღწიე 100 XP-ს"},
  {id:"xp500", icon:"🏅", title:"500 XP", desc:"მიაღწიე 500 XP-ს"},
  {id:"flash30", icon:"🔄", title:"30 გამეორება", desc:"გაიარე 30 flashcard"},
];

function normalizeState() {
  state.wordProgress = state.wordProgress || {};
  state.dailyXpHistory = state.dailyXpHistory || {};
  state.unlockedAchievements = Array.isArray(state.unlockedAchievements) ? state.unlockedAchievements : [];
  state.vocabPage = state.vocabPage || 1;
  state.studyMode = !!state.studyMode;
  state.flashCategory = state.flashCategory || "study";
  state.learnedWords = Array.isArray(state.learnedWords) ? state.learnedWords : [];
  state.favoriteWords = Array.isArray(state.favoriteWords) ? state.favoriteWords : [];
  state.lastPage = state.lastPage || "home";
}

function todayKey(offset = 0) {
  const d = new Date(Date.now() + offset * 86400000);
  return d.toISOString().slice(0, 10);
}

function ensureWordProgress(de) {
  if (!state.wordProgress[de]) {
    state.wordProgress[de] = {
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0,
      due: Date.now(),
      learned: false,
      lapses: 0,
      lastReviewed: null
    };
  }
  return state.wordProgress[de];
}

function syncLegacyLearnedWords() {
  state.learnedWords.forEach(de => {
    const p = ensureWordProgress(de);
    p.learned = true;
    p.repetitions = Math.max(p.repetitions, 3);
  });
  Object.entries(state.wordProgress).forEach(([de, p]) => {
    if (p.learned && !state.learnedWords.includes(de)) state.learnedWords.push(de);
  });
  state.learnedWords = Array.from(new Set(state.learnedWords));
}

function enrichVocabulary() {
  VOCABULARY.forEach(word => {
    if (!word.example || !word.example_translation) {
      const generated = generateExample(word);
      word.example = word.example || generated.de;
      word.example_translation = word.example_translation || generated.ka;
    }
  });
}

function generateExample(word) {
  if (word.cat === "მისალმება") return {de: `${word.de}!`, ka: `${word.ka}!`};
  if (word.cat === "რიცხვები") return {de: `Ich zähle bis ${word.de}.`, ka: `მე ვითვლი ${word.ka}-მდე.`};
  if (word.article === "der" || word.article === "die" || word.article === "das") {
    return {de: `Das ist ${word.de}.`, ka: `ეს არის ${word.ka}.`};
  }
  return {de: `Ich lerne das Wort ${word.de}.`, ka: `მე ვსწავლობ სიტყვას ${word.ka}.`};
}

function speakWord(text) {
  if (!("speechSynthesis" in window)) {
    showToast("აუდიო არ არის მხარდაჭერილი");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  utter.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function getDailySentence() {
  const idx = Math.abs(new Date().getFullYear() + new Date().getMonth() * 31 + new Date().getDate()) % DAILY_SENTENCES.length;
  return DAILY_SENTENCES[idx];
}

function getWeeklyXp() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const key = todayKey(-i);
    days.push({ key, value: Number(state.dailyXpHistory[key] || 0) });
  }
  return days;
}

function recordDailyXP(amount) {
  const key = todayKey();
  state.dailyXpHistory[key] = Number(state.dailyXpHistory[key] || 0) + amount;
}

function computeAchievements() {
  const learnedCount = state.learnedWords.length;
  const practiceCount = Object.values(state.wordProgress || {}).filter(p => p.repetitions > 0).length;
  const conditions = {
    first10: learnedCount >= 10,
    first25: learnedCount >= 25,
    streak7: (state.streak || 0) >= 7,
    xp100: (state.xp || 0) >= 100,
    xp500: (state.xp || 0) >= 500,
    flash30: practiceCount >= 30,
  };
  const newlyUnlocked = [];
  for (const def of ACHIEVEMENT_DEFS) {
    if (conditions[def.id] && !state.unlockedAchievements.includes(def.id)) {
      state.unlockedAchievements.push(def.id);
      newlyUnlocked.push(def);
    }
  }
  return newlyUnlocked;
}

function updateAchievements() {
  const newlyUnlocked = computeAchievements();
  if (newlyUnlocked.length) {
    newlyUnlocked.forEach(a => showToast(`მიღწევა გახსნილია: ${a.title} 🏆`));
    saveState();
  }
  renderAchievements();
}

function renderDailySentence() {
  const el = document.getElementById("daily-sentence");
  if (!el) return;
  const s = getDailySentence();
  el.innerHTML = `
    <div class="daily-sentence">
      <div class="de">${s.de}</div>
      <div class="ka">${s.ka}</div>
      <div class="daily-sentence-actions">
        <button class="small-btn" onclick="speakWord('${s.de.replace(/'/g, "\\'")}')">🔊 მოსმენა</button>
      </div>
    </div>`;
}

function renderWeeklyChart() {
  const el = document.getElementById("weekly-chart");
  if (!el) return;
  const data = getWeeklyXp();
  const max = Math.max(1, ...data.map(d => d.value));
  el.innerHTML = data.map(d => {
    const pct = Math.max(6, Math.round((d.value / max) * 100));
    const day = new Date(d.key + "T00:00:00").toLocaleDateString("en-US", { weekday: "short" });
    return `
      <div class="chart-day">
        <div class="chart-bar-wrap" title="${d.key}: ${d.value} XP">
          <div class="chart-bar" style="height:${pct}%"></div>
        </div>
        <div class="chart-value">${d.value}</div>
        <div class="chart-label">${day}</div>
      </div>`;
  }).join("");
}

function renderAchievements() {
  const el = document.getElementById("achievements-grid");
  if (!el) return;
  const unlocked = new Set(state.unlockedAchievements || []);
  el.innerHTML = ACHIEVEMENT_DEFS.map(a => `
    <div class="achievement ${unlocked.has(a.id) ? "unlocked" : ""}">
      <div class="icon">${a.icon}</div>
      <div class="meta">
        <div class="title">${a.title}</div>
        <div class="desc">${a.desc}</div>
        <div class="status">${unlocked.has(a.id) ? "გახსნილია" : "ჩაკეტილი"}</div>
      </div>
    </div>
  `).join("");
}

function updatePracticeStats() {
  const startBtn = document.getElementById("start-study-btn");
  if (startBtn) {
    const due = getEligiblePracticeWords().length;
    startBtn.textContent = state.learnedWords.length ? `სწავლის დაწყება (${due} ბარათი)` : "სწავლის დაწყება";
  }
}

function getEligiblePracticeWords() {
  const now = Date.now();
  return VOCABULARY.filter(word => {
    const p = ensureWordProgress(word.de);
    return !p.learned || (p.due || 0) <= now;
  }).sort((a, b) => {
    const pa = ensureWordProgress(a.de);
    const pb = ensureWordProgress(b.de);
    if (pa.learned !== pb.learned) return pa.learned ? 1 : -1;
    return (pa.due || 0) - (pb.due || 0) || pa.repetitions - pb.repetitions;
  });
}

function getStudyWords() {
  return getEligiblePracticeWords();
}

function startStudy() {
  state.flashCategory = "study";
  state.studyMode = true;
  state.vocabPage = 1;
  saveState();
  navigate("flash");
  renderFlashcard();
  showToast("სწავლა დაიწყო 🎯");
}

function scheduleReview(word, rating) {
  const p = ensureWordProgress(word.de);
  const now = Date.now();
  let ef = p.easeFactor || 2.5;
  let interval = p.interval || 0;
  let reps = p.repetitions || 0;
  let learned = !!p.learned;

  if (rating === "hard") {
    ef = Math.max(1.3, ef - 0.2);
    reps = Math.max(0, reps - 1);
    interval = Math.max(1, Math.round((interval || 1) * 0.5));
    p.lapses += 1;
    learned = false;
  } else {
    if (rating === "ok") ef = Math.max(1.3, ef - 0.05);
    if (rating === "easy") ef = Math.min(3.0, ef + 0.15);
    reps += 1;
    interval = reps === 1 ? 1 : reps === 2 ? 3 : Math.max(7, Math.round((interval || 1) * ef));
    if (reps >= 3) learned = true;
  }

  p.easeFactor = Number(ef.toFixed(2));
  p.interval = interval;
  p.repetitions = reps;
  p.due = now + interval * 86400000;
  p.learned = learned;
  p.lastReviewed = new Date().toISOString();
  state.wordProgress[word.de] = p;

  if (learned && !state.learnedWords.includes(word.de)) state.learnedWords.push(word.de);
}

function addXP(amount) {
  state.xp += amount;
  recordDailyXP(amount);
  saveState();
  updateUI();
  showToast(`+${amount} XP მიღებული! ⚡`);
  updateAchievements();
}

function updateUI() {
  baseUpdateUI();
  renderDailySentence();
  renderWeeklyChart();
  renderAchievements();
  updatePracticeStats();
}

function initApp() {
  normalizeState();
  enrichVocabulary();
  syncLegacyLearnedWords();
  buildCategories();
  buildSettings();
  renderVocab();
  renderGrammar();
  renderFlashcard();
  renderQuiz();
  renderTests();
  renderPhonetics();
  renderQuickLessons();
  updateUI();
  updateAchievements();
  navigate(state.lastPage || "home");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  setupKeyboardShortcuts();
}

function saveName() {
  const val = document.getElementById("name-setting").value.trim();
  if (!val) return;
  state.name = val;
  saveState();
  updateUI();
  showToast("სახელი შენახულია! ✅");
}

function exportData() {
  const data = {
    version: APP_VERSION,
    exportDate: new Date().toISOString(),
    state,
    dataSchema: {
      vocabularyCount: VOCABULARY.length,
      lessonsCount: LESSONS_DATA.length
    }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "deutschgeo-progress.json";
  a.click();
  showToast("ექსპორტი დასრულდა! 📤");
}

function importProgress(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result || "{}"));
      if (imported.state) state = { ...state, ...imported.state };
      else state = { ...state, ...imported };
      normalizeState();
      syncLegacyLearnedWords();
      saveState();
      updateUI();
      renderVocab();
      renderFlashcard();
      renderQuiz();
      showToast("პროგრესი იმპორტირებულია ✅");
      event.target.value = "";
    } catch (e) {
      showToast("იმპორტი ვერ შესრულდა");
    }
  };
  reader.readAsText(file);
}

function learnWord(de) {
  if (!state.learnedWords.includes(de)) {
    const p = ensureWordProgress(de);
    p.learned = true;
    p.repetitions = Math.max(p.repetitions, 3);
    p.interval = Math.max(p.interval, 7);
    p.due = Date.now() + 7 * 86400000;
    p.lastReviewed = new Date().toISOString();
    state.wordProgress[de] = p;
    state.learnedWords.push(de);
    addXP(5);
    showToast("სიტყვა ნასწავლად მოინიშნა! +5 XP");
  }
  saveState();
}

function getFlashWords() {
  if (state.flashCategory === "study") return getStudyWords();
  if (state.flashCategory === "all") return [...VOCABULARY];
  if (LEVELS.slice(1).includes(state.flashCategory)) return VOCABULARY.filter(w => w.level === state.flashCategory);
  return VOCABULARY.filter(w => w.cat === state.flashCategory);
}

function renderFlashcard() {
  const filterEl = document.getElementById("flash-filters");
  if (!filterEl.children.length) {
    filterEl.innerHTML = [["study","სწავლა"],["all","ყველა"],...LEVELS.slice(1).map(l=>[l,l])].map(([v,l]) =>
      `<button class="vfb-btn ${v===state.flashCategory ? "active" : ""}" data-ff="${v}" onclick="setFlashFilter('${v}')">${l}</button>`
    ).join("");
  }
  filterEl.querySelectorAll(".vfb-btn").forEach(b => b.classList.toggle("active", b.dataset.ff === state.flashCategory));
  flashWords = getFlashWords();
  if (!flashWords.length) {
    document.getElementById("flashcard-area").innerHTML = `
      <div class="flash-empty">
        ჯერ სასწავლი ბარათები არ არის.
        <div style="margin-top:12px;">
          <button class="primary-btn" onclick="startStudy()">სწავლის დაწყება</button>
        </div>
      </div>`;
    return;
  }
  if (flashIdx >= flashWords.length) flashIdx = 0;
  isFlipped = false;
  const area = document.getElementById("flashcard-area");
  const w = flashWords[flashIdx];
  const pct = flashWords.length ? ((flashIdx / flashWords.length) * 100) : 0;
  area.innerHTML = `
    <div class="flash-meta">
      <div class="progress-badge">📍 ${flashIdx + 1} / ${flashWords.length}</div>
      <div class="progress-badge">⏳ ${getEligiblePracticeWords().length} ბარათი</div>
    </div>
    <div class="flashcard-progress-bar"><div class="flashcard-progress-fill" style="width:${pct}%"></div></div>
    <div class="fc-counter">${flashIdx+1} / ${flashWords.length}</div>
    <div class="flashcard-scene" id="fc-scene" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <div class="fc-category">${w.cat}</div>
          <div class="fc-de">${w.article ? w.article + " " : ""}${w.de}</div>
          <div class="fc-phonetic">${w.phonetic}</div>
          <div class="fc-hint">შეეხეთ გადასაბრუნებლად</div>
          <button class="flash-audio" onclick="event.stopPropagation(); speakWord('${w.de.replace(/'/g, "\\'")}')">🔊 მოსმენა</button>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="fc-category">${w.level}</div>
          <div class="fc-ka">${w.ka}</div>
          <div class="fc-phonetic">${w.phonetic}</div>
          <div class="fc-example">${w.example}<span class="ka">${w.example_translation}</span></div>
          ${w.article ? `<div class="fc-example">სტატია: <strong>${w.article}</strong></div>` : ""}
          <button class="flash-audio" onclick="event.stopPropagation(); speakWord('${w.de.replace(/'/g, "\\'")}')">🔊 მოსმენა</button>
        </div>
      </div>
    </div>
    <div class="flashcard-actions">
      <button class="fc-btn hard" onclick="nextFlash('hard')">😓 რთული</button>
      <button class="fc-btn ok" onclick="nextFlash('ok')">😐 ასე-ისე</button>
      <button class="fc-btn easy" onclick="nextFlash('easy')">😊 ადვილი</button>
    </div>`;
}

function nextFlash(rating) {
  const xpMap = {hard:2, ok:5, easy:10};
  const w = flashWords[flashIdx];
  scheduleReview(w, rating);
  addXP(xpMap[rating]);
  flashWords = getFlashWords();
  if (!flashWords.length) {
    renderFlashcard();
    return;
  }
  if (rating === "hard") flashIdx = Math.min(flashIdx + 1, flashWords.length - 1);
  else flashIdx = (flashIdx + 1) % flashWords.length;
  saveState();
  renderFlashcard();
}

function setFlashFilter(v) {
  state.flashCategory = v;
  state.studyMode = v === "study";
  flashIdx = 0;
  saveState();
  renderFlashcard();
}

function setVocabFilter(f) {
  state.vocabFilter = f;
  state.vocabPage = 1;
  saveState();
  renderVocab();
}

function changeVocabPage(delta) {
  state.vocabPage = Math.max(1, (state.vocabPage || 1) + delta);
  renderVocab();
}

function goToVocabPage(page) {
  state.vocabPage = page;
  renderVocab();
}

function renderVocab() {
  const filters = document.getElementById("vocab-filters");
  if (!filters.children.length) {
    filters.innerHTML = LEVELS.map(l => `<button class="vfb-btn ${l==="all"?"active":""}" data-filter="${l}" onclick="setVocabFilter('${l}')">${l==="all"?"ყველა":l}</button>`).join("")
      + `<button class="vfb-btn" data-filter="fav" onclick="setVocabFilter('fav')">❤️ ფავ.</button>`;
  }
  document.querySelectorAll("#vocab-filters .vfb-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === state.vocabFilter);
  });
  const q = (document.getElementById("vocab-search")?.value || "").toLowerCase().trim();
  const words = VOCABULARY.filter(w => {
    if (state.vocabFilter === "fav") return state.favoriteWords.includes(w.de);
    if (state.vocabFilter !== "all" && !LEVELS.slice(1).includes(state.vocabFilter)) return w.cat === state.vocabFilter;
    return state.vocabFilter === "all" || w.level === state.vocabFilter;
  }).filter(w => !q || w.de.toLowerCase().includes(q) || w.ka.toLowerCase().includes(q) || (w.example || "").toLowerCase().includes(q));

  const total = words.length;
  const pages = Math.max(1, Math.ceil(total / VOCABS_PER_PAGE));
  if (state.vocabPage > pages) state.vocabPage = 1;
  const start = (state.vocabPage - 1) * VOCABS_PER_PAGE;
  const pageWords = words.slice(start, start + VOCABS_PER_PAGE);

  const countEl = document.getElementById("vocab-count");
  if (countEl) countEl.textContent = `${total} სიტყვა · გვერდი ${state.vocabPage}/${pages}`;

  const grid = document.getElementById("vocab-grid");
  grid.innerHTML = pageWords.map(w => `
    <div class="vocab-card" onclick="learnWord('${w.de.replace(/'/g, "\\'")}')">
      <div class="vocab-de">${w.article ? `<span class="vocab-article">${w.article}</span> ` : ""}${w.de}</div>
      <div class="vocab-phonetic">${w.phonetic}</div>
      <div class="vocab-ka">${w.ka}</div>
      <div class="vocab-ka" style="margin-top:8px;font-size:0.78rem;color:var(--text3);line-height:1.4;">${w.example}<br><span style="color:var(--text2)">${w.example_translation}</span></div>
      <div class="vocab-actions">
        <button class="listen-btn" onclick="event.stopPropagation(); speakWord('${w.de.replace(/'/g, "\\'")}')">🔊 მოსმენა</button>
      </div>
      <span class="vocab-fav ${state.favoriteWords.includes(w.de)?"active":""}" onclick="toggleFav(event,'${w.de.replace(/'/g, "\\'")}')">❤️</span>
    </div>
  `).join("") + (!pageWords.length ? `<div style="grid-column:1/-1;text-align:center;font-size:0.85rem;color:var(--text2);padding:18px;">სიტყვები ვერ მოიძებნა.</div>` : "");

  const pager = document.getElementById("vocab-pagination");
  if (pager) {
    const btns = [];
    btns.push(`<button class="page-pill" ${state.vocabPage===1 ? "disabled" : ""} onclick="changeVocabPage(-1)">←</button>`);
    const maxButtons = Math.min(7, pages);
    const startPage = Math.max(1, Math.min(state.vocabPage - Math.floor(maxButtons/2), pages - maxButtons + 1));
    for (let i = 0; i < maxButtons; i++) {
      const p = startPage + i;
      if (p > pages) break;
      btns.push(`<button class="page-pill ${p===state.vocabPage ? "active" : ""}" onclick="goToVocabPage(${p})">${p}</button>`);
    }
    btns.push(`<button class="page-pill" ${state.vocabPage===pages ? "disabled" : ""} onclick="changeVocabPage(1)">→</button>`);
    pager.innerHTML = btns.join("");
  }
}

function getQuizSet() {
  const pool = state.learnedWords.length ? VOCABULARY.filter(w => state.learnedWords.includes(w.de)) : [];
  if (!pool.length) return [];
  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(15, pool.length));
}

function getWrongAnswers(word, field) {
  const pool = VOCABULARY.filter(w => state.learnedWords.includes(w.de) && w.de !== word.de && w[field] !== word[field]);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  return shuffled.map(w => w[field]);
}

function renderQuiz() {
  const typeSel = document.getElementById("quiz-types");
  if (!typeSel.children.length) {
    typeSel.innerHTML = [
      ["de-ka","DE → KA"],["ka-de","KA → DE"],["article","სტატია"]
    ].map(([v,l]) =>
      `<button class="qts-btn ${v==="de-ka"?"active":""}" data-qt="${v}" onclick="setQuizType('${v}')">${l}</button>`
    ).join("");
  }
  quizSet = getQuizSet();
  quizIdx = 0;
  quizScore = 0;
  quizAnswered = false;
  const area = document.getElementById("quiz-area");
  if (!quizSet.length) {
    area.innerHTML = `
      <div class="quiz-empty">
        ჯერ არ არის საკმარისი ნასწავლი სიტყვები ტესტისთვის.
        <div style="margin-top:12px;">
          <button class="primary-btn" onclick="startStudy()">სწავლის დაწყება</button>
        </div>
      </div>`;
    return;
  }
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById("quiz-area");
  if (!quizSet.length) return;
  if (quizIdx >= quizSet.length) {
    const pct = Math.round((quizScore / quizSet.length) * 100);
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚";
    area.innerHTML = `<div class="quiz-card"><div class="quiz-result">
      <div class="quiz-result-emoji">${emoji}</div>
      <div class="quiz-result-score">${pct}%</div>
      <div class="quiz-result-msg">${quizScore}/${quizSet.length} სწორი პასუხი</div>
      <button class="quiz-restart" onclick="renderQuiz()">🔁 ხელახლა</button>
    </div></div>`;
    state.testsCompleted++;
    addXP(quizScore * 8);
    saveState();
    return;
  }
  const w = quizSet[quizIdx];
  const pct = (quizIdx / quizSet.length) * 100;
  let question, correctAnswer, options;
  const qt = state.quizType || "de-ka";

  if (qt === "de-ka") {
    question = w.article ? `${w.article} ${w.de}` : w.de;
    correctAnswer = w.ka;
    options = shuffle([w.ka, ...getWrongAnswers(w, "ka")]);
  } else if (qt === "ka-de") {
    question = w.ka;
    correctAnswer = w.de;
    options = shuffle([w.de, ...getWrongAnswers(w, "de")]);
  } else {
    question = w.de;
    correctAnswer = w.article || "—";
    options = ["der", "die", "das", "—"];
  }

  area.innerHTML = `<div class="quiz-card">
    <div class="quiz-progress">
      <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
      <div class="quiz-prog-text">${quizIdx+1}/${quizSet.length}</div>
    </div>
    <div class="quiz-question">${question}</div>
    <div class="quiz-hint">${qt==="de-ka" ? "გამოთქმა: " + w.phonetic : qt==="article" ? "სწორი სტატია?" : "გერმანულად?"}</div>
    <div class="quiz-options">${options.map(o => `<button class="quiz-opt" onclick="answerQuiz(this,'${o}','${correctAnswer}')">${o}</button>`).join("")}</div>
    <div class="quiz-feedback" id="quiz-fb"></div>
    <button class="quiz-next-btn" id="quiz-next" onclick="nextQuiz()">შემდეგი →</button>
  </div>`;
}

function startTest(name) {
  if (!state.learnedWords.length) {
    showToast("ჯერ ნასწავლი სიტყვები არ არის");
    startStudy();
    return;
  }
  state.quizType = "de-ka";
  navigate("quiz");
  showToast(`"${name}" დაიწყო! 📝`);
  setTimeout(() => {
    quizSet = getQuizSet();
    quizIdx = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuizQuestion();
  }, 300);
}

function toggleFav(e, de) {
  e.stopPropagation();
  const i = state.favoriteWords.indexOf(de);
  if (i > -1) state.favoriteWords.splice(i, 1);
  else { state.favoriteWords.push(de); addXP(2); }
  saveState();
  renderVocab();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = state.lastVisit === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastVisit = today;
  }
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const activePage = document.querySelector(".page.active");
    if (!activePage || activePage.id !== "page-flash") return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextFlash("hard");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextFlash("easy");
    }
  });
}

function updatePracticeStats() {
  const startBtn = document.getElementById("start-study-btn");
  if (startBtn) {
    const due = getEligiblePracticeWords().length;
    startBtn.textContent = state.learnedWords.length ? `სწავლის დაწყება (${due} ბარათი)` : "სწავლის დაწყება";
  }
}

function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".rs-nav-item").forEach(i => i.classList.remove("active"));
  const pg = document.getElementById("page-"+page);
  if (pg) pg.classList.add("active");
  const nav = document.querySelector(`[data-page="${page}"]`);
  if (nav) nav.classList.add("active");
  state.lastPage = page;
  saveState();
  closeAllSidebars();
  if (page === "flash") renderFlashcard();
  if (page === "quiz") renderQuiz();
  if (page === "vocab") renderVocab();
  if (page === "home") {
    renderDailySentence();
    renderWeeklyChart();
    renderAchievements();
    updatePracticeStats();
  }
}

function initApp() {
  normalizeState();
  enrichVocabulary();
  syncLegacyLearnedWords();
  buildCategories();
  buildSettings();
  renderVocab();
  renderGrammar();
  renderFlashcard();
  renderQuiz();
  renderTests();
  renderPhonetics();
  renderQuickLessons();
  updateUI();
  updateAchievements();
  navigate(state.lastPage || "home");
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
  setupKeyboardShortcuts();
}

function loadState() {
  const saved = localStorage.getItem("dg_state");
  if (saved) {
    try { state = { ...state, ...JSON.parse(saved) }; } catch (e) {}
  }
  normalizeState();
}

function startStudy() {
  state.flashCategory = "study";
  state.studyMode = true;
  state.vocabPage = 1;
  saveState();
  navigate("flash");
  renderFlashcard();
  showToast("სწავლა დაიწყო 🎯");
}

function exportData() {
  const data = {
    version: APP_VERSION,
    exportDate: new Date().toISOString(),
    state,
    dataSchema: {
      vocabularyCount: VOCABULARY.length,
      lessonsCount: LESSONS_DATA.length
    }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "deutschgeo-progress.json";
  a.click();
  showToast("ექსპორტი დასრულდა! 📤");
}

function importProgress(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result || "{}"));
      if (imported.state) state = { ...state, ...imported.state };
      else state = { ...state, ...imported };
      normalizeState();
      syncLegacyLearnedWords();
      saveState();
      updateUI();
      renderVocab();
      renderFlashcard();
      renderQuiz();
      showToast("პროგრესი იმპორტირებულია ✅");
      event.target.value = "";
    } catch (e) {
      showToast("იმპორტი ვერ შესრულდა");
    }
  };
  reader.readAsText(file);
}

function saveName() {
  const val = document.getElementById("name-setting").value.trim();
  if (!val) return;
  state.name = val;
  saveState();
  updateUI();
  showToast("სახელი შენახულია! ✅");
}

function learnWord(de) {
  if (!state.learnedWords.includes(de)) {
    const p = ensureWordProgress(de);
    p.learned = true;
    p.repetitions = Math.max(p.repetitions, 3);
    p.interval = Math.max(p.interval, 7);
    p.due = Date.now() + 7 * 86400000;
    p.lastReviewed = new Date().toISOString();
    state.wordProgress[de] = p;
    state.learnedWords.push(de);
    addXP(5);
    showToast("სიტყვა ნასწავლად მოინიშნა! +5 XP");
  }
  saveState();
}
