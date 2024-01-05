class AuthenticationSystem {
    constructor() {
      // Private variable to store user credentials
      this._userCredentials = {};
    }
  
    // Method to register a new user
    register(username, password) {
      if (this._userCredentials.hasOwnProperty(username)) {
        return "Username already exists. Please choose a different one.";
      }
  
      // Store the user credentials securely
      this._userCredentials[username] = password;
      return "Registration successful. You can now log in.";
    }
  
    // Method to check if a user exists and the provided password is correct
    login(username, password) {
      if (!this._userCredentials.hasOwnProperty(username)) {
        return "User not found. Please register before logging in.";
      }
  
      if (this._userCredentials[username] === password) {
        return "Login successful. Welcome back!";
      } else {
        return "Incorrect password. Please try again.";
      }
    }
  
    // Method to reset a user's password
    resetPassword(username, newPassword) {
      if (!this._userCredentials.hasOwnProperty(username)) {
        return "User not found. Password reset failed.";
      }
  
      // Reset the user's password
      this._userCredentials[username] = newPassword;
      return "Password reset successful. You can now log in with your new password.";
    }
  }
  
  // Example usage:
  
  // Creating an instance of the AuthenticationSystem class
  const authSystem = new AuthenticationSystem();
  
  // Registering a new user
  console.log(authSystem.register("user123", "password123"));
  
  // Logging in with correct credentials
  console.log(authSystem.login("user123", "password123"));
  
  // Logging in with incorrect password
  console.log(authSystem.login("user123", "wrongpassword"));
  
  // Resetting the password
  console.log(authSystem.resetPassword("user123", "newpassword123"));
  
  // Logging in with the new password
  console.log(authSystem.login("user123", "newpassword123"));
  