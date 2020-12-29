import namor from "namor"

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 10),
    progress: Math.floor(Math.random() * 10),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single"
  }
}

export function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    }
  })
}

export const nestedData = [
  {
    first_name: "Soledad",
    last_name: "Mockus",
    company_name: "Sinclair Machine Products Inc",
    address: "75 Elm Rd #1190",
    state: "ACT",
    post: 2600,
    city: "Barton",
    phone1: "02-1291-8182",
    phone2: "0444-126-746",
    email: "soledad_mockus@yahoo.com",
    web: "http://www.sinclairmachineproductsinc.com.au"
  },
  {
    first_name: "Dana",
    last_name: "Vock",
    company_name: "Fried, Monte Esq",
    address: "49 Walnut St",
    state: "ACT",
    post: 2600,
    city: "Yarralumla",
    phone1: "02-6689-1150",
    phone2: "0411-398-917",
    email: "dana_vock@yahoo.com",
    web: "http://www.friedmonteesq.com.au"
  },
  {
    first_name: "Roy",
    last_name: "Nybo",
    company_name: "Phoenix Phototype",
    address: "823 Fishers Ln",
    state: "ACT",
    post: 2603,
    city: "Red Hill",
    phone1: "02-5311-7778",
    phone2: "0416-394-795",
    email: "rnybo@nybo.net.au",
    web: "http://www.phoenixphototype.com.au"
  },
  {
    first_name: "Annamae",
    last_name: "Lothridge",
    company_name: "Highland Meadows Golf Club",
    address: "584 Meridian St #997",
    state: "ACT",
    post: 2608,
    city: "Civic Square",
    phone1: "02-1919-3941",
    phone2: "0495-759-817",
    email: "alothridge@hotmail.com",
    web: "http://www.highlandmeadowsgolfclub.com.au"
  },
  {
    first_name: "Katheryn",
    last_name: "Lamers",
    company_name: "Sonoco Products Co",
    address: "62171 E 6th Ave",
    state: "ACT",
    post: 2609,
    city: "Fyshwick",
    phone1: "02-4885-1611",
    phone2: "0497-455-126",
    email: "katheryn_lamers@gmail.com",
    web: "http://www.sonocoproductsco.com.au"
  },
  {
    first_name: "Jamie",
    last_name: "Kushnir",
    company_name: "Bell Electric Co",
    address: "3216 W Wabansia Ave",
    state: "ACT",
    post: 2901,
    city: "Tuggeranong Dc",
    phone1: "02-4623-8120",
    phone2: "0426-830-817",
    email: "jamie@kushnir.net.au",
    web: "http://www.bellelectricco.com.au"
  },
  {
    first_name: "Wenona",
    last_name: "Carmel",
    company_name: "Maier, Kristine M",
    address: "44 Bush St",
    state: "NSW",
    post: 1220,
    city: "Grosvenor Place",
    phone1: "02-2832-1545",
    phone2: "0439-849-209",
    email: "wenona@gmail.com",
    web: "http://www.maierkristinem.com.au"
  },
  {
    first_name: "Deane",
    last_name: "Haag",
    company_name: "Malsbary Mfg Co",
    address: "9 Hamilton Blvd #299",
    state: "NSW",
    post: 1235,
    city: "Sydney South",
    phone1: "02-9718-2944",
    phone2: "0453-828-758",
    email: "dhaag@hotmail.com",
    web: "http://www.malsbarymfgco.com.au"
  },
  {
    first_name: "Nenita",
    last_name: "Mckenna",
    company_name: "Southern Imperial Inc",
    address: "709 New Market St",
    state: "NSW",
    post: 1455,
    city: "Botany",
    phone1: "02-5059-2649",
    phone2: "0419-730-349",
    email: "nmckenna@yahoo.com",
    web: "http://www.southernimperialinc.com.au"
  },
  {
    first_name: "Mayra",
    last_name: "Bena",
    company_name: "Buelt, David L Esq",
    address: "808 Glen Cove Ave",
    state: "NSW",
    post: 1595,
    city: "Lane Cove",
    phone1: "02-1455-6085",
    phone2: "0453-666-885",
    email: "mayra.bena@gmail.com",
    web: "http://www.bueltdavidlesq.com.au"
  },
  {
    first_name: "Samuel",
    last_name: "Arellanes",
    company_name: "Ryan, Barry M Esq",
    address: "286 Santa Rosa Ave",
    state: "NSW",
    post: 1595,
    city: "Lane Cove",
    phone1: "02-7995-6787",
    phone2: "0446-710-661",
    email: "samuel.arellanes@arellanes.net.au",
    web: "http://www.ryanbarrymesq.com.au"
  },
  {
    first_name: "Princess",
    last_name: "Saffo",
    company_name: "Asian Jewelry",
    address: "12398 Duluth St",
    state: "NSW",
    post: 1835,
    city: "Auburn",
    phone1: "02-2656-6234",
    phone2: "0467-758-219",
    email: "princess_saffo@hotmail.com",
    web: "http://www.asianjewelry.com.au"
  },
  {
    first_name: "Michael",
    last_name: "Orehek",
    company_name: "Robinson, Michael C Esq",
    address: "892 Sw Broadway #8",
    state: "NSW",
    post: 2000,
    city: "Millers Point",
    phone1: "02-1919-1709",
    phone2: "0482-613-598",
    email: "michael_orehek@gmail.com",
    web: "http://www.robinsonmichaelcesq.com.au"
  },
  {
    first_name: "Casandra",
    last_name: "Gordis",
    company_name: "Carlyle Abstract Co",
    address: "6 Walnut St",
    state: "NSW",
    post: 2008,
    city: "Chippendale",
    phone1: "02-5808-6388",
    phone2: "0418-327-906",
    email: "casandra_gordis@gordis.com.au",
    web: "http://www.carlyleabstractco.com.au"
  },
  {
    first_name: "Leonor",
    last_name: "Prez",
    company_name: "Vinco Furniture Inc",
    address: "968 Delaware Ave",
    state: "NSW",
    post: 2017,
    city: "Waterloo",
    phone1: "02-7463-8776",
    phone2: "0466-155-348",
    email: "lprez@prez.com.au",
    web: "http://www.vincofurnitureinc.com.au"
  },
  {
    first_name: "Bernadine",
    last_name: "Elamin",
    company_name: "Tarix Printing",
    address: "61550 S Figueroa St",
    state: "NSW",
    post: 2024,
    city: "Waverley",
    phone1: "02-1815-8700",
    phone2: "0448-195-542",
    email: "bernadine_elamin@yahoo.com",
    web: "http://www.tarixprinting.com.au"
  },
  {
    first_name: "Cherilyn",
    last_name: "Fraize",
    company_name: "Witchs Brew",
    address: "84826 Plaza Dr",
    state: "NSW",
    post: 2030,
    city: "Rose Bay North",
    phone1: "02-4873-1914",
    phone2: "0468-743-337",
    email: "cherilyn_fraize@fraize.net.au",
    web: "http://www.witchsbrew.com.au"
  },
  {
    first_name: "Katie",
    last_name: "Magro",
    company_name: "Jones, Andrew D Esq",
    address: "8 E North Ave",
    state: "NSW",
    post: 2035,
    city: "Pagewood",
    phone1: "02-7265-9702",
    phone2: "0439-832-641",
    email: "katie_magro@gmail.com",
    web: "http://www.jonesandrewdesq.com.au"
  },
  {
    first_name: "Beckie",
    last_name: "Apodace",
    company_name: "Reich, Richard J Esq",
    address: "26 Ripley St #5444",
    state: "NSW",
    post: 2068,
    city: "Middle Cove",
    phone1: "02-5630-3114",
    phone2: "0469-490-273",
    email: "bapodace@gmail.com",
    web: "http://www.reichrichardjesq.com.au"
  },
  {
    first_name: "Nickole",
    last_name: "Derenzis",
    company_name: "Lehigh Furn Divsn Lehigh",
    address: "2 Pompton Ave",
    state: "NSW",
    post: 2082,
    city: "Berowra Heights",
    phone1: "02-5573-6627",
    phone2: "0480-120-597",
    email: "nderenzis@hotmail.com",
    web: "http://www.lehighfurndivsnlehigh.com.au"
  },
  {
    first_name: "Fidelia",
    last_name: "Dampier",
    company_name: "Signs Now",
    address: "947 W Harrison St #640",
    state: "NSW",
    post: 2083,
    city: "Dangar Island",
    phone1: "02-8035-9997",
    phone2: "0478-179-538",
    email: "fidelia_dampier@gmail.com",
    web: "http://www.signsnow.com.au"
  },
  {
    first_name: "Oren",
    last_name: "Lobosco",
    company_name: "Vei Inc",
    address: "1585 Salem Church Rd #59",
    state: "NSW",
    post: 2083,
    city: "Dangar Island",
    phone1: "02-5046-1307",
    phone2: "0495-838-492",
    email: "olobosco@hotmail.com",
    web: "http://www.veiinc.com.au"
  },
  {
    first_name: "Lou",
    last_name: "Kriner",
    company_name: "Joondeph, Jerome J Esq",
    address: "39 Broad St",
    state: "NSW",
    post: 2092,
    city: "Seaforth",
    phone1: "02-7328-3350",
    phone2: "0496-387-592",
    email: "lou.kriner@hotmail.com",
    web: "http://www.joondephjeromejesq.com.au"
  },
  {
    first_name: "Lachelle",
    last_name: "Andrzejewski",
    company_name: "Lucas Cntrl Systems Prod Deeco",
    address: "262 Montauk Blvd",
    state: "NSW",
    post: 2126,
    city: "Cherrybrook",
    phone1: "02-3416-9617",
    phone2: "0453-493-910",
    email: "lachelle.andrzejewski@andrzejewski.com.au",
    web: "http://www.lucascntrlsystemsproddeeco.com.au"
  },
  {
    first_name: "Tommy",
    last_name: "Gennusa",
    company_name: "Cooper And Raley",
    address: "2 New Brooklyn Rd",
    state: "NSW",
    post: 2138,
    city: "Concord West",
    phone1: "02-5444-1961",
    phone2: "0498-290-826",
    email: "tommy@hotmail.com",
    web: "http://www.cooperandraley.com.au"
  },
  {
    first_name: "Aide",
    last_name: "Ghera",
    company_name: "Nathaniel Electronics",
    address: "22 Livingston Ave",
    state: "NSW",
    post: 2138,
    city: "Rhodes",
    phone1: "02-3738-7508",
    phone2: "0443-448-467",
    email: "aide.ghera@ghera.com.au",
    web: "http://www.nathanielelectronics.com.au"
  },
  {
    first_name: "Novella",
    last_name: "Fritch",
    company_name: "Voils, Otis V",
    address: "5 Ellestad Dr",
    state: "NSW",
    post: 2145,
    city: "Girraween",
    phone1: "02-2612-1455",
    phone2: "0458-731-791",
    email: "nfritch@fritch.com.au",
    web: "http://www.voilsotisv.com.au"
  },
  {
    first_name: "Sherman",
    last_name: "Mahmud",
    company_name: "Gencheff, Nelson E Do",
    address: "9 Memorial Pky Nw",
    state: "NSW",
    post: 2150,
    city: "Harris Park",
    phone1: "02-2621-3361",
    phone2: "0468-488-918",
    email: "sherman@mahmud.com.au",
    web: "http://www.gencheffnelsonedo.com.au"
  },
  {
    first_name: "Madelyn",
    last_name: "Maestri",
    company_name: "Mervis Steel Co",
    address: "60 S 4th St",
    state: "NSW",
    post: 2155,
    city: "Rouse Hill",
    phone1: "02-2129-8131",
    phone2: "0413-115-438",
    email: "madelyn.maestri@yahoo.com",
    web: "http://www.mervissteelco.com.au"
  },
  {
    first_name: "Ben",
    last_name: "Kellman",
    company_name: "Anderson, Julie A Esq",
    address: "30024 Whipple Ave Nw",
    state: "NSW",
    post: 2159,
    city: "Berrilee",
    phone1: "02-7968-9243",
    phone2: "0441-733-809",
    email: "ben_kellman@kellman.net.au",
    web: "http://www.andersonjulieaesq.com.au"
  },
  {
    first_name: "Sharita",
    last_name: "Kruk",
    company_name: "Long, Robert B Jr",
    address: "8808 Northern Blvd",
    state: "NSW",
    post: 2160,
    city: "Merrylands",
    phone1: "02-7386-4544",
    phone2: "0442-976-132",
    email: "sharita_kruk@gmail.com",
    web: "http://www.longrobertbjr.com.au"
  },
  {
    first_name: "Maryrose",
    last_name: "Cove",
    company_name: "Brown Bear Bait Company",
    address: "1 Vogel Rd",
    state: "NSW",
    post: 2166,
    city: "Cabramatta",
    phone1: "02-8010-8344",
    phone2: "0440-811-454",
    email: "mcove@hotmail.com",
    web: "http://www.brownbearbaitcompany.com.au"
  },
  {
    first_name: "Johanna",
    last_name: "Saffer",
    company_name: "Springer Industrial Equip Inc",
    address: "750 Lancaster Ave",
    state: "NSW",
    post: 2194,
    city: "Campsie",
    phone1: "02-5970-1748",
    phone2: "0477-424-229",
    email: "johanna@yahoo.com",
    web: "http://www.springerindustrialequipinc.com.au"
  },
  {
    first_name: "Kimberely",
    last_name: "Weyman",
    company_name: "Scientific Agrcltl Svc Inc",
    address: "7721 Harrison St",
    state: "NSW",
    post: 2208,
    city: "Kingsway West",
    phone1: "02-7091-8948",
    phone2: "0441-151-810",
    email: "kweyman@weyman.com.au",
    web: "http://www.scientificagrcltlsvcinc.com.au"
  }
]
