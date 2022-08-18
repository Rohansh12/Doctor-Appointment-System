import React, { useEffect , useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import AdDashboard from '../../pages/dashboard/AdDashboard';
import Innerhtml from '../../pages/Homepage/Innerhtml';

const AdminDoctor = () => {
    const navigate = useNavigate();
    const [docUser, setdocUser] = useState();
    const user = async () => {
        try {
            const res = await Axios.get('/admin/doctors')
            setdocUser(res.data)
        }catch (e) {
            navigate('/admin')
        }
        
    }

    const mainid = async (mainid) => {
        const deleteappoint = await Axios.delete(`/admin/delete/doctor/${mainid}`);
        const message = JSON.stringify(deleteappoint.data);
        console.log(message);
        console.log(mainid);
        // console.log(id);
        if (message === '{"message":"Doctor Deleted"}') {
          toast.success("Doctor deleted successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      };
      const refreshPage = ()=>{
        setInterval(()=>{
          window.location.reload();
        },1000)
      }

    useEffect(() => {
        user();
    }, []);
    return (
        <>
        <Innerhtml/>

            <AdDashboard/>
            <div className="l-form">
                <form className="form tableappoint">
                    <table class="table align-middle" id="tablechanges">
                        <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Doctor Email</th>
                                <th scope="col">Specialization</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        {docUser?.map((element, id) => {
                            return (
                                <tbody>
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{element.firstname} {element.lastname}</td>
                                        <td>{element.email}</td>
                                        <td>{element.specialization}</td>
                                        <td>{element.address}</td>
                                        <td>{element.phone}</td>
                                        <td>
                                            <button type="button" class="btn btn-danger btn-sm px-3" onClick={() => {
                                                mainid(element._id);
                                                refreshPage();
                                                }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-trash-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </form>
            </div>
      <ToastContainer />
        </>
    )
}

export default AdminDoctor
