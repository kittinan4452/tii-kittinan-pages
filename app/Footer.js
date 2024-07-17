import { faFacebook, faGithub, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function(){
    return (
        <div id="contact" className="bg-[#181818] py-10">
            <footer className="footer  text-neutral-content items-center p-4 mx-auto  max-w-screen-xl font-Kode_Mono">
  <aside className="grid-cols-1 items-center">
  
    <div className="flex space-x-3">
    <FontAwesomeIcon icon={faCode} className="w-8"   /> 
    <p className="text-2xl">RESUME KITTINAN © {new Date().getFullYear()} </p>
    </div>
    <div className="pl-12">
    <div className="flex items-end space-x-2 text-xl max-md:text-base"><h1 className="">email: </h1><span>kittinan4452@gmail.com</span></div>
    <div className="flex items-end space-x-2 text-xl max-md:text-base"><h1 className="">Phone:</h1><span>064-843-3150</span></div>
    
    </div>
  </aside>
  <nav className="flex flex-wrap md:place-self-center md:justify-self-end max-md:justify-center ">
  <a href="https://github.com/kittinan4452" className="btn btn-outline">
    <FontAwesomeIcon icon={faGithub} className="w-8"   /> 
    </a>
  <a href="https://www.youtube.com/@tiigamingth945" className="btn btn-outline">
    <FontAwesomeIcon icon={faYoutube} className="w-8"   /> 
    </a>
    <a href="https://www.instagram.com/tii_kittinan/" className="btn btn-outline">
    <FontAwesomeIcon icon={faInstagram} className="w-8"   /> 
    </a>
    <a href="https://www.facebook.com/profile.php?id=100006484345238" className="btn btn-outline">
    <FontAwesomeIcon icon={faFacebook} className="w-8"   /> 
    </a>
  </nav>
</footer>
        </div>
    )
}