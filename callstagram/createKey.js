let i = 0;

const createKey = () => `ID-${Date.now()}-${i++}`;

export default createKey;
