import {Component} from "react";
export default class B_classcomponent extends Component{
    constructor(){
        super()
        this.user={
            username:"indhuja",
            userage:21
        }
    }
    render(){
        return(
            <>
            <div>
                <div className="text-center h2 text-primary">User Details</div>
            </div>
            <div className="mt-4 text-center h2 text-danger">
                <div>
                    <span>USER NAME:</span>
                    <span>{this.user.username}</span>
                </div>
                <div>
                    <span>USER AGE:</span>
                    <span>{this.user.userage}</span>
                </div>
            </div>
            </>

        )
    }
}