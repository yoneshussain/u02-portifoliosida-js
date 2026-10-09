# Examinationsmoment — U01 Poritoliosida utifrån designskiss
https://yoneshussain.github.io/u01-portifoliosida/index.html
## Reflektion
**Från skiss till kod. Hur gick du tillväga? Var det något i skissen som var svårt att översätta till HTML och CSS, och hur löste du det?**

Jag började med att överblicka skissen och kolla efter detaljer som textstorlekar, distansen mellan olika element, fonter, utseenden, osv. Det var väldigt tydligt och enkelt att hitta dessa egenskaper i Figma. Dock önskar jag att mobil layouten också hade levande element så att man kunde skilja mellan olika storlekar och distansen mellan alla element. 

Jag fick experimentera väldigt mycket i CSS:en när det kommer till mobil- och desktop layouterna för att göra storlekarna och distansen mellan elementen så bra som möjligt. Jag jobbade på min Macbook där skärmen var ungefär 1200 px och på skissen var skärmen 1600 px vilket gjorde det lite svårt att ha exakta dimensioner på olika element. Ibland blev saker för stort eller för litet, och då behövde man använda egna storlekar och dimensioner tills det såg bra ut.

**Semantik. Vilka HTML-element valde du för sidans olika delar, och varför just de? Var landade du i ett `div` för att inget bättre fanns?**

När det kommer till semantiken av sidan valde jag att ha en header som då består av tre nav:ar som delar upp menyns olika delar, och anchors för alla länkar samt en ul med li inuti för att förklara listan av länkar som leder till dom olika sidorna. Jag valde att ha länkar istället för knappar eftersom att de var smidigare att styla och passade bra med semantiken. Footern var satt som en footer i alla delar av sidan. 

När det kommer till huvuddelen av sidan varierade det i de olika delarna av sidan. På hemsidan använde jag mig endast av en enda main för att förklara huvuddelen av sidan. När det kommer till alla andra delar som about, tech stack, contact och projects delade jag upp delarna i dessa sidor med olika sektioner då det kändes som att det blir bäst för tillgängligheten, och att det underlättade när det kom till att skriva CSS, osv. 

I vissa delar av sektionerna använde jag mig av div:ar då jag inte riktigt hade ett val, och det var främst inuti olika li:ar inuti ul:ar. Det var korta p:element, alltså allmän text på sidan som jag behövde gruppera och inte kunde definiera som något annat. När det kommer till projects sidan använde jag mig även av div:ar för att förklara de olika korten på sidan. 

**Layout. Var använde du Flexbox, var använde du Grid, och vad avgjorde valet? Hur gjorde du sidan responsiv, och varför lade du brytpunkterna där du gjorde?**

Det var ganska svårt att bestämma vart man skulle använda flexbox och vart man skulle använda grid då båda kom till hjälp väldigt bra. Då var det enklast att inkludera grid i allmänhet men använda flexbox i element som låg inuti ett element med grid. Till exempel så använde jag mig av grid på bodyn, på alla delar av sidan för att strukturera ut och centrera alla element som headern, huvuddelen av sidan, och sedan footern. 

På alla olika element så använde jag mig då av flexbox för att sedan strukturera elementen inuti de huvudelementen. Det var enklast att använda grid på bodyn eftersom att jag körde mobile-first layout, och då var det enklast att börja med en grid på bodyn med 1 kolumn, och sedan när jag vart klar med mobile-layout, expandera till 4-6 kolumner för desktop/tablet för att enkelt använda grid-area för alla olika delar av sidan. Då blev det väldigt enkelt att designa sidan för mobil och desktop. 

Jag använde media queries för att göra sidan responsiv och bestämde brytpunkterna efter när sidan såg dålig ut, och då använde jag google chromes inspect och sedan device toolbox för att se vart dimensionerna såg dåliga ut. När det kommer till olika storlekar använde jag mig mest av procent på height och width och rem till olika font-storlekar så att sidan blir så responsiv som möjligt.

**Tillgänglighet. Vad har du gjort för att sidan ska gå att använda för fler? Hur testade du det, och vad visade testet? Vad återstår?**

Jag har försökt maximera tillgängligheten så gott som det går på sidan. Alla bilder som jag lagt in i sidan har en alt text för att man ska kunna läsa upp bilderna med hjälpmedel. Jag har även sett till att alla tryckbara saker på sidan går att navigera med endast tangentbord, och det har jag gjort genom att se till att alla tryckbara saker är anchors eller buttons. Jag testade tillgängligheten genom att endast använda tangentbordet för att navigera och det funkade bra. Färgerna på allt i sidan klarar även av WCAG AA och det testade jag genom en chrome extension för tillgänglighet som säger till om något är fel, och även med lighthouse. 

**Styrkor och brister. Vad blev bra, och vad skulle du bygga om med mer tid?**

Jag tycker att sidan i helhet blev väldigt bra. För att börja försiktigt valde jag att inte fylla i all information förutom mitt namn och länkar till sociala medier. Jag har även inte lagt in någon javascript eller kodat in hamburgar-knappen eller någon meny som är rörande. Jag har valt att ha loggan som hemknapp om man är inne i en annan sida för tillfället, och navbaren stationär för att man ska kunna se så mycket av sidan som möjligt medan man är inne och scrollar. Om jag hade mer tid skulle jag definitivt bredda ut med javascript och fina animationer för sidan. Jag skulle även ha fyllt på all information som till exempel arbetslivserfarenhet, osv.

**AI-verktyg. Om du använt dem: till vad, och vad ändrade du i det som genererades?**

Jag gillar att utmana mig själv och har skrivit all kod helt av mig själv. Där jag använde AI var det på delar som till exempel när jag skulle göra gradient runt om porträtten och texten, då det var något nytt för mig. Det var småsaker jag frågade om och fick korta svar på som till exempel dark or light mode, hur man använde media queries rätt, och fick även förslag av AI om hur jag skulle gå över från mobil till desktop med hjälp av grid. 


