import CartIcon from "./CartIcon"
import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import SearchBar from "./SearchBar"


const Header = () => {
  return (

    <header className="border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>
            TULOS
          </Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center  justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <div>
            <button className="text-sm font-semibold hover:text-darkColor hoverEffect">Login</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header