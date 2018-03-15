let i = 0;

const fetchImages = async store => {
  let response = await fetch(
    "https://dog.ceo/api/breed/retriever/golden/images"
  );
  let responseJson = await response.json();
  const images = responseJson.message;
  return images.map(image => ({
    key: `ID-${Date.now()}-${i++}`,
    image
  }));
};

export default fetchImages;
