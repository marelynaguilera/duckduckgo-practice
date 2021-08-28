const SimpsonsAPI = require("../helpers/simpsons-api");
let expect = require("expect.js");

describe("Test DuckDuckGo response", () => {
  it("Should prints out the URL value associated to each Icon within RelatedTopics", async () => {
    const simpsonsData = await SimpsonsAPI.getData();
    const relatedTopics = simpsonsData.RelatedTopics;
    console.log(relatedTopics);

    relatedTopics.forEach(function (relatedTopic) {
      console.log(`${relatedTopic.Icon.URL}`);
    });
  });

  it("Should Print the name of each character from the result set in a comma separated list", async () => {
    const simpsonsData = await SimpsonsAPI.getData();
    const relatedTopics = simpsonsData.RelatedTopics;

    let characters = relatedTopics.map(function (characterName) {
      return characterName.Text.split(" -")[0];
    });

    console.log(characters.join(", "));
  });

  it("Assert min_abstract_length is a number", async () => {
    const simpsonsData = await SimpsonsAPI.getData();
    const minAbstractLength = simpsonsData.meta.src_options.min_abstract_length;

    expect(minAbstractLength).to.be.a("number");
  });

  it("Assert min_abstract_length is not null", async () => {
    const simpsonsData = await SimpsonsAPI.getData();
    const minAbstractLength = simpsonsData.meta.src_options.min_abstract_length;

    console.log(minAbstractLength);
    expect(minAbstractLength).to.not.be(null);
  });
});
