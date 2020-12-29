import mock from "../mock"

let data = {
  emails: [
    {
      id: 1,
      sender: "tommys@mail.com",
      sender_name: "Tommy Sicilia",
      to: ["johndoe@mail.com"],
      img: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
      subject: "Theme Update",
      cc: [],
      bcc: [],
      message: `Hi Tommy, Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.Regrads,Kristeen Sicilia`,
      attachments: ["log.txt", "sheet.xls"],
      isStarred: false,
      labels: ["private", "personal"],
      time: "07:46:00",
      day: "Aug 10",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 2,
      sender: "tressag@mail.com",
      sender_name: "Tressa Gass",
      to: ["johndoe@mail.com"],
      img: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      subject: "Company Report",
      cc: ["vrushankbrahmshatriya@mail.com"],
      bcc: ["menka@mail.com"],
      message: `Hello Tressa,Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.RegradsTressa Gass`,
      attachments: ["report.docx"],
      isStarred: true,
      labels: ["company", "private"],
      time: "07:55:00",
      day: "Jun 28",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: true
    },
    {
      id: 3,
      sender: "hettiem@mail.com",
      sender_name: "Hettie Mcerlean",
      to: ["johndoe@mail.com"],
      img: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
      subject: "Order Delivered",
      cc: [],
      bcc: [],
      message: `Hello Hettie,Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.RegradsHettie Mcerlean`,
      isStarred: false,
      labels: ["company"],
      time: "08:35:00",
      day: "Jul 30",
      year: "2020",
      replies: [
        {
          id: 4,
          sender: "johndoe@mail.com",
          sender_name: "John Doe",
          to: ["hettiem@mail.com"],
          img: require("../../assets/img/portrait/small/avatar-s-11.jpg"),
          subject: "",
          cc: [],
          bcc: [],
          message: `Hello John,Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.Regrads,John Doe`,
          attachments: ["blahblah.js"],
          isStarred: false,
          labels: [],
          time: "10:56:00",
          day: "Aug 1",
          year: "2020",
          replies: [],
          mailFolder: "",
          unread: false
        },
        {
          id: 5,
          sender: "hettiem@mail.com",
          sender_name: "Hettie Mcerlean",
          to: ["johndoe@mail.com"],
          img: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
          subject: "",
          cc: [],
          bcc: [],
          message: `Oat Hettie tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.Regrads,Hettie Mcerlean`,
          attachments: ["data.docx"],
          isStarred: false,
          labels: [],
          time: "11:25:00",
          day: "Aug 5",
          year: "2020",
          replies: [],
          mailFolder: "",
          unread: false
        }
      ],
      mailFolder: "spam",
      unread: false
    },
    {
      id: 10,
      sender: "louettae@mail.com",
      sender_name: "Louetta Esses",
      to: ["johndoe@mail.com"],
      img: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      subject: "Ui Related",
      cc: [],
      bcc: [],
      message: `Hi Louetta,Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.Regrads,Kristeen Sicilia`,
      attachments: ["report.docx"],
      isStarred: false,
      labels: ["important", "personal"],
      time: "10:55:00",
      day: "Jun 20",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 11,
      sender: "bposvner0@zdnet.com",
      sender_name: "Bobbie Posvner",
      to: ["johndoe@dot.gov"],
      img: require("../../assets/img/portrait/small/avatar-s-11.jpg"),
      subject: "Re-contextualized zero administration toolset",
      cc: [],
      bcc: [],
      message: `Hello Bobbie,Epiboly henbill hemichorea composedness resequent hearthpenny racialization freeboard Reboulia Albuginaceae Violales Trisagion resinlike plumlet insalubrious Urocoptis Orthoceratidae ogmic plateaux reinsist preconsumption rattener venipuncture Rhadamanthineperversely corpusculated theophoric uncemented weiring myolipoma gudesire dramatics trichomaphyte adventitious video polychaete glossorrhaphy bestially zoospore nonnotional sawbones unprejudiciable wali collaborative coppled shammish manless predisorder`,
      attachments: ["OrciMaurisLacinia.avi"],
      isStarred: true,
      labels: ["private"],
      time: "11:55:00",
      day: "Jun 21",
      year: "2020",
      replies: [],
      mailFolder: "spam",
      unread: true
    },
    {
      id: 12,
      sender: "rgilder1@illinois.edu",
      sender_name: "Rebecca Gilder",
      to: ["johndoe@google.co.uk"],
      img: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      subject: "Integrated bi-directional help-desk",
      cc: [],
      bcc: [],
      message: `Hello Rebecca, irretraceably indestructibility sisi fiddle pyretic Gerbera vocable hoped Chartreux thinglet whister fetiferous Guhayna overloud yuca suggestibly atmiatrics serioludicrous prehaustorium androgenic betulin chiropterite sprittail atrochalstopper acinaceous bandcutter unprostituted undependableness Saffarid parasympathetic dishonorer embryogeny overscrupulous deicidal Tapuya roupily devotee alfet sophiologic hydrobromide onlook preverb Dottore primitial frostlike overbig Monocyclica`,
      attachments: ["QuisOdio.txt"],
      isStarred: false,
      labels: ["personal"],
      time: "08:25:00",
      day: "Jul 1",
      year: "2020",
      replies: [],
      mailFolder: "trash",
      unread: true
    },
    {
      id: 13,
      sender: "swilby2@yandex.ru",
      sender_name: "Shawn Wilby",
      to: ["johndoe@altervista.org"],
      img: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
      subject: "Devolved regional product",
      cc: [],
      bcc: [],
      message: `Hello Shawn, scalpellum unisometrical emend esotrope gether separatical passionwise cringe flawful annotinous jiboa thrombotic essoinment successional backrope oligohemia gitaligenin formulaic bradycinesia paralgesic eumycetic receptoral eyrie yearlyatomistical semischolastic clour discardment pseudelytron cheson path Bennet Herat pinchem Tho extravagantly shaking procidence flocker amidoketone gyric Moi petrolific clink immunization estrepement spalder poitrail`,
      attachments: ["NecMolestieSed.tiff"],
      isStarred: false,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 3",
      year: "2020",
      replies: [],
      mailFolder: "draft",
      unread: false
    },
    {
      id: 14,
      sender: "wmannering3@mozilla.org",
      sender_name: "Waldemar Mannering",
      to: ["johndoe@sciencedaily.com"],
      img: require("../../assets/img/portrait/small/avatar-s-13.jpg"),
      subject: "Quality-focused methodical flexibility",
      cc: [],
      bcc: [],
      message: `Hi Waldemar, wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugataenoumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk undreaded unadmired podometer`,
      attachments: ["Nulla.gif"],
      isStarred: false,
      labels: ["private"],
      time: "10:55:00",
      day: "Aug 7",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 15,
      sender: "hfrostdyke4@scientificamerican.com",
      sender_name: "Heath Frostdyke",
      to: ["johndoe@weibo.com"],
      img: require("../../assets/img/portrait/small/avatar-s-13.jpg"),
      subject: "Secured optimal algorithm",
      cc: [],
      bcc: [],
      message: `Hello Heath, prefertility volumetrical subdivision Alpinist hypostomous foreyard lede knuckling Agade viking protometallic unsting palaeobiologist trierarchic bigheartedness Slartibartfast tabitude popadam idioplasm fabulous arsenite cingle backhandedness denizenshipargo trickish dependingly unhouseled aegeriid ophthalmophlebotomy crazy freedwoman unspinsterlike clinical epistemologically hermodactyl humbugger misogynist plunder Sabbathly tabule feckless cerite porringer benumb duograph propatagian pressman`,
      attachments: ["SapienQuisLibero.tiff"],
      isStarred: true,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 25",
      year: "2020",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 16,
      sender: "pjentzsch5@tamu.edu",
      sender_name: "Paulita Jentzsch",
      to: ["johndoe@skype.com"],
      img: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
      subject: "Profound user-facing frame",
      cc: [],
      bcc: [],
      message: `Hello Paulita, unstintedly septifarious prevalid implicative esere Kedarite Nekkar encampment Issedones Saururus Turkize Tshi misengrave lamnid benzamine rigidulous octonion hydrophilous coxalgic nasturtium epileptogenic biporose undenominationalism widumelioration pager infiltrate plouky tribesmanship transudate heinous exhibitionistic klendusic lienocele tractate unemotioned castigate selenate appealable Palladianism chloracetate penna moellon detector halcyon amidofluorid damascene hollaite`,
      attachments: ["UtNulla.avi"],
      isStarred: true,
      labels: ["important"],
      time: "10:55:00",
      day: "Aug 11",
      year: "2020",
      replies: [],
      mailFolder: "draft",
      unread: false
    },
    {
      id: 17,
      sender: "lminghetti6@yale.edu",
      sender_name: "Lowell Minghetti",
      to: ["johndoe@fda.gov"],
      img: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      subject: "Reactive full-range encryption",
      cc: [],
      bcc: [],
      message: `Hi Lowell, Jaime stadimeter reshearer adfix exaristate herby chrysomonad ostentous Abrahamic Marsipobranchii skil linguodental relaster restbalk enhorror glycerizine foremelt difficultness Ostreidae Euphues panduriform howler Finmark primordalitysemicurvilinear skeet sociogenetic dicephalism ghalva ethnicon katagenesis tasklike triachenium abuser henbane strubbly streetway Ramaism besetting saccos enzymically wickiup inopulent poetship Miranda hemianesthesia sphericle oariopathy`,
      attachments: ["ElementumLigula.mp3"],
      isStarred: true,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 12",
      year: "2020",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 18,
      sender: "efinessy7@sbwire.com",
      sender_name: "Eugenie Finessy",
      to: ["johndoe@odnoklassniki.ru"],
      img: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      subject: "Polarised holistic protocol",
      cc: [],
      bcc: [],
      message: `Hello Eugenie, nonmotile generale punctated humanify escharine unlatch alrighty unshepherding standstill upcrane unilobular prefrontal primate fluviatic premundane tritocone compaternity dolina phonautographic cobby corse neurohypnotic cyrtopia wreathyslanderousness Lemosi myxochondroma haemogram electrothermostat piperonyl spital reappeal pyopneumothorax Yunca eyoty forecourse extensive kickout germanization vigilant Criophoros muss aortostenosis Berchta phonophotoscopic precorrespondence rigidist castling`,
      attachments: ["Hac.xls"],
      isStarred: true,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 10",
      year: "2020",
      replies: [],
      mailFolder: "sent",
      unread: false
    },
    {
      id: 19,
      sender: "tmckeurton8@163.com",
      sender_name: "Tadio McKeurton",
      to: ["johndoe@nifty.com"],
      img: require("../../assets/img/portrait/small/avatar-s-14.jpg"),
      subject: "Down-sized transitional intranet",
      cc: [],
      bcc: [],
      message: `Hey Tadio, calcimine gramineal nonfreezable interradial setula undertakable Abranchiata ultrasystematic spectroelectric Astarte Abraham bedsite enantiopathia exlex precoincident thiocarbamic mesenteriform daturism thioantimoniate tripudiate unsultry predynastic benzidino doxasticonoverstale confessory glossed jane smoodger modernization Dehkan progymnospermic gangliectomy volumenometry Paulinistically tippy Gelfomino hive preredemption coccygine horrendous unintrusted plainer interrelatedly tearer arrojadite incircumspectly yokemating`,
      attachments: ["SedAnteVivamus.avi"],
      isStarred: true,
      labels: ["important"],
      time: "10:55:00",
      day: "Aug 17",
      year: "2020",
      replies: [],
      mailFolder: "draft",
      unread: true
    },
    {
      id: 20,
      sender: "ebegg9@wikia.com",
      sender_name: "Eb Begg",
      to: ["johndoe@51.la"],
      img: require("../../assets/img/portrait/small/avatar-s-19.jpg"),
      subject: "Organized value-added model",
      cc: [],
      bcc: [],
      message: `Hello Eb, Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardationallocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimical oligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie larigo sociometry align`,
      attachments: ["Eget.jpeg"],
      isStarred: false,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 23",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 21,
      sender: "mspata@sina.com.cn",
      sender_name: "Modestine Spat",
      to: ["johndoe@oracle.com"],
      img: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
      subject: "Profound systemic alliance 🎉 🎊",
      cc: [],
      bcc: [],
      message: `Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing crea venesector Cirrostomi`,
      attachments: ["Felis.xls"],
      isStarred: false,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 25",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: true
    },
    {
      id: 22,
      sender: "cprandob@rambler.ru",
      sender_name: "Chase Prando",
      to: ["johndoe@vistaprint.com"],
      img: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      subject: "Centralized intermediate instruction set",
      cc: [],
      bcc: [],
      message: `Respected Chase, drainman merman pleurosteal slatted serenader Tantalus slodder cachalot guerdon flannelflower digestibility priggish loa monocarbide endive rented kelep pangamous gummata siris stockproof butlerism polycrystalline begetterrack unpaining beglue astucious yardstick laniflorous tetrachloride avidious Biblicistic clival myosinogen antilobium unamiability unperforate Elaphurus wrapping deformity revocative kovil unwainscoted councilmanic saccharobiose federalize procellous`,
      attachments: ["HabitasJanlateaDictumst.avi"],
      isStarred: false,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 29",
      year: "2020",
      replies: [],
      mailFolder: "sent",
      unread: false
    },
    {
      id: 23,
      sender: "nbartlesc@merriam-webster.com",
      sender_name: "Normand Bartles",
      to: ["johndoe@si.edu"],
      img: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
      subject: "Re-contextualized leading edge projection",
      cc: [],
      bcc: [],
      message: `Hello Normand, orpine anidiomatic protoreptilian lacklusterness macromastia obstetricate Phaneroglossa tripleness laxatively hypophloeous ocellate sinoauricular porch lignitic miche strinkle hyperthyreosis tugui Alascan unrailroaded Cypriote vesuvian gradative hardenerforthink Locarno wattlework Nordicist formoxime demipriest medrick Lomentaria lucible Canossa Manatus anaplasty Spirochaete bonus overgown Amurru Skupshtina opisthorchiasis preworthy Brodie shortchange Nikko Gaviae crosscut`,
      attachments: ["UltricesPosuere.mpeg"],
      isStarred: false,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 24",
      year: "2020",
      replies: [],
      mailFolder: "spam",
      unread: false
    },
    {
      id: 24,
      sender: "rgennd@dedecms.com",
      sender_name: "Robin Genn",
      to: ["johndoe@about.com"],
      img: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      subject: "Team-oriented system-worthy intranet",
      cc: [],
      bcc: [],
      message: `Hi Robin, balsamation teachableness enarthrodia dentilation superguarantee Yuapin schedulize antarctically biocoenotic unspottedly stinter admonitorily uncollatedness umquhile grayhead dephase stopgap evenglow photogenically desmacyte rink osiered specking ratwahospitize epithymetical montage rhapsodical Ninja superdramatist westerner clubionid haustellate Saltator rodding ophthalmomalacia concupiscibleness tingle hyperuresis Trigoniidae rearousal sanctimonial Munychia counterpaned exhibitable communer triadism Janiform`,
      attachments: ["Id.tiff"],
      isStarred: true,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 15",
      year: "2020",
      replies: [],
      mailFolder: "spam",
      unread: false
    },
    {
      id: 25,
      sender: "eramelote@webeden.co.uk",
      sender_name: "Emmalynn Ramelot",
      to: ["johndoe@tinypic.com"],
      img: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      subject: "Phased eco-centric architecture",
      cc: [],
      bcc: [],
      message: `Hey Emmalynn, hightoby Maja vindicatorship unglobe poduran bronchodilatation uncontorted underwarden cyclometric orgiacs tigerhearted upscale curatize Scylliorhinidae slick unisolated nanocephalous cuirassier heartwise Venusian titanitic requirement antirestoration toluidoTrematosaurus procreant ethos pessimistic antiselene pisk Amphipneusta anconad Corchorus unswabbed sizable Balanites sardonical shovelbill trammeler carpetwork rhexis remade myelinated right bounteous unsin retroduction Montanist`,
      attachments: ["Augue.mp3"],
      isStarred: true,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 19",
      year: "2020",
      replies: [],
      mailFolder: "spam",
      unread: true
    },
    {
      id: 26,
      sender: "pcuzenf@mediafire.com",
      sender_name: "Penni Cuzen",
      to: ["johndoe@google.es"],
      img: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
      subject: "Future-proofed motivating support",
      cc: [],
      bcc: [],
      message: `Hello Penni, yonder secessionalist astringer Ovangangela overcumber supracaecal scutulate Aglaonema Pakawan citril unsubducted cavernal multivalve ladify Cichorium supplication flexion cricothyroidean picaro locally etiogenic timeously scalpeen sapropelagglutinative hyperideation Flamandize antipragmatic wincer brachyphalangia forenotion Angloman ornamentation merch revulsed windingly tristate orgic sateless orseilline Anchietea pilferer aroid counselor forevermore kulmet maladventure haruspice`,
      attachments: ["Leo.avi"],
      isStarred: false,
      labels: ["private"],
      time: "10:55:00",
      day: "Aug 21",
      year: "2020",
      replies: [],
      mailFolder: "spam",
      unread: true
    },
    {
      id: 27,
      sender: "abaldersong@utexas.edu",
      sender_name: "Ardis Balderson",
      to: ["johndoe@ow.ly"],
      img: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
      subject: "Focused impactful open system 📷 😃",
      cc: [],
      bcc: [],
      message: `Hey Ardis, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose`,
      attachments: ["Interdum.doc"],
      isStarred: true,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 26",
      year: "2020",
      replies: [],
      mailFolder: "inbox",
      unread: true
    },
    {
      id: 28,
      sender: "dmallallh@ask.com",
      sender_name: "Dagmar Mallall",
      to: ["johndoe@furl.net"],
      img: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      subject: "Function-based local productivity",
      cc: [],
      bcc: [],
      message: `Dear Dagmar, gibbed preconceptual passionwort Goanese confluence ungnaw aubepine coadjacency Romipetal isochronic convener overinsistently psammophyte colpenchyma unlogic instinctivist motorcab wellhole receptacle sinistrocular avifaunal decagram paramountness samhitasphincterismus Aunjetitz vagabondage parallelotropism unreceipted io wheretoever semivolcanic Chlamydomonadidae spittlestaff spermatogenic Sephardi berrigan lowly grotesquerie Pentameridae unsuccessive archlexicographer Stephanian reimpatriate untossed beth ventriloquial dedicational`,
      attachments: ["AdipiscingElit.ppt"],
      isStarred: true,
      labels: ["company"],
      time: "10:55:00",
      day: "Aug 19",
      year: "2020",
      replies: [],
      mailFolder: "draft",
      unread: true
    },
    {
      id: 29,
      sender: "nmacgaughyi@aol.com",
      sender_name: "Nada MacGaughy",
      to: ["johndoe@cnet.com"],
      img: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
      subject: "Compatible object-oriented policy",
      cc: [],
      bcc: [],
      message: `Hello Nada, miraculous pirijiri meekheartedness superoxygenation Elric paries epideictical Prajapati reassign stridlins spoach overreadily abusion sailmaking illiterately septangularness retinene Hler exceptionary ferberite possessionalist piperide Oschophoria beauabnormalize yearnfulness Janiculum sixhaend abstemiousness uterogestation orchestrina gallotannin muckment melanoblast supercivilization inclusionist electroosmotically immatchable stomatoplastic satinity hydrogen unexorable quinamidine milksopism fascinating ratsbane endocline Zolaist`,
      attachments: ["AnteIpsumPrimis.ppt"],
      isStarred: false,
      labels: ["private"],
      time: "10:55:00",
      day: "Aug 30",
      year: "2020",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 30,
      sender: "douldcottj@yellowpages.com",
      sender_name: "Dalila Ouldcott",
      to: ["johndoe@github.io"],
      img: require("../../assets/img/portrait/small/avatar-s-19.jpg"),
      subject: "User-friendly value-added application",
      cc: [],
      bcc: [],
      message: `Hey Dalila, wellish laminable ineunt popshop catalyte prismatize campimetrical lentisk excluding portlet coccinellid impestation Bangash Lollardist perameloid procerebrum presume cashmerette washbasin nainsook Odontolcae Alea holcodont weltedcibarious terrifical uploop naphthaleneacetic containable nonsailor Zwinglian blighty benchful guar porch fallectomy building coinvolve eidolism warmth unclericalize seismographic recongeal ethanethial clog regicidal regainment legific`,
      attachments: ["EratFermentum.mpeg"],
      isStarred: true,
      labels: ["personal"],
      time: "10:55:00",
      day: "Aug 30",
      year: "2020",
      replies: [],
      mailFolder: "trash",
      unread: false
    }
  ],
  emailTags: [
    { text: "Personal", value: "personal", color: "success" },
    { text: "Company", value: "company", color: "primary" },
    { text: "Important", value: "important", color: "warning" },
    { text: "Private", value: "private", color: "danger" }
  ]
}

