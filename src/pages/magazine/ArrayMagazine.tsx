import kontaktOneImage from "../../img/magazine/kontakt01-optimized.jpg";
import kontaktTwoImage from "../../img/magazine/kontakt02-optimized.jpg";
import kontaktThreeImage from "../../img/magazine/kontakt03-optimized.jpg";
import kontaktFourImage from "../../img/magazine/kontakt04.png";

const imgContactOne = kontaktOneImage;
const imgContactTwo = kontaktTwoImage;
const imgContactThree = kontaktThreeImage;
const imgContactFour = kontaktFourImage;


const arrayMagazines = [
       {
        "id": 1,
        "title": "Kontakt 01",
        "subTitle": "Skjulte perler",
        "soldOut": true,
        "pitch": "Vi ønsket å løfte opp og frem små ukjente og idylliske steder i Oslo, nyoppstartede bedrifter med fokus på bærekraft eller kultur og miljøbevisste kunstnere for å gi dem en arena å fortelle om sine tanker og verdier på.",
        "image": imgContactOne
       },
       {
        "id": 2,
        "title": "Kontakt 02",
        "subTitle": "Natur og naturlighet",
        "soldOut": false,
        "pitch": "Med blant annet Villbrygg og Veganergutta på laget ble Kontakt 2 til. Denne utgaven fokuserte på åpenhet rundt psykisk helse, naturens rolle i menneskets sinn, kloke ord fra en landskapsarkitekt og berettelser fra et kreativt par som bosatte seg på en bitteliten øy. Sånn blant annet.",
        "image": imgContactTwo
       },
       {
        "id": 3,
        "title": "Kontakt 03",
        "subTitle": "Natur og kultur",
        "soldOut": false,
        "pitch": "I denne utgaven tok vi et dypdykk inn i ulike menneskers forhold til relasjonen mellom natur og kultur. Sigurd Lamark, F5, Edona Arnesen, New Movements og Rebecca Hawkes var blant aktørene som vi var så heldige å få høre tankene til denne gangen.",
        "image": imgContactThree
       },
       {
       "id": 4,
        "title": "Kontakt 04",
        "subTitle": "Skjulte perler 2.0",
        "soldOut": false,
        "comingSoon": true,
        "pitch": "Beskrivelse kommer snart",
        "image": imgContactFour
        }
    ]


    export default arrayMagazines