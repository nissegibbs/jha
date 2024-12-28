// Lista med påståenden
const statements = [
    { text: "Känt mig dum när jag dragit i en dörr där det stått 'tryck'." },
    { text: "Blivit påkommen med att kopiera en skoluppgift från internet." },
    { text: "Släppt en enorm fis efter att en dejt tagit slut." },
    { text: "Orsakat en trafikolycka." },
    { text: "Slickat mig själv i näsan." },
    { text: "Blivit bestulen." },
    { text: "Lämnat toan skamset på grund av stank." },
    { text: "Legat på rygg och tappat mobilen i ansiktet." },
    { text: "Låtsas varit modell framför spegeln." },
    { text: "Plankat på bussen/tåget/tunnelbanan." },
    { text: "Haft ett nyårslöfte." },
    { text: "Cyklat på en enhjuling." },
    { text: "Träffat en kändis." },
    { text: "Rökt vattenpipa." },
    { text: "Kallat min lärare för mamma eller pappa av misstag." },
    { text: "Lämnat ut fel telefonnummer så personen som frågat inte skulle kunnat ringa upp." },
    { text: "Tappat mat på golvet, men ändå ätit den." },
    { text: "Tagit en selfie när jag suttit på toa." },
    { text: "Fuskat på ett prov eller en tenta." },
    { text: "Velat byta namn." },
    { text: "Dumpat någon på ett elakt sätt." },
    { text: "Skämts för min partner." },
    { text: "Ljugit om min ålder." },
    { text: "Kissat på mig." },
    { text: "Skolkat från skolan." }
];

