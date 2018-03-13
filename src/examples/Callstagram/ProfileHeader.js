import React from "react";

const ProfileHeader = ({
  user = {
    nickname: "matzatorski",
    profilePictureUrl:
      "https://scontent-waw1-1.cdninstagram.com/vp/b7b1e59762008d4eb8480f23dcd0f6b9/5B3DBA3E/t51.2885-19/s150x150/16789212_597361510462253_3703803964404269056_a.jpg"
  }
}) => (
  <div style={styles.container}>
    {user.profilePictureUrl && (
      <img style={styles.profilePic} src={user.profilePictureUrl} />
    )}
    <div style={styles.userInfoContainer}>
      <p style={styles.nickname}>{user.nickname ? `@${user.nickname}` : ""}</p>
      <p style={styles.location}>San Francisco, California</p>
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    padding: "8px 0px 16px 16px",
    alignItems: "center"
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: "50%"
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 8
  },
  nickname: {
    fontWeight: 600,
    fontSize: 14
  },
  location: {
    fontSize: 12
  }
};

export default ProfileHeader;
