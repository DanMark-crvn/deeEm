const Header = ({navlinks}) => {
    return ( 
        <header className="bg-gray-700 shadow">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* <h1 className="text-xl font-bold text-gray-800">Dee-Em</h1> */}
            <a href="/" className="text-xl font-bold !text-gray-200 text-shadow-lg/100 ">{navlinks.logo}</a >
            <nav className="m-4 flex justify-around items-center">
              {/* <a href="/" className="text-lg font-bold">Dee-Em</a > */}
              <div className="flex gap-6 items-center">
                <a href={navlinks.linkedin} target="_blank" rel="noopener noreferrer"><img className="w-12 shadow-2xl/90 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1" src="./public/assets/logos/linkedin.png" alt="Linkedin" /></a>
                <a href={navlinks.indeed} className="bg-white rounded shadow-2xl/90 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"><img className="w-12" src="./public/assets/logos/indeed.png" alt="Indeed" /></a>
                <a href={navlinks.jobstreet} target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-1 rounded shadow-2xl/90 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"><img className="w-44 p-1" src="./public/assets/logos/jobstreet.png" alt="Jobstreet" /></a>
                <a href="/public/Dan Mark Caravana -CV.pdf" download  className="no-underline">
                  <div className="flex items-center text-center p-2 rounded bg-gray-900 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
                    <i class='bxr  bx-folder-down-arrow text-3xl text-gray-200'  ></i> 
                  </div>
                </a>
              </div>
           </nav>
          </div>
        </header>
     );
}
 
export default Header;