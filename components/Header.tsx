import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"


const Header = () => {
  return (

    <header className="border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <Logo />
        <div>
          right
        </div>
      </Container>
    </header>
  )
}

export default Header