class User {
  constructor(login, password, email, displayName){
    this.login = login
    this.password = password
    this.email = email
    this.displayName = displayName
    this.createdAt = this.editedAt = new Date()
    this.permissions = ['USER']
  }
}

export default User