'use client';
import { useAccount } from '../../../../../context/account';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AptApplication from '../../../components/application';

export default function Application() {

    /*function showToastErrMessage() {
      toast.error("Something went wrong, try again.", {
        data: {
          title: "Error toast.",
          text: "This is an error message",
        }
      });
    };
  
    function showToastSuccess() {
      toast.success("Success.. redirecting to account.", {
        data: {
          title: "Success toast.",
          text: "This is a success message",
        }
      });
    };
  */
    const { isLoggedIn } = useAccount();

    return (
        <div>
            {isLoggedIn ?
                <AptApplication />
                :
                <div>
                    <h1>Please login to apply</h1>
                </div>
            }
        </div>


    );
}