if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    characterSelected: function () {
      return Session.get("selectedCharacter") != null;
    },
    campaignSelected: function () {
      return Session.get("selectedCampaign") != null;
    },
    characters: [ {name:"char1", class:"class1", level:"1"},
                  {name:"char2", class:"class2", level:"2"},
                  {name:"char3", class:"class3", level:"3"}
    ],
    campaigns: [ {name:"campaign1", numCharacters:"1", isDM:"false"},
                  {name:"campaign2", numCharacters:"2", isDM:"true"},
                  {name:"campaign3", numCharacters:"3", isDM:"false"}
    ]

  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