// Snusklistan
const additionalStatements = [
    { text: "Haft ett one night stand." },
    { text: "Skickat en snuskig bild till fel person." },
    { text: "Varit otrogen." },
    { text: "Varit med någon mer än dubbelt så gammal som jag." },
    { text: "Haft en hemlig förälskelse på någon i det här rummet." },
    { text: "Varit med någon som jag träffade online." },
    { text: "Råkat säga fel namn i sängen." },
    { text: "Haft sex på en offentlig plats." },
    { text: "Haft en trekant." },
    { text: "Varit med någon från mitt arbete." },
    { text: "Haft sex i ett förhållande utan kärlek." },
    { text: "Varit på en dejt enbart för en gratis middag." },
    { text: "Haft ett 'friends with benefits'-förhållande." },
    { text: "Glömt namnet på personen jag var med." },
    { text: "Flirtat med någon när jag vetat att de är i ett förhållande." },
    { text: "Blivit attraherad av någon av samma kön." },
    { text: "Varit med någon jag träffade på en fest samma kväll." },
    { text: "Använt en dejtingapp." },
    { text: "Fejkat en orgasm." },
    { text: "Haft en hemlig relation." },
    { text: "Haft sex i föräldrarnas säng." },
    { text: "Varit naken utomhus." },
    { text: "Varit med någon och sedan ångrat det direkt." },
    { text: "Gått på en blinddejt." },
    { text: "Varit med någon utan att veta deras namn." },
    { text: "Haft sex på första dejten." },
    { text: "Skickat ett snuskigt sms till mina föräldrar av misstag." },
    { text: "Haft en crush på min väns partner." },
    { text: "Varit med någon jag inte tycker är attraktiv." },
    { text: "Varit med någon jag bara känt i 24 timmar eller mindre." },
    { text: "Ljugit om min ålder för att attrahera någon." },
    { text: "Varit med någon vars namn jag inte kan uttala." },
    { text: "Blivit dumpad via text." },
    { text: "Haft en förbjuden relation." },
    { text: "Spelat in mig själv medan jag hade sex." },
    { text: "Haft sex på ett flygplan." },
    { text: "Lurat någon till att tro att jag gillade dem mer än jag egentligen gjorde." },
    { text: "Varit med någon jag träffade på semester." },
    { text: "Smugit ut mitt ex ur huset medan mina föräldrar var hemma." },
    { text: "Tappat intresset för någon på grund av sättet de kysser." },
    { text: "Haft en romans med en lärare eller chef." },
    { text: "Fått ett 'Jag älskar dig' under sex som jag inte besvarade." },
    { text: "Deltagit i ett rollspel under sex." },
    { text: "Använt mat i sängen." },
    { text: "Haft en sexdröm om en kollega." },
    { text: "Blivit överraskad av någon medan jag hade sex." },
    { text: "Haft en relation med någon utan att någonsin säga 'Jag älskar dig'." },
    { text: "Blivit attraherad av någon mer än 20 år äldre eller yngre än mig." },
    { text: "Flirtat med en främling på en bar för gratis drinkar." },
    { text: "Haft en relation med mer än en person samtidigt." },
    { text: "Haft sex på en plats där jag riskerade att bli upptäckt." },
    { text: "Haft en förälskelse på någon jag vet att jag inte borde ha." },
    { text: "Lekt med handbojor eller annan bondage-utrustning." },
    { text: "Flirtat med någon via sms och sedan raderat meddelandena så att min partner inte skulle se dem." },
    { text: "Haft ett förhållande med någon jag träffade på en klubb." },
    { text: "Sovit över hos någon jag träffade samma kväll." },
    { text: "Varit med någon vars efternamn jag inte kände till." },
    { text: "Haft sex i en bil." },
    { text: "Varit på en dejt bara för att göra någon annan svartsjuk." },
    { text: "Haft sex på ett ovanligt ställe, som en hiss eller ett provrum." },
    { text: "Blivit attraherad av någon som jag vet att mina vänner tycker är oattraktiv." },
    { text: "Haft sex med någon när jag var full." },
    { text: "Skickat ett snuskigt meddelande eller foto till någon jag inte känner väl." },
    { text: "Haft sex på en fest." },
    { text: "Haft en relation med någon som är gift." },
    { text: "Haft sex i en pool eller ett bubbelbad." },
    { text: "Haft en relation med någon jag visste att mina vänner hatade." },
    { text: "Haft en romantisk affär med någon i en annan stad eller land." },
    { text: "Haft sex på ett köksbord." },
    { text: "Stött på ett ex medan jag var på en dejt." },
    { text: "Flirtat med någon för att göra min partner svartsjuk." },
    { text: "Råkat skicka ett snuskigt meddelande till en familjemedlem." },
    { text: "Blivit attraherad av någon jag träffade på en dejt." },
    { text: "Haft sex på en balkong eller terrass." },
    { text: "Varit på en dubbeldejt med mitt ex och deras nya partner." },
    { text: "Haft en förälskelse på min bästa väns partner." },
    { text: "Ljugit om hur många sexpartners jag haft." },
    { text: "Haft en 'booty call' med någon jag nyligen träffat." },
    { text: "Varit med någon vars politiska åsikter skiljer sig drastiskt från mina." },
    { text: "Gjort slut med någon via text." },
    { text: "Haft sex på en första dejt." },
    { text: "Varit med någon jag träffade på en konsert eller festival." },
    { text: "Flirtat med någon för att få vad jag vill." },
    { text: "Haft sex i en biosalong." },
    { text: "Blivit avslöjad medan jag smög in någon i mitt rum." },
    { text: "Haft sex i en park." },
    { text: "Blivit tillbakadragen efter att ha varit för påträngande på en dejt." },
    { text: "Varit med någon bara för att bli av med dem." },
    { text: "Varit med någon för att komma över någon annan." },
    { text: "Fått ett 'Jag älskar dig' på första dejten." },
    { text: "Haft sex på en parkering." },
    { text: "Vaknat upp bredvid någon och inte kommit ihåg deras namn." },
    { text: "Varit med någon bara för att jag var ensam." },
    { text: "Haft en affär med någon jag bara känner via internet." },
    { text: "Blivit attraherad av någon bara för att jag var berusad." },
    { text: "Glömt att jag var på en dejt och dök upp för sent." },
    { text: "Haft sex på en strand." },
    { text: "Blivit attraherad av någon som jag ursprungligen avskydde." },
    { text: "Haft en crush på någon jag träffade på gymmet." },
    { text: "Haft en relation med någon som bor i ett annat land." },
    { text: "Varit på en dejt utan att förstå att det var en dejt." },
    { text: "Haft en relation med någon jag träffade på en begravning." },
    { text: "Blivit avvisad av någon jag trodde var intresserad av mig." },
    { text: "Lurat min partner om mitt förflutna." },
    { text: "Varit på en dejt bara för att komma ur huset." },
    { text: "Haft en relation med någon jag träffade på ett tåg eller flyg." },
    { text: "Varit med någon som mina vänner tycker är totalt fel för mig." },
    { text: "Haft sex på en båt." },
    { text: "Haft en affär med någon som var yngre än min yngsta syster eller bror." },
    { text: "Skickat ett snuskigt meddelande till fel person." },
    { text: "Haft en relation med någon jag träffade i en matbutik." },
    { text: "Varit med någon bara för att de hade mycket pengar." },
    { text: "Haft sex i ett tält." },
    { text: "Skickat en bild på mig själv i underkläder till någon." },
    { text: "Haft en affär med någon jag bara skulle se en gång." },
    { text: "Haft sex i ett omklädningsrum." },
    { text: "Haft en crush på någon jag träffade på ett bröllop." },
    { text: "Varit med någon som har barn." },
    { text: "Haft en relation med någon jag träffade på en festival." },
    { text: "Flirtat med någon bara för att de var bra på att laga mat." },
    { text: "Haft sex på en golfgreen." },
    { text: "Varit med någon som var mycket kortare eller mycket längre än mig." },
    { text: "Varit med någon för att få tillbaka mitt ex." },
    { text: "Varit på en blinddejt." },
    { text: "Haft sex på en campingplats." },
    { text: "Fejkat ett nödsamtal för att komma ur en dålig dejt." },
    { text: "Varit med någon bara för att de var roliga." },
    { text: "Haft en affär med någon jag träffade på en konferens." },
    { text: "Varit med någon vars yrke jag tycker är oattraktivt." },
    { text: "Varit med någon bara för att jag var kåt." },
    { text: "Varit på en dejt med någon jag träffade på en dejtingapp." },
    { text: "Haft sex i ett bibliotek." },
    { text: "Varit med någon bara för att den är känd." },
    { text: "Blivit attraherad av någon jag såg på TV." },
    { text: "Haft en relation med någon jag träffade på en affärsresa." },
    { text: "Varit med någon bara för att de hade en snygg bil." },
    { text: "Haft sex i en trädgård." },
    { text: "Varit med någon bara för att de hade ett snyggt leende." },
    { text: "Varit med någon vars husdjur jag hatade." },
    { text: "Haft en crush på en lärare eller professor." },
    { text: "Varit på en dejt med någon vars namn jag inte kunde uttala." },
    { text: "Haft sex i ett trapphus." },
    { text: "Haft en relation med någon som var mycket äldre eller mycket yngre än jag." },
    { text: "Varit med någon bara för att de var bra på att sjunga." },
    { text: "Haft en crush på någon jag bara kände genom sociala medier." },
    { text: "Varit med någon vars religion skiljer sig starkt från min." },
    { text: "Haft sex på en plats där det fanns kameror." },
    { text: "Haft en relation med någon jag träffade på en bokklubb." },
    { text: "Varit med någon vars föräldrar jag hatade." },
    { text: "Varit med någon vars klädstil jag avskydde." },
    { text: "Varit med någon som var min chef eller underordnad." },
    { text: "Haft en crush på någon vars bästa vän jag också var attraherad av." },
    { text: "Varit på en dejt med någon som var oattraktiv, men mycket intressant." },
    { text: "Varit med någon bara för att de var bra på att laga mat." },
    { text: "Haft sex på en plats där jag jobbade." },
    { text: "Haft en crush på någon som inte pratar mitt språk." },
    { text: "Haft en crush på min läkare eller terapeut." },
    { text: "Varit med någon vars livsstil är totalt olika min." },
    { text: "Varit med någon vars vänner jag ogillade." },
    { text: "Varit med någon vars humor jag inte förstod." },
    { text: "Haft en relation med någon jag träffade på en vandring." },
    { text: "Varit med någon bara för att de hade fina ögon." },
    { text: "Varit med någon som var mycket mer attraktiv än mig." },
    { text: "Haft sex på en offentlig toalett." },
    { text: "Varit med någon vars politiska åsikter jag hatar." },
    { text: "Haft en crush på någon jag träffade på en klubb." },
    { text: "Haft sex på en bio." },
    { text: "Haft sex i en skola." },
    { text: "Varit med någon vars kroppstyp jag normalt inte är attraherad av." },
    { text: "Varit med någon bara för att de kunde tala flera språk." },
    { text: "Varit med någon bara för att de hade en fin röst." },
    { text: "Varit med någon vars bakgrund var radikalt annorlunda än min." },
    { text: "Varit med någon bara för att de var bra på att lyssna." },
    { text: "Haft sex på ett tåg." },
    { text: "Varit med någon vars drömmar eller ambitioner jag tyckte var löjliga." },
    { text: "Haft sex på ett gym." },
    { text: "Haft sex i en lada." },
    { text: "Haft en relation med någon jag träffade på en båt." },
    { text: "Varit med någon bara för att de hade en häftig tatuering." },
    { text: "Haft en crush på någon jag träffade på en spaklubb." },
    { text: "Haft sex under en konsert." },
    { text: "Varit med någon bara för att de hade ett ovanligt yrke." },
    { text: "Haft en relation med någon jag träffade på en pub." },
    { text: "Haft en crush på någon jag träffade i en kö." },
    { text: "Varit med någon vars sätt att prata jag tyckte var irriterande." },
    { text: "Varit med någon bara för att de kunde göra akrobatiska trick." },
    { text: "Haft sex på ett hotellrum jag inte hade bokat." },
    { text: "Varit med någon vars röst jag tyckte var irriterande." },
    { text: "Börjat blöda näsblod under sex." },
    { text: "Ramlat under sex." }
];