// Get Mails
mock.onGet("/api/email/mails").reply(request => {
  const filter = request.params.filter

  const filteredEmails = data.emails
    .filter(email => {
      if (filter === "inbox" || !["inbox", "sent", "draft", "starred", "trash", "spam"].includes(filter)) 
        return email.mailFolder === "inbox"
      if (filter === "sent") return email.mailFolder === "sent"
      if (filter === "draft") return email.mailFolder === "draft"
      if (filter === "starred")
        return email.isStarred && email.mailFolder !== "trash"
      if (filter === "trash") return email.mailFolder === "trash"
      if (filter === "spam") return email.mailFolder === "spam"
      else return email.mailFolder !== "trash" && email.labels.includes(filter)
    })
    .reverse()
  return [200, JSON.parse(JSON.stringify(filteredEmails))]
})

// Set starred
mock.onPost("/api/email/set-starred").reply(request => {
  const mailId = JSON.parse(request.data).mailId
  data.emails.find(mail => mail.id === mailId).isStarred !== true
    ? (data.emails.find(mail => mail.id === mailId).isStarred = true)
    : (data.emails.find(mail => mail.id === mailId).isStarred = false)
  return [200]
})

// Change Folders
mock.onPost("/api/email/move-mails").reply(request => {
  const reponseData = JSON.parse(request.data)
  const { selectedEmails, mailFolder } = reponseData

  // eslint-disable-next-line
  data.emails.find(mail => {
    if (selectedEmails.includes(mail.id)) mail.mailFolder = mailFolder
  })

  return [200]
})

// Mark Unread
mock.onPost("api/email/mark-unread").reply(request => {
  const mailsToUpdate = JSON.parse(request.data).emailIds

  mailsToUpdate.forEach(mailId => {
    const mailIndex = data.emails.findIndex(mail => mail.id === mailId)
    data.emails[mailIndex].unread = JSON.parse(request.data).unreadFlag
  })

  return [200]
})

// Set Labels
mock.onPost("api/email/set-labels").reply(request => {
  const label = JSON.parse(request.data).label
  const mailsToUpdate = JSON.parse(request.data).emailIds

  mailsToUpdate.forEach(mailId => {
    const mailIndex = data.emails.findIndex(mail => mail.id === mailId)
    const labelIndex = data.emails[mailIndex].labels.indexOf(label)

    if (labelIndex === -1) data.emails[mailIndex].labels.push(label)
    else data.emails[mailIndex].labels.splice(labelIndex, 1)
  })

  return [200]
})
