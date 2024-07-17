import { faBootstrap, faCss3, faCss3Alt, faDocker, faGithub, faHtml5, faJava, faJs, faLaravel, faNodeJs, faPhp, faPython, faReact, faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iconnext from "../icon/Iconnext";
import Icontailwind from "../icon/Icontailwind";
import Iconmysql from "../icon/Iconmysql";
import Icondjango from "../icon/Icondjango";
import Iconflask from "../icon/Iconflask";
import Iconfirebase from "../icon/Iconfirebase";
import Iconpostgresql from "../icon/Iconpostgrespql";
import Iconpostman from "../icon/Iconpostman";
import Icondialogflow from "../icon/Icondialogflow";


export default function Skills(){
    return(
        <div className=" min-w-full mt-12 font-Kode_Mono">
                <h1 className=" text-center text-5xl text-red-700">Skills</h1>
                <div className="max-md:flex max-md:flex-wrap   justify-between  mt-9 max-md:space-y-7 ">
                    <div className="  max-md:flex max-md:flex-wrap md:grid md:grid-cols-2  max-md:space-y-7">
                        <div className="flex flex-col space-y-4 items-center w-full ">
                            <h1 className="text-2xl text-center text-white">Fornt-end</h1>
                            <div className="space-x-3 flex flex-wrap justify-center text-white">
                            <FontAwesomeIcon size="xs" icon={faHtml5} className="w-10"   /> 
                            <FontAwesomeIcon icon={faCss3Alt} className="w-10"   /> 
                            <FontAwesomeIcon icon={faJs} className="w-10"   /> 
                            <FontAwesomeIcon icon={faReact} className="w-10"   />
                            <Iconnext/> 
                            <Icontailwind/>
                            <FontAwesomeIcon icon={faBootstrap} className="w-10"   /> 
                            
                            </div>
                            <div className="space-x-2 flex flex-wrap justify-center text-white">
                                <span>HTML,</span>
                                <span>CSS,</span>
                                <span>JavaScript,</span>
                                <span>React.js,</span>
                                <span>Next.js,</span>
                                <span>TailwindCSS,</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                    
                    
                        <div className="flex flex-col space-y-4 items-center w-full">
                            <h1 className="text-2xl text-center text-white">Back-end</h1>
                            <div className="space-x-3 flex flex-wrap justify-center text-white ">
                            <FontAwesomeIcon size="xs" icon={faPython} className="w-10"   /> 
                            <FontAwesomeIcon icon={faPhp} className="w-10"   /> 
                            <FontAwesomeIcon icon={faJava} className="w-10"   /> 
                            <FontAwesomeIcon icon={faLaravel} className="w-10"   /> 
                            <FontAwesomeIcon icon={faNodeJs} className="w-10"   />
                            <Icondjango/> 
                            <Iconflask/>
                            
                            
                            </div>
                            <div className="space-x-2 flex flex-wrap justify-center text-white">
                                <span>Python,</span>
                                <span>PHP,</span>
                                <span>Java,</span>
                                <span>Laravel,</span>
                                <span>Nodejs,</span>
                                <span>Django,</span>
                                <span>flask,</span>
                            </div>
                        
                    
                    </div>
                    </div>
                    <div className=" max-md:flex max-md:flex-wrap md:grid md:grid-cols-2 max-md:space-y-7">
                        <div className="flex flex-col space-y-4 items-center w-full">
                        <h1 className="text-2xl text-center text-white">Database</h1>
                            <div className="space-x-3 flex flex-wrap justify-center text-white">
                            <Iconmysql/>
                            <Iconfirebase/>
                            <Iconpostgresql/>
                            
                            </div>
                            <div className="space-x-2 flex flex-wrap justify-center text-white">
                                <span>Mysql,</span>
                                <span>Firebase,</span>
                                <span>Postgresql</span>
                                
                            </div>
                        </div>
                    
                    
                        
                        <div className="flex flex-col space-y-4 items-center w-full text-white">
                        <h1 className="text-2xl text-center text-white">Tool</h1>
                            <div className="space-x-3 flex flex-wrap justify-center">
                            <FontAwesomeIcon size="xs" icon={faDocker} className="w-10"   />
                            <Iconpostman/> 
                            <Icondialogflow/>
                            <FontAwesomeIcon icon={faGithub} className="w-10"   /> 
                            <FontAwesomeIcon icon={faUbuntu} className="w-10"   /> 
                            
                            
                            </div>
                            <div className="space-x-2 flex justify-center flex-wrap">
                                <span>Docker,</span>
                                <span>Postman,</span>
                                <span>Dialogflow,</span>
                                <span>Github,</span>
                                <span>Ubunto</span>
                                
                            </div>
                        </div>
                  

                    
        </div>
        </div>
        </div>
    )
}