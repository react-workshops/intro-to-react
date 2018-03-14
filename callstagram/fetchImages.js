import store from "./store";

const fetchImages = async () => {
  try {
    let response = await fetch(
      "https://dog.ceo/api/breed/retriever/golden/images"
    );
    let responseJson = await response.json();
    const images = responseJson.message;
    store.dispatch({
      type: "DOGGIE_DELIVERY",
      images
    });
  } catch (e) {
    console.error(e);
  }
};

export default fetchImages;
