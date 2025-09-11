const Header = ({navlinks}) => {
    return ( 
        <header className="">
          <nav className="m-4 flex justify-around items-center">
            <a href="/" className="text-lg font-bold">Dee-Em</a >
            <div className="flex gap-6 items-center">
              <a href={navlinks.linkedin} target="_blank" rel="noopener noreferrer"><img className="w-12" src="./src/assets/logos/linkedin.png" alt="Linkedin" /></a>
              <a href={navlinks.indeed} className="bg-white rounded"><img className="w-12" src="./src/assets/logos/indeed.png" alt="Indeed" /></a>
              <a href={navlinks.jobstreet} target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-1 rounded"><img className="w-44 p-1" src="./src/assets/logos/jobstreet.png" alt="Jobstreet" /></a>
              <a href="https://danmark-crvn.github.io/myPortfolio/" target="_blank" rel="noopener noreferrer">Old portfolio</a>
            </div>

          </nav>
        </header>
     );
}
 
export default Header;