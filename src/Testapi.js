import { Link } from "react-router-dom";
import React, {Component} from "react";
import axios from "axios";

class Testapi extends Component{
    state ={
        name:'',
        lastname:'',
        email:'',
        password:'',
    }
    handleInput =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });

    }

    SaveStudent = async (e)=>{
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);
        if(res.data.status===200){
            console.log(res.data.message);
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
            })

        }
    }
    
    render(){

   
        return(
            <>
                <div calssName="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        Add Student
                                        <Link to="/" className="btn btn-primary btn-sm float-end">Add student </Link>
                                    </h4>
                                </div> 
                                <div className="card-body">
                                    <form onSubmit={this.SaveStudent}>
                                        <div className="form-group mb-3">
                                            <lable>Student Name</lable>
                                            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <lable>Student Lastname</lable>
                                            <input type="text" name="lastname"  onChange={this.handleInput} value={this.state.lastname} className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <lable>Student email</lable>
                                            <input type="text" name="email"  onChange={this.handleInput} value={this.state.email} className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <lable>Student password</lable>
                                            <input type="text" name="password"  onChange={this.handleInput} value={this.state.password} className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            
                                        <button type="submit" className="btn btn-primary">Save student</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        ) 
    }
}
export default Testapi;