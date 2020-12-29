import mock from "../mock"

// Contact
let data = {
  contacts: [
    {
      uid: 1,
      displayName: "Felecia Rower",
      about:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      photoURL: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
      status: "offline"
    },
    {
      uid: 2,
      displayName: "Adalberto Granzin",
      about:
        "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      status: "do not disturb"
    },
    {
      uid: 3,
      displayName: "Joaquina Weisenborn",
      about:
        "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
      status: "do not disturb"
    },
    {
      uid: 4,
      displayName: "Verla Morgano",
      about:
        "Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      status: "online"
    },
    {
      uid: 5,
      displayName: "Margot Henschke",
      about:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      photoURL: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
      status: "do not disturb"
    },
    {
      uid: 6,
      displayName: "Sal Piggee",
      about:
        "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      status: "online"
    },
    {
      uid: 7,
      displayName: "Miguel Guelff",
      about:
        "Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
      status: "online"
    },
    {
      uid: 8,
      displayName: "Mauro Elenbaas",
      about:
        "Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
      status: "away"
    },
    {
      uid: 9,
      displayName: "Bridgett Omohundro",
      about:
        "Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
      status: "offline"
    },
    {
      uid: 10,
      displayName: "Zenia Jacobs",
      about:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      photoURL: require("../../assets/img/portrait/small/avatar-s-10.jpg"),
      status: "away"
    }
  ],
  chats: {
    1: {
      isPinned: true,
      msg: [
        {
          textContent: "How can we help? We're here for you!",
          time: "Mon Aug 21 2020 07:45:00 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent:
            "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
          time: "Mon Aug 21 2020 07:45:23 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "It should be Bootstrap 4 compatible.",
          time: "Mon Aug 21 2020 07:45:55 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "Absolutely!",
          time: "Mon Aug 21 2020 07:46:00 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent:
            "Modern admin is the responsive bootstrap 4 admin template.!",
          time: "Mon Aug 21 2020 07:46:05 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "Looks clean and fresh UI.",
          time: "Mon Aug 21 2020 07:46:23 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "It's perfect for my next project.",
          time: "Mon Aug 21 2020 07:46:33 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "How can I purchase it?",
          time: "Mon Aug 21 2020 07:46:43 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "Thanks, from ThemeForest.",
          time: "Mon Aug 21 2020 07:46:53 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "I will purchase it for sure 👍.",
          time: "Mon Aug 21 2020 07:47:00 GMT+0000 (GMT)",
          isSent: false,
          isSeen: false
        }
      ]
    },
    2: {
      isPinned: false,
      msg: [
        {
          textContent: "Hi",
          time: "Mon Aug 21 2020 07:45:00 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "Hello. How can I help You?",
          time: "Mon Aug 22 2020 07:45:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent:
            "Can I get details of my last transaction I made last month?",
          time: "Mon Aug 22 2020 07:46:10 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent:
            "We need to check if we can provide you such information.",
          time: "Mon Aug 22 2020 07:45:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "I will inform you as I get update on this.",
          time: "Mon Aug 22 2020 07:46:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "If it takes long you can mail me at my mail address",
          time: "Mon Aug 22 2020 07:46:20 GMT+0000 (GMT)",
          isSent: true,
          isSeen: false
        }
      ]
    }
  }
}

// GET : CHATS AND CONTACTS
mock.onGet("/api/app/chat/chats").reply(() => {
  return [200, data]
})

// GET : CHAT LIST
mock.onGet("/api/app/chat/chat-contacts").reply(request => {
  const chatContactsArray = data.contacts.filter(contact => {
    if (data.chats[contact.uid]) return data.chats[contact.uid]
    else return null
  })

  return [200, chatContactsArray]
})

// POST : SEND MESSAGE
mock.onPost("api/app/chat/send-message").reply(request => {
  let reqdata = JSON.parse(request.data)
  const { contactId, message, isPinned } = reqdata
  if (data.chats[contactId]) {
    data.chats[contactId].msg.push(message)
  } else {
    let newMsg = {
      [contactId]: {
        isPinned: isPinned,
        msg: [message]
      }
    }
    Object.assign(data.chats, newMsg)
  }
  return [200]
})
mock.onPost("/api/apps/chat/mark-all-seen/").reply(request => {
  let contactId = JSON.parse(request.data).contactId

  // Get chat data
  let marked = data.chats[contactId]

  marked !== undefined &&
    marked.msg.forEach(msg => {
      msg.isSeen = true
    })

  return [200]
})
// POST : TOGGLE PINNED
mock.onPost("/api/apps/chat/set-pinned/").reply(request => {
  let { contactId, value } = JSON.parse(request.data)
  data.chats[contactId].isPinned = data.chats[contactId].isPinned = value
  return [200]
})
