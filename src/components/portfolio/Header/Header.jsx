
const Header = () => {
  const user = {
    name: "John Doe",
    title: "Frontend Developer",
    avatar: "/images/avatar.jpg", // Replace with your image path or URL
    description: "Passionate about building user-friendly interfaces and modern web experiences.",
    location: "San Francisco, CA",
    email: "john@example.com",
  }

  return (
    <header className="portfolio-header">
      <div className="avatar-section">
        <img src={user.avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="info-section">
        <h1>{user.name}</h1>
        <h2>{user.title}</h2>
        <p>{user.description}</p>
        <div className="contact">
          <span>{user.location}</span> · <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
    </header>
  )
}

export default Header