// Kolla om snusk är på
let isAdditionalListEnabled = false;

// Function för att toggla snusklistan
document.getElementById('toggleList').addEventListener('click', () => {
    isAdditionalListEnabled = !isAdditionalListEnabled;

    const toggleButton = document.getElementById('toggleList');
    toggleButton.textContent = isAdditionalListEnabled ? "SNUSK ÄR PÅ" : "SNUSK ÄR AV";
    toggleButton.classList.toggle('on', isAdditionalListEnabled);
});

// Håller reda på använda påståenden
let usedStatements = [];

// Funktion för att slumpmässigt välja ett påstående som inte har använts
function generateNewStatement() {
    // Kombinera listor baserat på toggle
    const availableStatements = isAdditionalListEnabled
        ? [...statements, ...additionalStatements]
        : [...statements];

    // Om alla påståenden har använts, återställ listan
    if (usedStatements.length === availableStatements.length) {
        usedStatements = [];
        alert("Alla påståenden har använts. Listan återställs!");
    }

    // Välj ett påstående som inte har använts
    let randomStatement;
    do {
        randomStatement = availableStatements[Math.floor(Math.random() * availableStatements.length)];
    } while (usedStatements.includes(randomStatement));

    // Lägg till det valda påståendet i listan över använda påståenden
    usedStatements.push(randomStatement);

    // Uppdatera påståendet på sidan
    document.getElementById("statement").innerText = randomStatement.text;
}

// Generera ett första påstående när sidan laddas
generateNewStatement();

// Koppla knappen för att generera påståenden
document.getElementById('generateStatement').addEventListener('click', generateNewStatement);
