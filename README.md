# Examinationsmoment — U02 Poritoliosida utifrån designskiss med JavaScript
https://yoneshussain.github.io/u02-portifoliosida-js/
## Reflektion
### Datans väg
Projektsidan hämtar mina repositories genom GitHubs REST API. I funktionen `getProjects()` använder jag `fetch()`för att skicka en HTTP GET request till APIn https://api.github.com/users/yoneshussain/repos. GitHub svarar då med JSON data som innehåller mina repositories och dess info som till exempel namn, beskrivningar, språk, och länkar. Innan datan behandlas kollar jag om det gick bra att fetcha datan genom `response.ok` och använder `response.json()` för att konvertera till objekt. Jag kollar även om datan är valid genom `Array.isArray()`. Datan retuneras till `renderProjects()` som loopar igenom alla repositories och ropar på `createProjectCard()` för varje repo. Den funktionen skapar all HTML och retunerar ett helt kort som då är appended till DOMen. Jag har separerat alla processer i olika funktioner för att koden ska vara lättare att underhålla och se bättre ut. 

### Två datakällor
Portfoliot använder två olika datakällor, en lokal JSON fil för mitt CV och GitHubs API för projekten. Datan för mitt CV är lagrat i `cv.json` vilket jag själv har kontroll över, och kan ändra när som helst utan att ändra någon HTML. Det innehåller work experience, education, och mina skills. Funktionen `getCV()` läser filen och validerar strukturen innan den skapar HTMLen. Skillnaden mellan dom olika datakällorna är att GitHubs API kommer från en extern källa och därav kan källan sluta fungera eller skapa ett fel.  Båda använder `fetch()` och JSON men med extern data behövs det mer felhantering. 

### DOM och händelser
Istället för att koda varenda kort i min projektsida och varenda del av mitt CV i HTML så genererar jag dom istället med Javascript. Jag skapade bl.a en funktion `createElement()` som underlättar för mig att skapa HTML element med JS. I CV koden använder jag `createCVEntry()` för att skapa både work experience delen och education, och för projektsidan använder jag `createProjectCard()` som skapar olika projekt, "repo korten". Sidans mobilversion använder ett click event för hamburgarmenyn för att visa och gömma nav delen, och det gör även sidans tema knapp som byter från dark mode till light mode och vice versa. Den lyssnar även efter inaktivitet (om man ej rör sidan) för att bli lite mer transparent så att det går att läsa det som är under knappen då den kan komma i vägen ibland. 

### Semantik för genererad markup
Jag använde olika semantiska element som `ul` och `li` för listor och olika `h1, h2, h3, osv` för headings, samt `a` för länkar och `button` för knappar. Saker som genereras anpassas automatiskt när det kommer till rubrikhierarikn. Den mobila navigationen använder `aria-expanded` för att berätta om menyn är öppen eller stängd och alla bilder har antingen en `alt` text eller en tydlig beskrivning. Jag har manuellt checkat så att sidan går att använda med tangentbord och kollat så att sidan är validerad med W3c och har rätt kontraster enligt WCAG AA. 

### Temaväxling
Jag använde CSS custom properties för temaväxlingen och satte en `.dark` klass på HTML root elementet. JS ändrar bara klassen medan CSS ändrar färgerna. Skulle man vilja ändra något i vardera tema så blir det enkelt då det går att ändra det centralt. Jag använder också `localStorage` för att spara och ladda användarens valda tema om man skulle lämna sidan. 

### Felhantering
Eftersom att GitHubs API hämtas externt blir det ofta fel, som till exempel en rate limit som gör att man kan hämta datan max 60 gånger i timmen. Det bromsade kodningen för mig flera gånger så jag sparade datan i `localStorage` medan jag kodade så jag slapp vänta i en timme varje gång jag ville fortsätta arbeta! När jag var färdig ändrade jag tillbaka till APIn. Medan den fetchar så visas meddelandet `Loading projects...` och skulle det för någon anledning inte lyckas så finns ett `try - catch` block som hanterar olika fel och även om det skulle retuneras en tom array, visas felmeddelandet `No projects available`. Jag använder sedan `finally` för att få bort `Loading projects...` oavsett om requesten lyckas eller inte. 

### Styrkor och brister
En bra grej som jag gjorde för projektet är seperationen av olika delar. När jag började kodningen så hände det mesta i `cv.js` och `projects.js` i en och samma funktion. Senare under kodningen upptäckte jag att det är mycket smidigare om jag delade upp arbetet i olika funktioner. Nästa gång skulle jag kunna använda ES-moduler för att separera t.ex `createElement()` då den använda i båda filerna. 

### AI-verktyg
Jag använde AI för det mesta som ett sätt att lära mig nya saker och hitta rätt hemsidor för att fördjupa mig i olika delar. Den hjälpte mig förstå asynkron JS, debugga och förbättra tillgängligheten på sidan. Jag granskade dens förslag och testade olika lösningar för att fixa delar där jag var fast i och inte kunde lösa. 