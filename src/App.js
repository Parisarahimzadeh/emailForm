import 'bootstrap/dist/css/bootstrap.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const sendEmail =(e)=>{
      e.preventDefault();
      emailjs.sendForm('service_28a7sn9','template_y9noo36', e.target, 'r27zIRD8DHSDQ-MWC')
      .then(reuslt =>{
         if(reuslt.status == 200){
            toast.success("پیام شما با موفقیت ارسال شد.",{position:'top-left', closeOnClick:true})
         }
      },(error)=>{
         console.log(error)
      });
   }
  return (
    <div className="container py-5">
        <div className="row py-5 justify-content-center">
            <div className="col-md-4 bg-white p-5 ">
                <h2 className='mt-3 mb-4 pb-5 text-center'> ارسال پیام</h2>  
                  <form onSubmit={sendEmail}>
                     <div className="form-group">
                        <input type="text" name="name" className="form-control p-3" placeholder="نام شما"/>
                     </div>
                     <div className="form-group">
                        <input type="email" name="emaill" className="form-control p-3" placeholder="ایمیل شما"/>
                     </div>
                     <div className="form-group">
                        <textarea name="message" className="form-control p-3" placeholder="پیام شما"></textarea>
                     </div>
                     <div className="form-group">
                        <button type="submit" className="btn btn-success p-3 w-100 text-white mt-2"> ارسال</button>
                     </div>
                  </form>
            </div>  
        </div> 
        <ToastContainer />     
    </div>
  );
}

export default App;
