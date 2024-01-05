class SocialMediaProfile {
    constructor(username, bio = "") {
      // Private variables to store user profile information
      this._username = username;
      this._bio = bio;
      this._posts = [];
      this._friends = [];
    }
  
    // Getter method to retrieve the username
    get username() {
      return this._username;
    }
  
    // Getter method to retrieve the bio
    get bio() {
      return this._bio;
    }
  
    // Method to update the user's bio
    updateBio(newBio) {
      this._bio = newBio;
      return "Bio updated successfully.";
    }
  
    // Method to add a post to the user's profile
    addPost(postContent) {
      const post = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
      };
      this._posts.push(post);
      return "Post added successfully.";
    }
  
    // Method to view all posts on the user's profile
    viewPosts() {
      return this._posts.map((post) => `${post.timestamp}: ${post.content}`);
    }
  
    // Method to add a friend to the user's friends list
    addFriend(friendUsername) {
      if (this._friends.includes(friendUsername)) {
        return `${friendUsername} is already in your friends list.`;
      }
  
      this._friends.push(friendUsername);
      return `${friendUsername} added to your friends list.`;
    }
  
    // Method to view the user's friends list
    viewFriends() {
      return this._friends;
    }
  }
  
  // Example usage:
  
  // Creating an instance of the SocialMediaProfile class
  const userProfile = new SocialMediaProfile("JohnDoe", "Web Developer");
  
  // Updating the user's bio
  console.log(userProfile.updateBio("Software Engineer"));
  
  // Adding a post to the user's profile
  console.log(userProfile.addPost("Just started a new project!"));
  
  // Viewing all posts on the user's profile
  console.log(userProfile.viewPosts());
  
  // Adding a friend to the user's friends list
  console.log(userProfile.addFriend("JaneSmith"));
  
  // Viewing the user's friends list
  console.log(userProfile.viewFriends());
  