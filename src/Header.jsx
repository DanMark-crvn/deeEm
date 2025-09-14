const Header = ({navlinks}) => {

  const linkedInTool = navlinks.allIcons.otherTools.find(tool => tool.name === "LinkedInIcon");

    return ( 
        <header className="bg-gray-700 shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 pl-7 md:pl-12 md:px-5 lg:pl-0 lg:px-0 flex justify-between items-center">
            {/* <h1 className="text-xl font-bold text-gray-800">Dee-Em</h1> */}
            <a href="/" className="text-xl font-bold !text-gray-200 text-shadow-lg/100 ">{navlinks.logo}</a >
            <nav className="m-4 flex justify-around items-center">
              {/* <a href="/" className="text-lg font-bold">Dee-Em</a > */}
              <div className="flex gap-6 items-center">
                <a href={navlinks.linkedin} target="_blank" rel="noopener noreferrer"><img className="w-12 shadow-2xl/90 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1" src={linkedInTool?.url} alt="Linkedin" /></a>
                <a href="/Dan Mark Caravana -CV.pdf" download="Dan Mark Caravana-CV.pdf"  className="no-underline">
                  <div className="flex items-center text-center p-2.5 rounded bg-gray-900 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
                    <i className='bxr  bx-folder-down-arrow text-3xl text-gray-200'  ></i> 
                  </div>
                </a>
              </div>
           </nav>
          </div>
        </header>
     );
}
 
export default Header;