let i = 0;

import createKey from "./createKey";

const fetchImages = async store => {
  let response = await fetch(
    "https://dog.ceo/api/breed/retriever/golden/images"
  );
  let responseJson = await response.json();
  const images = responseJson.message;
  return images.map(image => ({
    key: createKey(),
    image
  }));
};

export default fetchImages;
