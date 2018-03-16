import fetchImages from "./fetchImages";

jest.mock("./createKey");

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(url => {
    if (url !== "https://dog.ceo/api/breed/retriever/golden/images") {
      return Promise.resolve({ ok: true, json: () => ({}) });
    }
    var p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        json: () => {
          return {
            message: ["http://imageURL", "http://imageURL2"]
          };
        }
      });
    });

    return p;
  });
});

test("fetchImages", async () => {
  const images = await fetchImages();
  expect(images.length).toEqual(2);
  expect(images[0]).toEqual({
    key: "TestID",
    image: "http://imageURL"
  });
});
