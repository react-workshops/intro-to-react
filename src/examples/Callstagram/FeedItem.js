import React from "react";

// import ProfileHeader from "./ProfileHeader";

// import { Text, View, Image, StyleSheet } from "react-native";
import { View, Image } from "react-native";

import connect from "./connect";
import FeedItemLikeButton from "./FeedItemLikeButton";

const FeedItemFull = ({ id, image }) =>
  id && (
    <View style={{}}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
      <FeedItemLikeButton id={id} />
    </View>
  );

const FeedItem = connect(FeedItemFull, (store, props) => {
  const item = store.items.find(i => i.id === props.id);
  if (!item) {
    return { id: null };
  }
  return { id: item.id, image: item.image };
});

//     <ProfileHeader user={undefined} />
//     <img style={styles.image} src={item} alt="dog" />
//     <div style={styles.photoInfoContainer}>
//       <h4>{item.title || "Golden retriever"}</h4>
//       <button style={styles.likeButton} onClick={() => console.log("Pressed")}>
//         ❤ Like
//       </button>
//     </div>
//   </div>

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     width: 600,
//     backgroundColor: "#fff",
//     marginBottom: 24,
//     padding: "16px 0px 8px 0px",
//     border: "1px solid #e2e2e2",
//     borderRadius: 4
//   },
//   image: {
//     width: "100%",
//     objectFit: "contain",
//     alignSelf: "center"
//   },
//   photoInfoContainer: {
//     padding: 16
//   },
//   likeButton: {
//     display: "inline-block",
//     borderRadius: 4,
//     backgroundColor: "#dc1c45",
//     border: "none",
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 16,
//     padding: 8,
//     width: 100,
//     cursor: "pointer",
//     margin: "16px 0px 0px 0px"
//   }
// };

export default FeedItem;
