"use client";
import { useState } from "react"
import Image from "next/image";
import Internship from "../ImageGallery/Internship";
export default function Experiences(){
    const [showModal , setModel ] = useState()
    return (
        <div className="min-w-full font-Kode_Mono">
           <h1 className="text-5xl text-center text-red-700 mb-6 mt-12  stroke-gray-300">Experiences</h1>
            <div className="flex flex-wrap md:space-x-5 max-lg:justify-center lg:justify-center lg:space-x-10 xl:justify-start xl:space-x-4 space-y-5 max-md:justify-center max-md:space-y-5 ">
                <div className="card card-compact  xl:w-96 max-lg:w-80 lg:w-72 md:ml-5 mt-5 shadow-xl bg-[#1D232A] text-white">
                <figure className="pt-4">
                    <img width={250} height={330} className="rounded-xl"
                    src="/tii-kittinan-pages/image/playsmart.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Internship</h2>
                    <p className="">Internship experience with playsmart iot and system company that teaches design and installation of iot systems, which has participated in making books on iot system development and has been an assistant training in iot system installation.</p>
                    <div className="card-actions justify-center">
                    
                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Show More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact  xl:w-96 max-lg:w-80 lg:w-72 md:ml-5 shadow-xl bg-[#1D232A] text-white">
                <figure className="pt-4">
                    <img width={330} height={330} className="rounded-xl"
                    src="/tii-kittinan-pages/image/projectrice.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Rice Quality Inspectione System</h2>
                    <p>Project Rice Quality Inspectione System is used to check the quality of rice by using Machine Learning and Digital image processing to work together and using a Web Application, using Django Farmwork and TailwindCSS framework to make it beautiful.</p>
                    <div className="card-actions justify-center">
                    
                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Show More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact  xl:w-96 max-lg:w-80 lg:w-72 shadow-xl bg-[#1D232A] text-white">
                <figure className="pt-4">
                    <img className="h-60 rounded-xl" 
                    src="/tii-kittinan-pages/image/HealthCalendar/calendar.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Health Manage Calendar</h2>
                    <p>Health Manage Calendar is a program that helps in allocating the user's time to make it convenient by being able to add things to the program to allocate the time.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary " onClick={()=>document.getElementById('my_modal_3').showModal()}>Show More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact  xl:w-96 max-lg:w-80 lg:w-72 shadow-xl bg-[#1D232A] text-white">
                <figure className="pt-4">
                    <Image width={330} height={330} className="rounded-xl"
                    src="/tii-kittinan-pages/image/projectclude/projectclude.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Home Loan Simulation Web Application</h2>
                    <p>Web application simulates home installments 3 years generate monthly reports on repayments, interest payments, principal payments and balance.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"  onClick={()=>document.getElementById('my_modal_4').showModal()}>Show More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact  xl:w-96 max-lg:w-80 lg:w-72 shadow-xl bg-[#1D232A] text-white">
                <figure className="pt-4">
                    <img  width={370} height={330} className="rounded-xl"
                    src="/tii-kittinan-pages/image/esp32cam/esp32cam-ml.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">ESP-32 And MACHINE LEARNING</h2>
                    <p>Project that brings hardware to work with Machine Learning by working through the ESP32-cam board to increase convenience for users in measuring productivity.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Show More</button>
                    </div>
                </div>
                </div>

</div>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box w-11/12 max-w-5xl bg-[#1D232A] text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-2xl text-center text-red-700">Internship </h1>
    <h1 className="font-bold text-xl text-center">PlaySmart IoT and Systems Company </h1>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/playsmart1.jpg" width={600} height={600} className="rounded-md"  />
    <p className="text-left">The iot project is implemented using an ESP32 board to control various iot devices. There is a web application to operate the board, which works with a Mysql database and gafana to view data through a dashboard.</p>
    </div> 
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <div className=""><Internship/></div>
    <p>Be an assistant in training the iot system, both installation and design using Board ESP32 together with playsmart iot and system company.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/platsmartbook.jpg" width={600} height={600}  />
    <p>Test, improve, and correct the code examples in the book ‘Developing IoT on ESP32 Microcontroller with MicroPython’ <br/>
    Order the book at  <a className="btn btn-outline btn-info" href="https://www.se-ed.com/product/%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2-IoT-%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B9%8C-ESP32-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%84%E0%B8%9E%E0%B8%97%E0%B8%AD%E0%B8%99.aspx?no=9786160850112">Click</a>

    </p>
    

    </div>
  </div>
</dialog>
<dialog id="my_modal_2" className="modal  ">
  <div className="modal-box w-11/12 max-w-5xl bg-[#1D232A] text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-2xl text-center text-red-700">Rice Quality Inspectione System</h1>
    <h1 className="font-bold text-xl text-center">Senior Project</h1>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/ricelogin.png" width={600} height={600} className="rounded-md"  />
    <p className="text-left">Login page to use the Web Application to check rice quality.</p>
    </div> 
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/ricesignup.jpg" width={600} height={600}  />
    <p>Registration page in order to apply for membership in use webapplication.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/ricewebhomepage.jpg" width={600} height={600}  />
    <p>Registration page in order to apply for membership in use webapplication.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/riceshowlist.jpg" width={600} height={600}  />
    <p>The page shows completed items in a table format, with a delete button and a view details button.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/ricewebshowdata.jpg" width={600} height={600}  />
    <p>The page shows all the detailed information, which tells you the size of the rice grains and also tells you the different types of rice. You can check what percentage of this type of rice is.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/ricedetect.jpg" width={600} height={600}  />
    <p>Picture of the results of successfully detaching rice grains using Yolov8 and using image processing to measure the size of rice grains. 
    </p>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <Image src="/tii-kittinan-pages/image/rice/riceposter.jpg" width={600} height={600}  />
    <p>Poster Project Rice quality inspection system.</p>
    </div>
    <div className="space-x-4">
    <a className="btn btn-outline btn-info" href="https://www.canva.com/design/DAFrCA-VtpI/ucJqw1aN9QpBXBtTks8_EA/edit?utm_content=DAFrCA-VtpI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Slide </a>
    <a className="btn btn-outline btn-info" href="https://drive.google.com/drive/folders/1JdgM3peBNAMZidzXTHQYGxviwgtFOif6?usp=sharing">Report </a>
    </div>
    

    </div>
  </div>
</dialog>
<dialog id="my_modal_3" className="modal  ">
  <div className="modal-box w-11/12 max-w-5xl bg-[#1D232A] text-white ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-2xl text-center text-red-700">Health Manage Calendar</h1>
    <h1 className="font-bold text-xl text-center">Project Advanced Computer Programming Java language</h1>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar.jpg" className="rounded-md"  />
    <p className="text-left">The home page of the Health Manage Calendar program, which has a calendar to be viewed as a ui and has a button to view what is done today and events to pre-set activities.</p>
    </div> 
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar5.jpg" className="rounded-md"  />
    <p>Setting function page where you can calculate your BMI and your own figure to manage the user's health by entering height and weight information, pressing save, and being able to set what you want to do by ticking and the program will allocate time for you.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar6.jpg" className="rounded-md"  />
    <p>The program can change the background color as the user desires.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar7.jpg" className="rounded-md"  />
    <p>To add various activities, you can go to the add activity button on the top left. When you press the button, it will display Add regularly and Add specifically Event. You can choose according to your needs.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar2.jpg" className="rounded-md"  />
    <p>It adds things that you want to do today. Users need to fill in things that they want to do. Ready to tell the time and date as desired, then press save the information.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar3.jpg" className="rounded-md"  />
    <p>A page for adding events in advance by allowing users to enter what they want to do in the event field and need to enter the time they want to do it along with the date, month and year according to E.g. Then save. 
    </p>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/HealthCalendar/calendar8.jpg" className="rounded-md"  />
    <p>Recorded events can be viewed by pressing the Today button and the Events button will bring up a window.</p>
    </div>
    <div className="space-x-4">
    <a className="btn btn-outline btn-info" href="https://docs.google.com/presentation/d/1OgddoFiPq2E9NQHEs3SflncBQDfTPsnSb3zaTQCtD64/edit#slide=id.p">Slide </a>
    <a className="btn btn-outline btn-info" href="https://github.com/Gunn-Treepaech/Project-ACP">Github Link</a>
    </div>
    

    </div>
  </div>
</dialog>
<dialog id="my_modal_4" className="modal  ">
  <div className="modal-box w-11/12 max-w-5xl bg-[#1D232A] text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-2xl text-center text-red-700">Home Loan Simulation Web Application</h1>
    <h1 className="font-bold text-xl text-center">Project Clude App</h1>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude.jpg" className="rounded-md"  />
    <p className="text-left">The home page of the web application Our Future Home will have a yellow arrow button that will lead you to it. from calculate the next part.</p>
    </div> 
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude1.jpg" className="rounded-md"  />
    <p>The From page shows home installment calculations where the user can select 4 banks, each bank has an MRR value as the bank's standard, and each bank receives API information from the Database.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude2.jpg" className="rounded-md"  />
    <p>The web application can also add up to 4 form pages to select different banks.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude3.jpg" className="rounded-md"  />
    <p>After successfully calculating the home installment, the form displays the results of the loan amount and interest payments and the remaining loan balance of each bank and has a button to show additional details.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude4.jpg" className="rounded-md"  />
    <p>The page shows all the details of the Web Application of from number one.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/projectclude/projectclude5.jpg" className="rounded-md"  />
    <p>The page shows all the details of the Web Application of from number two. 
    </p>
    <div className="space-x-4">
    <a className="btn btn-outline btn-info" href="https://www.canva.com/design/DAF-kqRzmuY/5NWAyX3Prsfz19RLp48Y5A/edit">Slide </a>
    <a className="btn btn-outline btn-info" href="https://github.com/Gunn-Treepaech/Project_Cloud_App_2023">Github Link</a>
    </div>
    

    </div>
  </div>
</dialog>
<dialog id="my_modal_5" className="modal  ">
  <div className="modal-box w-11/12 max-w-5xl bg-[#1D232A] text-white ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-2xl text-center text-red-700">ESP-32 And MACHINE LEARNING</h1>
    <h1 className="font-bold text-xl text-center">Wireless Personal Area Networks Project</h1>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/esp32cam/esp32cam-ml1.jpg" className="rounded-md"  />
    <p className="text-left">How to connect the ESP32 CAM circuit to the FT232RL FTDI 3.3V 5.5V USB to TTL Serial Adapter so that the device can be connected to the computer via UART communication.</p>
    </div> 
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/esp32cam/esp32cam-ml2.jpg" className="rounded-md"  />
    <p>The power supply module will be used to provide electrical power to the FT232RL and ESP32-CAM boards. When upload is complete, the code will be displayed videocall.</p>
    </div>
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <img src="/tii-kittinan-pages/image/esp32cam/esp32cam-ml3.jpg" className="rounded-md"  />
    <p>When trying to use it together with MACHINE LEARNING, it can be checked. and measure the amount of output obtained.</p>
    </div>
    
    
    <div className="justify-center flex flex-col items-center space-y-4 mt-5">
    <div className="space-x-4">
    <a className="btn btn-outline btn-info" href="https://www.canva.com/design/DAFytnNNnCA/69Y1JNFmQKpUU79uK7wDKA/edit">Slide </a>
    </div>
    

    </div>
  </div>
</dialog>

        </div>
    )
}