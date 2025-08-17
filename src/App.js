import React, { useState, useEffect } from 'react';
import { Shuffle, CheckCircle, XCircle, RotateCcw, Play } from 'lucide-react';
import './App.css';

function App() {
  const questions = [
    {
      id: 1,
      question: "Evaluatorul de risc la securitatea fizică este persoana desemnată care trebuie să asigure:",
      options: {
        a: "identificarea riscurilor și vulnerabilităților la securitatea fizică a unui obiectiv",
        b: "paza obiectivului",
        c: "întocmirea Raportului de evaluare și tratare a riscurilor, relativ la securitatea fizică a unui obiectiv."
      },
      correct: ["a", "c"]
    },
    {
      id: 2,
      question: "Analiza funcționării mecanismelor de securitate trebuie:",
      options: {
        a: "să fie precedată de analiza evenimentelor și a riscului",
        b: "să preceadă analiza de risc",
        c: "să preceadă analiza de evenimente"
      },
      correct: ["b"]
    },
    {
      id: 3,
      question: "Tratarea riscurilor, ca etapă a procesului de management al riscurilor, se poate face prin una din următoarele modalități:",
      options: {
        a: "aplicarea măsurilor de control adecvate pentru reducerea riscurilor",
        b: "înțelegerea și acceptarea conștientă a riscurilor în măsura în care sunt satisfăcute politica organizațională și criteriile de acceptare a riscului",
        c: "eliminarea riscului",
        d: "transferarea riscurilor asociate activității altor părți",
        e: "oricare dintre modalitățile de mai sus"
      },
      correct: ["e"]
    },
    {
      id: 4,
      question: "Principalele unități de competență specifice evaluatorului de risc la securitatea fizică sunt:",
      options: {
        a: "analiza riscurilor la securitatea fizică a obiectivului",
        b: "tratarea riscurilor la securitatea fizică a obiectivului",
        c: "asigurarea securității documentelor obiectivului"
      },
      correct: ["a", "b"]
    },
    {
      id: 5,
      question: "Care sunt funcțiile de bază ale unui sistem de protecție perimetrală?",
      options: {
        a: "detecție, blocare, identificare intruziune",
        b: "detecție, control acces, supraveghere TVCI",
        c: "descurajare, detecție, întârziere"
      },
      correct: ["c"]
    },
    {
      id: 6,
      question: "Capacitatea de stocare a unui sistem de înregistrare video depinde de:",
      options: {
        a: "numărul camerelor din sistem",
        b: "rezoluția imaginii",
        c: "numărul de imagini pe secundă"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 7,
      question: "\"Evaluarea riscului\" reprezintă:",
      options: {
        a: "procesul global care cuprinde identificarea riscului, analiza riscului și eliminarea riscului",
        b: "procesul de descoperire, recunoaștere și descriere a riscurilor",
        c: "procesul de înțelegere a naturii riscului și de determinare a nivelului de risc"
      },
      correct: ["b", "c"]
    },
    {
      id: 8,
      question: "În categoria \"infrastructuri critice\" sunt incluse:",
      options: {
        a: "sistemele de producere, transport și distribuție a energiei electrice",
        b: "mall-urile și hiper-magazinele",
        c: "obiectivele și instalațiile nucleare"
      },
      correct: ["a", "c"]
    },
    {
      id: 9,
      question: "Drepturile persoanei vizate, vis-à-vis de prelucrarea datelor cu caracter personal, sunt:",
      options: {
        a: "dreptul de acces la datele cu caracter personal care sunt prelucrate",
        b: "dreptul de acces la datele cu caracter personal care sunt prelucrate, inclusiv ale colegilor de serviciu ai acesteia",
        c: "dreptul la rectificarea și ștergerea datelor (\"dreptul de a fi uitat\")",
        d: "dreptul de a accesa toate bazele de date cu caracter personal ale operatorului",
        e: "dreptul la restricționarea prelucrării datelor",
        f: "dreptul la portabilitatea datelor",
        g: "dreptul de a se opune prelucrării datelor cu caracter personal",
        h: "dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată, inclusiv crearea de profiluri"
      },
      correct: ["a", "c", "e", "f", "g", "h"]
    },
    {
      id: 10,
      question: "Care este standardul român care reglementează Managementul riscului - Tehnici de evaluare a riscurilor?",
      options: {
        a: "EN 50518",
        b: "SR EN 31010",
        c: "SR EN 50131"
      },
      correct: ["b"]
    },
    {
      id: 11,
      question: "Care sunt normele de reglementare în domeniul pazei „obiectivelor, bunurilor, valorilor şi protecţia persoanelor\"?",
      options: {
        a: "Legea nr. 295/2004",
        b: "Legea nr. 400/1991",
        c: "Legea nr. 333/2003 și H.G. nr. 301/2012"
      },
      correct: ["c"]
    },
    {
      id: 12,
      question: "Care sunt „mijloacele mecano-fizice\" ale sistemului de pază?",
      options: {
        a: "ziduri, grilaje, încuietori speciale, dulapuri metalice",
        b: "butoane şi pedale de panică",
        c: "detectoare de prezenţă",
        d: "plase, blindaje, case de fier, tezaure"
      },
      correct: ["a", "d"]
    },
    {
      id: 13,
      question: "Care sunt formele de proprietate în România?",
      options: {
        a: "publică, privată, mixtă şi intelectuală",
        b: "nu există formă de proprietate",
        c: "proprietatea capitalistă"
      },
      correct: ["a"]
    },
    {
      id: 14,
      question: "Care sunt elementele dispozitivului de pază?",
      options: {
        a: "postul fix, mobil, post control acces şi patrula",
        b: "mijloacele mecano-fizice",
        c: "cum consideră fiecare unitate (obiectiv)"
      },
      correct: ["a"]
    },
    {
      id: 15,
      question: "Adoptarea măsurilor de securitate a obiectivelor, bunurilor şi valorilor prevăzute de lege se realizează pe baza:",
      options: {
        a: "unei analize de risc la securitatea fizică",
        b: "planului de pază",
        c: "hotărârii conducerii unității"
      },
      correct: ["a"]
    },
    {
      id: 16,
      question: "Elaborarea analizei de risc la securitate fizică se face potrivit:",
      options: {
        a: "standardului de securitate specific obiectivului păzit",
        b: "instrucțiunilor M.A.I nr. 9 din 2013",
        c: "aprecierilor personalului societății specializate de pază și protecție"
      },
      correct: ["a", "b"]
    },
    {
      id: 17,
      question: "Analiza de risc la securitatea fizică constituie:",
      options: {
        a: "o anexă a planului de pază",
        b: "un documentar al beneficiarului, pentru estimarea posibilităților dispozitivului de pază",
        c: "fundamentul adoptării măsurilor de securitate a obiectivelor, bunurilor şi valorilor prevăzute de lege, transpuse în planul de pază şi proiectul sistemului de alarmare"
      },
      correct: ["c"]
    },
    {
      id: 18,
      question: "Documentaţia privind analiza de risc cuprinde:",
      options: {
        a: "raportul de evaluare şi tratare a riscurilor la securitatea fizică",
        b: "grila de evaluare, specifică obiectului de activitate",
        c: "documentele-suport"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 19,
      question: "Cum penalizează Art. 56 din Legea 333/2003 desfăşurarea în scop comercial de activităţi de pază sau protecţie, de proiectare, producere, instalare şi întreţinere a sistemelor de alarmă împotriva efracţiei sau a componentelor acestora fără atestat ori fără licenţa de funcţionare prevăzută de lege?",
      options: {
        a: "închisoare de la 6 luni la 3 ani sau cu amendă",
        b: "răspundere materială",
        c: "răspundere disciplinară"
      },
      correct: ["a"]
    },
    {
      id: 20,
      question: "Depășirea limitei obiectului de activitate a societății specializate se sancţionează cu:",
      options: {
        a: "închisoare de la 6 luni la 1 an",
        b: "amendă de la 5.000 lei la 10.000 lei",
        c: "anularea autorizației"
      },
      correct: ["b"]
    },
    {
      id: 21,
      question: "Care este standardul care reglementează organizarea şi funcţionarea unui CMRA?",
      options: {
        a: "EN 50515",
        b: "EN 50518",
        c: "EN 50136"
      },
      correct: ["b"]
    },
    {
      id: 22,
      question: "Securitatea înseamnă:",
      options: {
        a: "calitate și funcționalitate",
        b: "siguranță și stabilitate procesuală",
        c: "combaterea infracțiunilor"
      },
      correct: ["b"]
    },
    {
      id: 23,
      question: "Care sunt formele de pază în România?",
      options: {
        a: "cu jandarmi, poliţia locală, pază proprie",
        b: "prin societăţi specializate de pază, pază comunală",
        c: "garda de corp"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 24,
      question: "Componentele sistemului de pază sunt:",
      options: {
        a: "mijloacele mecano-fizice",
        b: "mijloacele electronice",
        c: "forţele umane"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 25,
      question: "Temeiurile în baza cărora se pot prelucra date cu caracter personal sunt:",
      options: {
        a: "executarea unui contract în care parte este persoana vizată",
        b: "îndeplinirea unei obligații legale a operatorului",
        c: "protejarea intereselor vitale ale persoanei vizate sau ale unei alte persoane fizice",
        d: "îndeplinirea unei sarcini care servește unui interes public",
        e: "interesul legitim",
        f: "consimțământul persoanei vizate pentru unul sau mai multe scopuri specifice"
      },
      correct: ["a", "b", "c", "d", "e", "f"]
    },
    {
      id: 26,
      question: "Clasele de siguranță a mijloacelor mecano-fizice folosite vor fi stabilite de:",
      options: {
        a: "poliție",
        b: "pompieri",
        c: "un laborator acreditat și autorizat, cu respectarea prevederilor standardelor românești și europene"
      },
      correct: ["c"]
    },
    {
      id: 27,
      question: "La stabilirea numărului de turnicheți se are în vedere dimensionarea fluxului de personal:",
      options: {
        a: "în perioadele de maxim, astfel încât să nu apară fenomenul de ștrangulare",
        b: "după categoriile sociale",
        c: "care lucrează în schimbul de noapte"
      },
      correct: ["a"]
    },
    {
      id: 28,
      question: "Prin sisteme de alarmă împotriva efracţiei se înţelege:",
      options: {
        a: "un ansamblu de echipamente electronice compus din centrala de comandă şi semnalizare optică şi acustică, detectoare, butoane şi pedale de panică, control de acces şi TVCI",
        b: "un ansamblu de echipamente compus dintr-o centrală de alarmare, detectori, agenţi de pază şi forţe de intervenţie operativă",
        c: "un sistem de detectare a intrării sau ieşirii unor persoane"
      },
      correct: ["a"]
    },
    {
      id: 29,
      question: "Prin contract individual de muncă se înţelege:",
      options: {
        a: "contractul între o persoană fizică, denumită salariat, care se obligă să presteze munca pentru şi sub autoritatea unui angajator, persoană fizică sau juridică, în schimbul unui salariu",
        b: "un contract între două persoane, cea care plateşte şi cea care prestează munca",
        c: "un contract cu scopuri multiple"
      },
      correct: ["a"]
    },
    {
      id: 30,
      question: "Răspunderea pentru luarea măsurilor de asigurare a pazei bunurilor şi valorilor deţinute revine:",
      options: {
        a: "conducătorului secţiei de poliţie pe raza căreia este dispus obiectivul",
        b: "conducătorului societăţii de pază",
        c: "conducătorului unităţii"
      },
      correct: ["c"]
    },
    {
      id: 31,
      question: "Pot fi considerate active organizaționale care sunt supuse riscurilor:",
      options: {
        a: "clădiri și instalații",
        b: "reputația organizației",
        c: "informații confidențiale"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 32,
      question: "Pentru documentarea în vederea realizării evaluării de risc a obiectivului, evaluatorul trebuie să:",
      options: {
        a: "stabilească sursele de date și informații de accesat",
        b: "stabilească instrumentele pentru culegerea datelor",
        c: "esențializeze informațiile în integralitatea lor",
        d: "identifice insuficiențele informaționale"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 33,
      question: "Sursa de alimentare de bază a sistemelor de securitate preia energie:",
      options: {
        a: "din rețeaua electrică de joasă tensiune a sistemului energetic național",
        b: "de la un generator electric destinat exclusiv acestui scop",
        c: "de la orice acumulatoare electrice existente în zonă"
      },
      correct: ["a", "b"]
    },
    {
      id: 34,
      question: "Cine are dreptul să consemneze în Registrul Unic de control?",
      options: {
        a: "directorul societăţii de pază",
        b: "conducerea unităţii beneficiare",
        c: "poliţia"
      },
      correct: ["c"]
    },
    {
      id: 35,
      question: "Care este durata normală a timpului de muncă?",
      options: {
        a: "de 8 ore pe zi şi 40 de ore pe săptămână, pentru salariaţii angajaţi cu normă întreagă",
        b: "cum vrea angajatorul",
        c: "de 6 ore pe zi şi 30 de ore pe săptămână, pentru tinerii în vârstă de până la 18 ani"
      },
      correct: ["a", "c"]
    },
    {
      id: 36,
      question: "În stabilirea contextului de evaluare a riscurilor unui obiectiv, evaluatorul trebuie să:",
      options: {
        a: "determine contextul extern în care organizația operează",
        b: "analizeze contextul intern de funcționalitate al organizației",
        c: "evalueze cerințele de securitate fizică reglementate aplicabile organizației"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 37,
      question: "Identificarea riscurilor la securitatea fizică a obiectivului, presupune:",
      options: {
        a: "descrierea amenințărilor contextului extern și a vulnerabilităților obiectivului",
        b: "determinarea cauzelor și condițiilor care pot produce un impact asupra organizației",
        c: "stabilirea tuturor riscurilor ce pot afecta securitatea fizică a obiectivului"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 38,
      question: "Care este durata minimă a concediului de adihnă anual a salariatului?",
      options: {
        a: "de 18 zile lucrătoare",
        b: "de 20 de zile lucrătoare",
        c: "de 24 de zile lucrătoare"
      },
      correct: ["b"]
    },
    {
      id: 39,
      question: "Estimarea riscurilor la securitatea fizică a obiectivului, presupune:",
      options: {
        a: "determinarea și analizarea indiciilor de risc ierarhizați cu pragmatism și responsabilitate",
        b: "stabilirea priorităților de tratare și monitorizare a riscurilor identificate",
        c: "stabilirea unui minim de indicii de risc, pentru minimizarea costurilor"
      },
      correct: ["a", "b"]
    },
    {
      id: 40,
      question: "Potrivit H.G. 301/2012, echipamentele TVCI trebuie să stocheze imaginile de interes pentru o perioada de:",
      options: {
        a: "20 de zile",
        b: "30 de zile",
        c: "60 de zile"
      },
      correct: ["a"]
    },
    {
      id: 41,
      question: "Pentru tratarea riscurilor la securitatea fizică a obiectivului, evaluatorul trebuie să:",
      options: {
        a: "formuleze optiunile de tratare a riscurilor, urmărind corelarea acestora cu nivelul de severitate al fiecărui risc identificat",
        b: "propună măsuri de securitate fizică, în conformitate cu cerințele și reglementările legale",
        c: "prezinte beneficiarului elementele de răspuns la risc, conform procedurilor specifice obiectivului",
        d: "întocmească Raportul de evaluare și tratare a riscurilor identificate la nivelul obiectivului"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 42,
      question: "Contractul individual de muncă, poate fi încheiat:",
      options: {
        a: "pe o durată determinată",
        b: "pe o perioadă stabilită de angajator",
        c: "pe o durată nedeterminată"
      },
      correct: ["a", "c"]
    },
    {
      id: 43,
      question: "Concluziile Raportului de evaluare și tratare a riscurilor trebuie să cuprindă:",
      options: {
        a: "dimensionarea dispozitivului de pază",
        b: "zonele controlate prin mijloace electronice de supraveghere video, efracție și control acces",
        c: "elementele de protecție mecanofizică"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 44,
      question: "Accidentul suferit de un lucrător pe traseul de deplasare de la firmă la domiciliu este:",
      options: {
        a: "accident de muncă",
        b: "accident de muncă pe traseu",
        c: "nu este accident"
      },
      correct: ["a"]
    },
    {
      id: 45,
      question: "Raportul de constatare:",
      options: {
        a: "este un act încheiat în urma constatării unui eveniment",
        b: "nu se întocmeşte în vederea evitării oricărui conflict ulterior",
        c: "nu este un document care poate fi folosit drept probă"
      },
      correct: ["a"]
    },
    {
      id: 46,
      question: "Scopul activităţii de sănătate şi securitate în muncă este:",
      options: {
        a: "prevenirea accidentelor de muncă şi a îmbolnăvirilor profesionale",
        b: "stabilirea, cunoaşterea acţiunilor şi măsurilor prin care se asigură securitatea salariatului la locul de muncă",
        c: "îmbunătăţirea condiţiilor de muncă"
      },
      correct: ["a"]
    },
    {
      id: 47,
      question: "Adoptarea măsurilor de securitate a obiectivelor, bunurilor și valorilor, se realizează pe baza:",
      options: {
        a: "planului de pază",
        b: "unei analize de risc la securitatea fizică",
        c: "proiectului tehnic de securitate"
      },
      correct: ["b"]
    },
    {
      id: 48,
      question: "Practic, elaborarea analizei de risc la securitatea fizică se face potrivit:",
      options: {
        a: "Legii nr. 333/2003",
        b: "H.G. nr. 301/2012",
        c: "Instrucţiunilor M.A.I. nr. 9/2013"
      },
      correct: ["c"]
    },
    {
      id: 49,
      question: "Analiza de risc la securitatea fizică constituie:",
      options: {
        a: "fundamentul adoptării măsurilor de securitate a obiectivelor, bunurilor și valorilor prevăzute de lege, transpuse în planul de pază și proiectul sistemului de alarmare",
        b: "un document orientativ pentru beneficiarul serviciilor de securitate",
        c: "o estimare a contextului de securitate în care se află obiectivul vizat"
      },
      correct: ["a"]
    },
    {
      id: 50,
      question: "Salariul unui angajat este stabilit în funcţie de:",
      options: {
        a: "contractul colectiv de muncă pe ramură",
        b: "salariul mediu pe economia naţională",
        c: "rezultatul negocierii cu angajatorul, concretizat în documentul de angajare"
      },
      correct: ["c"]
    },
    {
      id: 51,
      question: "Legea care reglementează apărarea împotriva incendiilor este:",
      options: {
        a: "Legea nr. 333/2003",
        b: "Legea nr. 307/2006",
        c: "Legea nr. 371/2004"
      },
      correct: ["b"]
    },
    {
      id: 52,
      question: "Managementul calităţii serviciilor de securitate dintr-un obiectiv, presupune:",
      options: {
        a: "respect faţă de beneficiar şi satisfacerea cerinţelor şi necesităţilor acestuia",
        b: "să existe un interes colectiv - al antreprenorului, al angajatului şi, desigur, al beneficiarului",
        c: "ca personalul să înţeleagă şi să fie motivat în acord cu aspiraţiile şi obiectivele companiei",
        d: "asigurarea resurselor necesare, a instruirii şi a libertăţii de a acţiona cu responsabilitate şi eficienţă pentru întreg personalul"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 53,
      question: "Efectuarea analizei de risc implică parcurgerea următoarelor etape:",
      options: {
        a: "definirea parametrilor interni şi externi care generează şi/sau modifică riscurile la securitatea fizică a unităţii",
        b: "stabilirea metodei şi a instrumentelor de lucru",
        c: "identificarea tuturor riscurilor la securitatea fizică, a zonelor de impact, a evenimentelor şi cauzelor riscului, precum şi a potenţialelor consecinţe",
        d: "analizarea riscurilor la securitatea fizică",
        e: "estimarea riscurilor unităţii beneficiare",
        f: "întocmirea Raportului de evaluare şi tratare a riscurilor la securitatea fizică"
      },
      correct: ["a", "b", "c", "d", "e", "f"]
    },
    {
      id: 54,
      question: "Subsistemul de televiziune cu circuit închis are:",
      options: {
        a: "camere video",
        b: "echipamentele de multiplexare şi stocare",
        c: "posibilitatea de vizualizare a imaginilor preluate, în vederea observării/ recunoaşterii/ identificării persoanelor"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 55,
      question: "Sunt tratate cu prioritate amenințările la adresa securității obiectivului, în special cele ce privesc:",
      options: {
        a: "paza obiectivului",
        b: "bunurile și valorile obiectivului",
        c: "protecția persoanelor (integritatea corporală sau libertatea persoanelor)"
      },
      correct: ["c"]
    },
    {
      id: 56,
      question: "Prin servicii de pază, conform Legii nr. 333/2003, se înţelege:",
      options: {
        a: "paza proprietăţii împotriva accesului neautorizat sau a ocupării abuzive",
        b: "paza proprietăţii împotriva furturilor, a distrugerilor, incendiilor, precum şi a altor acţiuni producătoare de pagube materiale",
        c: "paza proprietăţii intelectuale"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 57,
      question: "Grila de evaluare specifică obiectului de activitate al unității beneficiare se completează:",
      options: {
        a: "pentru situația în care riscul a fost tratat, iar nivelul acestuia se încadrează în domeniul riscului acceptabil",
        b: "la începutul și la sfârșitul procesului de evaluare",
        c: "potrivit solicitărilor conducătorului unității beneficiare"
      },
      correct: ["a"]
    },
    {
      id: 58,
      question: "Raportul de evaluare și tratare a riscurilor la securitatea fizică și grila de evaluare se semnează de către:",
      options: {
        a: "conducătorul unității beneficiare",
        b: "evaluator",
        c: "conducătorul societății specializate de pază/securitate"
      },
      correct: ["b"]
    },
    {
      id: 59,
      question: "În categoria documentelor-suport intră:",
      options: {
        a: "chestionare, declaraţii, alte documente specifice, date obţinute şi folosite în procedura de evaluare",
        b: "procesul-verbal de constatare, al organului de poliție",
        c: "documentele postului"
      },
      correct: ["a"]
    },
    {
      id: 60,
      question: "Adoptarea măsurilor de securitate în formele prevăzute de Legea pazei, se realizează în conformitate cu analiza de risc efectuată de:",
      options: {
        a: "unitate, prin structuri de specialitate",
        b: "experți abilitați, care dețin competențe profesionale specifice, înscriși în RNERSF",
        c: "auditori externi"
      },
      correct: ["a", "b"]
    },
    {
      id: 61,
      question: "Documentele necesare înscrierii expertului evaluator în RNERSF sunt:",
      options: {
        a: "cererea tipizată IGPR, completată olograf",
        b: "copie de pe actul de identitate, certificată pentru conformitate",
        c: "copie de pe certificatul de absolvire a cursului Evaluator de risc la securitatea fizică",
        d: "certificatul de cazier judiciar, original"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 62,
      question: "În conformitate cu Legea 333/ 2003 sunt obligate să asigure paza bunurilor şi valorilor:",
      options: {
        a: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome, companiile şi societăţile naţionale, institutele naţionale de cercetare-dezvoltare, societăţile comerciale, indiferent de natura capitalului social, precum şi alte organizaţii care deţin bunuri ori valori cu orice titlu, denumite în lege unităţi",
        b: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome şi societăţi comerciale",
        c: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome, companiile şi societăţile naţionale"
      },
      correct: ["a"]
    },
    {
      id: 63,
      question: "Expertul în evaluarea de risc la securitatea fizică trebuie să îndeplinească cumulativ următoarele condiții:",
      options: {
        a: "este cetăţean român sau deţine cetăţenia unuia dintre statele membre ale Uniunii Europene ori ale Spaţiului Economic European",
        b: "deţine competenţe profesionale atestate pentru ocupaţia de evaluator de risc la securitatea fizică",
        c: "nu are antecedente penale pentru infracţiuni săvârşite cu intenţie"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 64,
      question: "Următoarele fapte/acte, pot atrage anularea analizei de risc:",
      options: {
        a: "utilizarea în procesul de efectuare a analizei de risc a unor date nereale sau incorecte",
        b: "omisiunea consemnării unor vulnerabilităţi ori ameninţări",
        c: "nesemnarea angajamentului de confidențioalitate cu beneficiarul"
      },
      correct: ["a", "b"]
    },
    {
      id: 65,
      question: "Pentru evaluarea nivelului de securitate fizică a unei unități sunt stabilite două domenii ale riscului de securitate fizică, respectiv:",
      options: {
        a: "riscul de securitate acceptabil, asociat riscurilor de securitate cu valori estimate sub pragul critic de 60%",
        b: "riscul inacceptabil, asociat valorilor estimate peste pragul critic",
        c: "nu este stabilit nici un prag, ramâne la aprecierea expertului/evaluatorului"
      },
      correct: ["a", "b"]
    },
    {
      id: 66,
      question: "Pentru obiectivele noi, expertul/evaluatorul va face propuneri pentru:",
      options: {
        a: "realizarea amenajărilor de protecţie mecanofizică",
        b: "instalarea de sisteme de securitate",
        c: "achiziţionarea unor servicii de securitate"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 67,
      question: "Structura de securitate trebuie să fie formată din persoane specializate în:",
      options: {
        a: "protecţia juridică",
        b: "protecţia prin măsuri procedurale",
        c: "protecţia personalului",
        d: "protecţia fizică",
        e: "protecţia sistemelor informatice şi de comunicaţii"
      },
      correct: ["a", "b", "c", "d", "e"]
    },
    {
      id: 68,
      question: "Elaborarea analizei de risc la securitatea fizică se face potrivit:",
      options: {
        a: "standardului de securitate specific obiectivului păzit",
        b: "instrucțiunilor M.A.I. nr. 9 din 2013",
        c: "aprecierilor personalului societății specializate de pază și protecție"
      },
      correct: ["a", "b"]
    },
    {
      id: 69,
      question: "Rezolvarea unei probleme de securitate implică:",
      options: {
        a: "o analiză amănunțită a aspectelor actuale și viitoare dependente de risc",
        b: "evidențierea posibilelor căi și modalități de manifestare a pericolelor",
        c: "măsurile care trebuie luate pentru contracararea pericolelor identificate",
        d: "metodologia de aplicare a măsurilor ce trebuiesc luate"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 70,
      question: "Care sunt tipurile de amenințări la adresa unei unități?",
      options: {
        a: "din interior",
        b: "din exterior",
        c: "din exterior în colaborare cu elemente interne",
        d: "asimetrice"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 71,
      question: "Ce înseamnă \"amenințare\"?",
      options: {
        a: "reprezintă gradul de impact asupra intereselor celor implicaţi",
        b: "este o slăbiciune care poate fi folosită pentru a conduce la consecințe dezastruoase",
        c: "se referă la existenţa unei intenţii şi la capacitatea cuiva (sau ceva) de a provoca consecinţe dezastruoase"
      },
      correct: ["c"]
    },
    {
      id: 72,
      question: "Ce înseamnă \"vulnerabilitate\"?",
      options: {
        a: "reprezintă gradul de impact asupra intereselor celor implicaţi",
        b: "este o slăbiciune care poate fi folosită pentru a conduce la consecințe dezastruoase",
        c: "se referă la existenţa unei intenţii şi la capacitatea cuiva (sau ceva) de a provoca consecinţe dezastruoase"
      },
      correct: ["b"]
    },
    {
      id: 73,
      question: "Care sunt componentele \"securității fizice\"?",
      options: {
        a: "protecția mecano-fizică",
        b: "protecția electronică",
        c: "protecția umană"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 74,
      question: "Cum este definit \"riscul\"?",
      options: {
        a: "o ameninţate care poate să exploateze eventualele slăbiciuni ale unui sistem ori a unei întregi organizaţii",
        b: "o evaluare a probabilităţii ca o ameninţare să folosească cu succes o vulnerabilitate şi să producă o consecinţă dezastruoasă",
        c: "estimarea efectului ameninţărilor sau a oponenţilor asupra fiecărui bun critic al unității"
      },
      correct: ["a", "b"]
    },
    {
      id: 75,
      question: "Ce înseamnă \"protecţie\"?",
      options: {
        a: "înseamnă toate activităţile îndreptate spre asigurarea funcţionalităţii, continuităţii şi integrităţii valorilor şi activităţilor vitale pentru entitate, pentru a împiedica, a atenua şi a neutraliza o ameninţare, un risc sau o vulnerabilitate",
        b: "înseamnă protejarea acelor bunuri ale entităţii prin a căror degradare / distrugere se ajunge la pierderea de funcţionalitate",
        c: "identificarea măsurilor luate pentru a proteja bunurile unității"
      },
      correct: ["a"]
    },
    {
      id: 76,
      question: "Ce presupune „analiza riscului\"?",
      options: {
        a: "presupune un proces de identificare a principalelor riscuri de securitate, stabilirea anvergurii şi implicaţiilor riscurilor, precum şi identificarea zonelor care prezintă risc mare şi care trebuie asigurate",
        b: "identificarea măsurilor de control al riscului existente în organizaţie",
        c: "analiza securităţii în plan general"
      },
      correct: ["a"]
    },
    {
      id: 77,
      question: "Analiza de risc la securitatea fizică se revizuieşte în una dintre următoarele situaţii:",
      options: {
        a: "cel puțin o dată la 3 ani, pentru corelarea cu dinamica parametrilor interni şi externi care generează şi/sau modifică riscurile la securitatea fizică a unităţii",
        b: "în cel mult 60 de zile de la producerea unui incident de securitate la unitatea respectivă",
        c: "în cel mult 30 de zile de la modificarea caracteristicilor arhitecturale, funcţionale sau a obiectului de activitate al unităţii beneficiare",
        d: "ori de câte ori conducerea unităţii beneficiare consideră că este necesar"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 78,
      question: "Care din cele de mai jos sunt documente de administrare a securității fizice?",
      options: {
        a: "planul de pază",
        b: "planul de pază al transporturilor, bunurilor și valorilor",
        c: "scenariul de securitate la incendiu",
        d: "procedurile de securitate"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 79,
      question: "Procedurile de securitate a personalului sunt menite:",
      options: {
        a: "să prevină accesul persoanelor neautorizate la informații confidenţiale",
        b: "să garanteze că informaţiile şi datele sunt distribuite exclusiv pe baza principiului nevoii de a cunoaște",
        c: "să permită identificarea persoanelor care, prin acţiunile/inacțiunile lor, pot pune în pericol securitatea informaţiilor şi să prevină accesul acestor persoane la astfel de informaţii"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 80,
      question: "Colectarea probelor presupune:",
      options: {
        a: "securizarea, evaluarea şi înregistrarea locului faptei / infracţiunii",
        b: "căutarea de probe",
        c: "ascultarea şi interogarea persoanelor implicate",
        d: "conservarea probelor"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 81,
      question: "Cum este definită informaţia de către Legea 182/2002?",
      options: {
        a: "orice documente, date, obiecte sau activităţi, indiferent de suport, formă, mod de exprimare sau de punere în circulaţie",
        b: "o ştire cu caracter de noutate despre un eveniment care s-a petrecut, se află în derulare ori urmează a se petrece",
        c: "date cu caracter confidenţial cunoscute numai de către persoane avizate, conform legii"
      },
      correct: ["a"]
    },
    {
      id: 82,
      question: "Care sunt \"infracţiunile\" prevăzute de Legea pazei nr. 333/2003?",
      options: {
        a: "desfăşurarea de activităţi de pază sau protecţie fără atestat sau fără licenţă de funcţionare (închisoare: 3 luni-3 ani)",
        b: "implicarea în acţiuni de forţă, executări silite, conflicte de muncă, culegeri de date şi informaţii (închisoare: 1-5 ani)",
        c: "fapta săvârşită cu premeditare care are drept rezultat afectarea unui drept al victimei"
      },
      correct: ["a", "b"]
    },
    {
      id: 83,
      question: "Ce se înţelege prin \"autoritate sau instituţie publică\"?",
      options: {
        a: "orice autoritate sau instituţie, precum şi orice regie autonomă care utilizează resurse financiare publice şi care îşi desfăşoară activitatea pe teritoriul României, potrivit Constituţiei",
        b: "persoane juridice finanţate de la bugetul de stat şi prin autogestionare",
        c: "organe cu atribuţii în domeniul apărării, ordinii publice şi siguranţei statului"
      },
      correct: ["a"]
    },
    {
      id: 84,
      question: "Cum este definită informaţia de interes public?",
      options: {
        a: "orice informaţie care priveşte activităţile sau rezultă din activităţile unei autorităţi publice sau instituţii publice",
        b: "orice informaţie privind o persoană fizică sau juridică identificată sau identificabilă",
        c: "orice informaţie de care individul are nevoie pentru rezolvarea unui caz"
      },
      correct: ["a"]
    },
    {
      id: 85,
      question: "Cum interpretaţi principiul necesităţii de cunoaştere, potrivit prevederilor legii 182/2002?",
      options: {
        a: "o persoană cu un anumit statut profesional, poate avea acces numai la acele date şi informaţii care îi sunt necesare pentru îndeplinirea atribuţiilor de serviciu",
        b: "pentru îndeplinirea sarcinilor profesionale un angajat trebuie să se documenteze cât mai bine asupra profilului de activitate pe care urmează să o desfăşoare",
        c: "nici unei persoane nu trebuie sa i se îngrădească dreptul la informare"
      },
      correct: ["a"]
    },
    {
      id: 86,
      question: "Pentru obiectivele preexistente, evaluarea și cuantificarea factorilor din grilă se fac prin:",
      options: {
        a: "aprecierea locală a stării de fapt",
        b: "consultarea contractelor de servicii de pază, transport de valori, monitorizare, instalare şi mentenanţă a sistemelor de alarmare",
        c: "consultarea documentelor de procurare, certificare, punere în funcţie a echipamentelor",
        d: "verificări funcţionale ale echipamentelor electronice şi dotărilor de protecţie mecanofizică"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 87,
      question: "Ce măsuri atrag fapta de depășire a obiectului de activitate al societății?",
      options: {
        a: "Sancțiune contravențională",
        b: "Suspendarea licenței",
        c: "Sancțiune contravențională și anularea licenței de funcționare"
      },
      correct: ["c"]
    },
    {
      id: 88,
      question: "Scopul activităţii de sănătate şi securitate în muncă este:",
      options: {
        a: "prevenirea accidentelor de muncă şi a îmbolnăvirilor profesionale",
        b: "stabilirea, cunoaşterea acţiunilor şi măsurilor prin care se asigură securitatea salariatului la locul de muncă",
        c: "îmbunătăţirea condiţiilor de muncă"
      },
      correct: ["a"]
    },
    {
      id: 89,
      question: "Care sunt principalele semnale de alarmă?",
      options: {
        a: "alarma de efracţie (semnalizează tentativa de pătrundere în zona interzisă)",
        b: "alarma de panică (semnalizează prezenţa unui intrus)",
        c: "alarma de incediu (semnalizează un pericol iminent de incendiu)",
        d: "alarmă falsă (datorată unei defecţiuni a mecanismului de detecţie)"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 90,
      question: "Constituie mijloace de control al riscurilor de securitate:",
      options: {
        a: "permiterea accesului public în clădire",
        b: "publicarea planurilor clădirii pe Facebook",
        c: "efectuarea periodică a unor teste de penetrare"
      },
      correct: ["c"]
    },
    {
      id: 91,
      question: "Managerul de securitate este persoana desemnată care trebuie să asigure:",
      options: {
        a: "paza și apărarea unității",
        b: "gestionarea Sistemului de Management al Securității (SMS)",
        c: "prevenirea și combaterea infracțiunilor în cadrul unității"
      },
      correct: ["b"]
    },
    {
      id: 92,
      question: "Analiza funcționării mecanismelor de securitate trebuie:",
      options: {
        a: "să fie precedată de analiza evenimentelor și a riscului",
        b: "să preceadă analiza de risc",
        c: "să preceadă analiza de evenimente"
      },
      correct: ["b"]
    },
    {
      id: 93,
      question: "Tratarea riscurilor, ca etapă a procesului de management al riscurilor, se poate face prin una din următoarele modalități:",
      options: {
        a: "aplicarea măsurilor de control adecvate pentru reducerea riscurilor",
        b: "înțelegerea și acceptarea conștientă a riscurilor în măsura în care sunt satisfăcute politica organizațională și criteriile de acceptare a riscului",
        c: "eliminarea riscului",
        d: "transferarea riscurilor asociate activității altor părți",
        e: "oricare dintre modalitățile de mai sus"
      },
      correct: ["e"]
    },
    {
      id: 94,
      question: "Unitățile de competență specifice managerului de securitate sunt:",
      options: {
        a: "organizarea securității fizice",
        b: "organizarea securității personalului",
        c: "asigurarea securității documentelor",
        d: "stabilirea securității industriale",
        e: "organizarea securității sistemelor informatice și de comunicații"
      },
      correct: ["a", "b", "c", "d", "e"]
    },
    {
      id: 95,
      question: "Care sunt funcțiile de bază ale unui sistem de protecție perimetrală?",
      options: {
        a: "detecție, blocare, identificare intruziune",
        b: "detecție, control acces, supraveghere TVCI",
        c: "descurajare, detecție, întârziere"
      },
      correct: ["c"]
    },
    {
      id: 96,
      question: "Capacitatea de stocare a unui sistem de înregistrare video depinde de:",
      options: {
        a: "numărul camerelor din sistem",
        b: "rezoluția imaginii",
        c: "numărul de imagini pe secundă"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 97,
      question: "\"Evaluarea riscului\" reprezintă:",
      options: {
        a: "proces global care cuprinde identificarea riscului, analiza riscului și eliminarea riscului",
        b: "proces de descoperire, recunoaștere și descriere a riscurilor",
        c: "procesul de înțelegere a naturii riscului și de determinare a nivelului de risc"
      },
      correct: ["b", "c"]
    },
    {
      id: 98,
      question: "În categoria \"infrastructuri critice\" sunt incluse:",
      options: {
        a: "sistemele de producere, transport și distribuție a energiei electrice",
        b: "mall-urile și hiper-magazinele",
        c: "obiectivele și instalațiile nucleare"
      },
      correct: ["a", "c"]
    },
    {
      id: 99,
      question: "Drepturile persoanei vizate, vis-à-vis de prelucrarea datelor cu caracter personal, sunt:",
      options: {
        a: "dreptul de acces la datele cu caracter personal care sunt prelucrate",
        b: "dreptul de acces la datele cu caracter personal care sunt prelucrate, inclusiv ale colegilor de serviciu ai acesteia",
        c: "dreptul la rectificarea și ștergerea datelor (\"dreptul de a fi uitat\")",
        d: "dreptul de a accesa toate bazele de date cu caracter personal ale operatorului",
        e: "dreptul la restricționarea prelucrării datelor",
        f: "dreptul la portabilitatea datelor",
        g: "dreptul de a se opune prelucrării datelor cu caracter personal",
        h: "dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată, inclusiv crearea de profiluri"
      },
      correct: ["a", "c", "e", "f", "g", "h"]
    },
    {
      id: 100,
      question: "Care este standardul român care reglementează Managementul riscului. Tehnici de evaluare a riscurilor?",
      options: {
        a: "EN 50518",
        b: "SR EN 31010",
        c: "SR EN 50131"
      },
      correct: ["b"]
    },
    {
      id: 101,
      question: "Care sunt normele de reglementare în domeniul pazei „obiectivelor, bunurilor, valorilor şi protecţia persoanelor\"?",
      options: {
        a: "Legea nr. 295/2004",
        b: "Legea nr. 400/1991",
        c: "Legea nr. 333/2003 și H.G. nr. 301/2012"
      },
      correct: ["c"]
    },
    {
      id: 102,
      question: "Care sunt „mijloacele mecano-fizice\" ale sistemului de pază?",
      options: {
        a: "ziduri, grilaje, încuietori speciale, dulapuri metalice",
        b: "butoane şi pedale de panică",
        c: "detectoare de prezenţă",
        d: "plase, blindaje, case de fier, tezaure"
      },
      correct: ["a", "d"]
    },
    {
      id: 103,
      question: "Care sunt formele de proprietate în România?",
      options: {
        a: "publică, privată, mixtă şi intelectuală",
        b: "nu există formă de proprietate",
        c: "proprietatea capitalistă"
      },
      correct: ["a"]
    },
    {
      id: 104,
      question: "Care sunt elementele dispozitivului de pază?",
      options: {
        a: "postul fix, mobil, post control acces şi patrula",
        b: "mijloacele mecano-fizice",
        c: "cum consideră fiecare unitate (obiectiv)"
      },
      correct: ["a"]
    },
    {
      id: 105,
      question: "Adoptarea măsurilor de securitate a obiectivelor, bunurilor şi valorilor prevăzute de lege se realizează pe baza:",
      options: {
        a: "unei analize de risc la securitate fizică",
        b: "planului de pază",
        c: "hotărârii conducerii unității"
      },
      correct: ["a"]
    },
    {
      id: 106,
      question: "Organizarea sistemului de management al securității (SMS) presupune:",
      options: {
        a: "identificarea cerințelor generale ale SMS, la specificul unității",
        b: "întocmirea listei riscurilor de securitate, la specificul unității",
        c: "implementarea măsurilor de securitate, la specificul unității"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 107,
      question: "Analiza de risc la securitatea fizică constituie:",
      options: {
        a: "o anexă a planului de pază",
        b: "un documentar al beneficiarului, pentru estimarea posibilităților dispozitivului de pază",
        c: "fundamentul adoptării măsurilor de securitate a obiectivelor, bunurilor şi valorilor prevăzute de lege, transpuse în planul de pază şi proiectul sistemului de alarmare"
      },
      correct: ["c"]
    },
    {
      id: 108,
      question: "Măsurile de securitate fizică, aplicate în cadrul programelor de protecție fizică, urmăresc:",
      options: {
        a: "să prevină pătrunderea neautorizată a persoanelor în spațiile protejate",
        b: "să prevină / descopere / împiedice acțiunile ostile, de natură să afecteze securitatea informațiilor clasificate",
        c: "să asigure accesul la informații numai persoanelor autorizate, în baza principiului \"nevoia de a cunoaște\""
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 109,
      question: "Cum penalizează Art. 56 din Legea 333/2003 desfăşurarea în scop comercial de activităţi de pază sau protecţie, de proiectare, producere, instalare şi întreţinere a sistemelor de alarmă împotriva efracţiei sau a componentelor acestora fără atestat ori fără licenţa de funcţionare prevăzută de lege?",
      options: {
        a: "închisoare de la 6 luni la 3 ani sau cu amendă",
        b: "răspundere materială",
        c: "răspundere disciplinară"
      },
      correct: ["a"]
    },
    {
      id: 110,
      question: "Depășirea limitei obiectului de activitate a societății specializate se sancţionează cu:",
      options: {
        a: "închisoare de la 6 luni la 1 an",
        b: "amendă de la 5.000 lei la 10.000 lei",
        c: "anularea autorizației"
      },
      correct: ["b"]
    },
    {
      id: 111,
      question: "Care este standardul care reglementează organizarea şi funcţionarea unui CMRA?",
      options: {
        a: "EN 50515",
        b: "EN 50518",
        c: "EN 50136"
      },
      correct: ["b"]
    },
    {
      id: 112,
      question: "Legitimaţia de serviciu se predă în următoarele condiţii:",
      options: {
        a: "la cererea organului de poliţie",
        b: "odată cu încetarea activităţii la societatea specializată / angajatoare",
        c: "niciodată"
      },
      correct: ["b"]
    },
    {
      id: 113,
      question: "Care sunt formele de pază în România?",
      options: {
        a: "cu jandarmi, poliţia locală, pază proprie",
        b: "prin societăţi specializate de pază, pază comunală",
        c: "garda de corp"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 114,
      question: "Componentele sistemului de pază sunt:",
      options: {
        a: "mijloacele mecano-fizice",
        b: "mijloacele electronice",
        c: "forţele umane"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 115,
      question: "Trusa de prim ajutor:",
      options: {
        a: "trebuie să existe la locurile de muncă ce prezintă pericol ridicat de accidente",
        b: "nu este obligatorie",
        c: "trebuie să existe la fiecare loc de muncă"
      },
      correct: ["c"]
    },
    {
      id: 116,
      question: "Rezultatele instruirii lucrătorilor în domeniul securităţii şi sănătăţii în muncă se consemnează în mod obligatoriu:",
      options: {
        a: "în carnetul conducătorului locului de muncă",
        b: "în fişa de instruire individuală",
        c: "în contractul de muncă"
      },
      correct: ["b"]
    },
    {
      id: 117,
      question: "Cum este definit patrimoniul?",
      options: {
        a: "totalitatea drepturilor şi obligaţiilor patrimoniale care aparţin unei persoane fizice sau juridice",
        b: "totalitatea bunurilor mobile şi imobile pe care le are o persoană fizică sau juridică la momentul evaluării acestora",
        c: "totalitatea bunurilor materiale și financiare ale unei persoane fizice"
      },
      correct: ["a"]
    },
    {
      id: 118,
      question: "Prin sisteme de alarmă împotriva efracţiei se înţelege:",
      options: {
        a: "un ansamblu de echipamente electronice compus din centrala de comandă şi semnalizare optică şi acustică, detectoare, butoane şi pedale de panică, control de acces şi televiziune cu circuit închis",
        b: "un ansamblu de echipamente compus dintr-o centrală de alarmare, detectori, agenţi de pază şi forţe de intervenţie operativă",
        c: "un sistem de detectare a intrării sau ieşirii unor persoane"
      },
      correct: ["a"]
    },
    {
      id: 119,
      question: "Prin contract individual de muncă se înţelege:",
      options: {
        a: "contractul între o persoană fizică, denumită salariat, care se obligă să presteze munca pentru şi sub autoritatea unui angajator, persoană fizică sau juridică, în schimbul unui salariu",
        b: "un contract între două persoane, cea care plateşte şi cea care prestează munca",
        c: "un contract cu scopuri multiple"
      },
      correct: ["a"]
    },
    {
      id: 120,
      question: "Răspunderea pentru luarea măsurilor de asigurare a pazei bunurilor şi valorilor deţinute revine:",
      options: {
        a: "conducătorului secţiei de poliţie pe raza căreia este dispus obiectivul",
        b: "conducătorului societăţii de pază",
        c: "conducătorului unităţii"
      },
      correct: ["c"]
    },
    {
      id: 121,
      question: "Contractul individual de muncă are următoarele trăsături:",
      options: {
        a: "contractul individual de muncă se încheie în formă scrisă",
        b: "este un contract încheiat între salariat şi angajator",
        c: "este consensual, încheindu-se prin acordul de voinţă ale celor două părţi"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 122,
      question: "Sancţiunile aplicabile salariaților pentru abaterile disciplinare pot fi:",
      options: {
        a: "amendă disciplinară",
        b: "avertisment scris",
        c: "retrogradarea din funcţie",
        d: "reducerea cu 5-10% a salariului de bază, pe o perioadă de 1-3 luni",
        e: "desfacerea disciplinara a contractului individual de muncă"
      },
      correct: ["b", "c", "d", "e"]
    },
    {
      id: 123,
      question: "În cazul fracturilor deschise, acordarea primului ajutor comportă următoarele activităţi:",
      options: {
        a: "se opreşte hemoragia",
        b: "se anunţă şeful ierarhic superior",
        c: "se pansează rana",
        d: "se administrează calmante pentru suprimarea / reducerea durerii"
      },
      correct: ["a", "c", "d"]
    },
    {
      id: 124,
      question: "Cine are dreptul să consemneze în Registrul Unic de control?",
      options: {
        a: "directorul societaţii",
        b: "conducerea unităţii beneficiare",
        c: "poliţia"
      },
      correct: ["c"]
    },
    {
      id: 125,
      question: "Care este durata normală a timpului de muncă?",
      options: {
        a: "de 8 ore pe zi şi 40 de ore pe săptămână, pentru salariaţii angajaţi cu normă întreagă",
        b: "cum vrea angajatorul",
        c: "de 6 ore pe zi şi 30 de ore pe săptămână, pentru tinerii în vârstă de până la 18 ani"
      },
      correct: ["a", "c"]
    },
    {
      id: 126,
      question: "Care sunt infracţiunile de serviciu?",
      options: {
        a: "purtarea abuzivă",
        b: "abuzul în serviciu",
        c: "neglijenţa în păstrarea secretului de serviciu şi neglijenţa în serviciu"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 127,
      question: "Infracţiunea este fapta care:",
      options: {
        a: "este săvârşită cu vinovăţie, nejustificată şi imputabilă persoanei care a săvârşit-o",
        b: "este sancţionată de legea penală",
        c: "este sancţionată de alte acte normative ca şi contravenţia"
      },
      correct: ["a", "b"]
    },
    {
      id: 128,
      question: "Care este durata minimă a concediului de adihnă anual a salariatului?",
      options: {
        a: "de 18 zile lucrătoare",
        b: "de 20 de zile lucrătoare",
        c: "de 24 de zile lucrătoare"
      },
      correct: ["b"]
    },
    {
      id: 129,
      question: "Furtul constă în:",
      options: {
        a: "luarea unui bun mobil din posesia sau detenţia altuia, fără consimţământul acestuia, în scopul de a şi-l însuşi pe nedrept",
        b: "luarea unui bun al altuia, prin ameninţare sau violenţă",
        c: "însuşirea unui bun aparţinând în întregime sau în parte făptuitorului, dar în momentul săvârşirii faptei acel bun se găsea în posesia sau detenţia legitimă a altei persoane"
      },
      correct: ["a", "c"]
    },
    {
      id: 130,
      question: "Potrivit H.G. 301/2012, echipamentele TVCI trebuie să stocheze imaginile de interes pentru o perioada de:",
      options: {
        a: "20 de zile",
        b: "30 de zile",
        c: "60 de zile"
      },
      correct: ["a"]
    },
    {
      id: 131,
      question: "Fapta prin care s-a pricinuit o infirmitate fizică sau psihică permanentă constituie infracţiunea de:",
      options: {
        a: "„lovire sau alte violenţe\"",
        b: "„vătămare corporală\"",
        c: "„vătămare corporală gravă\""
      },
      correct: ["c"]
    },
    {
      id: 132,
      question: "Contractul individual de muncă, poate fi încheiat:",
      options: {
        a: "pe o durată determinată",
        b: "pe o perioadă stabilită de angajator",
        c: "pe o durată nedeterminată"
      },
      correct: ["a", "c"]
    },
    {
      id: 133,
      question: "Care din faptele de mai jos sunt infracţiuni contra patrimoniului?",
      options: {
        a: "furtul, abuzul de încredere, înşelăciunea",
        b: "primirea de foloase necuvenite, darea de mită",
        c: "tâlhăria, gestiunea frauduloasă, distrugerea",
        d: "tâlhăria calificată, însuşirea bunului găsit"
      },
      correct: ["a", "c", "d"]
    },
    {
      id: 134,
      question: "Accidentul suferit de un lucrător pe traseul de deplasare de la firmă la domiciliu este:",
      options: {
        a: "accident de muncă",
        b: "accident de muncă pe traseu",
        c: "nu este accident"
      },
      correct: ["a"]
    },
    {
      id: 135,
      question: "Raportul de constatare:",
      options: {
        a: "este un act încheiat în urma constatării unui eveniment",
        b: "nu se întocmeşte în vederea evitării oricărui conflict ulterior",
        c: "nu este un document care poate fi folosit drept probă"
      },
      correct: ["a"]
    },
    {
      id: 136,
      question: "Scopul activităţii de sănătate şi securitate în muncă este:",
      options: {
        a: "prevenirea accidentelor de muncă şi a îmbolnăvirilor profesionale",
        b: "stabilirea, cunoaşterea acţiunilor şi măsurilor prin care se asigură securitatea salariatului la locul de muncă",
        c: "îmbunătăţirea condiţiilor de muncă"
      },
      correct: ["a"]
    },
    {
      id: 137,
      question: "În cazul producerii unui accident:",
      options: {
        a: "se lasă victima unde s-a produs accidentul",
        b: "se scoate victima de sub acţiunea agentului agresiv",
        c: "se calmează victima"
      },
      correct: ["b"]
    },
    {
      id: 138,
      question: "Ce măsuri atrag fapta de depășire a obiectului de activitate al societății?",
      options: {
        a: "Sancțiune contravențională",
        b: "Suspendarea licenței",
        c: "Sancțiune contravențională și anularea licenței"
      },
      correct: ["c"]
    },
    {
      id: 139,
      question: "Care sunt prevederile Art. 22 din Constituţia României, privind dreptul la viaţă şi la integritate fizică şi psihică?",
      options: {
        a: "dreptul la viaţă, precum şi dreptul la integritate fizică şi psihică ale persoanei sunt garantate",
        b: "nimeni nu poate fi supus torturii şi nici unui fel de pedeapsă sau tratament inuman ori degradant",
        c: "pedeapsa cu moartea este interzisă",
        d: "hărţuirea sexuală este interzisă"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 140,
      question: "Salariul unui angajat este stabilit în funcţie de:",
      options: {
        a: "contractul colectiv de muncă pe ramură",
        b: "salariul mediu pe economia naţională",
        c: "rezultatul negocierii cu angajatorul, concretizat în documentul de angajare"
      },
      correct: ["c"]
    },
    {
      id: 141,
      question: "Legea care reglementează apărarea împotriva incendiilor este:",
      options: {
        a: "Legea nr. 333/2003",
        b: "Legea nr. 307/2006",
        c: "Legea nr. 371/2004"
      },
      correct: ["b"]
    },
    {
      id: 142,
      question: "Managementul calităţii activităţii de pază dintr-un obiectiv, presupune:",
      options: {
        a: "respect faţă de beneficiar şi satisfacerea cerinţelor şi necesităţilor acestuia",
        b: "să existe un interes colectiv - al antreprenorului, al angajatului şi, desigur, al beneficiarului",
        c: "ca personalul să înţeleagă şi să fie motivat în acord cu aspiraţiile şi obiectivele companiei",
        d: "asigurarea resurselor necesare, a instruirii şi a libertăţii de a acţiona cu responsabilitate şi eficienţă pentru întreg personalul"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 143,
      question: "Care sunt obligaţiile personalului societăţilor specializate de pază şi protecţie?",
      options: {
        a: "de a îndeplini atribuţiile ce îi revin conform fişei postului",
        b: "de a respecta prevederile Regulamentului intern (de ordine interioară)",
        c: "de a respecta măsurile de securitate şi sănătate în muncă şi ale secretului de serviciu"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 144,
      question: "Subsistemul de televiziune cu circuit închis are:",
      options: {
        a: "camere video",
        b: "echipamentele de multiplexare şi stocare",
        c: "posibilitatea de vizualizare a imaginilor preluate, în vederea observării/ recunoaşterii/ identificării persoanelor"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 145,
      question: "În registrul de evidenţă acces persoane se înregistrează:",
      options: {
        a: "toate persoanele care solicită accesul în obiectiv",
        b: "persoanele străine care intră sau ies din incinta obiectivului",
        c: "informaţii privind identitatea angajaţilor"
      },
      correct: ["b"]
    },
    {
      id: 146,
      question: "Prin servicii de pază, conform Legii nr. 333/2003, se înţelege:",
      options: {
        a: "paza proprietăţii împotriva accesului neautorizat sau a ocupării abuzive",
        b: "paza proprietăţii împotriva furturilor, a distrugerilor, incendiilor, precum şi a altor acţiuni producătoare de pagube materiale",
        c: "paza proprietăţii intelectuale"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 147,
      question: "Ce se înţelege prin solvabilitatea unei societăţi comerciale?",
      options: {
        a: "capacitatea economică a societăţii comerciale de a-şi respecta întocmai şi la timp obligaţiile contractuale asumate",
        b: "capacitatea societăţii comerciale de a plăti cu bani cash obligaţiile financiare pe care le are",
        c: "capacitatea unei societăți comerciale de a nu avea datorii"
      },
      correct: ["a"]
    },
    {
      id: 148,
      question: "În cazul unei agresiuni verbale:",
      options: {
        a: "se somează persoana şi se folosesc mijloacele din dotare",
        b: "fiind în legitimă apărare se pot folosi mijloacele din dotare fără somaţie",
        c: "cu calm şi tact se atenţionează persoana turbulentă să înceteze acţiunea de agresiune verbală"
      },
      correct: ["c"]
    },
    {
      id: 149,
      question: "Informarea asupra stării de securitate din obiectiv se face:",
      options: {
        a: "din presa cotidiană",
        b: "la ieşirea din serviciu, participând la instructajul ţinut de şeful de tură/obiectiv",
        c: "pe timpul luării în primire a serviciului de către agentul de securitate, de la colegul pe care îl schimbă şi studiind documentele postului"
      },
      correct: ["c"]
    },
    {
      id: 150,
      question: "Legitima apărare este:",
      options: {
        a: "una dintre circumstanţele atenuante obligatori",
        b: "împrejurare ce poate fi invocată în favoarea unei părţi în litigiu",
        c: "una dintre cauzele care înlătură caracterul nejustificat al unei fapte penale"
      },
      correct: ["c"]
    },
    {
      id: 151,
      question: "În caz de incendiu, personalul de pază este obligat:",
      options: {
        a: "să ia imediat măsuri de stingere sau de limitare a propagării focului",
        b: "să anunţe pompierii la 112",
        c: "să anunţe beneficiarul şi dispeceratul firmei de monitorizare/pază",
        d: "să anunţe şeful de obiectiv şi dispeceratul",
        e: "să anunţe dispeceratul şi să continue executarea serviciului de pază"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 152,
      question: "În conformitate cu Legea 333/ 2003 sunt obligate să asigure paza bunurilor şi valorilor:",
      options: {
        a: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome, companiile şi societăţile naţionale, institutele naţionale de cercetare-dezvoltare, societăţile comerciale, indiferent de natura capitalului social, precum şi alte organizaţii care deţin bunuri ori valori cu orice titlu, denumite în lege unităţi",
        b: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome şi societăţi comerciale",
        c: "ministerele şi celelalte organe de specialitate ale administraţiei publice centrale şi locale, regiile autonome, companiile şi societăţile naţionale"
      },
      correct: ["a"]
    },
    {
      id: 153,
      question: "Paza se organizează şi se efectuează potrivit:",
      options: {
        a: "planului de pază şi ordinelor primite de la reprezentantul secţiei de poliţie",
        b: "planului de pază şi ordinelor şefului de obiectiv",
        c: "planului de pază, întocmit de beneficiar, cu avizul de specialitate al poliţiei"
      },
      correct: ["c"]
    },
    {
      id: 154,
      question: "Uniforma de serviciu a personalului de securitate se compune din:",
      options: {
        a: "coifură: şapcă, şepcuţă, căciulă, beretă (basc), fes",
        b: "îmbrăcăminte: sacou, bluzon, geacă, vestă, bluză de protecţie împotriva frigului, pantalon, îmbrăcăminte groasă (scurte matlasate sau îmblănite, hanorace, impermeabile de ploaie, şube, haine de piele etc.)",
        c: "lenjerie: cămaşă, cămaşă-bluză cu mânecă lungă sau scurtă, tricou",
        d: "încălţăminte: pantofi, bocanci, ghete",
        e: "echipament divers: cravată, fular, centură, curea"
      },
      correct: ["a", "b", "c", "d", "e"]
    },
    {
      id: 155,
      question: "În cazul infracţiunilor flagrante, personalul de pază este obligat:",
      options: {
        a: "să oprească şi să predea poliţiei pe făptuitor, bunurile sau valorile care fac obiectul infracţiunii sau al altor fapte ilicite, luând măsuri pentru conservarea ori paza lor, întocmind totodată un proces verbal despre luarea acestor măsuri",
        b: "să predea poliţiei pe făptuitor, luând măsuri pentru conservarea probelor şi întocmirea procesului verbal",
        c: "să oprească şi să predea poliţiei pe făptuitor cu proces verbal"
      },
      correct: ["a"]
    },
    {
      id: 156,
      question: "Desfăşurarea în scop comercial de activităţi de pază sau protecţie fără atestat profesional ori fără licenţă de funcţionare, potrivit Legii nr. 333/2003, constituie:",
      options: {
        a: "infracţiune şi se sancţionează cu închisoare de la 6 luni la 3 ani sau cu amendă",
        b: "abatere disciplinară",
        c: "contravenţie"
      },
      correct: ["a"]
    },
    {
      id: 157,
      question: "Structura de securitate trebuie să fie formată din persoane specializate în:",
      options: {
        a: "protecţia juridică",
        b: "protecţia prin măsuri procedurale",
        c: "protecţia personalului",
        d: "protecţia fizică",
        e: "protecţia sistemelor informatice şi de comunicaţii"
      },
      correct: ["a", "b", "c", "d", "e"]
    },
    {
      id: 158,
      question: "Elaborarea analizei de risc la securitatea fizică se face potrivit:",
      options: {
        a: "standardului de securitate specific obiectivului păzit",
        b: "instrucțiunilor M.A.I. nr. 9 din 2013",
        c: "aprecierilor personalului societății specializate de pază și protecție"
      },
      correct: ["b"]
    },
    {
      id: 159,
      question: "Rezolvarea unei probleme de securitate implică:",
      options: {
        a: "o analiză amănunțită a aspectelor actuale și viitoare dependente de risc",
        b: "evidențierea posibilelor căi și modalități de manifestare a pericolelor",
        c: "măsurile care trebuie luate pentru contracararea pericolelor identificate",
        d: "metodologia de aplicare a măsurilor ce trebuiesc luate"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 160,
      question: "Care sunt tipurile de amenințări la adresa unei unități?",
      options: {
        a: "din interior",
        b: "din exterior",
        c: "din exterior în colaborare cu elemente interne",
        d: "asimetrice"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 161,
      question: "Ce înseamnă \"amenințare\"?",
      options: {
        a: "reprezintă gradul de impact asupra intereselor celor implicaţi",
        b: "este o slăbiciune care poate fi folosită pentru a conduce la consecințe dezastruoase",
        c: "se referă la existenţa unei intenţii şi la capacitatea cuiva (sau ceva) de a provoca consecinţe dezastruoase"
      },
      correct: ["c"]
    },
    {
      id: 162,
      question: "Ce înseamnă \"vulnerabilitate\"?",
      options: {
        a: "reprezintă gradul de impact asupra intereselor celor implicaţi",
        b: "este o slăbiciune care poate fi folosită pentru a conduce la consecințe dezastruoase",
        c: "se referă la existenţa unei intenţii şi la capacitatea cuiva (sau ceva) de a provoca consecinţe dezastruoase"
      },
      correct: ["b"]
    },
    {
      id: 163,
      question: "Care sunt componentele \"securității fizice\"?",
      options: {
        a: "protecția mecano-fizică",
        b: "protecția electronică",
        c: "protecția umană"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 164,
      question: "Cum este definit \"riscul\"?",
      options: {
        a: "o ameninţate care poate să exploateze eventualele slăbiciuni ale unui sistem ori a unei întregi organizaţii",
        b: "o evaluare a probabilităţii ca o ameninţare să folosească cu succes o vulnerabilitate şi să producă o consecinţă dezastruoasă",
        c: "estimarea efectului ameninţărilor sau a oponenţilor asupra fiecărui bun critic al unității"
      },
      correct: ["a", "b"]
    },
    {
      id: 165,
      question: "Ce înseamnă \"protecţie\"?",
      options: {
        a: "înseamnă toate activităţile îndreptate spre asigurarea funcţionalităţii, continuităţii şi integrităţii valorilor şi activităţilor vitale pentru entitate, pentru a împiedica, a atenua şi a neutraliza o ameninţare, un risc sau o vulnerabilitate",
        b: "înseamnă protejarea acelor bunuri ale entităţii prin a căror degradare / distrugere se ajunge la pierderea de funcţionalitate",
        c: "identificarea măsurilor luate pentru a proteja bunurile unității"
      },
      correct: ["a"]
    },
    {
      id: 166,
      question: "Ce presupune „analiza riscului\"?",
      options: {
        a: "presupune un proces de identificare a principalelor riscuri de securitate, stabilirea anvergurii şi implicaţiilor riscurilor, precum şi identificarea zonelor care prezintă risc mare şi care trebuie asigurate",
        b: "identificarea măsurilor de control al riscului existente în organizaţie",
        c: "analiza securităţii în plan general"
      },
      correct: ["a"]
    },
    {
      id: 167,
      question: "Analiza de risc la securitatea fizică se revizuieşte în una din următoarele situaţii:",
      options: {
        a: "odată la 3 ani, pentru corelarea cu dinamica parametrilor interni şi externi care generează şi/sau modifică riscurile la securitatea fizică a unităţii",
        b: "în cel mult 2 luni de la producerea incidentului de securitate",
        c: "la modificarea caracteristicilor arhitecturale, funcţionale sau a obiectului de activitate al unităţii beneficiare",
        d: "ori de câte ori conducerea unităţii beneficiare consideră că este necesar"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 168,
      question: "Care din cele de mai jos sunt documente de administrare a securității fizice?",
      options: {
        a: "planul de pază",
        b: "planul de pază al transporturilor, bunurilor și valorilor",
        c: "scenariul de securitate la incendiu",
        d: "procedurile de securitate"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 169,
      question: "Procedurile de securitate a personalului sunt menite:",
      options: {
        a: "să prevină accesul persoanelor neautorizate la informații confidenţiale",
        b: "să garanteze că informaţiile şi datele sunt distribuite exclusiv pe baza principiului nevoii de a cunoaște",
        c: "să permită identificarea persoanelor care, prin acţiunile/inacțiunile lor, pot pune în pericol securitatea informaţiilor şi să prevină accesul acestor persoane la astfel de informaţii"
      },
      correct: ["a", "b", "c"]
    },
    {
      id: 170,
      question: "Colectarea probelor presupune:",
      options: {
        a: "securizarea, evaluarea şi înregistrarea locului faptei / infracţiunii",
        b: "căutarea de probe",
        c: "ascultarea şi interogarea persoanelor implicate",
        d: "conservarea probelor"
      },
      correct: ["a", "b", "c", "d"]
    },
    {
      id: 171,
      question: "Cum este definită informaţia de către Legea 182/2002?",
      options: {
        a: "orice documente, date, obiecte sau activităţi, indiferent de suport, formă, mod de exprimare sau de punere în circulaţie",
        b: "o ştire cu caracter de noutate despre un eveniment care s-a petrecut, se află în derulare ori urmează a se petrece",
        c: "date cu caracter confidenţial cunoscute numai de către persoane avizate, conform legii"
      },
      correct: ["a"]
    },
    {
      id: 172,
      question: "Cum este definită infracţiunea, de către Noul cod penal?",
      options: {
        a: "fapta care prezintă pericol social, săvârşită cu vinovăţie şi prevăzută de legea penală",
        b: "fapta prevăzută de legea penală, săvârşită cu vinovăţie, nejustificată şi imputabilă persoanei care a săvârşit-o",
        c: "fapta săvârşită cu premeditare care are drept rezultat afectarea unui drept al victimei"
      },
      correct: ["b"]
    },
    {
      id: 173,
      question: "Ce se înţelege prin \"autoritate sau instituţie publică\"?",
      options: {
        a: "orice autoritate sau instituţie, precum şi orice regie autonomă care utilizează resurse financiare publice şi care îşi desfăşoară activitatea pe teritoriul României, potrivit Constituţiei",
        b: "persoane juridice finanţate de la bugetul de stat şi prin autogestionare",
        c: "organe cu atribuţii în domeniul apărării, ordinii publice şi siguranţei statului"
      },
      correct: ["a"]
    },
    {
      id: 174,
      question: "Cum este definită informaţia de interes public?",
      options: {
        a: "orice informaţie care priveşte activităţile sau rezultă din activităţile unei autorităţi publice sau instituţii publice",
        b: "orice informaţie privind o persoană fizică sau juridică identificată sau identificabilă",
        c: "orice informaţie de care individul are nevoie pentru rezolvarea unui caz"
      },
      correct: ["a"]
    },
    {
      id: 175,
      question: "Cum interpretaţi principiul necesităţii de cunoaştere, potrivit prevederilor legii 182/2002?",
      options: {
        a: "o persoană cu un anumit statut profesional, poate avea acces numai la acele date şi informaţii care îi sunt necesare pentru îndeplinirea atribuţiilor de serviciu",
        b: "pentru îndeplinirea sarcinilor profesionale un angajat trebuie să se documenteze cât mai bine asupra profilului de activitate pe care urmează să o desfăşoare",
        c: "nici unei persoane nu trebuie sa i se îngrădească dreptul la informare"
      },
      correct: ["a"]
    },
    {
      id: 176,
      question: "Ce se înţelege prin solvabilitatea unei societăţi comerciale?",
      options: {
        a: "capacitatea economică a societăţii comerciale de a-şi respecta întocmai şi la timp obligaţiile contractuale asumate",
        b: "capacitatea societăţii comerciale de a plăti cu bani cash toate obligaţiile financiare pe care le are",
        c: "capacitatea de transformare a unui activ în bani, în cel mai scurt timp"
      },
      correct: ["a"]
    },
    {
      id: 177,
      question: "Ce măsuri atrag fapta de depășire a obiectului de activitate al societății?",
      options: {
        a: "Sancțiune contravențională",
        b: "Suspendarea licenței",
        c: "Sancțiune contravențională și anularea licenței de funcționare"
      },
      correct: ["c"]
    },
    {
      id: 178,
      question: "Scopul activităţii de sănătate şi securitate în muncă este:",
      options: {
        a: "prevenirea accidentelor de muncă şi a îmbolnăvirilor profesionale",
        b: "stabilirea, cunoaşterea acţiunilor şi măsurilor prin care se asigură securitatea salariatului la locul de muncă",
        c: "îmbunătăţirea condiţiilor de muncă"
      },
      correct: ["a"]
    },
    {
      id: 179,
      question: "Primul ajutor se acordă:",
      options: {
        a: "potrivit idicaţiilor date de persoanele din jur",
        b: "potrivit urgenţei şi competenţei impuse de situaţie",
        c: "numai de către şefii ierarhici"
      },
      correct: ["b"]
    },
    {
      id: 180,
      question: "Componentele sistemului de pază sunt:",
      options: {
        a: "mijloacele mecano-fizice",
        b: "mijloacele electronice",
        c: "forţele umane"
      },
      correct: ["a", "b", "c"]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setQuizStarted(false);
    setScore(0);
    setTotalAnswered(0);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setQuizStarted(false);
    setScore(0);
    setTotalAnswered(0);
  };

  const handleAnswerToggle = (optionKey) => {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    const currentAnswers = userAnswers[currentQuestion.id] || [];
    
    let newAnswers;
    if (currentAnswers.includes(optionKey)) {
      newAnswers = currentAnswers.filter(ans => ans !== optionKey);
    } else {
      newAnswers = [...currentAnswers, optionKey];
    }
    
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: newAnswers
    });
  };

  const checkAnswer = () => {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.id] || [];
    const correctAnswer = currentQuestion.correct;
    
    const isCorrect = userAnswer.length === correctAnswer.length && 
                     userAnswer.every(ans => correctAnswer.includes(ans));
    
    if (isCorrect) {
      setScore(score + 1);
    }
    setTotalAnswered(totalAnswered + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowResult(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowResult(false);
    }
  };

  if (randomizedQuestions.length === 0) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Test de evaluare a riscurilor de securitate fizică Risc Evaluator
          </h1>
          <p className="text-gray-600 mb-6">
            Testează-ți cunoștințele cu 90 de întrebări despre evaluarea riscurilor de securitate fizică.
            Întrebările sunt randomizate pentru fiecare sesiune.
          </p>
          <div className="space-y-4">
            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <Play size={20} />
              Începeți testul
            </button>
            <button
              onClick={shuffleQuestions}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <Shuffle size={16} />
              Amestecă Întrebările
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>Nr. Total Întrebări: {questions.length}</p>
            <p>Formatul răspunsului: Alegere multiplă (unele întrebări pot avea mai multe răspunsuri corecte)</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = randomizedQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion.id] || [];
  const correctAnswer = currentQuestion.correct;
  const isCorrect = showResult && userAnswer.length === correctAnswer.length && 
                   userAnswer.every(ans => correctAnswer.includes(ans));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Test de evaluare Evaluator Risc securitate fizică</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Scor: {score}/{totalAnswered}
          </span>
          <button
            onClick={shuffleQuestions}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <Shuffle size={16} />
            Amestecă
          </button>
          <button
            onClick={resetQuiz}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <RotateCcw size={16} />
            Resetează Întrebările ( începe din nou )
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Întrebarea {currentQuestionIndex + 1} din {randomizedQuestions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / randomizedQuestions.length) * 100)}% Completat</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / randomizedQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {Object.entries(currentQuestion.options).map(([key, value]) => {
            const isSelected = userAnswer.includes(key);
            const isCorrectOption = correctAnswer.includes(key);
            
            let optionClass = "p-4 border rounded-lg cursor-pointer transition-all ";
            
            if (showResult) {
              if (isCorrectOption) {
                optionClass += "border-green-500 bg-green-50 text-green-800";
              } else if (isSelected && !isCorrectOption) {
                optionClass += "border-red-500 bg-red-50 text-red-800";
              } else {
                optionClass += "border-gray-300 bg-gray-50 text-gray-600";
              }
            } else {
              if (isSelected) {
                optionClass += "border-blue-500 bg-blue-50 text-blue-800";
              } else {
                optionClass += "border-gray-300 hover:border-blue-300 hover:bg-blue-50";
              }
            }

            return (
              <div
                key={key}
                className={optionClass}
                onClick={() => !showResult && handleAnswerToggle(key)}
              >
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-sm mt-0.5">
                    {key.toUpperCase()})
                  </span>
                  <span className="flex-1">{value}</span>
                  {showResult && isCorrectOption && (
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrectOption && (
                    <XCircle size={20} className="text-red-600 flex-shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Result Display */}
      {showResult && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle className="text-green-600" size={20} />
            ) : (
              <XCircle className="text-red-600" size={20} />
            )}
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          {!isCorrect && (
            <p className="text-red-700">
              <strong>Correct answer(s):</strong> {correctAnswer.map(ans => ans.toUpperCase()).join(', ')}
            </p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentQuestionIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Întrebarea precedenta ( Înapoi )
        </button>

        <div className="flex gap-2">
          {!showResult && userAnswer.length > 0 && (
            <button
              onClick={checkAnswer}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verifică Răspuns ( Răspunde )
            </button>
          )}
        </div>

        <button
          onClick={nextQuestion}
          disabled={currentQuestionIndex === randomizedQuestions.length - 1}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentQuestionIndex === randomizedQuestions.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Următoarea întrebare
        </button>
      </div>

      {/* Final Score */}
      {currentQuestionIndex === randomizedQuestions.length - 1 && showResult && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Progres-ul testului</h3>
          <p className="text-blue-700">
            Ai răspuns la {totalAnswered} întrebări cu un scor de {score}/{totalAnswered} 
            ({totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0}%)
          </p>
        </div>
      )}
    </div>
  );
}

export default App;